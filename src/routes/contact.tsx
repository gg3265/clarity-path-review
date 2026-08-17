import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/ContactSection";
import { PageHeader } from "@/components/PageHeader";

const title = "Contact | Second Opinion CRL — Pathology Laboratory in Pune";
const description =
  "Contact SECOND OPINION CRL, Clinical Reference Laboratory in Sadashiv Peth, Pune — call 9359777222 or email secondopinioncrl@gmail.com to discuss a pathology review.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Need a second opinion?"
        intro="Connect with SECOND OPINION CRL to discuss your pathology review requirements. Enquiries only — this is not an emergency medical service."
        showBack={true}
      />
      <ContactSection />
    </>
  );
}
