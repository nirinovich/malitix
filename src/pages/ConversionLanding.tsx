import { Helmet } from 'react-helmet-async';
import AboveTheFoldVariantB from '../components/ConversionLanding/AboveTheFoldVariantB';
import HumaniserVariantB from '../components/ConversionLanding/HumaniserVariantB';
import ValueStackVariantB from '../components/ConversionLanding/ValueStackVariantB';
import ClientTestimonials from '../components/Shared/ClientTestimonials';
import GrandSlamOfferVariantC from '../components/ConversionLanding/GrandSlamOfferVariantC';
import LeadMagnetVariantA from '../components/ConversionLanding/LeadMagnet/LeadMagnetVariantA';
import FaqVariantA from '../components/ConversionLanding/FaqVariantA';
import LeadFormVariantA from '../components/ConversionLanding/LeadForm/LeadFormVariantA';

export default function ConversionLanding() {
  return (
    <>
      <Helmet>
        <title>Malitix | Équipe Senior en 72h</title>
        <meta name="description" content="Arrêtez de recruter. Accédez au top 1% d'ingénieurs sur une large sélection de technologies en 72h avec Malitix." />
      </Helmet>

      <div className="lp-section" style={{ animationDelay: '0.05s' }}>
        <AboveTheFoldVariantB />
      </div>
      <div className="lp-section" style={{ animationDelay: '0.1s' }}>
        <HumaniserVariantB />
      </div>
      <div className="lp-section" style={{ animationDelay: '0.15s' }}>
        <ValueStackVariantB />
      </div>
      <div className="lp-section" style={{ animationDelay: '0.2s' }}>
        <ClientTestimonials />
      </div>
      <div className="lp-section" style={{ animationDelay: '0.25s' }}>
        <GrandSlamOfferVariantC />
      </div>
      <div className="lp-section" style={{ animationDelay: '0.3s' }}>
        <LeadMagnetVariantA />
      </div>
      <div className="lp-section" style={{ animationDelay: '0.35s' }}>
        <FaqVariantA />
      </div>
      <div className="lp-section" style={{ animationDelay: '0.4s' }}>
        <LeadFormVariantA />
      </div>
    </>
  );
}
