# Rishi Naskar — the scroll-driven universe

The landing route is one continuous camera journey. The document scrolls; a
single fixed WebGL canvas holds the whole universe; both are driven by the same
0..1 progress value, so the wires converge, the black hole forms, the camera
falls through it and the multiverse opens up as one uninterrupted shot.

## Where to edit what

**Copy and links — one place each**

- `src/lib/journey.ts` — every phase: its headline, kicker, body lines, weight
  (how much scroll it gets) and the camera keyframes. Changing a weight
  re-times the journey; the phase blocks and the camera stay in sync
  automatically because the keyframes are written in phase-local terms.
- `src/lib/projects.ts` — the showcase projects (titles, categories, years,
  descriptions, placeholder images, modal detail lines) plus the filter groups.
- `src/lib/links.ts` — **live contact details** (email, phone, WhatsApp, LinkedIn, Instagram) plus the `mailto:` / `tel:` / `wa.me` helpers. Everything reads from here.
- `src/components/About.tsx` — the bio, the facts grid and the three
  disciplines with their skill lists.
- `src/components/Contact.tsx` — the closing pitch and the contact rows (each row is a real link that hands off to the visitor's own app).

**Your portrait**

Drop your photo at `public/portrait.png` (transparent background works best).
It becomes the 3D plane at the start of the journey, with the neural filaments
rooted at the crown of the head. Until the file exists, a procedural mind core
stands in — no code change needed either way.

**Theme**

`src/index.css` holds the palette: near-black `#04050c` base, electric blue
`#5aa9ff` for every action, violet and amber reserved for the scene. Component
three.js colours live in `src/three/glsl.ts` (`SCENE_COLORS`) and in each layer's
uniform defaults.

## How the experience is built

| Piece | File | Notes |
| --- | --- | --- |
| Scroll → progress, pointer, quality budget | `src/components/JourneyDriver.tsx` | One rAF loop. Writes into the store; never re-renders React while scrolling. |
| The store the scene reads | `src/lib/journey-store.ts` | Mutable object the render loop reads directly, plus a tiny subscription for the HUD. |
| Camera path | `src/three/CameraRig.tsx` + `sampleCamera` in `src/lib/journey.ts` | Keyframed positions, aim, fov and roll, plus pointer parallax and the passage shake. |
| Portrait + floating work fragments + motes | `src/three/MindPortrait.tsx`, `src/three/MindDebris.tsx` | The portrait plane, the drifting frames of your work (real thumbnails when the host allows a cross-origin read, procedural glass frames otherwise) and the particles of thought around the head. |
| Neural wires | `src/three/NeuralFilaments.tsx` | One shader morphs each filament from "fanned through the corridor" to "funnelled into the core" — that morph is the convergence event. |
| Black hole | `src/three/BlackHole.tsx` | Real black sphere horizon, two additive accretion disks with Keplerian shear and Doppler beaming, a photon ring, and an instanced asteroid belt. |
| Lensing + warp | `src/three/Starfield.tsx` | The sky is displaced in the vertex shader, so the hole bends a real starfield. |
| Passage | `src/three/WarpTunnel.tsx` | World-space light streaks the camera physically travels through, plus the flash. |
| Multiverse | `src/three/Multiverse.tsx` | Planets with displaced terrain and atmospheres, a spiral galaxy, nebulae, islands, rock rings, and four portals each holding a different kind of place (city lights, a banded world, a nebula, a cavern of light — the `style` prop). |
| DOM layer | `src/components/PhasePanels.tsx`, `ShowcaseDeck.tsx`, `JourneyHud.tsx` | Captions, the project showcase and the synced nav rail. |

## Performance budget

Chosen for a laptop without a dedicated GPU:

- Detail scale is picked once at load (`detectQuality` in `journey-store.ts`)
  from viewport width, core count and device memory.
- Device pixel ratio is capped at 1.5 (1.0 on low-detail devices) and drops to
  0.85 automatically if the frame rate falls below 40fps.
- Each stage of the journey toggles its own `visible` flag from the render loop,
  so the black hole costs nothing once the camera is past it and the multiverse
  costs nothing until it is reached.
- The whole WebGL scene is a separate chunk, fetched after the page paints.

## Accessibility

- `prefers-reduced-motion` snaps the camera to still frames per phase, stops
  scene time, and switches the canvas to on-demand rendering.
- All journey copy is real DOM text, not canvas; the nav is real buttons/links.
- Coarse pointers (touch) get no custom cursor and no pointer parallax.

## Verifying changes

```bash
bun tsc -b --noEmit          # types (the platform also runs this every turn)
bun run build                # production build
bunx eslint src/components src/three src/lib
node scripts/verify-glsl.mjs      # shader declarations vs. uniforms/attributes
bun scripts/verify-journey.ts     # phase tiling, camera path, world staging
```

(`bun run lint` over the whole repo still reports two pre-existing errors in the
untouched shadcn template files `src/components/ui/carousel.tsx` and
`src/components/ui/sidebar.tsx`.)

## Signed-in surface

`/dashboard` ("Studio desk") is protected by `RequireAuth` →
`/auth?returnTo=%2Fdashboard` → back to `/dashboard` on sign-in. Nothing about
the journey touches that route.
