import { Reveal } from "./Reveal";

/**
 * The five professional identities — CARDS 01–05.
 *
 * A quiet, numbered grid beneath the hero: deep black plates, hairline
 * dark-red borders, one small line-art figure per craft. Two columns on
 * phones (the fifth spans the full row), five across on desktop. Nothing is
 * ever hidden on mobile.
 */

const CARDS = [
  {
    num: "01",
    title: "AI Engineer",
    tagline: "Build · Automate · Innovate",
    visual: (
      // Neural constellation
      <svg viewBox="0 0 120 72" fill="none" className="craft-figure" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="0.8">
          <path d="M18 52 L44 26 M44 26 L76 14 M44 26 L60 48 M60 48 L96 46 M60 48 L76 14 M96 46 L100 18" />
          <path d="M18 52 L60 48 M76 14 L96 46" strokeOpacity="0.35" />
        </g>
        <g fill="currentColor">
          <circle cx="18" cy="52" r="2.4" />
          <circle cx="44" cy="26" r="2.4" />
          <circle cx="76" cy="14" r="2" />
          <circle cx="60" cy="48" r="3" />
          <circle cx="96" cy="46" r="2.2" />
          <circle cx="100" cy="18" r="1.6" opacity="0.7" />
        </g>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Problem Solver",
    tagline: "Analyze · Solve · Improve",
    visual: (
      // Fragments assembling into one form
      <svg viewBox="0 0 120 72" fill="none" className="craft-figure" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="0.8">
          <rect x="38" y="14" width="44" height="44" strokeOpacity="0.9" />
          <path d="M38 14 L60 36 L82 14 M60 36 L60 58" strokeOpacity="0.45" />
          <rect x="20" y="34" width="18" height="18" transform="rotate(-24 29 43)" strokeOpacity="0.55" />
          <rect x="84" y="20" width="14" height="14" transform="rotate(30 91 27)" strokeOpacity="0.55" />
        </g>
        <circle cx="60" cy="36" r="2.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Cinematographer",
    tagline: "Capture · Direct · Storytell",
    visual: (
      // Camera with open aperture
      <svg viewBox="0 0 120 72" fill="none" className="craft-figure" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="0.8">
          <rect x="22" y="20" width="62" height="36" />
          <path d="M84 32 L104 24 V52 L84 44 Z" />
          <circle cx="53" cy="38" r="10" />
          <path d="M53 28 V38 L61 42" strokeOpacity="0.6" />
          <path d="M30 26 H44" strokeOpacity="0.4" />
        </g>
        <circle cx="53" cy="38" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Creative Designer",
    tagline: "Visualize · Design · Create",
    visual: (
      // Editorial strokes crossing
      <svg viewBox="0 0 120 72" fill="none" className="craft-figure" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="0.9" strokeLinecap="round">
          <path d="M18 52 C40 20, 66 60, 102 22" />
          <path d="M22 30 C48 52, 70 16, 100 44" strokeOpacity="0.5" />
        </g>
        <g stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.55">
          <path d="M88 14 L104 14 M88 20 L98 20" />
        </g>
        <circle cx="102" cy="22" r="2" fill="currentColor" />
        <circle cx="22" cy="30" r="1.6" fill="currentColor" opacity="0.7" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Storyteller",
    tagline: "Imagine · Write · Express",
    visual: (
      // Open screenplay
      <svg viewBox="0 0 120 72" fill="none" className="craft-figure" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="0.8">
          <path d="M34 16 C44 12, 54 12, 60 15 C66 12, 76 12, 86 16 V56 C76 52, 66 52, 60 55 C54 52, 44 52, 34 56 Z" />
          <path d="M60 15 V55" strokeOpacity="0.4" />
          <path d="M42 26 H54 M42 33 H54 M42 40 H50 M66 26 H78 M66 33 H78 M66 40 H74" strokeOpacity="0.5" strokeLinecap="round" />
        </g>
      </svg>
    ),
  },
] as const;

export default function ProfessionCards() {
  return (
    <section
      id="craft"
      aria-label="The five crafts"
      className="relative border-t border-line/60 px-5 py-20 sm:px-8 sm:pb-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1560px]">
        <Reveal>
          <div className="flex items-baseline justify-between gap-4 border-b border-line/60 pb-4">
            <span className="meta text-[clamp(11px,2.6vw,14px)] tracking-[0.34em] text-crimson">
              Five Crafts · One Practice
            </span>
            <span className="meta hidden text-[9.5px] tracking-[0.34em] sm:block">
              Beyond the frame
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:mt-12 lg:grid-cols-5 lg:gap-5">
          {CARDS.map((card, index) => (
            <Reveal
              key={card.num}
              delay={index * 90}
              className={index === 4 ? "col-span-2 sm:col-span-2 lg:col-span-1" : undefined}
            >
              <article
                data-cursor="explore"
                className="craft-card group relative flex h-full min-h-[11rem] flex-col justify-between overflow-hidden border border-[rgba(181,18,43,0.25)] bg-[#0b0909] p-5 transition-colors duration-500 hover:border-crimson/70 sm:min-h-[12.5rem] sm:p-6"
              >
                {/* Red accent line, grows on hover. */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-crimson transition-transform duration-500 group-hover:scale-x-100"
                />

                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-[9.5px] tracking-[0.3em] text-crimson/80 transition-colors duration-500 group-hover:text-crimson">
                    {card.num}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-1 size-1 shrink-0 rounded-full bg-crimson shadow-[0_0_8px_1px_rgba(225,29,46,0.35)]"
                  />
                </div>

                <div className="pointer-events-none my-4 flex h-16 items-end text-crimson/90">
                  {card.visual}
                </div>

                <div>
                  <h3 className="font-editorial text-[clamp(1.25rem,2.2vw,1.6rem)] leading-none text-ivory">
                    {card.title}
                  </h3>
                  <p className="meta mt-2.5 text-[8.5px] tracking-[0.2em] text-ash">
                    {card.tagline}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
