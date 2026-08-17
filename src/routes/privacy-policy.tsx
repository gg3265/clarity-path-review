import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

const title = "Privacy Policy | Second Opinion CRL, Pune";
const description =
  "How SECOND OPINION CRL, Clinical Reference Laboratory in Pune, handles enquiry information and diagnostic material shared through this website.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: Privacy,
});

const sections = [
  {
    heading: "Information we collect",
    body: "When you use the enquiry form or contact us directly, we may receive your name, mobile number, email address, case reference details, referring doctor or hospital details and the description of your enquiry.",
  },
  {
    heading: "How information is used",
    body: "Information shared with us is used only to respond to your enquiry and to coordinate the pathology review or laboratory service you have asked about.",
  },
  {
    heading: "Diagnostic material",
    body: "Slides, blocks, reports and related clinical information submitted for review are handled as confidential diagnostic material and are used only for the purpose of the requested review.",
  },
  {
    heading: "Documents shared by email",
    body: "The website enquiry form does not upload files. Any documents you choose to share are sent from your own email application. Please share only the information necessary for your enquiry.",
  },
  {
    heading: "Retention and disclosure",
    body: "Enquiry information is retained only as long as required for the purpose it was shared and is not sold or shared for marketing purposes.",
  },
  {
    heading: "Not medical advice",
    body: "This website provides information about laboratory services and enables enquiries. It does not provide personalised medical diagnosis or treatment advice and is not an emergency service.",
  },
];

function Privacy() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        intro="This policy explains how information shared with SECOND OPINION CRL through this website is handled."
      />
      <section className="bg-background">
        <div className="container-page max-w-3xl py-16 md:py-24">
          <div className="space-y-10">
            {sections.map((section) => (
              <article key={section.heading}>
                <h2 className="font-display text-xl font-bold text-foreground">
                  {section.heading}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {section.body}
                </p>
              </article>
            ))}
            <article>
              <h2 className="font-display text-xl font-bold text-foreground">
                Contact
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                For any privacy-related question, contact us at{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-crimson underline underline-offset-4"
                >
                  {site.email}
                </a>{" "}
                or {site.phone}. {site.address}.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
