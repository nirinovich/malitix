import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
      style={{
        backgroundColor: theme === 'dark' ? '#ffffff' : '#060705',
        color: theme === 'dark' ? '#060705' : '#ffffff',
        boxShadow: theme === 'dark' 
          ? '0 10px 40px rgba(255, 255, 255, 0.2)' 
          : '0 10px 40px rgba(6, 7, 5, 0.2)'
      }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}