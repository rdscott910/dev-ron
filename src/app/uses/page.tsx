import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "The tools, stack, and AI-assisted development setup Ronnie Scott uses daily — Cursor, MCP servers, agent skills, persistent rule systems, and a TypeScript-centric stack.",
};

interface UsesSection {
  heading: string;
  blurb: string;
  items: { name: string; note: string }[];
}

const SECTIONS: UsesSection[] = [
  {
    heading: "AI-assisted development",
    blurb:
      "AI is a daily development multiplier for me — but only because of the infrastructure around it. The tooling below keeps agents aligned with project architecture instead of guessing.",
    items: [
      {
        name: "Cursor",
        note: "Primary development environment. Agents contribute directly to commit history for refactoring, testing, and code generation.",
      },
      {
        name: "Persistent rule systems",
        note: "Domain-specific rule files that act as standing system prompts, constraining agent output to match architecture and standards.",
      },
      {
        name: "MCP (Model Context Protocol) servers",
        note: "Tool integrations for Git operations, design-to-code, cloud documentation, and browser-based testing — agents work across the full lifecycle in one session.",
      },
      {
        name: "Agent skills & plugins",
        note: "Skills covering CI monitoring, PR workflows, merge conflict resolution, smoke testing, and code style cleanup.",
      },
      {
        name: "Truth-stack documentation",
        note: "Structured implementation plans and scoped docs that agents treat as the source of truth — this site was built that way end to end.",
      },
    ],
  },
  {
    heading: "Core stack",
    blurb:
      "The technologies I reach for on production work, from database to UI.",
    items: [
      {
        name: "Languages",
        note: "TypeScript, JavaScript, SQL — plus Perl and Python where legacy systems live.",
      },
      {
        name: "Frontend",
        note: "React, Vue, Next.js, Tailwind CSS, Storybook.",
      },
      {
        name: "Backend",
        note: "Node.js, Express, REST APIs, ORPC with Zod for contract-first type safety.",
      },
      {
        name: "Databases",
        note: "PostgreSQL (with Drizzle ORM), MySQL, MongoDB.",
      },
      {
        name: "Testing & CI",
        note: "Vitest, Playwright, React Testing Library, GitHub Actions.",
      },
      {
        name: "Infrastructure",
        note: "Docker, AWS, GCP, Vercel, Electron for desktop.",
      },
    ],
  },
];

export default function UsesPage() {
  return (
    <section
      aria-labelledby="uses-heading"
      className="mx-auto max-w-3xl px-6 py-24"
    >
      <h1 className="sr-only">Uses</h1>
      <SectionHeading
        title="Uses"
        subtitle="Tools of the trade"
        id="uses"
        className="mb-4"
      />
      <p className="mx-auto mb-14 max-w-xl text-center text-base leading-relaxed text-muted-foreground">
        The setup behind my daily work: an AI-assisted development workflow and
        the stack I build production software with.
      </p>

      <div className="space-y-14">
        {SECTIONS.map((section) => (
          <div key={section.heading}>
            <h2 className="mb-2 text-xl font-semibold tracking-tight">
              {section.heading}
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              {section.blurb}
            </p>
            <ul className="space-y-4">
              {section.items.map((item) => (
                <li
                  key={item.name}
                  className="rounded-lg border border-border bg-card px-4 py-3"
                >
                  <p className="text-sm font-medium text-foreground">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                    {item.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="mb-2 text-xl font-semibold tracking-tight">
            Hardware & desk
          </h2>
          <div className="rounded-lg border border-border bg-muted/40 px-4 py-3">
            <p className="text-sm text-muted-foreground">
              Details coming soon{" "}
              <Badge variant="secondary" className="ml-1 text-xs">
                Planned
              </Badge>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
