/* ============================================
   A/B TESTING CONTEXT - CPU ILLUSTRATION VARIANTS
   Testing 3 different CPU illustration styles
   ============================================ */

import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type CPUVariant = 'circuit' | 'chip' | 'neural';
type ButtonVariant = 'V1' | 'V2' | 'V3';

interface ABTestContextType {
  cpuVariant: CPUVariant;
  setCPUVariant: (variant: CPUVariant) => void;
  buttonVariant: ButtonVariant;
  setButtonVariant: (variant: ButtonVariant) => void;
}

const ABTestContext = createContext<ABTestContextType | undefined>(undefined);

export function ABTestProvider({ children }: { children: ReactNode }) {
  const [cpuVariant, setCPUVariantState] = useState<CPUVariant>('circuit');
  const [buttonVariant, setButtonVariantState] = useState<ButtonVariant>('V3');

  useEffect(() => {
    // Load saved variants from localStorage
    const savedCPU = localStorage.getItem('cpu-variant') as CPUVariant;
    const savedButton = localStorage.getItem('button-variant') as ButtonVariant;
    
    if (savedCPU && ['circuit', 'chip', 'neural'].includes(savedCPU)) {
      setCPUVariantState(savedCPU);
    } else {
      // Random assignment for new users
      const randomCPU = (['circuit', 'chip', 'neural'] as CPUVariant[])[Math.floor(Math.random() * 3)];
      setCPUVariantState(randomCPU);
      localStorage.setItem('cpu-variant', randomCPU);
    }
    
    if (savedButton && ['V1', 'V2', 'V3'].includes(savedButton)) {
      setButtonVariantState(savedButton);
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

  return (
    <ABTestContext.Provider value={{ cpuVariant, setCPUVariant, buttonVariant, setButtonVariant }}>
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
