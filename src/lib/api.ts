import { supabase } from "./supabase";
import { tests as localTests, DiagnosticTest } from "@/data/tests";
import { packages as localPackages, HealthPackage } from "@/data/packages";

// App Settings Interface
export interface AppSettings {
  homeCollectionFreeRadiusKm: number;
  homeCollectionFee: number;
  promos: {
    bloodSugarPrice: number;
    thyroidPrice: number;
  };
}

export const DEFAULT_SETTINGS: AppSettings = {
  homeCollectionFreeRadiusKm: 5,
  homeCollectionFee: 200,
  promos: {
    bloodSugarPrice: 49,
    thyroidPrice: 299,
  }
};

export async function fetchTests(): Promise<DiagnosticTest[]> {
  try {
    const { data, error } = await supabase.from("tests").select("*").eq('is_active', true);
    
    if (error) throw error;
    
    if (data && data.length > 0) {
      return data.map(t => ({
        id: t.id,
        crlCode: t.crl_code,
        name: t.name,
        category: t.category,
        specimen: t.specimen,
        // Map price to sheet1Price for compatibility with existing CartContext
        sheet1Price: t.price,
        priceStatus: t.price_status || "Confirmed",
        notes: t.notes || t.description,
        aliases: t.aliases || [],
      }));
    }
  } catch (err) {
    console.error("Failed to fetch tests from Supabase, falling back to local data", err);
  }
  
  return localTests;
}

export async function fetchPackages(): Promise<HealthPackage[]> {
  try {
    const { data, error } = await supabase.from("packages").select("*").eq('is_active', true);
    
    if (error) throw error;
    
    if (data && data.length > 0) {
      return data.map(p => ({
        id: p.id,
        name: p.name,
        category: p.category,
        price: p.price,
        shortDescription: p.short_description || p.description,
        description: p.description,
        badge: p.badge,
        includedTests: p.included_tests || [],
        ctaText: "Book Package",
        bookingType: "booking" as const
      }));
    }
  } catch (err) {
    console.error("Failed to fetch packages from Supabase, falling back to local data", err);
  }
  
  return localPackages;
}

export async function fetchSettings(): Promise<AppSettings> {
  try {
    const { data, error } = await supabase.from("app_settings").select("*");
    
    if (error) throw error;
    
    if (data && data.length > 0) {
      const settings = { ...DEFAULT_SETTINGS };
      
      data.forEach(row => {
        if (row.key === 'home_collection') {
          settings.homeCollectionFreeRadiusKm = row.value.freeRadiusKm || settings.homeCollectionFreeRadiusKm;
          settings.homeCollectionFee = row.value.fee || settings.homeCollectionFee;
        } else if (row.key === 'promos') {
          settings.promos = { ...settings.promos, ...row.value };
        }
      });
      
      return settings;
    }
  } catch (err) {
    console.error("Failed to fetch settings from Supabase, falling back to defaults", err);
  }
  
  return DEFAULT_SETTINGS;
}

// Admin fetchers (includes inactive)
export async function fetchAdminTests() {
  const { data, error } = await supabase.from("tests").select("*").order('name');
  if (error) throw error;
  return data;
}

export async function fetchAdminPackages() {
  const { data, error } = await supabase.from("packages").select("*").order('category').order('name');
  if (error) throw error;
  return data;
}

export async function fetchAdminSettings() {
  const { data, error } = await supabase.from("app_settings").select("*");
  if (error) throw error;
  return data;
}
