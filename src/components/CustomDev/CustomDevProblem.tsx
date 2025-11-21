import { useABTest } from '../../context/ABTestContext';
import { ProblemVariantA, ProblemVariantB, ProblemVariantC } from './CustomDevProblemVariants';

export default function CustomDevProblem() {
  const { variants } = useABTest();

  switch (variants.problem) {
    case 'B':
      return <ProblemVariantB />;
    case 'C':
      return <ProblemVariantC />;
    default:
      return <ProblemVariantA />;
  }
}
