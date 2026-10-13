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
 * About — oversized editorial headline, intro copy and a small facts grid.
 * Reveals are scroll-triggered via framer-motion; MotionConfig in Landing
 * disables them globally under prefers-reduced-motion.
 */
export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      {/* section label */}
      <div className="rule-heavy mb-10 flex items-baseline justify-between gap-4 pt-4">
        <span className="font-mono-label text-[11px]">About</span>
        <span className="font-mono-label text-[11px] text-muted-foreground">01 / 03</span>
      </div>

      <motion.h2
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
        className="font-display font-semibold uppercase leading-[0.9] tracking-[-0.02em] text-[clamp(2.1rem,8vw,6.5rem)] break-words"
      >
        Design is how
        <br />
        I see <span className="italic text-muted-foreground">the world.</span>
      </motion.h2>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        {/* intro */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed sm:text-xl">
            I'm Rishi Naskar, a creative exploring the intersection of graphic
            design, cinema and visual storytelling. I use imagery, typography,
            composition and atmosphere to turn ideas into visual experiences.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            My work sits between the edit suite and the layout grid — cinematic
            photo editing and poster design on one side, visual identity and
            storytelling through film on the other. Beyond the creative world I
            study Computer Science and Engineering with a specialisation in
            Artificial Intelligence at UEM Kolkata, because technology keeps
            expanding what a story can look like.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            I don't want to make visuals that simply look good. I want work that
            feels something, says something, and stays with people.
          </p>
          <p className="font-display text-xl italic leading-snug sm:text-2xl">
            “Create with intention. Tell stories through visuals. Never stop
            experimenting.”
          </p>
        </motion.div>

        {/* facts grid */}
        <motion.dl
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
          className="grid grid-cols-1 gap-px self-start bg-border sm:grid-cols-2 lg:grid-cols-1"
        >
          {facts.map((f) => (
            <div key={f.label} className="bg-background px-1 py-5 sm:px-4">
              <dt className="font-mono-label text-[10px] text-muted-foreground">{f.label}</dt>
              <dd className="mt-2 text-sm leading-relaxed">{f.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
