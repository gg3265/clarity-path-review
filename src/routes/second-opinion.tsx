import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { SecondOpinionSection } from "@/components/SecondOpinionSection";
import { WhyUs } from "@/components/WhyUs";
import { WhatWeReview } from "@/components/WhatWeReview";
import { FAQ } from "@/components/FAQ";

const title = "Specialist Pathology Second Opinion | Second Opinion CRL";
const description = "Independent specialist review for diagnostically challenging pathology cases.";

export const Route = createFileRoute("/second-opinion")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
    ],
  }),
  component: SecondOpinion,
});

function SecondOpinion() {
  return (
    <>
      <PageHeader
        eyebrow="Specialist Pathology Review"
        title="Pathology Second Opinion"
        intro="Independent specialist review for diagnostically challenging cases. Histopathology • Cytopathology • IHC • Oncopathology • Ancillary Testing"
        watermark="EXPERT REVIEW"
        showBack={true}
        backFallback="/"
      />
      
      <WhyUs />
      
      <WhatWeReview />
      
      <SecondOpinionSection />
      
      <FAQ />
    </>
  );
}
