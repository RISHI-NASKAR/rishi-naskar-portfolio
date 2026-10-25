import { ArrowDown, ArrowUpRight, Github, Linkedin, Instagram, X } from "lucide-react";
import { LINKS, mailto } from "@/lib/links";
import Portrait from "./Portrait";

const DISCIPLINES = ["AI Engineer", "Cinematographer", "Creative Designer"];

/**
 * Chapter 01 — the introduction.
 *
 * Near-black, one crimson light source low in the frame, an oversized ornamental
 * wordmark and the portrait plate. The title resolves line by line on load; the
 * rest of the page is static until it is scrolled into view.
 *
 * On every width the frame is compact: the portrait, the name and the
 * disciplines sit side by side in one row — on mobile the portrait holds the
 * left of the name row while the short sentence and actions sit directly
 * beneath. The long editorial paragraph is sm-and-up only.
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
          className="absolute inset-y-[-8%] left-1/3 hidden w-px bg-line/25 lg:block"
        />
        <div
          data-depth="0.05"
          className="absolute inset-y-[-8%] left-2/3 hidden w-px bg-line/25 lg:block"
        />
      </div>

      <div className="mx-auto w-full max-w-[1560px]">
        {/* Running head */}
        <div className="flex items-center justify-between gap-4 border-b border-line/60 pb-4">
          <span className="meta hero-rise text-[10.5px] tracking-[0.34em] text-ash">
            Chapter 01 — Introduction
          </span>
          <span className="meta hero-rise hidden text-[10.5px] tracking-[0.34em] text-ash sm:block">
            Portfolio · MMXXVI
          </span>
        </div>

        <div className="mt-8 grid grid-cols-[0.46fr_0.54fr] grid-rows-[auto_auto] items-start gap-x-5 gap-y-6 [grid-template-areas:'portrait_copy'_'copy2'] sm:mt-12 sm:gap-x-8 sm:gap-y-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:[grid-template-areas:'portrait_copy'_'portrait_copy2'] lg:[&:has([data-portrait=missing])]:[grid-template-areas:'copy'_'copy2'] xl:gap-24">
          {/* ------------------------------------------------------------ name */}
          <div className="[grid-area:copy]">
            {/* -------------------------------------------------- social row */}
            <div className="mb-10 flex items-center gap-3 sm:hidden lg:flex">
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
              <span className="sr-only">Rishi Naskar</span>
              <span aria-hidden="true" className="block">
                <span className="hero-rise flex items-center gap-3 sm:gap-5">
                  <span className="h-px w-6 bg-crimson sm:w-12" />
                  <span className="text-[clamp(1.05rem,4.4vw,3.1rem)] leading-none tracking-[0.32em] text-crimson">
                    RISHI
                  </span>
                </span>

                <span className="relative mt-3 block sm:mt-4">
                  <span
                    className="hero-wipe block text-[clamp(2.05rem,9vw,9.4rem)] leading-[0.86] tracking-[0.005em]"
                    style={{ "--delay": "0.18s" } as React.CSSProperties}
                  >
                    NASKAR
                  </span>

                  {/* Hand-drawn swash beneath the name. */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 620 40"
                    fill="none"
                    className="mt-2 w-full max-w-[620px] text-crimson sm:mt-3"
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
              </span>
            </h1>

            {/* Three disciplines, equal weight — the compact subtitle. */}
            <ul
              className="hero-rise mt-5 flex flex-wrap items-center gap-x-3.5 gap-y-2 sm:mt-7 sm:gap-x-4"
              style={{ "--delay": "0.9s" } as React.CSSProperties}
            >
              {DISCIPLINES.map((discipline, index) => (
                <li key={discipline} className="flex items-center gap-3.5 sm:gap-4">
                  {index > 0 ? (
                    <span aria-hidden="true" className="size-1 rotate-45 bg-crimson" />
                  ) : null}
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ivory/85 sm:text-[11.5px] sm:tracking-[0.26em]">
                    {discipline}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ------------------------------------------------------- portrait */}
          <div
            data-depth="0.03"
            className="relative flex justify-center [grid-area:portrait] lg:justify-start lg:[&:has([data-portrait=missing])]:hidden"
          >
            <div
              className="hero-rise w-full max-w-[19rem] sm:max-w-[31rem] lg:mt-0 lg:w-[118%] lg:max-w-none lg:-ml-4 xl:-ml-8"
              style={{ "--delay": "0.62s" } as React.CSSProperties}
            >
              <Portrait />
            </div>
          </div>

          {/* --------------------------------------------------- intro + CTAs */}
          <div className="[grid-area:copy2]">
            <div
              className="hero-rise sm:max-w-2xl"
              style={{ "--delay": "1.05s" } as React.CSSProperties}
            >
              <p className="hidden font-editorial text-[clamp(1.85rem,3.7vw,3.15rem)] leading-[1.04] text-ivory sm:block">
                Building <span className="type-italic text-crimson">intelligence.</span>
                <br />
                Framing <span className="type-italic">stories.</span>
                <br />
                Designing{" "}
                <span className="type-outline">perspectives.</span>
              </p>

              {/* Mobile keeps exactly one short sentence. */}
              <p className="mt-1 text-[15px] leading-[1.75] text-ash sm:hidden">
                AI, cinema and design — turning ideas into experiences you can
                feel.
              </p>

              <p className="mt-7 hidden max-w-lg text-[15px] leading-[1.8] text-ash sm:block">
                I work at the intersection of artificial intelligence, cinematic
                storytelling and visual design — turning ideas into experiences
                through technology and creativity.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-9">
                <a href="#work" className="btn-noir group" data-cursor="explore">
                  Explore the work
                  <ArrowDown
                    className="size-3.5 transition-transform duration-500 group-hover:translate-y-1"
                    aria-hidden="true"
                  />
                </a>
                <a href={mailto} className="btn-noir btn-ghost group">
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
        <div className="mt-12 flex items-end justify-between gap-6 border-t border-line/60 pt-5 sm:mt-20">
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
