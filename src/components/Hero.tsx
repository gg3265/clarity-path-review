import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroOptics from "@/assets/hero-optics.jpg";
import { LogoMark } from "@/components/Logo";

const specialistFocus = [
  "Histopathology",
  "Cytopathology",
  "Oncopathology",
  "IHC",
  "Molecular & Ancillary Testing",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div
        aria-hidden="true"
        className="lab-grid absolute inset-0 opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-24 size-[36rem] rounded-full bg-crimson/5 blur-3xl"
      />

      <div className="relative container-page grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-28">
        <div className="animate-fade-in">
          <p className="eyebrow">Clinical Reference Laboratory</p>
          <h1 className="mt-5 font-display text-[2.5rem] leading-[1.05] font-extrabold text-foreground sm:text-6xl lg:text-[4.25rem]">
            SECOND OPINION CRL
          </h1>
          <p className="mt-6 max-w-xl text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
            Specialist Pathology Second Opinions.<br />
            <span className="text-muted-foreground">Clearer Diagnostic Decisions.</span>
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/services/second-opinion-slide-review"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03] hover:bg-navy-soft"
            >
              Request a Second Opinion
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              to="/services/second-opinion-slide-review"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-input bg-background px-7 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
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

          <div className="mt-[-2.5rem] ml-2 w-[min(20rem,88%)] rounded-2xl border border-border bg-background/90 p-5 shadow-lift backdrop-blur-xl sm:ml-6">
            <p className="eyebrow">Specialist Focus</p>
            <ul className="mt-3 space-y-2">
              {specialistFocus.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm font-medium text-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-crimson"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
