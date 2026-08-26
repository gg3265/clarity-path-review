import { Reveal } from "@/components/Reveal";
import { User2 } from "lucide-react";

const experts = [
  {
    name: "Dr. Vandana Gite",
    title: "MD Pathology | Senior Pathologist",
    experience: "20+ years of experience",
    initials: "VG"
  },
  {
    name: "Dr. Maruti Dhakane",
    title: "Senior Pathologist",
    experience: "23+ years of experience",
    initials: "MD"
  },
  {
    name: "Mr. Vishal Shukla",
    title: "MSc Microbiology | Senior Microbiologist",
    experience: "10+ years of experience in Microbiology",
    initials: "VS"
  }
];

export function ExpertsHome() {
  return (
    <section className="bg-surface py-24 lg:py-32 border-b border-border">
      <div className="container-page max-w-6xl">
        <Reveal className="mb-16 text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Leadership & Expertise</p>
          <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Our Experts
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            At Second Opinion CRL – Clinical Reference Laboratory, our diagnostic services are supported by experienced professionals with extensive expertise across pathology and microbiology.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experts.map((expert, i) => (
            <Reveal key={expert.name} delay={i * 100}>
              <div className="group flex h-full flex-col rounded-3xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-md">
                <div className="mb-6 flex size-20 items-center justify-center rounded-2xl bg-navy/5 text-navy group-hover:bg-teal/10 group-hover:text-teal transition-colors">
                  <User2 className="size-8" strokeWidth={1.5} />
                </div>
                
                <h3 className="mb-2 font-display text-xl font-bold text-navy">
                  {expert.name}
                </h3>
                <div className="mb-4 h-px w-12 bg-teal/30" />
                
                <p className="mb-1 text-sm font-semibold text-foreground">
                  {expert.title}
                </p>
                <p className="text-sm font-medium text-muted-foreground">
                  {expert.experience}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
