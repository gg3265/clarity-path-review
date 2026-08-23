import { createFileRoute } from "@tanstack/react-router";
import { WhatWeReview } from "@/components/WhatWeReview";
import { PageHeader } from "@/components/PageHeader";
import { ForDoctors } from "@/components/ForDoctors";
import { SecondOpinionSection } from "@/components/SecondOpinionSection";
import { WhyUs } from "@/components/WhyUs";

const title =
  "Second Opinion & Slide Review Pathology in Pune | Second Opinion CRL";
const description =
  "Expert second-opinion pathology and slide review in Pune — outside slides, tissue blocks, IHC findings and diagnostic reports reviewed by SECOND OPINION CRL.";

export const Route = createFileRoute("/second-opinion")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/second-opinion" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/second-opinion" }],
  }),
  component: SecondOpinion,
});

function SecondOpinion() {
  return (
    <>
      <PageHeader
        eyebrow="Second Opinion & Slide Review"
        title="Pathology Second Opinion"
        intro="Independent specialist review for diagnostically challenging cases. Histopathology • Cytopathology • IHC • Oncopathology • Ancillary Testing"
        watermark="EXPERT REVIEW"
        showBack={true}
        backFallback="/#second-opinion"
      />
      <SecondOpinionSection />
      <WhatWeReview />
      <WhyUs />
      <ForDoctors />
    </>
  );
}
