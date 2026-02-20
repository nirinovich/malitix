import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Clock, Award } from 'lucide-react';
import { STATS } from '~/utils/constants';

const iconMap = [TrendingUp, Users, Award, Clock];

export function TrustStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          el.querySelectorAll('.animate-on-scroll').forEach((child) => child.classList.add('in-view'));
          observer.unobserve(el);
        }
      },
      { rootMargin: '-100px', threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-24 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl bg-[var(--bg-secondary)]"></div>
      </div>

      <div 
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-opacity duration-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Section Badge */}
        <div className="text-center mb-8 animate-on-scroll stagger-1">
          <div className="inline-flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]"></div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
              Performance & Fiabilité
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]"></div>
          </div>
        </div>

        {/* About Malitix - Human Touch */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6 animate-on-scroll stagger-2">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold mb-4 leading-tight text-[var(--text-primary)]">
            Chez Malitix, nous ne construisons pas que du code,{' '}
            <span className="text-[#2ca3bd]">nous créons des solutions qui changent la donne</span>
          </h2>
          <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
            Nous sommes une équipe passionnée qui croit que la technologie doit servir l'humain, pas l'inverse. 
            Chaque projet est une opportunité de transformer vos défis en succès concrets. Que vous soyez une startup 
            ambitieuse ou une entreprise établie, nous mettons notre expertise au service de votre vision pour créer 
            des expériences digitales qui marquent les esprits.
          </p>
        </div>

        {/* Divider */}
        <div className="max-w-xs mx-auto mb-16 h-px bg-gradient-to-r from-transparent via-[var(--divider-gradient)] to-transparent animate-on-scroll stagger-3"></div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => {
            const Icon = iconMap[index];
            
            return (
              <div
                key={index}
                className={`group relative backdrop-blur-xl rounded-3xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[#2ca3bd]/50 hover:shadow-[#2ca3bd]/20 animate-on-scroll stagger-${index + 4}`}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2ca3bd]/0 to-[#2ca3bd]/0 transition-all duration-500 group-hover:from-[#2ca3bd]/10 group-hover:to-transparent"></div>
                
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="bg-[#2ca3bd]/10 p-3 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-[#2ca3bd]" size={24} />
                  </div>

                  {/* Stat Value */}
                  <div>
                    <div className="text-4xl lg:text-5xl font-bold mb-2 text-[var(--text-primary)]">
                      <CountUp end={stat.value} suffix={stat.suffix || ''} isVisible={isVisible} />
                    </div>
                    <div className="text-sm font-medium text-[var(--text-secondary)]">
                      {stat.label}
                    </div>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 w-16 h-16 border-t border-r rounded-tr-2xl transition-all duration-500 border-[#2ca3bd]/0 group-hover:border-[#2ca3bd]/30"></div>
              </div>
            );
          })}
        </div>

        {/* Partner Logos */}
        <div className="mt-16 text-center animate-on-scroll stagger-5">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 backdrop-blur-xl rounded-3xl px-12 py-8 bg-[var(--card-bg)] border border-[var(--card-border)]">
            <div className="font-semibold text-[var(--text-secondary)]">Certifié par :</div>
            
            {/* GCP Logo */}
            <div className="group cursor-default transition-all duration-300 hover:scale-110">
              <img 
                src="/images/GCP.webp" 
                alt="Google Cloud Platform" 
                loading="lazy"
                width={80}
                height={32}
                className="h-8 w-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 dark:grayscale light:invert"
                style={{ filter: 'var(--logo-filter)' }}
              />
            </div>

            {/* Cisco Logo */}
            <div className="group cursor-default transition-all duration-300 hover:scale-110">
              <img 
                src="/images/Cisco.webp" 
                alt="Cisco" 
                loading="lazy"
                width={80}
                height={32}
                className="h-8 w-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 dark:grayscale light:invert"
                style={{ filter: 'var(--logo-filter)' }}
              />
            </div>

            {/* HubSpot Logo */}
            <div className="group cursor-default transition-all duration-300 hover:scale-110">
              <img 
                src="/images/Hubspot.webp" 
                alt="HubSpot" 
                loading="lazy"
                width={80}
                height={32}
                className="h-8 w-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 dark:grayscale light:invert"
                style={{ filter: 'var(--logo-filter)' }}
              />
            </div>

            {/* Salesforce Logo */}
            <div className="group cursor-default transition-all duration-300 hover:scale-110">
              <img 
                src="/images/Salesforce.webp" 
                alt="Salesforce" 
                loading="lazy"
                width={80}
                height={32}
                className="h-8 w-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 dark:grayscale light:invert"
                style={{ filter: 'var(--logo-filter)' }}
              />
            </div>
          </div>
        </div>
      </div>
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
