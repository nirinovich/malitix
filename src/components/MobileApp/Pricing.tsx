import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useABTestVariant } from '../../hooks/useABTest';
import { Check, X, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const { theme } = useTheme();
  const variant = useABTestVariant('pricing');

  if (variant === 'A') {
    return <PricingVariantA theme={theme} />;
  } else if (variant === 'B') {
    return <PricingVariantB theme={theme} />;
  } else {
    return <PricingVariantC theme={theme} />;
  }
}

const PRICING_TIERS = [
  {
    name: 'MVP Development',
    price: '15K',
    timeline: '8-10 weeks',
    description: 'Perfect for validating your idea with core features',
    features: [
      { item: 'Single platform (iOS or Android)', included: true },
      { item: 'Core feature set', included: true },
      { item: 'Basic API integration', included: true },
      { item: '90-day support', included: true },
      { item: 'App Store submission help', included: true },
      { item: 'User testing', included: false },
      { item: 'Advanced analytics', included: false },
    ],
  },
  {
    name: 'Full-Featured App',
    price: '35K - 75K',
    timeline: '16-20 weeks',
    description: 'Complete app with all features and polish. Most popular.',
    features: [
      { item: 'iOS + Android (Native or Cross-platform)', included: true },
      { item: 'Complete feature set', included: true },
      { item: 'Advanced API integrations', included: true },
      { item: '6-month support included', included: true },
      { item: 'App Store optimization', included: true },
      { item: 'User testing & iteration', included: true },
      { item: 'Analytics & monitoring', included: true },
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise Solution',
    price: 'Custom',
    timeline: 'Flexible',
    description: 'Complex apps with advanced requirements and custom integrations',
    features: [
      { item: 'Multiple platforms + PWA', included: true },
      { item: 'Enterprise-grade features', included: true },
      { item: 'Custom integrations & APIs', included: true },
      { item: '12-month support & maintenance', included: true },
      { item: 'Post-launch optimization', included: true },
      { item: 'Team training & documentation', included: true },
      { item: 'Dedicated account manager', included: true },
    ],
  },
];

// =============================================
// VARIANT A: Three-Tier Cards
// =============================================
function PricingVariantA({ theme }: { theme: 'dark' | 'light' }) {
  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#0a0e0d]' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Simple, Transparent Pricing
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            Choose the plan that fits your vision and timeline. All prices are fixed with no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative group rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 hover:scale-105 ${
                tier.highlighted
                  ? `p-8 bg-gradient-to-br from-[#2ca3bd]/20 to-[#1e7a8f]/15 border-2 border-[#2ca3bd] shadow-2xl ${
                      theme === 'dark' ? 'shadow-[#2ca3bd]/30' : 'shadow-[#2ca3bd]/20'
                    }`
                  : `p-8 backdrop-blur-xl ${
                      theme === 'dark'
                        ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20'
                        : 'bg-gradient-to-br from-white to-slate-50/70 border border-[#2ca3bd]/20'
                    }`
              }`}
            >
              {/* Badge */}
              {tier.highlighted && (
                <div className="absolute top-4 right-4 bg-[#2ca3bd] text-white px-4 py-1 rounded-full text-xs font-bold">
                  Most Popular
                </div>
              )}

              {/* Tier Info */}
              <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {tier.name}
              </h3>
              <p className={`text-sm mb-6 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                {tier.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-black text-[#2ca3bd]">${tier.price}</span>
                </div>
                <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                  {tier.timeline}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature.item} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check size={18} className="text-[#2ca3bd] flex-shrink-0 mt-1" />
                    ) : (
                      <X size={18} className="text-white/30 flex-shrink-0 mt-1" />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included
                          ? theme === 'dark'
                            ? 'text-white/80'
                            : 'text-gray-700'
                          : theme === 'dark'
                          ? 'text-white/40'
                          : 'text-gray-400'
                      }`}
                    >
                      {feature.item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  tier.highlighted
                    ? 'bg-[#2ca3bd] text-white hover:bg-[#1e7a8f] shadow-lg'
                    : `border-2 border-[#2ca3bd] text-[#2ca3bd] hover:bg-[#2ca3bd]/10`
                }`}
              >
                Get Started <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className={`mt-12 p-8 rounded-2xl text-center ${
          theme === 'dark'
            ? 'bg-[#2ca3bd]/5 border border-[#2ca3bd]/20'
            : 'bg-[#2ca3bd]/5 border border-[#2ca3bd]/20'
        }`}>
          <p className={`text-lg ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
            <span className="font-bold">All plans include:</span> Free consultation, project roadmap, weekly updates, and 6-month post-launch support.
          </p>
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT B: Toggle Annual/Monthly Pricing
// =============================================
function PricingVariantB({ theme }: { theme: 'dark' | 'light' }) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#060705]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Transparent Pricing Models
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            Choose upfront fixed pricing or ongoing support packages.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`font-semibold ${!isAnnual ? 'text-[#2ca3bd]' : theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
              Project-Based
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-[#2ca3bd]' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-semibold ${isAnnual ? 'text-[#2ca3bd]' : theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
              Maintenance Plans
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 ${
                tier.highlighted
                  ? `bg-gradient-to-br from-[#2ca3bd]/20 to-[#1e7a8f]/15 border-2 border-[#2ca3bd]`
                  : `${theme === 'dark' ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20' : 'bg-gradient-to-br from-white to-slate-50/70 border border-[#2ca3bd]/20'}`
              }`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {tier.name}
              </h3>
              <p className={`text-sm mb-6 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                {tier.description}
              </p>

              {/* Price Section */}
              <div className="mb-6">
                {isAnnual ? (
                  <>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-4xl font-black text-[#2ca3bd]">${Math.round(parseInt(tier.price) / 12)}</span>
                      <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>/month</span>
                    </div>
                    <p className={`text-xs font-semibold ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                      Billed annually
                    </p>
                  </>
                ) : (
                  <>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-4xl font-black text-[#2ca3bd]">${tier.price}</span>
                    </div>
                    <p className={`text-xs font-semibold ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                      Fixed project price
                    </p>
                  </>
                )}
              </div>

              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  tier.highlighted
                    ? 'bg-[#2ca3bd] text-white hover:bg-[#1e7a8f]'
                    : `border-2 border-[#2ca3bd] text-[#2ca3bd] hover:bg-[#2ca3bd]/10`
                }`}
              >
                Choose Plan <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT C: Comparison Table Layout
// =============================================
function PricingVariantC({ theme }: { theme: 'dark' | 'light' }) {
  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#0a0e0d]' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Flexible Pricing Options
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            Choose the engagement model that works best for you.
          </p>
        </div>

        {/* Comparison Table */}
        <div className={`rounded-2xl overflow-hidden border ${theme === 'dark' ? 'border-[#2ca3bd]/20' : 'border-[#2ca3bd]/20'}`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`${theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-[#2ca3bd]/10'}`}>
                  <th className={`px-6 py-4 text-left font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Feature
                  </th>
                  {PRICING_TIERS.map((tier) => (
                    <th key={tier.name} className={`px-6 py-4 text-center font-bold ${
                      tier.highlighted 
                        ? 'text-[#2ca3bd]' 
                        : theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {['Platforms', 'Timeline', 'Features', 'Support', 'Post-Launch Help'].map((feature, idx) => (
                  <tr
                    key={feature}
                    className={`border-t ${theme === 'dark' ? 'border-[#2ca3bd]/10 hover:bg-[#2ca3bd]/5' : 'border-[#2ca3bd]/10 hover:bg-[#2ca3bd]/5'}`}
                  >
                    <td className={`px-6 py-4 font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {feature}
                    </td>
                    {PRICING_TIERS.map((tier) => (
                      <td key={tier.name} className={`px-6 py-4 text-center ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                        {idx === 0 && ['1 Platform', 'iOS + Android', 'Multi + PWA'][PRICING_TIERS.indexOf(tier)]}
                        {idx === 1 && [tier.timeline][0]}
                        {idx === 2 && ['Core Features', 'Complete Set', 'Enterprise Grade'][PRICING_TIERS.indexOf(tier)]}
                        {idx === 3 && ['90 Days', '6 Months', '12 Months'][PRICING_TIERS.indexOf(tier)]}
                        {idx === 4 && (
                          <span className={PRICING_TIERS.indexOf(tier) > 0 ? 'text-[#2ca3bd] font-semibold' : ''}>
                            {PRICING_TIERS.indexOf(tier) === 0 ? '-' : '✓'}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Price Display */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`p-6 rounded-xl text-center ${
                tier.highlighted
                  ? 'bg-[#2ca3bd] text-white'
                  : `${theme === 'dark' ? 'bg-[#0f1412] text-white' : 'bg-white text-gray-900'} border border-[#2ca3bd]/20`
              }`}
            >
              <p className="text-sm font-semibold opacity-75 mb-2">Starting at</p>
              <p className="text-3xl font-black mb-2">${tier.price}</p>
              <button className={`w-full py-2 rounded-lg font-semibold transition-all ${
                tier.highlighted
                  ? 'bg-white/20 hover:bg-white/30'
                  : 'bg-[#2ca3bd] text-white hover:bg-[#1e7a8f]'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
