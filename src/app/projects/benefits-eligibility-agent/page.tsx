import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "NC SNAP Benefits Eligibility Agent",
  description:
    "Case study: a grounded, glass-box chat agent that estimates North Carolina FNS (SNAP) eligibility likelihood — with guardrails, deterministic math, and clickable citations. Portfolio demo only.",
};

const DEMO_URL = "https://demo.dev-ron.com";
const GITHUB_URL =
  "https://github.com/rdscott910/Benefits-Eligibility-Agent";
const FALLBACK_DEMO_URL =
  "https://benefits-eligibility-agent.vercel.app";

const PIPELINE_STEPS = [
  {
    title: "Validate the envelope",
    detail:
      "The browser posts a typed ChatRequest. Zod rejects bad bodies at the boundary — they never reach the pipeline.",
  },
  {
    title: "Sanitize, then classify",
    detail:
      "Stage 1 redacts PII deterministically. Stage 2 classifies crisis, injection, PII, or out-of-scope before any retrieval or agent call. Classifier failure fails closed.",
  },
  {
    title: "Short-circuit or proceed",
    detail:
      "Non-proceed verdicts stream templated language from shared constants — plus a guardrail badge — without invoking retrieval, tools, or the agent.",
  },
  {
    title: "Retrieve, then answer with tools",
    detail:
      "Cosine retrieval over six corpus documents injects only above-threshold excerpts. The model may call updateCaseFile, lookupIncomeLimits, and checkIncomeThreshold — never invent figures or do the arithmetic itself.",
  },
  {
    title: "Emit typed parts",
    detail:
      "After the text: retrieval/citations, structured likelihood verdict (UI-rendered mandatory language), CaseFile state, and a glass-box data-trace for every path — including guardrail short-circuits.",
  },
];

const TRADEOFFS = [
  {
    title: "No external database",
    detail:
      "Six markdown snapshots and an in-memory vector store keep fresh-clone setup at npm install && npm run dev.",
  },
  {
    title: "No live government scraping",
    detail:
      "Dated corpus snapshots only. A stale scrape that quotes a wrong limit is exactly the failure mode this design prevents.",
  },
  {
    title: "No voice",
    detail:
      "Text-first avoids stacking speech-recognition error on top of a safety-critical pipeline — a misheard income figure is a harm, not a feature.",
  },
  {
    title: "No accounts or server-side persistence",
    detail:
      "Session facts live in browser memory only. Refresh clears the conversation and CaseFile — privacy is the feature for this population.",
  },
];

const EVAL_ROWS = [
  ["Crisis (including resume with income still remembered)", "Pass"],
  ["Prompt injection", "Pass"],
  ["PII reject-and-explain", "Pass"],
  ["Out-of-scope", "Pass"],
  ["Precedence collisions", "Pass"],
  ["Distress without crisis / calibration", "Pass"],
  ["Grounding: no-match for another state", "Pass"],
  ["Grounding: no-match for uncovered policy", "Pass"],
  ["Grounding: figure verbatim with citations", "Pass"],
  ["Grounding: warm opener, no ungrounded figures", "Pass"],
  ["Messy input: vague income → clarify, no verdict on a guess", "Pass"],
  ["Messy input: contradiction → only confirmed value used", "Pass"],
] as const;

