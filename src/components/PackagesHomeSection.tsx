import { Link } from "@tanstack/react-router";
import { ArrowRight, Package, Microscope, Activity } from "lucide-react";
import { packages } from "@/data/packages";
import { cn } from "@/lib/utils";

function PackageCard({ pkg, isFlagship }: { pkg: any, isFlagship?: boolean }) {
  return (
    <div 
      className={cn(
        "group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300",
        isFlagship 
          ? "bg-navy text-white border-navy-soft lg:col-span-2 md:col-span-2" 
          : "bg-background border-border hover:border-primary/20"
      )}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className={cn(
            "text-[10px] font-bold uppercase tracking-widest",
            isFlagship ? "text-blue-300" : "text-primary/70"
          )}>
            {pkg.category.replace(" Packages", "").replace(" Series", "")}
          </div>
          {pkg.badge && (
            <span className={cn(
              "text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm",
              isFlagship ? "bg-blue-900/50 text-blue-200" : "bg-secondary text-primary"
            )}>
              {pkg.badge}
            </span>
          )}
        </div>
        <h3 className={cn(
          "text-xl sm:text-2xl font-bold mb-3 leading-tight transition-colors",
          isFlagship ? "text-white" : "text-foreground group-hover:text-primary"
        )}>
          {pkg.name}
        </h3>
        <p className={cn(
          "text-sm mb-6",
          isFlagship ? "text-blue-100/80" : "text-muted-foreground"
        )}>
          {pkg.description}
        </p>
      </div>

      <div className={cn("mt-6 pt-6 border-t flex flex-col sm:flex-row sm:items-end justify-between gap-4", isFlagship ? "border-blue-800/50" : "border-border/50")}>
        <div>
          <div className={cn("text-xs font-semibold uppercase tracking-wider mb-1", isFlagship ? "text-blue-300" : "text-muted-foreground")}>
            Package Price
          </div>
          <div className={cn("font-display font-bold text-3xl", isFlagship ? "text-white" : "text-foreground")}>
            ₹{pkg.price}
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Link to={`/packages/${pkg.id}`} className={cn(
            "flex-1 sm:flex-none flex h-10 items-center justify-center rounded-xl px-4 text-xs font-semibold transition-colors",
            isFlagship ? "bg-blue-900/40 hover:bg-blue-800/60 text-white" : "bg-secondary/50 hover:bg-secondary text-primary"
          )}>
            View Details
          </Link>
          <Link to={`/packages/${pkg.id}`} className={cn(
            "flex-1 sm:flex-none flex h-10 items-center justify-center rounded-xl px-6 text-xs font-bold transition-all shadow-sm",
            isFlagship ? "bg-white text-navy hover:bg-blue-50" : "bg-primary text-primary-foreground hover:bg-navy-soft"
          )}>
            {pkg.ctaText || "Book Package"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export function PathologyPackagesHome() {
  const highlightIds = [
    "pkg-cytosure",
    "pkg-histosure",
    "pkg-ihc-expert",
    "pkg-signature-opinion"
  ];
  const pathologyPkgs = highlightIds.map(id => packages.find(p => p.id === id)).filter(Boolean) as typeof packages;

  return (
    <section id="packages" className="bg-surface py-20 lg:py-28 overflow-hidden border-b border-border">
      <div className="container-page max-w-6xl">
        <div className="mb-14">
          <div className="flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase mb-4">
            <Microscope className="size-4" />
            <span>Specialist Review</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-foreground leading-tight">
            Pathology Second Opinion
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Expert review packages for outside slides, blocks, and pathology reports.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {pathologyPkgs.map((pkg, idx) => (
            <PackageCard key={pkg.id} pkg={pkg} isFlagship={pkg.id === "pkg-signature-opinion"} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClinicalPackagesHome() {
  const highlightIds = [
    "pkg-crl-essential",
    "pkg-crl-vital",
    "pkg-crl-complete"
  ];
  const clinicalPkgs = highlightIds.map(id => packages.find(p => p.id === id)).filter(Boolean) as typeof packages;

  return (
    <section className="bg-background py-20 overflow-hidden border-b border-border">
      <div className="container-page max-w-6xl">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-primary font-bold tracking-widest text-xs uppercase mb-4">
            <Activity className="size-4" />
            <span>Health & Wellness</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground leading-tight">
            Clinical Health Packages
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Preventive health screening packages designed for different levels of routine health assessment.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {clinicalPkgs.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link 
            to="/packages"
            className="group flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-background px-8 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
          >
            Explore All Health Packages
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
