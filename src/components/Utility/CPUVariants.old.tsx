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
            theme === 'dark' ? 'border-[#2ca3bd]/20' : 'border-blue-400/30'
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
          theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-blue-400'
        } opacity-30 animate-pulse scale-150`}></div>

        {/* Timer circle */}
        <div className={`relative w-72 h-72 rounded-full ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-slate-800 to-slate-900'
            : 'bg-gradient-to-br from-blue-500 to-blue-700'
        } shadow-2xl border-4 ${
          theme === 'dark' ? 'border-[#2ca3bd]' : 'border-blue-300'
        } flex items-center justify-center overflow-hidden`}>
          
          {/* Progress circle */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={theme === 'dark' ? '#2ca3bd' : '#60a5fa'}
              strokeWidth="2"
              strokeDasharray={`${(time.days / 14) * 282} 282`}
              className="transition-all duration-1000"
              opacity="0.5"
            />
          </svg>

          {/* Timer display */}
          <div className="relative z-10 text-center">
            <div className={`text-6xl font-black ${
              theme === 'dark' ? 'text-[#2ca3bd]' : 'text-white'
            } mb-2 animate-pulse`}>
              {time.days}
            </div>
            <div className={`text-sm uppercase tracking-wider ${
              theme === 'dark' ? 'text-white/60' : 'text-white/80'
            }`}>
              Jours Chrono
            </div>
            <div className={`text-3xl font-bold mt-4 ${
              theme === 'dark' ? 'text-white/80' : 'text-white/90'
            }`}>
              {String(time.hours).padStart(2, '0')}:{String(time.minutes).padStart(2, '0')}
            </div>
          </div>

          {/* Tick marks */}
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * 360;
            return (
              <div
                key={`tick-${i}`}
                className={`absolute w-1 h-4 ${
                  theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-blue-200'
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
                theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-blue-400'
              } shadow-lg`}
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                boxShadow: `0 0 15px ${theme === 'dark' ? '#2ca3bd' : '#60a5fa'}`
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
// VARIANT 2: TARGET WITH LASER FOCUS
// Bullseye target with converging laser beams
// ==========================================
export function TargetFocusVariant() {
  const { theme } = useTheme();

  return (
    <div className="relative h-[600px] w-full max-w-md flex items-center justify-center">
      {/* Concentric pulsing circles */}
      {[120, 180, 240, 300].map((size, i) => (
        <div
          key={`circle-${i}`}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${
            theme === 'dark' ? 'border-[#2ca3bd]' : 'border-blue-400'
          } animate-ping-slow`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: '4s',
            opacity: 0.3 - i * 0.05
          }}
        ></div>
      ))}

      {/* Main target container */}
      <div className="relative animate-float">
        {/* Outer glow */}
        <div className={`absolute inset-0 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-blue-400'
        } opacity-30 animate-pulse scale-150`}></div>

        {/* Laser beams converging to center */}
        <svg className="absolute inset-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" viewBox="0 0 400 400">
          <defs>
            <linearGradient id="laserGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={theme === 'dark' ? '#2ca3bd' : '#60a5fa'} stopOpacity="0"/>
              <stop offset="100%" stopColor={theme === 'dark' ? '#2ca3bd' : '#60a5fa'} stopOpacity="0.8"/>
            </linearGradient>
          </defs>
          
          {/* Laser lines from corners */}
          {[
            { x1: 0, y1: 0, x2: 200, y2: 200 },
            { x1: 400, y1: 0, x2: 200, y2: 200 },
            { x1: 0, y1: 400, x2: 200, y2: 200 },
            { x1: 400, y1: 400, x2: 200, y2: 200 }
          ].map((line, i) => (
            <g key={`laser-${i}`}>
              <line
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="url(#laserGradient)"
                strokeWidth="2"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s`, animationDuration: '2s' }}
              />
              <circle
                cx={line.x1}
                cy={line.y1}
                r="4"
                fill={theme === 'dark' ? '#2ca3bd' : '#60a5fa'}
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            </g>
          ))}

          {/* Scanning lines */}
          {[...Array(8)].map((_, i) => {
            const angle = (i / 8) * 360;
            const x = 200 + Math.cos((angle * Math.PI) / 180) * 150;
            const y = 200 + Math.sin((angle * Math.PI) / 180) * 150;
            return (
              <line
                key={`scan-${i}`}
                x1="200"
                y1="200"
                x2={x}
                y2={y}
                stroke={theme === 'dark' ? '#2ca3bd' : '#60a5fa'}
                strokeWidth="1"
                opacity="0.2"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            );
          })}
        </svg>

        {/* Target rings */}
        <div className="relative">
          {[140, 100, 60].map((size, i) => (
            <div
              key={`ring-${i}`}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 ${
                i === 0
                  ? theme === 'dark' ? 'border-red-500/30' : 'border-red-400/40'
                  : i === 1
                  ? theme === 'dark' ? 'border-[#2ca3bd]/40' : 'border-blue-400/50'
                  : theme === 'dark' ? 'border-[#2ca3bd]/60' : 'border-blue-500/70'
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`
              }}
            ></div>
          ))}

          {/* Bullseye center */}
          <div className={`w-32 h-32 rounded-full ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-[#2ca3bd] to-[#1a7a8a]'
              : 'bg-gradient-to-br from-blue-500 to-blue-700'
          } shadow-2xl flex items-center justify-center relative overflow-hidden`}>
            {/* Inner glow */}
            <div className={`absolute inset-0 rounded-full ${
              theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-blue-300'
            } opacity-50 animate-pulse blur-xl`}></div>
            
            {/* Target icon */}
            <div className="relative z-10">
              <div className={`w-16 h-16 rounded-full border-4 ${
                theme === 'dark' ? 'border-white' : 'border-white'
              } flex items-center justify-center`}>
                <div className={`w-4 h-4 rounded-full ${
                  theme === 'dark' ? 'bg-white' : 'bg-white'
                } animate-ping`}></div>
              </div>
            </div>

            {/* Crosshairs */}
            <div className={`absolute inset-0 flex items-center justify-center ${
              theme === 'dark' ? 'text-white' : 'text-white'
            }`}>
              <div className="w-full h-px bg-current opacity-50"></div>
            </div>
            <div className={`absolute inset-0 flex items-center justify-center ${
              theme === 'dark' ? 'text-white' : 'text-white'
            }`}>
              <div className="h-full w-px bg-current opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Orbiting focus points */}
        {[...Array(4)].map((_, i) => {
          const angle = (i / 4) * 360;
          const radius = 100;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          return (
            <div
              key={`focus-${i}`}
              className={`absolute w-4 h-4 ${
                theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-blue-400'
              } rotate-45 animate-pulse`}
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(45deg)`,
                animationDelay: `${i * 0.2}s`,
                boxShadow: `0 0 20px ${theme === 'dark' ? '#2ca3bd' : '#60a5fa'}`
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
        @keyframes ping-slow {
          0%, 100% { opacity: 1; transform: scale(1) translate(-50%, -50%); }
          50% { opacity: 0.5; transform: scale(1.1) translate(-50%, -50%); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}

// ==========================================
// VARIANT 3: PROGRESS RESCUE GAUGE
// Shows transformation from failing (red) to fixed (green)
// Perfect for "rescue" narrative
// ==========================================
export function ProgressRescueGaugeVariant() {
  const { theme } = useTheme();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Color transition from red to green
  const getColor = (value: number) => {
    if (value < 33) return theme === 'dark' ? '#ef4444' : '#dc2626'; // Red - Critical
    if (value < 66) return theme === 'dark' ? '#f59e0b' : '#d97706'; // Orange - Warning
    return theme === 'dark' ? '#22c55e' : '#16a34a'; // Green - Fixed
  };

  const getStatus = (value: number) => {
    if (value < 33) return 'EN RETARD';
    if (value < 66) return 'EN COURS';
    return 'SAUVÉ !';
  };

  return (
    <div className="relative h-[600px] w-full max-w-md flex items-center justify-center">
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={`grid-${i}`}
            className={`absolute h-px ${
              theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-400/20'
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
            : 'bg-gradient-to-br from-gray-100 to-gray-200'
        } shadow-2xl border-4 ${
          theme === 'dark' ? 'border-slate-700' : 'border-gray-300'
        } flex items-center justify-center overflow-hidden`}>
          
          {/* Pulsing glow effect */}
          <div 
            className="absolute inset-0 rounded-full blur-3xl opacity-50 animate-pulse"
            style={{ backgroundColor: getColor(progress) }}
          ></div>

          {/* SVG gauge arc */}
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
            {/* Progress arc */}
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
                filter: `drop-shadow(0 0 8px ${getColor(progress)})`
              }}
            />
          </svg>

          {/* Center display */}
          <div className="relative z-10 text-center">
            <div className={`text-7xl font-black mb-2`}
              style={{ color: getColor(progress) }}>
              {progress}%
            </div>
            <div className={`text-xs uppercase tracking-widest font-bold mb-4 ${
              theme === 'dark' ? 'text-white/60' : 'text-gray-600'
            }`}>
              {getStatus(progress)}
            </div>
            
            {/* Status icons */}
            <div className="flex justify-center gap-2 mt-4">
              {progress < 33 && (
                <div className="flex items-center gap-2 text-red-500">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-xs font-bold">CRITIQUE</span>
                </div>
              )}
              {progress >= 33 && progress < 66 && (
                <div className="flex items-center gap-2 text-orange-500">
                  <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse"></div>
                  <span className="text-xs font-bold">RÉCUPÉRATION</span>
                </div>
              )}
              {progress >= 66 && (
                <div className="flex items-center gap-2 text-green-500">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs font-bold">OBJECTIF ATTEINT</span>
                </div>
              )}
            </div>
          </div>

          {/* Gauge markers */}
          {[0, 33, 66, 100].map((mark, i) => {
            const angle = (mark / 100) * 360 - 90;
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

        {/* Orbiting rescue icons */}
        {[...Array(3)].map((_, i) => {
          const angle = (i / 3) * 360 + (Date.now() / 30) % 360;
          const radius = 180;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          return (
            <div
              key={`orbit-${i}`}
              className={`absolute w-12 h-12 rounded-full flex items-center justify-center ${
                theme === 'dark'
                  ? 'bg-slate-800 border-2 border-[#2ca3bd]'
                  : 'bg-white border-2 border-blue-400'
              } shadow-lg`}
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
              }}
            >
              {i === 0 && <span className="text-2xl">🎯</span>}
              {i === 1 && <span className="text-2xl">⚡</span>}
              {i === 2 && <span className="text-2xl">✅</span>}
            </div>
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
// VARIANT 4: SPRINT DASHBOARD
// Live metrics showing project acceleration
// Perfect for data-driven decision makers
// ==========================================
export function SprintDashboardVariant() {
  const { theme } = useTheme();
  const [metrics, setMetrics] = useState({
    velocity: 0,
    quality: 0,
    deadline: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        velocity: Math.floor(Math.random() * 30) + 70,
        quality: Math.floor(Math.random() * 15) + 85,
        deadline: Math.floor(Math.random() * 10) + 90
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[600px] w-full max-w-md flex items-center justify-center">
      {/* Background data particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className={`absolute w-1 h-1 rounded-full ${
            theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-blue-400'
          } animate-pulse`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`
          }}
        ></div>
      ))}

      <div className="relative space-y-6 w-full px-4">
        {/* Dashboard Header */}
        <div className={`backdrop-blur-xl rounded-2xl p-6 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-[#2ca3bd]/30'
            : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-blue-200'
        } shadow-2xl animate-float`}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className={`text-sm font-bold uppercase tracking-wider ${
                theme === 'dark' ? 'text-white/60' : 'text-gray-600'
              }`}>
                Sprint Metrics
              </h3>
              <p className={`text-3xl font-black ${
                theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'
              }`}>
                EN DIRECT
              </p>
            </div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center animate-pulse">
              <span className="text-3xl">📊</span>
            </div>
          </div>
          
          {/* Live indicator */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className={`text-xs ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-700'
            }`}>
              Mise à jour en temps réel
            </span>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="space-y-4">
          {/* Velocity */}
          <div className={`backdrop-blur-xl rounded-xl p-5 ${
            theme === 'dark'
              ? 'bg-slate-800/80 border border-[#2ca3bd]/20'
              : 'bg-white/80 border border-blue-100'
          } shadow-xl animate-slide-right`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <span className="text-xl">⚡</span>
                </div>
                <div>
                  <p className={`text-xs uppercase tracking-wide ${
                    theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                  }`}>
                    Vélocité
                  </p>
                  <p className={`text-2xl font-black ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {metrics.velocity}%
                  </p>
                </div>
              </div>
              <div className="text-green-500 text-sm font-bold flex items-center gap-1">
                <span>↗</span>
                <span>+{Math.floor(Math.random() * 20) + 10}%</span>
              </div>
            </div>
            <div className={`w-full h-2 rounded-full ${
              theme === 'dark' ? 'bg-slate-700' : 'bg-gray-200'
            } overflow-hidden`}>
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000"
                style={{ width: `${metrics.velocity}%` }}
              ></div>
            </div>
          </div>

          {/* Quality */}
          <div className={`backdrop-blur-xl rounded-xl p-5 ${
            theme === 'dark'
              ? 'bg-slate-800/80 border border-[#2ca3bd]/20'
              : 'bg-white/80 border border-blue-100'
          } shadow-xl animate-slide-right`} style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                  <span className="text-xl">💎</span>
                </div>
                <div>
                  <p className={`text-xs uppercase tracking-wide ${
                    theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                  }`}>
                    Qualité
                  </p>
                  <p className={`text-2xl font-black ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {metrics.quality}%
                  </p>
                </div>
              </div>
              <div className="text-green-500 text-sm font-bold flex items-center gap-1">
                <span>↗</span>
                <span>+{Math.floor(Math.random() * 15) + 5}%</span>
              </div>
            </div>
            <div className={`w-full h-2 rounded-full ${
              theme === 'dark' ? 'bg-slate-700' : 'bg-gray-200'
            } overflow-hidden`}>
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-1000"
                style={{ width: `${metrics.quality}%` }}
              ></div>
            </div>
          </div>

          {/* Deadline */}
          <div className={`backdrop-blur-xl rounded-xl p-5 ${
            theme === 'dark'
              ? 'bg-slate-800/80 border border-[#2ca3bd]/20'
              : 'bg-white/80 border border-blue-100'
          } shadow-xl animate-slide-right`} style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                  <span className="text-xl">🎯</span>
                </div>
                <div>
                  <p className={`text-xs uppercase tracking-wide ${
                    theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                  }`}>
                    Respect Deadline
                  </p>
                  <p className={`text-2xl font-black ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {metrics.deadline}%
                  </p>
                </div>
              </div>
              <div className="text-green-500 text-sm font-bold">
                ✓ ON TRACK
              </div>
            </div>
            <div className={`w-full h-2 rounded-full ${
              theme === 'dark' ? 'bg-slate-700' : 'bg-gray-200'
            } overflow-hidden`}>
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-1000"
                style={{ width: `${metrics.deadline}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className={`backdrop-blur-xl rounded-xl p-4 text-center ${
          theme === 'dark'
            ? 'bg-[#2ca3bd]/10 border border-[#2ca3bd]/30'
            : 'bg-blue-50/80 border border-blue-200'
        }`}>
          <p className={`text-sm font-bold ${
            theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'
          }`}>
            🚀 Performance optimale détectée
          </p>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes slide-right {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-slide-right {
          animation: slide-right 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}

// ==========================================
// VARIANT 5: TEAM DEPLOYMENT
// Visual of expert team being deployed to rescue project
// Perfect for emphasizing human expertise
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
    { role: 'Tech Lead', icon: '👨‍💻', color: 'from-blue-500 to-blue-700' },
    { role: 'DevOps', icon: '⚙️', color: 'from-purple-500 to-purple-700' },
    { role: 'Product Owner', icon: '🎯', color: 'from-green-500 to-green-700' }
  ];

  return (
    <div className="relative h-[600px] w-full max-w-md flex items-center justify-center overflow-hidden">
      {/* Radar effect */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <div
            key={`radar-${i}`}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${
              theme === 'dark' ? 'border-[#2ca3bd]/20' : 'border-blue-400/30'
            }`}
            style={{
              width: `${(i + 1) * 150}px`,
              height: `${(i + 1) * 150}px`,
              animation: `radar-pulse 3s ease-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative">
        {/* Central command */}
        <div className={`relative z-10 backdrop-blur-xl rounded-3xl p-8 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-[#2ca3bd]/30'
            : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-blue-200'
        } shadow-2xl animate-float`}>
          
          {/* Header */}
          <div className="text-center mb-6">
            <div className={`text-sm uppercase tracking-widest mb-2 ${
              theme === 'dark' ? 'text-white/60' : 'text-gray-600'
            }`}>
              Équipe Sprint
            </div>
            <div className={`text-4xl font-black ${
              theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'
            }`}>
              DÉPLOIEMENT
            </div>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className={`text-xs ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-700'
              }`}>
                {deployedCount}/3 Experts en ligne
              </span>
            </div>
          </div>

          {/* Expert cards */}
          <div className="space-y-4 mb-6">
            {experts.map((expert, i) => (
              <div
                key={`expert-${i}`}
                className={`relative overflow-hidden rounded-xl p-4 transition-all duration-500 ${
                  i < deployedCount
                    ? theme === 'dark'
                      ? 'bg-slate-700/50 border-2 border-[#2ca3bd]'
                      : 'bg-blue-50 border-2 border-blue-400'
                    : theme === 'dark'
                    ? 'bg-slate-800/30 border border-slate-700'
                    : 'bg-gray-100/50 border border-gray-300'
                } ${i < deployedCount ? 'scale-105' : 'scale-100'}`}
              >
                {i < deployedCount && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                )}
                
                <div className="relative flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${expert.color} flex items-center justify-center text-2xl shadow-lg`}>
                    {expert.icon}
                  </div>
                  <div className="flex-1">
                    <p className={`font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {expert.role}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      {i < deployedCount ? (
                        <>
                          <span className="text-green-500 text-xs font-bold">● ACTIF</span>
                          <div className={`flex-1 h-1 rounded-full ${
                            theme === 'dark' ? 'bg-slate-600' : 'bg-gray-300'
                          } overflow-hidden`}>
                            <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full animate-progress"></div>
                          </div>
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
                    <div className="text-green-500 text-xl animate-bounce">✓</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className={`text-center p-3 rounded-lg ${
              theme === 'dark' ? 'bg-slate-800' : 'bg-gray-100'
            }`}>
              <div className={`text-2xl font-black ${
                theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'
              }`}>
                48h
              </div>
              <div className={`text-xs ${
                theme === 'dark' ? 'text-white/60' : 'text-gray-600'
              }`}>
                Diagnostic
              </div>
            </div>
            <div className={`text-center p-3 rounded-lg ${
              theme === 'dark' ? 'bg-slate-800' : 'bg-gray-100'
            }`}>
              <div className={`text-2xl font-black ${
                theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'
              }`}>
                14j
              </div>
              <div className={`text-xs ${
                theme === 'dark' ? 'text-white/60' : 'text-gray-600'
              }`}>
                Sprint
              </div>
            </div>
            <div className={`text-center p-3 rounded-lg ${
              theme === 'dark' ? 'bg-slate-800' : 'bg-gray-100'
            }`}>
              <div className={`text-2xl font-black ${
                theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'
              }`}>
                100%
              </div>
              <div className={`text-xs ${
                theme === 'dark' ? 'text-white/60' : 'text-gray-600'
              }`}>
                Dédié
              </div>
            </div>
          </div>
        </div>

        {/* Orbiting mission icons */}
        {[...Array(5)].map((_, i) => {
          const angle = (i / 5) * 360 + (Date.now() / 40) % 360;
          const radius = 200;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          const icons = ['💼', '🎯', '⚡', '🚀', '✨'];
          return (
            <div
              key={`mission-${i}`}
              className={`absolute w-10 h-10 rounded-full flex items-center justify-center ${
                theme === 'dark'
                  ? 'bg-slate-800 border border-[#2ca3bd]/30'
                  : 'bg-white border border-blue-200'
              } shadow-lg text-xl`}
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
              }}
            >
              {icons[i]}
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes radar-pulse {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-progress {
          animation: progress 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

// ==========================================
// VARIANT 6 (KEPT FOR COMPATIBILITY): ROCKET LAUNCH SEQUENCE
// Rocket with animated exhaust and particles
// ==========================================
export function RocketLaunchVariant() {
  const { theme } = useTheme();

  return (
    <div className="relative h-[600px] w-full max-w-md flex items-center justify-center overflow-hidden">
      {/* Stars background */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`star-${i}`}
          className={`absolute w-1 h-1 rounded-full ${
            theme === 'dark' ? 'bg-white' : 'bg-gray-400'
          } animate-pulse`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: Math.random() * 0.7 + 0.3
          }}
        ></div>
      ))}

      {/* Rocket container */}
      <div className="relative animate-float">
        {/* Exhaust trail */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-64">
          {[...Array(5)].map((_, i) => (
            <div
              key={`trail-${i}`}
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full blur-xl ${
                theme === 'dark'
                  ? 'bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent'
                  : 'bg-gradient-to-t from-orange-400 via-yellow-300 to-transparent'
              } animate-exhaust`}
              style={{
                width: `${80 + i * 20}px`,
                height: `${200 + i * 40}px`,
                animationDelay: `${i * 0.1}s`,
                opacity: 0.6 - i * 0.1
              }}
            ></div>
          ))}
        </div>

        {/* Particle effects */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className={`absolute w-2 h-2 rounded-full ${
              i % 2 === 0 ? 'bg-orange-400' : 'bg-yellow-400'
            } animate-particle`}
            style={{
              bottom: `${Math.random() * 60}px`,
              left: `50%`,
              marginLeft: `${(Math.random() - 0.5) * 60}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random()}s`
            }}
          ></div>
        ))}

        {/* Main rocket */}
        <div className="relative z-10">
          {/* Rocket body */}
          <div className={`relative w-24 h-48 ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-slate-300 to-slate-500'
              : 'bg-gradient-to-b from-gray-300 to-gray-600'
          } rounded-t-full shadow-2xl`}>
            {/* Window */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-300 to-blue-500 border-4 border-slate-700 flex items-center justify-center overflow-hidden">
              <div className={`w-8 h-8 rounded-full ${
                theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-blue-400'
              } animate-pulse`}></div>
            </div>

            {/* Racing stripes */}
            <div className={`absolute top-24 left-0 right-0 h-2 ${
              theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-blue-500'
            }`}></div>
            <div className={`absolute top-28 left-0 right-0 h-2 ${
              theme === 'dark' ? 'bg-red-500' : 'bg-red-400'
            }`}></div>

            {/* Side fins */}
            <div className={`absolute -left-8 bottom-8 w-12 h-20 ${
              theme === 'dark' ? 'bg-slate-600' : 'bg-gray-700'
            }`}
            style={{
              clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
            }}></div>
            <div className={`absolute -right-8 bottom-8 w-12 h-20 ${
              theme === 'dark' ? 'bg-slate-600' : 'bg-gray-700'
            }`}
            style={{
              clipPath: 'polygon(0 0, 100% 100%, 0 100%)'
            }}></div>
          </div>

          {/* Nose cone */}
          <div className={`absolute -top-12 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[48px] border-r-[48px] border-b-[48px] ${
            theme === 'dark'
              ? 'border-l-transparent border-r-transparent border-b-red-600'
              : 'border-l-transparent border-r-transparent border-b-red-500'
          }`}></div>

          {/* Glow around rocket */}
          <div className={`absolute inset-0 rounded-t-full blur-2xl ${
            theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-blue-400'
          } opacity-30 animate-pulse -z-10`}></div>
        </div>

        {/* Speed lines */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`speed-${i}`}
            className={`absolute h-px ${
              theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-blue-400'
            } animate-speed-line`}
            style={{
              top: `${100 + i * 40}px`,
              left: `${-40 + i * 10}px`,
              width: `${100 + i * 20}px`,
              animationDelay: `${i * 0.1}s`,
              opacity: 0.3
            }}
          ></div>
        ))}
      </div>

      {/* Launch text */}
      <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 text-center ${
        theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'
      }`}>
        <div className="text-2xl font-black animate-pulse">LIFTOFF!</div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        @keyframes exhaust {
          0%, 100% { transform: translate(-50%, 0) scaleY(1); opacity: 0.8; }
          50% { transform: translate(-50%, 10px) scaleY(1.2); opacity: 0.5; }
        }
        @keyframes particle {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(100px) scale(0); opacity: 0; }
        }
        @keyframes speed-line {
          0% { transform: translateX(0); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateX(-200px); opacity: 0; }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-exhaust {
          animation: exhaust 0.3s ease-in-out infinite;
        }
        .animate-particle {
          animation: particle 1.5s ease-out infinite;
        }
        .animate-speed-line {
          animation: speed-line 1s linear infinite;
        }
      `}</style>
    </div>
  );
}
