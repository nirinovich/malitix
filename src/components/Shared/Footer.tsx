import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router';
import { NAV_LINKS, COMPANY_INFO, SOCIAL_LINKS } from '../../utils/constants';
import { useTheme } from '../../context/ThemeContext';

const iconMap = {
  Linkedin,
};

export default function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + href);
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer className={`border-t relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-[#060705] border-white/10'
        : 'bg-white border-gray-200'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/5' : 'bg-blue-400/10'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className={`text-2xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {COMPANY_INFO.name}
              </h3>
              <p className={`text-sm leading-relaxed ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-600'
              }`}>
                {COMPANY_INFO.description}
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition-all duration-300 group ${
                      theme === 'dark'
                        ? 'bg-white/5 hover:bg-[#2ca3bd]/20 border border-white/10 hover:border-[#2ca3bd]/50'
                        : 'bg-gray-100 hover:bg-blue-50 border border-gray-200 hover:border-blue-300'
                    }`}
                    aria-label={social.name}
                  >
                    {Icon && (
                      <Icon 
                        className={`transition-colors ${
                          theme === 'dark'
                            ? 'text-white/70 group-hover:text-[#2ca3bd]'
                            : 'text-gray-600 group-hover:text-[#2ca3bd]'
                        }`}
                        size={20} 
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold mb-6 text-lg ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Navigation</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`text-sm transition-colors cursor-pointer ${
                      theme === 'dark'
                        ? 'text-white/70 hover:text-[#2ca3bd]'
                        : 'text-gray-600 hover:text-[#2ca3bd]'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={`font-semibold mb-6 text-lg ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Services</h4>
            <ul className="space-y-3">
              {[
                'Refonte de SI',
                'Développement web & mobile',
                'Services managés',
                'Data Platform',
                'IA métier',
              ].map((service, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleNavClick('#services')}
                    className={`text-sm transition-colors cursor-pointer ${
                      theme === 'dark'
                        ? 'text-white/70 hover:text-[#2ca3bd]'
                        : 'text-gray-600 hover:text-[#2ca3bd]'
                    }`}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`font-semibold mb-6 text-lg ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="text-[#2ca3bd] flex-shrink-0 mt-0.5" size={18} />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className={`text-sm transition-colors ${
                    theme === 'dark'
                      ? 'text-white/70 hover:text-[#2ca3bd]'
                      : 'text-gray-600 hover:text-[#2ca3bd]'
                  }`}
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-[#2ca3bd] flex-shrink-0 mt-0.5" size={18} />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className={`text-sm transition-colors ${
                    theme === 'dark'
                      ? 'text-white/70 hover:text-[#2ca3bd]'
                      : 'text-gray-600 hover:text-[#2ca3bd]'
                  }`}
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-[#2ca3bd] flex-shrink-0 mt-0.5" size={18} />
                <span className={`text-sm ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                }`}>
                  {COMPANY_INFO.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`py-8 border-t ${
          theme === 'dark' ? 'border-white/10' : 'border-gray-200'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-sm ${
              theme === 'dark' ? 'text-white/50' : 'text-gray-500'
            }`}>
              © {currentYear} {COMPANY_INFO.name}. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link
                to="/mentions-legales"
                className={`text-sm transition-colors cursor-pointer ${
                  theme === 'dark'
                    ? 'text-white/50 hover:text-[#2ca3bd]'
                    : 'text-gray-500 hover:text-[#2ca3bd]'
                }`}
              >
                Mentions légales
              </Link>
              <Link
                to="/politique-de-confidentialite"
                className={`text-sm transition-colors cursor-pointer ${
                  theme === 'dark'
                    ? 'text-white/50 hover:text-[#2ca3bd]'
                    : 'text-gray-500 hover:text-[#2ca3bd]'
                }`}
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
