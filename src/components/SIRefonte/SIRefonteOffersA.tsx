import { Sparkles, Rocket, Building2, ArrowRight, Check } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

// Variant A: Pricing Cards with Features
export default function SIRefonteOffersA() {
  const { theme } = useTheme();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-sirefonte');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const offers = [
    {
      icon: Sparkles,
      badge: 'OFFERT',
      badgeColor: '#2ca3bd',
      title: 'Audit Express',
      subtitle: '8 heures de diagnostic',
      price: 'Gratuit',
      originalPrice: '3 500€',
      description: 'Idéal pour éclairer la situation et aligner la direction',
      features: [
        'Cartographie SI actuel',
        'Risques majeurs identifiés',
        ' 3 quick wins à ROI immédiat',
        'Roadmap 90 jours priorisée',
        'Livraison sous 72h',
        'Rapport 5-7 pages actionnable'
      ],
      cta: 'Je demande mon Audit offert',
      color: '#2ca3bd',
      highlighted: true
    },
    {
      icon: Rocket,
      badge: 'POPULAIRE',
      badgeColor: '#2ca3bd',
      title: 'Pack Modernisation Rapide',
      subtitle: '6 à 8 semaines',
      price: 'Sur devis',
      originalPrice: null,
      description: 'Migration d\'un module critique + optimisation cloud',
      features: [
        'Migration API/module prioritaire',
        'Optimisation cloud (-20%)',
        'Sécurité renforcée (IAM, segmentation)',
        'Runbook + observabilité',
        'Formation équipes',
        'ROI rapide + réduction risques'
      ],
      cta: 'Demander un devis',
      color: '#2ca3bd',
      highlighted: false
    },
    {
      icon: Building2,
      badge: 'TRANSFORMATION',
      badgeColor: '#2ca3bd',
      title: 'Plateforme RefonteSI',
      subtitle: '12 à 36 mois',
      price: 'Sur mesure',
      originalPrice: null,
      description: 'Modernisation complète et profonde de votre SI',
      features: [
        'Architecture microservices / API-first',
        'Gouvernance data & pipelines',
        'DevOps & automatisation complète',
        'Sécurité continue (Zero-trust)',
        'Préparation IA (data readiness)',
        'Transformation sur 12-36 mois'
      ],
      cta: 'Parler à un expert',
      color: '#2ca3bd',
      highlighted: false
    },
  ];

  return (
    <section id="offers-sirefonte" className={`relative py-24 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#060705] to-[#0a0e0d]'
        : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Nos offres{' '}
            <span className="text-[#2ca3bd]">Refonte SI</span>
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
            De l'audit express à la transformation complète
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {offers.map((offer, idx) => {
            const Icon = offer.icon;
            return (
              <div
                key={idx}
                className={`relative p-8 rounded-3xl backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105 ${
                  offer.highlighted
                    ? theme === 'dark'
                      ? 'bg-gradient-to-br from-[#2ca3bd]/20 to-[#2ca3bd]/10 border-[#2ca3bd] shadow-[0_0_50px_rgba(44,163,189,0.3)]'
                      : 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border-[#2ca3bd] shadow-[0_0_50px_rgba(44,163,189,0.2)]'
                    : theme === 'dark'
                      ? 'bg-white/5 border-white/10'
                      : 'bg-white border-gray-200'
                }`}
                style={{
                  animation: 'fade-in-up 0.6s ease-out forwards',
                  animationDelay: `${idx * 0.15}s`,
                  opacity: 0
                }}
              >
                {/* Badge */}
                <div 
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full font-bold text-sm text-white shadow-xl"
                  style={{ backgroundColor: offer.badgeColor }}
                >
                  {offer.badge}
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-6 mt-4">
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{ 
                      backgroundColor: `${offer.color}20`,
                      border: `2px solid ${offer.color}40`
                    }}
                  >
                    <Icon size={40} style={{ color: offer.color }} />
                  </div>
                </div>

                {/* Title */}
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-black mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {offer.title}
                  </h3>
                  <div className={`text-sm font-semibold ${
                    theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                  }`}>
                    {offer.subtitle}
                  </div>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  {offer.originalPrice && (
                    <div className={`text-2xl font-bold line-through mb-2 ${
                      theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                    }`}>
                      {offer.originalPrice}
                    </div>
                  )}
                  <div 
                    className="text-4xl font-black"
                    style={{ color: offer.color }}
                  >
                    {offer.price}
                  </div>
                </div>

                {/* Description */}
                <p className={`text-center mb-8 text-sm ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                }`}>
                  {offer.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {offer.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <Check 
                        size={20} 
                        className="flex-shrink-0 mt-0.5" 
                        style={{ color: offer.color }}
                      />
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={scrollToContact}
                  className={`group w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 ${
                    offer.highlighted
                      ? 'bg-[#2ca3bd] text-white shadow-lg hover:shadow-2xl'
                      : theme === 'dark'
                        ? 'bg-white/10 text-white border-2 border-white/20 hover:bg-white/20'
                        : 'bg-gray-100 text-gray-900 border-2 border-gray-300 hover:bg-gray-200'
                  }`}
                >
                  {offer.cta}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className={`text-center p-6 rounded-2xl backdrop-blur-sm border ${
          theme === 'dark'
            ? 'bg-white/5 border-white/10'
            : 'bg-gray-50 border-gray-200'
        }`}>
          <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
            ✓ Toutes nos offres incluent un accompagnement personnalisé et un suivi régulier
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
