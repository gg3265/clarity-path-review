import { supabase } from "./supabase";
import { tests as localTests, DiagnosticTest } from "@/data/tests";
import { packages as localPackages, HealthPackage } from "@/data/packages";

// App Settings Interface
export interface AppSettings {
  homeCollectionFreeRadiusKm: number;
  homeCollectionFee: number;
  freePincodes: string[];
  promos: {
    bloodSugarPrice: number;
    thyroidPrice: number;
  };
}

export const DEFAULT_SETTINGS: AppSettings = {
  homeCollectionFreeRadiusKm: 5,
  homeCollectionFee: 100,
  freePincodes: ["411030"],
  promos: {
    bloodSugarPrice: 49,
    thyroidPrice: 299,
  }
};

export async function fetchTests(): Promise<DiagnosticTest[]> {
  try {
    const { data, error } = await supabase.from("tests").select("*");
    
    if (error) {
      console.warn("Failed to fetch tests from Supabase, returning local baseline.", error.message);
      return localTests;
    }
    
    if (data) {
      const overrides = new Map(data.map(t => [t.id, t]));
      const localMap = new Map(localTests.map(t => [t.id, true]));
      
      const mergedTests = localTests.map(t => {
        const override = overrides.get(t.id);
        if (override) {
          const finalPrice = override.price !== null ? Number(override.price) : t.sheet1Price;
          return {
            ...t,
            sheet1Price: finalPrice,
            price: finalPrice, // ensure price is set everywhere
            priceStatus: override.price_status || t.priceStatus,
            name: override.name || t.name,
            category: override.category || t.category,
            specimen: override.specimen || t.specimen,
            crlCode: override.crl_code || t.crlCode,
          };
        }
        return {
          ...t,
          price: t.sheet1Price // fallback
        };
      });

      data.forEach(t => {
        if (!localMap.has(t.id) && t.is_active !== false) {
          mergedTests.push({
            id: t.id,
            crlCode: t.crl_code || '',
            name: t.name,
            category: t.category || 'Other',
            specimen: t.specimen || '',
            sheet1Price: t.price !== null ? Number(t.price) : 0,
            price: t.price !== null ? Number(t.price) : 0,
            priceStatus: (t.price_status as any) || 'Confirmed',
            notes: t.notes || ''
          });
        }
      });
      
      return mergedTests.filter(t => t.priceStatus !== "Inactive"); // safety filter
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
          if (Array.isArray(row.value.freePincodes)) {
            settings.freePincodes = row.value.freePincodes;
          }
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
    
    const overrides = new Map((data || []).map(t => [t.id, t]));
    const localMap = new Map(localTests.map(t => [t.id, true]));
    
    const mergedTests = localTests.map(t => {
      const override = overrides.get(t.id);
      if (override) {
        const finalPrice = override.price !== null ? Number(override.price) : t.sheet1Price;
        return {
          ...t,
          price: finalPrice,
          sheet1Price: finalPrice, // Fix for TestSearch reading fetchAdminTests
          price_status: override.price_status || t.priceStatus,
          priceStatus: override.price_status || t.priceStatus,
          is_active: override.is_active !== false,
          name: override.name || t.name,
          category: override.category || t.category,
          specimen: override.specimen || t.specimen,
          crl_code: override.crl_code || t.crlCode,
          crlCode: override.crl_code || t.crlCode,
        };
      }
      return {
        ...t,
        price: t.sheet1Price,
        price_status: t.priceStatus,
        is_active: true
      };
    });

    if (data) {
      data.forEach(t => {
        if (!localMap.has(t.id)) {
          mergedTests.push({
            id: t.id,
            crlCode: t.crl_code,
            crl_code: t.crl_code,
            name: t.name,
            category: t.category || 'Other',
            specimen: t.specimen,
            sheet1Price: t.price !== null ? Number(t.price) : 0,
            price: t.price !== null ? Number(t.price) : 0,
            priceStatus: t.price_status || 'Confirmed',
            price_status: t.price_status || 'Confirmed',
            is_active: t.is_active !== false,
            notes: t.notes
          } as any);
        }
      });
    }

    return mergedTests.sort((a, b) => a.name.localeCompare(b.name));
    
  } catch (err) {
    console.error("Failed to merge Supabase admin tests", err);
  }
  return localTests.map(t => ({ ...t, price: t.sheet1Price, price_status: t.priceStatus, is_active: true }));
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
