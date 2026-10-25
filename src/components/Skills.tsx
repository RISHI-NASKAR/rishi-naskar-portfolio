import { Reveal } from "./Reveal";
import { MobileCollapse } from "./MobileCollapse";

const GROUPS = [
  {
    label: "Artificial Intelligence & Machine Learning",
    numeral: "01",
    items: [
      "Applied machine learning",
      "Generative & creative tooling",
      "Computer vision experiments",
      "Creative automation",
    ],
  },
  {
    label: "Programming & Software",
    numeral: "02",
    items: [
      "React & TypeScript interfaces",
      "Automation & scripting",
      "Creative coding",
      "Post-production tooling",
    ],
  },
  {
    label: "Cinematography & Storytelling",
    numeral: "03",
    items: [
      "Framing & composition",
      "Lighting for mood",
      "Edit, colour & grade",
      "Cinematic photo retouching",
    ],
  },
  {
    label: "Graphic Design & Visual Communication",
    numeral: "04",
    items: [
      "Posters & campaign systems",
      "Visual identity",
      "Editorial & social design",
      "Typography & layout",
    ],
  },
];

/**
 * Chapter 06 — capabilities.
 *
 * No meters and no invented percentages: four groups, each a short list with
 * its own rule work. The second column drops half a step so the page never reads
 * as a table.
 */
export default function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-line/60 px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1560px]">
        <Reveal>
          <div className="flex items-baseline justify-between gap-4">
            <span className="meta text-[10.5px] tracking-[0.34em] text-crimson">
              Chapter 06 — Capabilities
            </span>
            <span className="meta hidden text-[10.5px] tracking-[0.34em] sm:block">
              Four disciplines · One method
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-20">
          <Reveal delay={60}>
            <h2 className="font-editorial text-[clamp(2.4rem,5.4vw,4.7rem)] leading-[0.98] text-ivory">
              The craft,
              <span className="type-italic text-crimson"> grouped</span>.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-[15px] leading-[1.85] text-ash lg:pb-2">
              What I actually reach for, kept honest: no proficiency bars, no
              invented percentages. Each line is something that has shipped in a
              project or a film.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-16 gap-y-12 border-t border-line/70 pt-12 sm:grid-cols-2 lg:gap-x-24">
          {GROUPS.map((group, index) => (
            <Reveal
              key={group.numeral}
              delay={(index % 2) * 90}
              className={index % 2 === 1 ? "lg:mt-12" : ""}
            >
              <div className="border-t border-line/50 pt-5">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="meta text-[10px] tracking-[0.3em] text-crimson/90">
                    {group.numeral}
                  </span>
                  <span className="meta text-[10px] tracking-[0.24em]">
                    {String(group.items.length).padStart(2, "0")} skills
                  </span>
                </div>
                <h3 className="mt-4 max-w-[18ch] font-editorial text-[1.65rem] leading-[1.1] text-ivory">
                  {group.label}
                </h3>
                <MobileCollapse summary="Show the craft">
                  <ul className="mt-6">
                    {group.items.map((item, itemIndex) => (
                      <li
                        key={item}
                        className="group flex items-baseline justify-between gap-6 border-b border-line/40 py-3 text-[13.5px] leading-snug text-ivory/80 transition-colors duration-300 hover:text-ivory"
                      >
                        <span className="flex items-baseline gap-3">
                          <span
                            aria-hidden="true"
                            className="size-1 shrink-0 rotate-45 bg-crimson/0 transition-colors duration-300 group-hover:bg-crimson"
                          />
                          {item}
                        </span>
                        <span className="meta text-[9.5px] tracking-[0.24em] text-ash/50">
                          {String(itemIndex + 1).padStart(2, "0")}
                        </span>
                      </li>
                    ))}
                  </ul>
                </MobileCollapse>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
