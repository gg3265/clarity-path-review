import {
  ArrowUpRight,
  Beaker,
  CircleDot,
  Dna,
  Droplet,
  FlaskConical,
  Layers,
  Search,
  Target,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  layers: Layers,
  target: Target,
  search: Search,
  circle: CircleDot,
  flask: FlaskConical,
  beaker: Beaker,
  droplet: Droplet,
  dna: Dna,
};

export function ServiceCard({
  number,
  title,
  description,
  icon,
  className,
  featured = false,
}: {
  number: string;
  title: string;
  description: string;
  icon: string;
  className?: string;
  featured?: boolean;
}) {
  const Icon = icons[icon] ?? Layers;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden border border-border bg-background p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift",
        featured && "bg-navy text-primary-foreground",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-crimson transition-transform duration-500 group-hover:scale-x-100"
      />
      <div className="flex items-start justify-between gap-4">
        <span
          className={cn(
            "font-display text-xs font-bold tracking-[0.18em]",
            featured ? "text-primary-foreground/50" : "text-muted-foreground",
          )}
        >
          {number}
        </span>
        <Icon
          className={cn(
            "size-6 transition-transform duration-500 group-hover:scale-110",
            featured ? "text-crimson-soft" : "text-crimson",
          )}
          aria-hidden="true"
        />
      </div>

      <div className="mt-10">
        <h3
          className={cn(
            "font-display text-lg font-bold",
            featured ? "text-primary-foreground" : "text-foreground",
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "mt-2 text-sm leading-relaxed",
            featured
              ? "text-primary-foreground/70"
              : "text-muted-foreground",
          )}
        >
          {description}
        </p>
        <ArrowUpRight
          aria-hidden="true"
          className={cn(
            "mt-6 size-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1",
            featured ? "text-primary-foreground/60" : "text-foreground/40",
          )}
        />
      </div>
    </article>
  );
}
