import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

export type PostStatus = "idea" | "draft" | "published";

export interface Post {
  title: string;
  slug: string;
  description: string;
  date?: string;
  tags: string[];
  status: PostStatus;
  series?: string;
  /** Excluded from index/preview lists; still dev-previewable by slug. */
  hidden?: boolean;
  /** MDX body; present only for posts backed by a file in content/blog. */
  content?: string;
}

/**
 * Planned posts without MDX files yet. An MDX file with the same slug
 * overrides its entry here.
 */
export const PLANNED_POSTS: Post[] = [
  {
    title: "Building an AI Orchestration Server: Architecture and Early Lessons",
    slug: "ai-orchestration-server-architecture",
    description:
      "An inside look at designing a unidirectional AI-assisted workflow pipeline—what worked, what didn't, and where the methodology is heading.",
    tags: ["agentic-orchestration", "typescript", "architecture"],
    status: "draft",
    series: "Agentic Orchestration",
  },
  {
    title: "Context Engineering: Keeping AI Agents Aligned with Your Codebase",
    slug: "context-engineering-ai-agents",
    description:
      "The persistent rule systems, MCP integrations, and structured implementation plans that turn AI from a code suggester into a reliable development partner.",
    tags: ["context-engineering", "cursor", "ai-tooling"],
    status: "draft",
    series: "Agentic Orchestration",
  },
  {
    title: "The Case for Unidirectional Data Flow in AI Pipelines",
    slug: "unidirectional-data-flow-ai-pipelines",
    description:
      "Why treating AI workflows like frontend state management—clear inputs, deterministic transforms, predictable outputs—reduces bugs and cognitive overhead.",
    tags: ["agentic-orchestration", "software-design"],
    status: "idea",
    series: "Agentic Orchestration",
  },
  {
    title: "Tech Review: Cursor as a Daily Driver After Six Months",
    slug: "cursor-daily-driver-review",
    description:
      "A practitioner's honest assessment of building production software inside an AI IDE—what works, what doesn't, and what I wish existed.",
    tags: ["tech-review", "cursor", "ai-tooling"],
    status: "idea",
    series: "Tech Reviews",
  },
  {
    title: "What the Latest AI Headlines Actually Mean for Working Engineers",
    slug: "ai-headlines-for-engineers",
    description:
      "Cutting through the noise: a grounded take on recent model releases, tooling announcements, and what's actually worth paying attention to.",
    tags: ["ai-headlines", "commentary"],
    status: "idea",
    series: "AI Headlines",
  },
];

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");
const VALID_STATUSES: PostStatus[] = ["idea", "draft", "published"];

function getMdxPosts(): Post[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
      const { data, content } = matter(raw);
      const status: PostStatus = VALID_STATUSES.includes(data.status)
        ? data.status
        : "draft";

      return {
        title: data.title ?? file,
        slug: data.slug ?? file.replace(/\.mdx$/, ""),
        description: data.description ?? "",
        date: data.date ? String(data.date) : undefined,
        tags: Array.isArray(data.tags) ? data.tags : [],
        status,
        series: data.series,
        hidden: data.hidden === true,
        content,
      };
    });
}

/** All posts: MDX-backed entries override planned entries by slug. */
export function getAllPosts(): Post[] {
  const mdxPosts = getMdxPosts();
  const mdxSlugs = new Set(mdxPosts.map((p) => p.slug));
  const planned = PLANNED_POSTS.filter((p) => !mdxSlugs.has(p.slug));

  return [...mdxPosts, ...planned].sort((a, b) =>
    (b.date ?? "").localeCompare(a.date ?? ""),
  );
}

/** Posts shown on the blog index and home preview. */
export function getListedPosts(): Post[] {
  return getAllPosts().filter((p) => !p.hidden);
}

/** Posts with live routes in production builds. */
export function getPublishedPosts(): Post[] {
  return getAllPosts().filter(
    (p) => p.status === "published" && p.content !== undefined,
  );
}

/**
 * Posts that can render at /blog/[slug] right now. Draft posts with MDX
 * content are previewable in development but excluded from production.
 */
export function isRoutable(post: Post): boolean {
  if (post.content === undefined) return false;
  if (post.status === "published") return true;
  return post.status === "draft" && process.env.NODE_ENV === "development";
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getWritingPreview(count = 2): Post[] {
  const listed = getListedPosts();
  const published = listed.filter((p) => p.status === "published");
  const drafts = listed.filter((p) => p.status === "draft");
  return [...published, ...drafts].slice(0, count);
}
