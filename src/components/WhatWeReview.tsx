import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const reviewCategories = [
  {
    id: "histopathology",
    name: "Histopathology",
    items: [
      "H&E slides",
      "Special stains",
      "Paraffin blocks",
      "Previous pathology reports",
    ],
  },
  {
    id: "ihc",
    name: "IHC",
    items: [
      "IHC slides",
      "IHC reports",
      "Unstained slides",
      "Tissue blocks for additional IHC, where appropriate",
    ],
  },
  {
    id: "cytology",
    name: "Cytology",
    items: [
      "FNAC smears",
      "Cytology slides",
      "Cell blocks",
      "Fluid cytology",
    ],
  },
  {
    id: "haematopathology",
    name: "Haematopathology",
    items: [
      "Peripheral blood smears",
      "Bone marrow slides",
      "Lymph-node material",
      "IHC/flow-cytometry reports",
    ],
  },
  {
    id: "ancillary",
    name: "Ancillary Investigations",
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
    <section className="bg-background py-24 lg:py-32">
      <div className="container-page max-w-5xl">
        <Reveal className="mb-14 text-center">
          <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
            What can we review?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our specialists review a wide range of diagnostic materials across multiple pathology disciplines.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <Tabs defaultValue="histopathology" className="w-full">
            <div className="flex justify-center overflow-x-auto pb-4 hide-scrollbar">
              <TabsList className="inline-flex h-auto w-max items-center justify-center gap-2 rounded-2xl bg-surface p-2 shadow-sm">
                {reviewCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="rounded-xl px-5 py-3 text-sm font-semibold text-muted-foreground transition-all data-[state=active]:bg-navy data-[state=active]:text-white data-[state=active]:shadow-md sm:text-base"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <div className="mt-8 rounded-[2rem] border border-border bg-surface p-8 shadow-sm sm:p-12 lg:p-16">
              {reviewCategories.map((category) => (
                <TabsContent
                  key={category.id}
                  value={category.id}
                  className="mt-0 outline-none animate-fade-in"
                >
                  <h3 className="mb-8 font-display text-2xl font-bold text-navy sm:text-3xl">
                    {category.name} Material
                  </h3>
                  
                  <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                    {category.items.map((item) => (
                      <div key={item} className="flex items-start gap-4 rounded-xl border border-border bg-white p-5 shadow-sm transition-colors hover:border-teal/30">
                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal" />
                        <span className="text-base font-medium text-navy">{item}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
