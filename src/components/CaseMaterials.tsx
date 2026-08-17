import { Box, ClipboardList, FileText, Microscope, Stethoscope, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { caseMaterials } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  slide: Microscope,
  block: Box,
  ihc: ClipboardList,
  report: FileText,
  clinical: Stethoscope,
};

export function CaseMaterials() {
  return (
    <section className="bg-surface">
      <div className="container-page py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Case Materials</p>
          <h2 className="mt-5 font-display text-3xl leading-tight font-extrabold text-foreground sm:text-4xl">
            What can be reviewed?
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {caseMaterials.map((material, i) => {
            const Icon = icons[material.icon] ?? FileText;
            return (
              <Reveal as="li" key={material.title} delay={i * 60}>
                <div className="group flex h-full flex-col gap-5 rounded-2xl border border-border bg-background p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-accent">
                    <Icon
                      className="size-5 text-crimson"
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="font-display text-base leading-snug font-bold text-foreground">
                    {material.title}
                  </h3>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={120}>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Case requirements may vary depending on the nature of the review.
            Contact the laboratory to understand what material is required for
            your case.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
