# Edits for Rishi's Portfolio — quick reference

**One place to swap real copy / links / images:**

- `src/lib/projects.ts` — 6 sample projects (titles, categories, years, descriptions, Unsplash placeholders, modal detail lines). Every entry has a body placeholder to replace.
- `src/lib/links.ts` — email / linkedin / instagram placeholders. Everything on the site reads from here.
- `src/components/Hero.tsx` — hero copy, two CTA labels, status dot copy, nav labels, engagiment indicator.
- Portrait: drop your photo into `public/portrait.png`. The hero already treats it as the 3D plane with grayscale + vignette + grain.

**Theme tuning** (`src/index.css`):
- Red accent `#E63329` and ink `#F2F0EA` live as CSS tokens — change there, not in components.
- `.dark` is currently unused and not wired; leave it or remove it.

**Scope of this build (v1 slice, priority order):**
1. First-screen visual impact — rounded black hero panel, your portrait as a real 3D plane, "RISHI NASKAR — DESIGNER & FILMMAKER" as the dominant type.
2. Real cursor-responsive 3D depth — pointer-driven parallax in Hero (text, portrait, caption at different speeds + translateZ), custom cursor with ring expand + "View work" label, tablet-reduced parallax, reduced-motion off.
3. Project gallery — 3D tilt cards, hover reveal, click to modal.
4. About, IMAGINATION HAS NO FRAME break, contact.

Everything below is real content, not fake achievements:
- No fabricated clients, testimonials, or awards.
- Every sample copy line is marked as a placeholder.
- All links are editable in one file (`src/lib/links.ts`), no hardcoded addresses.

**Signed-in surface:** `/dashboard` ("Studio desk") is protected by `RequireAuth` → `/auth?returnTo=%2Fdashboard` → back to `/dashboard` on sign-in. Landing CTA "Studio desk" links there inside the UI; the template's `/auth` path handles account creation separately.
