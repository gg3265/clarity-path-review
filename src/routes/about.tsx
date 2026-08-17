import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/AboutSection";
import { PageHeader } from "@/components/PageHeader";
import { ReferringSection } from "@/components/ReferringSection";
import { TrustStrip } from "@/components/TrustStrip";
import { WhyUs } from "@/components/WhyUs";

const title = "About | Second Opinion CRL — Clinical Reference Laboratory Pune";
const description =
  "Learn about SECOND OPINION CRL, a Clinical Reference Laboratory in Pune focused on histopathology, oncopathology, cytopathology and expert second-opinion pathology review.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Second Opinion CRL"
        title="A clinical reference laboratory focused on complex pathology."
        intro="SECOND OPINION CRL is a Clinical Reference Laboratory in Pune providing pathology services and specialist review for diagnostically challenging cases."
        watermark="CLARITY"
      />
      <AboutSection />
      <TrustStrip />
      <WhyUs />
      <section className="bg-surface">
        <div className="container-page py-16 md:py-20">
          <div className="rounded-2xl border border-dashed border-border bg-background p-8 md:p-12">
            <p className="eyebrow">Editable placeholder</p>
            <h2 className="mt-4 font-display text-2xl font-bold text-foreground">
              Laboratory team & credentials
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              This space is reserved for details of the pathologists, laboratory
              team, qualifications and any accreditation the laboratory chooses
              to publish. No information has been added here yet — it can be
              updated at any time.
            </p>
          </div>
        </div>
      </section>
      <ReferringSection />
    </>
  );
}
