import { Reveal } from "./Reveal";
import { MobileCollapse } from "./MobileCollapse";
import { ChapterRule } from "./ornaments";

const DISCIPLINES = [
  {
    num: "I",
    title: "AI Engineering",
    standfirst: "Systems that learn.",
    note: "Building the machine, then teaching it to see, write and generate. Models treated as instruments rather than products.",
    parts: [
      "Applied machine learning",
      "Generative & creative tooling",
      "Computer vision experiments",
      "Automation for post-production",
    ],
  },
  {
    num: "II",
    title: "Cinematography",
    standfirst: "Light that speaks.",
    note: "Framing, movement and the cut. The camera is a way of deciding what an audience is allowed to feel, and when.",
    parts: [
      "Framing & composition",
      "Lighting for mood",
      "Edit, colour & grade",
      "Cinematic photo retouching",
    ],
  },
  {
    num: "III",
    title: "Graphic Design",
    standfirst: "Type with intent.",
    note: "Posters, identities and editorial systems — composition as an argument, and restraint as the loudest move available.",
    parts: [
      "Posters & campaign systems",
      "Visual identity",
      "Editorial & social design",
      "Typography & layout",
    ],
  },
];

/**
 * Chapter 02 — the creative identity.
 *
 * A typographic composition rather than three cards: each discipline is a
 * numbered row with its own indentation, so the list reads as one system with
 * three centres of gravity.
 */
export default function Identity() {
  return (
    <section
      id="identity"
      className="relative border-t border-line/60 px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1560px]">
        <Reveal>
          <div className="flex items-baseline justify-between gap-4">
            <span className="meta text-[clamp(11px,2.6vw,14px)] tracking-[0.34em] text-crimson">
              Chapter 02 — The Creative Identity
            </span>
            <span className="meta hidden text-[9.5px] tracking-[0.34em] sm:block">
              Three disciplines · One practice
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.45fr_0.55fr] lg:items-end lg:gap-20">
          <Reveal delay={60}>
            <h2 className="font-editorial text-[clamp(2.4rem,5.6vw,4.9rem)] leading-[0.98] text-ivory">
              A single practice with
              <br />
              <span className="type-italic text-crimson">three</span> ways of
              seeing.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-[15px] leading-[1.85] text-ash lg:pb-2">
              The engineering, the camera and the layout grid are not separate
              careers. They are three instruments for the same question: how does
              an idea become something someone can feel?
            </p>
          </Reveal>
        </div>

        <ChapterRule className="mt-14" />

        <div className="mt-4">
          {DISCIPLINES.map((discipline, index) => (
            <Reveal key={discipline.title} delay={index * 90}>
              <article
                className={[
                  "group grid gap-5 border-b border-line/60 py-10 sm:gap-7 lg:grid-cols-[5rem_1.15fr_1fr] lg:items-start lg:py-12",
                  index === 1 ? "lg:pl-14 xl:pl-24" : "",
                  index === 2 ? "lg:pl-6 xl:pl-10" : "",
                ].join(" ")}
              >
                <div className="flex items-baseline gap-4 lg:block">
                  <span className="font-signature text-2xl leading-none text-crimson/80 transition-colors duration-500 group-hover:text-crimson sm:text-3xl">
                    {discipline.num}
                  </span>
                  <span className="meta text-[9px] tracking-[0.3em] lg:mt-4 lg:block">
                    Discipline
                  </span>
                </div>

                <div>
                  <h3 className="font-editorial text-[clamp(1.7rem,3.6vw,2.9rem)] leading-none text-ivory transition-transform duration-700 group-hover:translate-x-1.5">
                    {discipline.title}
                  </h3>
                  <p className="type-italic mt-2 text-lg text-crimson/90 sm:text-xl">
                    {discipline.standfirst}
                  </p>
                  <p className="mt-4 max-w-md text-[14.5px] leading-[1.8] text-ash">
                    {discipline.note}
                  </p>
                </div>

                <MobileCollapse summary="Capabilities">
                  <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:pt-1.5">
                    {discipline.parts.map((part) => (
                      <li
                        key={part}
                        className="flex items-baseline gap-3 border-b border-line/40 pb-2 text-[13px] leading-snug text-ivory/75"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1 size-1 shrink-0 rotate-45 bg-crimson/70"
                        />
                        {part}
                      </li>
                    ))}
                  </ul>
                </MobileCollapse>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
