"use server";

import { Resend } from "resend";

export interface ContactResult {
  ok: boolean;
  error?: string;
}

const MAX_MESSAGE_LENGTH = 5000;
const RATE_LIMIT_WINDOW_MS = 60_000;

// Best-effort in-memory rate limit. Resets on cold start and is per-instance
// on serverless, which is acceptable at this site's traffic level.
const recentSubmissions = new Map<string, number>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  for (const [k, t] of recentSubmissions) {
    if (now - t > RATE_LIMIT_WINDOW_MS) recentSubmissions.delete(k);
  }
  const last = recentSubmissions.get(key);
  if (last !== undefined && now - last < RATE_LIMIT_WINDOW_MS) return true;
  recentSubmissions.set(key, now);
  return false;
}

export async function sendContactMessage(
  formData: FormData,
): Promise<ContactResult> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  // Honeypot: hidden field real users never fill.
  const company = String(formData.get("company") ?? "").trim();

  if (company) {
    return { ok: true };
  }

  if (!name || !email || !message) {
    return { ok: false, error: "Please fill out all fields." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return { ok: false, error: "Message is too long." };
  }

  if (isRateLimited(email.toLowerCase())) {
    return {
      ok: false,
      error: "You just sent a message. Please wait a minute and try again.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      ok: false,
      error:
        "Message delivery isn't configured yet. Please reach out via LinkedIn or GitHub instead.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Contact Form <contact@dev-ron.com>",
      to: ["ronnie@dev-ron.com"],
      replyTo: email,
      subject: `dev-ron.com contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      return {
        ok: false,
        error:
          "Something went wrong sending your message. Please try again or reach out via LinkedIn.",
      };
    }
    return { ok: true };
  } catch {
    return {
      ok: false,
      error:
        "Something went wrong sending your message. Please try again or reach out via LinkedIn.",
    };
  }
}
