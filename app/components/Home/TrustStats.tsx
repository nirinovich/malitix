import { motion, useInView, type Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Clock, Award } from 'lucide-react';
import { STATS } from '~/utils/constants';
import { useTheme } from '~/context/ThemeContext';

const iconMap = [TrendingUp, Users, Award, Clock];

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

export function TrustStats() {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className={`py-24 bg-gradient-to-b relative overflow-hidden ${
        theme === 'dark' 
          ? 'from-[#060705] to-[#0a0e0d]'
          : 'from-[var(--bg-primary)] to-[var(--bg-primary)]'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-[var(--bg-secondary)]'
        }`}></div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Section Badge */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]"></div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
              Performance & Fiabilité
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]"></div>
          </div>
        </motion.div>

        {/* About Malitix - Human Touch */}
        <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <h2 className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-bold mb-4 leading-tight ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Chez Malitix, nous ne construisons pas que du code,{' '}
            <span className="text-[#2ca3bd]">nous créons des solutions qui changent la donne</span>
          </h2>
          <p className={`text-lg leading-relaxed ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
          }`}>
            Nous sommes une équipe passionnée qui croit que la technologie doit servir l'humain, pas l'inverse. 
            Chaque projet est une opportunité de transformer vos défis en succès concrets. Que vous soyez une startup 
            ambitieuse ou une entreprise établie, nous mettons notre expertise au service de votre vision pour créer 
            des expériences digitales qui marquent les esprits.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div variants={itemVariants} className={`max-w-xs mx-auto mb-16 h-px ${
          theme === 'dark' ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent' : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'
        }`}></motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => {
            const Icon = iconMap[index];
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative backdrop-blur-xl rounded-3xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#2ca3bd]/50 hover:shadow-[#2ca3bd]/20'
                    : 'bg-gradient-to-br from-[var(--surface-primary)] to-[var(--surface-primary)] border border-gray-200 hover:border-[#2ca3bd]/40 hover:shadow-[#2ca3bd]/20'
                }`}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br transition-all duration-500 ${
                  theme === 'dark'
                    ? 'from-[#2ca3bd]/0 to-[#2ca3bd]/0 group-hover:from-[#2ca3bd]/10 group-hover:to-transparent'
                    : 'from-[#2ca3bd]/0 to-[#2ca3bd]/0 group-hover:from-[#2ca3bd]/10 group-hover:to-transparent'
                }`}></div>
                
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="bg-[#2ca3bd]/10 p-3 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-[#2ca3bd]" size={24} />
                  </div>

                  {/* Stat Value */}
                  <div>
                    <div className={`text-4xl lg:text-5xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      <CountUp end={stat.value} suffix={stat.suffix || ''} isVisible={isVisible} />
                    </div>
                    <div className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                    }`}>
                      {stat.label}
                    </div>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className={`absolute top-4 right-4 w-16 h-16 border-t border-r rounded-tr-2xl transition-all duration-500 ${
                  theme === 'dark'
                    ? 'border-[#2ca3bd]/0 group-hover:border-[#2ca3bd]/30'
                    : 'border-[#2ca3bd]/40/0 group-hover:border-[#2ca3bd]/40/30'
                }`}></div>
              </motion.div>
            );
          })}
        </div>

        {/* Partner Logos */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <div className={`inline-flex flex-wrap items-center justify-center gap-8 backdrop-blur-xl rounded-3xl px-12 py-8 ${
            theme === 'dark'
              ? 'bg-white/5 border border-white/10'
              : 'bg-[var(--bg-secondary)] border border-gray-200'
          }`}>
            <div className={`font-semibold ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-700'
            }`}>Certifié par :</div>
            
            {/* GCP Logo */}
            <div className="group cursor-default transition-all duration-300 hover:scale-110">
              <img 
                src="/images/GCP.webp" 
                alt="Google Cloud Platform" 
                className={`h-8 w-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 ${
                  theme === 'dark' ? 'grayscale' : 'invert'
                }`}
              />
            </div>

            {/* Cisco Logo */}
            <div className="group cursor-default transition-all duration-300 hover:scale-110">
              <img 
                src="/images/Cisco.webp" 
                alt="Cisco" 
                className={`h-8 w-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 ${
                  theme === 'dark' ? 'grayscale' : 'invert'
                }`}
              />
            </div>

            {/* HubSpot Logo */}
            <div className="group cursor-default transition-all duration-300 hover:scale-110">
              <img 
                src="/images/Hubspot.webp" 
                alt="HubSpot" 
                className={`h-8 w-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 ${
                  theme === 'dark' ? 'grayscale' : 'invert'
                }`}
              />
            </div>

            {/* Salesforce Logo */}
            <div className="group cursor-default transition-all duration-300 hover:scale-110">
              <img 
                src="/images/Salesforce.webp" 
                alt="Salesforce" 
                className={`h-8 w-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 ${
                  theme === 'dark' ? 'grayscale' : 'invert'
                }`}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Simple CountUp Component
function CountUp({ end, suffix, isVisible }: { end: string; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const numericEnd = parseFloat(end);
  
  useEffect(() => {
    // Handle special case for "24/7"
    if (end === '24/7') {
      return;
    }

    if (isNaN(numericEnd) || hasAnimated || !isVisible) {
      return;
    }

    setHasAnimated(true);
    let startTime: number;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(progress * numericEnd);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [numericEnd, hasAnimated, end, isVisible]);

  // Handle special case for "24/7"
  if (end === '24/7') {
    return <span>24/7</span>;
  }

  // Format number
  const displayValue = numericEnd % 1 === 0 
    ? Math.floor(count) 
    : count.toFixed(1);

  return (
    <span>
      {displayValue}{suffix}
    </span>
  );
}
