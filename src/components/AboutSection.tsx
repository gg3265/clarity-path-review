import aboutSlide from "@/assets/about-slide.jpg";
import { Reveal } from "@/components/Reveal";

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="container-page grid gap-14 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">Our Approach</p>
            <h2 className="mt-5 max-w-xl font-display text-3xl leading-[1.1] font-extrabold text-foreground sm:text-4xl lg:text-5xl">
              Pathology with a second layer of expertise.
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <div className="mt-7 max-w-xl space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                SECOND OPINION CRL — Clinical Reference Laboratory brings
                together clinical pathology, histopathology, oncopathology,
                cytopathology and specialized diagnostic services with a strong
                focus on expert review of complex cases.
              </p>
              <p>
                When a pathology diagnosis is challenging, an additional expert
                review can help bring greater clarity to the interpretation of
                slides, blocks, immunohistochemistry findings and diagnostic
                reports.
              </p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-9 inline-flex items-center gap-3 rounded-full border border-border bg-background px-5 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-foreground">
              Precision <span className="text-teal">•</span> Expertise{" "}
              <span className="text-teal">•</span> Clarity
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="relative">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-14 -right-2 hidden font-display text-7xl font-extrabold tracking-tight text-foreground/[0.04] lg:block"
          >
            PATHOLOGY
          </span>
          <div className="relative overflow-hidden rounded-[1.5rem] border border-border shadow-soft">
            <img
              src={aboutSlide}
              width={1024}
              height={1280}
              loading="lazy"
              alt="Glass pathology microscope slide with a faintly stained tissue section"
              className="aspect-4/5 size-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

