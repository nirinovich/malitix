import { motion, type Variants } from 'framer-motion';
import { useTheme } from '~/context/ThemeContext';
import { CTAButtonV3 } from '~/components/Utility/CTAButtons';
import { ProgressRescueGaugeVariant } from '~/components/Utility/ProgressIllustration';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

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
export default function SprintHero() {
  const { theme } = useTheme();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-sprint');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const ButtonComponent = CTAButtonV3;

  // Fixed illustration: Progress Rescue
  const IllustrationComponent = ProgressRescueGaugeVariant;

  return (
    <section className={`relative min-h-screen sm:min-h-[90vh] flex items-center overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-[#060705] via-[#060705] to-[#0a0e0d]'
        : 'bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-primary)] to-[var(--bg-primary)]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Colonne gauche - Contenu */}
          <motion.div 
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-5">
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Vos projets IT{' '}
                <span className="relative inline-block">
                  <span className="text-[#2ca3bd]">en retard ?</span>
                  <svg className="absolute -bottom-2 sm:-bottom-3 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none">
                    <path 
                      d="M0 5 Q50 0, 100 5 T200 5" 
                      stroke={theme === 'dark' ? '#2ca3bd' : '#2ca3bd'} 
                      strokeWidth="4" 
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
              
              <div className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed ${
                theme === 'dark' ? 'text-white/90' : 'text-gray-800'
              }`}>
                On redresse votre roadmap <br className="hidden sm:inline" />
                en <span className={`font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${
                  theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'
                }`}>2 semaines</span>.
              </div>
            </motion.div>

            {/* Features rapides */}
            <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
              {['✓ Diagnostic en 48h', '✓ Équipe dédiée', '✓ Résultats mesurables'].map((feature) => (
                <div key={feature} className={`flex items-center gap-3 text-base sm:text-lg lg:text-xl ${
                  theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                }`}>
                  <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                    theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-[var(--bg-secondary)]'
                  }`}>
                    <span className="text-[#2ca3bd] text-sm sm:text-base font-bold">✓</span>
                  </div>
                  {feature.replace('✓ ', '')}
                </div>
              ))}
            </motion.div>

            {/* CTA avec CTAButtonV3 */}
            <motion.div variants={itemVariants} className="pt-4 sm:pt-6">
              <ButtonComponent onClick={scrollToContact} />
            </motion.div>

            {/* Stats de confiance */}
            <motion.div variants={itemVariants} className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-10 mt-8 sm:mt-10 border-t ${
              theme === 'dark' ? 'border-white/10' : 'border-gray-200'
            }`}>
              {[
                { value: '600+', label: 'Projets livrés' },
                { value: '350+', label: 'Développeurs' },
                { value: '15 ans', label: "D'expertise" },
                { value: '24h', label: 'Temps de réponse' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 ${
                    theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-xs sm:text-sm lg:text-base ${
                    theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Colonne droite - Visual Illustration */}
          <motion.div 
            className="relative flex justify-center items-center order-1 lg:order-2 h-[300px] sm:h-[400px] lg:h-[500px] pt-[10vh] lg:pt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="scale-75 sm:scale-90 lg:scale-100">
              <IllustrationComponent />
            </div>
          </motion.div>
        </div>

        {/* Logo Carousel en bas */}
        <motion.div 
          className={`mt-16 sm:mt-20 lg:mt-24 pt-8 sm:pt-10 lg:pt-12 border-t ${
            theme === 'dark' ? 'border-white/10' : 'border-gray-200'
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className={`text-center text-xs sm:text-sm uppercase tracking-widest mb-6 sm:mb-8 ${
            theme === 'dark' ? 'text-white/40' : 'text-gray-400'
          }`}>
            Ils nous font confiance
          </p>
          <div className="overflow-hidden relative">
            <div className={`absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-[#060705] to-transparent'
                : 'bg-gradient-to-r from-[var(--bg-primary)] to-transparent'
            }`}></div>
            <div className={`absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none ${
              theme === 'dark'
                ? 'bg-gradient-to-l from-[#060705] to-transparent'
                : 'bg-gradient-to-l from-[var(--bg-primary)] to-transparent'
            }`}></div>
            
            <div className="flex animate-scroll-left">
              {companyLogos.map((company) => (
                <div
                  key={`first-${company.id}`}
                  className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-8 w-24 sm:w-32 lg:w-36 h-14 sm:h-16 lg:h-20 flex items-center justify-center"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain p-2 sm:p-3 filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
              {companyLogos.map((company) => (
                <div
                  key={`second-${company.id}`}
                  className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-8 w-24 sm:w-32 lg:w-36 h-14 sm:h-16 lg:h-20 flex items-center justify-center"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain p-2 sm:p-3 filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
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
