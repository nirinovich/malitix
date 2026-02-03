import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router';
import { NAV_LINKS, COMPANY_INFO, SOCIAL_LINKS } from '~/utils/constants';

const iconMap = {
  Linkedin,
};

export function Footer() {
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
      return;
    }

    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t relative overflow-hidden bg-[var(--surface-primary)] border-[var(--border-primary)]">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl bg-[var(--accent-secondary)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-[var(--text-primary)]">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
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
                    className="p-3 rounded-full transition-all duration-300 group bg-[var(--surface-elevated)] hover:bg-[var(--surface-hover)] border border-[var(--border-primary)] hover:border-[var(--border-hover)]"
                    aria-label={social.name}
                  >
                    {Icon && (
                      <Icon 
                        className="transition-colors text-[var(--text-secondary)] group-hover:text-[var(--brand-text)]"
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
            <h4 className="font-semibold mb-6 text-lg text-[var(--text-primary)]">Navigation</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm transition-colors cursor-pointer text-[var(--text-secondary)] hover:text-[var(--brand-text)]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-lg text-[var(--text-primary)]">Services</h4>
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
                    className="text-sm transition-colors cursor-pointer text-[var(--text-secondary)] hover:text-[var(--brand-text)]"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-lg text-[var(--text-primary)]">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="text-[#2ca3bd] flex-shrink-0 mt-0.5" size={18} />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-sm transition-colors text-[var(--text-secondary)] hover:text-[var(--brand-text)]"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-[#2ca3bd] flex-shrink-0 mt-0.5" size={18} />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-sm transition-colors text-[var(--text-secondary)] hover:text-[var(--brand-text)]"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-[#2ca3bd] flex-shrink-0 mt-0.5" size={18} />
                <span className="text-sm text-[var(--text-secondary)]">
                  {COMPANY_INFO.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-[var(--border-primary)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--text-muted)]">
              © {currentYear} {COMPANY_INFO.name}. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link
                to="/mentions-legales"
                className="text-sm transition-colors cursor-pointer text-[var(--text-muted)] hover:text-[var(--brand-text)]"
              >
                Mentions légales
              </Link>
              <Link
                to="/politique-de-confidentialite"
                className="text-sm transition-colors cursor-pointer text-[var(--text-muted)] hover:text-[var(--brand-text)]"
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
