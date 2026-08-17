import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function LogoMark({
  className,
  size = 44,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <img
      src={logo}
      width={size}
      height={size}
      alt={`${site.name} — ${site.descriptor} logo`}
      className={cn("shrink-0 rounded-full bg-white object-contain", className)}
    />
  );
}

export function LogoLockup({
  className,
  invert = false,
  size = 44,
}: {
  className?: string;
  invert?: boolean;
  size?: number;
}) {
  return (
    <Link
      to="/"
      className={cn("group flex min-w-0 items-center gap-3", className)}
      aria-label={`${site.name} home`}
    >
      <LogoMark size={size} className="shadow-soft" />
      <span className="min-w-0 leading-tight">
        <span
          className={cn(
            "block truncate font-display text-[0.95rem] font-extrabold tracking-tight sm:text-base",
            invert ? "text-primary-foreground" : "text-foreground",
          )}
        >
          SECOND OPINION CRL
        </span>
        <span
          className={cn(
            "block truncate text-[0.625rem] font-medium tracking-[0.16em] uppercase",
            invert ? "text-primary-foreground/65" : "text-muted-foreground",
          )}
        >
          {site.descriptor}
        </span>
      </span>
    </Link>
  );
}
