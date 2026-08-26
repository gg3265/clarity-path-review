const fs = require('fs');

const heroContent = \import { Link } from "@tanstack/react-router";
import { ArrowRight, Microscope } from "lucide-react";
import heroOptics from "@/assets/hero-optics.jpg";
import { LogoMark } from "@/components/Logo";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Subtle background elements */}
      <div aria-hidden="true" className="lab-grid absolute inset-0 opacity-[0.15]" />
      <div aria-hidden="true" className="absolute -top-40 -right-24 size-[40rem] rounded-full bg-teal/5 blur-3xl" />
      <div aria-hidden="true" className="absolute top-1/4 -left-24 size-[30rem] rounded-full bg-navy/5 blur-3xl" />

      <div className="relative container-page grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        
        {/* Left Column: Text Content */}
        <div className="animate-fade-in relative z-10 max-w-2xl">
          <div className="mb-6 flex flex-col gap-1.5">
            <h2 className="font-display text-[1.1rem] sm:text-xl font-extrabold tracking-[0.02em] text-navy">
              SECOND OPINION CRL
            </h2>
            <p className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-teal">
              Clinical Reference Laboratory
            </p>
          </div>
          
          <h1 className="mt-4 font-display text-[2.75rem] leading-[1.05] font-extrabold tracking-tight text-foreground sm:text-[3.5rem] lg:text-[4rem]">
            Specialist Pathology <br className="hidden sm:block" />
            <span className="text-navy">Second Opinions</span>
          </h1>
          
          <p className="mt-6 text-xl font-medium leading-relaxed text-teal sm:text-2xl">
            Clearer Diagnostic Decisions
          </p>
          
          <div className="mt-8 flex flex-wrap items-center gap-2 text-[0.8rem] sm:text-sm font-semibold tracking-wide text-muted-foreground">
            <span>Histopathology</span>
            <span className="text-teal/40">•</span>
            <span>Cytopathology</span>
            <span className="text-teal/40">•</span>
            <span>Oncopathology</span>
            <span className="text-teal/40">•</span>
            <span>IHC</span>
            <span className="text-teal/40">•</span>
            <span>Molecular & Ancillary Testing</span>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
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
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-border bg-surface px-8 text-sm font-semibold text-foreground transition-colors hover:border-teal/30 hover:bg-teal/5"
            >
              Refer a Case
            </Link>
          </div>
        </div>

        {/* Right Column: Premium Visual */}
        <div className="relative animate-scale-in">
          {/* Main Image Panel */}
          <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-navy shadow-lift">
            <img
              src={heroOptics}
              width={1000}
              height={1200}
              alt="High-resolution histology visual representing precision pathology"
              className="ambient-drift size-full object-cover opacity-90"
              fetchPriority="high"
            />
            {/* Subtle Gradient Overlay */}
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-tr from-navy/60 via-navy/10 to-transparent" />
            
            {/* Decorative Ring */}
            <div aria-hidden="true" className="ambient-spin absolute -bottom-24 -left-24 size-[30rem] rounded-full border border-white/10" />

            {/* Logo Badge */}
            <div className="absolute top-6 right-6 rounded-2xl bg-white/95 p-3 shadow-lg backdrop-blur-md">
              <LogoMark size={40} />
            </div>

            {/* Floating Diagnostic Card */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-auto sm:w-72 rounded-2xl border border-white/10 bg-white/10 p-5 shadow-xl backdrop-blur-md">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-white/20 text-white">
                  <Microscope className="size-5" />
                </div>
                <div className="text-sm font-bold tracking-widest text-white uppercase">
                  Specialist Review
                </div>
              </div>
              <p className="text-xs font-medium leading-relaxed text-white/80">
                Histopathology • IHC • Cytopathology
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
\;

fs.writeFileSync('src/components/Hero.tsx', heroContent, 'utf8');
console.log('Hero updated');
