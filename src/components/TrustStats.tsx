import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Clock, Award } from 'lucide-react';
import { STATS } from '../utils/constants';
import { useTheme } from '../context/ThemeContext';

const iconMap = [TrendingUp, Users, Award, Clock];

export default function TrustStats() {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className={`py-24 bg-gradient-to-b relative overflow-hidden ${
        theme === 'dark' 
          ? 'from-[#060705] to-[#0a0e0d]'
          : 'from-white to-gray-50'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-400/20'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Badge */}
        <div className="text-center mb-8">
          <div className="inline-block bg-[#2ca3bd]/10 border border-[#2ca3bd]/30 rounded-full px-4 py-2 text-sm text-[#2ca3bd] font-medium">
            Performance & Fiabilité
          </div>
        </div>

        {/* About Malitix - Human Touch */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
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
        </div>

        {/* Divider */}
        <div className={`max-w-xs mx-auto mb-16 h-px ${
          theme === 'dark' ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent' : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'
        }`}></div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => {
            const Icon = iconMap[index];
            
            return (
              <div
                key={index}
                className={`group relative backdrop-blur-xl rounded-3xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#2ca3bd]/50 hover:shadow-[#2ca3bd]/20'
                    : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-400 hover:shadow-blue-200/50'
                }`}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br transition-all duration-500 ${
                  theme === 'dark'
                    ? 'from-[#2ca3bd]/0 to-[#2ca3bd]/0 group-hover:from-[#2ca3bd]/10 group-hover:to-transparent'
                    : 'from-blue-400/0 to-blue-400/0 group-hover:from-blue-400/10 group-hover:to-transparent'
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
                      {isVisible && (
                        <CountUp end={stat.value} suffix={stat.suffix || ''} />
                      )}
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
                    : 'border-blue-400/0 group-hover:border-blue-400/30'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Partner Logos */}
        <div className="mt-16 text-center">
          <div className={`inline-flex flex-wrap items-center justify-center gap-8 backdrop-blur-xl rounded-3xl px-12 py-8 ${
            theme === 'dark'
              ? 'bg-white/5 border border-white/10'
              : 'bg-gray-50 border border-gray-200'
          }`}>
            <div className={`font-semibold ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-700'
            }`}>Certifié par :</div>
            
            {/* GCP Logo */}
            <div className="group cursor-default transition-all duration-300 hover:scale-110">
              <img 
                src="/images/GCP.webp" 
                alt="Google Cloud Platform" 
                className={`h-8 w-auto object-contain transition-all duration-300 ${
                  theme === 'dark' ? 'opacity-70 group-hover:opacity-100 brightness-0 invert' : 'opacity-70 group-hover:opacity-100'
                }`}
              />
            </div>

            {/* Cisco Logo */}
            <div className="group cursor-default transition-all duration-300 hover:scale-110">
              <img 
                src="/images/Cisco.webp" 
                alt="Cisco" 
                className={`h-8 w-auto object-contain transition-all duration-300 ${
                  theme === 'dark' ? 'opacity-70 group-hover:opacity-100 brightness-0 invert' : 'opacity-70 group-hover:opacity-100'
                }`}
              />
            </div>

            {/* HubSpot Logo */}
            <div className="group cursor-default transition-all duration-300 hover:scale-110">
              <img 
                src="/images/Hubspot.webp" 
                alt="HubSpot" 
                className={`h-8 w-auto object-contain transition-all duration-300 ${
                  theme === 'dark' ? 'opacity-70 group-hover:opacity-100 brightness-0 invert' : 'opacity-70 group-hover:opacity-100'
                }`}
              />
            </div>

            {/* Salesforce Logo */}
            <div className="group cursor-default transition-all duration-300 hover:scale-110">
              <img 
                src="/images/Salesforce.webp" 
                alt="Salesforce" 
                className={`h-8 w-auto object-contain transition-all duration-300 ${
                  theme === 'dark' ? 'opacity-70 group-hover:opacity-100 brightness-0 invert' : 'opacity-70 group-hover:opacity-100'
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Simple CountUp Component
function CountUp({ end, suffix }: { end: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const numericEnd = parseFloat(end);
  
  useEffect(() => {
    if (isNaN(numericEnd)) {
      return;
    }

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
  }, [numericEnd]);

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
