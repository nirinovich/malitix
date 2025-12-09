import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2} from 'lucide-react';
import { useABTestVariant } from '../../hooks/useABTest';

export default function MobileAppHero() {
  const variant = useABTestVariant('hero');

  if (variant === 'A') {
    return <HeroVariantA />;
  } else if (variant === 'B') {
    return <HeroVariantB />;
  } else {
    return <HeroVariantC />;
  }
}

// =============================================
// VARIANT A: Split Layout with Benefits & Custom Phone Mockup
// =============================================
function HeroVariantA() {
  const [currentTime, setCurrentTime] = useState('9:41');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="min-h-screen bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] relative overflow-hidden flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Minimal Headline */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl lg:text-6xl font-black text-[var(--text-primary)] leading-tight">
                Catapultez votre appli mobile.
              </h1>
              <h2 className="text-2xl font-semibold text-[#2ca3bd] mt-4">
                Construisez une application que vous possédez vraiment. Rapide. Sécurisée. Et prête pour la guerre.
              </h2>
            </div>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Une équipe complète de spécialistes mobiles. Pas de freelance débordé. Pas d'outils automatiques fragiles.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#2ca3bd]" size={24} />
                <span className="text-[var(--text-primary)]">Propriétaire du code à 100%</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#2ca3bd]" size={24} />
                <span className="text-[var(--text-primary)]">Rapide, même avec des millions d'utilisateurs</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#2ca3bd]" size={24} />
                <span className="text-[var(--text-primary)]">Sécurisé (DORA/RGAA compliant)</span>
              </div>
            </div>
            <button className="mt-8 px-8 py-4 bg-[#2ca3bd] hover:bg-[#1e7a8f] text-white font-bold rounded-lg transition-all">
              Faire auditer mon projet
            </button>
          </div>

          {/* Right: Realistic iPhone Mockup */}
          <div className="relative h-96 lg:h-full flex items-center justify-center">
            {/* iPhone Frame */}
            <div className="relative w-72 h-full max-h-[550px]" style={{ animation: 'float 6s ease-in-out infinite' }}>
              {/* Black Bezel/Frame */}
              <div className="absolute inset-0 rounded-3xl shadow-2xl [background-color:var(--iphone-frame)]" style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)' }}></div>
              
              {/* Screen Content */}
              <div className="absolute inset-3 bg-gradient-to-b from-[#2ca3bd] via-[#1e7a8f] to-[#0d5a6d] rounded-3xl overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-6 rounded-b-3xl z-50 [background-color:var(--iphone-notch)]"></div>
                
                {/* Status Bar */}
                <div className="pt-8 px-5 text-white text-xs flex justify-between items-center h-12">
                  <span className="text-sm">{currentTime}</span>
                  <div className="flex items-center gap-1 text-xs">
                    <span>📶</span>
                    <span>📡</span>
                    <span>🔋</span>
                  </div>
                </div>

                {/* Screen Content */}
                <div className="px-6 py-4 space-y-5 overflow-y-auto max-h-[calc(100%-80px)]">
                  {/* Header */}
                  <div className="text-center space-y-1">
                    <h3 className="text-white font-bold text-lg">Votre App Mobile</h3>
                    <p className="text-blue-100 text-xs">Rapide & Sécurisée</p>
                  </div>

                  {/* Feature Cards */}
                  <div className="space-y-3">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl flex-shrink-0">⚡</div>
                        <div>
                          <p className="text-[#1e7a8f] font-semibold text-sm">Zéro Bug</p>
                          <p className="text-[#1e7a8f] text-opacity-70 text-xs">Vitesse Max</p>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl flex-shrink-0">🔒</div>
                        <div>
                          <p className="text-[#1e7a8f] font-semibold text-sm">Sécurisé</p>
                          <p className="text-[#1e7a8f] text-opacity-70 text-xs">DORA/RGAA</p>
                        </div>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl flex-shrink-0">📈</div>
                        <div>
                          <p className="text-[#1e7a8f] font-semibold text-sm">Scalable</p>
                          <p className="text-[#1e7a8f] text-opacity-70 text-xs">Millions d'users</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button on Screen */}
                  <button className="w-full bg-white text-[#1e7a8f] font-bold py-2 rounded-xl text-sm hover:bg-blue-50 transition-all">
                    Commencer
                  </button>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-36 h-1 rounded-full [background-color:var(--iphone-notch)]"></div>
              </div>

              {/* iPhone Camera Cutout (Notch) */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-36 h-5 rounded-b-2xl z-50 flex items-center justify-center [background-color:var(--iphone-notch)]">
                <div className="w-5 h-5 rounded-full border-2 [background-color:var(--iphone-notch)] [border-color:var(--iphone-camera-border)]"></div>
              </div>

              {/* Glossy iPhone Shine */}
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white via-transparent to-transparent opacity-10 rounded-3xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT B: Split Layout with Benefits
// =============================================
function HeroVariantB() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] relative overflow-hidden flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Minimal Headline */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl lg:text-6xl font-black text-[var(--text-primary)] leading-tight">
                Catapultez votre appli mobile.
              </h1>
              <h2 className="text-2xl font-semibold text-[#2ca3bd] mt-4">
                Construisez une application que vous possédez vraiment. Rapide. Sécurisée. Et prête pour la guerre.
              </h2>
            </div>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Une équipe complète de spécialistes mobiles. Pas de freelance débordé. Pas d'outils automatiques fragiles.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#2ca3bd]" size={24} />
                <span className="text-[var(--text-primary)]">Propriétaire du code à 100%</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#2ca3bd]" size={24} />
                <span className="text-[var(--text-primary)]">Rapide, même avec des millions d'utilisateurs</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#2ca3bd]" size={24} />
                <span className="text-[var(--text-primary)]">Sécurisé (DORA/RGAA compliant)</span>
              </div>
            </div>
            <button className="mt-8 px-8 py-4 bg-[#2ca3bd] hover:bg-[#1e7a8f] text-white font-bold rounded-lg transition-all">
              Faire auditer mon projet
            </button>
          </div>

          {/* Right: Animated Catapult Illustration */}
          <div className="relative h-[460px] lg:h-[520px] flex items-center justify-center p-4 overflow-visible">
            <svg className="w-full h-full overflow-visible" viewBox="-20 0 450 420" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
              {/* Background */}
              <defs>
                <style>{`
                  @keyframes catapultArm {
                    0%, 5% {
                      transform: rotate(0deg);
                      transform-origin: 120px 280px;
                    }
                    28% {
                      transform: rotate(-85deg);
                      transform-origin: 120px 280px;
                    }
                    35% {
                      transform: rotate(-85deg);
                      transform-origin: 120px 280px;
                    }
                    48% {
                      transform: rotate(0deg);
                      transform-origin: 120px 280px;
                    }
                    100% {
                      transform: rotate(0deg);
                      transform-origin: 120px 280px;
                    }
                  }

                  @keyframes phoneTrajectory {
                    0%, 35% {
                      opacity: 0;
                      transform: translate(0, 0) rotate(0deg) scale(1);
                    }
                    36% {
                      opacity: 1;
                      transform: translate(3px, -5px) rotate(-2deg) scale(0.995);
                    }
                    37% {
                      opacity: 1;
                      transform: translate(6px, -10px) rotate(-4deg) scale(0.998);
                    }
                    38% {
                      opacity: 1;
                      transform: translate(10px, -15px) rotate(-5deg) scale(0.998);
                    }
                    39% {
                      opacity: 1;
                      transform: translate(15px, -23px) rotate(-7deg) scale(0.997);
                    }
                    40% {
                      opacity: 1;
                      transform: translate(22px, -32px) rotate(-10deg) scale(0.98);
                    }
                    42% {
                      opacity: 1;
                      transform: translate(35px, -48px) rotate(-14deg) scale(0.985);
                    }
                    44% {
                      opacity: 1;
                      transform: translate(50px, -62px) rotate(-18deg) scale(0.987);
                    }
                    46% {
                      opacity: 1;
                      transform: translate(65px, -74px) rotate(-21deg) scale(0.988);
                    }
                    48% {
                      opacity: 1;
                      transform: translate(80px, -84px) rotate(-25deg) scale(0.99);
                    }
                    50% {
                      opacity: 1;
                      transform: translate(95px, -92px) rotate(-27deg) scale(0.991);
                    }
                    52% {
                      opacity: 1;
                      transform: translate(110px, -98px) rotate(-30deg) scale(0.992);
                    }
                    54% {
                      opacity: 1;
                      transform: translate(125px, -100px) rotate(-32deg) scale(0.992);
                    }
                    56% {
                      opacity: 1;
                      transform: translate(140px, -100px) rotate(-33deg) scale(0.993);
                    }
                    58% {
                      opacity: 1;
                      transform: translate(154px, -100px) rotate(-34deg) scale(0.994);
                    }
                    60% {
                      opacity: 1;
                      transform: translate(168px, -100px) rotate(-33deg) scale(0.995);
                    }
                    62% {
                      opacity: 1;
                      transform: translate(180px, -100px) rotate(-31deg) scale(0.996);
                    }
                    64% {
                      opacity: 1;
                      transform: translate(191px, -100px) rotate(-28deg) scale(0.997);
                    }
                    66% {
                      opacity: 1;
                      transform: translate(200px, -100px) rotate(-24deg) scale(0.998);
                    }
                    68% {
                      opacity: 1;
                      transform: translate(208px, -100px) rotate(-19deg) scale(0.999);
                    }
                    70% {
                      opacity: 1;
                      transform: translate(215px, -100px) rotate(-13deg) scale(1);
                    }
                    75% {
                      opacity: 1;
                      transform: translate(230px, -100px) rotate(-2deg) scale(1);
                    }
                    80% {
                      opacity: 1;
                      transform: translate(242px, -100px) rotate(0deg) scale(0.99);
                    }
                    85% {
                      opacity: 0.8;
                      transform: translate(251px, -100px) rotate(2deg) scale(0.97);
                    }
                    90% {
                      opacity: 0.5;
                      transform: translate(258px, -100px) rotate(3deg) scale(0.95);
                    }
                    95% {
                      opacity: 0.2;
                      transform: translate(265px, -100px) rotate(4deg) scale(0.93);
                    }
                    100% {
                      opacity: 0;
                      transform: translate(280px, -100px) rotate(5deg) scale(0.9);
                    }
                  }

                  @keyframes motionStreak {
                    0%, 35% {
                      opacity: 0;
                    }
                    38% {
                      opacity: 0.3;
                    }
                    65% {
                      opacity: 0.5;
                    }
                    85% {
                      opacity: 0;
                    }
                    100% {
                      opacity: 0;
                    }
                  }

                  .catapult-arm {
                    animation: catapultArm 5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
                    will-change: transform;
                    transform: translateZ(0);
                    backface-visibility: hidden;
                  }

                  .phone-launch {
                    animation: phoneTrajectory 5s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
                    transform-origin: 120px 110px;
                    will-change: transform, opacity;
                    transform: translateZ(0);
                    backface-visibility: hidden;
                  }

                  .motion-lines {
                    animation: motionStreak 5s ease-out infinite;
                    will-change: opacity;
                  }

                  .phone-in-arm {
                    transform-origin: 120px 110px;
                    display: none;
                  }
                `}</style>
              </defs>

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
              <g className="catapult-arm">
                {/* Arm */}
                <rect x="110" y="120" width="20" height="160" fill="#2ca3bd" rx="10" />
                {/* Cup */}
                <circle cx="120" cy="110" r="18" fill="#3bb8d4" />
                <circle cx="120" cy="110" r="14" fill="#2ca3bd" />
                
                {/* Phone in Cup - follows arm rotation */}
                <g className="phone-in-arm" style={{ transformOrigin: '120px 110px' }}>
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
              </g>

              {/* Catapult Support */}
              <g>
                <line x1="90" y1="280" x2="120" y2="180" stroke="#1e7a8f" strokeWidth="8" strokeLinecap="round" />
                <line x1="150" y1="280" x2="120" y2="180" stroke="#1e7a8f" strokeWidth="8" strokeLinecap="round" />
              </g>

              {/* Phone Flying (after release) */}
              <g className="phone-launch" style={{ transformOrigin: '120px 110px' }}>
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

              {/* Motion Lines */}
              <g className="motion-lines">
                <line x1="90" y1="160" x2="60" y2="155" stroke="#2ca3bd" strokeWidth="2" strokeLinecap="round" />
                <line x1="100" y1="180" x2="65" y2="185" stroke="#2ca3bd" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                <line x1="110" y1="200" x2="70" y2="210" stroke="#2ca3bd" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
              </g>

              {/* Target Indicator */}
              <g opacity="0.5">
                <circle cx="340" cy="100" r="30" fill="none" stroke="#2ca3bd" strokeWidth="2" strokeDasharray="5,5" />
                <circle cx="340" cy="100" r="40" fill="none" stroke="#2ca3bd" strokeWidth="1" strokeDasharray="8,8" opacity="0.5" />
                <line x1="335" y1="100" x2="325" y2="100" stroke="#2ca3bd" strokeWidth="1.5" />
                <line x1="345" y1="100" x2="355" y2="100" stroke="#2ca3bd" strokeWidth="1.5" />
                <line x1="340" y1="95" x2="340" y2="85" stroke="#2ca3bd" strokeWidth="1.5" />
                <line x1="340" y1="105" x2="340" y2="115" stroke="#2ca3bd" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================
