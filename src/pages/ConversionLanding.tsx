import { useState } from 'react';
import AboveTheFold from '../components/ConversionLanding/AboveTheFold';
import Humaniser from '../components/ConversionLanding/Humaniser';
import ValueStack from '../components/ConversionLanding/ValueStack';
import SocialProof from '../components/ConversionLanding/SocialProof';
import GrandSlamOffer from '../components/ConversionLanding/GrandSlamOffer';
import LeadMagnet from '../components/ConversionLanding/LeadMagnet';
import Faq from '../components/ConversionLanding/Faq';
import LeadForm from '../components/ConversionLanding/LeadForm';
import VariantControls from '../components/ConversionLanding/Shared/VariantControls';
import type { LandingSectionKey, LandingVariant, LandingVariantConfig } from '../types';
import { DEFAULT_LANDING_VARIANTS } from '../utils/landingVariants';

export default function ConversionLanding() {
  const [variants, setVariants] = useState<LandingVariantConfig>(DEFAULT_LANDING_VARIANTS);
  const showControls = true;

  const handleVariantChange = (section: LandingSectionKey, variant: LandingVariant) => {
    setVariants((prev) => ({
      ...prev,
      [section]: variant,
    }));
  };

  return (
    <>
      <title>Malitix | Équipe Senior en 72h</title>
      <meta name="description" content="Arrêtez de recruter. Accédez aux meilleurs ingénieurs React Native & Web en 72h avec Malitix." />

      {showControls && <VariantControls variants={variants} onChange={handleVariantChange} />}

      <AboveTheFold variant={variants.aboveTheFold} />
      <Humaniser variant={variants.humaniser} />
      <ValueStack variant={variants.valueStack} />
      <SocialProof variant={variants.socialProof} />
      <GrandSlamOffer variant={variants.grandSlamOffer} />
      <LeadMagnet variant={variants.leadMagnet} />
      <Faq variant={variants.faq} />
      <LeadForm variant={variants.leadForm} />
    </>
  );
}
