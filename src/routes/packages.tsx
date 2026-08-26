// @ts-nocheck
import { formatPrice } from "@/utils/formatPrice";
import { createFileRoute, Link, useNavigate, useLocation } from "@tanstack/react-router";
import { PackageCategory } from "@/data/packages";
import { PageHeader } from "@/components/PageHeader";
import { BookingBar } from "@/components/BookingBar";
import { BackButton } from "@/components/BackButton";
import { useCart } from "@/context/CartContext";
import { CheckCircle2, ChevronRight, Activity, Microscope, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

import { fetchPackages } from "@/lib/api";

export const Route = createFileRoute("/packages")({
  loader: async () => {
    return { packages: await fetchPackages() };
  },
  head: () => ({
    meta: [
      { title: "Health & Pathology Packages | Second Opinion CRL" },
      { name: "description", content: "Explore our thoughtfully designed health screening and pathology second opinion packages." },
    ],
  }),
  component: PackagesPage,
});


const COMPARISON_PARAMETERS = [
  { label: "CBC / Complete Hemogram", match: ["CBC"] },
  { label: "ESR", match: ["ESR"] },
  { label: "Fasting Blood Glucose", match: ["Fasting Glucose", "Fasting blood glucose"] },
  { label: "HbA1c", match: ["HbA1c"] },
  { label: "Lipid Profile", match: ["Lipid Profile"] },
  { label: "Liver Function Test (LFT)", match: ["Liver Function Test", "LFT"] },
  { label: "Kidney Function Test (KFT)", match: ["Kidney Function Test", "KFT"] },
  { label: "Sodium & Potassium / Electrolytes", match: ["Sodium & Potassium", "Electrolytes"] },
  { label: "Urine Routine", match: ["Urine Routine"] },
  { label: "TSH / Thyroid Profile", match: ["TSH", "Thyroid Profile"] },
  { label: "Free T4", match: ["Free T4", "Thyroid Profile"] },
  { label: "Vitamin B12", match: ["Vitamin B12"] },
  { label: "Vitamin D", match: ["Vitamin D"] },
  { label: "Calcium", match: ["Calcium"] },
  { label: "Uric Acid", match: ["Uric Acid"] },
  { label: "Iron Profile / Ferritin / TIBC", match: ["Iron", "Ferritin", "Iron Profile", "TIBC"] },
  { label: "Stool Occult Blood / FIT", match: ["Stool Occult Blood", "FIT"] },
  { label: "ApoB", match: ["ApoB"] },
  { label: "Lipoprotein(a)", match: ["Lipoprotein(a)"] },
  { label: "hs-CRP", match: ["hs-CRP"] },
  { label: "Homocysteine", match: ["Homocysteine"] },
  { label: "Urine Microalbumin", match: ["Urine Microalbumin"] },
  { label: "Physician Consultation", match: ["Physician Consultation"] }
];

function PackagesPage() {
  const { packages } = Route.useLoaderData();
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
                navigate({ to: `/packages/${pkg.id}` as any });
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
            <div className="relative">
              <div className="md:hidden absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none"></div>
              <p className="md:hidden text-xs text-muted-foreground mb-3 italic">Swipe horizontally to view all packages 👉</p>
              <div className="overflow-x-auto pb-4 custom-scrollbar rounded-xl border border-border">
                <table className="w-full text-left text-sm min-w-[800px]">
                  <thead className="bg-surface border-b border-border">
                    <tr>
                      <th className="p-4 font-bold text-foreground sticky left-0 bg-surface z-10 w-48 border-r border-border shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">Test / Parameter</th>
                      {clinicalPackages.map(pkg => (
                        <th key={pkg.id} className="p-4 bg-surface text-center align-top min-w-[130px]">
                          <div className="font-bold text-foreground text-sm mb-1">{pkg.name}</div>
                          <div className="text-primary font-bold">{formatPrice(pkg.price)}</div>
                          {(pkg.id === "pkg-crl-complete" || pkg.id === "pkg-crl-prime") && (
                             <div className="text-[10px] uppercase font-bold text-teal mt-2 bg-teal/10 inline-block px-2 py-0.5 rounded shadow-sm">Recommended</div>
                          )}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {COMPARISON_PARAMETERS.map((param, i) => (
                      <tr key={i} className="group hover:bg-surface/30 transition-colors">
                        <td className="p-4 font-medium text-foreground sticky left-0 bg-background group-hover:bg-surface/50 z-10 border-r border-border transition-colors shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                          {param.label}
                        </td>
                        {clinicalPackages.map(pkg => {
                           const included = pkg.includedTests && param.match.some(m => (pkg.includedTests || []).some(t => t.toLowerCase().includes(m.toLowerCase())));
                           return (
                             <td key={pkg.id} className="p-4 text-center cursor-pointer" onClick={() => navigate({ to: `/packages/${pkg.id}` as any })}>
                               {included ? <CheckCircle2 className="size-5 text-green-600 mx-auto" /> : <span className="text-muted-foreground/30 font-bold">—</span>}
                             </td>
                           );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
