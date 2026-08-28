import { Home, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export type CollectionMethod = "HOME" | "WALK_IN" | null;

interface CollectionSelectorProps {
  selected: CollectionMethod;
  onChange: (method: CollectionMethod) => void;
}

export function CollectionSelector({ selected, onChange }: CollectionSelectorProps) {
  return (
    <div className="grid sm:grid-cols-2 gap-4 mb-8">
      <button 
        type="button"
        onClick={() => onChange("HOME")}
        className={cn(
          "flex flex-col items-start text-left p-6 rounded-3xl border-2 transition-all duration-200",
          selected === "HOME" 
            ? "border-primary bg-primary/5 shadow-md" 
            : "border-border bg-surface hover:border-primary/30"
        )}
      >
        <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors", selected === "HOME" ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground border border-border")}>
          <Home className="size-6" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Home Collection</h3>
        <p className="text-sm text-muted-foreground mb-2">A sample collection professional visits your preferred location in Pune.</p>
        <div className="bg-background rounded-lg border border-border p-3 w-full mb-6 text-sm font-medium">
          <div className="flex justify-between items-center mb-1">
            <span className="text-foreground">Within 5 km</span>
            <span className="text-green-600 font-bold">FREE</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-foreground">Beyond 5 km</span>
            <span className="text-foreground font-bold">₹100</span>
          </div>
        </div>
        
        <div className={cn("mt-auto text-sm font-bold", selected === "HOME" ? "text-primary" : "text-muted-foreground")}>
          {selected === "HOME" ? "Selected" : "Select Home Collection"}
        </div>
      </button>

      <button 
        type="button"
        onClick={() => onChange("WALK_IN")}
        className={cn(
          "flex flex-col items-start text-left p-6 rounded-3xl border-2 transition-all duration-200",
          selected === "WALK_IN" 
            ? "border-primary bg-primary/5 shadow-md" 
            : "border-border bg-surface hover:border-primary/30"
        )}
      >
        <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors", selected === "WALK_IN" ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground border border-border")}>
          <MapPin className="size-6" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Walk-in Centre</h3>
        <p className="text-sm text-muted-foreground mb-6">Visit the SECOND OPINION CRL centre in Pune for your test.</p>
        
        <div className={cn("mt-auto text-sm font-bold", selected === "WALK_IN" ? "text-primary" : "text-muted-foreground")}>
          {selected === "WALK_IN" ? "Selected" : "Select Walk-in Centre"}
        </div>
      </button>
    </div>
  );
}
