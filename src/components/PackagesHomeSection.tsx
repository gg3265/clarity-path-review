import { formatPrice } from "@/utils/formatPrice";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Activity, Beaker } from "lucide-react";
import { packages } from "@/data/packages";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function HealthPackageCard({ pkg, isFlagship }: { pkg: any, isFlagship?: boolean }) {
  return (
    <div 
      className={cn(
        "group flex flex-col justify-between rounded-[2rem] border p-7 sm:p-9 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1",
        isFlagship 
          ? "border-teal/30 bg-white" 
          : "border-border bg-surface hover:border-teal/20 hover:bg-white"
      )}
    >
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-teal">
            <Activity className="size-3.5" />
            <span>Health Check</span>
          </div>
          {isFlagship && (
            <span className="rounded-full bg-teal/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-teal">
              Most Comprehensive
            </span>
          )}
        </div>
        
        <h3 className="mb-3 font-display text-2xl font-bold leading-tight text-navy">
          {pkg.name}
        </h3>
        
        <p className="mb-6 text-sm font-medium leading-relaxed text-muted-foreground">
          {pkg.description}
        </p>
      </div>

      <div>
        <Accordion type="single" collapsible className="mb-6 w-full">
          <AccordionItem value="details" className="border-border">
            <AccordionTrigger className="py-3 text-sm font-semibold text-navy hover:text-teal hover:no-underline data-[state=open]:text-teal">
              View Details
            </AccordionTrigger>
            <AccordionContent className="pt-2 text-sm text-muted-foreground">
              <div className="grid gap-2">
                {pkg.testIds?.slice(0, 10).map((id: string) => (
                  <div key={id} className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-teal/50" />
                    <span className="truncate">{id.replace(/-/g, " ")}</span>
                  </div>
                ))}
                {pkg.testIds?.length > 10 && (
                  <div className="pl-3.5 pt-1 text-xs italic text-teal/70">
                    + {pkg.testIds.length - 10} more tests
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex items-end justify-between border-t border-border pt-6">
          <div>
            <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Total Package
            </div>
            <div className="font-display text-3xl font-extrabold text-navy">
              {formatPrice(pkg.price)}
            </div>
          </div>
          
          <Link to={`/packages/${pkg.id}`} className="inline-flex h-12 items-center justify-center rounded-xl bg-navy px-6 text-sm font-bold text-white transition-colors hover:bg-teal sm:px-8">
            Book
          </Link>
        </div>
      </div>
    </div>
  );
}

export function PackagesHomeSection() {
  const highlightIds = [
    "pkg-crl-essential",
    "pkg-crl-vital",
    "pkg-crl-complete",
    "pkg-signature-health"
  ];
  
  const healthPkgs = highlightIds
    .map(id => packages.find(p => p.id === id))
    .filter(Boolean) as typeof packages;

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container-page max-w-6xl">
        <Reveal className="mb-16 text-center">
          <p className="eyebrow mb-4">Routine Clinical Testing</p>
          <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl">
            Preventive Health Packages
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground">
            Comprehensive diagnostic screening packages designed for routine health assessment and monitoring.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {healthPkgs.map((pkg, idx) => (
            <Reveal key={pkg.id} delay={idx * 100}>
              <HealthPackageCard pkg={pkg} isFlagship={pkg.id === "pkg-signature-health"} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-14 flex justify-center">
          <Link 
            to="/packages"
            className="group flex h-14 items-center justify-center gap-3 rounded-full border-2 border-border bg-white px-8 text-sm font-bold text-navy transition-all hover:border-teal/30 hover:bg-teal/5"
          >
            Explore All Health Packages
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
