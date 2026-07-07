import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What Ronnie Scott is building, exploring, and thinking about right now.",
};

const LAST_UPDATED = "July 2026";

export default function NowPage() {
  return (
    <section
      aria-labelledby="now-heading"
      className="mx-auto max-w-2xl px-6 py-24"
    >
      <h1 className="sr-only">Now</h1>
      <SectionHeading
        title="Now"
        subtitle="What I'm up to"
        id="now"
        className="mb-4"
      />
      <p className="mx-auto mb-2 max-w-xl text-center text-base leading-relaxed text-muted-foreground">
        A snapshot of what has my attention right now.
      </p>
      <p className="mb-14 text-center text-xs text-muted-foreground/70">
        Last updated {LAST_UPDATED}
      </p>

      <div className="space-y-10">
        <div>
          <h2 className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Building
          </h2>
          <ul className="space-y-4">
            <li className="rounded-lg border border-border bg-card px-4 py-3">
              <p className="text-sm font-medium text-foreground">
                This website
              </p>
              <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                dev-ron.com is built end to end with an agentic workflow —
                truth-stack docs, persistent rules, and AI agents doing the
                implementation. The process itself is becoming writing material.
              </p>
            </li>
            <li className="rounded-lg border border-border bg-card px-4 py-3">
              <p className="text-sm font-medium text-foreground">
                AI Orchestration Server
              </p>
              <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                An evolving methodology and toolchain for coordinating
                AI-assisted workflows.{" "}
                <Link
                  href="/methodology"
                  className="font-medium text-foreground underline underline-offset-4"
                >
                  Read about the methodology
                </Link>
                .
              </p>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Reading
          </h2>
          <div className="rounded-lg border border-border bg-muted/40 px-4 py-3">
            <p className="text-sm text-muted-foreground">
              Current reading list coming soon{" "}
              <Badge variant="secondary" className="ml-1 text-xs">
                Planned
              </Badge>
            </p>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Listening
          </h2>
          <div className="rounded-lg border border-border bg-muted/40 px-4 py-3">
            <p className="text-sm text-muted-foreground">
              What&apos;s on rotation coming soon{" "}
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
