# IMAGE-BLASTER: Universal Spatial Experience Platform
## Strategic Vision & Product Roadmap

---

## 1. Executive Summary

`image-blaster` evolves from a developer CLI tool into an **Interactive Spatial Experience Platform**—an open-source web portal where users can step inside iconic cultural moments, explore real-world digital twins, and experience immersive brand activations directly in the browser via WebGL/WebGPU.

---

## 2. Core Experience Pillars

### Pillar A: Cinematic Immersion ("Step Inside the Frame")
Curated explorable 3D environments from iconic cinema history:
- **2001: A Space Odyssey** — *The Monolith at the Dawn of Man*: Desert rock cliffs, towering pitch-black monolith slab, scattered bone props, Ligeti avant-garde choral hum and desert wind.
- **Interstellar** — *The 5D Tesseract*: Recursive lattice bookshelf structures, floating books, dust gravity anomalies, ticking second hand, Hans Zimmer organ pulse.
- **The Shining** — *The Overlook Hotel Corridor*: Symmetrical hallway with the iconic hexagonal pattern carpet, Danny's red tricycle, faint echoes of 1920s ballroom jazz.
- **Blade Runner 2049** — *Wallace Corp Boardroom*: Minimalist concrete sanctuary with water caustic lighting reflections, sub-bass synth drones.

### Pillar B: Commercial Spaces & Cultural Digital Twins
High-fidelity virtual twins of memorable physical locations:
- **90s Nostalgic Diner / McDonald's**: Classic booths, counter, vintage packaging, sizzle and ambient chatter.
- **Victorian Grand Library**: Towering spiral bookcases, green banker's lamps, stained glass, gentle rain audio.
- **Interactive Spatial Storefronts**: Low-cost 3D pop-ups where clicking props opens direct checkout.

### Pillar C: Startup Activation & Product Launchpad
The "Interactive Pitch Deck" for founders and creators:
- **Founder's Holo-Chamber**: Explorable 3D room with the product prototype floating on a pedestal.
- **Interactive Easter Eggs**: Founder audio notes, interactive product roadmap cards, customer testimonials.
- **Zero-Barrier Access**: Runs in any modern mobile or desktop browser via WebGL without VR headsets or downloads.

---

## 3. Universal Multi-Model Architecture

| Stage | Default Provider | Alternate Providers |
| :--- | :--- | :--- |
| **Director / Spatial Reasoning** | `gemini-2.0-flash` / Claude | `gpt-4o` |
| **Clean Plate Inpainting** | `nano-banana-2` (FAL) | `imagen-3-edit` (Google), `gpt-image-2` |
| **Static World Splat** | `marble-1.1` (World Labs) | `veo-orbit-splat` (Google Veo), Google 3D Tiles |
| **Dynamic 3D Assets** | `hunyuan-3d` (FAL) | `trellis-3d`, `meshy-3d` |
| **Audio & SFX** | `elevenlabs-sfx` (FAL) | Google DeepMind Audio / AudioLM |

---

## 4. Current Repository State

- **World Staged**: `loft-studio` (warm attic creative studio with Edison bulbs and plants).
- **Scene Analysis**: Fully surveyed in `worlds/loft-studio/image.json`.
- **Candidate Props**: Armchair with cushions, side table, bowl, potted plant, vintage fan.
- **Viewer Status**: Local dev server running on `http://localhost:5173/loft-studio`.
- **GitHub Pages Pipeline**: Configured via `.github/workflows/deploy-pages.yml` for automated deployment to `https://evecount.github.io/image-blaster/`.
