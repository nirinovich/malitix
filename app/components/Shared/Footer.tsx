import { useTheme } from "~/hooks/useTheme";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

export function Footer(): JSX.Element {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`border-t relative overflow-hidden ${
        theme === "dark"
          ? "bg-slate-950 border-slate-800"
          : "bg-white border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3
              className={`text-lg font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}
            >
              Malitix
            </h3>
            <p
              className={`text-sm ${
                theme === "dark"
                  ? "text-slate-400"
                  : "text-slate-600"
              }`}
            >
              Transforming businesses through custom technology solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              className={`text-sm font-semibold mb-4 ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}
            >
              Services
            </h4>
            <ul
              className={`space-y-2 text-sm ${
                theme === "dark"
                  ? "text-slate-400"
                  : "text-slate-600"
              }`}
            >
              <li>
                <a href="/custom-dev" className="hover:text-blue-500 transition">
                  Custom Development
                </a>
              </li>
              <li>
                <a
                  href="/mobile-app"
                  className="hover:text-blue-500 transition"
                >
                  Mobile Apps
                </a>
              </li>
              <li>
                <a
                  href="/si-refonte"
                  className="hover:text-blue-500 transition"
                >
                  SI Refonte
                </a>
              </li>
              <li>
                <a href="/sprint" className="hover:text-blue-500 transition">
                  Sprint Commando
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className={`text-sm font-semibold mb-4 ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}
            >
              Legal
            </h4>
            <ul
              className={`space-y-2 text-sm ${
                theme === "dark"
                  ? "text-slate-400"
                  : "text-slate-600"
              }`}
            >
              <li>
                <a href="/privacy-policy" className="hover:text-blue-500 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/legal-notice" className="hover:text-blue-500 transition">
                  Legal Notice
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className={`text-sm font-semibold mb-4 ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}
            >
              Contact
            </h4>
            <div
              className={`space-y-2 text-sm ${
                theme === "dark"
                  ? "text-slate-400"
                  : "text-slate-600"
              }`}
            >
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:contact@malitix.com" className="hover:text-blue-500 transition">
                  contact@malitix.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+33123456789" className="hover:text-blue-500 transition">
                  +33 1 23 45 67 89
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Paris, France</span>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <a
                  href="https://linkedin.com"
                  className="hover:text-blue-500 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          className={`border-t py-8 ${
            theme === "dark" ? "border-slate-800" : "border-slate-200"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p
              className={`text-sm ${
                theme === "dark"
                  ? "text-slate-500"
                  : "text-slate-600"
              }`}
            >
              © {currentYear} Malitix. All rights reserved.
            </p>
            <div
              className={`flex gap-6 text-sm ${
                theme === "dark"
                  ? "text-slate-500"
                  : "text-slate-600"
              }`}
            >
              <a href="/privacy-policy" className="hover:text-blue-500 transition">
                Privacy
              </a>
              <a href="/legal-notice" className="hover:text-blue-500 transition">
                Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
