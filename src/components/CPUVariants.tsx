import { useTheme } from '../context/ThemeContext';

// ==========================================
// VARIANT 1: CIRCUIT BOARD (Original Style)
// Professional circuit board with pins
// ==========================================
export function CPUCircuitVariant() {
  const { theme } = useTheme();

  return (
    <div className="relative h-[600px] w-full max-w-md">
      {/* Animated circuit lines */}
      <svg className="absolute inset-0 w-full h-full animate-float" viewBox="0 0 400 600" style={{ animationDelay: '0s' }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={theme === 'dark' ? '#2ca3bd' : '#60a5fa'} stopOpacity="0"/>
            <stop offset="50%" stopColor={theme === 'dark' ? '#2ca3bd' : '#60a5fa'} stopOpacity="0.6"/>
            <stop offset="100%" stopColor={theme === 'dark' ? '#2ca3bd' : '#60a5fa'} stopOpacity="0"/>
          </linearGradient>
        </defs>
        
        {/* Horizontal circuits */}
        {[100, 160, 220, 280, 340, 400, 460, 520].map((y, i) => (
          <g key={`h-${i}`}>
            <path d={`M0 ${y} L150 ${y} L160 ${y + 5} L165 ${y}`} 
                  stroke="url(#lineGradient)" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}/>
            <path d={`M235 ${y} L240 ${y + 5} L250 ${y} L400 ${y}`} 
                  stroke="url(#lineGradient)" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}/>
            <circle cx="165" cy={y} r="3" fill={theme === 'dark' ? '#2ca3bd' : '#60a5fa'} className="animate-pulse" opacity="0.8"/>
            <circle cx="235" cy={y} r="3" fill={theme === 'dark' ? '#2ca3bd' : '#60a5fa'} className="animate-pulse" opacity="0.8"/>
          </g>
        ))}
        
        {/* Vertical circuits */}
        {[80, 120, 160, 200, 240, 280, 320].map((x, i) => (
          <g key={`v-${i}`}>
            <path d={`M${x} 50 L${x} 220 L${x + 5} 230 L${x} 235`} 
                  stroke="url(#lineGradient)" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.2 + 0.1}s` }}/>
            <path d={`M${x} 365 L${x + 5} 370 L${x} 380 L${x} 550`} 
                  stroke="url(#lineGradient)" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.2 + 0.1}s` }}/>
            <circle cx={x} cy="235" r="3" fill={theme === 'dark' ? '#2ca3bd' : '#60a5fa'} className="animate-pulse" opacity="0.8"/>
            <circle cx={x} cy="365" r="3" fill={theme === 'dark' ? '#2ca3bd' : '#60a5fa'} className="animate-pulse" opacity="0.8"/>
          </g>
        ))}
      </svg>

      {/* CPU central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: '1s' }}>
        <div className="relative">
          {/* Glow effect */}
          <div className={`absolute inset-0 blur-2xl ${
            theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-blue-400'
          } opacity-20 animate-pulse`}></div>
          
          {/* CPU body */}
          <div className={`relative w-48 h-48 rounded-2xl ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-[#1a3a3a] to-[#0d2626]' 
              : 'bg-gradient-to-br from-cyan-600 to-cyan-800'
          } shadow-2xl border-2 ${
            theme === 'dark' ? 'border-[#2ca3bd]' : 'border-cyan-400'
          } overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
            
            {/* CPU center */}
            <div className="absolute inset-6 rounded-lg bg-gradient-to-br from-gray-300 via-gray-100 to-gray-200 shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-black/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`text-2xl font-black ${
                  theme === 'dark' ? 'text-[#0d2626]' : 'text-cyan-900'
                } opacity-20`}>MALITIX</div>
              </div>
            </div>

            {/* Golden pins */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <div key={`left-${i}`} className="absolute left-0 w-3 h-4 bg-gradient-to-r from-yellow-600 to-yellow-400 shadow-md" 
                     style={{ top: `${20 + i * 14}%` }}></div>
              ))}
              {[...Array(6)].map((_, i) => (
                <div key={`right-${i}`} className="absolute right-0 w-3 h-4 bg-gradient-to-l from-yellow-600 to-yellow-400 shadow-md" 
                     style={{ top: `${20 + i * 14}%` }}></div>
              ))}
              {[...Array(6)].map((_, i) => (
                <div key={`top-${i}`} className="absolute top-0 w-4 h-3 bg-gradient-to-b from-yellow-600 to-yellow-400 shadow-md" 
                     style={{ left: `${20 + i * 14}%` }}></div>
              ))}
              {[...Array(6)].map((_, i) => (
                <div key={`bottom-${i}`} className="absolute bottom-0 w-4 h-3 bg-gradient-to-t from-yellow-600 to-yellow-400 shadow-md" 
                     style={{ left: `${20 + i * 14}%` }}></div>
              ))}
            </div>
          </div>

          {/* Orbiting particles */}
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * 360;
            const radius = 110;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            return (
              <div
                key={`particle-${i}`}
                className={`absolute w-2 h-2 rounded-full ${
                  theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-cyan-400'
                } animate-pulse`}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  animationDelay: `${i * 0.1}s`,
                  boxShadow: `0 0 10px ${theme === 'dark' ? '#2ca3bd' : '#60a5fa'}`
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// VARIANT 2: MINIMALIST CHIP
// Clean, modern chip design with data flow
// ==========================================
export function CPUChipVariant() {
  const { theme } = useTheme();

  return (
    <div className="relative h-[600px] w-full max-w-md flex items-center justify-center">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className={`w-full h-full ${
          theme === 'dark'
            ? 'bg-[linear-gradient(rgba(44,163,189,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(44,163,189,0.1)_1px,transparent_1px)]'
            : 'bg-[linear-gradient(rgba(59,130,246,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.2)_1px,transparent_1px)]'
        } bg-[size:40px_40px]`}></div>
      </div>

      {/* Central chip */}
      <div className="relative animate-float" style={{ animationDelay: '0.5s' }}>
        {/* Outer glow rings */}
        <div className={`absolute inset-0 rounded-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-blue-400'
        } opacity-10 blur-3xl animate-pulse scale-150`}></div>

        {/* Main chip container */}
        <div className={`relative w-56 h-56 rounded-3xl ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-slate-800 to-slate-900'
            : 'bg-gradient-to-br from-blue-500 to-blue-700'
        } shadow-2xl border ${
          theme === 'dark' ? 'border-[#2ca3bd]/30' : 'border-blue-300/50'
        } overflow-hidden`}>
          
          {/* Corner accents */}
          {[
            'top-0 left-0',
            'top-0 right-0',
            'bottom-0 left-0',
            'bottom-0 right-0'
          ].map((pos, i) => (
            <div
              key={i}
              className={`absolute ${pos} w-8 h-8 ${
                theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-blue-300'
              } opacity-50`}
              style={{
                clipPath: pos.includes('top')
                  ? pos.includes('left')
                    ? 'polygon(0 0, 100% 0, 0 100%)'
                    : 'polygon(100% 0, 100% 100%, 0 0)'
                  : pos.includes('left')
                  ? 'polygon(0 0, 0 100%, 100% 100%)'
                  : 'polygon(100% 0, 100% 100%, 0 100%)'
              }}
            ></div>
          ))}

          {/* Data flow lines - horizontal */}
          {[...Array(5)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute left-0 right-0 h-px overflow-hidden"
              style={{ top: `${20 + i * 15}%` }}
            >
              <div className={`h-full w-full ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-transparent via-[#2ca3bd] to-transparent'
                  : 'bg-gradient-to-r from-transparent via-blue-300 to-transparent'
              } animate-data-flow-h`}
              style={{ animationDelay: `${i * 0.3}s` }}></div>
            </div>
          ))}

          {/* Data flow lines - vertical */}
          {[...Array(5)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-px overflow-hidden"
              style={{ left: `${20 + i * 15}%` }}
            >
              <div className={`w-full h-full ${
                theme === 'dark'
                  ? 'bg-gradient-to-b from-transparent via-[#2ca3bd] to-transparent'
                  : 'bg-gradient-to-b from-transparent via-blue-300 to-transparent'
              } animate-data-flow-v`}
              style={{ animationDelay: `${i * 0.3}s` }}></div>
            </div>
          ))}

          {/* Center core */}
          <div className="absolute inset-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <div className={`text-3xl font-black tracking-wider ${
              theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-200'
            } opacity-60`}>
              M
            </div>
          </div>

          {/* Pulsing corner dots */}
          {[...Array(4)].map((_, i) => (
            <div
              key={`corner-${i}`}
              className={`absolute w-3 h-3 rounded-full ${
                theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-blue-300'
              } animate-pulse`}
              style={{
                [i < 2 ? 'top' : 'bottom']: '1rem',
                [i % 2 === 0 ? 'left' : 'right']: '1rem',
                animationDelay: `${i * 0.2}s`
              }}
            ></div>
          ))}
        </div>

        {/* Connection points around chip */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * 360;
          const radius = 140;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          return (
            <div key={`conn-${i}`} className="absolute" style={{
              left: '50%',
              top: '50%',
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
            }}>
              <div className={`w-4 h-4 rounded-full border-2 ${
                theme === 'dark' ? 'border-[#2ca3bd] bg-slate-900' : 'border-blue-400 bg-blue-50'
              } animate-ping-slow`}
              style={{ animationDelay: `${i * 0.15}s` }}></div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes data-flow-h {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes data-flow-v {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes ping-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        .animate-data-flow-h {
          animation: data-flow-h 2s ease-in-out infinite;
        }
        
        .animate-data-flow-v {
          animation: data-flow-v 2s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}

// ==========================================
// VARIANT 3: NEURAL NETWORK
// AI-inspired neural network visualization
// ==========================================
export function CPUNeuralVariant() {
  const { theme } = useTheme();

  // Generate node positions for neural network layers
  const generateNodes = () => {
    const layers = [4, 6, 6, 4]; // nodes per layer
    const nodes: Array<{ x: number; y: number; layer: number; index: number }> = [];
    
    layers.forEach((count, layerIndex) => {
      const layerX = (layerIndex / (layers.length - 1)) * 400;
      for (let i = 0; i < count; i++) {
        const layerY = ((i + 1) / (count + 1)) * 600;
        nodes.push({ x: layerX, y: layerY, layer: layerIndex, index: i });
      }
    });
    
    return nodes;
  };

  const nodes = generateNodes();

  // Generate connections between layers
  const generateConnections = () => {
    const connections: Array<{ x1: number; y1: number; x2: number; y2: number }> = [];
    
    nodes.forEach(node => {
      if (node.layer < 3) {
        const nextLayerNodes = nodes.filter(n => n.layer === node.layer + 1);
        nextLayerNodes.forEach(nextNode => {
          connections.push({
            x1: node.x,
            y1: node.y,
            x2: nextNode.x,
            y2: nextNode.y
          });
        });
      }
    });
    
    return connections;
  };

  const connections = generateConnections();

  return (
    <div className="relative h-[600px] w-full max-w-md flex items-center justify-center">
      {/* Neural network visualization */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 600">
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={theme === 'dark' ? '#2ca3bd' : '#60a5fa'} stopOpacity="0.1"/>
            <stop offset="50%" stopColor={theme === 'dark' ? '#2ca3bd' : '#60a5fa'} stopOpacity="0.4"/>
            <stop offset="100%" stopColor={theme === 'dark' ? '#2ca3bd' : '#60a5fa'} stopOpacity="0.1"/>
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines */}
        <g className="animate-pulse" style={{ animationDuration: '3s' }}>
          {connections.map((conn, i) => (
            <line
              key={`conn-${i}`}
              x1={conn.x1}
              y1={conn.y1}
              x2={conn.x2}
              y2={conn.y2}
              stroke="url(#neuralGradient)"
              strokeWidth="1.5"
              opacity="0.6"
              className="animate-pulse"
              style={{ animationDelay: `${(i % 10) * 0.1}s` }}
            />
          ))}
        </g>

        {/* Data pulses along connections */}
        {connections.slice(0, 15).map((conn, i) => (
          <g key={`pulse-${i}`}>
            <circle
              r="3"
              fill={theme === 'dark' ? '#2ca3bd' : '#60a5fa'}
              filter="url(#glow)"
              opacity="0.8"
            >
              <animateMotion
                dur="2s"
                repeatCount="indefinite"
                begin={`${i * 0.15}s`}
              >
                <mpath href={`#path-${i}`} />
              </animateMotion>
            </circle>
            <path
              id={`path-${i}`}
              d={`M ${conn.x1} ${conn.y1} L ${conn.x2} ${conn.y2}`}
              fill="none"
            />
          </g>
        ))}

        {/* Neural nodes */}
        {nodes.map((node, i) => (
          <g key={`node-${i}`}>
            <circle
              cx={node.x}
              cy={node.y}
              r="8"
              fill={theme === 'dark' ? '#0d2626' : '#1e3a8a'}
              stroke={theme === 'dark' ? '#2ca3bd' : '#60a5fa'}
              strokeWidth="2"
              className="animate-pulse"
              style={{ animationDelay: `${node.layer * 0.2 + node.index * 0.1}s` }}
              filter="url(#glow)"
            />
            <circle
              cx={node.x}
              cy={node.y}
              r="4"
              fill={theme === 'dark' ? '#2ca3bd' : '#60a5fa'}
              opacity="0.6"
              className="animate-ping"
              style={{ animationDelay: `${node.layer * 0.2 + node.index * 0.1}s`, animationDuration: '2s' }}
            />
          </g>
        ))}
      </svg>

      {/* Central processor core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: '0.3s' }}>
        <div className="relative">
          {/* Rotating rings */}
          {[100, 130, 160].map((size, i) => (
            <div
              key={`ring-${i}`}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${
                theme === 'dark' ? 'border-[#2ca3bd]' : 'border-blue-400'
              } opacity-20 animate-spin-slow`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                animationDuration: `${10 + i * 5}s`,
                animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
              }}
            ></div>
          ))}

          {/* Core processor */}
          <div className={`relative w-20 h-20 rounded-2xl ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-slate-800 to-slate-900'
              : 'bg-gradient-to-br from-blue-600 to-blue-800'
          } shadow-2xl border-2 ${
            theme === 'dark' ? 'border-[#2ca3bd]' : 'border-blue-400'
          } flex items-center justify-center`}>
            <div className={`absolute inset-0 rounded-2xl ${
              theme === 'dark' ? 'bg-[#2ca3bd]' : 'bg-blue-400'
            } opacity-30 blur-xl animate-pulse`}></div>
            
            <div className={`relative text-2xl font-black ${
              theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-200'
            }`}>
              AI
            </div>
          </div>

          {/* Energy pulses */}
          {[...Array(3)].map((_, i) => (
            <div
              key={`energy-${i}`}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-2 ${
                theme === 'dark' ? 'border-[#2ca3bd]' : 'border-blue-400'
              } animate-ping`}
              style={{
                animationDelay: `${i * 0.7}s`,
                animationDuration: '2s'
              }}
            ></div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
