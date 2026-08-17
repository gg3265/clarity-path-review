import { Reveal } from "@/components/Reveal";
import { principles } from "@/lib/site";

export function WhyUs() {
  return (
    <section className="bg-background">
      <div className="container-page grid gap-14 py-20 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">Why Second Opinion CRL</p>
          <h2 className="mt-5 font-display text-3xl leading-[1.1] font-extrabold text-foreground sm:text-4xl lg:text-[2.75rem]">
            Built around diagnostic clarity.
          </h2>
        </Reveal>

        <ul className="divide-y divide-border border-t border-border">
          {principles.map((principle, i) => (
            <Reveal as="li" key={principle.title} delay={i * 70}>
              <div className="group grid gap-3 py-7 transition-colors sm:grid-cols-[10rem_1fr] sm:gap-8">
                <h3 className="font-display text-base font-bold text-foreground">
                  <span className="accent-rule inline-block pb-1">
                    {principle.title}
                  </span>
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {principle.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
