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

export default function FaqVariantC() {
  const { theme } = useTheme();

  return (
    <section id="faq" className={`py-20 ${theme === 'dark' ? 'bg-[#060705]' : 'bg-[#f5f7f9]'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2ca3bd] font-semibold">FAQ</div>
          <h2 className={`mt-4 text-3xl sm:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Questions fréquentes
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {items.map((item, index) => (
            <div
              key={item.question}
              className={`rounded-3xl border p-6 flex flex-col sm:flex-row sm:items-start gap-4 transition-all duration-300 hover:-translate-y-1 ${
                theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-white'
              }`}
            >
              <div className="h-10 w-10 rounded-2xl bg-[#2ca3bd]/15 flex items-center justify-center text-[#2ca3bd] font-bold">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div>
                <div className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {item.question}
                </div>
                <p className={`mt-2 text-sm leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
