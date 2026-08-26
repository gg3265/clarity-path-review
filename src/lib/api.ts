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
    // Fetch any overrides from Supabase (ignoring is_active if it causes errors, just get price updates)
    const { data, error } = await supabase.from("tests").select("id, price, price_status, is_active");
    
    if (error) {
      console.warn("Failed to fetch test overrides from Supabase, returning local baseline.", error.message);
      return localTests;
    }
    
    // Merge Supabase data over localTests
    if (data && data.length > 0) {
      const overrides = new Map(data.map(t => [t.id, t]));
      
      return localTests.map(t => {
        const override = overrides.get(t.id);
        if (override) {
          // If the admin deactivated it (and is_active exists), we could filter it out. 
          // For now we just merge the price.
          return {
            ...t,
            sheet1Price: override.price !== null ? Number(override.price) : t.sheet1Price,
            priceStatus: override.price_status || t.priceStatus,
          };
        }
        return t;
      });
    }
  } catch (err) {
    console.error("Failed to merge Supabase tests", err);
  }
  
  return localTests;
}

export async function fetchPackages(): Promise<HealthPackage[]> {
  try {
    const { data, error } = await supabase.from("packages").select("id, price, is_active");
    
    if (error) {
      console.warn("Failed to fetch packages from Supabase, returning local baseline.", error.message);
      return localPackages;
    }
    
    if (data && data.length > 0) {
      const overrides = new Map(data.map(p => [p.id, p]));
      return localPackages.map(p => {
        const override = overrides.get(p.id);
        if (override) {
          return {
            ...p,
            price: override.price !== null ? Number(override.price) : p.price
          };
        }
        return p;
      });
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
  try {
    const { data, error } = await supabase.from("tests").select("*");
    if (error) {
      console.warn("Failed to fetch admin tests from Supabase, returning local baseline.", error.message);
      return localTests;
    }
    
    // Merge Supabase overrides over local baseline
    const overrides = new Map((data || []).map(t => [t.id, t]));
    
    return localTests.map(t => {
      const override = overrides.get(t.id);
      if (override) {
        return {
          ...t,
          // Admin UI expects 'price' but localTests uses 'sheet1Price'
          price: override.price !== null ? Number(override.price) : t.sheet1Price,
          price_status: override.price_status || t.priceStatus,
          is_active: override.is_active !== false // default true
        };
      }
      return {
        ...t,
        price: t.sheet1Price,
        price_status: t.priceStatus,
        is_active: true
      };
    }).sort((a, b) => a.name.localeCompare(b.name));
    
  } catch (err) {
    console.error("Admin tests fetch failed:", err);
    return localTests.map(t => ({ ...t, price: t.sheet1Price, price_status: t.priceStatus, is_active: true }));
  }
}

export async function fetchAdminPackages() {
  try {
    const { data, error } = await supabase.from("packages").select("*");
    if (error) {
      console.warn("Failed to fetch admin packages from Supabase, returning local baseline.", error.message);
      return localPackages;
    }
    
    const overrides = new Map((data || []).map(p => [p.id, p]));
    return localPackages.map(p => {
      const override = overrides.get(p.id);
      if (override) {
        return {
          ...p,
          price: override.price !== null ? Number(override.price) : p.price,
          is_active: override.is_active !== false
        };
      }
      return {
        ...p,
        is_active: true
      };
    }).sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
  } catch (err) {
    console.error("Admin packages fetch failed:", err);
    return localPackages.map(p => ({ ...p, is_active: true }));
  }
}

export async function fetchAdminSettings() {
  const { data, error } = await supabase.from("app_settings").select("*");
  if (error) throw error;
  return data;
}
