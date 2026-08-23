import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { FeaturedTestsBar } from "@/components/FeaturedTestsBar";
import { DiagnosticApproachSection } from "@/components/SpecialistContent";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Microscope, ShieldCheck } from "lucide-react";
import drVandana from "@/assets/dr-vandana.png"; // We don't have this image yet, let's just not render it or use a placeholder if needed, wait, I can just use a text profile.

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

      <section className="bg-background py-20">
        <div className="container-page max-w-4xl">
          <div className="prose prose-slate prose-lg max-w-none text-muted-foreground">
            <h2 className="text-3xl font-display font-extrabold text-navy mb-6">Our Pathologists</h2>
            <p className="lead text-xl text-foreground font-medium mb-12">
              At Second Opinion CRL – Clinical Reference Laboratory, our diagnostic services are supported by experienced professionals with extensive expertise across pathology and microbiology. Our team combines long-standing diagnostic experience with a multidisciplinary approach to laboratory medicine.
            </p>

            <div className="bg-surface border border-border rounded-2xl p-8 sm:p-12 mb-16 shadow-soft">
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="size-24 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                  <Microscope className="size-10 text-teal" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy m-0">Dr. Vandana Gite</h3>
                  <p className="text-teal font-semibold mt-1 mb-4">MD Pathology | Senior Pathologist</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">20+ years of experience</p>
                  <p className="mb-0">
                    Dr. Vandana Gite is an experienced senior pathologist with over 20 years of expertise in diagnostic pathology. Her extensive experience encompasses the evaluation and interpretation of a wide range of pathological specimens, with a focus on accurate, clinically relevant and evidence-based diagnosis.
                  </p>
                  <p className="mt-4 mb-0">
                    Her experience contributes to the specialist pathology review and second-opinion services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DiagnosticApproachSection />

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
    </>
  );
}

