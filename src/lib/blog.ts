export type PostStatus = "idea" | "draft" | "published";

export interface Post {
  title: string;
  slug: string;
  description: string;
  date?: string;
  tags: string[];
  status: PostStatus;
}

export const POSTS: Post[] = [
  {
    title: "Building an AI Orchestration Server: Architecture and Early Lessons",
    slug: "ai-orchestration-server-architecture",
    description:
      "An inside look at designing a unidirectional AI-assisted workflow pipeline—what worked, what didn't, and where the methodology is heading.",
    tags: ["agentic-orchestration", "typescript", "architecture"],
    status: "draft",
  },
  {
    title: "Context Engineering: Keeping AI Agents Aligned with Your Codebase",
    slug: "context-engineering-ai-agents",
    description:
      "The persistent rule systems, MCP integrations, and structured implementation plans that turn AI from a code suggester into a reliable development partner.",
    tags: ["context-engineering", "cursor", "ai-tooling"],
    status: "draft",
  },
  {
    title: "The Case for Unidirectional Data Flow in AI Pipelines",
    slug: "unidirectional-data-flow-ai-pipelines",
    description:
      "Why treating AI workflows like frontend state management—clear inputs, deterministic transforms, predictable outputs—reduces bugs and cognitive overhead.",
    tags: ["agentic-orchestration", "software-design"],
    status: "idea",
  },
  {
    title: "Tech Review: Cursor as a Daily Driver After Six Months",
    slug: "cursor-daily-driver-review",
    description:
      "A practitioner's honest assessment of building production software inside an AI IDE—what works, what doesn't, and what I wish existed.",
    tags: ["tech-review", "cursor", "ai-tooling"],
    status: "idea",
  },
  {
    title: "What the Latest AI Headlines Actually Mean for Working Engineers",
    slug: "ai-headlines-for-engineers",
    description:
      "Cutting through the noise: a grounded take on recent model releases, tooling announcements, and what's actually worth paying attention to.",
    tags: ["ai-headlines", "commentary"],
    status: "idea",
  },
];

export function getAllPosts(): Post[] {
  return POSTS;
}

export function getWritingPreview(count = 2): Post[] {
  return POSTS.filter((p) => p.status === "draft").slice(0, count);
}
