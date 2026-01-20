import { useState } from 'react';

// Bouton minimaliste avec timer
export function CTAButtonV3({ onClick }: { onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block w-full sm:w-auto">
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative w-full sm:w-auto px-6 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl font-bold rounded-xl transition-all duration-300 bg-[#2ca3bd] hover:bg-[#1e7a8f] text-white ${isHovered ? 'shadow-2xl' : 'shadow-lg'}`}
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
