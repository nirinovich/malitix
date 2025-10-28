import { useTheme } from '../context/ThemeContext';
import { CTAButtonV3 } from './CTAButtons';

const companyLogos = [
  {
    id: 1,
    name: "Total Energies",
    logo: "https://images2.imgbox.com/0d/cf/SV31WCrC_o.png"
  },
  {
    id: 2,
    name: "Renault",
    logo: "https://images2.imgbox.com/24/c7/JLLhEJxI_o.png"
  },
  {
    id: 3,
    name: "Petit Forestier",
    logo: "https://images2.imgbox.com/9c/1e/7lQoiUmD_o.png"
  },
  {
    id: 4,
    name: "Illicado",
    logo: "https://images2.imgbox.com/a2/62/7yuNGYWh_o.png"
  },
  {
    id: 5,
    name: "Saint Gobain",
    logo: "https://images2.imgbox.com/32/4d/BPiUa9lI_o.png"
  },
  {
    id: 6,
    name: "Smallable",
    logo: "https://images2.imgbox.com/cc/06/DXdujOUm_o.png"
  },
  {
    id: 7,
    name: "Ardian",
    logo: "https://images2.imgbox.com/08/69/4Ubfxi6C_o.png"
  },
  {
    id: 8,
    name: "Agronutrition",
    logo: "https://images2.imgbox.com/f8/d1/f2g3fXze_o.png"
  }
];

