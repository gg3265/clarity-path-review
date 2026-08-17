import { Link } from "@tanstack/react-router";
import { LogoMark } from "@/components/Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-primary-foreground">
      <div aria-hidden="true" className="lab-grid-dark absolute inset-0 opacity-60" />
      <div className="relative container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark size={52} className="p-1" />
              <div>
                <p className="font-display text-lg font-extrabold">
                  SECOND OPINION CRL
                </p>
                <p className="text-xs tracking-[0.16em] uppercase text-primary-foreground/60">
                  {site.descriptor}
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Clinical pathology, histopathology, oncopathology, cytopathology
              and expert second-opinion pathology review in Pune.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold tracking-[0.18em] uppercase text-primary-foreground/50">
              Navigation
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.18em] uppercase text-primary-foreground/50">
              Contact
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li>
                <a
                  href={site.phoneHref}
                  className="transition-colors hover:text-primary-foreground"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-primary-foreground"
                >
                  {site.email}
                </a>
              </li>
              <li className="max-w-xs leading-relaxed text-primary-foreground/70">
                {site.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SECOND OPINION CRL. All rights reserved.</p>
          <Link
            to="/privacy-policy"
            className="transition-colors hover:text-primary-foreground"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
