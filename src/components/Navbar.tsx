import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LogoLockup } from "@/components/Logo";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/85 shadow-soft backdrop-blur-xl"
          : "border-transparent bg-background/70 backdrop-blur-md",
      )}
    >
      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 md:py-4">
        <LogoLockup />

        <div className="flex items-center gap-1">
          <nav aria-label="Main" className="hidden lg:flex lg:items-center">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="accent-rule relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={site.phoneHref}
            className="ml-1 inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-border px-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary sm:px-4 lg:hidden"
            aria-label={`Call ${site.phone}`}
          >
            <Phone className="size-4 text-crimson" aria-hidden="true" />
            <span className="hidden sm:inline">Call</span>
          </a>

          <Link
            to="/contact"
            className="hidden rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03] hover:bg-navy-soft lg:inline-flex"
          >
            Request a Second Opinion
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border bg-background lg:hidden"
      >
        <nav aria-label="Mobile" className="container-page py-4">
          <ul className="flex flex-col">
            {nav.map((item, i) => (
              <li
                key={item.to}
                className="animate-fade-in border-b border-border/70 last:border-0"
                style={{ animationDelay: `${i * 45}ms` }}
              >
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="flex min-h-12 items-center justify-between text-base font-medium text-foreground data-[status=active]:text-crimson"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="h-px w-6 bg-crimson/50"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-5 flex min-h-12 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
          >
            Request a Second Opinion
          </Link>
        </nav>
      </div>
    </header>
  );
}
