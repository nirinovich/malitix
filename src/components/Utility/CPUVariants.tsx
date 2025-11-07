import { useTheme } from '../../context/ThemeContext';
import { useEffect, useState } from 'react';

// ==========================================
// VARIANT 1: COUNTDOWN TIMER
// 14 days sprint countdown with progress rings
// ==========================================
export function CountdownTimerVariant() {
  const { theme } = useTheme();
  const [time, setTime] = useState({ days: 14, hours: 23, minutes: 59 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1 };
        if (prev.hours > 0) return { days: prev.days, hours: prev.hours - 1, minutes: 59 };
        if (prev.days > 1) return { days: prev.days - 1, hours: 23, minutes: 59 };
        return { days: 14, hours: 23, minutes: 59 }; // Reset
      });
    }, 100); // Fast for demo
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[600px] w-full max-w-md flex items-center justify-center">
      {/* Animated background rings */}
      {[200, 280, 360].map((size, i) => (
        <div
          key={`ring-${i}`}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${
            theme === 'dark' ? 'border-[#2ca3bd]/20' : 'border-[#2ca3bd]/30'
          } animate-pulse`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${i * 0.2}s`,
            animationDuration: '3s'
          }}
        ></div>
      ))}

      {/* Main timer container */}
      <div className="relative animate-float">
        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-[#2ca3bd]'
        } opacity-30 animate-pulse scale-150`}></div>

        {/* Timer circle */}
        <div className={`relative w-72 h-72 rounded-full ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-slate-800 to-slate-900'
            : 'bg-gradient-to-br from-white to-gray-50'
        } shadow-2xl border-4 ${
          theme === 'dark' ? 'border-[#2ca3bd]' : 'border-[#2ca3bd]/40'
        } flex items-center justify-center overflow-hidden backdrop-blur-xl`}>
          
          {/* Progress circle */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={theme === 'dark' ? '#2ca3bd' : '#2ca3bd'}
              strokeWidth="3"
              strokeDasharray={`${(time.days / 14) * 282} 282`}
              className="transition-all duration-1000"
              opacity="0.6"
              style={{
                filter: `drop-shadow(0 0 6px ${theme === 'dark' ? '#2ca3bd' : '#2ca3bd'})`
              }}
            />
          </svg>

          {/* Timer display */}
          <div className="relative z-10 text-center">
            <div className={`text-6xl font-black ${
              theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'
            } mb-2 animate-pulse`}>
              {time.days}
            </div>
            <div className={`text-sm uppercase tracking-wider font-semibold ${
              theme === 'dark' ? 'text-white/60' : 'text-gray-600'
            }`}>
              Jours Sprint
            </div>
            <div className={`text-3xl font-bold mt-4 ${
              theme === 'dark' ? 'text-white/80' : 'text-gray-700'
            }`}>
              {String(time.hours).padStart(2, '0')}:{String(time.minutes).padStart(2, '0')}
            </div>
            {/* Sprint status badge */}
            <div className={`mt-3 px-3 py-1 rounded-full text-xs font-bold ${
              theme === 'dark' 
                ? 'bg-[#2ca3bd]/20 text-[#2ca3bd]' 
                : 'bg-[#2ca3bd]/10 text-[#2ca3bd]'
            }`}>
              ● PROJET LANCÉ
            </div>
          </div>

          {/* Tick marks */}
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * 360;
            return (
              <div
                key={`tick-${i}`}
                className={`absolute w-1 h-4 ${
                  theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-[#2ca3bd]'
                } opacity-30`}
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-130px)`,
                  transformOrigin: 'center'
                }}
              ></div>
            );
          })}
        </div>

        {/* Orbiting time indicators */}
        {[...Array(3)].map((_, i) => {
          const angle = (i / 3) * 360 + (Date.now() / 50) % 360;
          const radius = 160;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          return (
            <div
              key={`orbit-${i}`}
              className={`absolute w-3 h-3 rounded-full ${
                theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-[#2ca3bd]'
              } shadow-lg`}
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                boxShadow: `0 0 15px ${theme === 'dark' ? '#2ca3bd' : '#2ca3bd'}`
              }}
            ></div>
          );
        })}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

