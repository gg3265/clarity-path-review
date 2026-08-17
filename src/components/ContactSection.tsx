import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { ContactAction } from "@/components/ContactAction";
import { mapsDirectionsUrl, mapsEmbedUrl, site } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="bg-background">
      <div className="container-page grid gap-14 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-5 font-display text-3xl leading-[1.1] font-extrabold text-foreground sm:text-4xl lg:text-[2.75rem]">
              Need a second opinion?
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Connect with SECOND OPINION CRL to discuss your pathology review
              requirements.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <ul className="mt-10 space-y-6">
              <li className="flex gap-4">
                <Mail className="mt-0.5 size-5 shrink-0 text-crimson" aria-hidden="true" />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-base font-medium text-foreground hover:text-crimson"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-crimson" aria-hidden="true" />
                <address className="text-base leading-relaxed text-muted-foreground not-italic">
                  {site.address}
                </address>
              </li>
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ContactAction context="second-opinion" type="whatsapp" variant="solid" className="w-full sm:w-auto" />
              <ContactAction context="second-opinion" type="call" variant="outline" className="w-full sm:w-auto" />
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="rounded-[1.5rem] border border-border bg-surface p-6 shadow-soft sm:p-9">
            <h3 className="font-display text-xl font-bold text-foreground">
              Request a Second Opinion
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Share your details and we will get in touch about the review
              process. This form is for enquiries only.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-border bg-surface">
        <div className="container-page grid gap-10 py-16 md:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Location</p>
            <h2 className="mt-5 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
              Visit SECOND OPINION CRL
            </h2>
            <address className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground not-italic">
              {site.address}
            </address>
            <a
              href={mapsDirectionsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full border border-input bg-background px-7 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Get Directions
            </a>
          </Reveal>
          <Reveal delay={90}>
            <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title={`Map showing ${site.name} in Pune`}
                src={mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0 sm:h-72"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
