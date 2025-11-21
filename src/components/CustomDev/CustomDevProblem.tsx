import { useABTest } from '../../context/ABTestContext';
import { ProblemVariantA, ProblemVariantB, ProblemVariantC } from './CustomDevProblemVariants';

export default function CustomDevProblem() {
  const { variants } = useABTest();

  return (
    <div id="problem-section">
      {variants.problem === 'B' && <ProblemVariantB />}
      {variants.problem === 'C' && <ProblemVariantC />}
      {variants.problem === 'A' && <ProblemVariantA />}
    </div>
  );
}
