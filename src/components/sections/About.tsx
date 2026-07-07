import Link from "next/link";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

const TECH_STACK = [
  "TypeScript",
  "JavaScript",
  "React",
  "Vue",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Tailwind CSS",
  "Docker",
  "AWS",
  "GCP",
];

const AI_TOOLING = [
  "Cursor",
  "MCP (Model Context Protocol)",
  "Prompt Engineering",
  "Context Engineering",
  "AI Agent Orchestration",
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-5xl px-6 py-24"
    >
      <SectionHeading
        title="About Me"
        subtitle="Get to know me"
        id="about"
        className="mb-12"
      />

      <div className="grid items-start gap-12 md:grid-cols-2">
        <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl">
          <Image
            src="/Pixel_Ron.png"
            alt="Pixel art portrait of Ronnie wearing a Patagonia cap, glasses, and a gray jacket with mountains in the background"
            width={400}
            height={533}
            className="h-auto w-full"
            priority
          />
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I&apos;m a full-stack software engineer with six years of experience
            building and shipping production software at startups. I work across
            the full stack — from relational database design and backend services
            to customer-facing UI — with a focus on third-party integrations,
            internal tooling, and modernizing legacy systems.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I use AI daily as a development multiplier and have built the
            infrastructure to make it effective: persistent rule systems, MCP
            tool integrations, structured implementation plans, and context
            pipelines that keep agents aligned with project architecture. I care
            about code quality, I pick up new stacks fast, and I own my work end
            to end.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I&apos;m a builder at heart. I value working on projects that can
            actually make a difference and enjoy collaborating with people who
            find solutions to real problems. Outside of engineering, I&apos;m a
            musician — the creative side of software is something I carry into
            everything I build.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="mb-3 text-sm font-medium tracking-widest text-muted-foreground uppercase">
                Tech stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-medium tracking-widest text-muted-foreground uppercase">
                AI &amp; tooling
              </h3>
              <div className="flex flex-wrap gap-2">
                {AI_TOOLING.map((tool) => (
                  <Badge key={tool} variant="secondary">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional artifacts placeholder */}
      <div className="mt-16 rounded-xl border border-border bg-muted/40 px-6 py-8">
        <h2 className="mb-1 text-sm font-medium tracking-widest text-muted-foreground uppercase">
          Professional artifacts
        </h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Case studies and additional work samples coming soon. Interested in
          working together?{" "}
          <Link
            href="/contact"
            className="font-medium text-foreground underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          >
            Get in touch
          </Link>
          .
        </p>
        <ul className="grid gap-3 sm:grid-cols-3">
          <li>
            <a
              href="/ronnie-scott-resume.pdf"
              download
              className="block rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-muted/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              Resume <span className="text-xs opacity-60">— download PDF</span>
            </a>
          </li>
          {["Case Studies", "Writing Samples"].map((item) => (
            <li
              key={item}
              className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground"
            >
              {item}{" "}
              <span className="text-xs opacity-60">— coming soon</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
