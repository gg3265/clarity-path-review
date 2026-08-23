import { Link } from "@tanstack/react-router";
import { ArrowRight, Droplet, Activity } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { tests } from "@/data/tests";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";

export function FeaturedTestsBar() {
  const { addTest } = useCart();
  const navigate = useNavigate();

  const handleBook = (testId: string) => {
    const test = tests.find(t => t.id === testId);
    if (test) {
      addTest(test);
      toast.success(`Added ${test.name} to booking`);
      navigate({ to: "/tests" });
    }
  };

  return (
    <div className="bg-surface border-b border-border shadow-sm">
      <div className="container-page py-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div className="flex items-center text-sm">
            <span className="font-bold text-navy mr-2 uppercase tracking-wider text-xs">Home Collection:</span>
            <span className="text-green-600 font-bold mr-2">FREE within 5 km</span>
            <span className="text-muted-foreground">&bull; ₹200 beyond 5 km</span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 overflow-x-auto pb-1 sm:pb-0 hide-scrollbar">
            <div className="text-xs uppercase tracking-wider font-bold text-teal shrink-0">
              Popular Tests
            </div>
            
            <button 
              onClick={() => handleBook("t49")}
              className="group flex items-center gap-2 bg-background border border-border hover:border-teal/50 rounded-full px-4 py-1.5 transition-colors shrink-0"
            >
              <Droplet className="size-4 text-red-500" />
              <span className="text-sm font-semibold text-foreground group-hover:text-teal transition-colors">Blood Sugar</span>
              <span className="text-sm font-bold text-navy ml-1">₹49</span>
              <ArrowRight className="size-3 text-muted-foreground group-hover:text-teal transition-colors ml-1" />
            </button>
            
            <button 
              onClick={() => handleBook("t136")}
              className="group flex items-center gap-2 bg-background border border-border hover:border-teal/50 rounded-full px-4 py-1.5 transition-colors shrink-0"
            >
              <Activity className="size-4 text-teal" />
              <span className="text-sm font-semibold text-foreground group-hover:text-teal transition-colors">Thyroid Test</span>
              <span className="text-sm font-bold text-navy ml-1">₹299</span>
              <ArrowRight className="size-3 text-muted-foreground group-hover:text-teal transition-colors ml-1" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