// Variante C - Design Split avec Visual et Stats
export default function HeroVariantC() {
  const { theme } = useTheme();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-sprint');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`relative min-h-[90vh] flex items-center overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-[#060705] via-[#060705] to-[#0a0e0d]'
        : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
    }`}>
      {/* Background avec courbes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 right-0 w-1/2 h-full ${
          theme === 'dark' 
            ? 'bg-gradient-to-bl from-[#2ca3bd]/10 to-transparent' 
            : 'bg-gradient-to-bl from-blue-400/20 to-transparent'
        }`}></div>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" opacity="0.1">
          <path 
            fill={theme === 'dark' ? '#2ca3bd' : '#3b82f6'} 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche - Contenu */}
          <div className="space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className={`text-5xl sm:text-6xl font-black leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Vos projets IT{' '}
                <span className="relative inline-block">
                  <span className="text-[#2ca3bd]">en retard</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                    <path 
                      d="M0 4 Q50 0, 100 4 T200 4" 
                      stroke={theme === 'dark' ? '#2ca3bd' : '#3b82f6'} 
                      strokeWidth="3" 
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="text-5xl">?</span>
              </h1>
              
              <div className={`text-2xl sm:text-3xl font-semibold leading-relaxed ${
                theme === 'dark' ? 'text-white/90' : 'text-gray-800'
              }`}>
                On redresse votre roadmap <br />
                en <span className={`font-black text-3xl sm:text-4xl ${
                  theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'
                }`}>2 semaines</span>.
              </div>
            </div>

            {/* Features rapides */}
            <div className="space-y-3">
              {['✓ Diagnostic en 48h', '✓ Équipe dédiée', '✓ Résultats mesurables'].map((feature) => (
                <div key={feature} className={`flex items-center gap-3 text-lg ${
                  theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                }`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-blue-100'
                  }`}>
                    <span className="text-[#2ca3bd] text-sm">✓</span>
                  </div>
                  {feature.replace('✓ ', '')}
                </div>
              ))}
            </div>

            {/* CTA avec CTAButtonV3 */}
            <div className="pt-4">
              <CTAButtonV3 onClick={scrollToContact} />
            </div>
          </div>

            {/* Features rapides */}
            <div className="space-y-3">
              {['✓ Diagnostic en 48h', '✓ Équipe dédiée', '✓ Résultats mesurables'].map((feature) => (
                <div key={feature} className={`flex items-center gap-3 text-lg ${
                  theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                }`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-blue-100'
                  }`}>
                    <span className="text-[#2ca3bd] text-sm">✓</span>
                  </div>
                  {feature.replace('✓ ', '')}
                </div>
              ))}
            </div>

            {/* CTA avec Chakra Button */}
            <div className="pt-4">
              <CTAButtonV3 onClick={scrollToContact} />
            </div>
          </div>

          {/* Colonne droite - Visual CPU Malitix + Roadmap */}
          <div className="relative flex justify-center">
            <div className={`relative p-8 rounded-3xl w-full max-w-md ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-[#060705]/40 to-transparent border border-[#2ca3bd]/12' 
                : 'bg-white/80 border border-gray-100'
            }`}
            aria-hidden="true">
              {/* Simple illustration SVG CPU + roadmap */}
              <div className="flex flex-col items-center gap-6">
                <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="28" y="28" width="104" height="104" rx="16" fill={theme === 'dark' ? '#071013' : '#f8fafc'} stroke={theme === 'dark' ? '#2ca3bd' : '#3b82f6'} strokeWidth="2" />
                  <rect x="52" y="52" width="56" height="56" rx="8" fill={theme === 'dark' ? '#052227' : '#ffffff'} stroke={theme === 'dark' ? '#2ca3bd' : '#60a5fa'} strokeWidth="1.5" />
                  {/* Pins */}
                  <g stroke={theme === 'dark' ? '#2ca3bd' : '#3b82f6'} strokeWidth="2">
                    <line x1="16" y1="40" x2="28" y2="40" />
                    <line x1="16" y1="80" x2="28" y2="80" />
                    <line x1="16" y1="120" x2="28" y2="120" />
                    <line x1="144" y1="40" x2="132" y2="40" />
                    <line x1="144" y1="80" x2="132" y2="80" />
                    <line x1="144" y1="120" x2="132" y2="120" />
                    <line x1="40" y1="16" x2="40" y2="28" />
                    <line x1="80" y1="16" x2="80" y2="28" />
                    <line x1="120" y1="16" x2="120" y2="28" />
                    <line x1="40" y1="144" x2="40" y2="132" />
                    <line x1="80" y1="144" x2="80" y2="132" />
                    <line x1="120" y1="144" x2="120" y2="132" />
                  </g>
                </svg>

                <div className="w-full">
                  <div className={`flex items-center gap-3 mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    <div className={`w-3 h-3 rounded-full ${theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-blue-600'}`}></div>
                    <div className="text-sm font-semibold">Roadmap Malitix</div>
                    <div className="ml-auto text-xs text-gray-400">14 jours</div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { title: 'Diagnostic', progress: 100 },
                      { title: 'Plan d\'action', progress: 70 },
                      { title: 'Livrables', progress: 30 }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${theme === 'dark' ? 'bg-[#052227] text-[#2ca3bd]' : 'bg-blue-50 text-blue-700'}`}>{i + 1}</div>
                        <div className="flex-1">
                          <div className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{item.title}</div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
                            <div style={{ width: `${item.progress}%` }} className={`${theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-blue-600'} h-full`}></div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">{item.progress}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Carousel en bas */}
        <div className="mt-16 pt-8">
          <p className={`text-center text-xs uppercase tracking-widest mb-6 ${
            theme === 'dark' ? 'text-white/40' : 'text-gray-400'
          }`}>
            Ils nous ont fait confiance
          </p>
          <div className="overflow-hidden relative">
            <div className={`absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-[#060705] to-transparent'
                : 'bg-gradient-to-r from-gray-50 to-transparent'
            }`}></div>
            <div className={`absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${
              theme === 'dark'
                ? 'bg-gradient-to-l from-[#060705] to-transparent'
                : 'bg-gradient-to-l from-gray-50 to-transparent'
            }`}></div>
            
            <div className="flex animate-scroll-left">
              {companyLogos.map((company) => (
                <div
                  key={`first-${company.id}`}
                  className="flex-shrink-0 mx-6 w-32 h-16 flex items-center justify-center"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain p-3 filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
              {companyLogos.map((company) => (
                <div
                  key={`second-${company.id}`}
                  className="flex-shrink-0 mx-6 w-32 h-16 flex items-center justify-center"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain p-3 filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes energy-flow {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        @keyframes particle {
          0% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-20px) scale(1);
            opacity: 0;
          }
        }

        @keyframes charge-bar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-energy-flow {
          animation: energy-flow 1.5s infinite;
        }

        .animate-particle {
          animation: particle 1s infinite;
        }

        .animate-charge-bar {
          animation: charge-bar 1.5s ease-out infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
