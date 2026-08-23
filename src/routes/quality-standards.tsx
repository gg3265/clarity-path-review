import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/quality-standards")({
  head: () => ({
    meta: [
      { title: "Quality & Diagnostic Standards | Second Opinion CRL" },
      { name: "description", content: "Our diagnostic approach and evidence-based pathology practices." },
    ],
  }),
  component: QualityStandards,
});

function QualityStandards() {
  return (
    <>
      <PageHeader
        eyebrow="Quality & Standards"
        title="Quality & Diagnostic Standards"
        intro="Evidence-based practices and structured diagnostic reporting."
        showBack={true}
      />
      <div className="bg-background py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <div className="prose prose-slate prose-lg max-w-none text-muted-foreground">
            <p className="lead text-xl text-foreground font-medium mb-12">
              Our diagnostic approach incorporates current evidence-based pathology practices, relevant tumour classification systems, staging frameworks, biomarker guidelines and structured reporting principles, as applicable to each case.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Evidence-Based Pathology Practice</h2>
            <p>
              Diagnostic assessments are conducted with careful attention to morphological detail and correlation with clinical findings. We integrate up-to-date pathology literature and established diagnostic criteria to ensure robust, reproducible, and clinically meaningful interpretations.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Relevant Tumour Classification Systems</h2>
            <p>
              Where applicable, cases involving neoplasms are evaluated utilizing relevant and recognized tumour classification systems. This supports accurate diagnostic categorization essential for guiding appropriate clinical management.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Staging Frameworks</h2>
            <p>
              For relevant oncological resection specimens, our reviews incorporate established staging frameworks to accurately define the extent of disease based on the submitted histopathological material.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Biomarker Guidelines</h2>
            <p>
              Interpretation of immunohistochemical and ancillary molecular studies is guided by current recommendations. We strive to provide clear insights regarding prognostic and predictive biomarkers when they are critical for patient care.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Structured Reporting</h2>
            <p>
              We prioritize clarity and precision in our communication. Final pathology opinions are delivered through structured reporting principles, ensuring that referring physicians and clinical teams receive comprehensive, organized, and easily interpretable diagnostic data.
            </p>
          </div>

          <div className="mt-20 rounded-2xl bg-surface border border-border p-8 text-center sm:p-12">
            <h3 className="font-display text-2xl font-bold text-foreground">
              Consult a specialist pathologist
            </h3>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy px-8 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                View Services
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/second-opinion"
                className="w-full sm:w-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-navy/20 bg-transparent px-8 text-sm font-semibold text-navy transition-colors hover:bg-navy/5"
              >
                Learn About Second Opinions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
