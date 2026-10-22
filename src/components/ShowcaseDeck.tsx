import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, type TargetAndTransition } from "framer-motion";
import { PHASES, phaseHeight, type Phase } from "@/lib/journey";
import { journey } from "@/lib/journey-store";
import { usePointerScale, useReducedMotion } from "@/hooks/use-reduced-motion";
import {
  PROJECT_GROUPS,
  UNIVERSES,
  isPlaceholderYear,
  projects,
  type Project,
  type ProjectGroup,
  type ProjectUniverse,
} from "@/lib/projects";
import ProjectModal from "./ProjectModal";

const EASE = "cubic-bezier(0.22, 0.68, 0.16, 1)";
const NEUTRAL = "#5aa9ff";

type UniverseFilter = "all" | ProjectUniverse;

/**
 * Each universe makes its cards arrive differently — the AI chapter condenses
 * out of blur, the cinematic one slides in like a cut, the creative one rises
 * and settles. No two chapters fade the same way twice.
 */
const ENTRY: Record<UniverseFilter, { hidden: TargetAndTransition; show: TargetAndTransition }> = {
  all: {
    hidden: { opacity: 0, y: 42, rotateX: -6 },
    show: { opacity: 1, y: 0, rotateX: 0 },
  },
  ai: {
    hidden: { opacity: 0, scale: 0.94, filter: "blur(14px)" },
    show: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
  cinematic: {
    hidden: { opacity: 0, x: -56 },
    show: { opacity: 1, x: 0 },
  },
  creative: {
    hidden: { opacity: 0, y: 54, rotate: -1.6 },
    show: { opacity: 1, y: 0, rotate: 0 },
  },
};

/** One world, standing in for one piece of work. */
function ShowcaseCard({
  project,
  index,
  accent,
  entry,
  onOpen,
}: {
  project: Project;
  index: number;
  accent: string;
  entry: { hidden: TargetAndTransition; show: TargetAndTransition };
  onOpen: (project: Project) => void;
}) {
  const reduced = useReducedMotion();
  const scale = usePointerScale();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    if (reduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setTilt({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * scale,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * scale,
    });
  };

  const hidden = reduced ? undefined : entry.hidden;
  const show = reduced ? undefined : entry.show;

  return (
    <motion.article
      initial={hidden}
      whileInView={show}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.85, delay: (index % 3) * 0.09, ease: [0.22, 0.68, 0.16, 1] }}
      style={{ perspective: 1200 }}
      className="group"
    >
      <div
        role="button"
        tabIndex={0}
        aria-label={`Open project ${project.num} — ${project.title}`}
        data-cursor="Open work"
        onMouseMove={handleMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setTilt({ x: 0, y: 0 });
          setHovered(false);
        }}
        onClick={() => onOpen(project)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onOpen(project);
          }
        }}
        className="cursor-pointer rounded-[22px] border border-white/10 bg-[#070912]/70 p-3 backdrop-blur-md outline-none transition-[transform,border-color,box-shadow] duration-500 focus-visible:ring-2 focus-visible:ring-primary/70"
        style={
          reduced
            ? undefined
            : {
                transform: `rotateX(${(-tilt.y * 5).toFixed(2)}deg) rotateY(${(tilt.x * 6).toFixed(2)}deg) translateY(${hovered ? -6 : 0}px)`,
                transitionTimingFunction: EASE,
                borderColor: hovered ? `${accent}80` : undefined,
                boxShadow: hovered
                  ? `0 30px 80px -40px ${accent}90`
                  : "0 20px 60px -50px rgba(0,0,0,0.9)",
              }
        }
      >
        <div
          className="relative overflow-hidden rounded-[15px] bg-[#04060f]"
          style={{ aspectRatio: "16 / 9" }}
        >
          {!failed ? (
            <img
              src={project.image}
              alt={`${project.title} — sample artwork`}
              loading="lazy"
              decoding="async"
              onError={() => setFailed(true)}
              className="h-full w-full object-cover opacity-85 grayscale transition-[filter,opacity,transform] duration-700 group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0"
              style={
                reduced
                  ? undefined
                  : {
                      transform: `translate3d(${(tilt.x * -14).toFixed(2)}px, ${(tilt.y * -10).toFixed(2)}px, 0) scale(1.06)`,
                    }
              }
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(150deg,#0a1030,#04060f)]">
              <span className="font-display text-6xl text-white/25">
                {project.num}
              </span>
            </div>
          )}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_20%_0%,transparent_35%,rgba(2,4,12,0.85)_100%)]"
          />
          <span className="absolute top-3 left-3 rounded-full border border-white/20 bg-black/55 px-2.5 py-1 font-mono text-[11px] tracking-[0.12em] text-white/85 backdrop-blur-sm">
            {project.num}
          </span>
          {!isPlaceholderYear(project.year) && (
            <span
              className="absolute top-3 right-3 rounded-full border bg-black/55 px-2.5 py-1 font-mono text-[11px] tracking-[0.1em] backdrop-blur-sm"
              style={{ color: accent, borderColor: `${accent}66` }}
            >
              {project.year}
            </span>
          )}
        </div>

        <div className="px-1 pt-3 pb-1 sm:px-2 sm:pt-4">
          <h3 className="font-display text-[17px] leading-tight font-medium tracking-[-0.01em] text-white sm:text-2xl">
            {project.title}
          </h3>
          <div className="mt-1.5 flex items-baseline justify-between gap-3">
            <p className="text-[12.5px] leading-snug text-white/60">
              {project.category}
            </p>
            <span
              aria-hidden="true"
              className={`font-display hidden text-[12px] tracking-[0.14em] transition-opacity duration-500 sm:inline ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
              style={{ color: accent }}
            >
              Open →
            </span>
          </div>
          <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-white/55 sm:mt-3">
            {project.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

/**
 * The works phase: three universes of work — AI, cinematic and creative —
 * each with its own chapter identity, accent and entrance, all opening the
 * real project detail panel. The original practice filters still narrow within
 * a universe, and selecting one re-lights the wire web in the 3D scene.
 */
export default function ShowcaseDeck() {
  const phase = PHASES.find((p) => p.key === "works") as Phase;
  const reduced = useReducedMotion();
  const [active, setActive] = useState<Project | null>(null);
  const [universe, setUniverse] = useState<UniverseFilter>("all");
  const [group, setGroup] = useState<ProjectGroup | "all">("all");

  // The scene reads this every frame — no React churn while scrolling.
  useEffect(() => {
    const index = UNIVERSES.findIndex((entry) => entry.id === universe);
    journey.universe = universe === "all" ? 0 : index + 1;
  }, [universe]);

  const chapter = UNIVERSES.find((entry) => entry.id === universe);
  const accent = chapter?.accent ?? NEUTRAL;

  const visible = useMemo(
    () =>
      projects.filter(
        (project) =>
          (universe === "all" || project.universe === universe) &&
          (group === "all" || project.group === group),
      ),
    [universe, group],
  );

  const entry = ENTRY[universe];

  return (
    <div id="works" className="relative w-full" style={{ height: phaseHeight("works") }}>
      <div className="flex h-full w-full flex-col justify-center">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-10 sm:px-8 lg:px-14">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="mb-5 flex items-center gap-3 font-display text-[12px] tracking-[0.26em] text-primary sm:text-[13px]">
                <span aria-hidden="true" className="h-px w-10 bg-primary/70" />
                {phase.kicker}
              </span>

              {/* the chapter identity swaps when a universe is chosen */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={universe}
                  initial={reduced ? undefined : { opacity: 0, y: 18, filter: "blur(10px)" }}
                  animate={reduced ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={reduced ? undefined : { opacity: 0, y: -12, filter: "blur(6px)" }}
                  transition={{ duration: 0.45, ease: [0.22, 0.68, 0.16, 1] }}
                >
                  <h2
                    className="font-display text-[clamp(1.9rem,5.4vw,4.7rem)] leading-[0.95] font-medium tracking-[-0.02em] text-white"
                    style={chapter ? { color: accent } : undefined}
                  >
                    {chapter ? chapter.label : phase.title}
                  </h2>
                  <p className="type-italic mt-5 max-w-xl text-[clamp(1.1rem,2.2vw,1.6rem)] leading-snug text-white/85">
                    {chapter ? chapter.blurb : phase.body[0]}
                  </p>
                  {!chapter && (
                    <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/65">
                      {phase.body[1]}
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="font-mono text-[11px] tracking-[0.16em] text-white/45">
              {String(visible.length).padStart(2, "0")}
              <span className="mx-1 text-white/25">/</span>
              {String(projects.length).padStart(2, "0")} worlds
            </p>
          </div>

          {/* universes — primary chapters */}
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 border-b border-white/10 pb-3">
            <UniverseTab
              active={universe === "all"}
              label="All work"
              accent={NEUTRAL}
              onClick={() => setUniverse("all")}
            />
            {UNIVERSES.map((entry_) => (
              <UniverseTab
                key={entry_.id}
                active={universe === entry_.id}
                label={entry_.label}
                accent={entry_.accent}
                onClick={() => setUniverse(entry_.id)}
              />
            ))}
          </div>

          {/* practices — the original filters, still narrowing within a chapter */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setGroup("all")}
              className={`rounded-full px-3.5 py-1.5 text-[12.5px] transition-colors ${
                group === "all"
                  ? "border border-white/45 text-white"
                  : "border border-white/12 text-white/50 hover:border-white/35 hover:text-white/85"
              }`}
            >
              Every practice
            </button>
            {PROJECT_GROUPS.map((entry_) => (
              <button
                key={entry_.id}
                type="button"
                onClick={() => setGroup(entry_.id)}
                className={`rounded-full px-3.5 py-1.5 text-[12.5px] transition-colors ${
                  group === entry_.id
                    ? "border border-white/45 text-white"
                    : "border border-white/12 text-white/50 hover:border-white/35 hover:text-white/85"
                }`}
              >
                {entry_.label}
              </button>
            ))}
          </div>

          {/* the worlds */}
          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
            {visible.map((project, index) => (
              <ShowcaseCard
                key={project.slug}
                project={project}
                index={index}
                accent={accent}
                entry={entry}
                onOpen={setActive}
              />
            ))}
            {visible.length === 0 && (
              <p className="col-span-full rounded-2xl border border-white/10 bg-[#070912]/70 px-5 py-8 text-center text-sm text-white/55">
                Nothing filed under this filter yet — switch universe or practice
                to keep exploring.
              </p>
            )}
          </div>

          <p className="mt-8 border-t border-white/10 pt-4 text-[12.5px] leading-relaxed text-white/45">
            Sample gallery — titles, years, descriptions and images are starter
            content in <span className="font-mono text-white/60">src/lib/projects.ts</span>,
            ready to be swapped for the real projects.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <ProjectModal project={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

/** A chapter selector with a moving underline in that universe's colour. */
function UniverseTab({
  active,
  label,
  accent,
  onClick,
}: {
  active: boolean;
  label: string;
  accent: string;
  onClick: () => void;
}) {
  const reduced = useReducedMotion();
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      data-cursor={label}
      className={`relative pb-1 font-display text-[15px] tracking-[0.02em] transition-colors sm:text-[17px] ${
        active ? "text-white" : "text-white/45 hover:text-white/85"
      }`}
      style={active ? { color: accent } : undefined}
    >
      {label}
      {active && (
        <motion.span
          layoutId={reduced ? undefined : "universe-tab"}
          className="absolute -bottom-1.5 left-0 h-px w-full"
          style={{ background: accent }}
          transition={{ duration: 0.4, ease: [0.22, 0.68, 0.16, 1] }}
        />
      )}
    </button>
  );
}
