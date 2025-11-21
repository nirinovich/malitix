import { useABTest } from '../../context/ABTestContext';
import { GuaranteeVariantA, GuaranteeVariantB, GuaranteeVariantC } from './CustomDevGuaranteeVariants';

export default function CustomDevGuarantee() {
  const { variants } = useABTest();

  return (
    <div id="guarantee-section">
      {variants.guarantee === 'B' && <GuaranteeVariantB />}
      {variants.guarantee === 'C' && <GuaranteeVariantC />}
      {variants.guarantee === 'A' && <GuaranteeVariantA />}
    </div>
  );
}

