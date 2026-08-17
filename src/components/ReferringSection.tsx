import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function ReferringSection() {
  return (
    <section className="bg-surface">
      <div className="container-page py-20 md:py-24">
        <Reveal>
          <div className="grid gap-10 rounded-[1.75rem] border border-border bg-background p-8 shadow-soft md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-14">
            <div>
              <p className="eyebrow">For referring clinicians</p>
              <h2 className="mt-5 font-display text-2xl leading-tight font-extrabold text-foreground sm:text-3xl lg:text-4xl">
                A focused pathway for pathology review
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                When a case presents diagnostic complexity, SECOND OPINION CRL
                provides a focused pathway for pathology review and specialized
                laboratory support.
              </p>
            </div>
            <div className="md:justify-self-end">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03] hover:bg-navy-soft"
              >
                Discuss a Case
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
