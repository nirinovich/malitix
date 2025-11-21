import { useABTest } from '../../context/ABTestContext';
import { CTAVariantA, CTAVariantB, CTAVariantC } from './CustomDevCTAVariants';

export default function CustomDevCTA() {
  const { variants } = useABTest();

  return (
    <div>
      {variants.cta === 'B' && <CTAVariantB />}
      {variants.cta === 'C' && <CTAVariantC />}
      {variants.cta === 'A' && <CTAVariantA />}
    </div>
  );
}

