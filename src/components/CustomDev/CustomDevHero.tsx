import { useABTest } from '../../context/ABTestContext';
import { HeroVariantA, HeroVariantB, HeroVariantC } from './CustomDevHeroVariants';

export default function CustomDevHero() {
  const { variants } = useABTest();

  return (
    <div id="hero-section">
      {variants.hero === 'B' && <HeroVariantB />}
      {variants.hero === 'C' && <HeroVariantC />}
      {variants.hero === 'A' && <HeroVariantA />}
    </div>
  );
}
