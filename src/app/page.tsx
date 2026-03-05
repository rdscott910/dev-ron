export default function Home() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-32 text-center">
      <p className="mb-4 text-sm font-medium tracking-widest text-foreground/50 uppercase">
        Software Engineer
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        Hi, I&apos;m Ronnie
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
        I build performant, accessible web applications and love turning complex
        problems into clean, elegant solutions.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="#projects"
          className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/20 px-8 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
