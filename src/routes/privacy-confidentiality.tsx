import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/privacy-confidentiality")({
  head: () => ({
    meta: [
      { title: "Patient Confidentiality | Second Opinion CRL" },
      { name: "description", content: "Information handling and patient confidentiality at SECOND OPINION CRL." },
    ],
  }),
  component: PrivacyConfidentiality,
});

function PrivacyConfidentiality() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy & Confidentiality"
        title="Patient Confidentiality"
        intro="Patient information and diagnostic material are handled with appropriate confidentiality and access controls."
        showBack={true}
      />
      <div className="bg-background py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <div className="prose prose-slate prose-lg max-w-none text-muted-foreground">
            <p className="lead text-xl text-foreground font-medium mb-12">
              Patient information and diagnostic material are handled with appropriate confidentiality and access controls. Please submit only information necessary for case review and use the designated secure submission pathway for patient-identifiable documents.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Information Handling</h2>
            <p>
              We prioritize the responsible handling of patient and diagnostic information. All submitted clinical details and reports are treated as strictly confidential and are used solely for the purpose of specialist pathology review and related diagnostic recommendations.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Diagnostic Material</h2>
            <p>
              Physical materials such as tissue blocks and glass slides are handled with the utmost care during the review process. They are appropriately logged, reviewed, and returned through the designated referral pathway upon completion of the assessment.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Secure Submission</h2>
            <p>
              To maintain patient confidentiality, we require all patient-identifiable documents and sensitive medical records to be submitted only through our designated secure referral workflows. We strongly advise against sending unencrypted medical records via standard public email.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Access Controls</h2>
            <p>
              Access to patient cases and diagnostic materials is restricted to the reviewing specialists and necessary laboratory personnel involved directly in the case assessment and reporting process.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Responsible Information Sharing</h2>
            <p>
              Final structured pathology opinions are communicated directly to the referring physician, laboratory, or the patient as per the agreed communication process established during the case submission. We do not share patient data with unauthorized third parties.
            </p>
          </div>

          <div className="mt-20 rounded-2xl bg-surface border border-border p-8 text-center sm:p-12">
            <h3 className="font-display text-2xl font-bold text-foreground">
              Need to submit a pathology case?
            </h3>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/services/pathology-second-opinion-slide-review"
                className="w-full sm:w-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy px-8 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                Request a Second Opinion
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/services/pathology-second-opinion-slide-review"
                search={{ role: "doctor" }}
                className="w-full sm:w-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-navy/20 bg-transparent px-8 text-sm font-semibold text-navy transition-colors hover:bg-navy/5"
              >
                Refer a Case
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
