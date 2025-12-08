import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

// Variante 1 : Bouton avec animation de charge "chakra"
export function CTAButtonV1({ onClick }: { onClick: () => void }) {
  const [isCharging, setIsCharging] = useState(false);
  const { theme } = useTheme();

  return (
    <div className="relative inline-block group">
      <button
        onClick={onClick}
        onMouseEnter={() => setIsCharging(true)}
        onMouseLeave={() => setIsCharging(false)}
        className={`relative px-8 py-4 text-lg font-bold rounded-2xl overflow-hidden transition-all duration-500 ${
          isCharging ? 'scale-105 shadow-2xl' : 'scale-100'
        } ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white'
            : 'bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white'
        }`}
      >
        {/* Flux d'énergie */}
        {isCharging && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-energy-flow"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-energy-flow" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-energy-flow" style={{ animationDelay: '0.6s' }}></div>
          </>
        )}

        {/* Particules */}
        {isCharging && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 0.5}s`,
                  animationDuration: `${0.8 + Math.random() * 0.4}s`
                }}
              ></div>
            ))}
          </div>
        )}

        {/* Aura */}
        <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
          isCharging ? 'opacity-100' : 'opacity-0'
        } ${
          theme === 'dark'
            ? 'shadow-[0_0_30px_rgba(44,163,189,0.8),0_0_60px_rgba(44,163,189,0.4)]'
            : 'shadow-[0_0_30px_rgba(59,130,246,0.8),0_0_60px_rgba(59,130,246,0.4)]'
        }`}></div>

        {/* Bordure */}
        <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 ${
          isCharging ? 'border-white/60 scale-105' : 'border-white/20 scale-100'
        }`}></div>

        {/* Texte */}
        <span className="relative z-10 flex items-center gap-2">
          {isCharging && <span className="animate-pulse">⚡</span>}
          Garantie 14 jours ou gratuit
          {isCharging && <span className="animate-pulse">⚡</span>}
        </span>
      </button>

      {/* Barre de charge */}
      {isCharging && (
        <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-1 rounded-full overflow-hidden ${
          theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-[#2ca3bd]/20'
        }`}>
          <div className={`h-full animate-charge-bar ${
            theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-[#2ca3bd]'
          }`}></div>
        </div>
      )}
    </div>
  );
}

// Variante 2 : Bouton avec badge de garantie
export function CTAButtonV2({ onClick }: { onClick: () => void }) {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Badge au-dessus */}
      <div className={`absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-xs font-bold ${
        theme === 'dark' 
          ? 'bg-green-500/20 text-green-400 border border-green-500/40' 
          : 'bg-green-100 text-green-700 border border-green-300'
      }`}>
        ✓ 100% Garanti sous 14 jours
      </div>

      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative px-10 py-5 text-lg font-bold rounded-2xl overflow-hidden transition-all duration-300 ${
          isHovered ? 'scale-105' : 'scale-100'
        } ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white shadow-lg shadow-[#2ca3bd]/30'
            : 'bg-gradient-to-r from-[#2ca3bd] to-[#1e7a8f] text-white shadow-lg shadow-[#2ca3bd]/30'
        }`}
      >
        {/* Shine effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 ${
          isHovered ? 'translate-x-full' : '-translate-x-full'
        }`}></div>

        <span className="relative z-10 flex items-center gap-2">
          Débloquer mon projet
          <svg className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </button>

      {/* Sous-texte */}
      <p className={`text-center mt-3 text-xs ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
        ou remboursé intégralement 💯
      </p>
    </div>
  );
}

// Variante 3 : Bouton minimaliste avec timer
export function CTAButtonV3({ onClick }: { onClick: () => void }) {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block w-full sm:w-auto">
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative w-full sm:w-auto px-6 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl font-bold rounded-xl transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-[#2ca3bd] hover:bg-[#1e7a8f] text-white'
            : 'bg-[#2ca3bd] hover:bg-[#1e7a8f] text-white'
        } ${isHovered ? 'shadow-2xl' : 'shadow-lg'}`}
      >
        <div className="flex flex-col items-center gap-0.5 sm:gap-1">
          <span className="text-lg sm:text-xl lg:text-2xl font-black">Lancer mon Sprint</span>
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium opacity-90">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Garantie 14 jours ou gratuit</span>
          </div>
        </div>

        {/* Bordure animée */}
        <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-300 ${
          isHovered 
            ? 'border-white/50 scale-105' 
            : 'border-white/20 scale-100'
        }`}></div>
      </button>
    </div>
  );
}

// CSS Animations (à inclure dans le composant parent ou global)
export const buttonAnimations = `
  @keyframes energy-flow {
    0% {
      transform: translateX(-100%) skewX(-15deg);
    }
    100% {
      transform: translateX(200%) skewX(-15deg);
    }
  }

  @keyframes particle {
    0% {
      transform: translateY(0) scale(0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(-20px) scale(1);
      opacity: 0;
    }
  }

  @keyframes charge-bar {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }

  .animate-energy-flow {
    animation: energy-flow 1.5s infinite;
  }

  .animate-particle {
    animation: particle 1s infinite;
  }

  .animate-charge-bar {
    animation: charge-bar 1.5s ease-out infinite;
  }
`;
