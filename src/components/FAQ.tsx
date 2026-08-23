import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is a pathology second opinion?",
    answer: "A pathology second opinion is an independent assessment of your pathology material and diagnostic reports by a specialist pathologist. It provides a fresh evaluation to ensure accuracy and clarity for your diagnosis.",
  },
  {
    question: "When should I seek one?",
    answer: "A second opinion may be considered for new cancer diagnoses, rare or unusual tumours, difficult or borderline diagnoses, discordant pathology and imaging, unexpected recurrences, or before major cancer treatment.",
  },
  {
    question: "Can I send slides from another laboratory?",
    answer: "Pathology material prepared by another laboratory may be considered for review, subject to assessment of the material available and the requirements of the case.",
  },
  {
    question: "Do you review paraffin blocks?",
    answer: "Yes, paraffin blocks can be reviewed and are often preferred as they allow for additional sectioning and ancillary testing if required.",
  },
  {
    question: "Can additional IHC be performed?",
    answer: "Additional IHC may be recommended when clinically appropriate and will depend on the diagnostic question and available material.",
  },
  {
    question: "Can you review cytology?",
    answer: "Yes, we review cytology specimens including FNAC smears, fluid cytology, and cell blocks.",
  },
  {
    question: "Can you review lymphoma and sarcoma cases?",
    answer: "Yes, our specialist pathology review covers complex oncopathology cases including lymphoma and sarcoma work-ups.",
  },
  {
    question: "Do I need the original pathology report?",
    answer: "Yes, the original pathology report, along with relevant clinical information and imaging findings, is essential for a comprehensive review.",
  },
  {
    question: "How long does review take?",
    answer: "Review timelines depend on the complexity of the case, the material available and whether additional assessment or testing is required. The expected process can be discussed when the case is submitted.",
  },
  {
    question: "How will I receive the report?",
    answer: "The final opinion is communicated through the agreed process for the case.",
  },
  {
    question: "Can my treating doctor discuss the case with the reviewing pathologist?",
    answer: "Yes, we encourage multidisciplinary communication. Your treating doctor can discuss the findings with our specialist pathologist.",
  },
  {
    question: "What happens if the second opinion differs from the original diagnosis?",
    answer: "A second opinion may confirm the original interpretation or provide a different assessment. Where the interpretations differ, the findings should be discussed in the context of the available clinical, radiological and pathological information, and further review or investigation may be recommended where appropriate.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-page max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Information regarding our specialist pathology review process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-border bg-background transition-colors hover:border-teal/30"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-inset"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-foreground pr-8">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "size-5 shrink-0 text-muted-foreground transition-transform duration-300",
                      isOpen && "rotate-180 text-teal"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
