// @ts-nocheck
import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { X, ArrowRight } from "lucide-react";
import { LogoMark } from "@/components/Logo";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { fetchAdminTests, fetchAdminSettings } from "@/lib/api";

export function EntryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const { addTest } = useCart();
  const navigate = useNavigate();

  const { data: tests = [] } = useQuery({
    queryKey: ['tests'],
    queryFn: fetchAdminTests
  });

  const { data: settings = [] } = useQuery({
    queryKey: ['settings'],
    queryFn: fetchAdminSettings
  });

  const homeCollection = settings.find(s => s.key === 'home_collection')?.value || { freeRadiusKm: 5, fee: 100 };
  const promos = settings.find(s => s.key === 'promos')?.value || { bloodSugarPrice: 49, thyroidPrice: 299 };

  useEffect(() => {
    // Check if user has already seen the popup this session
    const hasSeen = sessionStorage.getItem("hasSeenEntryPopup");
    
    if (!hasSeen) {
      // Delay opening the popup
      const timer = setTimeout(() => {
        setIsRendered(true);
        // Small delay for entrance animation
        setTimeout(() => setIsOpen(true), 50);
        sessionStorage.setItem("hasSeenEntryPopup", "true");
      }, 700);
      
      return () => clearTimeout(timer);
    }
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closePopup();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const closePopup = () => {
    setIsOpen(false);
    // Wait for transition before unmounting
    setTimeout(() => setIsRendered(false), 300);
  };

  const handleBook = (testId: string) => {
    const test = tests.find(t => t.id === testId);
    if (test) {
      addTest(test);
      toast.success(`Added ${test.name} to booking`);
      navigate({ to: "/tests" });
    }
  };

  if (!isRendered) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div 
        className={cn(
          "absolute inset-0 bg-navy/40 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={closePopup}
      />
      
      {/* Modal */}
      <div 
        className={cn(
          "relative bg-white w-full max-w-[650px] rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden transition-all duration-300 ease-out",
          isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.97]"
        )}
      >
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 size-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors z-10"
          aria-label="Close"
        >
          <X className="size-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-10 pt-10 sm:pt-12 hide-scrollbar">
          <div className="flex flex-col items-center text-center">
            <LogoMark size={64} className="mx-auto shadow-soft mb-5" />
            
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-navy tracking-tight">SECOND OPINION CRL</h2>
            <h3 className="text-[0.6rem] sm:text-[0.65rem] font-bold tracking-[0.2em] uppercase text-muted-foreground mt-1 mb-8">Clinical Reference Laboratory</h3>

            <p className="text-xl sm:text-2xl font-display font-bold text-teal mb-3 leading-tight max-w-md mx-auto">
              Specialist Pathology Second Opinion <br className="hidden sm:block"/> & Diagnostic Consultation
            </p>
            
            <p className="text-sm sm:text-base text-muted-foreground font-medium mb-10 max-w-[420px] mx-auto leading-relaxed">
              Specialist pathology review for diagnostically challenging, complex and cancer-related cases.
            </p>

            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4 mb-10">
              <Link 
                to="/services/pathology-second-opinion-slide-review" 
                onClick={closePopup} 
                className="inline-flex items-center justify-center min-h-12 sm:min-h-14 px-8 rounded-full bg-navy text-white text-sm sm:text-base font-semibold shadow-soft hover:-translate-y-0.5 hover:shadow-md transition-all w-full sm:w-auto"
              >
                Request a Second Opinion
              </Link>
              <Link 
                to="/tests" 
                onClick={closePopup} 
                className="inline-flex items-center justify-center min-h-12 sm:min-h-14 px-8 rounded-full bg-teal/10 text-teal hover:bg-teal/20 text-sm sm:text-base font-semibold transition-all w-full sm:w-auto"
              >
                Book a Test
              </Link>
            </div>

            <div className="w-full pt-8 sm:pt-10 border-t border-border">
              <div className="text-[0.65rem] font-bold tracking-[0.15em] text-muted-foreground uppercase mb-5">
                Popular Tests
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6">
                <button 
                  onClick={() => { handleBook("t139"); closePopup(); }} 
                  className="group flex items-center justify-between sm:justify-center gap-4 bg-surface border border-border hover:border-teal/50 hover:bg-teal/5 rounded-2xl px-5 py-3.5 transition-all w-full sm:w-auto"
                >
                  <span className="font-semibold text-foreground text-sm">Blood Sugar</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-navy text-sm">₹{promos.bloodSugarPrice}</span>
                    <ArrowRight className="size-4 text-muted-foreground group-hover:text-teal transition-colors" />
                  </div>
                </button>
                <button 
                  onClick={() => { handleBook("t136"); closePopup(); }} 
                  className="group flex items-center justify-between sm:justify-center gap-4 bg-surface border border-border hover:border-teal/50 hover:bg-teal/5 rounded-2xl px-5 py-3.5 transition-all w-full sm:w-auto"
                >
                  <span className="font-semibold text-foreground text-sm">Thyroid Test</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-navy text-sm">₹{promos.thyroidPrice}</span>
                    <ArrowRight className="size-4 text-muted-foreground group-hover:text-teal transition-colors" />
                  </div>
                </button>
              </div>
              
              <div className="bg-teal/5 rounded-2xl p-4 sm:p-3 flex flex-col items-center justify-center border border-teal/10">
                <div className="text-[0.65rem] font-bold tracking-widest text-teal uppercase mb-1.5">Home Collection</div>
                <div className="text-xs font-medium text-muted-foreground">
                  <span className="text-green-600 font-bold">Free within {homeCollection.freeRadiusKm} km</span> <span className="mx-1">•</span> ₹{homeCollection.fee} beyond {homeCollection.freeRadiusKm} km
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
