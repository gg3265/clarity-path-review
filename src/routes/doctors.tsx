// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ForDoctors } from "@/components/ForDoctors";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Activity, FlaskConical, Network, Users } from "lucide-react";

export const Route = createFileRoute("/doctors")({
  component: DoctorsPage,
});

function DoctorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="For Doctors & Referral Laboratories"
        title="Specialist Pathology Consultation"
        intro="Supporting clinicians and diagnostic laboratories with expert pathology interpretation for challenging cases."
        showBack={true}
        backFallback="/"
      />

      <ForDoctors />

      <section className="bg-background py-20 lg:py-28 border-t border-border">
        <div className="container-page max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
              Specialized Pathways
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide focused diagnostic support across a range of complex pathology scenarios.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-surface border border-border p-8 rounded-2xl flex flex-col items-start text-left">
              <div className="size-12 rounded-full bg-teal/10 flex items-center justify-center mb-6">
                <Activity className="size-6 text-teal" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Specialist Consultation</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Focused evaluation of histopathology and cytopathology cases requiring specialist input for definitive diagnosis.
              </p>
              <Link to="/services/pathology-second-opinion-slide-review" search={{ role: "doctor" }} className="mt-auto inline-flex items-center text-sm font-semibold text-teal hover:text-navy transition-colors">
                Refer a Case <ArrowRight className="ml-2 size-4" />
              </Link>
            </div>

            <div className="bg-surface border border-border p-8 rounded-2xl flex flex-col items-start text-left">
              <div className="size-12 rounded-full bg-teal/10 flex items-center justify-center mb-6">
                <FlaskConical className="size-6 text-teal" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">IHC Consultation</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Interpretation of complex immunohistochemistry panels to resolve difficult differential diagnoses and determine lineage.
              </p>
              <Link to="/services/pathology-second-opinion-slide-review" search={{ role: "doctor" }} className="mt-auto inline-flex items-center text-sm font-semibold text-teal hover:text-navy transition-colors">
                Refer a Case <ArrowRight className="ml-2 size-4" />
              </Link>
            </div>

            <div className="bg-surface border border-border p-8 rounded-2xl flex flex-col items-start text-left">
              <div className="size-12 rounded-full bg-teal/10 flex items-center justify-center mb-6">
                <Network className="size-6 text-teal" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Complex Case Review</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Comprehensive reassessment of challenging cases including rare tumours, discordant clinical-pathological findings, and uncertain primaries.
              </p>
              <Link to="/services/pathology-second-opinion-slide-review" search={{ role: "doctor" }} className="mt-auto inline-flex items-center text-sm font-semibold text-teal hover:text-navy transition-colors">
                Refer a Case <ArrowRight className="ml-2 size-4" />
              </Link>
            </div>

            <div className="bg-surface border border-border p-8 rounded-2xl flex flex-col items-start text-left">
              <div className="size-12 rounded-full bg-teal/10 flex items-center justify-center mb-6">
                <Users className="size-6 text-teal" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Tumour Board Support</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Providing definitive diagnostic input to support multidisciplinary team discussions and clinical management decisions where applicable.
              </p>
              <Link to="/services/pathology-second-opinion-slide-review" search={{ role: "doctor" }} className="mt-auto inline-flex items-center text-sm font-semibold text-teal hover:text-navy transition-colors">
                Refer a Case <ArrowRight className="ml-2 size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

