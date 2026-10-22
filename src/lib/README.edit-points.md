# Rishi Naskar — luxury crimson noir portfolio

A single editorial page built as a visual journal: an ornamental opening frame,
the creative identity, a typographic interlude, the person, the work, the craft
and a closing crimson frame. No WebGL, no canvas, no scroll hijacking — the
design holds up as a still composition with every animation switched off.

## Edit points

| What | Where |
| --- | --- |
| Contact details, social URLs, mail/WhatsApp helpers | `src/lib/links.ts` |
| Projects and the three disciplines | `src/lib/projects.ts` |
| Bio, dossier facts, portrait framing | `src/components/About.tsx` |
| Opening copy, disciplines line, hero CTAs | `src/components/Hero.tsx` |
| Discipline rows | `src/components/Identity.tsx` |
| Working-principle interlude | `src/components/Interlude.tsx` |
| Work index and project panel | `src/components/Work.tsx`, `src/components/ProjectDetail.tsx` |
| Capability groups | `src/components/Skills.tsx` |
| Closing frame, contact rows, footer | `src/components/Contact.tsx` |
| Navigation | `src/components/SiteHeader.tsx` |
| Palette, type tokens, motion utilities | `src/index.css` |

## Portrait

The photograph is read from `public/portrait.png`. A cut-out PNG (transparent
background) reads best, because the image is blended straight into the page:
feathered at the sides, top and bottom with a CSS mask, grounded by a soft
shadow, and graded with a restrained warm-crimson light from the right so the
skin, glasses and fabric stay photographic.

There is no frame, card, crest or caption around it — only the photograph and
the atmosphere behind it. It fades in when the file loads and gets 12px of
pointer parallax on fine pointers (`prefers-reduced-motion` disables both).

**That file is not in the project yet**, so `Portrait` currently renders nothing
in the hero. Drop the file at `public/portrait.png` and it appears with no code
change.

## Typography

Three registers, deliberately separated:

1. **Signature** — Cinzel Decorative (SIL Open Font License) for the wordmark,
   the RN crest and chapter numerals, with a hand-drawn swash beneath the name.
   *Hortus* is a commercial release and is not bundled; the wordmark takes its
   inspiration from that ornamental tradition rather than shipping the font
   unlicensed. The swash and filigree are custom SVG (`ornaments.tsx`).
2. **Editorial** — Cormorant Garamond for headlines, standfirsts and pull
   quotes, including real italics.
3. **Interface** — Inter for navigation and body copy; JetBrains Mono only for
   indexes, categories and metadata.

All four are loaded from Google Fonts with `display=swap` and preconnects.

## Design system

- Obsidian `#080808` dominates, oxblood `#650D19` carries atmosphere, crimson
  `#B5122B` / ember `#D32640` are reserved for interaction and emphasis, warm
  ivory `#E8E0D8` is the only body colour, muted grey `#969090` is secondary.
- Hairlines (`#30272A`), a faint inline film grain, and one crimson bloom per
  chapter provide depth without neon.
- Type scale: the name at `clamp(3.1rem, 11.4vw, 9.4rem)`, chapter headlines
  `clamp(2.4rem, 5.6vw, 4.9rem)`, body 14.5–15px at 1.8–1.9 line height.

## Motion

Scroll reveals are one 22px lift and a fade, fired once by IntersectionObserver
(`Reveal.tsx`). The detail sheet slides in 36px. Hero letters resolve with a
single clip wipe and a swash that draws itself. Everything is disabled under
`prefers-reduced-motion`, and no animation is required to read or operate the
page. The portrait gets a few pixels of pointer parallax on fine pointers only.

## Accessibility

- Skip link, real headings, `aria-current` on the active chapter.
- Work rows are buttons that open a `role="dialog"` sheet with focus moved to
  its close control, a Tab trap, Escape to close, and focus returned on close.
- Body scroll is locked only while the sheet or mobile menu is open.
- Visible crimson focus rings; text never smaller than 13px for reading copy.

## Verification

```bash
bun tsc -b --noEmit      # types (the platform also runs this every turn)
bun run lint
bun run build            # production build
```

`bun run lint` still reports two pre-existing errors in untouched shadcn
template files (`ui/carousel.tsx`, `ui/sidebar.tsx`).

## Signed-in surface

`/dashboard` ("Studio desk") is unchanged and stays protected by `RequireAuth` →
`/auth?returnTo=%2Fdashboard`. Nothing on the editorial page touches that flow.
