import { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

/**
 * Project detail view. Opens over the gallery with a smooth scale/fade,
 * locks background scroll, closes on Escape or backdrop click.
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

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} — project details`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[#14130F]/70 p-4 sm:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 34, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
        className="my-auto w-full max-w-3xl rounded-[24px] border border-border bg-background p-6 shadow-[0_40px_120px_-40px_rgba(26,24,20,0.7)] sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="rule-heavy flex items-start justify-between gap-6 pt-4">
          <div>
            <span className="font-mono-label text-[11px] text-muted-foreground">
              {project.num} — Project
            </span>
            <h3 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project"
            data-cursor="Close"
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* image */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-[#14130F]" style={{ aspectRatio: "16 / 9" }}>
          <img
            src={project.image}
            alt={`${project.title} — placeholder artwork`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover grayscale"
          />
        </div>

        {/* meta grid */}
        <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
          <div>
            <dt className="font-mono-label text-[10px] text-muted-foreground">Category</dt>
            <dd className="mt-1.5 text-sm">{project.category}</dd>
          </div>
          <div>
            <dt className="font-mono-label text-[10px] text-muted-foreground">Year</dt>
            <dd className="mt-1.5 text-sm">{project.year}</dd>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <dt className="font-mono-label text-[10px] text-muted-foreground">Status</dt>
            <dd className="mt-1.5 text-sm">Sample content — replace</dd>
          </div>
        </dl>

        {/* copy */}
        <div className="mt-8 space-y-4 border-t border-border pt-6">
          <p className="text-base leading-relaxed sm:text-lg">{project.description}</p>
          <ul className="space-y-2">
            {project.details.map((line) => (
              <li key={line} className="flex gap-3 text-sm text-muted-foreground">
                <span aria-hidden="true" className="mt-2 h-px w-5 shrink-0 bg-border" />
                {line}
              </li>
            ))}
          </ul>
          <p className="font-mono-label pt-2 text-[10px] text-muted-foreground">
            Placeholder copy — swap in real project details, credits and links.
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-8 w-full rounded-full bg-foreground px-6 py-3 font-mono-label text-[11px] text-background transition-transform hover:-translate-y-0.5"
        >
          Back to gallery
        </button>
      </motion.div>
    </motion.div>
  );
}
