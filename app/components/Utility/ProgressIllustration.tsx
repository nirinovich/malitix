import { useTheme } from '~/context/ThemeContext';
import { useEffect, useState } from 'react';

// ==========================================
// PROGRESS RESCUE GAUGE
// Shows transformation: Sans Malitix (red) → Avec Malitix (brand color)
// 0-20%: Slow (Sans Malitix) → 20-35%: Transition → 35-100%: Fast (Avec Malitix) → STOP
// ==========================================
export function ProgressRescueGaugeVariant() {
  const { theme } = useTheme();
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'slow' | 'transition' | 'fast' | 'complete'>('slow');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev < 20) {
          // Slow phase (Sans Malitix) - 0 to 20%
          setPhase('slow');
          return prev + 0.3; // Very slow
        } else if (prev < 35) {
          // Transition phase (Adapting to Malitix) - 20 to 35%
          setPhase('transition');
          return prev + 0.8; // Medium speed
        } else if (prev < 100) {
          // Fast phase (Avec Malitix) - 35 to 100%
          setPhase('fast');
          return prev + 2.5; // Much faster
        } else {
          // Complete - STOP at 100%
          setPhase('complete');
          return 100;
        }
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const getColor = (value: number) => {
    if (value < 20) return theme === 'dark' ? '#ef4444' : '#dc2626'; // Red - Sans Malitix
    if (value < 35) return theme === 'dark' ? '#f59e0b' : '#d97706'; // Orange - Transition
    return theme === 'dark' ? '#2ca3bd' : '#2ca3bd'; // Brand color - Avec Malitix
  };

  const getStatus = (value: number) => {
    if (value < 20) return 'SANS MALITIX';
    if (value < 35) return 'ADAPTATION';
    if (value < 100) return 'AVEC MALITIX';
    return 'OBJECTIF ATTEINT';
  };

  const getLabel = (value: number) => {
    if (value < 20) return '🐌 Projet en retard';
    if (value < 35) return '⚡ Adaptation en cours';
    if (value < 100) return '🚀 Accélération';
    return '✅ Objectifs atteints !';
  };

  return (
    <div className="relative h-[600px] w-full max-w-md flex items-center justify-center">
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={`grid-${i}`}
            className={`absolute h-px ${
              theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-[var(--bg-secondary)]'
            } animate-pulse`}
            style={{
              top: `${i * 5}%`,
              left: 0,
              right: 0,
              animationDelay: `${i * 0.1}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative animate-float">
        {/* Main gauge container */}
        <div className={`relative w-80 h-80 rounded-full ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-slate-800 to-slate-900'
            : 'bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-primary)]'
        } shadow-2xl border-4 ${
          theme === 'dark' ? 'border-slate-700' : 'border-gray-300'
        } flex items-center justify-center overflow-hidden backdrop-blur-xl`}>
          
          {/* Pulsing glow effect */}
          <div 
            className="absolute inset-0 rounded-full blur-3xl opacity-50 transition-all duration-500"
            style={{ 
              backgroundColor: getColor(progress),
              animationDuration: phase === 'slow' ? '2s' : phase === 'transition' ? '1s' : phase === 'fast' ? '0.5s' : '0.3s'
            }}
          ></div>

          {/* SVG gauge arc - Full circle from left to right */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            {/* Background track */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke={theme === 'dark' ? '#1e293b' : '#d1d5db'}
              strokeWidth="8"
            />
            {/* Progress arc - Starts from left (180deg) and goes clockwise to right */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke={getColor(progress)}
              strokeWidth="8"
              strokeDasharray={`${(progress / 100) * 251.2} 251.2`}
              strokeLinecap="round"
              className="transition-all duration-300"
              style={{
                filter: `drop-shadow(0 0 8px ${getColor(progress)})`,
                transform: 'rotate(90deg)',
                transformOrigin: 'center'
              }}
            />
          </svg>

          {/* Center display */}
          <div className="relative z-10 text-center px-4">
            <div className={`text-6xl font-black mb-2 transition-all duration-300 ${
              phase === 'slow' ? 'animate-pulse' : phase === 'complete' ? 'scale-110' : ''
            }`}
              style={{ color: getColor(progress) }}>
              {Math.floor(progress)}%
            </div>
            <div className={`text-xs uppercase tracking-widest font-bold mb-2 ${
              theme === 'dark' ? 'text-white/60' : 'text-gray-600'
            }`}>
              {getStatus(progress)}
            </div>
            
            {/* Status label */}
            <div className="flex justify-center gap-2 mt-3">
              <div className={`text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 ${
                progress < 20
                  ? 'bg-red-500/20 text-red-500 animate-pulse'
                  : progress < 35
                  ? 'bg-orange-500/20 text-orange-500'
                  : 'bg-[#2ca3bd]/20 text-[#2ca3bd]'
              }`}>
                {getLabel(progress)}
              </div>
            </div>

            {/* Speed indicator */}
            {phase === 'slow' && (
              <div className={`mt-2 text-[10px] ${
                theme === 'dark' ? 'text-red-400' : 'text-red-600'
              }`}>
                Vitesse ralentie...
              </div>
            )}
            {phase === 'transition' && (
              <div className={`mt-2 text-[10px] ${
                theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
              }`}>
                Adaptation Malitix...
              </div>
            )}
            {phase === 'fast' && (
              <div className={`mt-2 text-[10px] ${
                theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'
              }`}>
                Accélération ⚡
              </div>
            )}
            {phase === 'complete' && (
              <div className={`mt-2 text-[10px] font-bold ${
                theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'
              }`}>
                Mission accomplie! 🎉
              </div>
            )}
          </div>

          {[0, 20, 35, 100].map((mark, i) => {
            const angle = (mark / 100) * 360 - 90; // Full circle from top
            const x = 50 + Math.cos((angle * Math.PI) / 180) * 45;
            const y = 50 + Math.sin((angle * Math.PI) / 180) * 45;
            return (
              <div
                key={`marker-${i}`}
                className={`absolute w-2 h-6 ${
                  theme === 'dark' ? 'bg-slate-600' : 'bg-gray-400'
                }`}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}
