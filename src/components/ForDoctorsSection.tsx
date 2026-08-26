import { Link } from "@tanstack/react-router";
import { ArrowRight, Stethoscope } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const doctorServices = [
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

export function ForDoctorsSection() {
  return (
    <section className="bg-navy py-24 text-white lg:py-32 relative overflow-hidden">
      <div aria-hidden="true" className="lab-grid-dark absolute inset-0 opacity-[0.05]" />
      
      <div className="container-page relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24 lg:items-center">
          
          {/* Left: Content & List */}
          <div>
            <Reveal>
              <div className="mb-6 inline-flex size-14 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur">
                <Stethoscope className="size-7" strokeWidth={1.5} />
              </div>
              <h2 className="mb-5 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                For Doctors & Referral Laboratories
              </h2>
              <p className="mb-12 text-lg text-white/70 sm:text-xl font-medium leading-relaxed">
                Specialist pathology consultation for challenging cases.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {doctorServices.map((service, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal" />
                    <span className="text-sm sm:text-base font-medium leading-snug text-white/90">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
            
            <Reveal delay={200} className="mt-14">
              <Link
                to="/services/pathology-second-opinion-slide-review"
                search={{ role: "doctor" }}
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-teal px-8 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-teal-soft hover:shadow-md"
              >
                Refer a Case
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          {/* Right: Premium Clinical Abstract Visual */}
          <Reveal delay={150} className="relative hidden lg:block h-full">
            <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm" />
            <div className="absolute inset-4 rounded-3xl border border-white/5 bg-navy/50 p-8 flex flex-col justify-between">
              <div className="flex gap-4 opacity-30">
                <div className="h-1 flex-1 rounded bg-teal" />
                <div className="h-1 w-12 rounded bg-white" />
                <div className="h-1 w-8 rounded bg-white" />
              </div>
              
              <div className="my-auto space-y-6">
                <div className="h-2 w-3/4 rounded bg-white/10" />
                <div className="h-2 w-full rounded bg-white/10" />
                <div className="h-2 w-5/6 rounded bg-white/10" />
                <div className="h-2 w-1/2 rounded bg-white/10" />
              </div>
              
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <div className="text-xs font-bold tracking-widest text-teal uppercase">B2B Consultation</div>
                <div className="flex gap-2">
                  <div className="size-2 rounded-full bg-white/20" />
                  <div className="size-2 rounded-full bg-teal" />
                </div>
              </div>
            </div>
          </Reveal>
          
        </div>
      </div>
    </section>
  );
}
