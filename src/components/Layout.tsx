import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#060705]' : 'bg-white'}`}>
      <Navbar theme={theme} />
      <main>{children}</main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}
