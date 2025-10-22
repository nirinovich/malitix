import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, CTA_TEXT } from '../utils/constants';
import { useTheme } from '../context/ThemeContext';

interface NavbarCenteredProps {
  theme?: 'dark' | 'light';
}

export default function NavbarCentered({ theme: propTheme }: NavbarCenteredProps) {
  const { theme: contextTheme } = useTheme();
  const theme = propTheme || contextTheme;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-[#060705]/95 backdrop-blur-lg shadow-lg shadow-[#2ca3bd]/10'
            : 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-4 md:py-0 md:h-20">
          {/* Logo - Centered on mobile, left on desktop */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img 
                src={theme === 'dark' ? '/Logo.png' : '/LogoInverted.png'} 
                alt="Malitix" 
                className="h-8 w-auto" 
              />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                theme === 'dark' ? 'text-white hover:bg-white/10' : 'text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative group py-2 transition-colors font-medium ${
                  theme === 'dark' ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2ca3bd] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button - Right side */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="bg-[#2ca3bd] hover:bg-[#248fa5] text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-[#2ca3bd]/30 hover:shadow-[#2ca3bd]/50 hover:scale-105 transition-all duration-300"
            >
              {CTA_TEXT.primary}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 border-t transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-[#060705]/98 backdrop-blur-xl border-white/10'
            : 'bg-white/98 backdrop-blur-xl border-gray-200'
        } ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`block px-4 py-3 rounded-lg transition-all text-center ${
                theme === 'dark'
                  ? 'text-white/80 hover:text-white hover:bg-white/5'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="block bg-[#2ca3bd] hover:bg-[#248fa5] text-white text-center px-6 py-3 rounded-full font-semibold shadow-lg shadow-[#2ca3bd]/30 transition-all"
          >
            {CTA_TEXT.primary}
          </a>
        </div>
      </div>
    </nav>
  );
}
