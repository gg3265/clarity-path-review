import { Reveal } from "@/components/Reveal";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Microscope, FlaskConical, CircleDot, Droplet, Dna } from "lucide-react";

const categories = [
  {
    id: "histopathology",
    title: "Histopathology",
    icon: <Microscope className="size-5 text-crimson mb-3" />,
    items: [
      "H&E slides",
      "Special stains",
      "Paraffin blocks",
      "Previous pathology reports",
    ],
  },
  {
    id: "ihc",
    title: "IHC",
    icon: <FlaskConical className="size-5 text-crimson mb-3" />,
    items: [
      "IHC slides",
      "IHC reports",
      "Unstained slides",
      "Tissue blocks for additional IHC, where appropriate",
    ],
  },
  {
    id: "cytology",
    title: "Cytology",
    icon: <CircleDot className="size-5 text-crimson mb-3" />,
    items: [
      "FNAC smears",
      "Cytology slides",
      "Cell blocks",
      "Fluid cytology",
    ],
  },
  {
    id: "haematopathology",
    title: "Haematopathology",
    icon: <Droplet className="size-5 text-crimson mb-3" />,
    items: [
      "Peripheral blood smears",
      "Bone marrow slides",
      "Lymph-node material",
      "IHC/flow-cytometry reports",
    ],
  },
  {
    id: "ancillary",
    title: "Ancillary Investigations",
    icon: <Dna className="size-5 text-crimson mb-3" />,
    items: [
      "FISH",
      "PCR",
      "Molecular reports",
      "NGS reports",
    ],
  },
];

export function WhatWeReview() {
  return (
    <section className="bg-surface py-20 lg:py-28 overflow-hidden">
      <div className="container-page">
        <Reveal className="max-w-3xl mb-16">
          <h2 className="font-display text-3xl leading-tight font-extrabold text-foreground sm:text-4xl lg:text-5xl">
            What can we review?
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Pathology material and diagnostic information can be reviewed according to the requirements of the case and the material available.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mb-20">
          {categories.map((category, i) => (
            <Reveal
              key={category.id}
              delay={i * 50}
              className="rounded-2xl border border-border bg-background p-8 shadow-sm flex flex-col"
            >
              <div>
                {category.icon}
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-3 mt-auto">
                {category.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson/40" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="rounded-2xl bg-navy p-8 md:p-12 lg:p-16 text-center text-primary-foreground relative overflow-hidden">
          <div aria-hidden="true" className="lab-grid-dark absolute inset-0 opacity-40" />
          <div className="relative z-10">
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4">
              Have a challenging pathology case?
            </h3>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/services/pathology-second-opinion-slide-review"
                className="w-full sm:w-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-background px-8 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03]"
              >
                Request a Second Opinion
                <ArrowRight className="size-4 text-crimson" />
              </Link>
              <Link
                to="/services/pathology-second-opinion-slide-review"
                className="w-full sm:w-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-8 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Refer a Case
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
