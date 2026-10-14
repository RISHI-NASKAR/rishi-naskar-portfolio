import { LINKS, mailto } from "@/lib/links";

const socials = [
  {
    label: "Email",
    value: LINKS.email,
    href: mailto,
    display: LINKS.email,
  },
  {
    label: "LinkedIn",
    value: LINKS.linkedin,
    href: LINKS.linkedin,
    display: "linkedin.com/in/your-handle",
  },
  {
    label: "Instagram",
    value: LINKS.instagram,
    href: LINKS.instagram,
    display: "@your-handle",
  },
];

/**
 * Closing contact section + footer.
 * All links read from src/lib/links.ts — edit there to go live.
 */
export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-[1400px] px-5 pt-24 pb-16 sm:px-8 sm:pt-32 lg:px-14"
    >
      <div className="mb-12 flex items-baseline justify-between gap-4 border-t border-white/12 pt-5">
        <span className="font-mono-label text-[10px] text-primary">
          07 — Contact
        </span>
        <span className="font-mono-label text-[10px] text-white/35">
          The next world starts here
        </span>
      </div>

      <h2 className="font-display text-[clamp(2.2rem,7.4vw,6.4rem)] leading-[0.9] font-semibold tracking-[-0.01em] text-white uppercase">
        Got a good idea?
        <br />
        <span className="text-primary italic">Let&apos;s make it visual.</span>
      </h2>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-16">
        <div className="space-y-6">
          <p className="max-w-md text-base leading-relaxed text-white/60 sm:text-lg">
            For studios, founders and brands with something to say — pitch the
            idea, the deadline and the feeling you&apos;re after. I&apos;ll reply
            with a point of view.
          </p>
          <a
            href={mailto}
            data-cursor="Say hello"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-mono-label text-[10px] text-black transition-transform hover:-translate-y-0.5"
          >
            Start a conversation
            <span aria-hidden="true">→</span>
          </a>
          <p className="font-mono-label text-[9px] text-white/30">
            Placeholder addresses — replace in src/lib/links.ts
          </p>
        </div>

        <dl className="self-start">
          {socials.map((social) => (
            <div
              key={social.label}
              className="flex items-baseline justify-between gap-4 border-t border-white/12 py-4"
            >
              <dt className="font-mono-label text-[9px] text-white/40">
                {social.label}
              </dt>
              <dd>
                <a
                  href={social.href}
                  target={social.label === "Email" ? undefined : "_blank"}
                  rel={social.label === "Email" ? undefined : "noreferrer noopener"}
                  data-cursor={social.label}
                  className="text-sm text-white/80 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-primary"
                >
                  {social.display}
                </a>
              </dd>
            </div>
          ))}
          <div className="flex items-baseline justify-between gap-4 border-t border-white/12 py-4">
            <dt className="font-mono-label text-[9px] text-white/40">Brand</dt>
            <dd className="text-sm text-white/80">Rishi Naskar Films</dd>
          </div>
        </dl>
      </div>

      <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-white/12 pt-6">
        <p className="font-display text-lg font-semibold tracking-tight text-white">
          Rishi Naskar
        </p>
        <nav className="flex flex-wrap items-center gap-5" aria-label="Footer">
          <a
            href="#works"
            className="font-mono-label text-[9px] text-white/40 transition-colors hover:text-white"
          >
            Work
          </a>
          <a
            href="#about"
            className="font-mono-label text-[9px] text-white/40 transition-colors hover:text-white"
          >
            About
          </a>
          <a
            href="/dashboard"
            className="font-mono-label text-[9px] text-white/40 transition-colors hover:text-white"
          >
            Studio desk
          </a>
        </nav>
        <p className="font-mono-label text-[9px] text-white/30">
          © 2026 — All frames reserved
        </p>
      </footer>
    </section>
  );
}
