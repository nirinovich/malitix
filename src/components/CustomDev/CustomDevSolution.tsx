import { useABTest } from '../../context/ABTestContext';
import { SolutionVariantA, SolutionVariantB, SolutionVariantC } from './CustomDevSolutionVariants';

export default function CustomDevSolution() {
  const { variants } = useABTest();

  return (
    <div id="solution-section">
      {variants.solution === 'B' && <SolutionVariantB />}
      {variants.solution === 'C' && <SolutionVariantC />}
      {variants.solution === 'A' && <SolutionVariantA />}
    </div>
  );
}
