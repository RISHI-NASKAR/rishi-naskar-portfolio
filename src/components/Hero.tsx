import {
  Suspense,
  lazy,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Portrait from "@/components/Portrait";
import { SmokeLayer } from "@/components/CrimsonStage";
import CosmosStatic from "@/components/CosmosStatic";
import { Reveal } from "@/components/Reveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { mailto } from "@/lib/links";

const NameCosmos = lazy(() => import("@/components/NameCosmos"));

/**
 * Chapter 01 — the opening frame, rebuilt as a cinematic film poster.
 *
 * Three entangled regions share one universe:
 *   · Far left: a close-cropped second exposure of the same photograph under
 *     scan-lines, crimson light streaks and restrained digital glitch.
 *   · Centre-left: the primary portrait, large, blending lower into the dark,
 *     wrapped in crimson smoke and a drifting echo of itself.
 *   · Right: the name in huge editorial type over the WebGL planetary system
 *     (planet, orbits, dust — the static composed fallback otherwise), the
 *     description, the two actions and the circular scroll cue.
 * A strip of five image-led profession cards seals the frame along the bottom.
 *
 * Phones rearrange rather than shrink: name first, portrait stage, cards.
 */

/* ------------------------------------------------------------------- motes */

const MOTES = [
  { x: 12, y: 30, s: 2, dur: 13, dx: 8, dy: -16 },
  { x: 76, y: 20, s: 1.5, dur: 17, dx: -10, dy: 12 },
  { x: 84, y: 68, s: 2.5, dur: 15, dx: -6, dy: -20 },
  { x: 22, y: 66, s: 1.5, dur: 12, dx: 6, dy: 14 },
  { x: 90, y: 44, s: 2, dur: 19, dx: -12, dy: -10 },
  { x: 8, y: 52, s: 1.5, dur: 16, dx: 10, dy: -12 },
  { x: 58, y: 10, s: 1.5, dur: 14, dx: -8, dy: 10 },
  { x: 40, y: 84, s: 1.5, dur: 18, dx: 9, dy: -11 },
] as const;

/* ------------------------------------------------------------ scene gating */

/**
 * One shared gate for the WebGL layer: WebGL availability, a responsive
 * scale, "animate only while on screen and the tab is visible", and a scroll
 * progress ref consumed inside the scene for depth.
 */
function useCosmosGate(stageRef: React.RefObject<HTMLDivElement | null>, reduced: boolean) {
  const [active, setActive] = useState(true);
  const [noWebGL] = useState(() => {
    try {
      const probe = document.createElement("canvas");
      const gl =
        probe.getContext("webgl2") ??
        probe.getContext("webgl") ??
        probe.getContext("experimental-webgl");
      return !gl;
    } catch {
      return true;
    }
  });
  const [desktop] = useState(() => window.innerWidth >= 1024);
  const [scale] = useState(() =>
    window.innerWidth < 1024 ? 0.78 : 0.95,
  );
  const progressRef = useRef(0);

  // Animate only while on screen (with a small lead margin) on desktop.
  useEffect(() => {
    if (!desktop) return;
    const node = stageRef.current;
    let inView = true;
    let tabVisible = true;
    const sync = () => setActive(inView && tabVisible);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) inView = entry.isIntersecting;
        sync();
      },
      { rootMargin: "160px 0px", threshold: 0 },
    );
    if (node) observer.observe(node);
    const onVisibility = () => {
      tabVisible = document.visibilityState === "visible";
      sync();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [desktop, stageRef]);

  // Scroll drives camera depth; skipped entirely under reduced motion.
  useEffect(() => {
    if (reduced) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const node = stageRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      progressRef.current = Math.min(
        1,
        Math.max(0, (vh - rect.top) / (vh + rect.height)),
      );
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [reduced, stageRef]);

  return { active, noWebGL, desktop, scale, progressRef };
}

/* ------------------------------------------------- the left close-portrait */

/** The far-left second exposure: real photograph, reframed as a close-up. */
function LeftExposure() {
  const [loaded, setLoaded] = useState(false);
  return (
    <figure
      aria-hidden="true"
      className="hn-left-fig relative mt-7 hidden h-[min(52vh,500px)] w-full overflow-hidden lg:mt-0 lg:block lg:h-auto lg:w-[116%] lg:flex-1"
    >
      <img
        src="/portrait.webp"
        alt=""
        data-loaded={loaded}
        onLoad={(event) => {
          if (event.currentTarget.naturalWidth) setLoaded(true);
        }}
        className="hn-left-img"
        loading="eager"
        decoding="async"
      />
      {/* Echo of the same photograph — screen-blended, off-axis. */}
      <div className="hn-left-echo" data-loaded={loaded}>
        <img
          src="/portrait.webp"
          alt=""
          loading="eager"
          decoding="async"
          aria-hidden="true"
        />
      </div>
      {/* Glitched micro-slices of the same photograph. */}
      <img
        src="/portrait.webp"
        alt=""
        data-slice="a"
        data-loaded={loaded}
        className="hn-left-img hn-glitch-slice"
        loading="eager"
        decoding="async"
        aria-hidden="true"
      />
      <img
        src="/portrait.webp"
        alt=""
        data-slice="b"
        data-loaded={loaded}
        className="hn-left-img hn-glitch-slice"
        loading="eager"
        decoding="async"
        aria-hidden="true"
      />
      {/* Scan lines, Crimson streaks. */}
      <div className="hn-scan" />
      <div className="hn-streaks">
        <span />
        <span />
        <span />
      </div>
    </figure>
  );
}

/* ------------------------------------------------------------- name column */

/** The name block — shared verbatim by the desktop and mobile compositions. */
function NameColumn({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className="meta hero-rise text-[9px] tracking-[0.42em] text-ash">
        AI · Cinema · Design
      </p>

      <h1 className="mt-3 font-editorial text-ivory">
        <span className="hero-rise block text-[clamp(2.7rem,7vw,8rem)] leading-[0.88] tracking-[0.01em] text-crimson [text-shadow:0_0_44px_rgba(211,38,64,0.35)]">
          RISHI
        </span>
        <span
          className="hero-wipe block text-[clamp(3.1rem,9.2vw,10.6rem)] leading-[0.92] tracking-[0.005em] text-ivory"
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
                <h3 className="font-editorial text-[clamp(1.3rem,2vw,1.7rem)] leading-none text-ivory">
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
  const reduced = useReducedMotion();
  const boardRef = useRef<HTMLDivElement>(null);
  const { active, noWebGL, desktop, scale, progressRef } = useCosmosGate(
    boardRef,
    reduced,
  );

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
        <div
          ref={boardRef}
          className="relative mt-8 flex flex-col gap-10 sm:mt-10 lg:mt-12 lg:grid lg:grid-cols-[19%_34%_47%] lg:items-stretch lg:gap-x-4"
        >
          {/* ============================ LEFT — the double exposure ====== */}
          <div className="relative hidden lg:order-none lg:col-start-1 lg:row-start-1 lg:flex lg:flex-col">
            {/* Subtle editorial label. */}
            <div className="flex items-start justify-between gap-3 pt-1">
              <span className="hn-vertical meta text-[8.5px] tracking-[0.42em] text-ash/70">
                A visual practice
              </span>
              <span className="hn-vertical meta text-[8.5px] tracking-[0.42em] text-crimson/80">
                Beyond
              </span>
            </div>

            {/* Numbered vertical sequence. */}
            <div className="mt-7 mb-6 flex items-start gap-3">
              <span
                aria-hidden="true"
                className="h-36 w-px bg-gradient-to-b from-crimson/0 via-crimson/45 to-crimson/0"
              />
              <ul className="flex flex-col gap-2.5 font-mono text-[8px] tracking-[0.3em] text-ash/45">
                <li className="text-crimson [text-shadow:0_0_10px_rgba(211,38,64,0.6)]">01</li>
                <li>02</li>
                <li>03</li>
                <li>04</li>
                <li>05</li>
              </ul>
            </div>

            <LeftExposure />
          </div>

          {/* ============================ CENTRE — the portrait ========== */}
          <div className="relative lg:col-start-2 lg:row-start-1">
            <div
              className="hero-rise relative isolate mx-auto aspect-square w-[92%] max-w-[24rem] sm:max-w-[28rem] lg:mx-0 lg:-ml-[6%] lg:mt-2 lg:w-[110%] lg:max-w-none"
              style={{ "--delay": "0.4s" } as CSSProperties}
            >
              {/* Slow crimson air beneath everything. */}
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="crimson-veil crimson-veil--base" />
              </div>
              <SmokeLayer
                id="hn-back"
                seed={7}
                scale="crimson-smoke crimson-smoke--back"
              />

              {/* Second exposure bleeding toward the left portrait. */}
              <div className="hn-centre-echo" aria-hidden="true">
                <img
                  src="/portrait.webp"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="crimson-echo"
                />
              </div>

              {/* The primary exposure — the anchor of the composition. */}
              <div className="absolute inset-0 z-10">
                <Portrait />
              </div>

              {/* Thin front veil of smoke. */}
              <SmokeLayer
                id="hn-front"
                seed={23}
                scale="crimson-smoke crimson-smoke--front"
              />

              {/* Hairline orbital arcs. */}
              <svg
                aria-hidden="true"
                viewBox="0 0 100 100"
                fill="none"
                className="crimson-arcs"
              >
                <ellipse
                  cx="50" cy="52" rx="46" ry="30"
                  transform="rotate(-9 50 50)"
                  stroke="rgba(211,38,64,0.22)"
                  strokeWidth="0.18"
                  strokeDasharray="46 34 12 60"
                />
                <ellipse
                  cx="50" cy="50" rx="38" ry="46"
                  transform="rotate(18 50 50)"
                  stroke="rgba(120,110,116,0.24)"
                  strokeWidth="0.12"
                  strokeDasharray="30 50 8 70"
                />
              </svg>

              {/* Luminous motes. */}
              <div className="crimson-motes" aria-hidden="true">
                {MOTES.map((mote, index) => (
                  <span
                    key={index}
                    className="crimson-mote"
                    style={{
                      left: `${mote.x}%`,
                      top: `${mote.y}%`,
                      width: mote.s,
                      height: mote.s,
                      ["--dur" as string]: `${mote.dur}s`,
                      ["--dx" as string]: `${mote.dx}px`,
                      ["--dy" as string]: `${mote.dy}px`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ============================ RIGHT — name + cosmos ========== */}
          <div className="relative z-10 flex flex-col lg:col-start-3 lg:row-start-1">
            {/* The planetary system, behind and around the typography. */}
            {desktop ? (
              <div
                aria-hidden="true"
                data-depth="0.05"
                className="pointer-events-none absolute -bottom-[6%] -left-[34%] -right-[7%] -top-[9%] z-0"
              >
                {noWebGL ? (
                  <CosmosStatic />
                ) : (
                  <Suspense fallback={<CosmosStatic />}>
                    <NameCosmos
                      reducedMotion={reduced}
                      active={active}
                      progressRef={progressRef}
                      scale={scale}
                    />
                  </Suspense>
                )}
              </div>
            ) : null}
            {!desktop ? (
              // A hint of the same cosmos without the WebGL cost on phones.
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-[40%] -right-[6%] -top-[30%] bottom-[36%] opacity-45"
              >
                <CosmosStatic />
              </div>
            ) : null}

            <NameColumn className="relative z-10 lg:mt-[14%]" />

            {/* Circular scroll cue — lower right. */}
            <div
              className="relative z-10 mt-12 hidden justify-end lg:flex"
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
