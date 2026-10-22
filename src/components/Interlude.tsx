import { Reveal } from "./Reveal";
import { Flourish } from "./ornaments";

const PILLARS = [
  { label: "Intelligence", detail: "Systems, models, experiments" },
  { label: "Cinema", detail: "Frames, cuts, atmosphere" },
  { label: "Design", detail: "Type, identity, composition" },
];

/**
 * Chapter 03 — the visual interlude.
 *
 * A full-bleed oxblood frame instead of borrowed imagery: the working principle
 * set large, the crest bled off the right edge, and no stock photograph pretending
 * to be Rishi's work.
 */
export default function Interlude() {
  return (
    <section
      aria-labelledby="interlude-title"
      className="grain relative isolate overflow-hidden border-y border-crimson/25 bg-[#0f0607] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_130%_at_15%_0%,rgba(101,13,25,0.85)_0%,rgba(52,8,14,0.65)_38%,rgba(8,8,8,0.98)_78%)]" />
        <div className="pointer-events-none absolute -right-14 top-24 hidden w-[21rem] lg:block xl:top-32 xl:w-[29rem]">
          <img
            src="/portrait-echo.webp"
            alt=""
            width={900}
            height={890}
            loading="lazy"
            decoding="async"
            className="portrait-echo w-full"
          />
        </div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ember/30 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-[1560px]">
        <div className="flex items-baseline justify-between gap-4">
          <span className="meta text-[10.5px] tracking-[0.34em] text-ember/80">
            Chapter 03 — Working Principle
          </span>
          <span className="meta hidden text-[10.5px] tracking-[0.34em] text-ivory/50 sm:block">
            The visual interlude
          </span>
        </div>

        <Reveal>
          <blockquote
            id="interlude-title"
            className="mt-12 max-w-5xl font-editorial text-[clamp(2.3rem,6vw,5.4rem)] leading-[0.98] text-ivory"
          >
            <span className="block">Create with intention.</span>
            <span className="type-italic block text-ember">Tell stories through visuals.</span>
            <span className="block">
              Never stop <span className="type-outline">experimenting.</span>
            </span>
          </blockquote>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Flourish className="w-40 text-ember/70" />
            <cite className="meta not-italic text-[10px] tracking-[0.3em] text-ivory/60">
              Rishi Naskar — Studio principle
            </cite>
          </div>
        </Reveal>

        <dl className="mt-16 grid gap-px border-t border-crimson/25 sm:grid-cols-3">
          {PILLARS.map((pillar) => (
            <Reveal key={pillar.label} delay={80}>
              <div className="border-b border-crimson/20 py-6 pr-6 sm:border-b-0">
                <dt className="font-editorial text-2xl text-ivory">{pillar.label}</dt>
                <dd className="meta mt-2 text-[10px] tracking-[0.28em] text-ivory/45">
                  {pillar.detail}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
