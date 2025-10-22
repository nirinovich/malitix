import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS, CTA_TEXT } from '../utils/constants';
import { useTheme } from '../context/ThemeContext';

interface NavbarMinimalProps {
  theme?: 'dark' | 'light';
}

export default function NavbarMinimal({ theme: propTheme }: NavbarMinimalProps) {
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
            ? 'bg-[#060705] border-b border-white/10'
            : 'bg-white border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
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
                className="h-7 w-auto" 
              />
            </a>
          </div>

          {/* Desktop Navigation - Minimal & Clean */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  theme === 'dark'
                    ? 'text-white/70 hover:text-white hover:bg-white/5'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
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
              className="ml-4 group inline-flex items-center gap-2 bg-[#2ca3bd] hover:bg-[#248fa5] text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all hover:gap-3"
            >
              {CTA_TEXT.primary}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              theme === 'dark' ? 'text-white hover:bg-white/10' : 'text-gray-900 hover:bg-gray-100'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 border-t transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-[#060705] border-white/10'
            : 'bg-white border-gray-200'
        } ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`block px-4 py-2 rounded-lg transition-all text-sm ${
                theme === 'dark'
                  ? 'text-white/70 hover:text-white hover:bg-white/5'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
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
            className="flex items-center justify-center gap-2 bg-[#2ca3bd] hover:bg-[#248fa5] text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all mt-2"
          >
            {CTA_TEXT.primary}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
}
