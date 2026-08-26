import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroOptics from "@/assets/hero-optics.jpg";
import { LogoMark } from "@/components/Logo";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div
        aria-hidden="true"
        className="lab-grid absolute inset-0 opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-24 size-[36rem] rounded-full bg-teal/5 blur-3xl"
      />

      <div className="relative container-page grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-28">
        <div className="animate-fade-in">
          <div className="mb-8">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              SECOND OPINION CRL
            </h2>
            <p className="mt-1 text-sm font-bold uppercase tracking-widest text-teal">
              Clinical Reference Laboratory
            </p>
          </div>
          
          <h1 className="mt-5 font-display text-[2.75rem] leading-[1.05] font-extrabold text-navy sm:text-[3.5rem] lg:text-[4rem]">
            Specialist Pathology Second Opinions
          </h1>
          <p className="mt-5 font-display text-[1.35rem] font-bold leading-snug text-teal sm:text-3xl">
            Precision in Diagnosis. Confidence in Care.
          </p>
          
          <p className="mt-6 text-sm font-semibold tracking-wide text-foreground">
            Histopathology &bull; Cytopathology &bull; Oncopathology &bull; IHC &bull; Molecular &amp; Ancillary Testing
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/services/pathology-second-opinion-slide-review"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy px-8 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-navy-soft"
            >
              Request Second Opinion
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              to="/services/pathology-second-opinion-slide-review"
              search={{ role: "doctor" }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-navy px-8 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              Refer a Case
            </Link>
          </div>
        </div>

        <div className="relative animate-scale-in">
          <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-border bg-navy shadow-lift">
            <img
              src={heroOptics}
              width={1280}
              height={1280}
              alt="Abstract scientific visual of microscope optics and histology patterns"
              className="ambient-drift size-full object-cover"
              fetchPriority="high"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-tr from-navy/70 via-transparent to-transparent"
            />
            <div
              aria-hidden="true"
              className="ambient-spin absolute -top-16 -left-16 size-72 rounded-full border border-white/10"
            />
            <div className="absolute top-5 right-5 rounded-full bg-white/90 p-1.5 shadow-soft backdrop-blur">
              <LogoMark size={46} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
