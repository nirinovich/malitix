import { RefreshCcw, Smartphone, Shield, Database, Brain, ArrowRight } from 'lucide-react';
import { SERVICES } from '../utils/constants';
import { useTheme } from '../context/ThemeContext';

export default function ServicesBento() {
  const { theme } = useTheme();
  
  return (
    <section id="services" className={`py-24 bg-gradient-to-b relative ${
      theme === 'dark' 
        ? 'from-[#0a0e0d] to-[#060705]'
        : 'from-gray-50 to-white'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-400/20'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block bg-[#2ca3bd]/10 border border-[#2ca3bd]/30 rounded-full px-4 py-2 text-sm text-[#2ca3bd] font-medium mb-4">
            Nos Services
          </div>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Une expertise complète pour tous vos besoins tech
          </h2>
          <p className={`text-lg ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
          }`}>
            De la conception à la mise en production, nous accompagnons votre transformation digitale
          </p>
        </div>

        {/* Bento Grid Layout - Properly structured like reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Row 1: Two cards side by side */}
          {/* Service 1 - Refonte de SI */}
          <div className={`group backdrop-blur-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20 hover:border-[#2ca3bd]/50 hover:shadow-[#2ca3bd]/20'
              : 'bg-gradient-to-br from-white to-blue-50 border border-blue-200 hover:border-blue-400 hover:shadow-blue-200/50'
          }`}>
            <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 ${
              theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-400/20'
            }`}></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="bg-[#2ca3bd] p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <RefreshCcw className="text-white" size={32} />
              </div>
              
              <h3 className={`text-2xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {SERVICES[0].title}
              </h3>
              
              <p className={`mb-6 flex-grow ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-600'
              }`}>
                {SERVICES[0].description}
              </p>
              
              <a href="#contact" className="flex items-center gap-2 text-[#2ca3bd] font-semibold group-hover:gap-4 transition-all">
                En savoir plus
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

          {/* Service 2 - Développement produit */}
          <div className={`group backdrop-blur-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20 hover:border-[#2ca3bd]/50 hover:shadow-[#2ca3bd]/20'
              : 'bg-gradient-to-br from-white to-blue-50 border border-blue-200 hover:border-blue-400 hover:shadow-blue-200/50'
          }`}>
            <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 ${
              theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-400/20'
            }`}></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="bg-[#2ca3bd] p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="text-white" size={32} />
              </div>
              
              <h3 className={`text-2xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {SERVICES[1].title}
              </h3>
              
              <p className={`mb-6 flex-grow ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-600'
              }`}>
                {SERVICES[1].description}
              </p>
              
              <a
                href="#contact"
                className="flex items-center gap-2 text-[#2ca3bd] font-semibold group-hover:gap-4 transition-all"
              >
                En savoir plus
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

          {/* Row 2: Two cards side by side */}
          {/* Service 3 - Services managés */}
          <div className={`group backdrop-blur-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20 hover:border-[#2ca3bd]/50 hover:shadow-[#2ca3bd]/20'
              : 'bg-gradient-to-br from-white to-blue-50 border border-blue-200 hover:border-blue-400 hover:shadow-blue-200/50'
          }`}>
            <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 ${
              theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-400/20'
            }`}></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="bg-[#2ca3bd] p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="text-white" size={32} />
              </div>
              
              <h3 className={`text-2xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {SERVICES[2].title}
              </h3>
              
              <p className={`mb-6 flex-grow ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-600'
              }`}>
                {SERVICES[2].description}
              </p>
              
              <a
                href="#contact"
                className="flex items-center gap-2 text-[#2ca3bd] font-semibold group-hover:gap-4 transition-all"
              >
                En savoir plus
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

          {/* Service 4 - Data Platform (with extra features list) */}
          <div className={`group backdrop-blur-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20 hover:border-[#2ca3bd]/50 hover:shadow-[#2ca3bd]/20'
              : 'bg-gradient-to-br from-white to-blue-50 border border-blue-200 hover:border-blue-400 hover:shadow-blue-200/50'
          }`}>
            <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 ${
              theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-400/20'
            }`}></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="bg-[#2ca3bd] p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Database className="text-white" size={32} />
              </div>
              
              <h3 className={`text-2xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {SERVICES[3].title}
              </h3>
              
              <p className={`mb-4 ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-600'
              }`}>
                {SERVICES[3].description}
              </p>
              
              <div className="space-y-2 mb-6">
                {['Data Warehousing', 'ETL Pipelines', 'Analytics en temps réel', 'Data Governance'].map((feature, i) => (
                  <div key={i} className={`flex items-center gap-2 text-sm ${
                    theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                  }`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2ca3bd]"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <a
                href="#contact"
                className="flex items-center gap-2 text-[#2ca3bd] font-semibold mt-auto group-hover:gap-4 transition-all"
              >
                En savoir plus
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

          {/* Row 3: Single centered card (IA métier) */}
          <div className={`md:col-span-2 group backdrop-blur-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20 hover:border-[#2ca3bd]/50 hover:shadow-[#2ca3bd]/20'
              : 'bg-gradient-to-br from-white to-blue-50 border border-blue-200 hover:border-blue-400 hover:shadow-blue-200/50'
          }`}>
            <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 ${
              theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-400/20'
            }`}></div>
            
            <div className="relative z-10 h-full flex flex-col md:flex-row md:items-center gap-6">
              <div className="bg-[#2ca3bd] p-4 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                <Brain className="text-white" size={32} />
              </div>
              
              <div className="flex-grow">
                <h3 className={`text-2xl sm:text-3xl font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {SERVICES[4].title}
                </h3>
                
                <p className={`mb-4 ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                }`}>
                  {SERVICES[4].description}
                </p>
              </div>
              
              <a
                href="#contact"
                className="flex items-center gap-2 text-[#2ca3bd] font-semibold group-hover:gap-4 transition-all md:self-end whitespace-nowrap"
              >
                En savoir plus
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
