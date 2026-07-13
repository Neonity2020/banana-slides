import { test, expect } from '@playwright/test'
import { createServer, type Server } from 'http'
import * as fs from 'fs'
import * as path from 'path'

const FRONTEND_DIR = process.cwd().endsWith('frontend')
  ? process.cwd()
  : path.join(process.cwd(), 'frontend')
const FIXTURES = path.join(FRONTEND_DIR, 'e2e', 'fixtures')
const RESPONSE_IMAGE = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==',
  'base64',
)

test.describe('OpenAI native multi-reference generation', () => {
  test.skip(
    process.env.RUN_OPENAI_MULTI_REFERENCE_E2E !== '1',
    'Requires an isolated backend because it temporarily replaces image provider settings.',
  )

  let fakeOpenAI: Server | undefined

  test.afterEach(async () => {
    if (fakeOpenAI) {
      await new Promise<void>((resolve, reject) => {
        fakeOpenAI!.close((error) => error ? reject(error) : resolve())
      })
      fakeOpenAI = undefined
    }
  })

  test('sends the template and every description image to images.edit', async ({ page, request }) => {
    test.setTimeout(120_000)
    let receivedReferenceCount = 0

    fakeOpenAI = createServer((req, res) => {
      const chunks: Buffer[] = []
      req.on('data', (chunk) => chunks.push(Buffer.from(chunk)))
      req.on('end', () => {
        const body = Buffer.concat(chunks).toString('latin1')
        receivedReferenceCount = (
          body.match(/name="image(?:\[\])?"/g) || []
        ).length
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({
          data: [{ b64_json: RESPONSE_IMAGE.toString('base64') }],
        }))
      })
    })
    await new Promise<void>((resolve) => fakeOpenAI!.listen(0, '127.0.0.1', resolve))
    const address = fakeOpenAI.address()
    if (!address || typeof address === 'string') throw new Error('Fake OpenAI server did not start')

    const settingsResponse = await request.put('/api/settings', {
      data: {
        ai_provider_format: 'openai',
        image_model_source: 'openai',
        image_model: 'gpt-image-2',
        image_api_key: 'e2e-test-key',
        image_api_base_url: `http://127.0.0.1:${address.port}/v1`,
        openai_image_api_protocol: 'images',
        image_resolution: '1K',
      },
    })
    expect(settingsResponse.ok()).toBe(true)

    const projectResponse = await request.post('/api/projects', {
      data: {
        creation_type: 'idea',
        idea_prompt: 'multi-reference e2e',
        template_style: 'clean geometric style',
      },
    })
    expect(projectResponse.ok()).toBe(true)
    const projectId = (await projectResponse.json()).data.project_id

    const pageResponse = await request.post(`/api/projects/${projectId}/pages`, {
      data: {
        order_index: 0,
        outline_content: { title: 'Reference Test' },
      },
    })
    expect(pageResponse.ok()).toBe(true)
    const pageId = (await pageResponse.json()).data.page_id

    const fixtureNames = ['slide_1.jpg', 'slide_2.jpg', 'slide_3.jpg']
    const fixtureBuffers = fixtureNames.map((name) => fs.readFileSync(path.join(FIXTURES, name)))

    const templateResponse = await request.post(`/api/projects/${projectId}/template`, {
      multipart: {
        template_image: {
          name: fixtureNames[0],
          mimeType: 'image/jpeg',
          buffer: fixtureBuffers[0],
        },
      },
    })
    expect(templateResponse.ok()).toBe(true)

    const materialUrls: string[] = []
    for (let index = 1; index < fixtureBuffers.length; index++) {
      const uploadResponse = await request.post(`/api/projects/${projectId}/materials/upload`, {
        multipart: {
          file: {
            name: fixtureNames[index],
            mimeType: 'image/jpeg',
            buffer: fixtureBuffers[index],
          },
        },
      })
      expect(uploadResponse.ok()).toBe(true)
      materialUrls.push((await uploadResponse.json()).data.url)
    }

    const descriptionResponse = await request.put(
      `/api/projects/${projectId}/pages/${pageId}/description`,
      {
        data: {
          description_content: {
            text: [
              `![first material](${materialUrls[0]})`,
              `![second material](${materialUrls[1]})`,
              'Use both supplied materials in the template style.',
            ].join('\n'),
          },
        },
      },
    )
    expect(descriptionResponse.ok()).toBe(true)

    await page.addInitScript((id) => {
      localStorage.setItem('hasSeenHelpModal', 'true')
      localStorage.setItem('currentProjectId', id)
    }, projectId)
    await page.goto(`/project/${projectId}/preview`)

    const generateButton = page.getByRole('button', { name: /批量生成图片|Generate Images/i })
    await expect(generateButton).toBeVisible()
    await generateButton.click()

    const confirmOneK = page.getByRole('button', { name: /仍然生成|Generate Anyway/i })
    if (await confirmOneK.isVisible()) await confirmOneK.click()

    await expect.poll(() => receivedReferenceCount, { timeout: 60_000 }).toBe(3)
    await expect(page.locator('main img[src*="/pages/"]')).toBeVisible({ timeout: 60_000 })
  })
})
