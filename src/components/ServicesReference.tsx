import { RefreshCcw, Smartphone, Shield, Database, Brain, ArrowRight } from 'lucide-react';
import { SERVICES } from '../utils/constants';

const iconMap = {
  RefreshCcw,
  Smartphone,
  Shield,
  Database,
  Brain,
};

export default function ServicesReference() {
  return (
    <section id="services" className="py-24 bg-[#060705] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2ca3bd]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2ca3bd]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-block bg-[#2ca3bd]/10 border border-[#2ca3bd]/30 rounded-full px-4 py-2 text-sm text-[#2ca3bd] font-medium mb-4">
            Nos Services
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Des solutions sur mesure pour votre réussite
          </h2>
          <p className="text-lg text-white/70">
            Expertise tech complète pour propulser votre entreprise vers l'avenir
          </p>
        </div>

        {/* Services Grid - Reference Design Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const isLarge = index === 0 || index === 4; // First and last cards are larger
            
            return (
              <div
                key={service.id}
                className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#2ca3bd]/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#2ca3bd]/20 ${
                  isLarge ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2ca3bd]/0 to-[#2ca3bd]/0 group-hover:from-[#2ca3bd]/10 group-hover:to-transparent transition-all duration-500"></div>
                
                <div className="relative z-10 space-y-6">
                  {/* Icon with animated background */}
                  <div className="relative w-fit">
                    <div className="absolute inset-0 bg-[#2ca3bd]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-[#2ca3bd] to-[#248fa5] p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      {Icon && <Icon className="text-white" size={32} />}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#2ca3bd] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Learn more link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[#2ca3bd] font-semibold group-hover:gap-4 transition-all duration-300"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight 
                      size={20} 
                      className="group-hover:translate-x-1 transition-transform duration-300" 
                    />
                  </a>

                  {/* Corner decoration */}
                  <div className="absolute top-6 right-6 w-20 h-20 border-t-2 border-r-2 border-[#2ca3bd]/0 group-hover:border-[#2ca3bd]/30 rounded-tr-3xl transition-all duration-500"></div>
                </div>

                {/* Card number */}
                <div className="absolute bottom-6 right-6 text-6xl font-bold text-white/5 group-hover:text-[#2ca3bd]/10 transition-colors duration-500">
                  0{index + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-white/70 mb-6">
            Vous ne trouvez pas ce que vous cherchez ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 hover:border-[#2ca3bd]/50 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Discutons de votre projet
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
