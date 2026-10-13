import { useRef, useState } from "react";
import { useReducedMotion, usePointerScale } from "@/hooks/use-reduced-motion";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

const EASE = "cubic-bezier(0.2, 0.7, 0.2, 1)";

/**
 * Large immersive project card.
 * - Subtle 3D tilt following the cursor (disabled on touch / reduced motion)
 * - Image parallax inside the frame
 * - Hover reveals the description; click opens the project detail modal
 */
export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isReduced = useReducedMotion();
  const scale = usePointerScale();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleMove = (e: React.MouseEvent) => {
    if (isReduced) return;
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    // Reduced tilt strength on smaller viewports.
    setTilt({ x: px * scale, y: py * scale });
  };

  const reset = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  const tiltStyle: React.CSSProperties = isReduced
    ? {}
    : {
        transform: `perspective(1100px) rotateX(${(-tilt.y * 6).toFixed(2)}deg) rotateY(${(tilt.x * 7).toFixed(2)}deg)`,
        transition: `transform 0.3s ${EASE}`,
      };

  const parallaxStyle: React.CSSProperties = isReduced
    ? {}
    : {
        transform: `translate3d(${(tilt.x * -18).toFixed(2)}px, ${(tilt.y * -14).toFixed(2)}px, 0) scale(1.08)`,
        transition: `transform 0.4s ${EASE}`,
      };

  return (
    <article
      ref={cardRef}
      role="button"
      tabIndex={0}
      aria-label={`Open project ${project.num} — ${project.title}`}
      data-cursor="View work"
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={reset}
      onClick={() => onOpen(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(project);
        }
      }}
      className="group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-foreground/60"
      style={tiltStyle}
    >
      {/* image frame */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-[#14130F] shadow-[0_24px_70px_-40px_rgba(26,24,20,0.6)]" style={{ aspectRatio: "4 / 3" }}>
        {!failed ? (
          <img
            src={project.image}
            alt={`${project.title} — placeholder artwork, replace with your own`}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover grayscale transition-[filter] duration-500 group-hover:grayscale-0"
            style={parallaxStyle}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#1F1C15]">
            <span className="font-display text-7xl text-[#EDEAE1]/30">{project.num}</span>
          </div>
        )}
        {/* index chip */}
        <span className="absolute left-4 top-4 rounded-full border border-[#EDEAE1]/30 bg-[#14130F]/70 px-3 py-1 font-mono-label text-[10px] text-[#EDEAE1]">
          {project.num}
        </span>
        {/* hover reveal */}
        <div
          className="absolute inset-x-0 bottom-0 translate-y-full bg-[#14130F]/92 px-5 py-5 transition-transform duration-500 group-hover:translate-y-0 group-focus-visible:translate-y-0"
          style={{ transitionTimingFunction: EASE }}
        >
          <p className="text-sm leading-relaxed text-[#EDEAE1]/85">{project.description}</p>
          <p className="mt-3 font-mono-label text-[10px] text-[#EDEAE1]/55">Click to open project</p>
        </div>
      </div>

      {/* meta */}
      <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-border pt-3">
        <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          {project.title}
        </h3>
        <span className="shrink-0 font-mono-label text-[10px] text-muted-foreground">
          {project.category} · {project.year}
        </span>
      </div>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground sm:hidden">
        {project.description}
      </p>
      <span
        aria-hidden="true"
        className="mt-3 block h-px w-0 bg-foreground transition-all duration-500 group-hover:w-full"
        style={{ transitionTimingFunction: EASE, opacity: hovered ? 1 : 0.4 }}
      />
    </article>
  );
}
