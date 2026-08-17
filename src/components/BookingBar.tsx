import { useCart } from "@/context/CartContext";
import { Link } from "@tanstack/react-router";
import { ChevronRight, AlertCircle } from "lucide-react";

export function BookingBar() {
  const { selectedTests, totalEstimatedPrice, hasConflict } = useCart();

  if (selectedTests.length === 0) return null;

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 p-4 shadow-lift backdrop-blur-xl md:hidden animate-fade-in slide-in-from-bottom-full">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-bold text-foreground">
              {selectedTests.length} {selectedTests.length === 1 ? "Test" : "Tests"} Selected
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              {hasConflict ? (
                <span className="flex items-center gap-1 text-amber-600 font-medium">
                  <AlertCircle className="size-3" /> Confirmation Required
                </span>
              ) : (
                <span className="font-semibold text-foreground">₹{totalEstimatedPrice}</span>
              )}
            </div>
          </div>
          <Link
            to="/book"
            className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-soft"
          >
            View Booking
            <ChevronRight className="ml-1 size-4" />
          </Link>
        </div>
      </div>

      {/* Desktop Floating Summary */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50 animate-scale-in">
        <div className="w-[340px] rounded-2xl border border-border bg-background/95 p-5 shadow-2xl backdrop-blur-xl">
          <div className="mb-4 font-display text-lg font-bold text-foreground">
            Your Tests
          </div>
          
          <div className="max-h-[300px] overflow-y-auto pr-2 space-y-3 mb-4">
            {selectedTests.map((test) => (
              <div key={test.id} className="flex justify-between items-start text-sm">
                <span className="font-medium text-foreground pr-2 truncate">{test.name}</span>
                <span className="font-semibold shrink-0">
                  {test.priceStatus === "Confirmed" ? `₹${test.sheet1Price || test.sheet2MRP}` : 
                   test.priceStatus === "Sheet 2 Only" ? `₹${test.sheet2MRP}` : 
                   <AlertCircle className="size-4 text-amber-600 inline" />}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-4 mb-5 flex justify-between items-end">
            <div>
              <div className="text-sm font-bold text-muted-foreground">Total Tests</div>
              <div className="text-lg font-bold text-foreground">{selectedTests.length}</div>
            </div>
            <div className="text-right">
              {hasConflict ? (
                <div className="text-xs font-semibold text-amber-600">Price TBA</div>
              ) : (
                <div className="text-2xl font-display font-extrabold text-foreground">₹{totalEstimatedPrice}</div>
              )}
            </div>
          </div>

          <Link
            to="/book"
            className="flex w-full h-12 items-center justify-center rounded-xl bg-primary px-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02] hover:bg-navy-soft"
          >
            Continue to Booking
          </Link>
        </div>
      </div>
    </>
  );
}
