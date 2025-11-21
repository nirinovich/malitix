import { Target, Rocket, Lock, Award } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function CustomDevStack() {
  const { theme } = useTheme();

  const simplifiedStack = [
    { icon: Target, title: 'Audit Stratégique', desc: 'ROI garanti dès le départ' },
    { icon: Rocket, title: 'Développement Agile', desc: 'Livraison en 90 jours' },
    { icon: Lock, title: 'Sécurité RGPD', desc: 'Données blindées' },
    { icon: Award, title: 'Code de Qualité', desc: 'Zéro dette technique' },
  ];

  return (
    <section className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#0a0e0d] to-[#060705]'
        : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            4 Piliers Pour Votre{' '}
            <span className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'}>
              Succès
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {simplifiedStack.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className={`mx-auto w-20 h-20 rounded-2xl flex items-center justify-center ${
                  theme === 'dark' 
                    ? 'bg-[#2ca3bd]/10 border-2 border-[#2ca3bd]/30'
                    : 'bg-blue-50 border-2 border-blue-200'
                }`}>
                  <Icon className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-blue-600'} size={36} />
                </div>
                <h3 className={`text-xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {item.title}
                </h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                }`}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className={`mt-16 p-8 rounded-3xl text-center ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/20'
            : 'bg-gradient-to-r from-blue-50 to-white border border-blue-200'
        }`}>
          <h3 className={`text-2xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Technologies Modernes
          </h3>
          <p className={`text-lg ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
          }`}>
            React • Python • Mobile Natif • Cloud Infrastructure • API RESTful
          </p>
        </div>
      </div>
    </section>
  );
}
