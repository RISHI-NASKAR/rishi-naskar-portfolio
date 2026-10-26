import { ArrowDown, ArrowUpRight, Github, Linkedin, Instagram, X } from "lucide-react";
import { LINKS, mailto } from "@/lib/links";
import CrimsonStage from "@/components/CrimsonStage";

/**
 * Chapter 01 — the introduction, staged as a cinematic double exposure.
 *
 * The portrait is the anchor of the Crimson Reality composition
 * (CrimsonStage: crimson smoke, a flipped second exposure, drifting motes);
 * the copy sits beside it — the wordmark, the studio headline, the description
 * and the two actions. On phones the artwork leads: stage, wordmark, headline,
 * CTAs, then the scroll cue. Desktop keeps the artwork left, copy right,
 * spanning the full copy height.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="grain relative isolate overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-24 lg:pt-36"
    >
      {/* Atmosphere: one deep crimson bloom, one cold ivory rim. */}
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
          className="absolute -right-20 top-0 h-[26rem] w-[26rem] rounded-full bg-crimson/10 blur-[120px]"
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
        <div
          data-depth="0.05"
          className="absolute inset-y-[-8%] right-[calc(50%-22rem)] hidden w-px bg-line/25 lg:block"
        />
        <div
          data-depth="0.05"
          className="absolute inset-y-[-8%] right-[calc(50%-30rem)] hidden w-px bg-line/25 lg:block"
        />
      </div>

      <div className="mx-auto w-full max-w-[1560px]">
        {/* Running head */}
        <div className="flex items-center justify-between gap-4 border-b border-line/60 pb-4">
          <span className="meta hero-rise text-[10.5px] tracking-[0.34em] text-ash">
            Chapter 01 — Introduction
          </span>
          <span className="meta hero-rise hidden text-[10.5px] tracking-[0.34em] text-ash sm:block">
            Beyond the frame · MMXXVI
          </span>
        </div>

        <div className="mt-7 grid grid-cols-1 items-start gap-x-14 gap-y-10 sm:mt-10 md:grid-cols-[0.95fr_1.05fr] md:gap-y-7 lg:mt-12 lg:gap-16 xl:gap-24">
          {/* ------------------------------------------------- name / wordmark */}
          <div className="order-2 md:col-start-2 md:row-start-1">
            {/* -------------------------------------------------- social row */}
            <div className="mb-8 flex items-center gap-3 sm:hidden lg:flex lg:mb-10">
              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex size-9 items-center justify-center border border-line/90 bg-[#0e0c0e] transition-colors duration-300 hover:border-crimson hover:text-white"
                aria-label="Rishi Naskar on GitHub"
              >
                <Github className="size-4" aria-hidden="true" />
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex size-9 items-center justify-center border border-line/90 bg-[#0e0c0e] transition-colors duration-300 hover:border-crimson hover:text-white"
                aria-label="Rishi Naskar on LinkedIn"
              >
                <Linkedin className="size-4" aria-hidden="true" />
              </a>
              <a
                href={LINKS.twitter}
                target="_blank"
                rel="noreferrer noopener"
                className="flex size-9 items-center justify-center border border-line/90 bg-[#0e0c0e] transition-colors duration-300 hover:border-crimson hover:text-white"
                aria-label="Rishi Naskar on X"
              >
                <X className="size-4" aria-hidden="true" />
              </a>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="flex size-9 items-center justify-center border border-line/90 bg-[#0e0c0e] transition-colors duration-300 hover:border-crimson hover:text-white"
                aria-label="Rishi Naskar on Instagram"
              >
                <Instagram className="size-4" aria-hidden="true" />
              </a>
            </div>

            <h1 className="font-signature text-ivory">
              <span className="hero-rise flex items-center gap-3 sm:gap-5">
                <span className="h-px w-8 bg-crimson sm:w-12" />
                <span className="text-[clamp(1.3rem,5vw,3rem)] leading-none tracking-[0.32em] text-crimson">
                  RISHI
                </span>
              </span>

              <span className="relative mt-3 block sm:mt-4">
                <span
                  className="hero-wipe block text-[clamp(2.5rem,11vw,6.8rem)] leading-[0.86] tracking-[0.005em]"
                  style={{ "--delay": "0.18s" } as React.CSSProperties}
                >
                  NASKAR
                </span>

                {/* Hand-drawn swash beneath the name. */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 620 40"
                  fill="none"
                  className="mt-2 w-full max-w-[520px] text-crimson sm:mt-3"
                  stroke="currentColor"
                  strokeLinecap="round"
                >
                  <path
                    className="swash-draw"
                    style={{ "--dash": "900", "--delay": "0.85s" } as React.CSSProperties}
                    d="M6 26c52 0 84-9 132-12 44-3 74 3 108 6 30 3 56 1 84-4 32-6 62-9 96-4 46 7 88 9 138 2"
                    strokeWidth="0.9"
                  />
                  <path
                    className="swash-draw"
                    style={{ "--dash": "1200", "--delay": "1.05s" } as React.CSSProperties}
                    d="M58 33c44 0 78-6 116-8 36-2 62 2 92 4 34 2 62-1 92-6 36-6 68-4 102 0 42 5 80 4 116 0"
                    strokeWidth="0.5"
                    opacity="0.6"
                  />
                  <path
                    className="swash-draw"
                    style={{ "--dash": "160", "--delay": "1.25s" } as React.CSSProperties}
                    d="M556 12c12-4 24-4 36 1-12 1-22 4-31 9"
                    strokeWidth="0.8"
                  />
                  <circle
                    className="hero-rise"
                    style={{ "--delay": "1.4s" } as React.CSSProperties}
                    cx="604"
                    cy="18"
                    r="2"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </span>
            </h1>
          </div>

          {/* -------------------------------------------- headline + description */}
          <div className="order-3 md:col-start-2 md:row-start-2">
            <div
              className="hero-rise md:max-w-xl"
              style={{ "--delay": "1.05s" } as React.CSSProperties}
            >
              <h2 className="font-editorial text-[clamp(2.1rem,5vw,4.4rem)] leading-[1.02] text-ivory">
                Have a story
                <br />
                <span className="type-italic text-crimson">worth telling</span>?
              </h2>

              <p className="mt-5 max-w-md text-[15px] leading-[1.8] text-ash sm:mt-6">
                AI, cinema and design — turning ideas into experiences you can
                feel.
              </p>
            </div>
          </div>

          {/* ------------------------------------- the crimson-reality stage */}
          <div
            className="order-1 hero-rise mx-auto w-full max-w-[24rem] sm:max-w-[28rem] md:order-none md:max-w-none md:col-start-1 md:row-start-1 md:row-span-3"
            style={{ "--delay": "0.4s" } as React.CSSProperties}
          >
            <CrimsonStage />
          </div>

          {/* ----------------------------------------------------- CTA actions */}
          <div className="order-4 md:col-start-2 md:row-start-3">
            <div
              className="hero-rise"
              style={{ "--delay": "1.2s" } as React.CSSProperties}
            >
              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <a
                  href="#work"
                  className="btn-noir w-full justify-center sm:w-auto"
                  data-cursor="explore"
                >
                  Explore the work
                  <ArrowDown
                    className="size-3.5 transition-transform duration-500 group-hover:translate-y-1"
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
                    className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer of the opening frame */}
        <div className="mt-12 flex items-end justify-between gap-6 border-t border-line/60 pt-5 sm:mt-16">
          <a
            href="#identity"
            className="group inline-flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.28em] text-ash transition-colors hover:text-ivory"
          >
            <span className="grid size-8 place-items-center rounded-full border border-line/80 transition-colors group-hover:border-crimson">
              <ArrowDown className="scroll-cue size-3.5" aria-hidden="true" />
            </span>
            Scroll to enter
          </a>
          <p className="hidden max-w-xs text-right font-editorial text-sm italic text-ash/80 sm:block">
            An independent studio practice in intelligence, cinema and design.
          </p>
        </div>
      </div>
    </section>
  );
}
