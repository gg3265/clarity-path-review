import { useCart } from "@/context/CartContext";
import { Link, useNavigate } from "@tanstack/react-router";
import { ChevronRight, AlertCircle } from "lucide-react";

export function BookingBar() {
  const { selectedTests, selectedPackages, totalEstimatedPrice, hasConflict } = useCart();
  const navigate = useNavigate();

  const totalItems = (selectedTests?.length || 0) + (selectedPackages?.length || 0);

  if (totalItems === 0) return null;

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-[64px] left-0 right-0 z-[60] border-t border-border bg-background/95 p-4 shadow-lift backdrop-blur-xl md:hidden animate-fade-in slide-in-from-bottom-full">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-bold text-foreground">
              {totalItems} {totalItems === 1 ? "Item" : "Items"} Selected
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              {hasConflict ? (
                <span className="flex items-center gap-1 text-amber-600 font-medium">
                  <AlertCircle className="size-3" /> Confirmation Required
                </span>
              ) : (
                <span className="font-semibold text-foreground">{formatPrice(totalEstimatedPrice)}</span>
              )}
            </div>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate({ to: "/book" });
              window.scrollTo(0, 0);
            }}
            className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-soft"
          >
            View Booking
            <ChevronRight className="ml-1 size-4" />
          </button>
        </div>
      </div>

      {/* Desktop Floating Summary */}
      <div className="hidden md:block fixed bottom-8 right-8 z-[60] animate-scale-in">
        <div className="w-[340px] rounded-2xl border border-border bg-background/95 p-5 shadow-2xl backdrop-blur-xl">
          <div className="mb-4 font-display text-lg font-bold text-foreground">
            Your Booking
          </div>
          
          <div className="max-h-[300px] overflow-y-auto pr-2 space-y-3 mb-4">
            {selectedPackages?.map((pkg) => (
              <div key={pkg.id} className="flex justify-between items-start text-sm">
                <span className="font-medium text-foreground pr-2 truncate">{pkg?.name}</span>
                <span className="font-semibold shrink-0">{formatPrice(pkg?.price)}</span>
              </div>
            ))}
            {selectedTests?.map((test) => (
              <div key={test.id} className="flex justify-between items-start text-sm">
                <span className="font-medium text-foreground pr-2 truncate">{test?.name}</span>
                <span className="font-semibold shrink-0">
                  {test?.priceStatus === "Confirmed" ? formatPrice(test?.sheet1Price || test?.sheet2MRP) : 
                   test?.priceStatus === "Sheet 2 Only" ? formatPrice(test?.sheet2MRP) : 
                   <AlertCircle className="size-4 text-amber-600 inline" />}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-4 mb-5 flex justify-between items-end">
            <div>
              <div className="text-sm font-bold text-muted-foreground">Total Items</div>
              <div className="text-lg font-bold text-foreground">{totalItems}</div>
            </div>
            <div className="text-right">
              {hasConflict ? (
                <div className="text-xs font-semibold text-amber-600">Price TBA</div>
              ) : (
                <div className="text-2xl font-display font-extrabold text-foreground">{formatPrice(totalEstimatedPrice)}</div>
              )}
            </div>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              navigate({ to: "/book" });
              window.scrollTo(0, 0);
            }}
            className="flex w-full h-12 items-center justify-center rounded-xl bg-primary px-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02] hover:bg-navy-soft"
          >
            Continue to Booking
          </button>
        </div>
      </div>
    </>
  );
}
