import { useState } from "react";
import { AlertCircle, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AddressData {
  addressLine1: string;
  addressLine2: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
}

interface AddressFormProps {
  value: AddressData;
  onChange: (value: AddressData) => void;
  title?: string;
  showTimeFields?: boolean;
  date?: string;
  time?: string;
  onDateChange?: (date: string) => void;
  onTimeChange?: (time: string) => void;
}

export function AddressForm({ 
  value, 
  onChange, 
  title = "Collection Address",
  showTimeFields = false,
  date,
  time,
  onDateChange,
  onTimeChange
}: AddressFormProps) {
  
  const [locationLoading, setLocationLoading] = useState(false);

  // Live validation logic for Pune
  const isCityValid = value.city.toLowerCase().trim() === "pune" || value.city.trim() === "";
  const isStateValid = value.state.toLowerCase().trim() === "maharashtra" || value.state.trim() === "";
  
  const handleLocationDetect = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    
    setLocationLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          // Since we don't have a backend geocoding API set up, we'll use OpenStreetMap Nominatim
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}&zoom=18&addressdetails=1`);
          const data = await res.json();
          
          if (data && data.address) {
            onChange({
              ...value,
              area: data.address.suburb || data.address.neighbourhood || data.address.residential || value.area,
              city: data.address.city || data.address.town || data.address.state_district || "Pune",
              state: data.address.state || "Maharashtra",
              pincode: data.address.postcode || value.pincode,
            });
          }
        } catch (error) {
          console.error("Failed to detect location", error);
        } finally {
          setLocationLoading(false);
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        setLocationLoading(false);
      },
      { timeout: 10000 }
    );
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-top-4">
      <div className="bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft space-y-6">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          
          <button 
            type="button" 
            onClick={handleLocationDetect}
            disabled={locationLoading}
            className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-navy-soft transition-colors"
          >
            <MapPin className="size-3.5" />
            {locationLoading ? "Detecting..." : "Use My Location"}
          </button>
        </div>
        
        <button 
            type="button" 
            onClick={handleLocationDetect}
            disabled={locationLoading}
            className="sm:hidden flex w-full h-10 items-center justify-center gap-1.5 rounded-lg border border-primary/30 bg-primary/5 text-sm font-semibold text-primary transition-colors"
          >
            <MapPin className="size-4" />
            {locationLoading ? "Detecting..." : "Use My Location"}
        </button>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">House / Flat / Building *</label>
            <input 
              required 
              type="text" 
              value={value.addressLine1} 
              onChange={e => onChange({...value, addressLine1: e.target.value})} 
              className="w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all" 
              placeholder="E.g. Flat 402, Sai Residency" 
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Street / Locality *</label>
              <input 
                required 
                type="text" 
                value={value.area} 
                onChange={e => onChange({...value, area: e.target.value})} 
                className="w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all" 
                placeholder="E.g. Kothrud" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Pincode *</label>
              <input 
                required 
                type="text" 
                pattern="[0-9]{6}"
                title="Please enter a valid 6-digit Pincode"
                value={value.pincode} 
                onChange={e => onChange({...value, pincode: e.target.value.replace(/\D/g, '').slice(0,6)})} 
                className="w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all" 
                placeholder="6-digit Pincode" 
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">City *</label>
              <input 
                required 
                type="text" 
                value={value.city} 
                onChange={e => onChange({...value, city: e.target.value})} 
                className={cn(
                  "w-full h-12 bg-background border rounded-xl px-4 focus:outline-none focus:ring-4 transition-all",
                  !isCityValid ? "border-destructive focus:border-destructive/50 focus:ring-destructive/10" : "border-border focus:border-primary/50 focus:ring-primary/5"
                )} 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">State *</label>
              <input 
                required 
                type="text" 
                value={value.state} 
                onChange={e => onChange({...value, state: e.target.value})} 
                className={cn(
                  "w-full h-12 bg-background border rounded-xl px-4 focus:outline-none focus:ring-4 transition-all",
                  !isStateValid ? "border-destructive focus:border-destructive/50 focus:ring-destructive/10" : "border-border focus:border-primary/50 focus:ring-primary/5"
                )} 
              />
            </div>
          </div>
        </div>

        {/* Live Validation Messages */}
        {(!isCityValid || !isStateValid) ? (
          <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-xl flex gap-3 text-sm text-destructive font-medium">
            <AlertCircle className="size-5 shrink-0" />
            <p>Sorry, home collection is currently available only in Pune, Maharashtra. Please enter a Pune address to continue.</p>
          </div>
        ) : (value.city.toLowerCase().trim() === "pune") ? (
          <div className="text-sm text-muted-foreground bg-green-50 text-green-700 p-3 rounded-xl border border-green-200">
            ✓ Pune address entered. Serviceability will be confirmed by our team.
          </div>
        ) : null}

      </div>

      {showTimeFields && onDateChange && onTimeChange && (
        <div className="bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft space-y-6">
          <h3 className="text-xl font-bold text-foreground border-b border-border pb-4">Preferred Time</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Date (Optional)</label>
              <input 
                type="date" 
                value={date} 
                onChange={e => onDateChange(e.target.value)} 
                className="w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Time (Optional)</label>
              <select 
                value={time} 
                onChange={e => onTimeChange(e.target.value)} 
                className="w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all appearance-none"
              >
                <option value="">Preferred time slot</option>
                <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
                <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
              </select>
            </div>
          </div>
          <p className="text-xs font-medium text-muted-foreground mt-2">
            Note: Our team will call you to confirm the exact appointment time.
          </p>
        </div>
      )}
    </div>
  );
}
