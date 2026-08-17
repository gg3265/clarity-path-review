import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LogoLockup } from "@/components/Logo";
import { nav } from "@/lib/site";
import { ContactAction } from "@/components/ContactAction";
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

          <div className="ml-1 hidden md:flex items-center gap-2 mr-2">
            <ContactAction type="whatsapp" variant="icon" className="size-10 md:size-11" />
            <ContactAction type="call" variant="icon" className="size-10 md:size-11" />
          </div>

          <Link
            to="/tests"
            className="hidden rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03] hover:bg-navy-soft lg:inline-flex"
          >
            Book a Test
          </Link>
          <Link
            to="/upload-prescription"
            className="hidden rounded-full border border-input bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary xl:inline-flex"
          >
            Upload Prescription
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary lg:hidden ml-2"
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
          <div className="mt-5 flex flex-col gap-3">
            <Link
              to="/tests"
              className="flex min-h-12 items-center justify-center rounded-full bg-primary px-5 text-base font-semibold text-primary-foreground"
            >
              Book a Test
            </Link>
            <Link
              to="/upload-prescription"
              className="flex min-h-12 items-center justify-center rounded-full border border-input bg-background px-5 text-base font-semibold text-foreground"
            >
              Upload Prescription
            </Link>
            <div className="grid grid-cols-2 gap-3 mt-2">
              <ContactAction type="whatsapp" variant="solid" className="w-full" showText />
              <ContactAction type="call" variant="outline" className="w-full" showText />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
