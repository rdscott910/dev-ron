import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "AI Orchestration Methodology",
  description:
    "A living document on coordinating AI-assisted development: persistent rule systems, MCP tool integrations, structured implementation plans, and context pipelines that keep agents aligned with architecture.",
};

const PILLARS = [
  {
    name: "Persistent rule systems",
    detail:
      "Domain-specific rule files act as standing system prompts. Instead of re-explaining architecture every session, agents inherit constraints — coding standards, component patterns, privacy rules — that persist across all work.",
  },
  {
    name: "Truth-stack documentation",
    detail:
      "Scope, content models, phased roadmaps, implementation slices, and verification rubrics live as versioned docs the agents treat as authoritative. A future agent can pick up the project without reading any prior conversation.",
  },
  {
    name: "MCP tool integrations",
    detail:
      "Model Context Protocol servers give agents real capabilities — Git operations, design-to-code, cloud documentation, browser testing — so a single session can carry work across the full development lifecycle.",
  },
  {
    name: "Structured implementation plans",
    detail:
      "Complex features get decomposed into dependency-ordered, agent-executable slices with acceptance criteria and embedded constraints, so no single pass bites off more than it can verify.",
  },
  {
    name: "Context pipelines",
    detail:
      "Curated codebase snapshots and unidirectional information flows solve the context-window problem while preserving architectural rules — the right context, at the right time, without drift.",
  },
];

export default function MethodologyPage() {
  return (
    <section
      aria-labelledby="methodology-heading"
      className="mx-auto max-w-3xl px-6 py-24"
    >
      <h1 className="sr-only">AI Orchestration Methodology</h1>
      <SectionHeading
        title="AI Orchestration Methodology"
        subtitle="A living document"
        id="methodology"
        className="mb-4"
      />
      <p className="mx-auto mb-6 max-w-xl text-center text-base leading-relaxed text-muted-foreground">
        How I make AI agents reliable contributors to production software:
        treat orchestration as an engineering discipline, not a prompt trick.
        This methodology is under active development — as is the toolchain
        built around it.
      </p>
      <div className="mb-14 text-center">
        <Button variant="outline" className="rounded-full" asChild>
          <a
            href="https://github.com/rdscott910/ai-orchestration-server"
            target="_blank"
            rel="noopener noreferrer"
          >
            AI Orchestration Server on GitHub
          </a>
        </Button>
      </div>

      <div className="space-y-10">
        <div>
          <h2 className="mb-2 text-xl font-semibold tracking-tight">
            The problem
          </h2>
          <p className="text-sm leading-relaxed text-foreground/85">
            AI coding agents are powerful but stateless. Coordinating them
            across tools and sessions causes context loss and architectural
            drift: each session starts from zero, invents its own conventions,
            and slowly diverges from the system it&apos;s supposed to serve.
            Most workflows lack a durable, structured pipeline for routing
            instructions in and capturing outputs back.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold tracking-tight">
            The framework
          </h2>
          <ul className="space-y-4">
            {PILLARS.map((pillar) => (
              <li
                key={pillar.name}
                className="rounded-lg border border-border bg-card px-4 py-3"
              >
                <p className="text-sm font-medium text-foreground">
                  {pillar.name}
                </p>
                <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                  {pillar.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold tracking-tight">
            Proof in practice
          </h2>
          <p className="text-sm leading-relaxed text-foreground/85">
            This website is the working demonstration: it was planned and built
            end to end by AI agents operating against a truth stack of scoped
            docs, phased roadmaps, and verification rubrics — with every slice
            reviewed, verified, and shipped through the same pipeline described
            here.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold tracking-tight">
            Deep dives
          </h2>
          <ul className="space-y-3">
            {[
              "Architecture walkthrough of the orchestration server",
              "Changelog: how the methodology is evolving",
              "Case study: building dev-ron.com with the truth stack",
            ].map((item) => (
              <li
                key={item}
                className="rounded-lg border border-border bg-muted/40 px-4 py-3"
              >
                <p className="text-sm text-muted-foreground">
                  {item}{" "}
                  <Badge variant="secondary" className="ml-1 text-xs">
                    Coming soon
                  </Badge>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
