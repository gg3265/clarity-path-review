import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/AboutSection";
import { CaseMaterials } from "@/components/CaseMaterials";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { ReferringSection } from "@/components/ReferringSection";
import { SecondOpinionSection } from "@/components/SecondOpinionSection";
import { ServiceGrid } from "@/components/ServiceGrid";
import { TrustStrip } from "@/components/TrustStrip";
import { WhyUs } from "@/components/WhyUs";

const title = "Second Opinion CRL | Clinical Reference Laboratory in Pune";
const description =
  "SECOND OPINION CRL is a Clinical Reference Laboratory in Pune offering clinical pathology, histopathology, oncopathology, cytopathology, immunohistochemistry, molecular testing and expert second-opinion pathology review.";

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
          "@type": "MedicalBusiness",
          name: "SECOND OPINION CRL",
          alternateName: "Second Opinion CRL — Clinical Reference Laboratory",
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
      <TrustStrip />
      <AboutSection />
      <ServiceGrid />
      <SecondOpinionSection />
      <CaseMaterials />
      <WhyUs />
      <ReferringSection />
      <ContactSection />
    </>
  );
}
