import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/ContactSection";
import { PageHeader } from "@/components/PageHeader";
import { FeaturedTestsBar } from "@/components/FeaturedTestsBar";

const title = "Contact | Second Opinion CRL â€” Pathology Laboratory in Pune";
const description =
  "Contact SECOND OPINION CRL, Clinical Reference Laboratory in Sadashiv Peth, Pune â€” call 9359777222 or email secondopinioncrl@gmail.com to discuss a pathology review.";

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
      <FeaturedTestsBar />
      <PageHeader
        eyebrow="Contact"
        title="Contact Second Opinion CRL"
        intro="For pathology second opinions, referrals and diagnostic consultation."
        showBack={true}
        backFallback="/"
      />
      <ContactSection />
    </>
  );
}

