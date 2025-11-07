/* ============================================
   A/B TESTING CONTEXT - MULTIPLE COMPONENTS
   Testing different variants for Hero and PricingGrid
   ============================================ */

import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type CPUVariant = 'countdown' | 'countdown2' | 'rescue' | 'team';
type ButtonVariant = 'V1' | 'V2' | 'V3';
type BenefitsShowcaseVariant = 'A' | 'B';

interface Variants {
  benefitsShowcase: BenefitsShowcaseVariant;
}

interface ABTestContextType {
  cpuVariant: CPUVariant;
  setCPUVariant: (variant: CPUVariant) => void;
  buttonVariant: ButtonVariant;
  setButtonVariant: (variant: ButtonVariant) => void;
  variants: Variants;
  setBenefitsShowcaseVariant: (variant: BenefitsShowcaseVariant) => void;
}

const ABTestContext = createContext<ABTestContextType | undefined>(undefined);

export function ABTestProvider({ children }: { children: ReactNode }) {
  const [cpuVariant, setCPUVariantState] = useState<CPUVariant>('countdown');
  const [buttonVariant, setButtonVariantState] = useState<ButtonVariant>('V3');
  const [benefitsShowcaseVariant, setBenefitsShowcaseVariantState] = useState<BenefitsShowcaseVariant>('A');

  useEffect(() => {
    // Load saved variants from localStorage
    const savedCPU = localStorage.getItem('cpu-variant') as CPUVariant;
    const savedButton = localStorage.getItem('button-variant') as ButtonVariant;
    const savedBenefitsShowcase = localStorage.getItem('benefits-showcase-variant') as BenefitsShowcaseVariant;
    
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

    if (savedBenefitsShowcase && ['A', 'B'].includes(savedBenefitsShowcase)) {
      setBenefitsShowcaseVariantState(savedBenefitsShowcase);
    } else {
      // Random assignment for new users
      const randomBenefits = (['A', 'B'] as BenefitsShowcaseVariant[])[Math.floor(Math.random() * 2)];
      setBenefitsShowcaseVariantState(randomBenefits);
      localStorage.setItem('benefits-showcase-variant', randomBenefits);
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

  const setBenefitsShowcaseVariant = (variant: BenefitsShowcaseVariant) => {
    setBenefitsShowcaseVariantState(variant);
    localStorage.setItem('benefits-showcase-variant', variant);
  };

  const variants: Variants = {
    benefitsShowcase: benefitsShowcaseVariant,
  };

  return (
    <ABTestContext.Provider value={{ 
      cpuVariant, 
      setCPUVariant, 
      buttonVariant, 
      setButtonVariant,
      variants,
      setBenefitsShowcaseVariant,
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
