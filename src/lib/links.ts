/**
 * Contact details.
 *
 * Every contact link on the site reads from here — change a value once and it
 * updates in the contact block, the footer and the calls to action.
 */
export const LINKS = {
  email: "rishinaskar8@gmail.com",
  /** WhatsApp deep link; the message text is appended by `whatsapp` below. */
  whatsapp: "https://wa.me/916295880891",
  linkedin: "https://www.linkedin.com/in/rishi-naskar-22900631a/",
  /** Public code — the portfolio repository. */
  github: "https://github.com/RISHI-NASKAR/rishi-naskar-portfolio",
  githubDisplay: "github.com/RISHI-NASKAR",
  instagram: "https://www.instagram.com/rishi_naskar_/",
  instagramHandle: "rishinaskar_",
  /** X / Twitter profile. */
  twitter: "https://twitter.com/rishi_naskar_",
} as const;

/** Opens the visitor's mail client with the subject already filled in. */
export const mailto = `mailto:${LINKS.email}?subject=Portfolio%20Inquiry%20%E2%80%94%20Rishi%20Naskar`;

/** Opens WhatsApp with a chat already addressed to Rishi. */
export const whatsapp = `${LINKS.whatsapp}?text=${encodeURIComponent(
  "Hi Rishi, I saw your portfolio and would like to talk about a project.",
)}`;
