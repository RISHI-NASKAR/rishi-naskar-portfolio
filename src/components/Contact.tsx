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
        <span className="font-display text-[12px] tracking-[0.26em] text-primary sm:text-[13px]">
          07 — Contact
        </span>
        <span className="font-display text-[13px] tracking-[0.06em] text-white/55">
          The next world starts here
        </span>
      </div>

      <h2 className="font-display text-[clamp(2.3rem,7.6vw,6.6rem)] leading-[0.92] font-medium tracking-[-0.03em] text-white">
        Got a good idea?
        <br />
        <span className="type-italic text-primary">Let&apos;s make it visual.</span>
      </h2>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-16">
        <div className="space-y-6">
          <p className="max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
            For studios, founders and brands with something to say — pitch the
            idea, the deadline and the feeling you&apos;re after. I&apos;ll reply
            with a point of view.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={mailto}
              data-cursor="Say hello"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-display text-[13.5px] font-medium tracking-[0.12em] text-black transition-transform hover:-translate-y-0.5"
            >
              <Mail className="size-4" aria-hidden="true" />
              Email me
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              data-cursor="WhatsApp"
              className="inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-4 font-display text-[13.5px] font-medium tracking-[0.1em] text-white/90 transition-colors hover:border-white/60"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Message on WhatsApp
            </a>
          </div>

          <a
            href={tel}
            data-cursor="Call"
            className="inline-flex items-center gap-3 text-[15px] text-white/60 transition-colors hover:text-white"
          >
            <Phone className="size-4" aria-hidden="true" />
            {LINKS.phoneDisplay}
          </a>
        </div>

        <dl className="self-start">
          {socials.map((social) => (
            <div
              key={social.label}
              className="flex items-baseline justify-between gap-4 border-t border-white/12 py-4"
            >
              <dt className="flex items-center gap-2 font-display text-[12.5px] tracking-[0.14em] text-white/55">
                <social.icon className="size-4" aria-hidden="true" />
                {social.label}
              </dt>
              <dd className="text-right">
                <a
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noreferrer noopener" : undefined}
                  data-cursor={social.label}
                  className="text-sm break-words text-white/85 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-primary sm:text-[15px]"
                >
                  {social.display}
                </a>
              </dd>
            </div>
          ))}
          <div className="flex items-baseline justify-between gap-4 border-t border-white/12 py-4">
            <dt className="font-display text-[12.5px] tracking-[0.14em] text-white/55">
              Brand
            </dt>
            <dd className="text-sm text-white/85 sm:text-[15px]">
              Rishi Naskar Films
            </dd>
          </div>
        </dl>
      </div>

      <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-white/12 pt-6">
        <p className="font-display text-lg font-medium tracking-[-0.01em] text-white">
          Rishi Naskar
        </p>
        <nav className="flex flex-wrap items-center gap-5" aria-label="Footer">
          <a
            href="#works"
            className="font-display text-[13px] tracking-[0.06em] text-white/55 transition-colors hover:text-white"
          >
            Work
          </a>
          <a
            href="#about"
            className="font-display text-[13px] tracking-[0.06em] text-white/55 transition-colors hover:text-white"
          >
            About
          </a>
          <a
            href={mailto}
            className="font-display text-[13px] tracking-[0.06em] text-white/55 transition-colors hover:text-white"
          >
            {LINKS.email}
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="font-display text-[13px] tracking-[0.06em] text-white/55 transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            className="font-display text-[13px] tracking-[0.06em] text-white/55 transition-colors hover:text-white"
          >
            WhatsApp
          </a>
          <a
            href="/dashboard"
            className="font-display text-[13px] tracking-[0.06em] text-white/55 transition-colors hover:text-white"
          >
            Studio desk
          </a>
        </nav>
        <p className="font-display text-[12.5px] tracking-[0.06em] text-white/45">
          © 2026 — All frames reserved
        </p>
      </footer>
    </section>
  );
}
