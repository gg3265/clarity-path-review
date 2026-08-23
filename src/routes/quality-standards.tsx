import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { FeaturedTestsBar } from "@/components/FeaturedTestsBar";

export const Route = createFileRoute("/quality-standards")({
  component: QualityStandards,
});

const standardsList = [
  "WHO Classification of Tumours",
  "CAP protocols",
  "ICC/WHO haematolymphoid classifications",
  "AJCC TNM",
  "ASCO/CAP biomarker guidelines",
  "International cytology reporting systems",
  "Relevant specialty guidelines",
];

function QualityStandards() {
  return (
    <>
      <FeaturedTestsBar />
      <PageHeader
        eyebrow="Commitment to Excellence"
        title="Quality & Diagnostic Standards"
        intro="Evidence-based pathology practices for clearer diagnostic decisions."
        showBack={true}
        backFallback="/about"
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="container-page max-w-4xl">
          <div className="bg-surface rounded-3xl p-8 sm:p-14 border border-border shadow-soft relative overflow-hidden">
            <div aria-hidden="true" className="absolute -top-24 -right-24 size-[24rem] bg-teal/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="size-14 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="size-7 text-teal" />
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy">
                  Quality & Diagnostic Standards
                </h2>
              </div>
              
              <p className="text-lg text-foreground font-medium leading-relaxed mb-10 border-l-2 border-teal/30 pl-5">
                Our diagnostic approach follows current evidence and professional standards, with references to appropriate:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {standardsList.map((standard, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border hover:border-teal/30 transition-colors shadow-sm">
                    <CheckCircle2 className="size-5 text-teal shrink-0 mt-0.5" />
                    <span className="font-semibold text-foreground">{standard}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
