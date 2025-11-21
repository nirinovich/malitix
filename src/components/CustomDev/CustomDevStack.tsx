import { useABTest } from '../../context/ABTestContext';
import { StackVariantA, StackVariantB, StackVariantC } from './CustomDevStackVariants';

export default function CustomDevStack() {
  const { variants } = useABTest();

  switch (variants.stack) {
    case 'B':
      return <StackVariantB />;
    case 'C':
      return <StackVariantC />;
    default:
      return <StackVariantA />;
  }
}

