import { Link } from "@tanstack/react-router";
import { ArrowRight, Package } from "lucide-react";
import { packages } from "@/data/packages";

export function PackagesSection() {
  const flagshipPackages = packages.filter(p => ["pkg-gold", "pkg-women-plus", "pkg-onco-path", "pkg-platinum"].includes(p.id));

  return (
    <section className="bg-surface py-20 lg:py-32 overflow-hidden border-b border-border">
      <div className="container-page max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase mb-4">
              <Package className="size-4" />
              <span>Comprehensive Care</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-foreground leading-tight">
              CRL Health & Pathology Packages
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Thoughtfully designed screening and expert pathology packages for preventive health, early risk assessment and specialist second opinions.
            </p>
          </div>
          <Link 
            to="/packages"
            className="group flex h-14 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-sm font-semibold text-background transition-all hover:bg-foreground/90 shrink-0"
          >
            View All Packages
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {flagshipPackages.map(pkg => (
            <Link key={pkg.id} to={`/packages/${pkg.id}`} className="group relative flex flex-col justify-between p-6 bg-background rounded-3xl border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
                    {pkg.category.replace(" Packages", "").replace(" Series", "")}
                  </div>
                  {pkg.badge && (
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-secondary text-primary px-2 py-0.5 rounded-sm">
                      {pkg.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                  {pkg.name}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {pkg.shortDescription}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-border/50 flex items-end justify-between">
                <div className="font-display font-bold text-xl text-foreground">
                  ₹{pkg.price}
                </div>
                <div className="text-xs font-semibold text-primary group-hover:underline">
                  View Details →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}