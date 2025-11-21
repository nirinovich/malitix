import { useABTest } from '../../context/ABTestContext';
import { HeroVariantA, HeroVariantB, HeroVariantC } from './CustomDevHeroVariants';

export default function CustomDevHero() {
  const { variants } = useABTest();

  // Render the appropriate variant based on A/B test
  switch (variants.hero) {
    case 'B':
      return <HeroVariantB />;
    case 'C':
      return <HeroVariantC />;
    case 'A':
    default:
      return <HeroVariantA />;
  }
}
