
// Hidden until light mode is ready for deployment
export default function ThemeToggle() {
  return null;
}

/* 
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();


  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
        theme === 'dark'
          ? 'bg-white text-[#060705] shadow-white/20'
          : 'bg-[#060705] text-white shadow-[#060705]/20'
      }`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}
*/