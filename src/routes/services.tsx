import { createFileRoute } from "@tanstack/react-router";
import { CaseMaterials } from "@/components/CaseMaterials";
import { PageHeader } from "@/components/PageHeader";
import { ReferringSection } from "@/components/ReferringSection";
import { ServiceGrid } from "@/components/ServiceGrid";

const title =
  "Services | Histopathology, Oncopathology & IHC in Pune â€” Second Opinion CRL";
const description =
  "Pathology services at SECOND OPINION CRL Pune: histopathology, oncopathology, cytopathology, immunohistochemistry, clinical pathology, haematology and molecular testing.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Our Services"
        intro="Specialist pathology review, diagnostic services and ancillary testing."
        watermark="PATHOLOGY"
        showBack={true}
      />
      <ServiceGrid showHeading={false} />
      <CaseMaterials />
      <ReferringSection />
    </>
  );
}


