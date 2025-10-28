import { useTheme } from '../context/ThemeContext';
import { CTAButtonV1, CTAButtonV2, CTAButtonV3 } from './CTAButtons';
import { useABTest } from '../context/ABTestContext';

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

// Variante B - Design Bold avec Badge et Urgence
export default function HeroVariantB() {
  const { theme } = useTheme();
  const { buttonVariant } = useABTest();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-sprint');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const ButtonComponent = buttonVariant === 'V1' ? CTAButtonV1 : buttonVariant === 'V2' ? CTAButtonV2 : CTAButtonV3;

  return (
    <section className={`relative min-h-[90vh] flex items-center overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-[#060705] via-[#060705] to-[#0a0e0d]'
        : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
    }`}>
      {/* Background dynamique avec grille */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
          theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-blue-400/30'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-300/20'
        }`} style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern */}
        <div className={`absolute inset-0 bg-[size:50px_50px] ${
          theme === 'dark' 
            ? 'bg-[linear-gradient(rgba(44,163,189,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(44,163,189,0.03)_1px,transparent_1px)]'
            : 'bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto space-y-10">
          {/* Headline - Style impactant avec question */}
          <div className="space-y-6">
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Vos projets IT{' '}
              <span className="relative inline-block">
                <span className={`bg-clip-text text-transparent bg-gradient-to-r ${
                  theme === 'dark' 
                    ? 'from-[#2ca3bd] to-[#1e7a8f]' 
                    : 'from-blue-600 to-blue-800'
                }`}>
                  en retard
                </span>
                <span className={`absolute -bottom-2 left-0 w-full h-1 rounded-full ${
                  theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-blue-600'
                }`}></span>
              </span>
              <span className={`text-6xl ${theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'}`}>?</span>
            </h1>
            
            <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold space-y-3 ${
              theme === 'dark' ? 'text-white/90' : 'text-gray-800'
            }`}>
              <p>On redresse votre roadmap</p>
              <p className="flex items-center justify-center gap-3">
                en{' '}
                <span className={`px-4 py-2 rounded-xl ${
                  theme === 'dark' 
                    ? 'bg-[#2ca3bd]/20 text-[#2ca3bd] border-2 border-[#2ca3bd]/50' 
                    : 'bg-blue-100 text-blue-700 border-2 border-blue-300'
                }`}>
                  2 semaines
                </span>
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <ButtonComponent onClick={scrollToContact} />
          </div>

          {/* Social proof mini */}
          <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
            ✅ Déjà <span className="font-bold text-[#2ca3bd]">50+ projets</span> redressés
          </p>

          {/* Logo Carousel */}
          <div className="mt-16 pt-8 border-t border-gray-200/10">
            <p className={`text-xs uppercase tracking-widest mb-6 ${
              theme === 'dark' ? 'text-white/40' : 'text-gray-400'
            }`}>
              Entreprises partenaires
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
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
