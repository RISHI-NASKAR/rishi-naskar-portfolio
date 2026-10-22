import { ArrowUpRight } from "lucide-react";
import { LINKS, mailto, tel, whatsapp } from "@/lib/links";
import { Reveal } from "./Reveal";
import { Flourish, Monogram } from "./ornaments";

const COLUMNS: {
  label: string;
  rows: { label: string; href: string; display: string; external?: boolean }[];
}[] = [
  {
    label: "Direct",
    rows: [
      { label: "Email", href: mailto, display: LINKS.email },
      { label: "Phone", href: tel, display: LINKS.phoneDisplay },
      {
        label: "WhatsApp",
        href: whatsapp,
        display: LINKS.phoneDisplay,
        external: true,
      },
    ],
  },
  {
    label: "Elsewhere",
    rows: [
      {
        label: "LinkedIn",
        href: LINKS.linkedin,
        display: "linkedin.com/in/rishi-naskar",
        external: true,
      },
      {
        label: "GitHub",
        href: LINKS.github,
        display: LINKS.githubDisplay,
        external: true,
      },
      {
        label: "Instagram",
        href: LINKS.instagram,
        display: `@${LINKS.instagramHandle}`,
        external: true,
      },
      {
        label: "Studio desk",
        href: "/dashboard",
        display: "Private workspace",
      },
    ],
  },
];

/**
 * Chapter 07 — contact, and the closing frame.
 *
 * The page ends in a deep crimson atmosphere that falls back to black: one
 * statement, one action, and every verified way of reaching Rishi below it.
 */
export default function Contact() {
  return (
    <section
      id="contact"
      className="grain relative isolate overflow-hidden border-t border-crimson/30 px-5 pb-12 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pt-36"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_115%,rgba(181,18,43,0.5)_0%,rgba(101,13,25,0.55)_28%,rgba(20,6,9,0.9)_62%,#080808_92%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember/60 to-transparent" />
        <div className="absolute left-1/2 top-24 hidden h-64 w-64 -translate-x-1/2 rounded-full bg-crimson/20 blur-[110px] sm:block" />
      </div>

      <div className="mx-auto w-full max-w-[1560px]">
        <Reveal>
          <div className="flex items-baseline justify-between gap-4">
            <span className="meta text-[10.5px] tracking-[0.34em] text-ember/85">
              Chapter 07 — Contact
            </span>
            <span className="meta hidden text-[10.5px] tracking-[0.34em] text-ivory/50 sm:block">
              The final frame
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-20">
          <div>
            <Reveal delay={60}>
              <h2 className="font-editorial text-[clamp(2.6rem,6.6vw,5.8rem)] leading-[0.94] text-ivory">
                Every great idea
                <br />
                begins <span className="type-italic text-ember">somewhere.</span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-7 max-w-md text-[15px] leading-[1.85] text-ivory/70">
                Let&apos;s create something worth experiencing. Tell me the idea,
                the deadline and the feeling you&apos;re after — I&apos;ll reply
                with a point of view.
              </p>
            </Reveal>

            <Reveal delay={170}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href={mailto} className="btn-noir group">
                  Email me
                  <ArrowUpRight
                    className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-noir btn-ghost group"
                >
                  Message on WhatsApp
                  <ArrowUpRight
                    className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <a
                href={mailto}
                className="mt-10 inline-block font-editorial text-[clamp(1.35rem,3vw,2.1rem)] text-ivory/85 underline decoration-crimson/50 decoration-1 underline-offset-[10px] transition-colors duration-300 hover:text-white hover:decoration-ember"
              >
                {LINKS.email}
              </a>
            </Reveal>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1 lg:gap-8">
            {COLUMNS.map((column, columnIndex) => (
              <Reveal key={column.label} delay={140 + columnIndex * 80}>
                <div className="border-t border-ivory/15 pt-4">
                  <h3 className="meta text-[9.5px] tracking-[0.32em] text-ivory/50">
                    {column.label}
                  </h3>
                  <ul className="mt-3">
                    {column.rows.map((row) => {
                      const external = row.external || row.href.startsWith("http");
                      return (
                        <li
                          key={row.label + row.href}
                          className="group flex items-baseline justify-between gap-4 border-b border-ivory/10 py-3"
                        >
                          <a
                            href={row.href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noreferrer noopener" : undefined}
                            className="flex w-full items-baseline justify-between gap-4"
                          >
                            <span className="text-[13.5px] text-ivory/75 transition-colors duration-300 group-hover:text-white">
                              {row.label}
                            </span>
                            <span className="flex items-center gap-2 text-right font-mono text-[11px] tracking-[0.08em] text-ivory/55 transition-colors duration-300 group-hover:text-ivory">
                              {row.display}
                              <ArrowUpRight
                                className="size-3 shrink-0 opacity-50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                                aria-hidden="true"
                              />
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 flex items-center justify-center">
          <Flourish className="w-full max-w-md text-ember/60" />
        </div>

        <footer className="mt-8 border-t border-ivory/12 pt-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <Monogram className="w-14" />
              <div>
                <p className="font-signature text-[1.05rem] tracking-[0.08em] text-ivory">
                  Rishi Naskar
                </p>
                <p className="meta mt-1.5 text-[9.5px] tracking-[0.28em] text-ivory/45">
                  Rishi Naskar Films
                </p>
              </div>
            </div>

            <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Work", href: "#work" },
                { label: "Skills", href: "#skills" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="link-underline font-mono text-[10.5px] uppercase tracking-[0.24em] text-ivory/60 transition-colors hover:text-ivory"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <p className="meta text-[9.5px] tracking-[0.28em] text-ivory/40">
              © MMXXVI — All frames reserved
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
