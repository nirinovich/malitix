import { Rocket } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface PowerButtonProps {
  onClick: () => void;
  text: string;
}

export default function PowerButton({ onClick, text }: PowerButtonProps) {
  const { theme } = useTheme();

  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-[#2ca3bd] to-[#3bb3cd] text-white shadow-lg hover:shadow-[#2ca3bd]/50'
          : 'bg-gradient-to-r from-[#2ca3bd] to-[#3bb3cd] text-white shadow-lg hover:shadow-[#2ca3bd]/40'
      }`}
    >
      {/* Hover shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Button content */}
      <span className="relative z-10 flex items-center gap-3">
        <Rocket size={22} className="group-hover:rotate-12 transition-transform duration-300" />
        {text}
      </span>
    </button>
  );
}