// ==========================================
// VARIANT 2: COUNTDOWN TIMER 2 (avec Team Deployment)
// Countdown avec cartes d'équipe qui s'activent
// ==========================================
export function CountdownTimer2Variant() {
  const { theme } = useTheme();
  const [time, setTime] = useState({ days: 14, hours: 23, minutes: 59 });
  const [deployedCount, setDeployedCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1 };
        if (prev.hours > 0) return { days: prev.days, hours: prev.hours - 1, minutes: 59 };
        if (prev.days > 1) return { days: prev.days - 1, hours: 23, minutes: 59 };
        return { days: 14, hours: 23, minutes: 59 }; // Reset
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDeployedCount(prev => (prev >= 3 ? 0 : prev + 1));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const experts = [
    { role: 'Tech Lead', icon: '👨‍💻', skill: 'Architecture' },
    { role: 'DevOps', icon: '⚙️', skill: 'Infrastructure' },
    { role: 'Product Owner', icon: '🎯', skill: 'Stratégie' }
  ];

  return (
    <div className="relative h-[600px] w-full max-w-md flex items-center justify-center">
      <div className="relative w-full space-y-6">
        {/* Timer compact en haut */}
        <div className="relative animate-float">
          <div className={`relative w-48 h-48 mx-auto rounded-full ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-slate-800 to-slate-900'
              : 'bg-gradient-to-br from-white to-gray-50'
          } shadow-2xl border-4 ${
            theme === 'dark' ? 'border-[#2ca3bd]' : 'border-[#2ca3bd]/40'
          } flex items-center justify-center backdrop-blur-xl`}>
            
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke={theme === 'dark' ? '#2ca3bd' : '#2ca3bd'}
                strokeWidth="3"
                strokeDasharray={`${(time.days / 14) * 282} 282`}
                className="transition-all duration-1000"
                opacity="0.6"
                style={{
                  filter: `drop-shadow(0 0 6px ${theme === 'dark' ? '#2ca3bd' : '#2ca3bd'})`
                }}
              />
            </svg>

            <div className="relative z-10 text-center">
              <div className={`text-4xl font-black ${
                theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'
              }`}>
                {time.days}
              </div>
              <div className={`text-xs uppercase tracking-wider font-semibold ${
                theme === 'dark' ? 'text-white/60' : 'text-gray-600'
              }`}>
                Jours
              </div>
              <div className={`text-lg font-bold ${
                theme === 'dark' ? 'text-white/80' : 'text-gray-700'
              }`}>
                {String(time.hours).padStart(2, '0')}:{String(time.minutes).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>

        {/* Team Cards */}
        <div className="space-y-3 px-4">
          {experts.map((expert, i) => (
            <div
              key={`expert-${i}`}
              className={`relative overflow-hidden rounded-xl p-4 transition-all duration-500 ${
                i < deployedCount
                  ? theme === 'dark'
                    ? 'bg-gradient-to-br from-slate-700/60 to-slate-800/60 border-2 border-[#2ca3bd] shadow-lg shadow-[#2ca3bd]/20'
                    : 'bg-gradient-to-br from-[#2ca3bd]/5 to-[#2ca3bd]/10 border-2 border-[#2ca3bd] shadow-lg'
                  : theme === 'dark'
                  ? 'bg-slate-800/30 border border-slate-700/50'
                  : 'bg-gray-100/50 border border-gray-300'
              } ${i < deployedCount ? 'scale-105' : 'scale-100'} backdrop-blur-sm`}
            >
              {i < deployedCount && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2ca3bd]/10 to-transparent animate-shimmer"></div>
              )}
              
              <div className="relative flex items-center gap-3">
                <div className={`text-3xl transition-transform duration-300 ${
                  i < deployedCount ? 'scale-110' : 'scale-100'
                }`}>
                  {expert.icon}
                </div>
                <div className="flex-1">
                  <p className={`font-bold text-sm ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {expert.role}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    {i < deployedCount ? (
                      <>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          theme === 'dark' 
                            ? 'bg-[#2ca3bd]/20 text-[#2ca3bd]' 
                            : 'bg-[#2ca3bd]/10 text-[#2ca3bd]'
                        }`}>
                          ● ACTIF
                        </span>
                        <span className={`text-[10px] ${
                          theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                        }`}>
                          {expert.skill}
                        </span>
                      </>
                    ) : (
                      <span className={`text-xs ${
                        theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                      }`}>
                        En attente...
                      </span>
                    )}
                  </div>
                </div>
                {i < deployedCount && (
                  <div className={`text-xl ${
                    theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'
                  }`}>
                    ✓
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}

// ==========================================
// VARIANT 3: PROGRESS RESCUE GAUGE
// Shows transformation: Sans Malitix (red) → Avec Malitix (green)
// Bar starts from LEFT (slow) and accelerates to RIGHT (fast)
// ==========================================
export function ProgressRescueGaugeVariant() {
  const { theme } = useTheme();
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'slow' | 'pause' | 'fast'>('slow');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev < 48) {
          // Slow phase (Sans Malitix)
          setPhase('slow');
          return prev + 0.4; // Very slow
        } else if (prev < 50) {
          // Pause at 50%
          setPhase('pause');
          return prev + 0.1;
        } else if (prev < 100) {
          // Fast phase (Avec Malitix)
          setPhase('fast');
          return prev + 2; // Much faster
        } else {
          // Reset
          return 0;
        }
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const getColor = (value: number) => {
    if (value < 50) return theme === 'dark' ? '#ef4444' : '#dc2626'; // Red
    if (value < 75) return theme === 'dark' ? '#f59e0b' : '#d97706'; // Orange
    return theme === 'dark' ? '#2ca3bd' : '#2ca3bd'; // Brand color instead of green!
  };

  const getStatus = (value: number) => {
    if (value < 50) return 'SANS MALITIX';
    if (value < 75) return 'TRANSITION';
    return 'AVEC MALITIX';
  };

  const getLabel = (value: number) => {
    if (value < 50) return '🐌 Projet en retard';
    if (value < 75) return '⚡ Récupération...';
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
              theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-[#2ca3bd]/20'
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
            : 'bg-gradient-to-br from-white to-gray-50'
        } shadow-2xl border-4 ${
          theme === 'dark' ? 'border-slate-700' : 'border-gray-300'
        } flex items-center justify-center overflow-hidden backdrop-blur-xl`}>
          
          {/* Pulsing glow effect */}
          <div 
            className="absolute inset-0 rounded-full blur-3xl opacity-50 transition-all duration-500"
            style={{ 
              backgroundColor: getColor(progress),
              animationDuration: phase === 'slow' ? '2s' : phase === 'pause' ? '1s' : '0.5s'
            }}
          ></div>

          {/* SVG gauge arc - REVERSED DIRECTION (start from left) */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            {/* Background track */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke={theme === 'dark' ? '#1e293b' : '#e5e7eb'}
              strokeWidth="8"
            />
            {/* Progress arc - STARTS FROM LEFT (180deg offset) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke={getColor(progress)}
              strokeWidth="8"
              strokeDasharray={`${(progress / 100) * 251.2} 251.2`}
              strokeDashoffset="125.6"
              strokeLinecap="round"
              className="transition-all duration-300"
              style={{
                filter: `drop-shadow(0 0 8px ${getColor(progress)})`,
                transform: 'scaleX(-1)',
                transformOrigin: 'center'
              }}
            />
          </svg>

          {/* Center display */}
          <div className="relative z-10 text-center px-4">
            <div className={`text-6xl font-black mb-2 transition-all duration-300 ${
              phase === 'slow' ? 'animate-pulse' : ''
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
                progress < 50
                  ? 'bg-red-500/20 text-red-500 animate-pulse'
                  : progress < 75
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
            {phase === 'fast' && (
              <div className={`mt-2 text-[10px] ${
                theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'
              }`}>
                Accélération ⚡
              </div>
            )}
          </div>

          {/* Gauge markers */}
          {[0, 50, 100].map((mark, i) => {
            const angle = (mark / 100) * 180 - 90; // Reversed range
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
                  transformOrigin: 'center'
                }}
              ></div>
            );
          })}
        </div>

        {/* Labels extérieurs - REVERSED POSITIONS */}
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 text-center">
          <div className={`text-xs font-bold uppercase mb-1 ${
            theme === 'dark' ? 'text-red-400' : 'text-red-600'
          }`}>
            ❌ Sans
          </div>
          <div className={`text-xs font-semibold ${
            theme === 'dark' ? 'text-white/60' : 'text-gray-600'
          }`}>
            Malitix
          </div>
          <div className={`text-[10px] mt-1 ${
            theme === 'dark' ? 'text-white/40' : 'text-gray-500'
          }`}>
            Lent
          </div>
        </div>
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 text-center">
          <div className={`text-xs font-bold uppercase mb-1 ${
            theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'
          }`}>
            ✅ Avec
          </div>
          <div className={`text-xs font-semibold ${
            theme === 'dark' ? 'text-white/60' : 'text-gray-600'
          }`}>
            Malitix
          </div>
          <div className={`text-[10px] mt-1 ${
            theme === 'dark' ? 'text-[#2ca3bd]/80' : 'text-[#2ca3bd]/80'
          }`}>
            Rapide
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

// ==========================================
// VARIANT 4: TEAM DEPLOYMENT
// Visual of expert team being deployed (version compacte)
// ==========================================
export function TeamDeploymentVariant() {
  const { theme } = useTheme();
  const [deployedCount, setDeployedCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDeployedCount(prev => (prev >= 3 ? 0 : prev + 1));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const experts = [
    { role: 'Tech Lead', icon: '👨‍💻', color: 'from-[#2ca3bd] to-[#1e7a8f]', skill: 'Architecture' },
    { role: 'DevOps', icon: '⚙️', color: 'from-[#2ca3bd] to-[#248fa5]', skill: 'Infrastructure' },
    { role: 'Product Owner', icon: '🎯', color: 'from-[#2ca3bd] to-[#3bb8d4]', skill: 'Stratégie' }
  ];

  return (
    <div className="relative h-[500px] w-full max-w-sm flex items-center justify-center">
      <div className="relative w-full">
        {/* Central command - version compacte */}
        <div className={`relative backdrop-blur-xl rounded-2xl p-5 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-[#2ca3bd]/30'
            : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-[#2ca3bd]/20'
        } shadow-2xl animate-float`}>
          
          {/* Header compact */}
          <div className="text-center mb-4">
            <div className={`text-xs uppercase tracking-widest mb-1 ${
              theme === 'dark' ? 'text-white/60' : 'text-gray-600'
            }`}>
              Équipe Sprint
            </div>
            <div className={`text-2xl font-black ${
              theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'
            }`}>
              DÉPLOIEMENT
            </div>
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className={`w-2 h-2 rounded-full ${
                theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-[#2ca3bd]'
              } animate-pulse`}></div>
              <span className={`text-xs ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-700'
              }`}>
                {deployedCount}/3 Experts en ligne
              </span>
            </div>
          </div>

          {/* Expert cards compacts */}
          <div className="space-y-3 mb-4">
            {experts.map((expert, i) => (
              <div
                key={`expert-${i}`}
                className={`relative overflow-hidden rounded-xl p-3 transition-all duration-500 ${
                  i < deployedCount
                    ? theme === 'dark'
                      ? 'bg-gradient-to-br from-slate-700/60 to-slate-800/60 border-2 border-[#2ca3bd] shadow-lg shadow-[#2ca3bd]/20'
                      : 'bg-gradient-to-br from-[#2ca3bd]/5 to-[#2ca3bd]/10 border-2 border-[#2ca3bd] shadow-lg'
                    : theme === 'dark'
                    ? 'bg-slate-800/30 border border-slate-700/50'
                    : 'bg-gray-100/50 border border-gray-300'
                } ${i < deployedCount ? 'scale-105' : 'scale-100'} backdrop-blur-sm`}
              >
                {i < deployedCount && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2ca3bd]/10 to-transparent animate-shimmer"></div>
                )}
                
                <div className="relative flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${expert.color} flex items-center justify-center text-xl shadow-lg transition-transform duration-300 ${
                    i < deployedCount ? 'scale-110' : 'scale-100'
                  }`}>
                    {expert.icon}
                  </div>
                  <div className="flex-1">
                    <p className={`font-bold text-sm ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {expert.role}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      {i < deployedCount ? (
                        <>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            theme === 'dark' 
                              ? 'bg-[#2ca3bd]/20 text-[#2ca3bd]' 
                              : 'bg-[#2ca3bd]/10 text-[#2ca3bd]'
                          }`}>
                            ● ACTIF
                          </span>
                          <span className={`text-[10px] ${
                            theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                          }`}>
                            {expert.skill}
                          </span>
                        </>
                      ) : (
                        <span className={`text-xs ${
                          theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                        }`}>
                          En attente...
                        </span>
                      )}
                    </div>
                  </div>
                  {i < deployedCount && (
                    <div className={`text-lg ${
                      theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'
                    }`}>
                      ✓
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Stats compacts */}
          <div className="grid grid-cols-3 gap-2">
            <div className={`text-center p-2 rounded-lg ${
              theme === 'dark' ? 'bg-slate-800' : 'bg-gray-100'
            }`}>
              <div className={`text-lg font-black ${
                theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'
              }`}>
                48h
              </div>
              <div className={`text-[10px] ${
                theme === 'dark' ? 'text-white/60' : 'text-gray-600'
              }`}>
                Diagnostic
              </div>
            </div>
            <div className={`text-center p-2 rounded-lg ${
              theme === 'dark' ? 'bg-slate-800' : 'bg-gray-100'
            }`}>
              <div className={`text-lg font-black ${
                theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'
              }`}>
                14j
              </div>
              <div className={`text-[10px] ${
                theme === 'dark' ? 'text-white/60' : 'text-gray-600'
              }`}>
                Sprint
              </div>
            </div>
            <div className={`text-center p-2 rounded-lg ${
              theme === 'dark' ? 'bg-slate-800' : 'bg-gray-100'
            }`}>
              <div className={`text-lg font-black ${
                theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'
              }`}>
                100%
              </div>
              <div className={`text-[10px] ${
                theme === 'dark' ? 'text-white/60' : 'text-gray-600'
              }`}>
                Dédié
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
