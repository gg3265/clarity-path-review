import React, { createContext, useContext, useState, ReactNode } from "react";
import { DiagnosticTest } from "@/data/tests";

interface CartContextType {
  selectedTests: DiagnosticTest[];
  addTest: (test: DiagnosticTest) => void;
  removeTest: (testId: string) => void;
  clearCart: () => void;
  hasConflict: boolean;
  totalEstimatedPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [selectedTests, setSelectedTests] = useState<DiagnosticTest[]>([]);

  const addTest = (test: DiagnosticTest) => {
    setSelectedTests((prev) => {
      if (prev.some((t) => t.id === test.id)) return prev;
      return [...prev, test];
    });
  };

  const removeTest = (testId: string) => {
    setSelectedTests((prev) => prev.filter((t) => t.id !== testId));
  };

  const clearCart = () => {
    setSelectedTests([]);
  };

  const hasConflict = selectedTests.some(
    (t) => t.priceStatus === "Price confirmation required"
  );

  const totalEstimatedPrice = selectedTests.reduce((acc, test) => {
    if (test.priceStatus === "Confirmed" && test.sheet1Price) {
      return acc + test.sheet1Price;
    }
    if (test.priceStatus === "Confirmed" && test.sheet2MRP) {
      return acc + test.sheet2MRP;
    }
    if (test.priceStatus === "Sheet 2 Only" && test.sheet2MRP) {
      return acc + test.sheet2MRP;
    }
    return acc;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        selectedTests,
        addTest,
        removeTest,
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
