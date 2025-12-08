import { useEffect, useState } from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const stats = [
  { icon: TrendingUp, value: '600+', label: 'Projets livrés' },
  { icon: Users, value: '350+', label: 'Développeurs' },
  { icon: Award, value: '15 ans', label: "D'expertise" },
  { icon: Clock, value: '48h', label: 'Temps de réponse' },
];

export default function LogoCarousel() {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`py-12 border-y ${
      theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop view - All visible */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center gap-3 group"
              >
                <div className={`p-3 rounded-xl transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-[#2ca3bd]/10 group-hover:bg-[#2ca3bd]/20'
                    : 'bg-[#2ca3bd]/10 group-hover:bg-[#2ca3bd]/20'
                }`}>
                  <Icon className="text-[#2ca3bd]" size={24} />
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold mb-1 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile view - Carousel */}
        <div className="md:hidden">
          <div className="flex justify-center items-center gap-12 overflow-hidden">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center gap-3 transition-all duration-500 ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-30 scale-75'
                  }`}
                  style={{
                    transform: `translateX(${(index - activeIndex) * 100}%)`,
                  }}
                >
                  <div className={`p-3 rounded-xl ${
                    theme === 'dark'
                      ? 'bg-[#2ca3bd]/10'
                      : 'bg-[#2ca3bd]/10'
                  }`}>
                    <Icon className="text-[#2ca3bd]" size={24} />
                  </div>
                  <div className="text-center">
                    <div className={`text-3xl font-bold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {stat.value}
                    </div>
                    <div className={`text-sm ${
                      theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                    }`}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {stats.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-[#2ca3bd] w-8'
                    : theme === 'dark'
                      ? 'bg-white/20'
                      : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
