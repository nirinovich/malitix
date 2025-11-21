import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';

// Define variant types for each component
export type HeroVariant = 'A' | 'B' | 'C';
export type ProblemVariant = 'A' | 'B' | 'C';
export type SolutionVariant = 'A' | 'B' | 'C';
export type StackVariant = 'A' | 'B' | 'C';
export type TestimonialVariant = 'A' | 'B' | 'C';
export type GuaranteeVariant = 'A' | 'B' | 'C';
export type CTAVariant = 'A' | 'B' | 'C';

interface VariantConfig {
  hero: HeroVariant;
  problem: ProblemVariant;
  solution: SolutionVariant;
  stack: StackVariant;
  testimonial: TestimonialVariant;
  guarantee: GuaranteeVariant;
  cta: CTAVariant;
}

interface VariantAnalytics {
  variant: string;
  impressions: number;
  clicks: number;
  conversions: number;
  lastUpdated: string;
}

interface ABTestContextType {
  variants: VariantConfig;
  setVariant: <K extends keyof VariantConfig>(
    component: K,
    variant: VariantConfig[K]
  ) => void;
  trackImpression: (component: keyof VariantConfig, variant: string) => void;
  trackClick: (component: keyof VariantConfig, variant: string, element: string) => void;
  trackConversion: (component: keyof VariantConfig, variant: string) => void;
  getAnalytics: (component: keyof VariantConfig) => VariantAnalytics[];
  isDevMode: boolean;
  toggleDevMode: () => void;
}

const ABTestContext = createContext<ABTestContextType | undefined>(undefined);

const STORAGE_KEY = 'malitix_ab_variants';
const ANALYTICS_KEY = 'malitix_ab_analytics';
const DEV_MODE_KEY = 'malitix_ab_devmode';

// Randomly assign a variant (A, B, or C)
const randomVariant = (): 'A' | 'B' | 'C' => {
  const rand = Math.random();
  if (rand < 0.33) return 'A';
  if (rand < 0.66) return 'B';
  return 'C';
};

const getInitialVariants = (): VariantConfig => {
  // Check if variants are stored in localStorage
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error('Failed to parse stored variants', e);
      }
    }
  }

  // Generate random variants for new users
  return {
    hero: randomVariant(),
    problem: randomVariant(),
    solution: randomVariant(),
    stack: randomVariant(),
    testimonial: randomVariant(),
    guarantee: randomVariant(),
    cta: randomVariant(),
  };
};

const getInitialAnalytics = (): Record<string, VariantAnalytics[]> => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(ANALYTICS_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error('Failed to parse stored analytics', e);
      }
    }
  }
  return {};
};

export function ABTestProvider({ children }: { children: ReactNode }) {
  const [variants, setVariants] = useState<VariantConfig>(getInitialVariants);
  const [analytics, setAnalytics] = useState<Record<string, VariantAnalytics[]>>(
    getInitialAnalytics
  );
  const [isDevMode, setIsDevMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(DEV_MODE_KEY) === 'true';
    }
    return false;
  });

  // Persist variants to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(variants));
    }
  }, [variants]);

  // Persist analytics to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(ANALYTICS_KEY, JSON.stringify(analytics));
    }
  }, [analytics]);

  // Persist dev mode
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(DEV_MODE_KEY, String(isDevMode));
    }
  }, [isDevMode]);

  const setVariant = <K extends keyof VariantConfig>(
    component: K,
    variant: VariantConfig[K]
  ) => {
    setVariants((prev) => ({
      ...prev,
      [component]: variant,
    }));
  };

  const updateAnalytics = useCallback((
    component: keyof VariantConfig,
    variant: string,
    type: 'impression' | 'click' | 'conversion'
  ) => {
    setAnalytics((prev) => {
      const componentAnalytics = prev[component] || [];
      const variantData = componentAnalytics.find((v) => v.variant === variant);

      if (variantData) {
        const updated = componentAnalytics.map((v) =>
          v.variant === variant
            ? {
                ...v,
                impressions:
                  type === 'impression' ? v.impressions + 1 : v.impressions,
                clicks: type === 'click' ? v.clicks + 1 : v.clicks,
                conversions:
                  type === 'conversion' ? v.conversions + 1 : v.conversions,
                lastUpdated: new Date().toISOString(),
              }
            : v
        );
        return { ...prev, [component]: updated };
      } else {
        const newData: VariantAnalytics = {
          variant,
          impressions: type === 'impression' ? 1 : 0,
          clicks: type === 'click' ? 1 : 0,
          conversions: type === 'conversion' ? 1 : 0,
          lastUpdated: new Date().toISOString(),
        };
        return { ...prev, [component]: [...componentAnalytics, newData] };
      }
    });
  }, []);

  const trackImpression = useCallback((component: keyof VariantConfig, variant: string) => {
    updateAnalytics(component, variant, 'impression');
  }, [updateAnalytics]);

  const trackClick = useCallback((
    component: keyof VariantConfig,
    variant: string,
    element: string
  ) => {
    updateAnalytics(component, variant, 'click');
    
    // Track with Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ab_test_click', {
        component,
        variant,
        element,
      });
    }
  }, [updateAnalytics]);

  const trackConversion = useCallback((component: keyof VariantConfig, variant: string) => {
    updateAnalytics(component, variant, 'conversion');
    
    // Track with Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ab_test_conversion', {
        component,
        variant,
      });
    }
  }, [updateAnalytics]);

  const getAnalytics = (component: keyof VariantConfig): VariantAnalytics[] => {
    return analytics[component] || [];
  };

  const toggleDevMode = () => {
    setIsDevMode((prev) => !prev);
  };

  return (
    <ABTestContext.Provider
      value={{
        variants,
        setVariant,
        trackImpression,
        trackClick,
        trackConversion,
        getAnalytics,
        isDevMode,
        toggleDevMode,
      }}
    >
      {children}
    </ABTestContext.Provider>
  );
}

export function useABTest() {
  const context = useContext(ABTestContext);
  if (context === undefined) {
    throw new Error('useABTest must be used within an ABTestProvider');
  }
  return context;
}
