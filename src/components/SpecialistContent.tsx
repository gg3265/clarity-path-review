import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import aboutSlide from "@/assets/about-slide.jpg";

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
    <section id="cancer-services" className="overflow-hidden bg-white py-24 lg:py-32">
      <div className="container-page">
        <div className="mb-16 grid items-end gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Cancer Pathology Services</p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy lg:text-5xl">
              Cancer & Oncopathology
            </h2>
            <p className="mt-6 text-xl font-medium leading-relaxed text-muted-foreground sm:text-2xl">
              Specialist pathology review for complex and cancer-related cases
            </p>
          </Reveal>
          
          <Reveal delay={100} className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl lg:aspect-[16/7]">
            <img 
              src={aboutSlide}
              alt="High-resolution digital pathology visual"
              className="size-full object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-navy/10 mix-blend-multiply" />
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6">
          {cancerSpecialties.map((specialty, i) => (
            <Reveal
              key={specialty.slug}
              delay={i * 30}
            >
              <Link
                to={`/cancer-pathology/${specialty.slug}`}
                className="group flex h-full flex-col items-start justify-between rounded-2xl border border-border bg-surface p-7 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:bg-white hover:shadow-md"
              >
                <div>
                  <h3 className="mb-2 font-display text-lg font-bold leading-tight text-navy">
                    {specialty.name}
                  </h3>
                  <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {specialty.desc}
                  </p>
                </div>
                
                <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-wide text-teal transition-colors group-hover:text-teal-soft">
                  Request Review <ArrowRight className="ml-2 size-3.5 transition-transform group-hover:translate-x-1" />
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
    <section className="bg-surface py-24 lg:py-32">
      <div className="container-page">
        <Reveal className="mb-14 max-w-3xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            When a second opinion may help
          </h2>
          <p className="mt-6 border-l-2 border-teal/30 pl-6 text-lg leading-relaxed text-muted-foreground">
            An independent pathology review may be useful in selected complex or uncertain cases, providing additional clarity where clinically appropriate.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {secondOpinionReasons.map((reason) => (
              <div key={reason} className="flex items-start gap-4 rounded-xl border border-border bg-white p-5 shadow-sm">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal/70" />
                <span className="text-sm font-semibold leading-snug text-navy sm:text-base">{reason}</span>
              </div>
            ))}
          </div>
        </Reveal>
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
    <section className="relative overflow-hidden bg-navy py-24 text-white lg:py-32">
      <div aria-hidden="true" className="lab-grid-dark absolute inset-0 opacity-[0.07]" />
      <div className="container-page relative">
        <Reveal className="mb-20 max-w-3xl text-center md:mx-auto">
          <p className="eyebrow !text-teal-soft mb-5">Methodology</p>
          <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Our Diagnostic Approach
          </h2>
        </Reveal>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="absolute top-[2.25rem] left-0 right-0 hidden h-px bg-white/10 lg:block" />
          
          <div className="relative z-10 grid gap-12 lg:grid-cols-5 lg:gap-6">
            {diagnosticSteps.map((step, i) => (
              <Reveal key={step.num} delay={i * 100} className="group relative flex flex-col lg:items-center lg:text-center">
                {/* Horizontal Progress Line for Hover */}
                <div className="absolute top-[2.25rem] left-1/2 right-0 hidden h-px w-full bg-transparent transition-colors group-hover:bg-teal lg:flex" />
                
                {/* Vertical Line for Mobile */}
                {i !== diagnosticSteps.length - 1 && (
                  <div className="absolute top-12 bottom-[-3rem] left-[1.125rem] w-px bg-white/10 lg:hidden" />
                )}

                <div className="relative z-10 mb-6 flex size-[4.5rem] items-center justify-center rounded-full border-2 border-white/20 bg-navy font-display text-xl font-bold text-white shadow-xl transition-colors group-hover:border-teal group-hover:bg-teal">
                  {step.num}
                </div>
                <div className="ml-16 lg:ml-0">
                  <h3 className="mb-3 font-display text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
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
    <section className="border-y border-border bg-white py-20">
      <div className="container-page">
        <div className="flex flex-col items-center justify-between gap-10 rounded-[2rem] border border-border bg-surface p-10 shadow-sm lg:flex-row lg:p-14">
          <Reveal className="max-w-xl text-center lg:text-left">
            <h2 className="mb-4 font-display text-3xl font-extrabold text-navy sm:text-4xl">
              Need an independent pathology review?
            </h2>
            <p className="text-lg text-muted-foreground">
              Connect with our specialist team to review your diagnostic material.
            </p>
          </Reveal>
          
          <Reveal delay={100} className="flex w-full shrink-0 flex-col gap-4 sm:flex-row sm:justify-center lg:w-auto">
            <Link
              to="/services/pathology-second-opinion-slide-review"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-navy px-8 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-navy-soft hover:shadow-md"
            >
              Request a Second Opinion
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              to="/services/pathology-second-opinion-slide-review"
              search={{ role: "doctor" }}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-border bg-white px-8 text-sm font-semibold text-navy transition-colors hover:border-teal/30 hover:bg-teal/5"
            >
              Refer a Case
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
