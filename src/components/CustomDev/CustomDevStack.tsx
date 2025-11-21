import { useABTest } from '../../context/ABTestContext';
import { StackVariantA, StackVariantB, StackVariantC } from './CustomDevStackVariants';

export default function CustomDevStack() {
  const { variants } = useABTest();

  return (
    <div id="stack-section">
      {variants.stack === 'B' && <StackVariantB />}
      {variants.stack === 'C' && <StackVariantC />}
      {variants.stack === 'A' && <StackVariantA />}
    </div>
  );
}

