import { useSyncExternalStore } from "react";
import { ABOUT_ID, CONTACT_ID, PHASES, RAIL } from "@/lib/journey";
import {
  getHud,
  scrollToProgress,
  scrollToRail,
  subscribeJourney,
} from "@/lib/journey-store";

const EASE = "cubic-bezier(0.22, 0.68, 0.16, 1)";

/**
 * The HUD floats above the 3D scene for the whole journey.
 *
 * It subscribes to the store, so it only re-renders when the active phase,
 * active nav entry or whole percent actually changes — never per frame. Every
 * entry is a real button or anchor, so the whole journey stays keyboard
 * navigable.
 */
export default function JourneyHud() {
  const { phase, rail, percent } = useSyncExternalStore(
    subscribeJourney,
    getHud,
    getHud,
  );
  const current = PHASES[phase];

  const jump = (index: number) => () => scrollToRail(index);

  return (
    <>
      {/* ------------------------------------------------------------ nav */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-30">
        <div className="pointer-events-auto flex items-center justify-between gap-4 bg-gradient-to-b from-black/85 via-black/45 to-transparent px-4 py-4 sm:px-7 sm:py-5">
          <button
            type="button"
            onClick={() => scrollToProgress(0)}
            aria-label="Rishi Naskar — back to the start"
            data-cursor="Home"
            className="group flex shrink-0 cursor-pointer items-baseline gap-2"
          >
            <span className="font-display text-xl leading-none font-medium tracking-[-0.01em] text-[#f5f4f1] sm:text-2xl">
              Rishi Naskar
            </span>
            <span className="hidden font-display text-[10px] tracking-[0.42em] text-white/50 transition-colors group-hover:text-primary sm:inline">
              FILMS
            </span>
          </button>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 lg:flex"
          >
            <button
              type="button"
              onClick={() => scrollToProgress(0)}
              className={`font-display relative py-1 text-[14px] tracking-[0.04em] transition-colors ${
                rail === 0 ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              Home
              {rail === 0 && (
                <span className="absolute -bottom-1 left-0 h-px w-full bg-primary" />
              )}
            </button>
            {RAIL.slice(1, 4).map((entry, i) => (
              <button
                key={entry.label}
                type="button"
                onClick={jump(i + 1)}
                className={`font-display relative py-1 text-[14px] tracking-[0.04em] transition-colors ${
                  rail === i + 1
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {entry.label}
                {rail === i + 1 && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-primary" />
                )}
              </button>
            ))}
            <a
              href={`#${ABOUT_ID}`}
              className={`font-display relative py-1 text-[14px] tracking-[0.04em] transition-colors ${
                rail === 4 ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              About
            </a>
            <a
              href={`#${CONTACT_ID}`}
              className={`font-display relative py-1 text-[14px] tracking-[0.04em] transition-colors ${
                rail === 5 ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              Contact
            </a>
            <a
              href="/dashboard"
              className="font-display py-1 text-[14px] tracking-[0.04em] text-white/50 transition-colors hover:text-white/90"
            >
              Studio desk
            </a>
          </nav>

          <a
            href={`#${CONTACT_ID}`}
            data-cursor="Say hello"
            className="shrink-0 rounded-full border border-white/25 bg-white/5 px-4 py-2.5 font-display text-[13px] tracking-[0.12em] text-white/90 backdrop-blur-sm transition-colors hover:border-primary hover:bg-primary hover:text-black sm:px-5"
          >
            Let&apos;s create
          </a>
        </div>
      </header>

      {/* ---------------------------------------------------- phase rail */}
      <nav
        aria-label="Journey progress"
        className="pointer-events-none fixed top-1/2 left-3 z-30 hidden -translate-y-1/2 sm:block"
      >
        <ol className="pointer-events-auto relative flex flex-col gap-5 pl-4">
          {/* spine */}
          <span
            aria-hidden="true"
            className="absolute top-1 bottom-1 left-0 w-px bg-white/12"
          />
          <span
            aria-hidden="true"
            className="absolute top-0 left-0 w-px bg-primary transition-[height] duration-500"
            style={{
              height: `${percent}%`,
              transitionTimingFunction: EASE,
            }}
          />
          {RAIL.map((entry, index) => {
            const active = rail === index;
            const passed = rail > index;
            return (
              <li key={entry.label}>
                <button
                  type="button"
                  onClick={jump(index)}
                  aria-current={active ? "true" : undefined}
                  className="group flex items-center gap-3 text-left"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[3px] size-[7px] rounded-full transition-all duration-500 ${
                      active
                        ? "scale-125 bg-primary shadow-[0_0_12px_2px_rgba(90,169,255,0.65)]"
                        : passed
                          ? "bg-white/45"
                          : "bg-white/18"
                    }`}
                    style={{ transitionTimingFunction: EASE }}
                  />
                  <span
                    className={`font-mono text-[10.5px] tracking-[0.14em] transition-colors ${
                      active ? "text-primary" : "text-white/45"
                    }`}
                  >
                    {entry.index}
                  </span>
                  <span
                    className={`font-display text-[12.5px] tracking-[0.06em] transition-colors ${
                      active
                        ? "text-white"
                        : "text-white/55 group-hover:text-white/85"
                    }`}
                  >
                    {entry.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* ----------------------------------------------- status readout */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30">
        <div className="flex items-center justify-between gap-4 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-4 py-4 sm:px-7">
          <p className="font-mono text-[10.5px] tracking-[0.16em] text-white/60 sm:text-[11px]">
            <span className="text-primary">
              {String(Math.round(percent)).padStart(3, "0")}
            </span>
            <span className="mx-1.5 text-white/30">/</span>
            {current.kicker}
          </p>
          <p className="hidden font-display text-[12.5px] tracking-[0.08em] text-white/55 sm:block">
            {phase === 0 ? (
              <span className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-block h-3 w-[7px] rounded-full border border-white/45"
                />
                Scroll to enter my universe
              </span>
            ) : (
              current.title
            )}
          </p>
        </div>
      </div>
    </>
  );
}
