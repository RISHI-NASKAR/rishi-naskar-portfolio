import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects, type Project } from "@/lib/projects";

/**
 * Selected Work — the main portfolio gallery.
 * Six editable placeholder projects; click a card to open its detail modal.
 */
export default function Work() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      {/* section label */}
      <div className="rule-heavy mb-4 flex items-baseline justify-between gap-4 pt-4">
        <span className="font-mono-label text-[11px]">Selected Work</span>
        <span className="font-mono-label text-[11px] text-muted-foreground">02 / 03</span>
      </div>
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display font-semibold uppercase leading-[0.9] tracking-[-0.02em] text-[clamp(2.2rem,7vw,5.5rem)]">
          Recent <span className="italic text-muted-foreground">chapters</span>
        </h2>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Six starting points — visuals, posters, identity, social, film and
          experiments. Every image and line below is placeholder content, ready
          to be replaced with your own artwork.
        </p>
      </div>

      {/* gallery */}
      <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} onOpen={setActive} />
        ))}
      </div>

      <p className="mt-14 border-t border-border pt-4 font-mono-label text-[10px] text-muted-foreground">
        Sample gallery — replace titles, years, descriptions and images with
        real projects.
      </p>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
