import { useABTest } from '../../context/ABTestContext';
import { BenefitsShowcaseVariantA, BenefitsShowcaseVariantB } from './BenefitsShowcaseVariants';

export default function BenefitsShowcase() {
  const { variants } = useABTest();
  const variant = variants.benefitsShowcase || 'A';

  // Render based on A/B test variant
  if (variant === 'B') {
    return <BenefitsShowcaseVariantB />;
  }
  
  return <BenefitsShowcaseVariantA />;
}
