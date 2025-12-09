import { useState, useEffect } from 'react';

type VariantType = 'A' | 'B' | 'C';

interface ABTestConfig {
  testName: string;
  variants: {
    A: string;
    B: string;
    C: string;
  };
}

const AB_TESTS: Record<string, ABTestConfig> = {
  hero: {
    testName: 'hero_section_variant',
    variants: {
      A: 'Animated floating cards left, headline right',
      B: 'Split layout with mockups, minimalist',
      C: 'Full-width immersive with gradient overlay',
    },
  },
  problem: {
    testName: 'problem_section_variant',
    variants: {
      A: 'Grid cards with icons and statistics',
      B: 'Numbered list with visual indicators',
      C: 'Alternating image-text layout',
    },
  },
  solution: {
    testName: 'solution_section_variant',
    variants: {
      A: 'Three-column service cards',
      B: 'Tabbed interface with features',
      C: 'Timeline/carousel layout',
    },
  },
  techStack: {
    testName: 'techstack_section_variant',
    variants: {
      A: '2x3 grid badges',
      B: 'Horizontal scrollable list',
      C: 'Categorized columns',
    },
  },
  features: {
    testName: 'features_section_variant',
    variants: {
      A: '2x2 grid cards',
      B: 'Bento-style layout',
      C: 'Numbered feature list',
    },
  },
  caseStudies: {
    testName: 'casestudies_section_variant',
    variants: {
      A: 'Card grid with images',
      B: 'Carousel slider',
      C: 'Horizontal scroll cards',
    },
  },
  testimonials: {
    testName: 'testimonials_section_variant',
    variants: {
      A: 'Static grid (3-4 cards)',
      B: 'Auto-rotating carousel',
      C: 'Side-scrolling cards',
    },
  },
  process: {
    testName: 'process_section_variant',
    variants: {
      A: 'Vertical timeline',
      B: 'Horizontal step indicators',
      C: 'Accordion-style steps',
    },
  },
  pricing: {
    testName: 'pricing_section_variant',
    variants: {
      A: 'Three-tier cards',
      B: 'Toggle annual/monthly pricing',
      C: 'Comparison table layout',
    },
  },
  faq: {
    testName: 'faq_section_variant',
    variants: {
      A: 'Traditional accordion',
      B: 'Tabs with content panels',
      C: 'FAQ grid + search',
    },
  },
  cta: {
    testName: 'cta_section_variant',
    variants: {
      A: 'Dual buttons (CTA + Secondary)',
      B: 'Single prominent CTA with benefits',
      C: 'Form integration (email signup)',
    },
  },
};

/**
 * Hook for A/B testing - returns variant for a given section
 * Variants are randomly assigned on first load and persisted in localStorage
 */
export function useABTestVariant(section: keyof typeof AB_TESTS): VariantType {
  const [variant, setVariant] = useState<VariantType>('A');

  useEffect(() => {
    const config = AB_TESTS[section];
    const storageKey = `ab_test_${config.testName}`;

    // Check if variant already exists in localStorage
    const savedVariant = localStorage.getItem(storageKey) as VariantType | null;

    if (savedVariant && ['A', 'B', 'C'].includes(savedVariant)) {
      setVariant(savedVariant);
    } else {
      // Randomly assign a variant
      const variants: VariantType[] = ['A', 'B', 'C'];
      const newVariant = variants[Math.floor(Math.random() * variants.length)];
      localStorage.setItem(storageKey, newVariant);
      setVariant(newVariant);
    }
  }, [section]);

  return variant;
}

/**
 * Get all current A/B test variants for analytics
 */
export function getAllABTestVariants(): Record<string, VariantType> {
  const variants: Record<string, VariantType> = {};

  Object.keys(AB_TESTS).forEach((section) => {
    const config = AB_TESTS[section as keyof typeof AB_TESTS];
    const storageKey = `ab_test_${config.testName}`;
    const saved = localStorage.getItem(storageKey) as VariantType | null;
    variants[section] = (saved && ['A', 'B', 'C'].includes(saved) ? saved : 'A') as VariantType;
  });

  return variants;
}

/**
 * Reset all A/B test variants (for testing purposes)
 */
export function resetABTests(): void {
  Object.keys(AB_TESTS).forEach((section) => {
    const config = AB_TESTS[section as keyof typeof AB_TESTS];
    const storageKey = `ab_test_${config.testName}`;
    localStorage.removeItem(storageKey);
  });
}

export { AB_TESTS };
