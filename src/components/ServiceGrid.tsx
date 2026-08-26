// @ts-nocheck
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site";
import { Link } from "@tanstack/react-router";

export function ServiceGrid({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="specialist-services" className="bg-background">
      <div className="container-page py-20 md:py-28">
        {showHeading ? (
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Capabilities</p>
            <h2 className="mt-5 font-display text-3xl leading-tight font-extrabold text-foreground sm:text-4xl lg:text-5xl">
              Specialist Pathology Services
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Specialized pathology and laboratory services for routine, complex
              and diagnostically challenging cases.
            </p>
          </Reveal>
        ) : null}

        <div className="mt-12 flex flex-col gap-px overflow-hidden rounded-2xl bg-border">
          {services.length > 0 && (
            <Reveal delay={0}>
              <Link to={`/services/${services[0].title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="block">
                <ServiceCard
                  {...services[0]}
                  featured={true}
                  className="w-full border-0 sm:flex-row sm:items-center sm:gap-10 sm:p-12"
                />
              </Link>
            </Reveal>
          )}
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(1).map((service, i) => {
              const slug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
              return (
                <Reveal
                  key={service.number}
                  delay={((i + 1) % 3) * 70}
                >
                  <Link to={`/services/${slug}`} className="block h-full">
                    <ServiceCard
                      {...service}
                      featured={false}
                      className="h-full border-0"
                    />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Service descriptions are indicative. Detailed test availability can be
          confirmed with the laboratory.
        </p>
      </div>
    </section>
  );
}
