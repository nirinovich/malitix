import { useEffect, useState } from 'react';

// ==========================================
// PROGRESS RESCUE GAUGE
// Shows transformation: Sans Malitix (red) → Avec Malitix (brand color)
// 0-20%: Slow (Sans Malitix) → 20-35%: Transition → 35-100%: Fast (Avec Malitix) → STOP
// ==========================================
export function ProgressRescueGaugeVariant() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'slow' | 'transition' | 'fast' | 'complete'>('slow');

  useEffect(() => {
    const id = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(id);
          setPhase('complete');
          return 100;
        }
        if (prev < 20) {
          setPhase('slow');
          return prev + 0.6; // Same speed, half the updates (was 0.3 at 50ms)
        } else if (prev < 35) {
          setPhase('transition');
          return prev + 1.6; // Same speed, half the updates (was 0.8 at 50ms)
        } else {
          setPhase('fast');
          return prev + 5; // Same speed, half the updates (was 2.5 at 50ms)
        }
      });
    }, 100); // 10fps instead of 20fps — same visual result, half the re-renders
    return () => clearInterval(id);
  }, []);

  const getColor = (value: number) => {
    if (value < 20) return 'var(--progress-danger)'; // Red - Sans Malitix
    if (value < 35) return 'var(--progress-warning)'; // Orange - Transition
    return 'var(--progress-success)'; // Brand color - Avec Malitix
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
            className="progress-grid-line absolute h-px animate-pulse"
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
        <div className="progress-gauge-container relative w-80 h-80 rounded-full shadow-2xl border-4 flex items-center justify-center overflow-hidden backdrop-blur-xl">
          
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
              stroke="currentColor"
              strokeWidth="8"
              className="progress-track"
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
            <div className="progress-status text-xs uppercase tracking-widest font-bold mb-2">
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
              <div className="progress-speed-slow mt-2 text-[10px]">
                Vitesse ralentie...
              </div>
            )}
            {phase === 'transition' && (
              <div className="progress-speed-transition mt-2 text-[10px]">
                Adaptation Malitix...
              </div>
            )}
            {phase === 'fast' && (
              <div className="progress-speed-fast mt-2 text-[10px]">
                Accélération ⚡
              </div>
            )}
            {phase === 'complete' && (
              <div className="progress-speed-complete mt-2 text-[10px] font-bold">
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
                className="progress-marker absolute w-2 h-6"
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
