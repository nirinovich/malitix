import { ArrowRight, Code2, Zap, TrendingUp } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function CustomDevHero() {
  const { theme } = useTheme();

  const scrollToROI = () => {
    const roiSection = document.getElementById('contact-customdev');
    roiSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-[#060705] via-[#060705] to-[#0a0e0d]'
        : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Content */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl border animate-fade-in-up" 
                 style={{ 
                   backgroundColor: theme === 'dark' ? 'rgba(44, 163, 189, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                   borderColor: theme === 'dark' ? 'rgba(44, 163, 189, 0.3)' : 'rgba(59, 130, 246, 0.3)'
                 }}>
              <Zap className="text-[#2ca3bd]" size={16} />
              <span className={`text-xs font-semibold uppercase tracking-wider ${
                theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'
              }`}>
                Développement Sur Mesure
              </span>
            </div>

            {/* Headline */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Arrêtez de Tordre Votre Business pour Rentrer dans un{' '}
              <span className="relative inline-block">
                <span className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'}>
                  Logiciel Standard
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path 
                    d="M0 6 Q50 0, 100 6 T200 6" 
                    stroke={theme === 'dark' ? '#2ca3bd' : '#3b82f6'} 
                    strokeWidth="4" 
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <div className="space-y-4">
              <p className={`text-xl sm:text-2xl md:text-3xl font-semibold leading-relaxed ${
                theme === 'dark' ? 'text-white/90' : 'text-gray-800'
              }`}>
                Obtenez l'Outil Exact dont Votre Entreprise a Besoin pour Scaler –{' '}
                <span className={`font-black ${theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'}`}>
                  Livré en 90 Jours, Garanti Sans Bug
                </span>
              </p>
              
              <p className={`text-lg sm:text-xl ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-600'
              }`}>
                Fini les fichiers Excel ingérables et les SaaS trop rigides. Nous développons votre Application Web ou Mobile Sur Mesure pour automatiser vos process et sécuriser votre croissance.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <button
                onClick={scrollToROI}
                className={`group relative px-8 py-5 text-lg font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white shadow-[0_0_30px_rgba(44,163,189,0.3)]'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Calculer le ROI de mon Logiciel Sur Mesure
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
              
              <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>
                On parle d'investissement, pas de dépense
              </p>
            </div>
          </div>

          {/* Right Side - Floating Cards */}
          <div className="relative hidden lg:block">
            <div className="relative h-[600px]">
              {/* Scalability Card */}
              <div 
                className={`absolute top-20 left-10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl animate-float ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20 shadow-[#2ca3bd]/20'
                    : 'bg-gradient-to-br from-white to-blue-50 border border-blue-200 shadow-blue-200/50'
                }`}
                style={{ animationDelay: '0s' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#2ca3bd] p-2 rounded-lg">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <div>
                    <div className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Architecture Évolutive</div>
                    <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>100 → 1M utilisateurs</div>
                  </div>
                </div>
                <div className={`text-xs ${theme === 'dark' ? 'text-white/70' : 'text-gray-700'}`}>
                  Conçu pour grandir avec vous
                </div>
              </div>

              {/* UX Card */}
              <div 
                className={`absolute top-32 right-10 backdrop-blur-xl rounded-2xl p-5 shadow-2xl animate-float ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20 shadow-[#2ca3bd]/20'
                    : 'bg-gradient-to-br from-white to-blue-50 border border-blue-200 shadow-blue-200/50'
                }`}
                style={{ animationDelay: '1s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#2ca3bd] p-2 rounded-lg">
                    <Zap className="text-white" size={20} />
                  </div>
                  <div>
                    <div className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>UX Intuitive</div>
                    <div className="text-[#2ca3bd] text-xs font-mono">Formation: 0 jour</div>
                  </div>
                </div>
              </div>

              {/* IP Ownership Card */}
              <div 
                className={`absolute bottom-32 left-20 backdrop-blur-xl rounded-2xl p-5 shadow-2xl animate-float ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20 shadow-[#2ca3bd]/20'
                    : 'bg-gradient-to-br from-white to-blue-50 border border-blue-200 shadow-blue-200/50'
                }`}
                style={{ animationDelay: '2s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#2ca3bd] p-2 rounded-lg">
                    <Code2 className="text-white" size={20} />
                  </div>
                  <div>
                    <div className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Propriété Totale</div>
                    <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>Le code vous appartient</div>
                  </div>
                </div>
              </div>

              {/* Center large card - Code snippet */}
              <div 
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-xl rounded-2xl p-6 shadow-2xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20 shadow-[#2ca3bd]/20'
                    : 'bg-gradient-to-br from-white to-blue-50 border border-blue-200 shadow-blue-200/50'
                }`}
              >
                <div className={`rounded-lg p-4 font-mono text-xs space-y-1 ${
                  theme === 'dark' ? 'bg-[#060705]/50' : 'bg-gray-100'
                }`}>
                  <div className="text-[#2ca3bd]">{'const solution = {'}</div>
                  <div className={`pl-4 ${theme === 'dark' ? 'text-white/70' : 'text-gray-700'}`}>
                    business: <span className="text-green-500">"YOUR_RULES"</span>,
                  </div>
                  <div className={`pl-4 ${theme === 'dark' ? 'text-white/70' : 'text-gray-700'}`}>
                    scalability: <span className="text-green-500">"UNLIMITED"</span>,
                  </div>
                  <div className={`pl-4 ${theme === 'dark' ? 'text-white/70' : 'text-gray-700'}`}>
                    ownership: <span className="text-green-500">"100%"</span>
                  </div>
                  <div className="text-[#2ca3bd]">{'};'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
