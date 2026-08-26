import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { WhyUs } from "@/components/WhyUs";
import { CancerSection, WhenToSeekSection, DiagnosticApproachSection, SpecialistCTA } from "@/components/SpecialistContent";
import { QualityStandardsHome } from "@/components/QualityStandardsHome";
import { WhatWeReview } from "@/components/WhatWeReview";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ForDoctorsSection } from "@/components/ForDoctorsSection";
import { ExpertsHome } from "@/components/ExpertsHome";
import { OurCommitment } from "@/components/OurCommitment";
import { PackagesHomeSection } from "@/components/PackagesHomeSection";
import { PopularTests } from "@/components/PopularTests";
import { TestSearch } from "@/components/TestSearch";
import { ContactSection } from "@/components/ContactSection";

const title = "Second Opinion CRL | Pathology Second Opinion in Pune";
const description =
  "Second Opinion CRL is a Clinical Reference Laboratory in Pune providing specialist pathology second opinions, histopathology, cytopathology, oncopathology, IHC, molecular and ancillary testing.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "SECOND OPINION CRL",
          alternateName: "Second Opinion CRL – Clinical Reference Laboratory",
          description,
          telephone: "+919359777222",
          email: "secondopinioncrl@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "557, Vireen Heights, 3rd Floor, Laxmi Road, Sadashiv Peth",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            postalCode: "411030",
            addressCountry: "IN",
          },
          medicalSpecialty: "Pathology",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <CancerSection />
      <WhenToSeekSection />
      <DiagnosticApproachSection />
      <QualityStandardsHome />
      <WhatWeReview />
      <ProcessTimeline />
      <ForDoctorsSection />
      <ExpertsHome />
      <OurCommitment />
      <PackagesHomeSection />
      <PopularTests />
      <TestSearch />
      <ContactSection />
    </>
  );
}
