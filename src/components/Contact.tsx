import { LINKS, mailto, tel, whatsapp } from "@/lib/links";
import {
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

/**
 * Contact rows. Every entry is a real link that hands straight off to the
 * visitor's own app: mail client, dialler, WhatsApp, LinkedIn, Instagram.
 */
const socials: {
  label: string;
  href: string;
  display: string;
  external: boolean;
  icon: typeof Mail;
}[] = [
  {
    label: "Email",
    href: mailto,
    display: LINKS.email,
    external: false,
    icon: Mail,
  },
  {
    label: "Phone",
    href: tel,
    display: LINKS.phoneDisplay,
    external: false,
    icon: Phone,
  },
  {
    label: "WhatsApp",
    href: whatsapp,
    display: LINKS.phoneDisplay,
    external: true,
    icon: MessageCircle,
  },
  {
    label: "LinkedIn",
    href: LINKS.linkedin,
    display: "linkedin.com/in/rishi-naskar-22900631a",
    external: true,
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: LINKS.instagram,
    display: `@${LINKS.instagramHandle}`,
    external: true,
    icon: Instagram,
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

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={mailto}
              data-cursor="Say hello"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-mono-label text-[10px] text-black transition-transform hover:-translate-y-0.5"
            >
              <Mail className="size-3.5" aria-hidden="true" />
              Email me
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              data-cursor="WhatsApp"
              className="inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-4 font-mono-label text-[10px] text-white/90 transition-colors hover:border-white/60"
            >
              <MessageCircle className="size-3.5" aria-hidden="true" />
              Message on WhatsApp
            </a>
          </div>

          <a
            href={tel}
            data-cursor="Call"
            className="inline-flex items-center gap-3 font-mono-label text-[10px] text-white/45 transition-colors hover:text-white"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            {LINKS.phoneDisplay}
          </a>
        </div>

        <dl className="self-start">
          {socials.map((social) => (
            <div
              key={social.label}
              className="flex items-baseline justify-between gap-4 border-t border-white/12 py-4"
            >
              <dt className="flex items-center gap-2 font-mono-label text-[9px] text-white/40">
                <social.icon className="size-3.5" aria-hidden="true" />
                {social.label}
              </dt>
              <dd className="text-right">
                <a
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noreferrer noopener" : undefined}
                  data-cursor={social.label}
                  className="text-sm break-words text-white/80 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-primary"
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
            href={mailto}
            className="font-mono-label text-[9px] text-white/40 transition-colors hover:text-white"
          >
            {LINKS.email}
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="font-mono-label text-[9px] text-white/40 transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            className="font-mono-label text-[9px] text-white/40 transition-colors hover:text-white"
          >
            WhatsApp
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
