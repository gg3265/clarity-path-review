import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ForDoctorsSection } from "@/components/ForDoctorsSection";
import { ArrowRight, Activity, FlaskConical, Network, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const title = "For Doctors | Second Opinion CRL";
const description = "Supporting clinicians and diagnostic laboratories with expert pathology interpretation for challenging cases.";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
    ],
  }),
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

      <ForDoctorsSection />

      <section className="bg-surface py-24 lg:py-32">
        <div className="container-page max-w-5xl">
          <Reveal className="mb-16 text-center">
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
              Specialized Pathways
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-muted-foreground">
              We provide focused diagnostic support across a range of complex pathology scenarios.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            <Reveal delay={0} className="h-full">
              <div className="group flex h-full flex-col rounded-[2rem] border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-md lg:p-10">
                <div className="mb-8 flex size-14 items-center justify-center rounded-2xl bg-teal/10 transition-colors group-hover:bg-teal">
                  <Activity className="size-6 text-teal transition-colors group-hover:text-white" strokeWidth={1.5} />
                </div>
                <h3 className="mb-4 font-display text-xl font-bold text-navy">Specialist Consultation</h3>
                <p className="mb-10 font-medium leading-relaxed text-muted-foreground">
                  Focused evaluation of histopathology and cytopathology cases requiring specialist input for definitive diagnosis.
                </p>
                <Link to="/services/pathology-second-opinion-slide-review" search={{ role: "doctor" }} className="mt-auto inline-flex items-center text-sm font-bold uppercase tracking-widest text-teal transition-colors hover:text-navy">
                  Refer a Case <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={50} className="h-full">
              <div className="group flex h-full flex-col rounded-[2rem] border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-md lg:p-10">
                <div className="mb-8 flex size-14 items-center justify-center rounded-2xl bg-teal/10 transition-colors group-hover:bg-teal">
                  <FlaskConical className="size-6 text-teal transition-colors group-hover:text-white" strokeWidth={1.5} />
                </div>
                <h3 className="mb-4 font-display text-xl font-bold text-navy">IHC Consultation</h3>
                <p className="mb-10 font-medium leading-relaxed text-muted-foreground">
                  Interpretation of complex immunohistochemistry panels to resolve difficult differential diagnoses and determine lineage.
                </p>
                <Link to="/services/pathology-second-opinion-slide-review" search={{ role: "doctor" }} className="mt-auto inline-flex items-center text-sm font-bold uppercase tracking-widest text-teal transition-colors hover:text-navy">
                  Refer a Case <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={100} className="h-full">
              <div className="group flex h-full flex-col rounded-[2rem] border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-md lg:p-10">
                <div className="mb-8 flex size-14 items-center justify-center rounded-2xl bg-teal/10 transition-colors group-hover:bg-teal">
                  <Network className="size-6 text-teal transition-colors group-hover:text-white" strokeWidth={1.5} />
                </div>
                <h3 className="mb-4 font-display text-xl font-bold text-navy">Complex Case Review</h3>
                <p className="mb-10 font-medium leading-relaxed text-muted-foreground">
                  Comprehensive reassessment of challenging cases including rare tumours, discordant clinical-pathological findings, and uncertain primaries.
                </p>
                <Link to="/services/pathology-second-opinion-slide-review" search={{ role: "doctor" }} className="mt-auto inline-flex items-center text-sm font-bold uppercase tracking-widest text-teal transition-colors hover:text-navy">
                  Refer a Case <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={150} className="h-full">
              <div className="group flex h-full flex-col rounded-[2rem] border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-md lg:p-10">
                <div className="mb-8 flex size-14 items-center justify-center rounded-2xl bg-teal/10 transition-colors group-hover:bg-teal">
                  <Users className="size-6 text-teal transition-colors group-hover:text-white" strokeWidth={1.5} />
                </div>
                <h3 className="mb-4 font-display text-xl font-bold text-navy">Tumour Board Support</h3>
                <p className="mb-10 font-medium leading-relaxed text-muted-foreground">
                  Providing definitive diagnostic input to support multidisciplinary team discussions and clinical management decisions where applicable.
                </p>
                <Link to="/services/pathology-second-opinion-slide-review" search={{ role: "doctor" }} className="mt-auto inline-flex items-center text-sm font-bold uppercase tracking-widest text-teal transition-colors hover:text-navy">
                  Refer a Case <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
