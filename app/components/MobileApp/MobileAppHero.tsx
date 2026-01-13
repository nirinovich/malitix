import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import styles from './MobileAppHero.module.css';

const MobileAppHero = React.memo(() => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [animationCycle, setAnimationCycle] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setPrefersReducedMotion(media.matches);
    handleChange();
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const shouldAnimate = entry.isIntersecting && !prefersReducedMotion;
        setIsAnimating(shouldAnimate);
        if (shouldAnimate) {
          setAnimationCycle(prev => prev + 1);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsAnimating(false);
    }
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[var(--bg-primary)] relative overflow-hidden flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Minimal Headline */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[var(--text-primary)] leading-tight">
                Catapultez votre appli mobile.
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#2ca3bd] mt-3 sm:mt-4">
                Construisez une application que vous possédez vraiment. Rapide. Sécurisée. Et prête pour la guerre.
              </h2>
            </div>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              Une équipe complète de spécialistes mobiles. Pas de freelance débordé. Pas d'outils automatiques fragiles.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <CheckCircle2 className="text-[#2ca3bd] flex-shrink-0" size={20} />
                <span className="text-sm sm:text-base text-[var(--text-primary)]">Propriétaire du code à 100%</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <CheckCircle2 className="text-[#2ca3bd] flex-shrink-0" size={20} />
                <span className="text-sm sm:text-base text-[var(--text-primary)]">Rapide, même avec des millions d'utilisateurs</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <CheckCircle2 className="text-[#2ca3bd] flex-shrink-0" size={20} />
                <span className="text-sm sm:text-base text-[var(--text-primary)]">Sécurisé (DORA/RGAA compliant)</span>
              </div>
            </div>
            <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-[#2ca3bd] hover:bg-[#1e7a8f] text-white text-sm sm:text-base font-bold rounded-lg transition-all w-full sm:w-auto">
              Faire auditer mon projet
            </button>
          </div>

          {/* Right: Animated Catapult Illustration */}
          <CatapultIllustration key={animationCycle} isAnimating={isAnimating} />
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="var(--bg-secondary)" fillOpacity="0.3"></path>
        </svg>
      </div>
    </section>
  );
});

MobileAppHero.displayName = 'MobileAppHero';

type CatapultIllustrationProps = {
  isAnimating: boolean;
};

const CatapultIllustration: React.FC<CatapultIllustrationProps> = ({ isAnimating }) => {
  const armClass = `${styles.catapultArm} ${!isAnimating ? styles.paused : ''}`;
  const phoneClass = `${styles.phoneLaunch} ${!isAnimating ? styles.paused : ''}`;
  const targetClass = `${styles.targetGlow} ${!isAnimating ? styles.paused : ''}`;
  const successClass = `${styles.successText} ${!isAnimating ? styles.paused : ''}`;

  return (
    <div className="relative h-[300px] sm:h-[380px] md:h-[460px] lg:h-[520px] flex items-center justify-center p-2 sm:p-4 overflow-visible">
      <svg
        className="w-full h-full overflow-visible"
        viewBox="-20 0 450 420"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        role="presentation"
        aria-hidden="true"
      >
        {/* Ground */}
        <rect x="0" y="350" width="400" height="50" fill="var(--bg-secondary)" opacity="0.3" />
        <line x1="0" y1="350" x2="400" y2="350" stroke="var(--text-secondary)" strokeWidth="2" opacity="0.2" />

        {/* Catapult Base */}
        <g>
          {/* Base Platform */}
          <rect x="80" y="280" width="80" height="40" fill="#1e7a8f" rx="4" />
          <rect x="75" y="315" width="90" height="20" fill="#0d5a6d" rx="2" />

          {/* Wheels */}
          <circle cx="95" cy="335" r="8" fill="#2ca3bd" />
          <circle cx="165" cy="335" r="8" fill="#2ca3bd" />
          <line x1="95" y1="335" x2="95" y2="343" stroke="#0d5a6d" strokeWidth="1" />
          <line x1="165" y1="335" x2="165" y2="343" stroke="#0d5a6d" strokeWidth="1" />
        </g>

        {/* Catapult Arm with Phone */}
        <g className={armClass} style={isAnimating ? { willChange: 'transform' } : undefined}>
          {/* Arm */}
          <rect x="110" y="120" width="20" height="160" fill="#2ca3bd" rx="10" />
          {/* Cup */}
          <circle cx="120" cy="110" r="18" fill="#3bb8d4" />
          <circle cx="120" cy="110" r="14" fill="#2ca3bd" />
        </g>

        {/* Catapult Support */}
        <g>
          <line x1="90" y1="280" x2="120" y2="180" stroke="#1e7a8f" strokeWidth="8" strokeLinecap="round" />
          <line x1="150" y1="280" x2="120" y2="180" stroke="#1e7a8f" strokeWidth="8" strokeLinecap="round" />
        </g>

        {/* Phone Flying (after release) */}
        <g
          className={phoneClass}
          style={isAnimating ? { transformOrigin: '120px 110px', willChange: 'transform, opacity' } : { transformOrigin: '120px 110px' }}
        >
          {/* Phone Body */}
          <rect x="101" y="77" width="38" height="66" fill="#1e7a8f" rx="5" />

          {/* Phone Screen */}
          <rect x="105" y="85" width="30" height="50" fill="#2ca3bd" rx="3" />

          {/* Screen Content Bars */}
          <rect x="109" y="89" width="22" height="3" fill="#ffffff" opacity="0.8" rx="1" />
          <rect x="109" y="95" width="18" height="2" fill="#ffffff" opacity="0.6" rx="1" />
          <rect x="109" y="99" width="18" height="2" fill="#ffffff" opacity="0.6" rx="1" />
          <rect x="109" y="103" width="18" height="2" fill="#ffffff" opacity="0.6" rx="1" />

          {/* Notch */}
          <rect x="113" y="85" width="10" height="5" fill="#1e7a8f" rx="2" />

          {/* Home Button */}
          <circle cx="120" cy="137" r="2.5" fill="#ffffff" opacity="0.4" />
        </g>

        {/* Target Indicator - positioned at actual phone landing coordinates */}
        <g className={targetClass}>
          <circle cx="405" cy="130" r="25" fill="none" stroke="#2ca3bd" strokeWidth="2" strokeDasharray="5,5" />
          <circle cx="405" cy="130" r="35" fill="none" stroke="#2ca3bd" strokeWidth="1" strokeDasharray="8,8" opacity="0.5" />
          <line x1="400" y1="130" x2="390" y2="130" stroke="#2ca3bd" strokeWidth="1.5" />
          <line x1="410" y1="130" x2="420" y2="130" stroke="#2ca3bd" strokeWidth="1.5" />
          <line x1="405" y1="125" x2="405" y2="115" stroke="#2ca3bd" strokeWidth="1.5" />
          <line x1="405" y1="135" x2="405" y2="145" stroke="#2ca3bd" strokeWidth="1.5" />
        </g>
        
        {/* "Succès" text - no glow effect */}
        <text 
          x="405" 
          y="190" 
          textAnchor="middle" 
          fill="#2ca3bd" 
          fontSize="16" 
          fontWeight="bold"
          className={successClass}
        >
          Succès
        </text>
      </svg>
    </div>
  );
};

export default MobileAppHero;
