import { Reveal } from "@/components/Reveal";

export function OurCommitment() {
  return (
    <section className="bg-navy py-20 text-center relative overflow-hidden">
      <div aria-hidden="true" className="absolute -top-24 -left-24 size-[30rem] rounded-full bg-teal/10 blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -bottom-24 -right-24 size-[30rem] rounded-full bg-teal/10 blur-3xl pointer-events-none" />
      
      <div className="container-page max-w-4xl relative z-10">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
            Our Commitment
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 text-[0.65rem] sm:text-sm font-bold tracking-widest text-teal uppercase">
            <span>Experience</span>
            <span className="text-white/30">•</span>
            <span>Expertise</span>
            <span className="text-white/30">•</span>
            <span>Collaboration</span>
            <span className="text-white/30">•</span>
            <span>Diagnostic Clarity</span>
          </div>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto font-medium">
            "Our team brings together expertise from pathology and microbiology to provide a comprehensive laboratory and diagnostic consultation service."
          </p>
        </Reveal>
      </div>
    </section>
  );
}
