import { useEffect, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { mailto } from "@/lib/links";
import { DISCIPLINES, projectNumber, type Project } from "@/lib/projects";
import { Monogram } from "./ornaments";

/**
 * The project panel.
 *
 * A typographic sheet rather than a media modal: real title, real description,
 * whatever real detail lines and links exist. Nothing is invented to fill the
 * space — if a project has no stack or link, those blocks simply do not render.
 */
export default function ProjectDetail({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!project) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;
      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      previousFocus?.focus?.();
    };
  }, [project]);

  if (!project) return null;

  const discipline = DISCIPLINES.find((item) => item.id === project.discipline);
  const number = projectNumber(project);

  return (
    <div className="fixed inset-0 z-[70]">
      <div
        aria-hidden="true"
        onClick={onClose}
        className="veil absolute inset-0 bg-ink/85 backdrop-blur-[3px]"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        className="sheet absolute inset-y-0 right-0 flex w-full flex-col border-l border-crimson/30 bg-[#0b090a] shadow-[0_0_120px_rgba(0,0,0,0.8)] sm:max-w-[620px]"
      >
        <header className="flex shrink-0 items-center justify-between gap-4 border-b border-line/70 px-6 py-5 sm:px-9">
          <span className="meta text-[10px] tracking-[0.3em]">
            Project {number} — {discipline?.label ?? "Selected work"}
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="grid size-9 place-items-center border border-line/80 text-ivory transition-colors hover:border-crimson hover:text-white"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </header>

        <div className="relative flex-1 overflow-y-auto px-6 pb-14 pt-10 sm:px-9">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 top-6 -z-0 opacity-[0.14]"
          >
            <Monogram className="w-52" />
          </div>

          <div className="relative">
            <span className="font-signature block text-[3.4rem] leading-none text-crimson/35">
              {number}
            </span>

            <h2
              id="project-title"
              className="mt-4 font-editorial text-[clamp(2.1rem,5.4vw,3.2rem)] leading-[1.02] text-ivory"
            >
              {project.title}
            </h2>
            <p className="meta mt-4 text-[10px] tracking-[0.3em] text-crimson/90">
              {project.category}
            </p>

            <p className="mt-8 font-editorial text-[1.35rem] leading-[1.45] text-ivory/90">
              {project.description}
            </p>

            <div className="mt-10 border-t border-line/70 pt-6">
              <h3 className="meta text-[10px] tracking-[0.32em]">Scope</h3>
              <ul className="mt-4 space-y-3">
                {project.details.map((line) => (
                  <li
                    key={line}
                    className="flex items-baseline gap-3 text-[14px] leading-relaxed text-ash"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 size-1 shrink-0 rotate-45 bg-crimson/80"
                    />
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            {project.stack?.length ? (
              <div className="mt-9 border-t border-line/70 pt-6">
                <h3 className="meta text-[10px] tracking-[0.32em]">Tools</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tool) => (
                    <li
                      key={tool}
                      className="border border-line/80 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ivory/75"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-noir mt-9 group"
              >
                {project.linkLabel ?? "View project"}
                <ArrowUpRight
                  className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            ) : null}

            <div className="mt-12 border-t border-line/70 pt-6">
              <p className="font-editorial text-xl italic text-ivory/80">
                Something like this in mind?
              </p>
              <a
                href={mailto}
                className="link-underline mt-3 inline-block font-mono text-[10.5px] uppercase tracking-[0.24em] text-crimson"
              >
                Start a conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
