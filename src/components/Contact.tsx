import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Copy,
  Mail,
  ChevronDown,
} from "lucide-react";
import { useAction } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Flourish, Monogram } from "@/components/ornaments";
import { Reveal } from "@/components/Reveal";
import { LINKS, mailto, tel, whatsapp } from "@/lib/links";
import SocialIcons from "@/components/SocialIcons";

const PROJECT_TYPES = [
  "AI & Technology",
  "Film & Cinematography",
  "Visual Design",
  "Collaboration",
  "Other",
] as const;

type InquiryValues = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof InquiryValues, string>>;

/** green "sent" state is promised only after the action reports delivery. */
type SendStatus = "idle" | "sending" | "sent" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: InquiryValues): FieldErrors {
  const errors: FieldErrors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Please sign the inquiry with your name.";
  }
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "That address does not look complete.";
  }
  if (!values.projectType) {
    errors.projectType = "Choose the closest fit from the list.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "A few more words — what is the idea, the tone, the deadline?";
  }
  return errors;
}

function describeError(error: unknown): string {
  const raw = error instanceof Error ? error.message : String(error);
  if (raw.includes("EMAIL_SERVICE_NOT_CONFIGURED")) {
    return "Delivery is not wired up yet — please use the email button on the left for now.";
  }
  if (raw.includes("VALIDATION_FAILED")) {
    return "Something in the form needs a second look — please check your details and try again.";
  }
  return "The message could not be sent. Please try again in a moment, or use the email button on the left.";
}

/**
 * The inquiry form — the working half of the closing frame.
 *
 * Minimal dark fields on thin hairline rules that turn crimson on focus.
 * Four states on the submit control, always the same dimensions: idle,
 * sending (locked), sent (muted emerald, only on confirmed delivery) and
 * error (shown under the field, retryable). Nothing is faked.
 */
