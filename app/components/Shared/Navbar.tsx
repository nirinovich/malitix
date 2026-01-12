import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { useTheme } from "~/hooks/useTheme";

const USE_CASES = [
  {
    label: "Sprint Commando",
    href: "/sprint",
    description: "Déblocage garanti en 14 jours",
  },
  {
    label: "Développement Sur Mesure",
    href: "/custom-dev",
    description: "Application web & mobile en 90 jours",
  },
  {
    label: "Développement Mobile",
    href: "/mobile-app",
    description: "iOS & Android native & cross-platform",
  },
  {
    label: "Refonte SI",
    href: "/si-refonte",
    description: "Modernisation de système d'information",
  },
];

export function Navbar(): JSX.Element {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsUseCasesOpen(false);

    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/" + href);
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const handleUseCaseClick = (href: string) => {
    setIsUseCasesOpen(false);
    setIsMobileMenuOpen(false);
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsUseCasesOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = window.setTimeout(() => {
      setIsUseCasesOpen(false);
    }, 200);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? theme === "dark"
            ? "bg-slate-950/95 shadow-lg shadow-blue-500/10"
            : "bg-white/95 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-white">
                MX
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick("#home")}
              className={`relative group py-2 transition-colors cursor-pointer ${
                theme === "dark"
                  ? "text-slate-200 hover:text-white"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              Accueil
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </button>

            <button
              onClick={() => handleNavClick("#services")}
              className={`relative group py-2 transition-colors cursor-pointer ${
                theme === "dark"
                  ? "text-slate-200 hover:text-white"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* Use Cases Dropdown */}
            <div
              className="relative group"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`relative py-2 transition-colors flex items-center gap-1 cursor-pointer ${
                  theme === "dark"
                    ? "text-slate-200 hover:text-white"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              >
                Use Cases
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isUseCasesOpen ? "rotate-180" : ""
                  }`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 pt-3 transition-all duration-200 ${
                  isUseCasesOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div
                  className={`w-72 rounded-2xl shadow-2xl border overflow-hidden ${
                    theme === "dark"
                      ? "bg-slate-950/98 border-slate-700"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <div className="p-2">
                    {USE_CASES.map((useCase) => (
                      <button
                        key={useCase.href}
                        onClick={() => handleUseCaseClick(useCase.href)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all cursor-pointer ${
                          theme === "dark"
                            ? "hover:bg-slate-800 text-slate-300 hover:text-white"
                            : "hover:bg-slate-100 text-slate-700 hover:text-slate-900"
                        }`}
                      >
                        <div className="font-medium">{useCase.label}</div>
                        <div
                          className={`text-sm ${
                            theme === "dark"
                              ? "text-slate-500"
                              : "text-slate-500"
                          }`}
                        >
                          {useCase.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <a
              href="#contact"
              className={`relative group py-2 transition-colors cursor-pointer ${
                theme === "dark"
                  ? "text-slate-200 hover:text-white"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                theme === "dark"
                  ? "bg-slate-800 text-yellow-400 hover:bg-slate-700"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden pb-4 space-y-2 ${
              theme === "dark" ? "bg-slate-900" : "bg-slate-50"
            }`}
          >
            <button
              onClick={() => handleNavClick("#home")}
              className={`block w-full text-left px-4 py-2 rounded transition-colors ${
                theme === "dark"
                  ? "text-slate-200 hover:bg-slate-800"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              Accueil
            </button>
            <button
              onClick={() => handleNavClick("#services")}
              className={`block w-full text-left px-4 py-2 rounded transition-colors ${
                theme === "dark"
                  ? "text-slate-200 hover:bg-slate-800"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              Services
            </button>
            {USE_CASES.map((useCase) => (
              <button
                key={useCase.href}
                onClick={() => handleUseCaseClick(useCase.href)}
                className={`block w-full text-left px-4 py-2 rounded transition-colors text-sm ${
                  theme === "dark"
                    ? "text-slate-400 hover:bg-slate-800"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {useCase.label}
              </button>
            ))}
            <a
              href="#contact"
              className={`block px-4 py-2 rounded transition-colors ${
                theme === "dark"
                  ? "text-slate-200 hover:bg-slate-800"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
