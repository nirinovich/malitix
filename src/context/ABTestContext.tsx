/* ============================================
   A/B TESTING CONTEXT - MULTIPLE COMPONENTS
   Testing different variants for Hero and PricingGrid
   ============================================ */

import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type CPUVariant = 'countdown' | 'countdown2' | 'rescue' | 'team';
type ButtonVariant = 'V1' | 'V2' | 'V3';
type PricingGridVariant = 'A' | 'B';

interface Variants {
  pricingGrid: PricingGridVariant;
}

interface ABTestContextType {
  cpuVariant: CPUVariant;
  setCPUVariant: (variant: CPUVariant) => void;
  buttonVariant: ButtonVariant;
  setButtonVariant: (variant: ButtonVariant) => void;
  variants: Variants;
  setPricingGridVariant: (variant: PricingGridVariant) => void;
}

const ABTestContext = createContext<ABTestContextType | undefined>(undefined);

export function ABTestProvider({ children }: { children: ReactNode }) {
  const [cpuVariant, setCPUVariantState] = useState<CPUVariant>('countdown');
  const [buttonVariant, setButtonVariantState] = useState<ButtonVariant>('V3');
  const [pricingGridVariant, setPricingGridVariantState] = useState<PricingGridVariant>('A');

  useEffect(() => {
    // Load saved variants from localStorage
    const savedCPU = localStorage.getItem('cpu-variant') as CPUVariant;
    const savedButton = localStorage.getItem('button-variant') as ButtonVariant;
    const savedPricingGrid = localStorage.getItem('pricing-grid-variant') as PricingGridVariant;
    
    if (savedCPU && ['countdown', 'countdown2', 'rescue', 'team'].includes(savedCPU)) {
      setCPUVariantState(savedCPU);
    } else {
      // Random assignment for new users
      const randomCPU = (['countdown', 'countdown2', 'rescue', 'team'] as CPUVariant[])[Math.floor(Math.random() * 4)];
      setCPUVariantState(randomCPU);
      localStorage.setItem('cpu-variant', randomCPU);
    }
    
    if (savedButton && ['V1', 'V2', 'V3'].includes(savedButton)) {
      setButtonVariantState(savedButton);
    }

    if (savedPricingGrid && ['A', 'B'].includes(savedPricingGrid)) {
      setPricingGridVariantState(savedPricingGrid);
    } else {
      // Random assignment for new users
      const randomPricing = (['A', 'B'] as PricingGridVariant[])[Math.floor(Math.random() * 2)];
      setPricingGridVariantState(randomPricing);
      localStorage.setItem('pricing-grid-variant', randomPricing);
    }
  }, []);

  const setCPUVariant = (variant: CPUVariant) => {
    setCPUVariantState(variant);
    localStorage.setItem('cpu-variant', variant);
  };

  const setButtonVariant = (variant: ButtonVariant) => {
    setButtonVariantState(variant);
    localStorage.setItem('button-variant', variant);
  };

  const setPricingGridVariant = (variant: PricingGridVariant) => {
    setPricingGridVariantState(variant);
    localStorage.setItem('pricing-grid-variant', variant);
  };

  const variants: Variants = {
    pricingGrid: pricingGridVariant,
  };

  return (
    <ABTestContext.Provider value={{ 
      cpuVariant, 
      setCPUVariant, 
      buttonVariant, 
      setButtonVariant,
      variants,
      setPricingGridVariant,
    }}>
      {children}
    </ABTestContext.Provider>
  );
}

export function useABTest() {
  const context = useContext(ABTestContext);
  if (!context) {
    throw new Error('useABTest must be used within ABTestProvider');
  }
  return context;
}
