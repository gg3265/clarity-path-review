import React, { createContext, useContext, useState, ReactNode } from "react";
import { DiagnosticTest } from "@/data/tests";
import { HealthPackage } from "@/data/packages";

interface CartContextType {
  selectedTests: DiagnosticTest[];
  selectedPackages: HealthPackage[];
  addTest: (test: DiagnosticTest) => void;
  removeTest: (testId: string) => void;
  addPackage: (pkg: HealthPackage) => void;
  removePackage: (pkgId: string) => void;
  clearCart: () => void;
  hasConflict: boolean;
  totalEstimatedPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [selectedTests, setSelectedTests] = useState<DiagnosticTest[]>([]);
  const [selectedPackages, setSelectedPackages] = useState<HealthPackage[]>([]);

  const addTest = (test: DiagnosticTest) => {
    setSelectedTests((prev) => {
      if (prev.some((t) => t.id === test.id)) return prev;
      return [...prev, test];
    });
  };

  const removeTest = (testId: string) => {
    setSelectedTests((prev) => prev.filter((t) => t.id !== testId));
  };

  const addPackage = (pkg: HealthPackage) => {
    setSelectedPackages((prev) => {
      if (prev.some((p) => p.id === pkg.id)) return prev;
      return [...prev, pkg];
    });
  };

  const removePackage = (pkgId: string) => {
    setSelectedPackages((prev) => prev.filter((p) => p.id !== pkgId));
  };

  const clearCart = () => {
    setSelectedTests([]);
    setSelectedPackages([]);
  };

  const hasConflict = selectedTests.some(
    (t) => t.priceStatus === "Price confirmation required"
  );

  const testsPrice = (selectedTests || []).reduce((acc, test) => {
    if (test?.priceStatus === "Confirmed" && test?.sheet1Price) {
      return acc + test.sheet1Price;
    }
    if (test?.priceStatus === "Confirmed" && !test?.sheet1Price && test?.sheet2MRP) {
      return acc + test.sheet2MRP;
    }
    if (test?.priceStatus === "Sheet 2 Only" && test?.sheet2MRP) {
      return acc + test.sheet2MRP;
    }
    return acc;
  }, 0);

  const packagesPrice = (selectedPackages || []).reduce((acc, pkg) => acc + (pkg?.price || 0), 0);
  
  const totalEstimatedPrice = testsPrice + packagesPrice;

  return (
    <CartContext.Provider
      value={{
        selectedTests,
        selectedPackages,
        addTest,
        removeTest,
        addPackage,
        removePackage,
        clearCart,
        hasConflict,
        totalEstimatedPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
