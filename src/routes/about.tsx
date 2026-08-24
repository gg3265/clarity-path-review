import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { FeaturedTestsBar } from "@/components/FeaturedTestsBar";
import { DiagnosticApproachSection, SpecialistCTA } from "@/components/SpecialistContent";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";

const title = "About Second Opinion CRL | Clinical Reference Laboratory";
const description = "Learn about our specialist pathology review, our expert pathologists, and our commitment to diagnostic clarity.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <FeaturedTestsBar />
      <PageHeader
        eyebrow="About Us"
        title="Clinical Reference Laboratory"
        intro="At Second Opinion CRL, our diagnostic services are supported by experienced professionals with extensive expertise across pathology and microbiology."
        showBack={true}
        backFallback="/"
      />

      <DiagnosticApproachSection />

      <section className="bg-background py-20 border-b border-border">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-display font-extrabold text-navy mb-6">Our Experts</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Second Opinion CRL – Clinical Reference Laboratory, our diagnostic services are supported by experienced professionals with extensive expertise across pathology and microbiology. Our team combines long-standing diagnostic experience with a multidisciplinary approach to laboratory medicine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-surface border border-border rounded-2xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-teal/30 group">
              <h3 className="text-xl font-bold text-navy mb-1 group-hover:text-teal transition-colors">Dr. Vandana Gite</h3>
              <p className="text-sm font-semibold text-teal mb-4">MD Pathology | Senior Pathologist</p>
              <div className="inline-block bg-teal/10 text-teal text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-full mb-6">
                20+ years of experience
              </div>
              <div className="text-sm text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  Dr. Vandana Gite is an experienced senior pathologist with over 20 years of expertise in diagnostic pathology. Her extensive experience encompasses the evaluation and interpretation of a wide range of pathological specimens, with a focus on accurate, clinically relevant and evidence-based diagnosis.
                </p>
                <p>
                  Her experience contributes to the specialist pathology review and second-opinion services provided by Second Opinion CRL.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-surface border border-border rounded-2xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-teal/30 group">
              <h3 className="text-xl font-bold text-navy mb-1 group-hover:text-teal transition-colors">Dr. Maruti Dhakane</h3>
              <p className="text-sm font-semibold text-teal mb-4">Senior Pathologist</p>
              <div className="inline-block bg-teal/10 text-teal text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-full mb-6">
                23+ years of experience
              </div>
              <div className="text-sm text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  Dr. Maruti Dhakane is a senior pathologist with more than 23 years of experience in diagnostic pathology. His extensive professional experience includes the evaluation of diverse pathological specimens and complex diagnostic cases.
                </p>
                <p>
                  He contributes to the multidisciplinary diagnostic approach of Second Opinion CRL, supporting comprehensive pathology review and clinically meaningful diagnostic interpretation.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-surface border border-border rounded-2xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-teal/30 group">
              <h3 className="text-xl font-bold text-navy mb-1 group-hover:text-teal transition-colors">Mr. Vishal Shukla</h3>
              <p className="text-sm font-semibold text-teal mb-4">MSc Microbiology | Senior Microbiologist</p>
              <div className="inline-block bg-teal/10 text-teal text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-full mb-6">
                10+ years of experience in Microbiology
              </div>
              <div className="text-sm text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  Mr. Vishal Shukla is an experienced microbiologist with more than 10 years of expertise in clinical microbiology and laboratory diagnostics.
                </p>
                <p>
                  His experience supports the microbiology and laboratory diagnostic services of Second Opinion CRL, with an emphasis on reliable laboratory processes, accurate interpretation and quality-focused diagnostic practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="bg-teal/5 py-16 lg:py-24 border-b border-border">
        <div className="container-page max-w-4xl text-center">
          <h2 className="text-base font-bold tracking-widest uppercase text-teal mb-6">
            Our Commitment
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-navy mb-6 leading-tight">
            Experience. Expertise. Collaboration. Diagnostic Clarity.
          </h3>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Our team brings together expertise from pathology and microbiology to provide a comprehensive laboratory and diagnostic consultation service.
          </p>
        </div>
      </section>

      <section className="bg-navy py-20 lg:py-28 text-white overflow-hidden relative">
        <div aria-hidden="true" className="lab-grid-dark absolute inset-0 opacity-40" />
        <div className="container-page max-w-3xl text-center relative z-10">
          <ShieldCheck className="size-16 text-teal mx-auto mb-8" />
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            Quality & Standards
          </h2>
          <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Our diagnostic approach incorporates current evidence-based pathology practices, relevant tumour classification systems, staging frameworks, biomarker guidelines and structured reporting principles, as applicable to each case.
          </p>
          <div className="mt-10">
            <Link
              to="/quality-standards"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-8 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Read Full Quality Standards
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <SpecialistCTA />
    </>
  );
}
