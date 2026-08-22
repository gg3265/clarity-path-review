import { Link } from "@tanstack/react-router";
import { ArrowRight, Package } from "lucide-react";
import { packages } from "@/data/packages";
import { cn } from "@/lib/utils";

export function PackagesSection() {
  const highlightIds = [
    "pkg-crl-vital",
    "pkg-crl-complete",
    "pkg-breast-womens",
    "pkg-histosure",
    "pkg-signature-opinion"
  ];
  
  const flagshipPackages = highlightIds.map(id => packages.find(p => p.id === id)).filter(Boolean) as typeof packages;

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
              Health & Pathology Packages
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Explore thoughtfully designed health screening packages and expert pathology second-opinion services.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {flagshipPackages.map((pkg, idx) => {
            const isFlagship = pkg.id === "pkg-signature-opinion";
            return (
              <div 
                key={pkg.id} 
                className={cn(
                  "group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300",
                  isFlagship 
                    ? "bg-navy text-white border-navy-soft lg:col-span-2 md:col-span-2" 
                    : "bg-background border-border hover:border-primary/20",
                  idx === 3 && "lg:col-span-1" // HistoSure next to Flagship
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
                  
                  {/* Compact Preview List */}
                  {pkg.includedTests && pkg.includedTests.length > 0 && (
                    <ul className="mb-6 space-y-1">
                      {pkg.includedTests.slice(0, 5).map((test, i) => (
                        <li key={i} className="flex items-center text-xs">
                          <span className={cn(
                            "mr-2 text-[10px]",
                            isFlagship ? "text-blue-400" : "text-primary"
                          )}>•</span>
                          <span className={isFlagship ? "text-blue-50" : "text-foreground"}>
                            {test}
                          </span>
                        </li>
                      ))}
                      {pkg.includedTests.length > 5 && (
                        <li className="text-xs italic mt-2 opacity-70">
                          + {pkg.includedTests.length - 5} more items
                        </li>
                      )}
                    </ul>
                  )}
                  {pkg.groups && pkg.groups.length > 0 && (
                    <ul className="mb-6 space-y-1">
                      {pkg.groups.map((group, i) => (
                        <li key={i} className="flex items-center text-xs">
                          <span className={cn(
                            "mr-2 text-[10px]",
                            isFlagship ? "text-blue-400" : "text-primary"
                          )}>•</span>
                          <span className={isFlagship ? "text-blue-50" : "text-foreground font-medium"}>
                            {group.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
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
                      {pkg.category === "Pathology Second Opinion" ? "View Package" : "View Package"}
                    </Link>
                    <Link to={`/packages/${pkg.id}`} className={cn(
                      "flex-1 sm:flex-none flex h-10 items-center justify-center rounded-xl px-6 text-xs font-bold transition-all shadow-sm",
                      isFlagship ? "bg-white text-navy hover:bg-blue-50" : "bg-primary text-primary-foreground hover:bg-navy-soft"
                    )}>
                      {pkg.ctaText || "Book Package"}
                    </Link>
                  </div>
                </div>
                
                {pkg.id === "pkg-breast-womens" && (
                  <div className="mt-4 text-[10px] text-muted-foreground italic leading-tight">
                    * Screening components and timing may vary according to age, risk and applicable clinical recommendations.
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="flex justify-center">
          <Link 
            to="/packages"
            className="group flex h-14 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-sm font-semibold text-background transition-all hover:bg-foreground/90 shrink-0"
          >
            Explore All Packages
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}