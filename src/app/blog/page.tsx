import type { Metadata } from "next";

import { getAllPosts, type PostStatus } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Draft and planned writing on agentic orchestration, AI-assisted development workflows, context engineering, and technical commentary. Posts in progress.",
};

const STATUS_LABELS: Record<PostStatus, string> = {
  draft: "Draft",
  idea: "Planned",
  published: "Published",
};

const STATUS_STYLES: Record<PostStatus, string> = {
  draft: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  idea: "bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300",
  published:
    "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section
      aria-labelledby="blog-heading"
      className="mx-auto max-w-5xl px-6 py-24"
    >
      <h1 className="sr-only">Blog</h1>
      <SectionHeading
        title="Writing"
        subtitle="Thoughts on building"
        id="blog"
        className="mb-4"
      />
      <p className="mx-auto mb-12 max-w-xl text-center text-base leading-relaxed text-muted-foreground">
        Articles on agentic orchestration, AI-assisted development, and the
        craft of building software. Posts are in progress—check back soon.
      </p>

      <ul className="grid gap-6 sm:grid-cols-2" role="list">
        {posts.map((post) => (
          <li key={post.slug}>
            <Card className="flex h-full flex-col">
              <CardHeader className="flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_STYLES[post.status]}`}
                  >
                    {STATUS_LABELS[post.status]}
                  </span>
                </div>
                <CardTitle className="text-lg leading-snug">
                  {post.title}
                </CardTitle>
                <CardDescription className="mt-1 leading-relaxed">
                  {post.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
