import { Mail, MapPin, ArrowRight, UserCircle2, Stethoscope, Beaker, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { ContactAction } from "@/components/ContactAction";
import { mapsDirectionsUrl, mapsEmbedUrl, site } from "@/lib/site";
import { Link } from "@tanstack/react-router";

export function ContactSection() {
  return (
    <section id="contact" className="bg-background py-24 lg:py-32">
      <div className="container-page max-w-6xl">
        
        {/* Contact Info Header */}
        <Reveal className="mb-20 text-center">
          <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            <li className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-teal/10">
                <MapPin className="size-4 text-teal" />
              </div>
              <span className="font-semibold text-navy">Pune</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-teal/10">
                <Mail className="size-4 text-teal" />
              </div>
              <a href={`mailto:${site.email}`} className="font-semibold text-navy transition-colors hover:text-teal">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <ContactAction context="general" type="call" variant="outline" className="h-12 rounded-full px-6 font-semibold" />
            </li>
            <li className="flex items-center gap-3">
              <ContactAction context="general" type="whatsapp" variant="solid" className="h-12 rounded-full px-6 font-semibold" />
            </li>
          </ul>
        </Reveal>

        {/* Action Pathways */}
        <div className="mb-24 grid gap-6 sm:grid-cols-3">
          <Reveal delay={0} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-[2rem] border border-border bg-surface p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-md lg:p-10">
              <div>
                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-teal/10 transition-colors group-hover:bg-teal">
                  <UserCircle2 className="size-8 text-teal transition-colors group-hover:text-white" strokeWidth={1.5} />
                </div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">For Patients</p>
                <h3 className="font-display text-2xl font-bold leading-tight text-navy">Pathology Second Opinion</h3>
              </div>
              <Link
                to="/services/pathology-second-opinion-slide-review"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy py-4 text-sm font-bold text-white transition-colors hover:bg-teal"
              >
                Request a Second Opinion
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={50} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-[2rem] border border-border bg-surface p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-md lg:p-10">
              <div>
                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-teal/10 transition-colors group-hover:bg-teal">
                  <Stethoscope className="size-8 text-teal transition-colors group-hover:text-white" strokeWidth={1.5} />
                </div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">For Doctors / Laboratories</p>
                <h3 className="font-display text-2xl font-bold leading-tight text-navy">Specialist Consultation</h3>
              </div>
              <Link
                to="/services/pathology-second-opinion-slide-review"
                search={{ role: "doctor" }}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-navy bg-transparent py-4 text-sm font-bold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                Refer a Case
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-[2rem] border border-border bg-surface p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-md lg:p-10">
              <div>
                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-teal/10 transition-colors group-hover:bg-teal">
                  <Beaker className="size-8 text-teal transition-colors group-hover:text-white" strokeWidth={1.5} />
                </div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Routine Investigations</p>
                <h3 className="font-display text-2xl font-bold leading-tight text-navy">Clinical & Pathology Tests</h3>
              </div>
              <Link
                to="/tests"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-white py-4 text-sm font-bold text-navy transition-colors hover:border-teal/30 hover:bg-teal/5"
              >
                Book a Test
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Existing Form */}
        <Reveal className="mx-auto max-w-2xl">
          <div className="rounded-[2rem] border border-border bg-white p-8 shadow-sm sm:p-12">
            <h3 className="mb-3 text-center font-display text-3xl font-bold text-navy">
              Send an Enquiry
            </h3>
            <p className="mb-10 text-center text-base font-medium text-muted-foreground">
              For general questions or additional information, please fill out the form below.
            </p>
            <ContactForm />
          </div>
        </Reveal>
      </div>

      {/* Map Section */}
      <div className="mt-24 border-t border-border bg-surface py-20 lg:py-24">
        <div className="container-page max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <Reveal>
              <p className="eyebrow mb-4">Location</p>
              <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
                Visit SECOND OPINION CRL
              </h2>
              <address className="mt-6 max-w-sm text-lg font-medium leading-relaxed text-muted-foreground not-italic">
                {site.address}
              </address>
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full border border-border bg-white px-8 text-sm font-bold text-navy transition-all hover:border-teal/30 hover:bg-teal/5"
              >
                Get Directions
              </a>
            </Reveal>
            <Reveal delay={100} className="h-full min-h-[300px]">
              <div className="h-full overflow-hidden rounded-[2rem] border border-border bg-background shadow-soft">
                <iframe
                  title={`Map showing ${site.name} in Pune`}
                  src={mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="size-full min-h-[300px] border-0 lg:min-h-[400px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
