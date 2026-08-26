import { Link } from "@tanstack/react-router";
import { LogoMark } from "@/components/Logo";
import { site } from "@/lib/site";
import { ContactAction } from "@/components/ContactAction";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mb-16 overflow-hidden bg-navy text-white md:mb-0">
      <div aria-hidden="true" className="lab-grid-dark absolute inset-0 opacity-[0.07]" />
      
      <div className="container-page relative z-10 py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr]">
          
          {/* Column 1: Brand */}
          <div className="max-w-sm">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-2xl bg-white/5 p-2 backdrop-blur-sm">
                <LogoMark size={48} />
              </div>
              <div>
                <p className="font-display text-lg font-extrabold tracking-tight">
                  SECOND OPINION CRL
                </p>
                <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-widest text-teal">
                  Clinical Reference Laboratory
                </p>
              </div>
            </div>
            <p className="text-sm font-medium leading-relaxed text-white/70">
              Specialist Pathology Second Opinion & Diagnostic Consultation
            </p>
          </div>

          {/* Column 2: Services */}
          <nav aria-label="Services Navigation">
            <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-white/50">
              Services
            </h2>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/services" className="text-white/80 transition-colors hover:text-teal">Histopathology</Link></li>
              <li><Link to="/services" className="text-white/80 transition-colors hover:text-teal">Oncopathology</Link></li>
              <li><Link to="/services" className="text-white/80 transition-colors hover:text-teal">Cytopathology</Link></li>
              <li><Link to="/services" className="text-white/80 transition-colors hover:text-teal">IHC</Link></li>
              <li><Link to="/services" className="text-white/80 transition-colors hover:text-teal">Molecular Testing</Link></li>
              <li><Link to="/services" className="text-white/80 transition-colors hover:text-teal">Clinical Pathology</Link></li>
            </ul>
          </nav>

          {/* Column 3: Second Opinion */}
          <nav aria-label="Second Opinion Navigation">
            <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-white/50">
              Second Opinion
            </h2>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/second-opinion" className="text-white/80 transition-colors hover:text-teal">Overview</Link></li>
              <li><Link to="/cancer-pathology/breast-pathology" className="text-white/80 transition-colors hover:text-teal">Cancer Pathology</Link></li>
              <li><Link to="/quality-standards" className="text-white/80 transition-colors hover:text-teal">Quality & Standards</Link></li>
              <li><Link to="/about" className="text-white/80 transition-colors hover:text-teal">Our Experts</Link></li>
              <li><Link to="/services/pathology-second-opinion-slide-review" className="text-teal font-bold transition-colors hover:text-teal-soft">Request a Review</Link></li>
            </ul>
          </nav>

          {/* Column 4: For Doctors */}
          <nav aria-label="Doctors Navigation">
            <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-white/50">
              For Doctors
            </h2>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/doctors" className="text-white/80 transition-colors hover:text-teal">B2B Consultation</Link></li>
              <li><Link to="/services/pathology-second-opinion-slide-review" search={{ role: "doctor" }} className="text-white/80 transition-colors hover:text-teal">Refer a Case</Link></li>
              <li><Link to="/tests" className="text-white/80 transition-colors hover:text-teal">Test Directory</Link></li>
            </ul>
          </nav>

          {/* Column 5: Contact */}
          <div>
            <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-white/50">
              Contact
            </h2>
            <ul className="space-y-5 text-sm font-medium text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-teal" />
                <span className="leading-relaxed">{site.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-teal" />
                <span>+91 93597 77222</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-teal" />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-teal">
                  {site.email}
                </a>
              </li>
            </ul>
            <div className="mt-8 flex gap-3">
              <ContactAction type="whatsapp" variant="solid" />
              <ContactAction type="call" variant="outline" className="border-white/20 text-white hover:bg-white/10" />
            </div>
          </div>
          
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs font-medium text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} SECOND OPINION CRL. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-confidentiality" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link to="/quality-standards" className="transition-colors hover:text-white">Standards</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
