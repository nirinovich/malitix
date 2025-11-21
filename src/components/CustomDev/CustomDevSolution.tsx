import { useABTest } from '../../context/ABTestContext';
import { SolutionVariantA, SolutionVariantB, SolutionVariantC } from './CustomDevSolutionVariants';

export default function CustomDevSolution() {
  const { variants } = useABTest();

  switch (variants.solution) {
    case 'B':
      return <SolutionVariantB />;
    case 'C':
      return <SolutionVariantC />;
    default:
      return <SolutionVariantA />;
  }
}
