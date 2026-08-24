import { formatPrice } from "@/utils/formatPrice";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { packages } from "@/data/packages";
import { useCart } from "@/context/CartContext";
import { BackButton } from "@/components/BackButton";
import { ContactAction } from "@/components/ContactAction";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { BookingBar } from "@/components/BookingBar";

export const Route = createFileRoute("/packages_/$packageId")({
  component: PackageDetailPage,
  loader: ({ params }) => {
    const pkg = packages.find(p => p.id === params.packageId);
    if (!pkg) throw new Error("Package not found");
    return pkg;
  }
});

function PackageDetailPage() {
  const pkg = Route.useLoaderData();
  const { selectedPackages, addPackage, removePackage } = useCart();
  const navigate = useNavigate();

  const isSelected = selectedPackages.some(p => p.id === pkg.id);

  const renderTestsList = () => {
    if (pkg.groups && pkg.groups.length > 0) {
      return (
        <div className="space-y-8">
          {pkg.groups.map(group => (
            <div key={group.name}>
              <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-4 border-b border-border/50 pb-2">{group.name}</h4>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {group.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-foreground">
                    <span className="text-primary mr-2 mt-0.5">•</span>
                    <span className="font-medium leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }
    
    if (pkg.includedTests && pkg.includedTests.length > 0) {
      return (
        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
          {pkg.includedTests.map((item, idx) => (
            <li key={idx} className="flex items-start text-sm text-foreground">
              <span className="text-primary mr-2 mt-0.5">•</span>
              <span className="font-medium leading-tight">{item}</span>
            </li>
          ))}
        </ul>
      );
    }

    return null;
  };

  const whatsappMessage = `Hello, I would like to enquire about the ${pkg.name} package (₹${pkg.price}).`;

  return (
    <>
      <div className="bg-surface border-b border-border sticky top-[64px] lg:top-[76px] z-40">
        <div className="container-page py-4">
          <BackButton fallbackUrl="/packages" />
        </div>
      </div>
      
      <section className="py-12 md:py-20 bg-background min-h-[60vh] pb-32">
        <div className="container-page max-w-4xl">
          <div className="bg-surface rounded-3xl p-6 md:p-10 lg:p-12 border border-border shadow-soft animate-fade-in slide-in-from-bottom-4">
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-primary/70">
                    {pkg.category}
                  </div>
                  {pkg.badge && (
                    <span className="text-[10px] font-extrabold uppercase tracking-widest bg-secondary text-primary px-3 py-1 rounded-full">
                      {pkg.badge}
                    </span>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground leading-tight mb-4">
                  {pkg.name}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              <div className="bg-background rounded-2xl p-6 border border-border md:min-w-[280px] shadow-sm flex flex-col justify-center">
                <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Package Price</div>
                <div className="font-display font-extrabold text-4xl text-foreground mb-6">
                  {formatPrice(pkg.price)}
                </div>
                
                {isSelected ? (
                  <button onClick={() => removePackage(pkg.id)} className="w-full flex items-center justify-center h-14 rounded-full bg-green-50 text-green-700 border border-green-200 text-base font-semibold hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors gap-2">
                    <CheckCircle2 className="size-5" /> Added to Booking
                  </button>
                ) : (
                  <button 
                    onClick={() => {
                      if (pkg.bookingType === "booking") {
                        addPackage(pkg);
                        navigate({ to: "/book" });
                      } else {
                        // Enquiries can just trigger standard call/WA
                        window.open(`https://wa.me/919359777222?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
                      }
                    }} 
                    className="w-full flex items-center justify-center h-14 rounded-full bg-primary text-primary-foreground text-base font-semibold hover:bg-navy-soft transition-transform hover:scale-[1.02] shadow-md"
                  >
                    {pkg.ctaText}
                  </button>
                )}
                
                {pkg.additionalCharges && (
                  <div className="mt-4 text-xs text-muted-foreground flex items-start gap-2 bg-secondary/50 p-3 rounded-xl border border-border/50">
                    <AlertCircle className="size-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{pkg.additionalCharges}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-border pt-10">
              <h3 className="text-2xl font-bold text-foreground mb-8">What's Included</h3>
              {renderTestsList()}
            </div>

            {pkg.notes && (
              <div className="mt-10 bg-primary/5 rounded-2xl p-6 border border-primary/20 flex items-start gap-3">
                <AlertCircle className="size-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-primary/80 leading-relaxed">
                  {pkg.notes}
                </p>
              </div>
            )}

            <div className="mt-12 pt-10 border-t border-border">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">Need to discuss this package?</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                <ContactAction context="packages" type="call" variant="outline" className="w-full" />
                <a 
                  href={`https://wa.me/919359777222?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full h-12 inline-flex items-center justify-center rounded-xl font-semibold text-white transition-colors bg-[#25D366] hover:bg-[#20bd5a]"
                >
                  <svg className="mr-2 size-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WhatsApp Us
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <BookingBar />
    </>
  );
}