// VARIANT C: Full-Width Immersive with Gradient
// =============================================
function HeroVariantC() {
  const phoneSectionRef = useRef<HTMLDivElement | null>(null);
  const phoneWrapperRef = useRef<HTMLDivElement | null>(null);
  const phoneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const trigger = phoneSectionRef.current;
      const wrapper = phoneWrapperRef.current;
      const phone = phoneRef.current;
      const navbar = document.querySelector('[data-app-navbar]') as HTMLElement | null;
      if (!trigger || !wrapper || !phone) return;

      const hideNavbar = () => {
        if (!navbar) return;
        navbar.style.transition = 'opacity 0.3s ease';
        navbar.style.opacity = '0';
        navbar.style.pointerEvents = 'none';
      };

      const showNavbar = () => {
        if (!navbar) return;
        navbar.style.opacity = '1';
        navbar.style.pointerEvents = 'auto';
      };

      // baseline state
      gsap.set(phone, { y: 140, scale: 0.95, opacity: 0.8 });

      gsap.timeline({
        scrollTrigger: {
          trigger,
          start: 'top top',
          end: '+=220%',
          scrub: true,
          pin: wrapper,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (self.progress > 0.01) {
              hideNavbar();
            } else {
              showNavbar();
            }
          },
          onEnter: hideNavbar,
          onEnterBack: hideNavbar,
          onLeave: showNavbar,
          onLeaveBack: showNavbar,
        },
      })
        .to(phone, { y: -260, scale: 1.12, opacity: 1, ease: 'none' });
    });

    return () => {
      const navbar = document.querySelector('[data-app-navbar]') as HTMLElement | null;
      if (navbar) {
        navbar.style.opacity = '1';
        navbar.style.pointerEvents = 'auto';
      }
      ctx.revert();
    };
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden pt-20 dark:bg-gradient-to-br dark:from-[var(--bg-primary)] dark:via-[var(--bg-secondary)] dark:to-[#0a0e0d] bg-gradient-to-br from-[#2ca3bd] via-[#1e7a8f] to-[#0d5a6d]">
      {/* Animated Background Orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#2ca3bd] rounded-full opacity-20 dark:opacity-10 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#1e7a8f] rounded-full opacity-20 dark:opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8 mb-4">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Catapultez votre appli mobile.
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-2xl font-semibold text-blue-100 dark:text-[#7fbfd4] mt-6 max-w-2xl mx-auto leading-relaxed">
              Construisez une application que vous possédez vraiment. Rapide. Sécurisée. Et prête pour la guerre.
            </h2>
          </div>
        </div>

        {/* Scroll-reactive iPhone mockup */}
        {/* Pinned parallax phone: page scrolls, phone glides up */}
        <div ref={phoneSectionRef} className="relative min-h-[190vh]">
          <div ref={phoneWrapperRef} className="flex justify-center pt-0 pb-16 -mt-10">
            <div ref={phoneRef} className="relative w-full max-w-lg aspect-[9/17]">
              {/* Frame */}
              <div className="absolute inset-0 rounded-[32px] shadow-2xl [background-color:var(--iphone-frame)]"></div>

              {/* Screen */}
              <div className="absolute inset-2 rounded-[28px] overflow-hidden bg-gradient-to-b from-[#0e3f4c] via-[#155e71] to-[#1e7a8f]">
                {/* Status */}
                <div className="flex items-center justify-between px-4 pt-5 text-white text-sm opacity-90">
                  <span>09:41</span>
                  <div className="flex items-center gap-1 text-xs">
                    <span>📶</span>
                    <span>📡</span>
                    <span>🔋</span>
                  </div>
                </div>

                {/* In-screen proof points */}
                <div className="px-4 pt-6 pb-4 space-y-3">
                  <div className="bg-white/90 rounded-2xl p-3 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[#0d5a6d] text-sm font-semibold">Zéro Bug</p>
                        <p className="text-[#1e7a8f] text-xs">Vitesse maximale</p>
                      </div>
                      <span className="text-[10px] px-2 py-1 rounded-full bg-[#e6f7fb] text-[#0d5a6d] font-semibold">SLA 99.9%</span>
                    </div>
                  </div>

                  <div className="bg-white/85 rounded-2xl p-3 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[#0d5a6d] text-sm font-semibold">Sécurisé Max</p>
                        <p className="text-[#1e7a8f] text-xs">DORA/RGAA</p>
                      </div>
                      <span className="text-[10px] px-2 py-1 rounded-full bg-[#e6f7fb] text-[#0d5a6d] font-semibold">Audit 48h</span>
                    </div>
                  </div>

                  <div className="bg-white/80 rounded-2xl p-3 shadow-sm">
                    <p className="text-[#0d5a6d] text-sm font-semibold">Prêt à Scaler</p>
                    <p className="text-[#1e7a8f] text-xs">Millions d'utilisateurs</p>
                    <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-[#0d5a6d]">
                      <div className="bg-white/80 rounded-lg px-2 py-1">CI/CD • flags</div>
                      <div className="bg-white/80 rounded-lg px-2 py-1">Perf budget</div>
                      <div className="bg-white/80 rounded-lg px-2 py-1">Monitoring</div>
                      <div className="bg-white/80 rounded-lg px-2 py-1">Load tests</div>
                    </div>
                  </div>

                  <div className="bg-white/10 border border-white/10 rounded-2xl p-3 shadow-sm">
                    <div className="flex items-center justify-between mb-2 text-white/80 text-xs font-semibold">
                      <span>Catapult boost</span>
                      <span className="text-[10px] px-2 py-1 rounded-full bg-white/10 border border-white/15">Live</span>
                    </div>
                    <div className="relative h-24">
                      <svg viewBox="0 0 180 100" className="absolute inset-0 w-full h-full">
                        <style>{`
                          @keyframes miniArm {
                            0% { transform: rotate(0deg); transform-origin: 55px 70px; }
                            50% { transform: rotate(-60deg); transform-origin: 55px 70px; }
                            100% { transform: rotate(-60deg); transform-origin: 55px 70px; }
                          }
                          @keyframes miniPhone {
                            0% { opacity: 0; transform: translate(50px, 40px) scale(0.8); }
                            50% { opacity: 1; transform: translate(50px, 40px) scale(0.8); }
                            80% { opacity: 1; transform: translate(115px, -10px) scale(0.95) rotate(-12deg); }
                            100% { opacity: 1; transform: translate(140px, 5px) scale(1); }
                          }
                        `}</style>

                        <line x1="10" y1="80" x2="170" y2="80" stroke="#7fbfd4" strokeWidth="4" strokeLinecap="round" />
                        <rect x="25" y="60" width="35" height="18" rx="4" fill="#2ca3bd" opacity="0.25" />

                        <g>
                          <line x1="32" y1="78" x2="55" y2="50" stroke="#7fbfd4" strokeWidth="6" strokeLinecap="round" />
                          <line x1="60" y1="78" x2="55" y2="50" stroke="#7fbfd4" strokeWidth="6" strokeLinecap="round" />
                        </g>

                        <g style={{ animation: 'miniArm 3s ease-in-out infinite' }}>
                          <rect x="50" y="34" width="10" height="35" rx="5" fill="#2ca3bd" />
                          <circle cx="55" cy="30" r="10" fill="#38c0dd" />
                        </g>

                        <g style={{ animation: 'miniPhone 3s ease-out infinite' }}>
                          <rect x="48" y="40" width="18" height="32" rx="3" fill="#0d5a6d" />
                          <rect x="50" y="44" width="14" height="22" rx="2" fill="#2ca3bd" />
                          <circle cx="57" cy="67" r="1.6" fill="#ffffff" opacity="0.6" />
                        </g>
                      </svg>
                    </div>
                  </div>

                  <div className="bg-white/90 rounded-2xl p-3 shadow-sm">
                    <p className="text-[#0d5a6d] text-sm font-semibold mb-1">Prochaines étapes</p>
                    <ol className="text-[#1e7a8f] text-xs space-y-1 list-decimal list-inside">
                      <li>Audit 30 minutes</li>
                      <li>Architecture & backlog</li>
                      <li>Démo semaine 1</li>
                    </ol>
                  </div>

                  <button className="w-full mt-1 bg-white text-[#1e7a8f] font-semibold text-xs py-2 rounded-xl shadow-lg hover:bg-blue-50 transition">
                    Réserver un audit
                  </button>
                </div>
              </div>

              {/* Notch & camera */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-5 [background-color:var(--iphone-notch)] rounded-b-2xl flex items-center justify-center">
                <div className="w-5 h-5 rounded-full border-2 [background-color:var(--iphone-notch)] [border-color:var(--iphone-camera-border)]"></div>
              </div>

              {/* Home indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-24 h-1.5 rounded-full [background-color:var(--iphone-notch)]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
