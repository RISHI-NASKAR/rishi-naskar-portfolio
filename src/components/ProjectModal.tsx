import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { UNIVERSES, isPlaceholderYear, type Project } from "@/lib/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

/**
 * Project detail view — a refined information panel: title, universe, category,
 * year, visual, description and detail lines, plus technologies and a link
 * *when the project actually has them* (never invented).
 * Opens over the gallery with a smooth scale/fade, locks background scroll,
 * closes on Escape or backdrop click.
 */
export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose]);

  if (!project) return null;

  const universe = UNIVERSES.find((entry) => entry.id === project.universe);
  const accent = universe?.accent ?? "#5aa9ff";

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} — project details`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[#02030a]/85 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 34, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
        className="my-auto w-full max-w-3xl rounded-[24px] border border-white/12 bg-[#070a14] p-6 shadow-[0_40px_140px_-40px_rgba(90,169,255,0.45)] sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="flex items-start justify-between gap-6 border-t-2 border-white/80 pt-4">
          <div>
            <span
              className="font-display text-[12px] tracking-[0.24em]"
              style={{ color: accent }}
            >
              {universe ? universe.label : "Project"}
              <span className="mx-2 text-white/30">—</span>
              {project.num}
            </span>
            <h3 className="mt-3 font-display text-3xl leading-[0.98] font-medium tracking-[-0.02em] text-white sm:text-5xl">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project"
            data-cursor="Close"
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-primary hover:bg-primary hover:text-black"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* image */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#04060f]" style={{ aspectRatio: "16 / 9" }}>
          <img
            src={project.image}
            alt={`${project.title} — sample artwork`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>

        {/* meta grid */}
        <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
          <div>
            <dt className="font-display text-[12px] tracking-[0.18em] text-white/45">
              Category
            </dt>
            <dd className="mt-1.5 text-sm text-white/85">{project.category}</dd>
          </div>
          {!isPlaceholderYear(project.year) && (
            <div>
              <dt className="font-display text-[12px] tracking-[0.18em] text-white/45">
                Year
              </dt>
              <dd className="mt-1.5 text-sm text-white/85">{project.year}</dd>
            </div>
          )}
          <div className="col-span-2 sm:col-span-1">
            <dt className="font-display text-[12px] tracking-[0.18em] text-white/45">
              Universe
            </dt>
            <dd className="mt-1.5 text-sm" style={{ color: accent }}>
              {universe?.label ?? "—"}
            </dd>
          </div>
        </dl>

        {/* copy */}
        <div className="mt-8 space-y-5 border-t border-white/10 pt-6">
          <p className="text-[17px] leading-relaxed text-white/90 sm:text-lg">
            {project.description}
          </p>
          <ul className="space-y-2.5">
            {project.details.map((line) => (
              <li key={line} className="flex gap-3 text-sm leading-relaxed text-white/65">
                <span
                  aria-hidden="true"
                  className="mt-2 h-px w-5 shrink-0"
                  style={{ background: accent }}
                />
                {line}
              </li>
            ))}
          </ul>

          {/* Technologies — only when the project actually lists them. */}
          {project.stack && project.stack.length > 0 && (
            <div>
              <p className="font-display text-[12px] tracking-[0.18em] text-white/45">
                Technologies
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-white/15 px-3 py-1 text-[12.5px] text-white/80"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="text-[13px] leading-relaxed text-white/50">
            Starter content — real credits, technologies and links drop into the
            gallery in{" "}
            <span className="font-mono text-white/65">src/lib/projects.ts</span>.
          </p>
        </div>

        {/* Link — only when the project has a real destination. */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer noopener"
            data-cursor="Open project"
            className="mt-6 inline-flex items-center gap-2 font-display text-[14px] tracking-[0.12em] text-white underline decoration-white/30 underline-offset-[6px] transition-colors hover:text-white hover:decoration-primary"
          >
            {project.linkLabel ?? "Open project"}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        )}

        <button
          type="button"
          onClick={onClose}
          className="mt-8 w-full rounded-full px-6 py-3 font-display text-[13px] font-medium tracking-[0.16em] text-black transition-transform hover:-translate-y-0.5"
          style={{ background: accent }}
        >
          Back to gallery
        </button>
      </motion.div>
    </motion.div>
  );
}
