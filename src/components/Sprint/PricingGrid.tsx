import { useABTest } from '../../context/ABTestContext';
import { PricingGridVariantA, PricingGridVariantB } from './PricingGridVariants';

export default function PricingGrid() {
  const { variants } = useABTest();
  const variant = variants.pricingGrid || 'A';

  // Render based on A/B test variant
  if (variant === 'B') {
    return <PricingGridVariantB />;
  }
  
  return <PricingGridVariantA />;
}
