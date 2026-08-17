import { Link } from "@tanstack/react-router";
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
      src="/logo.png"
      width={size}
      height={size}
      alt={`${site.name} — ${site.descriptor} logo`}
      className={cn("shrink-0 rounded-full bg-white object-contain", className)}
      onError={(e) => {
        // Fallback styling if the user hasn't added the image yet
        e.currentTarget.style.display = 'none';
        e.currentTarget.nextElementSibling?.classList.remove('hidden');
      }}
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
      <div className="relative flex items-center justify-center p-0.5 shadow-soft shrink-0 rounded-full bg-white" style={{ width: size, height: size }}>
        <LogoMark size={size} className="absolute inset-0 size-full" />
        <span className="hidden text-[0.6rem] font-bold text-slate-400">LOGO</span>
      </div>
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
