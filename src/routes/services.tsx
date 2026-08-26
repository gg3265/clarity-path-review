import { createFileRoute, Link } from "@tanstack/react-router";
import { CaseMaterials } from "@/components/CaseMaterials";
import { PageHeader } from "@/components/PageHeader";
import { ReferringSection } from "@/components/ReferringSection";
import { services } from "@/lib/site";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const title = "Services | Histopathology, Oncopathology & IHC in Pune – Second Opinion CRL";
const description = "Pathology services at SECOND OPINION CRL Pune: histopathology, oncopathology, cytopathology, immunohistochemistry, clinical pathology, haematology and molecular testing.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Services,
});

// Using Unsplash placeholders carefully selected for the exact vibe requested.
const serviceImages: Record<string, string> = {
  "01": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop", // Pathology Second Opinion (digital pathology screen/doctor)
  "02": "https://images.unsplash.com/photo-1582719471327-5107149021e1?q=80&w=800&auto=format&fit=crop", // Histopathology (microscope)
  "03": "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop", // Oncopathology (cancer tissue/research)
  "04": "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=800&auto=format&fit=crop", // Cytopathology (cells/lab)
  "05": "https://images.unsplash.com/photo-1614935151651-0bea6508ab6b?q=80&w=800&auto=format&fit=crop", // IHC (stained tissue visualization)
  "06": "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop", // Haematopathology (blood/hematology)
  "07": "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop", // Molecular (dna/instrumentation)
  "08": "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop", // Clinical Pathology (clean lab testing)
};

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="Diagnostic Services"
        intro="Specialized pathology and laboratory services for routine, complex and diagnostically challenging cases."
        showBack={true}
      />
      
      <section className="bg-surface py-20 lg:py-28 border-b border-border">
        <div className="container-page max-w-6xl">
          <div className="grid gap-12 lg:gap-16">
            {services.map((service, i) => {
              const slug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
              const isEven = i % 2 === 0;
              const imageUrl = serviceImages[service.number] || serviceImages["02"];

              return (
                <Reveal key={service.number} delay={100} className="group">
                  <div className="grid gap-8 rounded-[2rem] border border-border bg-white p-4 shadow-sm transition-all duration-500 hover:shadow-md lg:grid-cols-2 lg:gap-12 lg:p-6">
                    
                    <div className={cn(
                      "relative aspect-[16/10] overflow-hidden rounded-2xl lg:aspect-auto",
                      !isEven && "lg:order-2"
                    )}>
                      <img 
                        src={imageUrl} 
                        alt={service.title}
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-navy/5 mix-blend-multiply" />
                      <div className="absolute top-4 left-4 rounded-xl bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-widest text-navy backdrop-blur-md">
                        {service.number}
                      </div>
                    </div>

                    <div className="flex flex-col justify-center px-4 pb-6 lg:p-8">
                      <h2 className="mb-4 font-display text-2xl font-bold text-navy sm:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mb-8 text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
                        {service.description}
                      </p>
                      
                      <Link 
                        to={`/services/${slug}`} 
                        className="mt-auto inline-flex w-max items-center justify-center gap-2 rounded-full bg-navy px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal"
                      >
                        Explore Service
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>

                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CaseMaterials />
      <ReferringSection />
    </>
  );
}
