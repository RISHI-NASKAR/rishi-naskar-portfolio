"use node";

import { v } from "convex/values";
import { action } from "./_generated/server";

/**
 * Chapter 07 — the inquiry form's delivery.
 *
 * The visitor's message leaves through Resend's REST API from a Convex node
 * action: the API key (`RESEND_API_KEY`) only ever exists server-side, the
 * visitor's address rides in `reply_to` so Rishi can answer with one click,
 * and the green "sent" state in the UI is shown only when Resend answers 200.
 * Anything else throws a typed error the form maps to a human message.
 */

const OWNER_EMAIL = "rishinaskar8@gmail.com";

const PROJECT_TYPES = [
  "AI & Technology",
  "Film & Cinematography",
  "Visual Design",
  "Collaboration",
  "Other",
] as const;

/** Client-side validation exists too, but the server never trusts the client. */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidString(value: string, min: number, max: number) {
  const trimmed = value.trim();
  return trimmed.length >= min && trimmed.length <= max;
}

/** User-supplied text never goes into the HTML body unescaped. */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const sendInquiry = action({
  args: {
    name: v.string(),
    email: v.string(),
    projectType: v.string(),
    message: v.string(),
    /** The visitor's local submission time, when the browser supplies one. */
    submittedLocally: v.optional(v.string()),
  },
  handler: async (_ctx, args) => {
    const name = args.name.trim();
    const email = args.email.trim();
    const projectType = args.projectType.trim();
    const message = args.message.trim();

    if (!isValidString(name, 2, 200)) throw new Error("VALIDATION_FAILED");
    if (!isValidString(email, 5, 320) || !EMAIL_PATTERN.test(email))
      throw new Error("VALIDATION_FAILED");
    if (!isValidString(message, 4, 5000)) throw new Error("VALIDATION_FAILED");
    if (!(PROJECT_TYPES satisfies readonly string[] as readonly string[]).includes(projectType))
      throw new Error("VALIDATION_FAILED");

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error("EMAIL_SERVICE_NOT_CONFIGURED");

    // Without a verified sending domain Resend only accepts its sandbox
    // sender pointing at the account's own address: sign up with
    // rishinaskar8@gmail.com, or verify a domain and set RESEND_FROM_EMAIL.
    const from = process.env.RESEND_FROM_EMAIL ?? "Portfolio Inquiry <onboarding@resend.dev>";

    const submittedAt = new Date();
    const subject = `New project inquiry — ${projectType} — ${name}`;

    const text = [
      "NEW PORTFOLIO INQUIRY",
      "",
      `Name — ${name}`,
      `Email — ${email}`,
      `Project type — ${projectType}`,
      `Submitted — ${args.submittedLocally ?? submittedAt.toISOString()}`,
      "",
      message,
    ].join("\n");

    const rowStyle =
      `padding:10px 0;border-bottom:1px solid #e6e1da;` as const;
    const html = [
      `<div style="margin:0;background:#f7f4ef;font-family:Georgia,'Times New Roman',serif;">`,
      `  <div style="max-width:560px;margin:0 auto;padding:40px 28px;">`,
      `    <p style="margin:0 0 24px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#b5122b;">Portfolio inquiry</p>`,
      `    <h1 style="margin:0 0 28px;font-size:26px;line-height:1.25;color:#17140f;">${escapeHtml(name)} — ${escapeHtml(projectType)}</h1>`,
      `    <table style="width:100%;border-collapse:collapse;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#2c2620;">`,
      `      <tr><td style="${rowStyle}color:#948a80;">From</td><td style="${rowStyle}text-align:right;">${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</td></tr>`,
      `      <tr><td style="${rowStyle}color:#948a80;">Project type</td><td style="${rowStyle}text-align:right;">${escapeHtml(projectType)}</td></tr>`,
      `      <tr><td style="${rowStyle}color:#948a80;">Submitted</td><td style="${rowStyle}text-align:right;">${escapeHtml(args.submittedLocally ?? submittedAt.toISOString())}</td></tr>`,
      `    </table>`,
      `    <p style="margin:28px 0 0;font-size:16px;line-height:1.75;color:#2c2620;white-space:pre-wrap;">${escapeHtml(message)}</p>`,
      `    <p style="margin:36px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#948a80;">Reply directly — the visitor's address is in Reply-To.</p>`,
      `  </div>`,
      `</div>`,
    ].join("");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [OWNER_EMAIL],
        reply_to: email,
        subject,
        text,
        html,
      }),
    });

    // Resend only returned 200, so the form may promise a green state.
    if (!response.ok) {
      throw new Error(`EMAIL_SEND_FAILED:${response.status}`);
    }

    const receipt = (await response.json()) as { id?: string };
    return { ok: true as const, id: receipt.id ?? null };
  },
});
