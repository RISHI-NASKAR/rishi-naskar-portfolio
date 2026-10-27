import { Reveal } from "./Reveal";
import { MobileCollapse } from "./MobileCollapse";
import { ChapterRule, Flourish, Monogram } from "./ornaments";

const FACTS: { label: string; value: string }[] = [
  { label: "Focus", value: "Graphic design, film & visual storytelling" },
  { label: "Approach", value: "Imagery, typography, composition, atmosphere" },
  { label: "Study", value: "Computer Science & Engineering (AI), UEM Kolkata" },
  { label: "Working with", value: "Studios, founders and brands" },
];

/**
 * Chapter 04 — about.
 *
 * The intimate frame in the middle of the journal: a serif statement, three
 * short paragraphs of real biography, and a dossier plate with the facts that
 * are actually known. Nothing here is padded with invented credits.
 */
export default function About() {
  return (
    <section
      id="about"
      className="relative border-t border-line/60 px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1560px]">
        <Reveal>
          <div className="flex items-baseline justify-between gap-4">
            <span className="meta text-[clamp(11px,2.6vw,14px)] tracking-[0.34em] text-crimson">
              Chapter 04 — About
            </span>
            <span className="meta hidden text-[10.5px] tracking-[0.34em] sm:block">
              The person behind the practice
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 xl:gap-28">
          <div>
            <Reveal delay={60}>
              <h2 className="font-editorial text-[clamp(2.4rem,5.6vw,4.9rem)] leading-[0.98] text-ivory">
                Design is how
                <br />I see <span className="type-italic text-crimson">the world.</span>
              </h2>
            </Reveal>

            <div className="mt-10 max-w-2xl space-y-6">
              <Reveal delay={90}>
                <p className="font-editorial text-[1.55rem] leading-[1.4] text-ivory/90 sm:text-[1.7rem]">
                  I&apos;m Rishi Naskar, a creative working across artificial
                  intelligence, cinema and graphic design.
                </p>
              </Reveal>

              <MobileCollapse summary="The full story">
                <div className="space-y-6 pt-4">
                  <Reveal delay={140}>
                    <p className="text-[14.5px] leading-[1.9] text-ash sm:text-[15px]">
                      I use imagery, typography, composition and atmosphere to turn
                      ideas into visual experiences — and now and then I build the
                      tools that make them possible. My work sits between the edit
                      suite and the layout grid: cinematic photo editing and poster
                      design on one side, visual identity and storytelling through
                      film on the other.
                    </p>
                  </Reveal>

                  <Reveal delay={190}>
                    <p className="text-[14.5px] leading-[1.9] text-ash sm:text-[15px]">
                      Alongside that I study Computer Science and Engineering with a
                      specialisation in Artificial Intelligence at UEM Kolkata,
                      because technology keeps expanding what a story can look like.
                    </p>
                  </Reveal>
                </div>
              </MobileCollapse>

              <Reveal delay={240}>
                <p className="type-italic text-[1.3rem] leading-snug text-ivory/85 sm:text-[1.45rem]">
                  I don&apos;t want to make visuals that simply look good. I want
                  work that feels something, says something, and stays with
                  people.
                </p>
              </Reveal>

              <Reveal delay={280}>
                <div className="flex flex-wrap items-end justify-between gap-4 pt-4">
                  <span className="font-signature text-[1.35rem] tracking-[0.06em] text-ivory">
                    Rishi Naskar
                  </span>
                  <span className="meta text-[10px] tracking-[0.3em]">
                    AI · Cinema · Design
                  </span>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:pt-4">
            <Reveal delay={120}>
              <div
                data-depth="0.035"
                className="relative border border-line/70 bg-charcoal/40"
              >
                <div className="flex items-center justify-between gap-6 border-b border-line/60 px-6 py-6">
                  <Monogram className="w-24" />
                  <div className="text-right">
                    <p className="meta text-[10px] tracking-[0.3em] text-crimson/90">
                      Dossier
                    </p>
                    <p className="mt-2 font-editorial text-xl leading-tight text-ivory">
                      Rishi
                      <br />
                      Naskar
                    </p>
                  </div>
                </div>

                <dl>
                  {FACTS.map((fact) => (
                    <div
                      key={fact.label}
                      className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-line/50 px-6 py-4 last:border-b-0"
                    >
                      <dt className="meta pt-1 text-[9.5px] tracking-[0.26em] text-crimson/90">
                        {fact.label}
                      </dt>
                      <dd className="text-[13px] leading-relaxed text-ivory/80">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="px-6 py-5">
                  <p className="meta text-[9.5px] leading-[1.9] tracking-[0.24em] text-ash/70">
                    Currently studying AI engineering while taking on film,
                    identity and machine-learning work.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div
                data-depth="0.06"
                className="mt-8 flex items-center justify-between gap-4"
              >
                <Flourish className="w-40 opacity-70" />
                <span className="meta text-[9.5px] tracking-[0.3em]">
                  Rishi Naskar Films
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        <ChapterRule className="mt-20" />
      </div>
    </section>
  );
}
