import { useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface PowerButtonProps {
  onClick: () => void;
  text: string;
}

export default function PowerButton({ onClick, text }: PowerButtonProps) {
  const { theme } = useTheme();
  const [charge, setCharge] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const progress = (x / rect.width) * 100;
    setCharge(Math.min(100, Math.max(0, progress)));
  };

  const handleMouseLeave = () => {
    setCharge(0);
  };

  const isCharged = charge >= 95;

  return (
    <div className="relative inline-block group">
      {/* Energy indicator */}
      <div className={`absolute -top-12 left-1/2 -translate-x-1/2 transition-all duration-300 ${
        charge > 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
      }`}>
        <div className={`px-4 py-2 rounded-full border backdrop-blur-xl ${
          isCharged 
            ? 'border-[#2ca3bd] bg-[#2ca3bd]/20' 
            : theme === 'dark' 
              ? 'border-white/20 bg-white/5' 
              : 'border-gray-300 bg-white/80'
        }`}>
          <div className="flex items-center gap-2">
            <Zap 
              size={16} 
              className={`transition-colors ${isCharged ? 'text-[#2ca3bd]' : theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}
              fill={isCharged ? '#2ca3bd' : 'none'}
            />
            <span className={`text-xs font-mono font-bold ${
              isCharged ? 'text-[#2ca3bd]' : theme === 'dark' ? 'text-white/60' : 'text-gray-600'
            }`}>
              {Math.round(charge)}%
            </span>
          </div>
        </div>
        {/* Pointer arrow */}
        <div className={`absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
          isCharged ? 'border-t-[#2ca3bd]' : theme === 'dark' ? 'border-t-white/20' : 'border-t-gray-300'
        }`}></div>
      </div>

      {/* Hint text */}
      <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap transition-opacity duration-300 ${
        charge === 0 ? 'opacity-100' : 'opacity-0'
      }`}>
        <span className={`text-xs ${theme === 'dark' ? 'text-white/40' : 'text-gray-400'}`}>
          👆 Glissez pour charger
        </span>
      </div>

      <button
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        disabled={!isCharged}
        className={`relative overflow-hidden px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
          isCharged
            ? 'bg-[#2ca3bd] text-white shadow-2xl shadow-[#2ca3bd]/50 scale-110 cursor-pointer'
            : theme === 'dark'
              ? 'bg-white/10 text-white/60 cursor-grab active:cursor-grabbing'
              : 'bg-gray-200 text-gray-400 cursor-grab active:cursor-grabbing'
        }`}
      >
        {/* Charge progress bar */}
        <div 
          className={`absolute inset-0 transition-all duration-100 ${
            theme === 'dark' ? 'bg-[#2ca3bd]/30' : 'bg-[#2ca3bd]/20'
          }`}
          style={{ width: `${charge}%` }}
        />
        
        {/* Energy particles when charged */}
        {isCharged && (
          <>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 0.5}s`,
                  animationDuration: '1s',
                }}
              />
            ))}
          </>
        )}

        {/* Button content */}
        <span className="relative z-10 flex items-center gap-3">
          {isCharged && <Zap size={20} fill="white" />}
          {text}
          <ArrowRight size={20} className={isCharged ? 'animate-bounce-horizontal' : ''} />
        </span>
      </button>

      {/* Glow effect when charged */}
      {isCharged && (
        <div className="absolute inset-0 -z-10 bg-[#2ca3bd] rounded-full blur-2xl animate-pulse" />
      )}
    </div>
  );
}
