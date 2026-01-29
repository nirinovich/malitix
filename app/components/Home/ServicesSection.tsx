import { motion, type Variants } from 'framer-motion';
import { RefreshCcw, Smartphone, Shield, Database, Brain, ArrowRight } from 'lucide-react';
import { SERVICES } from '~/utils/constants';

export function ServicesSection() {

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-primary-dark)] relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl services-orb"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--services-accent)]"></div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase services-eyebrow">
              Nos Services
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[var(--services-accent)]"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)]">
            Une expertise complète pour tous vos besoins tech
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            De la conception à la mise en production, nous accompagnons votre transformation digitale
          </p>
        </div>

        {/* Bento Grid Layout - 2 rows maximum */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Row 1: Three cards */}
          {/* Service 1 - Refonte de SI */}
          <motion.div variants={itemVariants} className="group backdrop-blur-xl rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden border services-card">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 services-orb"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="services-icon-pill p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <RefreshCcw className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">
                {SERVICES[0].title}
              </h3>
              
              <p className="mb-6 flex-grow text-sm text-[var(--text-secondary)]">
                {SERVICES[0].description}
              </p>
              
              <a href="#contact" className="flex items-center gap-2 text-[var(--services-accent)] font-semibold group-hover:gap-4 transition-all text-sm">
                En savoir plus
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Service 2 - Développement produit */}
          <motion.div variants={itemVariants} className="group backdrop-blur-xl rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden border services-card">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 services-orb"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="services-icon-pill p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">
                {SERVICES[1].title}
              </h3>
              
              <p className="mb-6 flex-grow text-sm text-[var(--text-secondary)]">
                {SERVICES[1].description}
              </p>
              
              <a href="#contact" className="flex items-center gap-2 text-[var(--services-accent)] font-semibold group-hover:gap-4 transition-all text-sm">
                En savoir plus
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
          
           {/* Service 3 - Services managés */}
           <motion.div variants={itemVariants} className="group backdrop-blur-xl rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden border services-card">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 services-orb"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="services-icon-pill p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">
                {SERVICES[2].title}
              </h3>
              
              <p className="mb-6 flex-grow text-sm text-[var(--text-secondary)]">
                {SERVICES[2].description}
              </p>
              
              <a href="#contact" className="flex items-center gap-2 text-[var(--services-accent)] font-semibold group-hover:gap-4 transition-all text-sm">
                En savoir plus
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Row 2: Two wider cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
        >
           {/* Service 4 - Data Platform */}
           <motion.div variants={itemVariants} className="group backdrop-blur-xl rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden border services-card">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 services-orb"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="services-icon-pill p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Database className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">
                {SERVICES[3].title}
              </h3>
              
              <p className="mb-6 flex-grow text-sm text-[var(--text-secondary)]">
                {SERVICES[3].description}
              </p>
              
              <a href="#contact" className="flex items-center gap-2 text-[var(--services-accent)] font-semibold group-hover:gap-4 transition-all text-sm">
                En savoir plus
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

           {/* Service 5 - IA Métier */}
           <motion.div variants={itemVariants} className="group backdrop-blur-xl rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden border services-card">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 services-orb"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="services-icon-pill p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">
                {SERVICES[4].title}
              </h3>
              
              <p className="mb-6 flex-grow text-sm text-[var(--text-secondary)]">
                {SERVICES[4].description}
              </p>
              
              <a href="#contact" className="flex items-center gap-2 text-[var(--services-accent)] font-semibold group-hover:gap-4 transition-all text-sm">
                En savoir plus
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
