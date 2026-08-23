import { createFileRoute, Link, useNavigate, useLocation } from "@tanstack/react-router";
import { packages, PackageCategory } from "@/data/packages";
import { PageHeader } from "@/components/PageHeader";
import { BookingBar } from "@/components/BookingBar";
import { BackButton } from "@/components/BackButton";
import { useCart } from "@/context/CartContext";
import { CheckCircle2, ChevronRight, Activity, Microscope, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Health & Pathology Packages | Second Opinion CRL" },
      { name: "description", content: "Explore our thoughtfully designed health screening and pathology second opinion packages." },
    ],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  const { selectedPackages, addPackage, removePackage } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -80; // account for navbar if any
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  const isSelected = (pkgId: string) => selectedPackages.some(p => p.id === pkgId);

  const clinicalPackages = packages.filter(p => p.category === "Clinical Health Packages");
  const cancerPackages = packages.filter(p => p.category === "Cancer Screening Series");
  const pathologyPackages = packages.filter(p => p.category === "Pathology Second Opinion");

  const renderPackageCard = (pkg: typeof packages[0]) => {
    const selected = isSelected(pkg.id);
    return (
      <div key={pkg.id} className={cn("group relative flex flex-col justify-between p-6 sm:p-8 bg-background border rounded-3xl transition-all duration-300", selected ? "border-primary shadow-lg ring-1 ring-primary" : "border-border shadow-sm hover:shadow-xl hover:border-primary/20")}>
        <div>
          <div className="flex items-center justify-between mb-4">
            {pkg.badge && (
              <span className="text-[10px] font-extrabold uppercase tracking-widest bg-secondary text-primary px-3 py-1 rounded-full">
                {pkg.badge}
              </span>
            )}
            {!pkg.badge && <div />}
            <div className="font-display font-extrabold text-2xl text-foreground">
              {formatPrice(pkg.price)}
            </div>
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
            {pkg.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3 mb-6">
            {pkg.shortDescription}
          </p>
          
          {pkg.includedTests && pkg.includedTests.length > 0 && (
            <div className="mb-6 space-y-2">
              <div className="text-[10px] font-bold uppercase tracking-widest text-primary/70">Key Investigations</div>
              <div className="text-sm font-medium text-foreground line-clamp-3 leading-relaxed">
                {pkg.includedTests.slice(0, 5).join(" • ")} {pkg.includedTests.length > 5 && "..."}
              </div>
            </div>
          )}
        </div>
        
        <div className="pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center gap-3">
          <Link to={`/packages/${pkg.id}`} className="w-full sm:w-1/2 flex items-center justify-center h-12 rounded-xl border border-primary/20 bg-primary/5 text-primary text-sm font-semibold hover:bg-primary/10 transition-colors">
            View Details
          </Link>
          {selected ? (
            <button onClick={() => removePackage(pkg.id)} className="w-full sm:w-1/2 flex items-center justify-center h-12 rounded-xl bg-green-50 text-green-700 border border-green-200 text-sm font-semibold hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors gap-2">
              <CheckCircle2 className="size-4" /> Added
            </button>
          ) : (
            <button onClick={() => {
              if (pkg.bookingType === "booking") {
                addPackage(pkg);
              } else {
                navigate({ to: `/packages/${pkg.id}` });
              }
            }} className="w-full sm:w-1/2 flex items-center justify-center h-12 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-navy-soft transition-colors shadow-sm">
              {pkg.ctaText}
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <PageHeader
        eyebrow="Health & Screening"
        title="CRL Health Packages"
        intro="Thoughtfully designed screening and expert pathology packages for preventive health, early risk assessment and specialist second opinions."
        watermark="PACKAGES"
        showBack={true}
        backFallback="/#packages"
      />

      <section id="clinical" className="bg-surface pt-12 pb-24 border-b border-border">
        <div className="container-page max-w-6xl">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Activity className="size-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Clinical Health Packages</h2>
              <p className="text-muted-foreground mt-1 text-sm sm:text-base">Preventive health screening packages designed for different levels of health assessment.</p>
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {clinicalPackages.map(renderPackageCard)}
          </div>

          <div className="bg-background rounded-3xl p-6 md:p-10 border border-border shadow-soft">
            <h3 className="text-xl font-bold text-foreground mb-6">Compare Clinical Packages</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-surface border-b border-border">
                  <tr>
                    <th className="p-4 font-bold text-foreground rounded-tl-xl">Feature / Package</th>
                    <th className="p-4 font-bold text-foreground">Bronze</th>
                    <th className="p-4 font-bold text-foreground">Silver</th>
                    <th className="p-4 font-bold text-foreground">Gold</th>
                    <th className="p-4 font-bold text-foreground rounded-tr-xl">Platinum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-4 font-medium text-foreground">Routine Blood Tests</td>
                    <td className="p-4 text-green-600"><CheckCircle2 className="size-4" /></td>
                    <td className="p-4 text-green-600"><CheckCircle2 className="size-4" /></td>
                    <td className="p-4 text-green-600"><CheckCircle2 className="size-4" /></td>
                    <td className="p-4 text-green-600"><CheckCircle2 className="size-4" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Liver & Kidney Function</td>
                    <td className="p-4 text-green-600"><CheckCircle2 className="size-4" /></td>
                    <td className="p-4 text-green-600"><CheckCircle2 className="size-4" /></td>
                    <td className="p-4 text-green-600"><CheckCircle2 className="size-4" /></td>
                    <td className="p-4 text-green-600"><CheckCircle2 className="size-4" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Thyroid Profile</td>
                    <td className="p-4 text-muted-foreground">-</td>
                    <td className="p-4 text-green-600"><CheckCircle2 className="size-4" /></td>
                    <td className="p-4 text-green-600"><CheckCircle2 className="size-4" /></td>
                    <td className="p-4 text-green-600"><CheckCircle2 className="size-4" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Vitamins & Iron Profile</td>
                    <td className="p-4 text-muted-foreground">-</td>
                    <td className="p-4 text-muted-foreground">-</td>
                    <td className="p-4 text-green-600"><CheckCircle2 className="size-4" /></td>
                    <td className="p-4 text-green-600"><CheckCircle2 className="size-4" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Advanced Cardiac Risk</td>
                    <td className="p-4 text-muted-foreground">-</td>
                    <td className="p-4 text-muted-foreground">-</td>
                    <td className="p-4 text-muted-foreground">-</td>
                    <td className="p-4 text-green-600"><CheckCircle2 className="size-4" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Cancer Markers (Select)</td>
                    <td className="p-4 text-muted-foreground">-</td>
                    <td className="p-4 text-muted-foreground">-</td>
                    <td className="p-4 text-muted-foreground">-</td>
                    <td className="p-4 text-green-600"><CheckCircle2 className="size-4" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="cancer" className="bg-background pt-16 pb-24 border-b border-border">
        <div className="container-page max-w-6xl">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
              <ShieldCheck className="size-6" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">CRL Cancer Screening Series</h2>
              <p className="text-muted-foreground mt-1 text-sm max-w-2xl">
                Focused screening packages designed around age-, sex- and risk-appropriate preventive assessment. 
                Screening should be selected according to age, personal history, family history and applicable clinical recommendations.
              </p>
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cancerPackages.map(renderPackageCard)}
          </div>
        </div>
      </section>

      <section id="pathology" className="bg-surface pt-16 pb-32">
        <div className="container-page max-w-6xl">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
              <Microscope className="size-6" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">Pathology Second Opinion</h2>
              <p className="text-muted-foreground mt-1 text-sm max-w-2xl">
                Expert review of challenging, complex and cancer-related pathology cases, including outside slides, blocks, IHC and diagnostic reports.
              </p>
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {pathologyPackages.map(renderPackageCard)}
          </div>
        </div>
      </section>
      
      <div className="bg-background border-t border-border py-8 text-center px-4">
        <p className="text-xs text-muted-foreground max-w-4xl mx-auto">
          Package contents and screening recommendations may vary based on age, medical history, clinical indication and applicable guidelines. Please consult a qualified healthcare professional where appropriate.
        </p>
      </div>

      <BookingBar />
    </>
  );
}