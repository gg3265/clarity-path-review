import { CheckCircle2, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import aboutSlide from "@/assets/about-slide.jpg";

const standardsList = [
  "WHO Classification of Tumours",
  "CAP protocols",
  "ICC/WHO haematolymphoid classifications",
  "AJCC TNM",
  "ASCO/CAP biomarker guidelines",
  "International cytology reporting systems",
  "Relevant specialty guidelines",
];

export function QualityStandardsHome() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="container-page">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          
          {/* Left: Content */}
          <Reveal className="max-w-xl">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/10 text-teal">
              <ShieldCheck className="size-6" strokeWidth={2} />
            </div>
            
            <h2 className="mb-6 font-display text-3xl font-extrabold text-navy sm:text-4xl">
              Quality & Diagnostic Standards
            </h2>
            
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Our diagnostic approach follows current evidence and professional standards, with references to appropriate:
            </p>
            
            <div className="flex flex-col gap-4 sm:gap-5">
              {standardsList.map((standard) => (
                <div key={standard} className="group flex items-start gap-4">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-teal/10 transition-colors group-hover:bg-teal">
                    <CheckCircle2 className="size-4 text-teal transition-colors group-hover:text-white" strokeWidth={2.5} />
                  </div>
                  <span className="font-semibold leading-snug text-navy sm:text-lg">
                    {standard}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right: Premium Image Panel */}
          <Reveal delay={100} className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border bg-background shadow-soft sm:aspect-square lg:aspect-[4/5]">
              <img 
                src={aboutSlide} 
                alt="Quality and diagnostic standards representation" 
                className="size-full object-cover opacity-90 transition-transform duration-700 hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>
            {/* Decorative element */}
            <div aria-hidden="true" className="absolute -bottom-6 -left-6 -z-10 size-64 rounded-full bg-teal/10 blur-3xl" />
          </Reveal>
          
        </div>
      </div>
    </section>
  );
}
