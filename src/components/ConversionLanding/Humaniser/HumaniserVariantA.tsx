import { KanbanSquare, MessageCircle, Users } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

const paragraph = "Vous avez une roadmap chargée et pas assez de mains pour coder ? Le recrutement traditionnel est lent et risqué. Les freelances sont imprévisibles. Chez Malitix, nous ne sommes pas une 'agence offshore'. Nous sommes votre extension technique. Nous vous pluggons une équipe commando déjà rodée qui s'intègre à vos outils (Slack, Jira) dès le Jour 1.";

export default function HumaniserVariantA() {
  const { theme } = useTheme();

  return (
    <section id="humaniser" className={`py-20 ${theme === 'dark' ? 'bg-[#0a0e0d]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-3 gap-4">
            {["/images/testimonials/selim-saadi.png", "/images/testimonials/riad.png", "/images/testimonials/david.png"].map((src) => (
              <div key={src} className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src={src} alt="Membre de l'équipe Malitix" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2ca3bd]">
              <Users size={16} />
              Notre équipe
            </div>
            <h2 className={`text-3xl sm:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Des humains, pas des prestas anonymes.
            </h2>
            <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
              {paragraph}
            </p>

            <div className={`grid sm:grid-cols-2 gap-4 ${theme === 'dark' ? 'text-white/70' : 'text-gray-700'}`}>
              {[
                { icon: MessageCircle, label: 'Collaboration Slack/Teams' },
                { icon: KanbanSquare, label: 'Intégration Jira dès J+1' },
              ].map((item) => (
                <div key={item.label} className={`flex items-center gap-3 rounded-2xl border px-4 py-3 ${
                  theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'
                }`}>
                  <item.icon className="text-[#2ca3bd]" size={18} aria-hidden="true" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
