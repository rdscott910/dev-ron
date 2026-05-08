import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-32 text-center"
    >
      <p className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">
        Software Engineer
      </p>
      <h1
        id="hero-heading"
        className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
      >
        Hi, I&apos;m Ronnie
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        I build performant, accessible web applications and love turning complex
        problems into clean, elegant solutions.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button size="lg" className="rounded-full" asChild>
          <Link href="/resume.pdf">Resume</Link>
        </Button>
        <Button variant="outline" size="lg" className="rounded-full" asChild>
          <Link href="#contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  );
}
