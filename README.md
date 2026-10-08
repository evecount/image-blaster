<img width="960" height="540" alt="image-blaster-1" src="https://github.com/user-attachments/assets/d294e420-eb48-4f00-b6a8-13005442d1a8" />

## `image-blaster` (Universal Edition)
Creates 3D environments, SFX, and meshes from a single image using **Google Gemini**, **Claude**, **Google Veo**, **World Labs**, **Google Imagen 3**, **Nano Banana**, and **FAL**.

Can take you from an image to a fully meshed 3D environment in < 5 minutes, great for jumpstarting 3D work. Go full blast.

---

## Acknowledgments & Origin

`image-blaster` was originally created by **[Neilson Koerner-Safrata](https://github.com/neilsonnn)** ([original repository](https://github.com/neilsonnn/image-blaster)).

This edition builds upon Neilson's disk-first generation architecture, generalizing it into a **Universal Multi-Model World-Synthesis Engine**:
- **Dual Agent Workflows:** Compatible with both **Google Antigravity** (`.agents/skills`) and **Claude Code** (`.claude/skills`).
- **Director / Multimodal Reasoning:** Supports **Google Gemini 2.0 / Omni** (with native 2D spatial bounding box grounding) alongside Claude 3.7/3.5 Sonnet and GPT-4o.
- **Clean Plates & Inpainting:** Supports **Google Imagen 3**, **Nano Banana 2**, and **GPT-Image-2**.
- **Static World Generation:** Supports **World Labs** (`marble-1.1` Gaussian Splats), **Google Veo** (orbital camera flythroughs reconstructed into 3DGS), and **Google Photorealistic 3D Tiles**.
- **Dynamic 3D Assets:** Supports **Hunyuan 3D v3**, **Microsoft Trellis**, and **Meshy**.
- **Audio & Soundscapes:** Supports **ElevenLabs SFX** and **Google DeepMind Audio**.

---

## Quickstart

### Option 1: In Antigravity / Gemini IDE
1. Clone this repository into your workspace:
   ```bash
   git clone https://github.com/evecount/image-blaster.git
   ```
2. Copy `.env.example` to `.env` and add your API keys:
   - `GEMINI_API_KEY` (for Gemini Multimodal Director & Spatial Grounding)
   - `WORLD_LABS_API_KEY` (for World Labs Gaussian Splat generation)
   - `FAL_KEY` (for Hunyuan 3D, Nano Banana, ElevenLabs SFX)
   - Optional: `GOOGLE_CLOUD_PROJECT` / Vertex AI credentials for Google Imagen 3 and Veo.
3. Drop your starting image into `input/`.
4. Ask your Antigravity agent: *"blast the image in input/ and confirm each step with me"*.

### Option 2: In Claude CLI
1. Open a Terminal and enter `cd image-blaster`
2. Run `claude` (install with `curl -fsSL https://claude.ai/install.sh | bash`)
3. Provide your API keys and ask Claude: `blast it and confirm each step with me`.

---

### Description

By default `image-blaster` will use your input image to create:

1. **3D models** (`.glb`, `.obj`) of all *dynamic* objects
2. **Gaussian splat** (`.spz`) of the *static* environment
3. **Ambient looping sound** and object-specific physics SFX (`.mp3`)
4. **Interactive Viewer:** Explorable via the built-in React + Three.js viewer (`app/`)

### Extensions

You can embed `image-blaster` outputs under the assets of *any game engine, DCC software, or web app*:

1. Unity, Unreal, or Godot game engine
2. Blender, 3DS Max, Maya, or other DCC software
3. Three.js web app or Electron app

---

## Model Providers & Pipeline

IMAGE-BLASTER uses a modular provider pipeline:

| Stage | Default Provider | Alternate Providers |
| :--- | :--- | :--- |
| **Director / Vision Survey** | `gemini-2.0-flash` / Claude | `gpt-4o` |
| **Clean Plate Inpainting** | `nano-banana-2` (FAL) | `imagen-3-edit` (Google), `gpt-image-2` |
| **Static World Splat** | `marble-1.1` (World Labs) | `veo-orbit-splat` (Google Veo), Google 3D Tiles |
| **3D Object Meshes** | `hunyuan-3d` (FAL) | `trellis-3d`, `meshy-3d` |
| **Audio & SFX** | `elevenlabs-sfx` (FAL) | Google AudioLM / DeepMind Audio |

### 3D Model Parameters (Hunyuan)

- `--face-count <40000-1500000>`: target face count. IMAGE-BLASTER defaults to `50000`; Hunyuan's API default is `500000`.
- `--enable-pbr true|false`: enable PBR material generation. Defaults to `true`.
- `--generate-type Normal|LowPoly|Geometry`: `Normal` creates a textured model, `LowPoly` applies polygon reduction, and `Geometry` creates a white geometry-only model. Defaults to `Normal`.
- `--polygon-type triangle|quadrilateral`: polygon type for `LowPoly`. Defaults to `triangle`.

---

## Development

- The local viewer runs on Vite + React + Three.js inside [`app/`](./app).
- Start the viewer locally with:
  ```bash
  cd app && npm install && npm run dev
  ```
