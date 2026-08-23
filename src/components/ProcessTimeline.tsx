import { Reveal } from "@/components/Reveal";
import { process } from "@/lib/site";

export function ProcessTimeline() {
  return (
    <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
      {process.map((item, i) => (
        <Reveal as="li" key={item.step} delay={i * 90} className="relative">
          <div className="flex items-center gap-3">
            <span className="font-display text-sm font-bold text-teal-soft">
              {item.step}
            </span>
            <span
              aria-hidden="true"
              className="h-px flex-1 bg-white/15"
            />
          </div>
          <h3 className="mt-5 font-display text-lg font-bold text-primary-foreground">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
            {item.description}
          </p>
        </Reveal>
      ))}
    </ol>
  );
}

