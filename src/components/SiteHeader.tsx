import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LINKS, mailto } from "@/lib/links";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

/**
 * Minimal editorial navigation. A hairline appears once the page has moved, the
 * current chapter is marked with a single crimson rule, and the mobile menu is
 * a full-height typographic panel rather than a dropdown.
 */
export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);
  const closeMenuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV.map((item) => document.getElementById(item.id)).filter(
      (node): node is HTMLElement => Boolean(node),
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    closeMenuRef.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled || open
            ? "border-b border-line/70 bg-ink/88 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-[1560px] items-center justify-between gap-6 px-5 sm:h-20 sm:px-8 lg:px-12">
          <a href="/" className="group flex items-center gap-3.5" aria-label="Rishi Naskar — back to homepage">
            <img
              src="/portrait-thumb.webp"
              alt=""
              width={192}
              height={192}
              decoding="async"
              className="size-10 shrink-0 rounded-full object-cover object-top"
              aria-hidden="true"
            />
            <span className="hidden leading-none sm:block">
              <span className="font-signature block text-[14px] tracking-[0.14em] text-ivory">
                Rishi Naskar
              </span>
              <span className="meta mt-1.5 block text-[10px] tracking-[0.28em] text-ash">
                AI · Cinema · Design
              </span>
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "group relative px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.24em] transition-colors duration-300",
                    isActive ? "text-ivory border-b-2 border-crimson" : "text-ash hover:text-ivory hover:border-b-2 hover:border-crimson",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-crimson transition-transform duration-500",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={mailto}
              className="hidden items-center gap-2 border border-line/90 px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ivory transition-colors duration-300 hover:border-crimson hover:text-white sm:inline-flex"
            >
              Enquire
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="inline-flex items-center gap-2.5 border border-line/90 px-3.5 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ivory md:hidden"
            >
              <span aria-hidden="true" className="flex w-3.5 flex-col gap-[3px]">
                <span className="h-px w-full bg-current" />
                <span className="h-px w-full bg-current" />
                <span className="h-px w-2/3 bg-current" />
              </span>
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Mobile chapter panel */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        inert={!open}
        className={cn(
          "fixed inset-0 z-[60] bg-ink transition-opacity duration-500 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-full flex-col px-5 pb-10 pt-5 sm:px-8">
          <div className="flex items-center justify-between">
            <span className="font-signature text-[14px] tracking-[0.14em] text-ivory">
              Rishi Naskar
            </span>
            <button
              ref={closeMenuRef}
              type="button"
              onClick={() => setOpen(false)}
              className="grid size-10 place-items-center border border-line/90 text-ivory"
              aria-label="Close menu"
            >
              <span aria-hidden="true" className="relative block size-4">
                <span className="absolute left-0 top-1/2 h-px w-4 rotate-45 bg-current" />
                <span className="absolute left-0 top-1/2 h-px w-4 -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-16 flex flex-col">
            {NAV.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between border-b border-line/60 py-4"
              >
                <span className="font-editorial text-[2.4rem] leading-none text-ivory">
                  {item.label}
                </span>
                <span className="meta text-[10px] tracking-[0.3em] text-crimson">
                  0{index + 1}
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-3 pt-10">
            <a href={mailto} className="block font-editorial text-lg text-ivory">
              {LINKS.email}
            </a>
            <div className="flex gap-5">
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="meta text-[10px] hover:text-ivory"
              >
                LinkedIn
              </a>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="meta text-[10px] hover:text-ivory"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