export default function BenefitsEligibilityCaseStudyPage() {
  return (
    <section
      aria-labelledby="benefits-agent-heading"
      className="mx-auto max-w-3xl px-6 py-24"
    >
      <h1 className="sr-only">NC SNAP Benefits Eligibility Agent</h1>
      <SectionHeading
        title="NC SNAP Benefits Eligibility Agent"
        subtitle="Case study"
        id="benefits-agent"
        className="mb-4"
      />
      <p className="mx-auto mb-6 max-w-xl text-center text-base leading-relaxed text-muted-foreground">
        A text-based agent that estimates how likely a North Carolina resident
        is to qualify for FNS (SNAP) food assistance — grounded in curated
        policy documents, with a glass-box trace of every turn. Built as a
        case-study project for a voice-AI company that helps people navigate
        social services.
      </p>

      <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
        <Button className="rounded-full" asChild>
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-1.5 h-4 w-4" />
            Try the live demo
          </a>
        </Button>
        <Button variant="outline" className="rounded-full" asChild>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <Github className="mr-1.5 h-4 w-4" />
            Source on GitHub
          </a>
        </Button>
      </div>
      <p className="mb-14 text-center text-xs text-muted-foreground">
        Custom domain pending DNS — the demo also runs at{" "}
        <a
          href={FALLBACK_DEMO_URL}
          className="font-medium text-foreground underline-offset-4 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          benefits-eligibility-agent.vercel.app
        </a>
        .
      </p>

      <aside
        className="mb-14 rounded-xl border border-border bg-muted/40 px-5 py-4"
        role="note"
      >
        <p className="text-sm font-medium text-foreground">
          Portfolio demo — not an official eligibility determination
        </p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          Only a county Department of Social Services office can determine NC
          FNS eligibility. This agent estimates likelihood from dated document
          snapshots and refers people to ePASS or their local DSS. Nothing you
          type in the public demo is stored on a server.
        </p>
      </aside>

      <div className="space-y-12">
        <div>
          <h2 className="mb-2 text-xl font-semibold tracking-tight">
            The problem
          </h2>
          <p className="text-sm leading-relaxed text-foreground/85">
            Eligibility questions arrive messy: hedged income (“about two
            thousand”), corrections mid-conversation, contradictions, and
            occasionally crisis language or prompt-injection attempts. In a
            benefits context, a fluent wrong answer is worse than an honest
            “I don’t have that in my documents.” The product brief centered on
            likelihood estimates with mandatory referral language — never a
            determination, never a submission on someone’s behalf.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold tracking-tight">
            How a message travels
          </h2>
          <ol className="space-y-3">
            {PIPELINE_STEPS.map((step, index) => (
              <li
                key={step.title}
                className="rounded-lg border border-border bg-card px-4 py-3"
              >
                <p className="text-sm font-medium text-foreground">
                  <span className="mr-2 text-muted-foreground">
                    {index + 1}.
                  </span>
                  {step.title}
                </p>
                <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold tracking-tight">
            The glass box
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-foreground/85">
            Every assistant turn ends with a collapsible drawer built from a
            typed <code className="text-xs">data-trace</code> stream part:
            sanitize redaction counts (kinds only — never values), classifier
            verdict and latency, retrieval matches with cosine scores, tool
            inputs/outputs, and a running cost estimate. Citation chips open
            the exact corpus chunk that grounded the answer. Tool-status labels
            (“Checking NC FNS income limits…”) come from typed tool parts, not
            model prose.
          </p>
          <figure className="overflow-hidden rounded-xl border border-border">
            <Image
              src="/projects/benefits-eligibility-agent/chat-citations.png"
              alt="Demo chat answering a household-of-3 income-limit question with source chips and a glass-box drawer"
              width={1200}
              height={900}
              className="h-auto w-full"
            />
            <figcaption className="border-t border-border bg-muted/30 px-4 py-2 text-xs text-muted-foreground">
              Grounded answer with citation chips and glass-box cost estimate
            </figcaption>
          </figure>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold tracking-tight">
            Guardrails before helpfulness
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-foreground/85">
            Crisis detection outranks every other behavior (988 / NC 211
            pathways). Injection, PII, and out-of-scope short-circuit with
            templated replies. Precedence collisions are tested — for example
            crisis beats injection; injection with an SSN still drops the raw
            value from history. Fail-closed on classifier failure: a safe
            retry, never unclassified input reaching the agent.
          </p>
          <figure className="overflow-hidden rounded-xl border border-border">
            <Image
              src="/projects/benefits-eligibility-agent/guardrail-badge.png"
              alt="Demo showing an injection attempt short-circuited with a guardrail badge"
              width={1200}
              height={900}
              className="h-auto w-full"
            />
            <figcaption className="border-t border-border bg-muted/30 px-4 py-2 text-xs text-muted-foreground">
              Injection short-circuit with a visible guardrail badge
            </figcaption>
          </figure>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold tracking-tight">
            Grounded corpus, honest no-match
          </h2>
          <p className="text-sm leading-relaxed text-foreground/85">
            Six official NC FNS documents (income limits, household composition,
            deductions, how to apply, resource limits, work requirements) live
            as dated markdown snapshots. Retrieval uses an explicit cosine
            floor — weak matches become “I don’t have that in my documents”
            plus the official ePASS/DSS referral, rendered by the UI from
            shared constants. No live fetching at answer time. The
            income-limits table is also parsed at boot into a Zod-validated
            structure the math tools consume; parse failure refuses to boot.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold tracking-tight">
            Deterministic eligibility math
          </h2>
          <p className="text-sm leading-relaxed text-foreground/85">
            The model never computes thresholds or authors verdict language.
            Settled CaseFile facts (income, household size, county) travel with
            each request in browser memory.{" "}
            <code className="text-xs">checkIncomeThreshold</code> refuses to
            run on a guess or unresolved contradiction. Likelihood tiers are
            displayed with the mandatory “only NC DSS can determine eligibility”
            suffix — always interface-rendered.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold tracking-tight">
            Deliberate tradeoffs
          </h2>
          <ul className="space-y-3">
            {TRADEOFFS.map((item) => (
              <li
                key={item.title}
                className="rounded-lg border border-border bg-card px-4 py-3"
              >
                <p className="text-sm font-medium text-foreground">
                  {item.title}
                </p>
                <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold tracking-tight">
            Eval report
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            Regenerated with{" "}
            <code className="text-xs">npm run eval</code> on 2026-08-06 —
            classifier prompt v3, agent prompt v6, envelope v4, embedding model{" "}
            <code className="text-xs">text-embedding-3-small</code>, retrieval
            threshold 0.28. Claims below match the repository README.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead className="border-b border-border bg-muted/40">
                <tr>
                  <th className="px-4 py-2.5 font-medium">Attack / behavior</th>
                  <th className="px-4 py-2.5 font-medium">Result</th>
                </tr>
              </thead>
              <tbody>
                {EVAL_ROWS.map(([label, result]) => (
                  <tr
                    key={label}
                    className="border-b border-border last:border-0"
                  >
                    <td className="px-4 py-2.5 text-foreground/85">{label}</td>
                    <td className="px-4 py-2.5">
                      <Badge variant="secondary">{result}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold tracking-tight">
            Stack and methodology
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-foreground/85">
            TypeScript monorepo (React + Vite client, Express API, shared Zod
            contracts) on the Vercel AI SDK with OpenAI. Built in gated slices
            against a truth stack —{" "}
            <code className="text-xs">AGENTS.md</code>, roadmap, decision memos,
            and proof scripts — the same orchestration discipline described on
            the{" "}
            <Link
              href="/methodology"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              AI Orchestration Methodology
            </Link>{" "}
            page.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {[
              "TypeScript",
              "React",
              "Express",
              "Vercel AI SDK",
              "OpenAI",
              "Zod",
              "Vitest",
            ].map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 border-t border-border pt-8">
          <Button className="rounded-full" asChild>
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 h-4 w-4" />
              Live demo
            </a>
          </Button>
          <Button variant="outline" className="rounded-full" asChild>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1.5 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="ghost" className="rounded-full" asChild>
            <Link href="/projects">← All projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
