import type { Metadata } from "next";

import { CAREER, EDUCATION, CERTIFICATIONS } from "@/lib/career";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Career timeline for Ronnie Scott — six years of full-stack startup engineering across payments, integrations, internal tooling, and AI-assisted workflows. Downloadable PDF available.",
};

export default function ResumePage() {
  return (
    <section
      aria-labelledby="resume-heading"
      className="mx-auto max-w-3xl px-6 py-24"
    >
      <h1 className="sr-only">Resume</h1>
      <SectionHeading
        title="Career Timeline"
        subtitle="Where I've been"
        id="resume"
        className="mb-6"
      />
      <div className="mb-14 text-center">
        <Button className="rounded-full" asChild>
          <a href="/ronnie-scott-resume.pdf" download>
            Download Resume (PDF)
          </a>
        </Button>
      </div>

      <ol className="relative space-y-12 border-l border-border pl-8">
        {CAREER.map((entry) => (
          <li key={`${entry.org}-${entry.role}`} className="relative">
            <span
              className="absolute top-1.5 -left-[37px] h-2.5 w-2.5 rounded-full bg-foreground/60"
              aria-hidden="true"
            />
            <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
              {entry.period}
              {entry.location ? ` · ${entry.location}` : ""}
            </p>
            <h2 className="mt-1 text-xl font-semibold tracking-tight">
              {entry.role}{" "}
              <span className="font-normal text-muted-foreground">
                — {entry.org}
              </span>
            </h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/85">
              {entry.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {entry.stack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-16 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Education
          </h2>
          <ul className="space-y-4">
            {EDUCATION.map((e) => (
              <li key={e.institution} className="text-sm leading-relaxed">
                <p className="font-medium text-foreground">{e.program}</p>
                <p className="text-muted-foreground">
                  {e.institution} · {e.period}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Certifications
          </h2>
          <ul className="space-y-2">
            {CERTIFICATIONS.map((c) => (
              <li
                key={c}
                className="text-sm leading-relaxed text-foreground/85"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
