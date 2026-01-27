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

      <div className="lp-section" style={{ animationDelay: '0.05s' }}>
        <AboveTheFold variant={variants.aboveTheFold} />
      </div>
      <div className="lp-section" style={{ animationDelay: '0.1s' }}>
        <Humaniser variant={variants.humaniser} />
      </div>
      <div className="lp-section" style={{ animationDelay: '0.15s' }}>
        <ValueStack variant={variants.valueStack} />
      </div>
      <div className="lp-section" style={{ animationDelay: '0.2s' }}>
        <SocialProof variant={variants.socialProof} />
      </div>
      <div className="lp-section" style={{ animationDelay: '0.25s' }}>
        <GrandSlamOffer variant={variants.grandSlamOffer} />
      </div>
      <div className="lp-section" style={{ animationDelay: '0.3s' }}>
        <LeadMagnet variant={variants.leadMagnet} />
      </div>
      <div className="lp-section" style={{ animationDelay: '0.35s' }}>
        <Faq variant={variants.faq} />
      </div>
      <div className="lp-section" style={{ animationDelay: '0.4s' }}>
        <LeadForm variant={variants.leadForm} />
      </div>
    </>
  );
}
