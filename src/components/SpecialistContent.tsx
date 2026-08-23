import { Link } from "@tanstack/react-router";
import { ArrowRight, Hexagon, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const cancerSpecialties = [
  { name: "Breast Pathology", slug: "breast-pathology", desc: "Specialist review of breast lesions, carcinomas, and receptor status." },
  { name: "GI Pathology", slug: "gi-pathology", desc: "Diagnostic evaluation of gastrointestinal and hepatobiliary biopsies and resections." },
  { name: "Head & Neck Pathology", slug: "head-neck-pathology", desc: "Expert assessment of oral, pharyngeal, laryngeal and salivary gland lesions." },
  { name: "Gynaecological Pathology", slug: "gynaecological-pathology", desc: "Review of cervical, endometrial, ovarian and other gynaecological tract specimens." },
  { name: "Genitourinary Pathology", slug: "genitourinary-pathology", desc: "Specialized focus on kidney, bladder, prostate and testicular pathology." },
  { name: "Lung Pathology", slug: "lung-pathology", desc: "Detailed review of primary and metastatic pulmonary lesions." },
  { name: "Haematolymphoid Pathology", slug: "haematolymphoid-pathology", desc: "Expert assessment of lymph nodes, bone marrow, and haematolymphoid disorders." },
  { name: "Bone & Soft Tissue Tumours", slug: "bone-soft-tissue-tumours", desc: "Diagnostic review of complex mesenchymal, bone, and soft tissue lesions." },
  { name: "Skin Pathology", slug: "skin-pathology", desc: "Evaluation of melanocytic, lymphoid, and other cutaneous lesions." },
  { name: "Endocrine Pathology", slug: "endocrine-pathology", desc: "Review of thyroid, parathyroid, adrenal and neuroendocrine tumours." },
  { name: "CNS Pathology", slug: "cns-pathology", desc: "Specialist assessment of central nervous system and neuropathology cases." },
  { name: "Metastatic Malignancies", slug: "metastatic-malignancies", desc: "Investigation and review of metastatic tumours, including unknown primaries." },
];

export function CancerSection() {
  return (
    <section id="cancer-services" className="bg-surface py-20 lg:py-28 overflow-hidden">
      <div className="container-page">
        <Reveal className="max-w-3xl text-center mx-auto mb-16">
          <p className="eyebrow">Cancer Pathology Services</p>
          <h2 className="mt-5 font-display text-3xl leading-tight font-extrabold text-foreground sm:text-4xl lg:text-5xl">
            Specialist pathology review across major cancer and tumour types.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Select the pathology area relevant to your case and provide the available clinical and diagnostic information. Our team can review the submitted pathology material and relevant reports where appropriate.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {cancerSpecialties.map((specialty, i) => (
            <Reveal
              key={specialty.slug}
              delay={i * 30}
            >
              <Link
                to={`/cancer-pathology/${specialty.slug}`}
                className="group flex flex-col h-full items-start justify-between p-6 rounded-2xl border border-border bg-background shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 text-left"
              >
                <div>
                  <Hexagon className="size-6 text-primary/30 mb-4 group-hover:text-primary transition-colors" strokeWidth={1.5} />
                  <h3 className="font-semibold text-foreground text-base sm:text-lg leading-tight mb-2">
                    {specialty.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {specialty.desc}
                  </p>
                </div>
                
                <div className="mt-6 flex items-center text-xs font-bold text-primary group-hover:text-navy-soft transition-colors">
                  Request Review <ArrowRight className="ml-2 size-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const secondOpinionReasons = [
  "New cancer diagnosis",
  "Rare or unusual tumour",
  "Difficult or borderline diagnosis",
  "Discordant pathology and imaging",
  "Unexpected recurrence",
  "Difficult IHC interpretation",
  "Lymphoma or sarcoma work-up",
  "Metastatic tumour with uncertain primary",
  "Before major cancer treatment",
  "Before chemotherapy, radiotherapy or targeted therapy",
  "Discordant pathology reports",
  "Need for additional IHC or ancillary testing",
];

export function WhenToSeekSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container-page">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          <Reveal className="max-w-xl">
            <h2 className="font-display text-3xl leading-tight font-extrabold text-foreground sm:text-4xl">
              When should you seek a second opinion?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-6">
              An independent pathology review may be useful in selected complex or uncertain cases, providing additional clarity where clinically appropriate.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-surface rounded-3xl p-8 sm:p-10 border border-border">
              <h3 className="font-display font-bold text-xl mb-8">
                When a second opinion may help:
              </h3>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {secondOpinionReasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary/60 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-foreground font-medium">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const diagnosticSteps = [
  {
    num: "01",
    title: "Morphology first",
    desc: "Histomorphological assessment remains the foundation of diagnosis.",
  },
  {
    num: "02",
    title: "Context matters",
    desc: "Clinical, radiological and previous pathological information is considered where available.",
  },
  {
    num: "03",
    title: "IHC when indicated",
    desc: "Immunohistochemistry is used selectively to resolve specific diagnostic questions.",
  },
  {
    num: "04",
    title: "Ancillary testing when appropriate",
    desc: "Molecular and other ancillary investigations may be recommended for selected cases.",
  },
  {
    num: "05",
    title: "Structured conclusion",
    desc: "The final opinion clearly communicates the diagnosis, differential diagnosis and relevant recommendations.",
  },
];

export function DiagnosticApproachSection() {
  return (
    <section className="bg-navy text-white py-20 lg:py-28 overflow-hidden relative">
      <div aria-hidden="true" className="lab-grid-dark absolute inset-0 opacity-40" />
      <div className="relative container-page">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-crimson-soft mb-4">
            Methodology
          </p>
          <h2 className="font-display text-3xl leading-tight font-extrabold sm:text-4xl lg:text-5xl">
            Our Diagnostic Approach
          </h2>
        </Reveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-[2.25rem] left-0 right-0 h-px bg-white/10" />
          
          <div className="grid gap-12 lg:gap-6 lg:grid-cols-5 relative z-10">
            {diagnosticSteps.map((step, i) => (
              <Reveal key={step.num} delay={i * 100} className="relative flex flex-col lg:items-center lg:text-center group">
                <div className="hidden lg:flex w-full absolute top-[2.25rem] left-1/2 right-0 h-px bg-crimson/0 group-hover:bg-crimson/50 transition-colors" />
                
                {i !== diagnosticSteps.length - 1 && (
                  <div className="lg:hidden absolute left-[1.125rem] top-12 bottom-[-3rem] w-px bg-white/10" />
                )}

                <div className="relative flex items-center justify-center size-[4.5rem] rounded-full bg-navy border-2 border-white/20 text-white font-display font-bold text-xl mb-6 shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 group-hover:border-crimson group-hover:text-crimson transition-colors">
                  {step.num}
                </div>
                <div className="ml-16 lg:ml-0">
                  <h3 className="font-display font-bold text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SpecialistCTA() {
  return (
    <section className="bg-surface border-y border-border py-16">
      <div className="container-page flex flex-col lg:flex-row items-center justify-between gap-8 bg-background p-8 sm:p-12 rounded-3xl border border-border shadow-sm">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl mb-3">
            Need an independent pathology review?
          </h2>
          <p className="text-muted-foreground">
            Connect with our specialist team to review your diagnostic material.
          </p>
        </Reveal>
        <Reveal delay={100} className="flex flex-col sm:flex-row w-full lg:w-auto gap-4 shrink-0">
          <Link
            to="/services/pathology-second-opinion-slide-review"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
          >
            Request a Second Opinion
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            to="/services/pathology-second-opinion-slide-review"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-input bg-background px-8 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Refer a Case
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
