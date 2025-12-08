import { ArrowRight, Check } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

// Variant B: Horizontal Comparison Table
export default function SIRefonteOffersB() {
  const { theme } = useTheme();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-sirefonte');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    { name: 'Diagnostic SI complet', audit: true, pack: true, platform: true },
    { name: 'Vision cible & roadmap', audit: true, pack: true, platform: true },
    { name: 'Quick wins identifiés', audit: true, pack: true, platform: true },
    { name: 'Migration module/API', audit: false, pack: true, platform: true },
    { name: 'Optimisation cloud', audit: false, pack: true, platform: true },
    { name: 'Sécurité renforcée', audit: false, pack: true, platform: true },
    { name: 'Architecture microservices', audit: false, pack: false, platform: true },
    { name: 'Gouvernance data complète', audit: false, pack: false, platform: true },
    { name: 'DevOps & CI/CD', audit: false, pack: false, platform: true },
    { name: 'Préparation IA', audit: false, pack: false, platform: true },
  ];

  return (
    <section id="offers-sirefonte" className={`relative py-24 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-[#060705]'
        : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl sm:text-6xl font-black mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Choisissez votre niveau{' '}
            <span className="text-[#a0c801]">d'engagement</span>
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
            De la simple clarification à la transformation complète
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header Row */}
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className={`p-4 rounded-xl font-bold ${
                theme === 'dark' ? 'text-white/60' : 'text-gray-600'
              }`}>
                Inclus
              </div>
              <div className={`p-6 rounded-2xl text-center backdrop-blur-sm border-2 ${
                theme === 'dark'
                  ? 'bg-[#a0c801]/10 border-[#a0c801]/40'
                  : 'bg-[#a0c801]/5 border-[#a0c801]/40'
              }`}>
                <div className="inline-block px-4 py-1 rounded-full bg-[#a0c801] text-white text-xs font-bold mb-2">
                  OFFERT
                </div>
                <div className={`text-2xl font-black mb-1 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Audit Express
                </div>
                <div className="text-lg font-black text-[#a0c801] mb-2">Gratuit</div>
                <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                  8h • 72h livraison
                </div>
              </div>
              <div className={`p-6 rounded-2xl text-center backdrop-blur-sm border-2 ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white border-gray-200'
              }`}>
                <div className="inline-block px-4 py-1 rounded-full bg-[#2fa8cf] text-white text-xs font-bold mb-2">
                  RAPIDE
                </div>
                <div className={`text-2xl font-black mb-1 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Pack Modernisation
                </div>
                <div className="text-lg font-black text-[#2fa8cf] mb-2">Sur devis</div>
                <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                  6-8 semaines
                </div>
              </div>
              <div className={`p-6 rounded-2xl text-center backdrop-blur-sm border-2 ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white border-gray-200'
              }`}>
                <div className="inline-block px-4 py-1 rounded-full bg-[#2fa8cf] text-white text-xs font-bold mb-2">
                  COMPLET
                </div>
                <div className={`text-2xl font-black mb-1 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Plateforme RefonteSI
                </div>
                <div className="text-lg font-black text-[#2fa8cf] mb-2">Sur mesure</div>
                <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                  12-36 mois
                </div>
              </div>
            </div>

            {/* Feature Rows */}
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className={`grid grid-cols-4 gap-4 mb-2 ${
                  idx % 2 === 0 
                    ? theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'
                    : ''
                } rounded-xl p-2`}
              >
                <div className={`p-4 flex items-center font-medium text-sm ${
                  theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                }`}>
                  {feature.name}
                </div>
                <div className="p-4 flex items-center justify-center">
                  {feature.audit ? (
                    <Check className="text-[#a0c801]" size={24} />
                  ) : (
                    <div className={`w-6 h-0.5 ${theme === 'dark' ? 'bg-white/10' : 'bg-gray-300'}`}></div>
                  )}
                </div>
                <div className="p-4 flex items-center justify-center">
                  {feature.pack ? (
                    <Check className="text-[#2fa8cf]" size={24} />
                  ) : (
                    <div className={`w-6 h-0.5 ${theme === 'dark' ? 'bg-white/10' : 'bg-gray-300'}`}></div>
                  )}
                </div>
                <div className="p-4 flex items-center justify-center">
                  {feature.platform ? (
                    <Check className="text-[#2fa8cf]" size={24} />
                  ) : (
                    <div className={`w-6 h-0.5 ${theme === 'dark' ? 'bg-white/10' : 'bg-gray-300'}`}></div>
                  )}
                </div>
              </div>
            ))}

            {/* CTA Row */}
            <div className="grid grid-cols-4 gap-4 mt-8">
              <div></div>
              <button
                onClick={scrollToContact}
                className="p-4 rounded-xl font-bold bg-[#a0c801] text-white transition-all hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
              >
                Je demande
                <ArrowRight size={16} />
              </button>
              <button
                onClick={scrollToContact}
                className={`p-4 rounded-xl font-bold border-2 transition-all hover:scale-105 flex items-center justify-center gap-2 ${
                  theme === 'dark'
                    ? 'border-[#2fa8cf] text-[#2fa8cf] hover:bg-[#2fa8cf]/10'
                    : 'border-[#2fa8cf] text-[#2fa8cf] hover:bg-[#2fa8cf]/5'
                }`}
              >
                Devis
                <ArrowRight size={16} />
              </button>
              <button
                onClick={scrollToContact}
                className={`p-4 rounded-xl font-bold border-2 transition-all hover:scale-105 flex items-center justify-center gap-2 ${
                  theme === 'dark'
                    ? 'border-[#2fa8cf] text-[#2fa8cf] hover:bg-[#2fa8cf]/10'
                    : 'border-[#2fa8cf] text-[#2fa8cf] hover:bg-[#2fa8cf]/5'
                }`}
              >
                Échanger
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
