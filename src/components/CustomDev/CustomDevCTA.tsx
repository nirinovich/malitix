import { useABTest } from '../../context/ABTestContext';
import { CTAVariantA, CTAVariantB, CTAVariantC } from './CustomDevCTAVariants';

export default function CustomDevCTA() {
  const { variants } = useABTest();

  switch (variants.cta) {
    case 'B':
      return <CTAVariantB />;
    case 'C':
      return <CTAVariantC />;
    default:
      return <CTAVariantA />;
  }
}

