// @ts-nocheck
import { Mail, MapPin, Search, ArrowRight, UserCircle2, Stethoscope, Beaker } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { ContactAction } from "@/components/ContactAction";
import { mapsDirectionsUrl, mapsEmbedUrl, site } from "@/lib/site";
import { Link } from "@tanstack/react-router";

export function ContactSection() {
  return (
    <section id="contact" className="bg-background">
      <div className="container-page py-20 md:py-28">
        
        {/* Contact Info Header */}
        <Reveal className="max-w-4xl text-center mx-auto mb-20">
          <ul className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-12 gap-y-6">
            <li className="flex items-center gap-3">
              <MapPin className="size-5 text-teal" />
              <span className="font-medium text-foreground">Pune</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-5 text-teal" />
              <a href={`mailto:${site.email}`} className="font-medium text-foreground hover:text-teal">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <ContactAction context="general" type="call" variant="outline" className="h-10 px-4 text-xs bg-transparent" />
            </li>
            <li className="flex items-center gap-3">
              <ContactAction context="general" type="whatsapp" variant="solid" className="h-10 px-4 text-xs" />
            </li>
          </ul>
        </Reveal>

        {/* Action Pathways */}
        <div className="grid gap-6 md:grid-cols-3 mb-24">
          <Reveal delay={0}>
            <div className="h-full rounded-2xl border border-border bg-surface p-8 text-center flex flex-col justify-between hover:shadow-soft transition-shadow">
              <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal/10 mb-6">
                  <UserCircle2 className="size-6 text-teal" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">For Patients</p>
                <h3 className="font-display text-xl font-bold text-foreground">Pathology Second Opinion</h3>
              </div>
              <Link
                to="/services/pathology-second-opinion-slide-review"
                activeProps={{}}
                activeClass=""
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                Request a Second Opinion
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={50}>
            <div className="h-full rounded-2xl border border-border bg-surface p-8 text-center flex flex-col justify-between hover:shadow-soft transition-shadow">
              <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal/10 mb-6">
                  <Stethoscope className="size-6 text-teal" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">For Doctors / Laboratories</p>
                <h3 className="font-display text-xl font-bold text-foreground">Specialist Consultation</h3>
              </div>
              <Link
                to="/services/pathology-second-opinion-slide-review"
                search={{ role: "doctor" }}
                activeProps={{}}
                activeClass=""
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-navy bg-transparent px-6 py-3 text-sm font-semibold text-navy transition-transform hover:scale-105 hover:bg-navy hover:text-white"
              >
                Refer a Case
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-border bg-surface p-8 text-center flex flex-col justify-between hover:shadow-soft transition-shadow">
              <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal/10 mb-6">
                  <Beaker className="size-6 text-teal" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Routine Investigations</p>
                <h3 className="font-display text-xl font-bold text-foreground">Clinical & Pathology Tests</h3>
              </div>
              <Link
                to="/tests"
                activeProps={{}}
                activeClass=""
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-105 hover:border-foreground/20"
              >
                Book a Test
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Existing Form */}
        <Reveal className="max-w-2xl mx-auto">
          <div className="rounded-[1.5rem] border border-border bg-surface p-6 shadow-soft sm:p-10">
            <h3 className="font-display text-2xl font-bold text-center text-foreground mb-2">
              Send an Enquiry
            </h3>
            <p className="text-center text-sm leading-relaxed text-muted-foreground mb-8">
              For general questions or additional information, please fill out the form below.
            </p>
            <ContactForm />
          </div>
        </Reveal>
      </div>

      {/* Map Section */}
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

