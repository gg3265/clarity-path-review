import { Reveal } from "@/components/Reveal";
import { focusAreas } from "@/lib/site";

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-background">
      <div className="container-page py-14 md:py-16">
        <Reveal>
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Focused expertise for complex pathology
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, i) => (
            <Reveal as="li" key={area.title} delay={i * 70}>
              <div className="group h-full bg-background p-6 transition-colors hover:bg-surface">
                <span
                  aria-hidden="true"
                  className="block h-0.5 w-8 bg-teal transition-all duration-500 group-hover:w-14"
                />
                <h3 className="mt-4 font-display text-base font-bold text-foreground">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

