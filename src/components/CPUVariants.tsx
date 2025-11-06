import { useTheme } from '../context/ThemeContext';
import { useEffect, useState } from 'react';

// ==========================================
// VARIANT 1: COUNTDOWN TIMER
// 14 days sprint countdown with progress rings
// ==========================================
export function CountdownTimerVariant() {
  const { theme } = useTheme();
  const [time, setTime] = useState({ days: 14, hours: 0, minutes: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1 };
        if (prev.hours > 0) return { days: prev.days, hours: prev.hours - 1, minutes: 59 };
        if (prev.days > 0) return { days: prev.days - 1, hours: 23, minutes: 59 };
        return { days: 14, hours: 0, minutes: 0 }; // Reset
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
// VARIANT 3: ROCKET LAUNCH SEQUENCE
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
