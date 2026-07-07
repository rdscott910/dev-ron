import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { highlight } from "sugar-high";

function CodeBlock({ children, ...props }: ComponentPropsWithoutRef<"code">) {
  if (typeof children !== "string") {
    return <code {...props}>{children}</code>;
  }
  const html = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: html }} {...props} />;
}

export const mdxComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mt-10 mb-4 text-2xl font-bold tracking-tight text-foreground"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="mt-8 mb-3 text-xl font-semibold tracking-tight text-foreground"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="my-4 leading-relaxed text-foreground/85" {...props} />
  ),
  a: ({ href = "", ...props }: ComponentPropsWithoutRef<"a">) =>
    href.startsWith("/") ? (
      <Link
        href={href}
        className="font-medium text-foreground underline underline-offset-4 hover:decoration-2"
        {...props}
      />
    ) : (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-foreground underline underline-offset-4 hover:decoration-2"
        {...props}
      />
    ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="my-4 list-disc space-y-1.5 pl-6 leading-relaxed text-foreground/85"
      {...props}
    />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="my-4 list-decimal space-y-1.5 pl-6 leading-relaxed text-foreground/85"
      {...props}
    />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="my-6 border-l-2 border-foreground/25 pl-4 text-foreground/70 italic"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg border border-border bg-muted/60 p-4 text-sm leading-relaxed"
      {...props}
    />
  ),
  code: CodeBlock,
};
