import { useEffect } from 'react';
import SIRefonteHero from '../components/SIRefonte/SIRefonteHero.tsx';
import SIRefonteProblem from '../components/SIRefonte/SIRefonteProblem.tsx';
import SIRefonteSolution from '../components/SIRefonte/SIRefonteSolution.tsx';
import SIRefonteOffers from '../components/SIRefonte/SIRefonteOffers.tsx';
import SIRefonteBenefits from '../components/SIRefonte/SIRefonteBenefits.tsx';
import SIRefonteContact from '../components/SIRefonte/SIRefonteContact.tsx';

export default function SIRefonte() {
  useEffect(() => {
    document.title = 'Refonte SI | Modernisation Système d\'Information Cloud, Data & IA - Malitix';
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Refonte SI | Modernisation Système d'Information Cloud, Data & IA - Malitix</title>
      <meta name="description" content="Modernisez votre Système d'Information en 90 jours : Cloud optimisé, Data gouvernée, Sécurité renforcée, Architecture IA-ready. Audit Express 8h offert + Quick wins à ROI immédiat." />
      <meta property="og:title" content="Refonte SI | Transformation Cloud, Data & Sécurité - Malitix" />
      <meta property="og:description" content="Refonte progressive de votre SI : Réduction 20-40% des coûts cloud, Architecture moderne, Automatisation DevOps. Audit diagnostic 8h offert." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.malitix.com/refonte-si" />
      <meta property="og:image" content="https://www.malitix.com/images/refonte-si-og.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Refonte SI | Modernisation Cloud, Data & IA" />
      <meta name="twitter:description" content="Transformez votre SI en 90 jours. Architecture moderne, cloud optimisé, sécurité renforcée." />
      <link rel="canonical" href="https://www.malitix.com/refonte-si" />

      {/* Hero Section */}
      <SIRefonteHero />

      {/* Problem Section - Why Modernize Now */}
      <SIRefonteProblem />

      {/* Solution Section - Value Proposition */}
      <SIRefonteSolution />

      {/* Offers Section - 3 Tier Packages */}
      <SIRefonteOffers />

      {/* Benefits Section - What You Gain */}
      <SIRefonteBenefits />

      {/* Contact/CTA Section */}
      <SIRefonteContact />
    </>
  );
}
