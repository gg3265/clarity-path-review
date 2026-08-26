import { Link } from "@tanstack/react-router";
import { ArrowRight, FileCheck2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { secondOpinionStatement } from "@/lib/site";

export function SecondOpinionSection() {
  return (
    <section id="second-opinion" className="relative overflow-hidden bg-navy py-24 text-white lg:py-32">
      <div aria-hidden="true" className="lab-grid-dark absolute inset-0 opacity-[0.05]" />
      
      <div className="container-page relative z-10 text-center">
        <Reveal>
          <div className="mb-6 inline-flex size-16 items-center justify-center rounded-2xl bg-teal/10 text-teal backdrop-blur-sm">
            <FileCheck2 className="size-8" strokeWidth={1.5} />
          </div>
          
          <h2 className="mb-6 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Request an Independent Review
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-medium leading-relaxed text-white/80 sm:text-xl">
            {secondOpinionStatement}
          </p>
        </Reveal>

        <Reveal delay={100} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/services/pathology-second-opinion-slide-review"
            className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-teal px-10 text-sm font-bold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-teal-soft hover:shadow-md"
          >
            Request a Second Opinion
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <Link
            to="/services/pathology-second-opinion-slide-review"
            search={{ role: "doctor" }}
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-transparent px-10 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            Refer a Case
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
