import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type ButtonVariant = 'V1' | 'V2' | 'V3';

interface ABTestContextType {
  buttonVariant: ButtonVariant;
  setButtonVariant: (variant: ButtonVariant) => void;
}

const ABTestContext = createContext<ABTestContextType | undefined>(undefined);

export function ABTestProvider({ children }: { children: ReactNode }) {
  const [buttonVariant, setButtonVariantState] = useState<ButtonVariant>('V1');

  useEffect(() => {
    const savedButton = localStorage.getItem('button-variant') as ButtonVariant;
    if (savedButton && ['V1', 'V2', 'V3'].includes(savedButton)) {
      setButtonVariantState(savedButton);
    }
  }, []);

  const setButtonVariant = (variant: ButtonVariant) => {
    setButtonVariantState(variant);
    localStorage.setItem('button-variant', variant);
  };

  return (
    <ABTestContext.Provider value={{ buttonVariant, setButtonVariant }}>
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
