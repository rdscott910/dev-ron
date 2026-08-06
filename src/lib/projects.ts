export interface ProjectLinks {
  github?: string;
  live?: string;
  caseStudy?: string;
}

export interface Project {
  title: string;
  slug: string;
  summary: string;
  problem: string;
  role: string;
  stack: string[];
  status: "concept" | "in-progress" | "shipped" | "archived";
  links: ProjectLinks;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "NC SNAP Benefits Eligibility Agent",
    slug: "benefits-eligibility-agent",
    summary:
      "A grounded, glass-box chat agent that estimates North Carolina FNS (SNAP) eligibility likelihood from curated policy documents — with guardrails, deterministic math tools, and clickable citations. Built for a voice-AI company's case-study interview.",
    problem:
      "Benefit-eligibility questions mix messy user input with safety-critical rules. A helpful model that invents a limit, or computes a threshold wrong, is worse than a clear referral to the county DSS.",
    role: "Sole author — architecture, guardrail pipeline, grounded RAG, deterministic tools, eval harness, and public demo deploy.",
    stack: [
      "TypeScript",
      "React",
      "Express",
      "Vercel AI SDK",
      "OpenAI",
      "Zod",
      "Vitest",
    ],
    status: "shipped",
    links: {
      github: "https://github.com/rdscott910/Benefits-Eligibility-Agent",
      live: "https://demo.dev-ron.com",
      caseStudy: "/projects/benefits-eligibility-agent",
    },
    featured: true,
  },
  {
    title: "AI Orchestration Server",
    slug: "ai-orchestration-server",
    summary:
      "A unidirectional Telegram → Server → iCloud bridge for AI-assisted workflows on macOS. Built to solve the context-alignment problem in multi-agent development sessions.",
    problem:
      "Coordinating AI agents across tools and sessions causes context loss and misalignment. Existing workflows lack a durable, structured pipeline for routing instructions and capturing outputs.",
    role: "Sole author — architecture, implementation, and ongoing methodology development.",
    stack: ["TypeScript", "Node.js", "Anthropic SDK", "grammY", "p-queue"],
    status: "in-progress",
    links: {
      github: "https://github.com/rdscott910/ai-orchestration-server",
      caseStudy: "/methodology",
    },
    featured: true,
  },
  {
    title: "Full-Stack Accounting Platform",
    slug: "fqb-accounting",
    summary:
      "A GAAP-aligned desktop accounting application built as a TypeScript monorepo. Includes a double-entry ledger, 50+ component UI library, contract-first API layer, and AI-assisted development workflows.",
    problem:
      "Small businesses need affordable, trustworthy accounting software that enforces GAAP correctness without sacrificing usability.",
    role: "Co-founder and engineer — database schema, backend architecture, UI component system, automated testing, and AI workflow integration.",
    stack: ["TypeScript", "Electron", "React", "PostgreSQL", "ORPC", "Drizzle"],
    status: "in-progress",
    links: {},
    featured: true,
  },
];

export function getAllProjects(): Project[] {
  return PROJECTS;
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured);
}
