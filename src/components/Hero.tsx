import { type CSSProperties, type ReactNode } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import CrimsonStage from "@/components/CrimsonStage";
import { Reveal } from "@/components/Reveal";
import { mailto } from "@/lib/links";

/**
 * Chapter 01 — the multiverse.
 *
 * Two regions, one frame:
 *   · Left (and dominant): the crimson multiverse built around the real
 *     photograph — alternate exposures of the same face surfacing from smoke,
 *     layered orbital paths and travelling worlds wrapping the portrait, a
 *     front veil of smoke and a crimson rim on the silhouette.
 *   · Right: the name in huge editorial type, the description, the two actions
 *     and the circular scroll cue. Nothing orbit-shaped sits behind the type.
 * A strip of five image-led profession cards seals the frame along the bottom.
 *
 * Phones keep the same order — composition, then name — with fewer ghost
 * layers and the orbit scale reduced to the available width.
 */

/* ------------------------------------------------------------- name column */

/** The name block — shared verbatim by the desktop and mobile compositions. */
function NameColumn({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className="meta hero-rise text-[9px] tracking-[0.42em] text-ash">
        AI · Cinema · Design
      </p>

      <h1 className="mt-3 font-editorial text-ivory">
        <span className="hero-rise block text-[clamp(2.9rem,7vw,8rem)] leading-[0.88] tracking-[0.01em] text-crimson [text-shadow:0_0_44px_rgba(211,38,64,0.35)]">
          RISHI
        </span>
        <span
          className="hero-wipe block text-[clamp(3.3rem,9.2vw,10.6rem)] leading-[0.92] tracking-[0.005em] text-ivory"
          style={{ "--delay": "0.22s" } as CSSProperties}
        >
          NASKAR
        </span>
      </h1>

      {/* Fine crimson underline. */}
      <div
        aria-hidden="true"
        className="hero-rise relative mt-4 h-px w-full max-w-[420px] bg-gradient-to-r from-crimson via-crimson/60 to-transparent shadow-[0_0_18px_rgba(211,38,64,0.45)] sm:mt-5"
        style={{ "--delay": "0.5s" } as CSSProperties}
      />

      <div
        className="hero-rise mt-5 sm:mt-7"
        style={{ "--delay": "0.75s" } as CSSProperties}
      >
        <p className="max-w-md text-[15px] leading-[1.85] text-ash">
          AI, cinema and design — turning ideas into experiences you can feel.
        </p>

        <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <a
            href="#work"
            className="btn-noir w-full justify-center sm:w-auto"
            data-cursor="explore"
          >
            Explore the work
            <ArrowDown
              className="size-3.5"
              aria-hidden="true"
            />
          </a>
          <a
            href={mailto}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-noir btn-ghost w-full justify-center sm:w-auto"
            data-cursor="connect"
          >
            Start a conversation
            <ArrowUpRight
              className="size-3.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------- the five crafts */

const CARDS: {
  num: string;
  title: string;
  tagline: string;
  visual: ReactNode;
}[] = [
  {
    num: "01",
    title: "AI Engineer",
    tagline: "Build · Automate · Innovate",
    visual: (
      <svg viewBox="0 0 200 120" fill="none" aria-hidden="true">
        <defs>
          <radialGradient id="hnc1" cx="50%" cy="88%" r="70%">
            <stop offset="0%" stopColor="rgba(211,38,64,0.5)" />
            <stop offset="60%" stopColor="rgba(101,13,25,0.16)" />
            <stop offset="100%" stopColor="rgba(8,8,8,0)" />
          </radialGradient>
        </defs>
        <ellipse cx="100" cy="96" rx="88" ry="30" fill="url(#hnc1)" />
        <g stroke="#ff5a6e" strokeWidth="1" opacity="0.9">
          <path d="M70 42 C54 42 46 54 50 64 C38 68 40 84 52 88 C56 98 74 100 84 92" />
          <path d="M130 42 C146 42 154 54 150 64 C162 68 160 84 148 88 C144 98 126 100 116 92" />
          <path d="M84 92 C94 98 106 98 116 92" />
          <path d="M100 34 V92" strokeOpacity="0.5" />
          <path d="M62 58 H78 M122 58 H138 M66 76 H80 M120 76 H134" strokeOpacity="0.45" />
        </g>
        <g fill="#ff8b95">
          <circle cx="70" cy="42" r="2.2" />
          <circle cx="130" cy="42" r="2.2" />
          <circle cx="50" cy="64" r="1.8" opacity="0.8" />
          <circle cx="150" cy="64" r="1.8" opacity="0.8" />
          <circle cx="100" cy="34" r="2" />
          <circle cx="100" cy="86" r="2.4" />
          <circle cx="78" cy="58" r="1.4" opacity="0.7" />
          <circle cx="122" cy="58" r="1.4" opacity="0.7" />
        </g>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Problem Solver",
    tagline: "Analyze · Solve · Improve",
    visual: (
      <svg viewBox="0 0 200 120" fill="none" aria-hidden="true">
        <defs>
          <radialGradient id="hnc2" cx="50%" cy="88%" r="70%">
            <stop offset="0%" stopColor="rgba(211,38,64,0.42)" />
            <stop offset="60%" stopColor="rgba(101,13,25,0.14)" />
            <stop offset="100%" stopColor="rgba(8,8,8,0)" />
          </radialGradient>
        </defs>
        <ellipse cx="100" cy="96" rx="88" ry="30" fill="url(#hnc2)" />
        <g stroke="#e8e0d8" strokeWidth="1.1" opacity="0.55" strokeLinecap="round">
          <path d="M58 44 L44 58 L58 72" />
          <path d="M142 44 L156 58 L142 72" />
          <path d="M112 38 L92 82" />
        </g>
        <g stroke="#ff5a6e" strokeWidth="1.4" opacity="0.9" strokeLinecap="round">
          <path d="M44 88 H118" />
          <path d="M44 97 H96" strokeOpacity="0.6" />
          <path d="M44 106 H132" strokeOpacity="0.4" />
        </g>
        <rect x="122" y="91" width="8" height="14" fill="#ff3349" opacity="0.95" />
        <g fill="#e8e0d8" opacity="0.4">
          <circle cx="150" cy="88" r="1.3" />
          <circle cx="158" cy="97" r="1.3" />
          <circle cx="152" cy="106" r="1.3" />
        </g>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Cinematographer",
    tagline: "Capture · Direct · Storytell",
    visual: (
      <svg viewBox="0 0 200 120" fill="none" aria-hidden="true">
        <defs>
          <radialGradient id="hnc3" cx="42%" cy="60%" r="55%">
            <stop offset="0%" stopColor="rgba(211,38,64,0.55)" />
            <stop offset="55%" stopColor="rgba(101,13,25,0.18)" />
            <stop offset="100%" stopColor="rgba(8,8,8,0)" />
          </radialGradient>
        </defs>
        <ellipse cx="82" cy="70" rx="66" ry="42" fill="url(#hnc3)" />
        <g stroke="#cfc4c9" strokeWidth="1.4" opacity="0.9">
          <rect x="34" y="42" width="66" height="44" rx="2" />
          <path d="M100 54 L124 46 V82 L100 74" />
        </g>
        <circle cx="67" cy="64" r="12" stroke="#ff5a6e" strokeWidth="1.4" opacity="0.95" />
        <path d="M67 52 V64 L75 68" stroke="#ff8b95" strokeWidth="1.1" strokeLinecap="round" opacity="0.8" />
        <circle cx="52" cy="52" r="2" fill="#ff3349" opacity="0.95" />
        <path d="M40 36 H84 M44 30 H72" stroke="#cfc4c9" strokeWidth="1" opacity="0.45" strokeLinecap="round" />
        <path d="M136 44 L152 40 V86 L136 82" stroke="#ff5a6e" strokeWidth="1.2" opacity="0.6" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Creative Designer",
    tagline: "Visualize · Design · Create",
    visual: (
      <svg viewBox="0 0 200 120" fill="none" aria-hidden="true">
        <defs>
          <radialGradient id="hnc4" cx="55%" cy="70%" r="70%">
            <stop offset="0%" stopColor="rgba(211,38,64,0.5)" />
            <stop offset="60%" stopColor="rgba(101,13,25,0.16)" />
            <stop offset="100%" stopColor="rgba(8,8,8,0)" />
          </radialGradient>
          <linearGradient id="hnc4s" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(211,38,64,0)" />
            <stop offset="45%" stopColor="#ff5a6e" />
            <stop offset="100%" stopColor="rgba(255,150,160,0.75)" />
          </linearGradient>
        </defs>
        <ellipse cx="100" cy="96" rx="88" ry="32" fill="url(#hnc4)" />
        <g fill="none" strokeLinecap="round">
          <path d="M18 78 C48 34, 92 40, 108 62 C124 84, 156 92, 184 66" stroke="url(#hnc4s)" strokeWidth="2" />
          <path d="M24 96 C60 62, 104 66, 126 88" stroke="url(#hnc4s)" strokeWidth="1.2" opacity="0.65" />
        </g>
        <g fill="#ff8b95">
          <circle cx="108" cy="62" r="2.2" />
          <circle cx="126" cy="88" r="1.6" opacity="0.75" />
          <circle cx="184" cy="66" r="1.8" opacity="0.9" />
        </g>
      </svg>
    ),
  },
  {
    num: "05",
    title: "Storyteller",
    tagline: "IMAGINE · WRITE · EXPRESS",
    visual: (
      <svg viewBox="0 0 200 120" fill="none" aria-hidden="true">
        <defs>
          <radialGradient id="hnc5" cx="50%" cy="80%" r="72%">
            <stop offset="0%" stopColor="rgba(211,38,64,0.55)" />
            <stop offset="60%" stopColor="rgba(101,13,25,0.18)" />
            <stop offset="100%" stopColor="rgba(8,8,8,0)" />
          </radialGradient>
        </defs>
        <ellipse cx="100" cy="100" rx="86" ry="30" fill="url(#hnc5)" />
        <g stroke="#e8e0d8" strokeWidth="1.3" opacity="0.9">
          <path d="M46 50 C60 44, 84 44, 100 50 C116 44, 140 44, 154 50 V100 C140 94, 116 94, 100 100 C84 94, 60 94, 46 100 Z" />
          <path d="M100 50 V100" strokeOpacity="0.5" />
        </g>
        <g fill="#ff5a6e" opacity="0.9">
          <circle cx="100" cy="34" r="2.4" />
          <circle cx="86" cy="40" r="1.2" opacity="0.7" />
          <circle cx="114" cy="40" r="1.2" opacity="0.7" />
          <circle cx="100" cy="120" r="3.2" opacity="0" />
        </g>
        <g stroke="#ff8b95" strokeWidth="1" strokeLinecap="round" opacity="0.75">
          <path d="M60 62 H90 M60 72 H88 M60 82 H84 M110 62 H140 M110 72 H138 M110 82 H134" />
        </g>
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------- cards */

function CraftStrip() {
  return (
    <div className="relative mt-12 border-t border-line/60 pt-7 lg:mt-14 lg:pt-8">
      <Reveal>
        <div className="flex items-baseline justify-between gap-4 pb-5">
          <span className="meta text-[9.5px] tracking-[0.34em] text-ash">
            The Five Crafts
          </span>
          <span className="meta hidden text-[9.5px] tracking-[0.34em] text-ash sm:block">
            Rishi Naskar · MMXXVI
          </span>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-5">
        {CARDS.map((card, index) => (
          <Reveal
            key={card.num}
            delay={index * 90}
            className={index === 4 ? "col-span-2 sm:col-span-1" : undefined}
          >
            <article
              data-cursor="explore"
              className="hn-card group relative flex h-full min-h-[12rem] flex-col justify-between overflow-hidden border border-[rgba(181,18,43,0.28)] bg-[#0a0708] transition-all duration-500 hover:-translate-y-0.5 hover:border-crimson/70 sm:min-h-[13.5rem]"
            >
              {/* Crimson accent line, grows on hover. */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 z-10 h-px w-full origin-left scale-x-0 bg-crimson transition-transform duration-500 group-hover:scale-x-100"
              />

              {/* The cinematic visual. */}
              <div className="hn-card-visual" aria-hidden="true">
                {card.visual}
              </div>

              <div className="relative z-10 flex items-start justify-between p-4 sm:p-5">
                <span className="font-mono text-[9.5px] tracking-[0.3em] text-crimson/90 transition-colors duration-500 group-hover:text-crimson">
                  {card.num}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-1 size-1 shrink-0 rounded-full bg-crimson shadow-[0_0_8px_1px_rgba(225,29,46,0.35)]"
                />
              </div>

              <div className="relative z-10 px-4 pb-4 sm:px-5 sm:pb-5">
                <h3 className="break-words font-editorial text-[clamp(1.05rem,2vw,1.7rem)] leading-none text-ivory">
                  {card.title}
                </h3>
                <p className="meta mt-2 text-[8.5px] tracking-[0.2em] text-ash">
                  {card.tagline}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------- hero */

export default function Hero() {
  return (
    <section
      id="home"
      className="grain relative isolate overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-14 lg:pt-32"
    >
      {/* ------------------------------ the universe's atmosphere ------------- */}
      <div
        aria-hidden="true"
        className="depth-plane pointer-events-none absolute inset-0 -z-10"
      >
        <div
          data-depth="0.06"
          data-depth-z="-90"
          className="absolute -left-40 top-24 h-[38rem] w-[38rem] rounded-full bg-oxblood/35 blur-[140px]"
        />
        <div
          data-depth="0.1"
          data-depth-z="-160"
          className="absolute -right-24 top-0 h-[30rem] w-[30rem] rounded-full bg-crimson/10 blur-[130px]"
        />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <div className="mx-auto w-full max-w-[1560px]">
        {/* ----------------------------------------------------- running head */}
        <div className="flex items-center justify-between gap-4 border-b border-line/60 pb-4">
          <span className="meta hero-rise text-[10.5px] tracking-[0.34em] text-ash">
            Chapter 01 — Introduction
          </span>
          <span className="meta hero-rise hidden text-[10.5px] tracking-[0.34em] text-ash sm:block">
            Beyond the frame · MMXXVI
          </span>
        </div>

        {/* ------------------------------------------------------- the board */}
        <div className="relative mt-8 flex flex-col gap-9 sm:mt-10 lg:mt-12 lg:grid lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center lg:gap-x-8 xl:gap-x-14">
          {/* ============================ LEFT — the multiverse ========== */}
          <div className="relative mx-auto w-full max-w-[34rem] lg:mx-0 lg:max-w-[min(100%,44rem)]">
            <div
              className="hero-rise"
              style={{ "--delay": "0.35s" } as CSSProperties}
            >
              <CrimsonStage />
            </div>

            {/* Editorial caption along the base of the composition. */}
            <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-line/50 pt-3">
              <span className="meta text-[8.5px] tracking-[0.34em] text-crimson/80">
                The Multiverse
              </span>
              <span className="meta hidden text-[8.5px] tracking-[0.3em] text-ash/70 sm:block">
                Every version, one identity
              </span>
            </div>
          </div>

          {/* ============================ RIGHT — the name ================ */}
          <div className="relative z-10 flex flex-col lg:pl-2 xl:pl-6">
            <NameColumn className="relative z-10" />

            {/* Circular scroll cue — lower right. */}
            <div
              className="relative z-10 mt-9 flex justify-end lg:mt-12"
              style={{ "--delay": "1.2s" } as CSSProperties}
            >
              <a
                href="#identity"
                className="hero-rise group flex flex-col items-center gap-2.5"
                aria-label="Scroll to the next chapter"
              >
                <span className="meta text-[8.5px] tracking-[0.36em] text-ash transition-colors group-hover:text-ivory">
                  Scroll
                </span>
                <span className="grid size-10 place-items-center rounded-full border border-line/80 transition-colors group-hover:border-crimson">
                  <ArrowDown className="scroll-cue size-3.5 text-ash transition-colors group-hover:text-crimson" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* ============================================ five cinematic cards */}
        <CraftStrip />
      </div>
    </section>
  );
}
