// @ts-nocheck
import { formatPrice } from "@/utils/formatPrice";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Microscope, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { fetchAdminPackages } from "@/lib/api";

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
            "p-2.5 rounded-xl",
            isFlagship ? "bg-white/10" : "bg-primary/5"
          )}>
            <Activity className={cn("size-6", isFlagship ? "text-white" : "text-primary")} />
          </div>
          <span className={cn(
            "text-2xl font-bold font-mono tracking-tight",
            isFlagship ? "text-white" : "text-navy"
          )}>
            {formatPrice(pkg.price)}
          </span>
        </div>
        <h3 className={cn("text-xl font-bold mb-3 font-display", isFlagship ? "text-white" : "text-foreground")}>
          {pkg.name}
        </h3>
        <p className={cn("text-sm line-clamp-3 mb-6 leading-relaxed", isFlagship ? "text-slate-300" : "text-muted-foreground")}>
          {pkg.description || pkg.short_description}
        </p>
        {pkg.included_tests && (
          <div className="space-y-2 mb-8">
            {pkg.included_tests.slice(0, 4).map((test: string, idx: number) => (
              <div key={idx} className="flex items-start gap-2">
                <div className={cn("mt-1.5 size-1.5 rounded-full shrink-0", isFlagship ? "bg-white/50" : "bg-primary/30")} />
                <span className={cn("text-sm", isFlagship ? "text-slate-200" : "text-foreground/80")}>
                  {test}
                </span>
              </div>
            ))}
            {pkg.included_tests.length > 4 && (
              <div className="text-sm font-medium mt-2 text-teal">
                + {pkg.included_tests.length - 4} more tests
              </div>
            )}
          </div>
        )}
      </div>
      <Link 
        to={`/packages/${pkg.id}`}
        className={cn(
          "inline-flex items-center justify-between w-full p-4 rounded-xl font-semibold transition-all group-hover:gap-4",
          isFlagship 
            ? "bg-white text-navy hover:bg-slate-50" 
            : "bg-surface hover:bg-primary/5 text-primary"
        )}
      >
        View Package Details
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}

export function PathologyPackagesHome() {
  const { data: packages = [] } = useQuery({
    queryKey: ['packages'],
    queryFn: fetchAdminPackages
  });

  const highlightIds = [
    "pkg-cytosure",
    "pkg-histosure",
    "pkg-ihc-expert",
    "pkg-signature-opinion"
  ];
  const pathologyPkgs = highlightIds.map(id => packages.find((p: any) => p.id === id)).filter(Boolean);

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
