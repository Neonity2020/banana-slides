[//]: # "Banana Slides is an AI-native PPT generation app for creating editable presentations from ideas, outlines, documents, images, and custom templates. Features: prompt-to-slide generation, template control, material parsing, conversational editing, PPTX export, project history, and reproducible workflows. Quick Start / Install / Usage / Demo / API / Deploy / Architecture / Test / Screenshot guides are provided for local Docker deployment and online use."
<div align="center">

<p>
  <img src="https://github.com/user-attachments/assets/81fe6816-44cc-4c61-97c7-f3c099650966" alt="Banana Slides" width="860">
</p>
<p>
  <a href="https://trendshift.io/repositories/22056" target="_blank">
    <img src="https://trendshift.io/api/badge/repositories/22056" alt="Anionex%2Fbanana-slides | Trendshift" width="265" height="58">
  </a>
  <br>
  <a href="https://hellogithub.com/repository/Anionex/banana-slides" target="_blank">
    <img src="https://abroad.hellogithub.com/v1/widgets/recommend.svg?rid=c8a0ee51918e4353af08012b8472b85e&claim_uid=CtDTm2jbUHhVGBr&theme=neutral" alt="Featured｜HelloGitHub" width="265" height="58">
  </a>
</p>
<p>
  <a href="#-项目缘起"><b>简体中文</b></a>
  &nbsp;•&nbsp;
  <a href="README_EN.md"><b>English</b></a>
</p>
<p>
  <a href="https://github.com/Anionex/banana-slides/stargazers"><img src="https://img.shields.io/github/stars/Anionex/banana-slides?style=flat-square&color=FFD700" alt="GitHub Stars"></a>
  <a href="https://github.com/Anionex/banana-slides/network"><img src="https://img.shields.io/github/forks/Anionex/banana-slides?style=flat-square&color=FFD700" alt="GitHub Forks"></a>
  <a href="https://github.com/Anionex/banana-slides/watchers"><img src="https://img.shields.io/github/watchers/Anionex/banana-slides?style=flat-square&color=FFD700" alt="GitHub Watchers"></a>
  <a href="https://github.com/Anionex/banana-slides"><img src="https://img.shields.io/badge/version-v0.9.0-44cc11?style=flat-square" alt="Version"></a>
  <a href="https://github.com/Anionex/banana-slides/blob/main/LICENSE"><img src="https://img.shields.io/github/license/Anionex/banana-slides?color=0055aa&style=flat-square" alt="License"></a>
  <br>
  <img src="https://img.shields.io/badge/Docker-Build-4A90D9?logo=docker&logoColor=white&style=flat-square" alt="Docker Build">
  <a href="https://deepwiki.com/Anionex/banana-slides"><img src="./assets/badge-deepwiki-flat.svg" alt="Ask DeepWiki"></a>
</p>

<p>
  <b>An AI-native PPT generation application based on nano banana pro 🍌</b><br>
  <b>Go from idea to presentation in minutes—no tedious formatting, just conversational editing. Step into the world of "Vibe PPT".</b>
</p>
<p>
  <a href="https://bananaslides.online/"><b>🚀 Online Demo</b></a>
  &nbsp;|&nbsp;
  <a href="https://docs.bananaslides.online/"><b>📖 Documentation</b></a>
  &nbsp;|&nbsp;
 <a href="https://github.com/Anionex/banana-slides#-%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95"><b>Deployment</b></a>
</p>
<p>
  If this project is helpful to you, please <b>Star 🌟</b> & <b>Fork 🍴</b>
</p>

</div>

## 🔥 Latest Updates

- **[2026-06-23]**: Page-by-page templates launched — supports both single and multi-template modes; allows uploading images or PDFs to build a project template library. AI automatically parses template styles and provides one-click smart matching for each page, or manual binding page by page; supports seamless two-way switching between both modes ([Documentation](https://docs.bananaslides.online/zh/features/templates))
- **[2026-04-25]**: Asset Toolbox launched — adds three new modes: Full-image Editing, Selection Editing (overlay/replace), and AI Eraser to the existing asset generation; unified entry point for one-stop operations.
- **[2026-04-25]**: Supports account binding via official OpenAI OAuth. Once bound, Codex can be used directly as the text/image generation provider without manually entering API Keys. Plus accounts can generate 100+ 2K images every five hours ([Tutorial](https://ziy68cvfvu3.feishu.cn/wiki/LDSOwPzkhiNonkkNTF1ct2VBnNc)) (Based on official OpenAI OAuth PKCE authorization flow, non-reverse engineered).
- **[2026-04-25]**: Supports saving custom text style description templates; can be named, color-coded, and persistently reused, eliminating the need to re-enter every time.
- **[2026-04-23]**: Added support for the gpt-image-2 model. Editable background effects during export have also improved due to upgraded model capabilities (Select "Generative Fetching" under Settings - Export Options - Background Fetching).
- **[2026-04-11]**: Supported [CLI operations and added agent skills](https://docs.bananaslides.online/cli).
- **[2026-03]**: Added several features and optimizations, such as extra fields, multi-aspect ratio settings, etc.
- **[2026-02-09]**: New Features and Optimizations
  * New Features
    * Supports pasting images into the home page, outline, and description cards for immediate recognition, providing a better interactive experience.
    * Manual Outline Editing: Supports manually adjusting the section (part) a page belongs to.
    * Multi-architecture Docker: Image supports amd64 / arm64 builds.
    * Internationalization + Dark Mode: Added Chinese/English switching; supports light/dark/system theme synchronization; full component adaptation for Dark Mode.
  * Fixes and Experience Optimizations
    * Fixed export-related 500 errors, reference file association timing, outline/page data misalignment, task polling errors for specific projects, infinite polling in description generation, image preview memory leaks, and partial failure handling for batch deletion.
    * Optimized format example prompts, HTTP error message copy, Modal closing experience, old project localStorage cleanup, and removed redundant prompts during initial project creation.
    * Miscellaneous other optimizations and fixes.

## ✨ Project Origin

Have you ever found yourself in this predicament: your presentation is tomorrow, yet your slides are still blank; your mind is full of brilliant ideas, but your enthusiasm is drained by tedious typesetting and design?

We all long to quickly create presentations that are both professional and well-designed. While traditional AI PPT generation apps generally meet the need for "speed," they still suffer from the following issues:

- 1️⃣ Only preset templates are available, with no flexibility to adjust styles
- 2️⃣ Low degree of freedom, making iterative changes difficult
- 3️⃣ Similar visual results with serious homogenization
- 4️⃣ Low-quality assets that lack relevance
- 5️⃣ Disconnected layout of text and images, resulting in poor design quality

These shortcomings make it difficult for traditional AI PPT generators to simultaneously satisfy our dual needs for "speed" and "aesthetics." Even those claiming to be "Vibe PPT" fall far short of being truly "Vibe" in my eyes.

However, the emergence of the nano banana🍌 model has changed everything. I tried using 🍌pro to generate PPT pages and found that the results were exceptional in terms of quality, aesthetics, and consistency. It can almost perfectly render all the text requested in the prompts while following the style of reference images. So, why not build a native "Vibe PPT" application based on 🍌pro?

## 👨‍💻 Applicable Scenarios

1. **Beginners**: Quickly generate aesthetic PPTs with zero barrier to entry and no design experience, reducing the hassle of choosing templates.
2. **PPT Professionals**: Reference AI-generated layouts and combinations of graphic and text elements to quickly gain design inspiration.
3. **Educators**: Quickly convert teaching content into illustrated lesson plan PPTs to enhance classroom effectiveness.
4. **Students**: Quickly complete presentation assignments, focusing energy on content rather than layout and aesthetics.
5. **Professionals**: Rapidly visualize business proposals and product introductions with quick adaptation across multiple scenarios.

<p>
  <b>🎯Goal: Lower the barrier to PPT creation, enabling everyone to quickly create aesthetic and professional presentations.</b>
</p>

## 🎨 Result Examples

<div align="center">

| | |
|:---:|:---:|
| <img src="https://github.com/user-attachments/assets/d58ce3f7-bcec-451d-a3b9-ca3c16223644" width="500" alt="案例3"> | <img src="https://github.com/user-attachments/assets/c64cd952-2cdf-4a92-8c34-0322cbf3de4e" width="500" alt="案例2"> |
| **Software Development Best Practices** | **DeepSeek-V3.2 Technical Showcase** |
| <img src="https://github.com/user-attachments/assets/383eb011-a167-4343-99eb-e1d0568830c7" width="500" alt="案例4"> | <img src="https://github.com/user-attachments/assets/1a63afc9-ad05-4755-8480-fc4aa64987f1" width="500" alt="案例1"> |
| **R&D and Industrialization of Intelligent Production Line Equipment for Prepared Dishes** | **The Evolution of Money: A Journey from Shells to Paper Currency** |

</div>

See more in <a href="https://github.com/Anionex/banana-slides/issues/2" > Use Cases </a>

## 🎯 Features

### 1. Flexible and Diverse Creation Paths

Supports three starting modes: **Idea**, **Outline**, and **Page Description**, catering to different creative habits.
- **One-sentence generation**: Input a topic, and AI automatically generates a well-structured outline and page-by-page content descriptions.
- **Natural language editing**: Supports modifying outlines or descriptions via natural language (e.g., "Change page 3 to a case study"), with AI adjusting in real-time.
- **Outline/Description mode**: Supports both one-click batch generation and manual fine-tuning of details.
- **Reliable Markdown import**: The import pop-up provides a preview of the recognized page count before execution, preventing confusion about successful appending when formatting issues occur.

<img width="2000" height="1125" alt="image" src="https://github.com/user-attachments/assets/7fc1ecc6-433d-4157-b4ca-95fcebac66ba" />

### 2. Powerful Asset Parsing Capabilities

- **Multi-format Support**: Upload files such as PDF, Docx, MD, Txt, etc., and the system will automatically parse the content in the background.
- **Intelligent Extraction**: Automatically identify key points, image links, and chart information within the text to provide rich materials for generation.
- **Automatic Image Storage**: Images extracted from documents are automatically added to the project asset library once the reference files are associated with the project, allowing for direct reuse later.
- **Style Reference**: Support for uploading reference images or templates to customize the PPT style.

<img width="1920" height="1080" alt="File Parsing and Asset Processing" src="https://github.com/user-attachments/assets/8cda1fd2-2369-4028-b310-ea6604183936" />

### 3. "Vibe"-style Natural Language Modification

No longer limited by complex menu buttons, issue modification commands directly through **natural language**.
- **In-painting**: Make verbal modifications to unsatisfactory areas (e.g., "Change this chart to a pie chart").
- **Page-wide Optimization**: Generate high-definition, stylistically consistent pages based on nano banana pro🍌.

<img width="2000" height="1125" alt="image" src="https://github.com/user-attachments/assets/929ba24a-996c-4f6d-9ec6-818be6b08ea3" />

### 4. Out-of-the-box Format Export

- **Multi-format Support**: One-click export to standard **PPTX** or **PDF** files.
- **Playback Settings**: Enable page transition animations before exporting to PPTX. Supports classic effects such as Fade, Push, Wipe, Split, Blinds, Checkerboard, Clock, etc., with the option to select multiple effects for random application.
- **Export File Management**: The preview page lists files already exported on the server side, allowing you to download them directly or delete files no longer needed. Export task history is isolated by project for cleanup to prevent accidental deletion of other project records. If a backend task becomes unavailable after refreshing, the task panel clearly displays a failure and prompts for re-export.
- **Clearer Page Selection Export**: Page selection export now prompts the status of missing images based on the current selection range; unselected draft pages will not cause the export entry for selected completed pages to gray out. Narrated videos will only include pages without images if the placeholder frame option is explicitly checked.
- **Perfect Fit**: Default 16:9 aspect ratio, no secondary layout adjustments required, ready for direct presentation.

<img width="1000" alt="image" src="https://github.com/user-attachments/assets/3e54bbba-88be-4f69-90a1-02e875c25420" />
<img width="1748" height="538" alt="PPT and PDF Export" src="https://github.com/user-attachments/assets/647eb9b1-d0b6-42cb-a898-378ebe06c984" />

### 5. Fully Editable PPTX Export (Beta Iteration)

- **Export images to high-fidelity, clean-background PPT pages with freely editable images and text**
- See related updates at https://github.com/Anionex/banana-slides/issues/121
<img width="1000"  alt="image" src="https://github.com/user-attachments/assets/a85d2d48-1966-4800-a4bf-73d17f914062" />

### 6. One-click Export of Explainer Videos

- **One-click conversion of slides into explainer videos (MP4) with AI voiceovers and subtitles**
- AI automatically generates spoken-style narrations based on page descriptions and content
- Supports configuration of multiple expression styles, multiple languages, and various voice options

<br>

**🌟 Comparison with NotebookLM Slide Deck features**
| Feature | NotebookLM | This Project | 
| --- | --- | --- |
| Page Limit | 15 pages | **Unlimited** | 
| Secondary Editing | Prompt-based modifications | **Selection editing + Verbal editing** |
| Asset Addition | Cannot add after generation | **Add freely after generation** |
| Export Formats | Supports PDF, (Non-editable image) PPTX | **Export as PDF, (Image or Editable) PPTX, Explainer Video** |
| Watermark | Watermarked in free version | **No watermark, freely add/remove elements** |

> Note: As new features are added, this comparison may become outdated

## 🗺️ Roadmap

| Status | Milestone |
| --- | --- |
| ✅ Completed | Create PPT from three paths: ideas, outlines, and page descriptions |
| ✅ Completed | Parse Markdown-formatted images in text |
| ✅ Completed | Add more assets to a single PPT slide |
| ✅ Completed | Vibe verbal editing for selected areas on a single slide |
| ✅ Completed | Asset module: Asset generation, uploading, etc. |
| ✅ Completed | Support uploading and parsing of multiple file types |
| ✅ Completed | Support Vibe verbal adjustment of outlines and descriptions |
| ✅ Completed | Preliminary support for exporting editable .pptx files |
| 🔄 In Progress | Support exporting editable .pptx with multi-layer and precise background removal |
| 🔄 In Progress | Web search |
| 🔄 In Progress | Agent mode |
| ✅ Completed | TTS narration video export (Chinese/English/Japanese multiple voices, subtitles) |
| 🚍 Partial | Optimize frontend loading speed |
| 🧭 Planned | Online playback feature |
| 🧭 Planned | Simple animations and page transition effects |
| 🚍 Partial | Multi-language support |
| |

## 📦 Usage

### (New) One-click deployment using application templates

This is the simplest method; there is no need to install Docker or download the project. You can access the application directly after creation.


1. One-click deployment and startup via Rainyun (High bandwidth, suitable for HD image generation and downloading. Free trial available for new users)
- [Image and Text Tutorial](https://ziy68cvfvu3.feishu.cn/wiki/B5RIwg3OUiCfo9kyadzcR9CInnc?from=from_copylink)

[![Deploy on Rainyun with one click](https://rainyun-apps.cn-nb1.rains3.com/materials/deploy-on-rainyun-cn.svg)](https://app.rainyun.com/apps/rca/store/7549/anionex_)

2. Coming soon

### Using Docker Compose🐳

Quickly start front-end and back-end services using Docker Compose.

<details>
  <summary>📒 Instructions for Windows/Mac Users</summary>

If you are using **Windows or macOS**, please [install **Docker Desktop**](https://docs.docker.com/desktop/setup/install/windows-install/) first and ensure Docker is running (on Windows, check the system tray icon; on macOS, check the menu bar icon). Then follow the same steps as in the documentation.

> **Tip**: If you encounter issues, Windows users should enable the **WSL 2 backend** in Docker Desktop settings (recommended). Also, ensure that ports **3011** and **5011** are not in use.

</details>

0. **Clone the code repository**
```bash
git clone https://github.com/Anionex/banana-slides
cd banana-slides
```

1. **Configure environment variables**

Create the `.env` file (refer to `.env.example`):
```bash
cp .env.example .env
```

**(Optional, you can also configure it in the user interface after startup, [click here for the tutorial](https://ziy68cvfvu3.feishu.cn/wiki/GiNawdmpiinSRqkGspocqEWAnkh?from=from_copylink ))** Edit the `.env` file to configure the necessary environment variables:

<details>
<summary>Click to expand details</summary>
  
> **The LLM interface in this project follows the AIHubMix platform format. It is recommended to use [AIHubMix (click here to access)](https://aihubmix.com/?aff=17EC) to obtain API keys and reduce migration costs.**<br>
> **Friendly reminder: The Google Nano Banana Pro model interface costs are relatively high. Please be mindful of usage costs.**
```env

# AI Provider Configuration Format (gemini / openai / volcengine / vertex)

AI_PROVIDER_FORMAT=gemini

# Gemini Format Configuration (Used when AI_PROVIDER_FORMAT=gemini)

GOOGLE_API_KEY=your-api-key-here
GOOGLE_API_BASE=https://generativelanguage.googleapis.com

# Proxy Example: https://aihubmix.com/gemini

# OpenAI Format Configuration (Used when AI_PROVIDER_FORMAT=openai)

OPENAI_API_KEY=your-api-key-here
OPENAI_API_BASE=https://api.openai.com/v1

# Proxy Example: https://aihubmix.com/v1

# Volcengine Ark AgentPlans Configuration (Used when AI_PROVIDER_FORMAT=volcengine)

VOLCENGINE_API_KEY=your-volcengine-api-key-here
VOLCENGINE_API_BASE=https://ark.cn-beijing.volces.com/api/v3

# Vertex AI Configuration (AI_PROVIDER_FORMAT=vertex)

# GCP Project and Service Account Key Required

# VERTEX_PROJECT_ID=your-gcp-project-id

# VERTEX_LOCATION=global

# GOOGLE_APPLICATION_CREDENTIALS=./gcp-service-account.json

# Lazyllm Format Configuration (Used when AI_PROVIDER_FORMAT=lazyllm)

# Select Vendors for Text and Image Generation

TEXT_MODEL_SOURCE=deepseek        # Text generation model provider
IMAGE_MODEL_SOURCE=doubao         # Image editing model provider
IMAGE_CAPTION_MODEL_SOURCE=qwen   # Image captioning model provider

# API Keys for Various Providers (Only configure the ones you want to use)

DOUBAO_API_KEY=your-doubao-api-key            # Volcengine/Doubao
DEEPSEEK_API_KEY=your-deepseek-api-key        # DeepSeek
QWEN_API_KEY=your-qwen-api-key                # Alibaba Cloud/Qwen
GLM_API_KEY=your-glm-api-key                  # Zhipu GLM
SILICONFLOW_API_KEY=your-siliconflow-api-key  # SiliconFlow
SENSENOVA_API_KEY=your-sensenova-api-key      # SenseNova
MINIMAX_API_KEY=your-minimax-api-key          # MiniMax
...
```

> Banana Slides explicitly packages the LazyLLM online provider SDKs used by domestic vendors:
> `volcengine-python-sdk[ark]` for Doubao, `dashscope` for Qwen/Wanxiang, and `zhipuai` for GLM/Zhipu.
> LazyLLM also exposes `lazyllm install online-advanced`, but the PyPI wheel may not publish that group as a standard install extra, so Docker/prebuilt images rely on these explicit dependencies instead.
  
</details>


**Use the new editable export configuration method to achieve better editable export results**: You need to obtain an API KEY from the [Baidu AI Cloud Platform](https://console.bce.baidu.com/iam/#/iam/apikey/list) (click here to enter) and fill it in the `BAIDU_API_KEY` field in the `.env` file (there is an ample free usage quota). See the instructions in https://github.com/Anionex/banana-slides/issues/121 for details.


<details>
  <summary>📒 Vertex AI Configuration Guide (for GCP Users)</summary>

Google Cloud Vertex AI allows calling Gemini models via GCP service accounts, and new users can use free trial credits. Configuration steps:

1. Go to the [GCP Console](https://console.cloud.google.com/), create a service account, and download the JSON key file.
2. Save the key file as `gcp-service-account.json` in the project root directory.
3. Set the following in `.env`:
   ```env
   AI_PROVIDER_FORMAT=vertex
   VERTEX_PROJECT_ID=your-gcp-project-id
   VERTEX_LOCATION=global
   ```
4. If using Docker deployment, you also need to uncomment the relevant lines in `docker-compose.yml` to mount the key file into the container and set the `GOOGLE_APPLICATION_CREDENTIALS` environment variable.

> The `gemini-3-*` series models require `VERTEX_LOCATION=global`.

</details>

2. **Start the Service**

**⚡ Using Pre-built Images (Recommended)**

The project provides pre-built frontend and backend images on Docker Hub (synchronized with the latest version of the main branch), allowing you to skip local build steps and achieve rapid deployment:

```bash

# Start with Pre-built Images (No Need to Build from Scratch)

```bash
docker compose -f docker-compose.prod.yml up -d
```

Image names:
- `anoinex/banana-slides-frontend:latest`
- `anoinex/banana-slides-backend:latest`

After startup, you can go to **Settings → About → Check for Updates** within the application. The application will determine if an update is available based on the current version SHA; when running from source code, the current Git SHA will also be used for determination.

**Build images from scratch**

```bash
docker compose up -d
```


> [!TIP]
> If you encounter network issues, you can uncomment the mirror source configurations in the `.env` file and then rerun the startup command:
> ```env
> # Uncomment the following in the .env file to use domestic mirror sources
> DOCKER_REGISTRY=docker.1ms.run/
> GHCR_REGISTRY=ghcr.nju.edu.cn/
> APT_MIRROR=mirrors.aliyun.com
> PYPI_INDEX_URL=https://mirrors.cloud.tencent.com/pypi/simple
> NPM_REGISTRY=https://registry.npmmirror.com/
> ```


3. **Accessing the Application**

- Frontend: http://localhost:3011
- Backend API: http://localhost:5011

4. **View Logs**

```bash

```

# View Backend Logs (Last 200 Lines)

docker logs --tail 200 banana-slides-backend

# View Backend Logs in Real-time (Last 100 Lines)

docker logs -f --tail 100 banana-slides-backend

# View Frontend Logs (Last 100 Lines)

docker logs --tail 100 banana-slides-frontend
```

5. **Stop Services**

```bash
docker compose down
```

6. **Update Project**

**Using Pre-built Images (docker-compose.prod.yml)**

You can also go to **Settings → About → Check for Updates** within the application to see if a new version is available.

```bash
docker compose -f docker-compose.prod.yml pull
docker compose -f docker-compose.prod.yml up -d
```

**Using Local Build (docker-compose.yml)**

Note: If you have manually modified the code, this method is not applicable; you need to revert the code to the version it was when pulled first.

```bash
git pull 
docker compose down
docker compose build --no-cache
docker compose up -d
```

**Note: Thanks to our excellent developer friend [@ShellMonster](https://github.com/ShellMonster/) for providing the [Newbie Deployment Tutorial](https://github.com/ShellMonster/banana-slides/blob/docs-deploy-tutorial/docs/NEWBIE_DEPLOYMENT.md). It is specifically designed for beginners with no server deployment experience. You can [click the link](https://github.com/ShellMonster/banana-slides/blob/docs-deploy-tutorial/docs/NEWBIE_DEPLOYMENT.md) to view it.**

### Deploy from Source

#### Environment Requirements

- Python 3.10 or higher
- [uv](https://github.com/astral-sh/uv) - Python package manager
- Node.js 16+ and npm
- [FFmpeg](https://ffmpeg.org/) - Required for lecture video export, and must include `libass` / `ass` subtitle filter support
- A valid Google Gemini API key
- (Optional) [LibreOffice](https://www.libreoffice.org/) - Required for uploading PPTX files using the "PPT Remake" feature to convert PPTX to PDF. **It is recommended to convert PPTX to PDF locally before uploading.** Reason: LibreOffice may cause layout displacement during server-side rendering due to missing fonts (such as Microsoft YaHei, Calibri, etc.) and cannot fully restore some special effects. LibreOffice is not required if you upload PDF files. Docker users who still need to support PPTX uploads within the container can run:
  ```bash
  docker exec -it banana-slides-backend bash -c "apt-get update && apt-get install -y libreoffice-impress && rm -rf /var/lib/apt/lists/*"
  ```
  > Note: LibreOffice installed this way will be lost when the container is rebuilt and must be reinstalled.

#### Backend Installation

0. **Clone the code repository**
```bash
git clone https://github.com/Anionex/banana-slides
cd banana-slides
```

1. **Install uv (if not already installed)**
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

2. **Install dependencies**

Run the following in the project root directory:
```bash

# macOS (Homebrew)

brew install ffmpeg-full
brew unlink ffmpeg 2>/dev/null || true
brew link --overwrite --force ffmpeg-full

# Ubuntu / Debian

sudo apt-get update
sudo apt-get install -y ffmpeg libass9

# Then install Python dependencies

uv sync
```

This will automatically install all dependencies based on `pyproject.toml`.

3. **Configure Environment Variables**

Copy the environment variable template:
```bash
cp .env.example .env
```

# Then, following the previously mentioned method, open and edit the `.env` file to configure your API key

# Project Title

A brief description of the project.

## Features

- **High Performance**: Optimized for speed and efficiency.
- **Easy to Use**: Simple configuration and clear documentation.
- **Cross-Platform**: Compatible with Windows, macOS, and Linux.

## Getting Started

### Prerequisites

Ensure you have the following software installed on your machine:

*   [Python 3.8+](https://www.python.org/downloads/)
*   [Git](https://git-scm.com/)
*   [Node.js](https://nodejs.org/)

### Installation

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/username/project-name.git
    cd project-name
    ```

2.  **Install Dependencies**
    Using `npm`:
    ```bash
    npm install
    ```
    Or using `pip`:
    ```bash
    pip install -r requirements.txt
    ```

### Running the Application

Start the project by running the following command:
```bash
npm start
```
Now, you can open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Documentation

For more detailed information, please refer to the [Wiki](https://github.com/username/project-name/wiki).

## Contributing

Contributions are welcome! Please read the [Contributing Guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the [MIT License](LICENSE).

---

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/username/project-name)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

#### Frontend Installation

1. **Navigate to the frontend directory**
```bash
cd frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure API Address**

The frontend will automatically connect to the backend service specified by `BACKEND_PORT` via the Vite proxy (default: `http://localhost:5011`). To modify this, please set `BACKEND_PORT` in the `.env` file at the project root.

#### Start Backend Service

> (Optional) If you have important local data, it is recommended to back up the database before upgrading:  
> `cp backend/instance/database.db backend/instance/database.db.bak`
> Note: Under the default configuration, templates, assets, and finished products are all located in the `uploads/` folder.

```bash
cd backend
uv run alembic upgrade head && uv run python app.py
```

The backend service will start at `http://localhost:5011`.

Access `http://localhost:5011/health` to verify that the service is running correctly.

#### Start Frontend Development Server

```bash
cd frontend
npm run dev
```

The frontend development server will start at `http://localhost:3011`.

Open your browser to access and use the application.

## 🛠️ Technical Architecture

### Frontend Technology Stack

React 18 + TypeScript + Vite 5 + Zustand

### Backend Tech Stack

Python 3.10+ + Flask 3.0 + uv + SQLite

## Community Groups

Feel free to suggest new features or provide feedback, and I will also answer your questions ~~at my own pace~~.

<img width="312" alt="image" src="https://github.com/user-attachments/assets/e5e48e68-8ed8-4889-9fed-60ffbb7523f9" />

Feel free to follow the author's social media, where I will share information about this project and AI:

<p>
  <a href="https://x.com/anion_ex"><img src="https://img.shields.io/badge/X-@anion__ex-000000?style=flat-square&logo=x&logoColor=white" alt="X (Twitter)"></a>
  <a href="https://www.xiaohongshu.com/user/profile/62e8f580000000001902fc9d"><img src="https://img.shields.io/badge/小红书-Anion-FF2442?style=flat-square&logo=xiaohongshu&logoColor=white" alt="小红书"></a>
  <a href="https://space.bilibili.com/477162339"><img src="https://img.shields.io/badge/Bilibili-Anion-00A1D6?style=flat-square&logo=bilibili&logoColor=white" alt="Bilibili"></a>
</p>

## **🔧 Frequently Asked Questions**

See the [official documentation](https://docs.bananaslides.online/zh/faq)

Alternatively, you can ask questions directly on DeepWiki 
<a href="https://deepwiki.com/Anionex/banana-slides"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"></a>

## 🤝 Contributing Guide

Contributions to this project are welcome via
[Issue](https://github.com/Anionex/banana-slides/issues)
and
[Pull Request](https://github.com/Anionex/banana-slides/pulls)!

> **Important:** Please read [CONTRIBUTING.md](CONTRIBUTING.md) before contributing

## 📄 License

This project is open-sourced under the **GNU Affero General Public License v3.0 (AGPL-3.0)** and is free for non-commercial purposes such as personal study, research, experimentation, education, or non-profit scientific research activities;

For questions or cooperation opportunities, please contact: davidyang042@gmail.com



<h2>🚀 Sponsor </h2>
<br>
<div align="center">
<a href="https://aihubmix.com/?aff=17EC">
  <img src="./assets/logo_aihubmix.png" alt="AIHubMix" style="height:48px;">
</a>
<p>Thanks to AIHubMix for sponsoring this project</p>
</div>


<div align="center">
<a href="中文链接">
    <img src="./assets/huoshan.png" alt="Volcengine" width="150"/ >
    <p>Thanks to <strong>Volcengine</strong> for sponsoring this project<br>
      Ark Agent Plan limited-time 75% off subscription, <a href="https://www.volcengine.com/activity/ai618?utm_campaign=hw&utm_content=hw&utm_medium=devrel_tool_web&utm_source=OWO&utm_term=banana-slides">click the link to buy now</a></p>
</a>
</div>

<!-- Note: Use this version for the English README: -->
<!--
<div align="center">
<a href="英文链接">
    <img src="./assets/byteplus.png" alt="BytePlus" width="150"/ >
    <p> Thanks to Dola seed for sponsoring this project! Register via <a href="https://www.byteplus.com/en/product/modelark?utm_campaign=hw&utm_content=banana-slides&utm_medium=devrel_tool_web&utm_source=OWO&utm_term=banana-slides">this link</a> to get 500,000 tokens of free inference quota per model. </p>
</a>
</div>
-->


<div align="center">

 <br>

<a href="https://api.chatfire.site/login?inviteCode=A15CD6A0"><img width="200" alt="image" src="https://github.com/user-attachments/assets/d6bd255f-ba2c-4ea3-bd90-fef292fc3397" />
</a>

Thanks to AI Huobao for sponsoring this project
 
</div>

## Acknowledgements

- Project Contributors:

[![Contributors](https://contrib.rocks/image?repo=Anionex/banana-slides)](https://github.com/Anionex/banana-slides/graphs/contributors)

- [Linux.do](https://linux.do/): A new ideal community

## Sponsorship

Open source is not easy 🙏 If this project is valuable to you, feel free to buy the developer a coffee ☕️

<img width="240" alt="image" src="https://github.com/user-attachments/assets/fd7a286d-711b-445e-aecf-43e3fe356473" />

Thanks to the following friends for their generous support of this project:
> @雅俗共赏, @曹峥, @以年观日, @John, @胡yun星Ethan, @azazo1, @刘聪NLP, @🍟, @苍何, @万瑾, @biubiu, @law, @方源, @寒松Falcon, @刘星宇&小陀螺AIGC
> If you have any questions regarding the sponsorship list, please <a href="mailto:davidyang042@gmail.com">contact the author</a>

## 📈 Project Statistics

<a href="https://www.star-history.com/#Anionex/banana-slides&type=Timeline&legend=top-left">

 <picture>

   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=Anionex/banana-slides&type=Timeline&theme=dark&legend=top-left" />

   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=Anionex/banana-slides&type=Timeline&legend=top-left" />

   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=Anionex/banana-slides&type=Timeline&legend=top-left" />

 </picture>

</a>

<br>