function InquiryForm() {
  const sendInquiry = useAction(api.inquiries.sendInquiry);
  const [values, setValues] = useState<InquiryValues>({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<SendStatus>("idle");
  const [feedback, setFeedback] = useState<{ tone: "success" | "error"; text: string } | null>(
    null,
  );

  const setField = (field: keyof InquiryValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    // A new edit clears the terminal states so the button is usable again.
    if (status === "sent" || status === "error") {
      setStatus("idle");
      setFeedback(null);
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const fieldErrors = validate(values);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("sending");
    setFeedback(null);
    try {
      await sendInquiry({
        name: values.name,
        email: values.email,
        projectType: values.projectType,
        message: values.message,
        submittedLocally: new Date().toISOString(),
      });
      // Only here — the service confirmed the delivery — does the state turn.
      setStatus("sent");
      setFeedback({
        tone: "success",
        text: "Thank you — your inquiry is in Rishi's inbox. A reply follows as soon as it is read.",
      });
    } catch (error) {
      setStatus("error");
      setFeedback({ tone: "error", text: describeError(error) });
    }
  };

  const fieldClass =
    "mt-3 w-full border-b border-line bg-transparent pb-3 pt-0.5 text-[15px] leading-relaxed text-ivory outline-none transition-colors duration-300 placeholder:text-ivory/25 focus:border-crimson";

  const showError = (field: keyof InquiryValues) =>
    errors[field] ? (
      <p className="mt-2.5 text-[12px] leading-relaxed text-ember">{errors[field]}</p>
    ) : null;

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-9">
      <p className="meta text-[9.5px] tracking-[0.32em] text-ivory/50">Project inquiry</p>

      <div>
        <label
          htmlFor="inquiry-name"
          className="meta block text-[9.5px] tracking-[0.3em] text-ivory/55"
        >
          Full Name
        </label>
        <input
          id="inquiry-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          value={values.name}
          onChange={(event) => setField("name", event.target.value)}
          className={fieldClass}
          aria-invalid={Boolean(errors.name)}
        />
        {showError("name")}
      </div>

      <div>
        <label
          htmlFor="inquiry-email"
          className="meta block text-[9.5px] tracking-[0.3em] text-ivory/55"
        >
          Email Address
        </label>
        <input
          id="inquiry-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Where the reply should go"
          value={values.email}
          onChange={(event) => setField("email", event.target.value)}
          className={fieldClass}
          aria-invalid={Boolean(errors.email)}
        />
        {showError("email")}
      </div>

      <div>
        <label
          htmlFor="inquiry-type"
          className="meta block text-[9.5px] tracking-[0.3em] text-ivory/55"
        >
          Project Type
        </label>
        <div className="relative">
          <select
            id="inquiry-type"
            name="projectType"
            value={values.projectType}
            onChange={(event) => setField("projectType", event.target.value)}
            className={`${fieldClass} cursor-pointer appearance-none pr-9 [&>option]:bg-[#121012] [&>option]:text-ivory`}
            aria-invalid={Boolean(errors.projectType)}
          >
            <option value="" disabled>
              Select the closest fit
            </option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-0 top-1/2 size-3.5 -translate-y-1/2 text-ivory/45 transition-colors duration-300"
            aria-hidden="true"
          />
        </div>
        {showError("projectType")}
      </div>

      <div>
        <label
          htmlFor="inquiry-message"
          className="meta block text-[9.5px] tracking-[0.3em] text-ivory/55"
        >
          Your Message
        </label>
        <textarea
          id="inquiry-message"
          name="message"
          rows={7}
          placeholder="The idea, the tone, the deadline if there is one"
          value={values.message}
          onChange={(event) => setField("message", event.target.value)}
          className={`${fieldClass} resize-none`}
          aria-invalid={Boolean(errors.message)}
        />
        {showError("message")}
      </div>

      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          aria-live="polite"
          className={`flex h-14 w-full items-center justify-center gap-3.5 font-mono text-[11px] uppercase tracking-[0.26em] text-[#f6ede4] transition-colors duration-500 ${
            status === "sent"
              ? "bg-[#1d5c44] hover:bg-[#25704a]"
              : "bg-crimson hover:bg-ember"
          } ${
            status === "sending"
              ? "cursor-wait opacity-75"
              : "group disabled:cursor-not-allowed disabled:opacity-70"
          }`}
        >
          {status === "sending" ? (
            "Sending..."
          ) : status === "sent" ? (
            <>
              Message sent <span aria-hidden="true">✓</span>
            </>
          ) : (
            <>
              Send Inquiry
              <ArrowRight
                className="size-3.5 shrink-0 transition-transform duration-500 group-hover:translate-x-1.5"
                aria-hidden="true"
              />
            </>
          )}
        </button>

        <div className="mt-4 min-h-[2.5rem]" role="status" aria-live="polite">
          {feedback ? (
            <p
              className={`max-w-md text-[12.5px] leading-[1.7] ${
                feedback.tone === "success" ? "text-ivory/60" : "text-ember"
              }`}
            >
              {feedback.text}
            </p>
          ) : null}
        </div>
      </div>
    </form>
  );
}

/**
 * The compact connect block — label, email row with copy, divider, socials.
 *
 * Aligned with the call-to-action buttons above it and sized down so the left
 * column reads as one composition: headline, then buttons, then connect.
 * Email and socials reuse the existing LINKS configuration.
 */
function ConnectBlock() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(LINKS.email);
    } catch {
      // Clipboard API unavailable (older browsers / insecure contexts).
      const field = document.createElement("textarea");
      field.value = LINKS.email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setCopied(true);
  };

  return (
    <div className="mt-6 w-full max-w-md">
      <p className="meta text-[10px] tracking-[0.32em] text-ivory/50">
        Let&apos;s connect
      </p>

      <div className="group/row mt-4 flex min-w-0 items-center gap-3 border border-ivory/12 bg-[#0e0c0e]/55 px-4 py-3.5 transition-colors duration-300 focus-within:border-crimson hover:border-crimson/60">
        <a
          href={mailto}
          className="flex min-w-0 flex-1 items-center gap-3 focus-visible:outline-none"
        >
          <Mail
            className="size-4 shrink-0 text-crimson/85 transition-colors duration-300 group-hover/row:text-crimson"
            aria-hidden="true"
          />
          <span className="truncate font-mono text-[15px] tracking-[0.02em] text-ivory/85 transition-colors duration-300 group-hover/row:text-white">
            {LINKS.email}
          </span>
        </a>

        <button
          type="button"
          onClick={copyEmail}
          aria-label={copied ? "Email copied" : "Copy email address"}
          className={`flex shrink-0 items-center gap-1.5 px-1.5 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.2em] transition-colors duration-300 ${
            copied ? "text-ember" : "text-ivory/55 hover:text-ivory"
          }`}
        >
          {copied ? (
            <>
              <Check className="size-3.5" aria-hidden="true" />
              Email copied
            </>
          ) : (
            <Copy className="size-3.5" aria-hidden="true" />
          )
          }
        </button>
      </div>

      <div className="hairline mt-7" aria-hidden="true" />

      <div className="mt-5">
        <SocialIcons />
      </div>
    </div>
  );
}

const COLUMNS = [
  {
    label: "Direct",
    rows: [
      { label: "Email", href: mailto, display: LINKS.email },
      { label: "Phone", href: tel, display: LINKS.phoneDisplay },
      { label: "WhatsApp", href: whatsapp, display: LINKS.phoneDisplay, external: true },
    ],
  },
  {
    label: "Elsewhere",
    rows: [
      { label: "LinkedIn", href: LINKS.linkedin, display: "linkedin.com/in/rishi-naskar", external: true },
      { label: "GitHub", href: LINKS.github, display: LINKS.githubDisplay, external: true },
      { label: "Instagram", href: LINKS.instagram, display: `@${LINKS.instagramHandle}`, external: true },
      { label: "X", href: LINKS.twitter, display: "@rishi_naskar_", external: true },
      { label: "Studio desk", href: "/dashboard", display: "Private workspace" },
    ],
  },
];

