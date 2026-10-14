import { useRef, type ReactNode, type RefObject } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { PHASES, phaseHeight, type Phase, type PhaseKey } from "@/lib/journey";

interface PanelMotion {
  opacity: MotionValue<number>;
  y: MotionValue<number>;
  scale: MotionValue<number>;
}

/** Fade + drift driven by how far the visitor is through this phase. */
function usePhaseMotion(ref: RefObject<HTMLDivElement | null>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.82, 1],
    [0, 1, 1, 0],
  );
  const y = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [48, 0, 0, -48]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.18, 0.82, 1],
    [0.985, 1, 1, 1.01],
  );
  return { opacity, y, scale };
}

function Panel({
  phaseKey,
  children,
}: {
  phaseKey: PhaseKey;
  children: (motion: PanelMotion) => ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValues = usePhaseMotion(ref);
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

/**
 * The opening frame: name, professions and the promise, laid over the portrait.
 * The camera sits close here, so the copy is anchored to the right half on
 * desktop and to the bottom on small screens.
 */
export function MindIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.55, 0.95], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <div ref={ref} className="relative" style={{ height: phaseHeight("mind") }}>
      <div className="sticky top-0 flex min-h-screen items-center">
        <motion.div
          style={{ opacity, y }}
          className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-14"
        >
          <div className="flex w-full flex-col items-start gap-8 lg:items-end">
            <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-black/35 p-6 backdrop-blur-[2px] lg:ml-auto lg:border-transparent lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
              <p className="font-mono-label text-[10px] text-primary">
                Rishi Naskar
              </p>
              <h1 className="mt-4 font-display text-[clamp(2.9rem,8.4vw,7.5rem)] leading-[0.86] font-semibold tracking-[-0.01em] text-white uppercase">
                Rishi
                <br />
                Naskar
              </h1>
              <p className="font-mono-label mt-3 text-[11px] tracking-[0.42em] text-white/55 sm:text-[13px]">
                Films
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono-label text-[9px] text-white/70 sm:text-[10px]">
                <span>AI Engineer</span>
                <span className="text-primary">×</span>
                <span>Cinematographer</span>
                <span className="text-primary">×</span>
                <span>Graphic Designer</span>
              </div>

              <p className="mt-5 font-mono-label text-[9px] tracking-[0.3em] text-white/45 sm:text-[10px]">
                Ideas · Stories · Technology · Worlds
              </p>

              <p className="mt-9 max-w-md font-display text-[clamp(1.4rem,3.2vw,2.5rem)] leading-[1.15] italic text-white/85">
                A mind that creates worlds.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#works"
                  data-cursor="See the work"
                  className="rounded-full bg-primary px-6 py-3 font-mono-label text-[10px] text-black transition-transform hover:-translate-y-0.5"
                >
                  Enter the work
                </a>
                <a
                  href="#about"
                  className="rounded-full border border-white/25 px-6 py-3 font-mono-label text-[10px] text-white/90 backdrop-blur-sm transition-colors hover:border-white/60"
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
            className="flex h-9 w-[18px] items-start justify-center rounded-full border border-white/30 p-1"
          >
            <motion.span
              className="h-2 w-[3px] rounded-full bg-primary"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
          <span className="font-mono-label [writing-mode:vertical-rl] text-[9px] text-white/45">
            Scroll to enter my universe
          </span>
        </motion.div>
      </div>
    </div>
  );
}

/** A mid-journey caption: kicker, headline and a line or two of copy. */
export function CaptionPanel({ phaseKey }: { phaseKey: PhaseKey }) {
  const phase = PHASES.find((p) => p.key === phaseKey) as Phase;
  const centered = phase.align === "center";

  return (
    <Panel phaseKey={phaseKey}>
      {({ opacity, y, scale }) => (
        <motion.div
          style={{ opacity, y, scale }}
          className={`mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-14 ${
            centered ? "flex justify-center" : ""
          }`}
        >
          <div
            className={`max-w-2xl ${alignClass[phase.align]} ${
              centered ? "flex flex-col items-center" : ""
            }`}
          >
            <span
              className={`mb-5 flex items-center gap-3 font-mono-label text-[10px] text-primary ${
                phase.align === "right" ? "justify-end" : ""
              }`}
            >
              <span
                aria-hidden="true"
                className="h-px w-10 bg-primary/60"
              />
              {phase.kicker}
            </span>

            <h2 className="font-display text-[clamp(2rem,5.6vw,4.6rem)] leading-[0.98] font-semibold tracking-[-0.01em] text-white uppercase">
              {phase.title}
            </h2>

            <div
              className={`mt-6 space-y-3 ${
                phase.align === "center" ? "max-w-xl" : "max-w-lg"
              }`}
            >
              {phase.body.map((line, index) => (
                <p
                  key={line}
                  className={
                    index === 0
                      ? "font-display text-lg leading-snug text-white/85 italic sm:text-2xl"
                      : "text-sm leading-relaxed text-white/55 sm:text-base"
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

/** The closing statement, before the world the visitor made resolves into people. */
export function BeyondPanel() {
  const phase = PHASES.find((p) => p.key === "beyond") as Phase;
  return (
    <Panel phaseKey="beyond">
      {({ opacity, y, scale }) => (
        <motion.div
          style={{ opacity, y, scale }}
          className="mx-auto flex w-full max-w-[1500px] flex-col items-center px-5 text-center sm:px-8 lg:px-14"
        >
          <span className="mb-6 flex items-center gap-3 font-mono-label text-[10px] text-primary">
            <span aria-hidden="true" className="h-px w-10 bg-primary/60" />
            {phase.kicker}
          </span>

          <h2 className="font-display text-[clamp(2.1rem,7vw,6.4rem)] leading-[0.94] font-semibold tracking-[-0.01em] text-white uppercase">
            One mind.
            <br />
            <span className="text-primary">Infinite worlds.</span>
          </h2>

          <div className="mt-7 max-w-xl space-y-3">
            {phase.body.map((line, index) => (
              <p
                key={line}
                className={
                  index === 0
                    ? "font-display text-lg text-white/85 italic sm:text-2xl"
                    : "text-sm leading-relaxed text-white/55 sm:text-base"
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
              className="rounded-full bg-primary px-6 py-3 font-mono-label text-[10px] text-black transition-transform hover:-translate-y-0.5"
            >
              About Rishi
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/25 px-6 py-3 font-mono-label text-[10px] text-white/90 transition-colors hover:border-white/60"
            >
              Start a conversation
            </a>
          </div>
        </motion.div>
      )}
    </Panel>
  );
}
