import { useTheme } from '../context/ThemeContext';
import { CTAButtonV3 } from './CTAButtons';
import { useABTest } from '../context/ABTestContext';
import { CountdownTimerVariant, TargetFocusVariant, RocketLaunchVariant } from './CPUVariants';

const companyLogos = [
  {
    id: 1,
    name: "KPMG",
    logo: "/images/references/2560px-KPMG_logo.svg.png"
  },
  {
    id: 2,
    name: "Renault",
    logo: "/images/references/Automotive_Bleu-RVB.png"
  },
  {
    id: 3,
    name: "Danone",
    logo: "/images/references/Danone-Logo.png"
  },
  {
    id: 4,
    name: "Engie",
    logo: "/images/references/engie-logo.png"
  },
  {
    id: 5,
    name: "Fraikin",
    logo: "/images/references/fraikin_fr.png"
  },
  {
    id: 6,
    name: "LexisNexis",
    logo: "/images/references/LexisNexis_logo.svg.png"
  },
  {
    id: 7,
    name: "Petit Forestier",
    logo: "/images/references/Logo-Petit-Forestier-300x189-1.png"
  },
  {
    id: 8,
    name: "Thales",
    logo: "/images/references/THALES.png"
  }
];

// Variante C - Design Split avec Visual et Stats
export default function HeroVariantC() {
  const { theme } = useTheme();
  const { cpuVariant } = useABTest();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-sprint');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const ButtonComponent = CTAButtonV3;

  // Select illustration variant based on A/B test
  const IllustrationComponent = cpuVariant === 'countdown' 
    ? CountdownTimerVariant 
    : cpuVariant === 'target'
    ? TargetFocusVariant
    : RocketLaunchVariant;

  return (
    <section className={`relative min-h-[90vh] flex items-center overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-[#060705] via-[#060705] to-[#0a0e0d]'
        : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
    }`}>
      {/* Background avec courbes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
                  <span className="text-[#2ca3bd]">en retard ?</span>
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
              <ButtonComponent onClick={scrollToContact} />
            </div>
          </div>

          {/* Colonne droite - Visual Illustration */}
          <div className="relative flex justify-center">
            <IllustrationComponent />
          </div>
        </div>

        {/* Logo Carousel en bas */}
        <div className="mt-16 pt-8">
          <p className={`text-center text-xs uppercase tracking-widest mb-6 ${
            theme === 'dark' ? 'text-white/40' : 'text-gray-400'
          }`}>
            Ils nous font confiance
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
