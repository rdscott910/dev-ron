import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ronnie Scott via LinkedIn or GitHub. Open to conversations about full-stack projects, developer tooling, AI workflows, and technical consulting.",
};

const COLLABORATION_TOPICS = [
  "Full-stack web applications",
  "Developer tooling and internal platforms",
  "AI-assisted development workflows",
  "Third-party integrations and API design",
  "Legacy modernization",
  "Technical consulting",
];

export default function ContactPage() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="mx-auto max-w-3xl px-6 py-24"
    >
      <h1 className="sr-only">Contact</h1>
      <SectionHeading
        title="Let's Connect"
        subtitle="Get in touch"
        id="contact"
        className="mb-4"
      />
      <p className="mx-auto mb-12 max-w-xl text-center text-base leading-relaxed text-muted-foreground">
        I&apos;m always open to conversations about interesting problems, new
        projects, and collaborations. The best way to reach me right now is
        through LinkedIn or GitHub.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <Link
          href="https://www.linkedin.com/in/ronnie-d-scott"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/30 hover:bg-muted/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          <span className="mt-0.5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground">
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </span>
          <div>
            <p className="font-semibold text-foreground">LinkedIn</p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              /in/ronnie-d-scott
            </p>
          </div>
        </Link>

        <Link
          href="https://github.com/rdscott910"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/30 hover:bg-muted/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          <span className="mt-0.5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground">
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <div>
            <p className="font-semibold text-foreground">GitHub</p>
            <p className="mt-0.5 text-sm text-muted-foreground">rdscott910</p>
          </div>
        </Link>
      </div>

      <div className="mt-12 rounded-xl border border-border bg-muted/40 px-6 py-8">
        <h2 className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">
          Good reasons to reach out
        </h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {COLLABORATION_TOPICS.map((topic) => (
            <li
              key={topic}
              className="flex items-center gap-2 text-sm text-foreground/80"
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40"
                aria-hidden="true"
              />
              {topic}
            </li>
          ))}
        </ul>
      </div>

      {/* Non-submitting form shell */}
      <div className="mt-12 rounded-xl border border-border bg-card px-6 py-8">
        <h2 className="mb-1 text-base font-semibold text-foreground">
          Send a message
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
          <strong className="font-medium text-foreground">
            Note: this form is not wired yet.
          </strong>{" "}
          Until email delivery is configured, please reach out directly through
          LinkedIn or GitHub above.
        </p>

        <ContactForm />
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        A professional email address is coming soon.
      </p>
    </section>
  );
}
