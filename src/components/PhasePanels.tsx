import {
  useMemo,
  useRef,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from "react";
import {
  MotionValue,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { PHASES, phaseHeight, type Phase, type PhaseKey } from "@/lib/journey";

/* ------------------------------------------------------------------ reveal */

interface PanelMotion {
  opacity: MotionValue<number>;
  x: MotionValue<number>;
  y: MotionValue<number>;
  scale: MotionValue<number>;
  scaleY: MotionValue<number>;
  blur: MotionValue<string>;
  tracking: MotionValue<string>;
}

/**
 * Each phase gets its own entrance grammar, so no two captions arrive the same
 * way: the horizon title *pushes in from depth*, the passage stretches as the
 * frame stretches, the multiverse rises, the closing statement collapses its
 * tracking like a title card.
 */
interface RevealSpec {
  x?: [number, number, number, number];
  y?: [number, number, number, number];
  scale?: [number, number, number, number];
  scaleY?: [number, number, number, number];
  blur: [number, number, number, number];
  tracking: [string, string, string, string];
}

const REVEALS: Record<Exclude<PhaseKey, "mind" | "works">, RevealSpec> = {
  convergence: {
    x: [110, 0, 0, -80],
    blur: [15, 0, 0, 10],
    tracking: ["0.16em", "0em", "0em", "0.05em"],
  },
  horizon: {
    scale: [1.22, 1, 1, 1.08],
    blur: [20, 0, 0, 9],
    tracking: ["0.26em", "-0.015em", "-0.015em", "0.04em"],
  },
  passage: {
    scaleY: [1.5, 1, 1, 1.28],
    blur: [24, 4, 4, 20],
    tracking: ["0.6em", "0.2em", "0.2em", "0.46em"],
  },
  multiverse: {
    y: [90, 0, 0, -72],
    blur: [14, 0, 0, 9],
    tracking: ["0.07em", "0em", "0em", "0.04em"],
  },
  beyond: {
    y: [46, 0, 0, -44],
    blur: [17, 0, 0, 8],
    tracking: ["0.3em", "-0.02em", "-0.02em", "0.1em"],
  },
};

const INPUT_STOPS = [0, 0.17, 0.83, 1];

/**
 * Scroll-linked entrance for one phase block.
 *
 * Under reduced motion the source is frozen at the middle of the range, so the
 * block simply sits there fully revealed instead of travelling.
 */
type CaptionKey = Exclude<PhaseKey, "mind" | "works">;

function usePhaseMotion(ref: RefObject<HTMLDivElement | null>, key: CaptionKey) {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const frozen = useMemo(() => new MotionValue(0.5), []);
  const source = reduced ? frozen : scrollYProgress;
  const spec = REVEALS[key];

  const opacity = useTransform(source, INPUT_STOPS, [0, 1, 1, 0]);
  const x = useTransform(
    source,
    INPUT_STOPS,
    spec.x ?? [0, 0, 0, 0],
  );
  const y = useTransform(
    source,
    INPUT_STOPS,
    spec.y ?? [0, 0, 0, 0],
  );
  const scale = useTransform(
    source,
    INPUT_STOPS,
    spec.scale ?? [1, 1, 1, 1],
  );
  const scaleY = useTransform(
    source,
    INPUT_STOPS,
    spec.scaleY ?? [1, 1, 1, 1],
  );
  const blurValue = useTransform(source, INPUT_STOPS, spec.blur);
  const blur = useTransform(blurValue, (v) =>
    v < 0.15 ? "none" : `blur(${v.toFixed(2)}px)`,
  );
  const tracking = useTransform(source, INPUT_STOPS, spec.tracking);

  return { opacity, x, y, scale, scaleY, blur, tracking };
}

function Panel({
  phaseKey,
  children,
}: {
  phaseKey: CaptionKey;
  children: (motion: PanelMotion) => ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValues = usePhaseMotion(ref, phaseKey);
  return (
    <div ref={ref} className="relative" style={{ height: phaseHeight(phaseKey) }}>
      <div className="sticky top-0 flex min-h-screen items-center">
        {children(motionValues)}
      </div>
    </div>
  );
}

const alignClass: Record<Phase["align"], string> = {
  left: "mr-auto text-left",
  right: "ml-auto text-right",
  center: "mx-auto text-center",
};

/** The small section index line — Space Grotesk, sized to be read. */
function Kicker({ text, align }: { text: string; align: Phase["align"] }) {
  return (
    <span
      className={`mb-6 flex items-center gap-3 font-display text-[12px] tracking-[0.26em] text-primary sm:text-[13px] ${
        align === "right" ? "justify-end" : align === "center" ? "justify-center" : ""
      }`}
    >
      <span aria-hidden="true" className="h-px w-10 bg-primary/70" />
      {text}
    </span>
  );
}

/* --------------------------------------------------------- title sequence */

/** Splits a word into per-letter spans, each on its own beat. */
function Letters({ word, offset = 0 }: { word: string; offset?: number }) {
  return (
    <>
      {word.split("").map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="title-letter"
          style={{ "--i": offset + index } as CSSProperties}
        >
          {char}
        </span>
      ))}
    </>
  );
}

/**
 * The opening frame.
 *
 * The name is not laid on top of the scene: its letters resolve out of blur
 * while the tracking collapses from a wide cinematic spread, timed so the
 * filaments are already streaming behind it.
 */
export function MindIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const frozen = useMemo(() => new MotionValue(0), []);
  const source = reduced ? frozen : scrollYProgress;
  const opacity = useTransform(source, [0, 0.55, 0.95], [1, 1, 0]);
  const y = useTransform(source, [0, 1], [0, -70]);
  const blurValue = useTransform(source, [0.4, 0.95], [0, 9]);
  const blur = useTransform(blurValue, (v) => (v < 0.15 ? "none" : `blur(${v}px)`));
  const cueOpacity = useTransform(source, [0, 0.25], [1, 0]);

  const titles = ["AI Engineer", "Cinematographer", "Graphic Designer"];

  return (
    <div ref={ref} className="relative" style={{ height: phaseHeight("mind") }}>
      <div className="sticky top-0 flex min-h-screen items-center">
        <motion.div
          style={{ opacity, y, filter: blur }}
          className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-14"
        >
          <div className="flex w-full flex-col items-start gap-8 lg:items-end">
            <div className="relative w-full max-w-3xl lg:ml-auto">
              {/* scrim so the type stays readable over the portrait on small screens */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-x-6 -inset-y-8 -z-10 bg-[radial-gradient(90%_75%_at_65%_50%,rgba(2,4,12,0.78)_10%,rgba(2,4,12,0)_75%)] sm:bg-[radial-gradient(85%_70%_at_60%_50%,rgba(2,4,12,0.72)_10%,rgba(2,4,12,0)_78%)] lg:hidden"
              />

              <p className="font-display text-[12px] tracking-[0.26em] text-primary sm:text-[13px]">
                01 — Mind
              </p>

              {/* RISHI NASKAR — the title card */}
              <h1
                className="title-track mt-5 font-display text-[clamp(3.1rem,10.5vw,9rem)] leading-[0.84] font-medium tracking-[-0.012em] text-white uppercase"
                aria-label="Rishi Naskar"
              >
                <span className="block" aria-hidden="true">
                  <Letters word="RISHI" offset={0} />
                </span>
                <span
                  className="type-outline block pl-[0.07em]"
                  aria-hidden="true"
                >
                  <Letters word="NASKAR" offset={5} />
                </span>
              </h1>

              <p
                className="title-line type-italic mt-5 text-[clamp(0.95rem,1.5vw,1.25rem)] tracking-[0.34em] text-white/70"
                style={{ "--i": 0 } as CSSProperties}
              >
                Films
              </p>

              {/* the three disciplines, one readable line */}
              <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-[clamp(0.78rem,1.35vw,1.05rem)] tracking-[0.2em] text-white/85 uppercase">
                {titles.map((title, index) => (
                  <span key={title} className="flex items-center gap-3">
                    {index > 0 && (
                      <span aria-hidden="true" className="text-primary">
                        ×
                      </span>
                    )}
                    <span
                      className="title-line"
                      style={{ "--i": index + 1 } as CSSProperties}
                    >
                      {title}
                    </span>
                  </span>
                ))}
              </div>

              <div
                className="title-line mt-6 h-px w-40 bg-gradient-to-r from-primary via-primary/40 to-transparent"
                style={{ "--i": 4 } as CSSProperties}
                aria-hidden="true"
              />

              <p
                className="title-line type-italic mt-7 max-w-xl text-[clamp(1.5rem,3.4vw,2.7rem)] leading-[1.12] text-white/90"
                style={{ "--i": 5 } as CSSProperties}
              >
                A mind that creates worlds.
              </p>

              <p
                className="title-line mt-5 max-w-lg text-[15px] leading-relaxed text-white/65 sm:text-base"
                style={{ "--i": 6 } as CSSProperties}
              >
                Ideas, stories, technology, worlds — every one of them begins
                here, in a single head, behind a pair of glasses.
              </p>

              <div className="title-line mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#works"
                  data-cursor="See the work"
                  className="rounded-full bg-primary px-7 py-3.5 font-display text-[13px] font-medium tracking-[0.16em] text-black transition-transform hover:-translate-y-0.5"
                >
                  Enter the work
                </a>
                <a
                  href="#about"
                  className="rounded-full border border-white/30 px-7 py-3.5 font-display text-[13px] font-medium tracking-[0.16em] text-white/90 transition-colors hover:border-white/70"
                >
                  About Rishi
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: cueOpacity }}
          className="pointer-events-none absolute right-5 bottom-24 hidden flex-col items-center gap-3 sm:flex lg:right-14"
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-[18px] items-start justify-center rounded-full border border-white/35 p-1"
          >
            <motion.span
              className="h-2 w-[3px] rounded-full bg-primary"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
          <span className="cue-in font-display text-[11px] tracking-[0.3em] text-white/55 [writing-mode:vertical-rl]">
            Scroll to enter my universe
          </span>
        </motion.div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- mid captions */

/** A mid-journey caption: index line, headline and a line or two of copy. */
export function CaptionPanel({ phaseKey }: { phaseKey: CaptionKey }) {
  const phase = PHASES.find((p) => p.key === phaseKey) as Phase;
  const centered = phase.align === "center";

  return (
    <Panel phaseKey={phaseKey}>
      {(reveal) => (
        <motion.div
          style={{
            opacity: reveal.opacity,
            x: reveal.x,
            y: reveal.y,
            scale: reveal.scale,
            scaleY: reveal.scaleY,
            filter: reveal.blur,
          }}
          className={`mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-14 ${
            centered ? "flex justify-center" : ""
          }`}
        >
          <div
            className={`max-w-2xl ${alignClass[phase.align]} ${
              centered ? "flex flex-col items-center" : ""
            }`}
          >
            <Kicker text={phase.kicker} align={phase.align} />

            <motion.h2
              style={{ letterSpacing: reveal.tracking }}
              className="font-display text-[clamp(2.1rem,5.9vw,4.9rem)] leading-[0.95] font-medium text-white text-balance"
            >
              {phase.title}
            </motion.h2>

            <div
              className={`mt-7 space-y-4 ${
                phase.align === "center" ? "max-w-xl" : "max-w-lg"
              }`}
            >
              {phase.body.map((line, index) => (
                <p
                  key={line}
                  className={
                    index === 0
                      ? "type-italic text-[clamp(1.15rem,2.3vw,1.7rem)] leading-snug text-white/90"
                      : "text-[15px] leading-relaxed text-white/65 sm:text-[16px]"
                  }
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </Panel>
  );
}

/* ------------------------------------------------------------ closing card */

/** The closing statement, before the world resolves into people. */
export function BeyondPanel() {
  const phase = PHASES.find((p) => p.key === "beyond") as Phase;
  return (
    <Panel phaseKey="beyond">
      {(reveal) => (
        <motion.div
          style={{
            opacity: reveal.opacity,
            y: reveal.y,
            scale: reveal.scale,
            filter: reveal.blur,
          }}
          className="mx-auto flex w-full max-w-[1500px] flex-col items-center px-5 text-center sm:px-8 lg:px-14"
        >
          <Kicker text={phase.kicker} align="center" />

          <motion.h2
            style={{ letterSpacing: reveal.tracking }}
            className="font-display text-[clamp(2.2rem,7.4vw,6.8rem)] leading-[0.92] font-medium text-white uppercase"
          >
            One mind.
            <br />
            <span className="type-outline-blue">Infinite worlds.</span>
          </motion.h2>

          <div className="mt-8 max-w-xl space-y-4">
            {phase.body.map((line, index) => (
              <p
                key={line}
                className={
                  index === 0
                    ? "type-italic text-[clamp(1.15rem,2.4vw,1.75rem)] leading-snug text-white/90"
                    : "text-[15px] leading-relaxed text-white/65 sm:text-[16px]"
                }
              >
                {line}
              </p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#about"
              data-cursor="Who is Rishi"
              className="rounded-full bg-primary px-7 py-3.5 font-display text-[13px] font-medium tracking-[0.16em] text-black transition-transform hover:-translate-y-0.5"
            >
              About Rishi
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/30 px-7 py-3.5 font-display text-[13px] font-medium tracking-[0.16em] text-white/90 transition-colors hover:border-white/70"
            >
              Start a conversation
            </a>
          </div>
        </motion.div>
      )}
    </Panel>
  );
}
