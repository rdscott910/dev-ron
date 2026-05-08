import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  id,
  className,
}: SectionHeadingProps) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <div className={cn("space-y-2 text-center", className)}>
      {subtitle && (
        <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
          {subtitle}
        </p>
      )}
      <h2
        id={headingId}
        className="text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {title}
      </h2>
    </div>
  );
}