/**
 * Chapter 07 — connect, and the closing frame.
 *
 * An asymmetrical editorial spread: the invitation in words on the left,
 * the working inquiry form on the right — then every verified way of reaching
 * Rishi along the base of the section before the page closes.
 */
export default function Contact() {
  return (
    <section
      id="contact"
      className="grain relative isolate overflow-hidden border-t border-crimson/30 px-5 pb-12 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pt-36"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_115%,rgba(181,18,43,0.5)_0%,rgba(101,13,25,0.55)_28%,rgba(20,6,9,0.9)_62%,#080808_92%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember/60 to-transparent" />
        <div className="absolute left-1/2 top-24 hidden h-64 w-64 -translate-x-1/2 rounded-full bg-crimson/20 blur-[110px] sm:block" />
      </div>

      <div className="mx-auto w-full max-w-[1560px]">
        <Reveal>
          <div className="flex items-baseline justify-between gap-4">
            <span className="meta text-[10.5px] tracking-[0.34em] text-ember/85">
              07 / Connect
            </span>
            <span className="meta hidden text-[10.5px] tracking-[0.34em] text-ivory/50 sm:block">
              Let&apos;s begin a conversation
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-0 xl:gap-0">
          <div className="lg:pr-16 xl:pr-24">
            <Reveal delay={60}>
              <h2 className="font-editorial text-[clamp(2.6rem,6.6vw,5.8rem)] leading-[0.98] text-ivory">
                Have an idea
                <br />
                <span className="type-italic text-crimson">worth making</span>?
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-7 max-w-md text-[15px] leading-[1.85] text-ivory/70">
                From intelligent systems to cinematic stories, let&apos;s create
                something meaningful.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="type-italic mt-6 text-[1.2rem] leading-snug text-ivory/75">
                I read every message myself, and reply with a point of view.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href={mailto} className="btn-noir group">
                  Email me
                  <ArrowUpRight
                    className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-noir btn-ghost group"
                >
                  Message on WhatsApp
                  <ArrowUpRight
                    className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <ConnectBlock />
            </Reveal>
          </div>

          <Reveal delay={140} className="lg:border-l lg:border-line/60 lg:pl-16 xl:pl-24">
            <InquiryForm />
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-6 sm:flex-row sm:gap-16 lg:mt-24">
          {COLUMNS.map((column, columnIndex) => (
            <Reveal key={column.label} delay={40 + columnIndex * 80} className="flex-1">
              <div className="border-t border-ivory/15 pt-4">
                <h3 className="meta text-[9.5px] tracking-[0.32em] text-ivory/50">
                  {column.label}
                </h3>
                <ul className="mt-3">
                  {column.rows.map((row) => {
                    const external = row.external || row.href.startsWith("http");
                    return (
                      <li
                        key={row.label + row.href}
                        className="group flex items-baseline justify-between gap-4 border-b border-ivory/10 py-3"
                      >
                        <a
                          href={row.href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noreferrer noopener" : undefined}
                          className="flex w-full items-baseline justify-between gap-4"
                        >
                          <span className="text-[13.5px] text-ivory/75 transition-colors duration-300 group-hover:text-white">
                            {row.label}
                          </span>
                          <span className="flex items-center gap-2 text-right font-mono text-[11px] tracking-[0.08em] text-ivory/55 transition-colors duration-300 group-hover:text-ivory">
                            {row.display}
                            <ArrowUpRight
                              className="size-3 shrink-0 opacity-50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                              aria-hidden="true"
                            />
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 flex items-center justify-center">
          <Flourish className="w-full max-w-md text-ember/60" />
        </div>

        <footer className="mt-8 border-t border-ivory/12 pt-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <Monogram className="w-14" />
              <div>
                <p className="font-signature text-[1.05rem] tracking-[0.08em] text-ivory">
                  Rishi Naskar
                </p>
                <p className="meta mt-1.5 text-[9.5px] tracking-[0.28em] text-ivory/45">
                  Rishi Naskar Films
                </p>
              </div>
            </div>

            <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Work", href: "#work" },
                { label: "Skills", href: "#skills" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="link-underline font-mono text-[10.5px] uppercase tracking-[0.24em] text-ivory/60 transition-colors hover:text-ivory"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <p className="meta text-[9.5px] tracking-[0.28em] text-ivory/40">
              © MMXXVI — All frames reserved
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
