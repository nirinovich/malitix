import { useABTest } from '../../context/ABTestContext';
import { GuaranteeVariantA, GuaranteeVariantB, GuaranteeVariantC } from './CustomDevGuaranteeVariants';

export default function CustomDevGuarantee() {
  const { variants } = useABTest();

  switch (variants.guarantee) {
    case 'B':
      return <GuaranteeVariantB />;
    case 'C':
      return <GuaranteeVariantC />;
    default:
      return <GuaranteeVariantA />;
  }
}

