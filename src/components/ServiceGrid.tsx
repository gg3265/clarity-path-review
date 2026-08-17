import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site";

export function ServiceGrid({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="bg-background">
      <div className="container-page py-20 md:py-28">
        {showHeading ? (
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Capabilities</p>
            <h2 className="mt-5 font-display text-3xl leading-tight font-extrabold text-foreground sm:text-4xl lg:text-5xl">
              Our Services
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Specialized pathology and laboratory services for routine, complex
              and diagnostically challenging cases.
            </p>
          </Reveal>
        ) : null}

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.number}
              delay={(i % 3) * 70}
              className={
                service.number === "08" ? "sm:col-span-2 lg:col-span-2" : ""
              }
            >
              <ServiceCard
                {...service}
                featured={service.number === "03"}
                className="h-full border-0"
              />
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Service descriptions are indicative. Detailed test availability can be
          confirmed with the laboratory.
        </p>
      </div>
    </section>
  );
}
