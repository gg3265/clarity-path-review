import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { ContactAction } from "@/components/ContactAction";

export const Route = createFileRoute("/confirmation")({
  component: ConfirmationPage,
});

function ConfirmationPage() {
  const [bookingData, setBookingData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("lastBookingConfirmation");
      if (stored) {
        setBookingData(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) return <div className="min-h-screen bg-surface flex items-center justify-center">Loading...</div>;

  if (!bookingData) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center py-20 px-4">
        <div className="max-w-md w-full bg-background rounded-3xl p-8 shadow-xl text-center border border-border">
          <div className="mx-auto w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
            <AlertCircle className="size-8 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-3">
            Booking information is unavailable.
          </h1>
          <p className="text-muted-foreground mb-8 text-sm">
            We couldn't find your recent booking details, or the session has expired.
          </p>
          <div className="space-y-3">
            <Link to="/tests" className="flex w-full h-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-semibold transition-colors hover:bg-navy-soft">
              Start a New Booking →
            </Link>
            <Link to="/" className="flex w-full h-12 items-center justify-center rounded-xl border border-border text-foreground font-semibold transition-colors hover:bg-surface">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const { ref, patient, selectedTests, selectedPackages, totalEstimatedPrice, collectionMethod, address } = bookingData;

  const itemNames = [
    ...(selectedPackages || []).map((p: any) => p.name),
    ...(selectedTests || []).map((t: any) => t.name)
  ].join(", ");

  const whatsappMessage = `Hello SECOND OPINION CRL, I have submitted a booking request.

Booking ID: ${ref}
Patient: ${patient.name}
Items: ${itemNames}
Collection: ${collectionMethod === "HOME" ? "Home Collection" : "Walk-in Centre"}
Amount: ₹${totalEstimatedPrice} ${collectionMethod === "HOME" ? "(+ ₹200 if beyond 5km)" : ""}

Please confirm my booking.`;

  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-2xl w-full bg-background rounded-3xl p-6 sm:p-10 shadow-xl border border-border">
        <div className="text-center mb-10">
          <div className="mx-auto w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="size-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-display font-extrabold text-foreground mb-3">
            Booking Confirmed
          </h1>
          <p className="text-muted-foreground">
            Thank you. Your booking request has been received.
          </p>
        </div>
        
        <div className="bg-surface rounded-2xl p-6 sm:p-8 mb-8 border border-border/50">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-1">
                Booking ID
              </div>
              <div className="text-lg font-mono font-bold text-foreground">
                {ref}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-1">
                Patient Name
              </div>
              <div className="text-lg font-semibold text-foreground">
                {patient.name}
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-2">
                Selected Items
              </div>
              <div className="space-y-2">
                {selectedPackages?.map((pkg: any) => (
                  <div key={pkg.id} className="flex items-center justify-between border-b border-border/50 pb-2 last:border-0 last:pb-0">
                    <span className="font-semibold text-primary">{pkg.name} (Package)</span>
                    <span className="font-bold text-foreground">₹{pkg.price}</span>
                  </div>
                ))}
                {selectedTests?.map((test: any) => (
                  <div key={test.id} className="flex items-center justify-between border-b border-border/50 pb-2 last:border-0 last:pb-0">
                    <span className="font-medium text-foreground">{test.name}</span>
                    <span className="font-bold text-foreground">₹{test.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-1">
                Total Amount
              </div>
              <div className="text-xl font-bold text-foreground">
                ₹{totalEstimatedPrice}
              </div>
              {collectionMethod === "HOME" && (
                <div className="text-xs text-muted-foreground mt-1 font-medium">
                  + ₹200 (if beyond 5 km)
                </div>
              )}
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-1">
                Collection Method
              </div>
              <div className="text-base font-semibold text-foreground">
                {collectionMethod === "HOME" ? "Home Collection" : "Walk-in"}
              </div>
            </div>
            
            <div className="sm:col-span-2">
              <div className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-1">
                {collectionMethod === "HOME" ? "Home Address" : "Centre Address"}
              </div>
              <div className="text-sm font-medium text-foreground">
                {collectionMethod === "HOME" ? (
                  `${address.addressLine1}, ${address.addressLine2 ? address.addressLine2 + ', ' : ''}${address.area}, ${address.city}, ${address.state} ${address.pincode}`
                ) : (
                  "SECOND OPINION CRL, 557, Vireen Heights, 3rd floor, Laxmi Road, Sadashiv Peth, Pune 411030"
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a 
            href={`https://wa.me/919359777222?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 w-full h-12 inline-flex items-center justify-center rounded-xl font-semibold text-white transition-colors bg-[#25D366] hover:bg-[#20bd5a]"
          >
            Send Details on WhatsApp
          </a>
          <a 
            href="tel:9359777222"
            className="flex-1 w-full h-12 inline-flex items-center justify-center rounded-xl font-semibold text-primary border border-primary transition-colors hover:bg-primary/5"
          >
            Call 9359777222
          </a>
        </div>
        <div className="mt-6 text-center">
          <Link to="/" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}