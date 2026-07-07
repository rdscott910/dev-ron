import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import {
  getPostBySlug,
  getPublishedPosts,
  isRoutable,
} from "@/lib/blog";
import { mdxComponents } from "@/components/mdx/MdxComponents";
import { Badge } from "@/components/ui/badge";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || !isRoutable(post)) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !isRoutable(post) || post.content === undefined) {
    notFound();
  }

  const formattedDate = post.date
    ? new Date(`${post.date}T00:00:00`).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <header className="mb-10">
        {post.status !== "published" && (
          <p className="mb-4 inline-flex items-center rounded-full bg-[#b58900]/15 px-2.5 py-0.5 text-xs font-medium text-[#6b5300]">
            Draft preview — visible in development only
          </p>
        )}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
          {formattedDate && <time dateTime={post.date}>{formattedDate}</time>}
          {post.series && (
            <>
              <span aria-hidden="true">·</span>
              <span>{post.series}</span>
            </>
          )}
        </div>
        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </header>

      <MDXRemote source={post.content} components={mdxComponents} />

      <footer className="mt-12 border-t border-border pt-6">
        <Link
          href="/blog"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          ← All writing
        </Link>
      </footer>
    </article>
  );
}
