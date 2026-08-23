import { Reveal } from "@/components/Reveal";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const supportItems = [
  "Histopathology second opinion",
  "Cytopathology consultation",
  "IHC interpretation",
  "Difficult differential diagnosis",
  "Cancer grading and staging assessment",
  "Lymphoma work-up",
  "Sarcoma work-up",
  "Metastatic carcinoma work-up",
  "Biomarker interpretation",
  "Ancillary testing recommendations",
  "Pre-treatment pathology review",
  "Multidisciplinary consultation, where applicable",
];

export function ForDoctors() {
  return (
    <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
      <div aria-hidden="true" className="lab-grid-dark absolute inset-0 opacity-60" />
      <div className="container-page relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="font-display text-3xl leading-tight font-extrabold text-primary-foreground sm:text-4xl">
              For Doctors & Referral Laboratories
            </h2>
            <p className="mt-4 text-xl font-medium text-teal-soft">
              Specialist pathology consultation for challenging cases
            </p>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              We support clinicians and diagnostic laboratories with expert pathology interpretation.
            </p>
            <div className="mt-10">
              <Link
                to="/services/pathology-second-opinion-slide-review"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-background px-8 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03]"
              >
                Refer a Case
                <ArrowRight className="size-4 text-teal" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-6 lg:col-start-7">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-sm">
              <ul className="grid gap-5 sm:grid-cols-2">
                {supportItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-primary-foreground/90">
                    <CheckCircle2 className="size-5 text-teal-soft shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
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

