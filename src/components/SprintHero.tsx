import { useTheme } from '../context/ThemeContext';
import PowerButton from './PowerButtonNew';

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
        : 'from-white via-gray-50 to-gray-100'
    }`}>
      {/* Animated Background */}
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
        <div className="text-center max-w-5xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-block bg-[#2ca3bd]/10 border border-[#2ca3bd]/30 rounded-full px-6 py-2 text-sm text-[#2ca3bd] font-medium mb-4">
            🚀 Sprint Commando - Déblocage Garanti en 14 Jours
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
        </div>
      </div>
    </section>
  );
}
