import { useEffect, useState } from 'react';
import SIRefonteHeroA from '../components/SIRefonte/SIRefonteHeroA.tsx';
import SIRefonteHeroB from '../components/SIRefonte/SIRefonteHeroB.tsx';
import SIRefonteHeroC from '../components/SIRefonte/SIRefonteHeroC.tsx';
import SIRefonteProblemA from '../components/SIRefonte/SIRefonteProblemA.tsx';
import SIRefonteProblemB from '../components/SIRefonte/SIRefonteProblemB.tsx';
import SIRefonteProblemC from '../components/SIRefonte/SIRefonteProblemC.tsx';
import SIRefonteSolutionA from '../components/SIRefonte/SIRefonteSolutionA.tsx';
import SIRefonteSolutionB from '../components/SIRefonte/SIRefonteSolutionB.tsx';
import SIRefonteSolutionC from '../components/SIRefonte/SIRefonteSolutionC.tsx';
import SIRefonteOffersA from '../components/SIRefonte/SIRefonteOffersA.tsx';
import SIRefonteOffersB from '../components/SIRefonte/SIRefonteOffersB.tsx';
import SIRefonteOffersC from '../components/SIRefonte/SIRefonteOffersC.tsx';
import SIRefonteBenefitsA from '../components/SIRefonte/SIRefonteBenefitsA.tsx';
import SIRefonteBenefitsB from '../components/SIRefonte/SIRefonteBenefitsB.tsx';
import SIRefonteBenefitsC from '../components/SIRefonte/SIRefonteBenefitsC.tsx';
import SIRefonteContactA from '../components/SIRefonte/SIRefonteContactA.tsx';
import SIRefonteContactB from '../components/SIRefonte/SIRefonteContactB.tsx';
import SIRefonteContactC from '../components/SIRefonte/SIRefonteContactC.tsx';

type Variant = 'A' | 'B' | 'C';

interface VariantState {
  hero: Variant;
  problem: Variant;
  solution: Variant;
  offers: Variant;
  benefits: Variant;
  contact: Variant;
}

export default function SIRefonte() {
  // A/B Testing Variant State - Stored in localStorage for persistence
  const [variants, setVariants] = useState<VariantState>(() => {
    const saved = localStorage.getItem('sirefonte-variants');
    if (saved) {
      return JSON.parse(saved);
    }
    // Default: All variants A
    return {
      hero: 'A',
      problem: 'A',
      solution: 'A',
      offers: 'A',
      benefits: 'A',
      contact: 'A',
    };
  });

  // Persist variant choices
  useEffect(() => {
    localStorage.setItem('sirefonte-variants', JSON.stringify(variants));
  }, [variants]);

  useEffect(() => {
    document.title = 'Refonte SI | Modernisation Système d\'Information Cloud, Data & IA - Malitix';
  }, []);

  // Variant switcher for testing
  const switchVariant = (section: keyof VariantState, variant: Variant) => {
    setVariants(prev => ({ ...prev, [section]: variant }));
  };

  // Get component based on variant
  const getHeroComponent = () => {
    switch (variants.hero) {
      case 'B': return <SIRefonteHeroB />;
      case 'C': return <SIRefonteHeroC />;
      default: return <SIRefonteHeroA />;
    }
  };

  const getProblemComponent = () => {
    switch (variants.problem) {
      case 'B': return <SIRefonteProblemB />;
      case 'C': return <SIRefonteProblemC />;
      default: return <SIRefonteProblemA />;
    }
  };

  const getSolutionComponent = () => {
    switch (variants.solution) {
      case 'B': return <SIRefonteSolutionB />;
      case 'C': return <SIRefonteSolutionC />;
      default: return <SIRefonteSolutionA />;
    }
  };

  const getOffersComponent = () => {
    switch (variants.offers) {
      case 'B': return <SIRefonteOffersB />;
      case 'C': return <SIRefonteOffersC />;
      default: return <SIRefonteOffersA />;
    }
  };

  const getBenefitsComponent = () => {
    switch (variants.benefits) {
      case 'B': return <SIRefonteBenefitsB />;
      case 'C': return <SIRefonteBenefitsC />;
      default: return <SIRefonteBenefitsA />;
    }
  };

  const getContactComponent = () => {
    switch (variants.contact) {
      case 'B': return <SIRefonteContactB />;
      case 'C': return <SIRefonteContactC />;
      default: return <SIRefonteContactA />;
    }
  };

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

      {/* A/B Testing Control Panel */}
      <div className="fixed bottom-4 right-4 z-50 bg-black/90 text-white p-4 rounded-lg shadow-2xl max-w-xs">
        <div className="text-xs font-bold mb-3 border-b border-white/20 pb-2">A/B Testing Control</div>
        <div className="space-y-2 text-xs">
          {Object.entries(variants).map(([section, variant]) => (
            <div key={section} className="flex items-center gap-2">
              <span className="capitalize w-16 text-white/70">{section}:</span>
              <div className="flex gap-1">
                {(['A', 'B', 'C'] as Variant[]).map((v) => (
                  <button
                    key={v}
                    onClick={() => switchVariant(section as keyof VariantState, v)}
                    className={`px-2 py-1 rounded font-mono ${
                      variant === v
                        ? 'bg-[#2ca3bd] text-white'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      {getHeroComponent()}

      {/* Problem Section - Why Modernize Now */}
      {getProblemComponent()}

      {/* Solution Section - Value Proposition */}
      {getSolutionComponent()}

      {/* Offers Section - 3 Tier Packages */}
      {getOffersComponent()}

      {/* Benefits Section - What You Gain */}
      {getBenefitsComponent()}

      {/* Contact/CTA Section */}
      {getContactComponent()}
    </>
  );
}
