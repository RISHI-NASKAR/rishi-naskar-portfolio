import { LINKS, mailto } from "@/lib/links";

/**
 * Closing contact section + minimal footer.
 * All links read from src/lib/links.ts — edit there to go live.
 */
export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      {/* section label */}
      <div className="rule-heavy mb-10 flex items-baseline justify-between gap-4 pt-4">
        <span className="font-mono-label text-[11px]">Contact</span>
        <span className="font-mono-label text-[11px] text-muted-foreground">03 / 03</span>
      </div>

      <h2 className="font-display font-semibold uppercase leading-[0.88] tracking-[-0.02em] text-[clamp(2.4rem,9vw,7rem)]">
        Got a good idea?
        <br />
        <span className="italic text-muted-foreground">Let's make it visual.</span>
      </h2>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        {/* left — CTA */}
        <div className="space-y-6">
          <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            For studios, founders and businesses with something to say — pitch
            the idea, the deadline and the feeling you're after. I'll reply with
            a point of view.
          </p>
          <a
            href={mailto}
            data-cursor="Say hello"
            className="inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 font-mono-label text-[11px] text-background transition-transform hover:-translate-y-0.5"
          >
            Start a conversation
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* right — links */}
        <dl className="self-start">
          <div className="rule flex items-baseline justify-between gap-4 py-4">
            <dt className="font-mono-label text-[10px] text-muted-foreground">Email</dt>
            <dd>
              <a href={mailto} className="text-sm underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground">
                {LINKS.email}
              </a>
            </dd>
          </div>
          <div className="rule flex items-baseline justify-between gap-4 py-4">
            <dt className="font-mono-label text-[10px] text-muted-foreground">LinkedIn</dt>
            <dd>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                linkedin.com/in/your-handle
              </a>
            </dd>
          </div>
          <div className="rule flex items-baseline justify-between gap-4 py-4">
            <dt className="font-mono-label text-[10px] text-muted-foreground">Instagram</dt>
            <dd>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                @your-handle
              </a>
            </dd>
          </div>
          <p className="pt-4 font-mono-label text-[10px] text-muted-foreground">
            Placeholder addresses — replace in src/lib/links.ts
          </p>
        </dl>
      </div>

      {/* footer */}
      <footer className="rule-heavy mt-20 flex flex-wrap items-center justify-between gap-4 pt-5">
        <p className="font-display text-lg font-semibold tracking-tight">Rishi Naskar</p>
        <nav className="flex items-center gap-5" aria-label="Footer">
          <a href="#work" className="font-mono-label text-[10px] text-muted-foreground transition-colors hover:text-foreground">Work</a>
          <a href="#about" className="font-mono-label text-[10px] text-muted-foreground transition-colors hover:text-foreground">About</a>
          <a href="/dashboard" className="font-mono-label text-[10px] text-muted-foreground transition-colors hover:text-foreground">Studio desk</a>
        </nav>
        <p className="font-mono-label text-[10px] text-muted-foreground">© 2026 — All frames reserved</p>
      </footer>
    </section>
  );
}
