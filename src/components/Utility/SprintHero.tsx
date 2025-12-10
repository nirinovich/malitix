import { useTheme } from '../../context/ThemeContext';
import PowerButton from './PowerButtonNew';

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

export default function SprintHero() {
  const { theme } = useTheme();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-sprint');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br ${
      theme === 'dark' 
        ? 'from-[#060705] via-[#060705] to-[#0a0e0d]'
        : 'from-[var(--bg-primary)] via-[var(--bg-primary)] to-[var(--bg-primary)]'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
          theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-[var(--bg-secondary)]'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-[var(--bg-secondary)]'
        }`} style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern */}
        <div className={`absolute inset-0 bg-[size:50px_50px] ${
          theme === 'dark' 
            ? 'bg-[linear-gradient(rgba(44,163,189,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(44,163,189,0.03)_1px,transparent_1px)]'
            : 'bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]"></div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
              🚀 Sprint Commando - Déblocage Garanti en 14 Jours
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]"></div>
          </div>

          {/* Headline */}
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Vos projets IT <span className="text-[#2ca3bd]">en retard</span> ?
          </h1>
          
          <p className={`text-3xl sm:text-4xl font-semibold ${
            theme === 'dark' ? 'text-white/90' : 'text-gray-800'
          }`}>
            On redresse votre roadmap <br className="hidden sm:block" />
            en <span className="text-[#2ca3bd]">2 semaines</span>.
          </p>

          {/* CTA with Power Button */}
          <div className="pt-8">
            <PowerButton onClick={scrollToContact} text="Garanti ou gratuit" />
          </div>

          {/* Logo Carousel */}
          <div className="mt-16 relative">
            <div className="overflow-hidden relative">
              {/* Gradient overlays */}
              <div className={`absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-[#060705] to-transparent'
                  : 'bg-gradient-to-r from-[var(--bg-primary)] to-transparent'
              }`}></div>
              <div className={`absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${
                theme === 'dark'
                  ? 'bg-gradient-to-l from-[#060705] to-transparent'
                  : 'bg-gradient-to-l from-[var(--bg-primary)] to-transparent'
              }`}></div>
              
              {/* Scrolling logos */}
              <div className="flex animate-scroll-left">
                {/* First set of logos */}
                {companyLogos.map((company) => (
                  <div
                    key={`first-${company.id}`}
                    className={`flex-shrink-0 mx-6 w-32 h-16 flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-110 bg-black`}
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-w-full max-h-full object-contain p-1 filter contrast-200 mix-blend-multiply drop-shadow-md transition-all duration-300"
                      style={{ background: 'transparent' }}
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {companyLogos.map((company) => (
                  <div
                    key={`second-${company.id}`}
                    className={`flex-shrink-0 mx-6 w-32 h-16 flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-110 bg-black`}
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-w-full max-h-full object-contain p-3 filter grayscale mix-blend-multiply brightness-0 invert opacity-80 drop-shadow-md transition-all duration-300"
                      style={{ background: 'transparent' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
