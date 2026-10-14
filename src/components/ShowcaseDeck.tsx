import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PHASES, phaseHeight, type Phase } from "@/lib/journey";
import { usePointerScale, useReducedMotion } from "@/hooks/use-reduced-motion";
import {
  PROJECT_GROUPS,
  projects,
  type Project,
  type ProjectGroup,
} from "@/lib/projects";
import ProjectModal from "./ProjectModal";

const EASE = "cubic-bezier(0.22, 0.68, 0.16, 1)";

/** One world, standing in for one piece of work. */
function ShowcaseCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
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

  return (
    <motion.article
      initial={reduced ? undefined : { opacity: 0, y: 46, rotateX: -8 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.08, ease: [0.22, 0.68, 0.16, 1] }}
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
                borderColor: hovered ? "rgba(90,169,255,0.45)" : undefined,
                boxShadow: hovered
                  ? "0 30px 80px -40px rgba(90,169,255,0.65)"
                  : "0 20px 60px -50px rgba(0,0,0,0.9)",
              }
        }
      >
        <div
          className="relative overflow-hidden rounded-[15px] bg-[#04060f]"
          style={{ aspectRatio: "16 / 11" }}
        >
          {!failed ? (
            <img
              src={project.image}
              alt={`${project.title} — placeholder artwork, replace with your own`}
              loading="lazy"
              decoding="async"
              onError={() => setFailed(true)}
              className="h-full w-full object-cover opacity-80 grayscale transition-[filter,opacity,transform] duration-700 group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0"
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
          <span className="absolute top-3 left-3 rounded-full border border-white/20 bg-black/55 px-2.5 py-1 font-mono-label text-[9px] text-white/85 backdrop-blur-sm">
            {project.num}
          </span>
          <span className="absolute top-3 right-3 rounded-full border border-primary/40 bg-primary/15 px-2.5 py-1 font-mono-label text-[9px] text-primary backdrop-blur-sm">
            {project.year}
          </span>
        </div>

        <div className="px-1 pt-3 pb-1 sm:px-2 sm:pt-4">
          <h3 className="font-display text-base font-semibold tracking-tight text-white sm:text-2xl">
            {project.title}
          </h3>
          <div className="mt-1.5 flex items-baseline justify-between gap-3">
            <p className="font-mono-label text-[8px] text-white/45 sm:text-[9px]">
              {project.category}
            </p>
            <span
              aria-hidden="true"
              className={`font-mono-label hidden text-[9px] text-primary transition-opacity duration-500 sm:inline ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              Open →
            </span>
          </div>
          <p className="mt-2 line-clamp-2 text-[11px] leading-relaxed text-white/50 sm:mt-3 sm:text-xs">
            {project.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

/**
 * The creative universe.
 *
 * The cosmic worlds resolve into work: the same gallery, filterable by the kind
 * of practice it belongs to, with every card still opening the real project
 * detail view.
 */
export default function ShowcaseDeck() {
  const phase = PHASES.find((p) => p.key === "works") as Phase;
  const [active, setActive] = useState<Project | null>(null);
  const [filter, setFilter] = useState<ProjectGroup | "all">("all");

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.group === filter)),
    [filter],
  );

  return (
    <div id="works" className="relative w-full" style={{ height: phaseHeight("works") }}>
      <div className="flex h-full w-full flex-col justify-center">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 lg:px-14">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="mb-5 flex items-center gap-3 font-mono-label text-[10px] text-primary">
                <span aria-hidden="true" className="h-px w-10 bg-primary/60" />
                {phase.kicker}
              </span>
              <h2 className="font-display text-[clamp(1.9rem,5.2vw,4.6rem)] leading-[0.98] font-semibold tracking-[-0.01em] text-white uppercase">
                Creative universe
              </h2>
              <div className="mt-6 max-w-lg space-y-3">
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
            </div>

            <p className="font-mono-label text-[9px] text-white/35">
              {String(visible.length).padStart(2, "0")} / {projects.length} worlds
            </p>
          </div>

          {/* filters */}
          <div className="mt-8 flex flex-wrap items-center gap-2 border-y border-white/10 py-4">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`rounded-full px-4 py-2 font-mono-label text-[9px] transition-colors ${
                filter === "all"
                  ? "bg-primary text-black"
                  : "border border-white/15 text-white/55 hover:border-white/40 hover:text-white"
              }`}
            >
              All work
            </button>
            {PROJECT_GROUPS.map((group) => (
              <button
                key={group.id}
                type="button"
                onClick={() => setFilter(group.id)}
                className={`rounded-full px-4 py-2 font-mono-label text-[9px] transition-colors ${
                  filter === group.id
                    ? "bg-primary text-black"
                    : "border border-white/15 text-white/55 hover:border-white/40 hover:text-white"
                }`}
              >
                {group.label}
              </button>
            ))}
          </div>

          {/* the worlds */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 xl:grid-cols-3">
            {visible.map((project, index) => (
              <ShowcaseCard
                key={project.slug}
                project={project}
                index={index}
                onOpen={setActive}
              />
            ))}
          </div>

          <p className="mt-10 border-t border-white/10 pt-4 font-mono-label text-[9px] text-white/30">
            Sample gallery — replace titles, years, descriptions and images with
            real projects.
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
