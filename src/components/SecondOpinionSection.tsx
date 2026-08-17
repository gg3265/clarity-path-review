import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Reveal } from "@/components/Reveal";
import { secondOpinionStatement } from "@/lib/site";

export function SecondOpinionSection() {
  return (
    <section className="relative overflow-hidden bg-navy text-primary-foreground">
      <div aria-hidden="true" className="lab-grid-dark absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-32 size-[34rem] rounded-full bg-crimson/10 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-6 hidden font-display text-8xl font-extrabold text-white/[0.035] lg:block"
      >
        EXPERT REVIEW
      </span>

      <div className="relative container-page py-20 md:py-28">
        <Reveal className="max-w-3xl">
          <p className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-crimson-soft">
            Second Opinion & Slide Review
          </p>
          <h2 className="mt-5 font-display text-3xl leading-[1.1] font-extrabold sm:text-4xl lg:text-5xl">
            A second look can bring greater clarity.
          </h2>
        </Reveal>

        <Reveal delay={90} className="mt-10 max-w-3xl">
          <blockquote className="border-l-2 border-crimson-soft pl-6 font-display text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
            “{secondOpinionStatement}”
          </blockquote>
        </Reveal>

        <div className="mt-16 border-t border-white/10 pt-14">
          <ProcessTimeline />
        </div>

        <Reveal delay={120} className="mt-14">
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-background px-7 text-sm font-semibold text-foreground transition-transform duration-200 hover:scale-[1.03]"
          >
            Request a Second Opinion
            <ArrowRight className="size-4 text-crimson" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
