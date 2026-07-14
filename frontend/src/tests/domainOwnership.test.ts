import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');

describe('domain ownership', () => {
  it('keeps first-party and AI provider domains separate', () => {
    const firstPartyFiles = [
      '.github/ISSUE_TEMPLATE/bug_report.yml',
      'README.md',
      'README_EN.md',
      'docs/quickstart.mdx',
      'docs/zh/quickstart.mdx',
      'skills/banana-cli/references/setup.md',
    ];

    for (const relativePath of firstPartyFiles) {
      const content = fs.readFileSync(path.join(repoRoot, relativePath), 'utf8');
      expect(content, relativePath).toContain('bananaslides.online');
      const contentWithoutProviderLinks = content.replace(/api\.inferera\.com/gi, '');
      expect(contentWithoutProviderLinks.toLowerCase(), relativePath).not.toContain('inferera.com');
    }

    const providerExamples = [
      '.env.example',
      'docs/configuration.mdx',
      'docs/zh/configuration.mdx',
    ];

    for (const relativePath of providerExamples) {
      const content = fs.readFileSync(path.join(repoRoot, relativePath), 'utf8');
      expect(content, relativePath).toContain('https://api.inferera.com');
    }
  });
});
