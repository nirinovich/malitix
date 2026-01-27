import { HelpCircle } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

const items = [
  {
    question: 'Est-ce que je vais avoir un décalage horaire ?',
    answer: 'Nos équipes sont calées sur vos horaires de bureau pour assurer une collaboration Slack/Teams en temps réel.',
  },
  {
    question: 'Comment garantissez-vous la qualité du code ?',
    answer: 'Chaque ligne de code passe par une Code Review stricte. Nos Tech Leads supervisent chaque commit.',
  },
  {
    question: 'Et si le développeur ne convient pas ?',
    answer: 'Grâce à notre garantie "Plug & Play", nous le remplaçons sous 48h sans frais supplémentaires.',
  },
];

export default function FaqVariantB() {
  const { theme } = useTheme();

  return (
    <section id="faq" className={`py-20 ${theme === 'dark' ? 'bg-[#0a0e0d]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#2ca3bd] font-semibold">
          <HelpCircle size={16} />
          FAQ
        </div>
        <h2 className={`mt-4 text-3xl sm:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Traitement des objections
        </h2>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.question}
              className={`rounded-3xl border p-6 ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'}`}
            >
              <div className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {item.question}
              </div>
              <p className={`mt-3 text-sm leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
