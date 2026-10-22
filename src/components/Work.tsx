import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  DISCIPLINES,
  projects,
  projectsByDiscipline,
  type Project,
} from "@/lib/projects";
import { Reveal } from "./Reveal";
import ProjectDetail from "./ProjectDetail";

/**
 * Chapter 05 — the work.
 *
 * An index, not a card wall: each discipline opens with its own numbered
 * heading and standfirst, then the projects are set as editorial rows — one
 * large serif title per line, a category beneath it, and the whole row as the
 * control that opens the detail panel.
 */
export default function Work() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section
      id="work"
      className="relative border-t border-line/60 px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1560px]">
        <Reveal>
          <div className="flex items-baseline justify-between gap-4">
            <span className="meta text-[10.5px] tracking-[0.34em] text-crimson">
              Chapter 05 — Selected Work
            </span>
            <span className="meta hidden text-[10.5px] tracking-[0.34em] sm:block">
              {String(projects.length).padStart(2, "0")} entries · Three disciplines
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-20">
          <Reveal delay={60}>
            <h2 className="font-editorial text-[clamp(2.5rem,6vw,5.2rem)] leading-[0.95] text-ivory">
              A body of work in
              <br />
              <span className="type-italic text-crimson">three</span> registers.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-[15px] leading-[1.85] text-ash lg:pb-3">
              Systems built, stories framed, identities composed. Select an entry
              to read the thinking behind it — the index stays deliberately quiet
              so the work itself is the loudest thing on the page.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 sm:mt-20">
          {DISCIPLINES.map((discipline, disciplineIndex) => {
            const entries = projectsByDiscipline(discipline.id);
            return (
              <div
                key={discipline.id}
                id={`work-${discipline.id}`}
                className={
                  disciplineIndex === 0
                    ? "scroll-mt-28"
                    : "mt-20 scroll-mt-28 border-t border-line/70 pt-10 sm:mt-24"
                }
              >
                <div className="grid gap-8 lg:grid-cols-[1.05fr_1.95fr] lg:gap-16 xl:gap-24">
                  <Reveal>
                    <div
                      className={
                        disciplineIndex === 1
                          ? "lg:pl-8 xl:pl-14"
                          : disciplineIndex === 2
                            ? "lg:pl-3 xl:pl-6"
                            : ""
                      }
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-signature text-[1.55rem] leading-none text-crimson">
                          {discipline.numeral}
                        </span>
                        <span className="meta text-[10px] tracking-[0.3em]">
                          {String(entries.length).padStart(2, "0")} projects
                        </span>
                      </div>
                      <h3 className="mt-5 font-editorial text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.02] text-ivory">
                        {discipline.label}
                      </h3>
                      <p className="type-italic mt-2 text-lg text-crimson/90">
                        {discipline.tagline}
                      </p>
                      <p className="mt-5 max-w-sm text-[14px] leading-[1.8] text-ash">
                        {discipline.blurb}
                      </p>
                    </div>
                  </Reveal>

                  <div>
                    {entries.map((project, index) => (
                      <Reveal key={project.title} delay={index * 70}>
                        <button
                          type="button"
                          onClick={() => setActive(project)}
                          className="work-row group grid w-full grid-cols-[2.2rem_1fr_auto] items-center gap-4 border-b border-line/60 py-7 text-left sm:grid-cols-[3rem_1fr_9rem_auto] sm:gap-6 sm:py-8"
                          aria-haspopup="dialog"
                        >
                          <span className="meta text-[10px] tracking-[0.26em] text-ash/70">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span>
                            <span className="work-title block font-editorial text-[clamp(1.5rem,2.9vw,2.35rem)] leading-[1.06] text-ivory">
                              {project.title}
                            </span>
                            <span className="meta mt-2 block text-[10px] tracking-[0.26em] sm:hidden">
                              {project.category}
                            </span>
                          </span>
                          <span className="meta hidden text-[10px] tracking-[0.24em] sm:block">
                            {project.category}
                          </span>
                          <ArrowUpRight
                            className="work-arrow size-4 text-ivory"
                            aria-hidden="true"
                          />
                        </button>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line/60 pt-6">
            <p className="meta text-[10px] tracking-[0.3em]">
              Full case studies available on request
            </p>
            <a
              href="#contact"
              className="link-underline font-mono text-[10px] uppercase tracking-[0.24em] text-ivory"
            >
              Request the full portfolio
            </a>
          </div>
        </Reveal>
      </div>

      <ProjectDetail project={active} onClose={() => setActive(null)} />
    </section>
  );
}
