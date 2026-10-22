import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const facts: { label: string; value: string }[] = [
  { label: "Focus", value: "Graphic design, film & visual storytelling" },
  { label: "Approach", value: "Imagery, typography, composition, atmosphere" },
  { label: "Study", value: "Computer Science & Engineering (AI), UEM Kolkata" },
  { label: "Working with", value: "Studios, founders and brands" },
];

/**
 * Skills — EDIT HERE. Three disciplines, each with its working parts. Kept in
 * step with the disciplines named in the opening frame.
 */
const disciplines: { title: string; note: string; skills: string[] }[] = [
  {
    title: "AI Engineering",
    note: "Where the machine meets the frame.",
    skills: [
      "Applied machine learning",
      "Generative & creative tooling",
      "Computer vision experiments",
      "Automation for post-production",
    ],
  },
  {
    title: "Cinematography",
    note: "Light, movement and the cut.",
    skills: [
      "Framing & composition",
      "Lighting for mood",
      "Edit, colour & grade",
      "Cinematic photo retouching",
    ],
  },
  {
    title: "Graphic Design",
    note: "Type, grid and atmosphere.",
    skills: [
      "Posters & campaign systems",
      "Visual identity",
      "Editorial & social design",
      "Typography & layout",
    ],
  },
];

/**
 * About — the landing at the end of the journey. Oversized editorial headline,
 * intro copy, the three disciplines with their skills, and a small facts grid.
 */
export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32 lg:px-14"
    >
      <div className="mb-12 flex items-baseline justify-between gap-4 border-t border-white/12 pt-5">
        <span className="font-display text-[12px] tracking-[0.26em] text-primary sm:text-[13px]">
          06 — About
        </span>
        <span className="font-display text-[13px] tracking-[0.06em] text-white/55">
          The mind behind the worlds
        </span>
      </div>

      <motion.h2
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 0.68, 0.16, 1] }}
        className="font-display text-[clamp(2.1rem,6.6vw,5.8rem)] leading-[0.94] font-medium tracking-[-0.03em] text-white text-balance"
      >
        Design is how
        <br />
        I see <span className="type-italic text-primary">the world.</span>
      </motion.h2>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 0.68, 0.16, 1] }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
            I&apos;m Rishi Naskar, a creative working across artificial
            intelligence, cinema and graphic design. I use imagery, typography,
            composition and atmosphere to turn ideas into visual experiences —
            and now and then I build the tools that make them possible.
          </p>
          <p className="text-sm leading-relaxed text-white/65 sm:text-base">
            My work sits between the edit suite and the layout grid: cinematic
            photo editing and poster design on one side, visual identity and
            storytelling through film on the other. Alongside that I study
            Computer Science and Engineering with a specialisation in Artificial
            Intelligence at UEM Kolkata, because technology keeps expanding what
            a story can look like.
          </p>
          <p className="text-sm leading-relaxed text-white/65 sm:text-base">
            I don&apos;t want to make visuals that simply look good. I want work
            that feels something, says something, and stays with people.
          </p>
          <p className="type-italic text-xl leading-snug text-white/90 sm:text-2xl">
            “Create with intention. Tell stories through visuals. Never stop
            experimenting.”
          </p>
        </motion.div>

        <motion.dl
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 0.68, 0.16, 1] }}
          className="grid grid-cols-1 gap-px self-start overflow-hidden rounded-2xl border border-white/10 bg-white/10"
        >
          {facts.map((fact) => (
            <div key={fact.label} className="bg-[#070a14] px-5 py-5">
              <dt className="font-display text-[12px] tracking-[0.16em] text-primary">
                {fact.label}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-white/85">
                {fact.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* skills */}
      <div className="mt-20">
        <div className="flex items-baseline justify-between gap-4 border-t border-white/12 pt-5">
          <h3 className="font-display text-[13px] tracking-[0.26em] text-primary">
            Skills &amp; disciplines
          </h3>
          <span className="font-display text-[13px] tracking-[0.06em] text-white/50">
            Three universes, one mind
          </span>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {disciplines.map((discipline, index) => (
            <motion.div
              key={discipline.title}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 0.68, 0.16, 1],
              }}
              className="group rounded-2xl border border-white/10 bg-[#070a14]/80 p-6 transition-colors hover:border-primary/45"
            >
              <p className="font-mono text-[11px] tracking-[0.16em] text-white/50">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h4 className="mt-3 font-display text-2xl font-medium tracking-[-0.01em] text-white">
                {discipline.title}
              </h4>
              <p className="mt-1.5 text-[13px] leading-relaxed text-white/55">
                {discipline.note}
              </p>
              <ul className="mt-5 space-y-2.5">
                {discipline.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-3 text-sm leading-relaxed text-white/75"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-px w-4 shrink-0 bg-primary/70"
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-[13px] leading-relaxed text-white/50">
          Editable list — update the disciplines and skills in{" "}
          <span className="font-mono text-white/65">src/components/About.tsx</span>
        </p>
      </div>
    </section>
  );
}
