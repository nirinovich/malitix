import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const MobileAppHero = React.memo(() => {
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
});

MobileAppHero.displayName = 'MobileAppHero';

export default MobileAppHero;
