import { useState } from 'react';
import { AlertTriangle, TrendingDown, Clock, Target, Code2, Laptop, Database, Sparkles, Server, Palette, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import PowerButton from '../components/PowerButton';
import LogoCarousel from '../components/LogoCarousel';
import TestimonialSection from '../components/TestimonialSection';
import PricingGrid from '../components/PricingGrid';

const techStack = [
  { name: 'React', icon: Code2 },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Node.js', icon: Server },
  { name: 'PHP', icon: Code2 },
  { name: 'Symfony', icon: Shield },
  { name: 'Laravel', icon: Sparkles },
  { name: 'Vue.js', icon: Palette },
  { name: 'Python', icon: Database },
  { name: 'Next.js', icon: Laptop },
  { name: 'PostgreSQL', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'Docker', icon: Server },
];

export default function SprintCommando() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://arkedown.app.n8n.cloud/webhook/malitix', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Sprint Commando Page'
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du formulaire');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      }, 5000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-sprint');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className={`relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br ${
        theme === 'dark' 
          ? 'from-[#060705] via-[#060705] to-[#0a0e0d]'
          : 'from-white via-gray-50 to-gray-100'
      }`}>
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
            theme === 'dark' ? 'bg-[#2ca3bd]/20' : 'bg-blue-400/30'
          }`}></div>
          <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${
            theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-300/20'
          }`} style={{ animationDelay: '2s' }}></div>
          
          {/* Grid pattern */}
          <div className={`absolute inset-0 bg-[size:50px_50px] ${
            theme === 'dark' 
              ? 'bg-[linear-gradient(rgba(44,163,189,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(44,163,189,0.03)_1px,transparent_1px)]'
              : 'bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]'
          }`}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center max-w-5xl mx-auto space-y-8">
            {/* Badge */}
            <div className="inline-block bg-[#2ca3bd]/10 border border-[#2ca3bd]/30 rounded-full px-6 py-2 text-sm text-[#2ca3bd] font-medium mb-4">
              🚀 Sprint Commando - Déblocage Garanti en 14 Jours
            </div>

            {/* Headline */}
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Vos projets IT <span className="text-[#2ca3bd]">en retard</span> ?
            </h1>
            
            <p className={`text-3xl sm:text-4xl font-semibold ${
              theme === 'dark' ? 'text-white/90' : 'text-gray-800'
            }`}>
              On redresse votre roadmap <br className="hidden sm:block" />
              en <span className="text-[#2ca3bd]">2 semaines</span>.
            </p>

            <p className={`text-2xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-[#2ca3bd] text-white px-4 py-2 rounded-lg">
                Garanti ou gratuit.
              </span>
            </p>

            {/* CTA with Power Button */}
            <div className="pt-12 pb-8">
              <PowerButton onClick={scrollToContact} text="Débloquer mon projet" />
            </div>

            <p className={`text-sm ${
              theme === 'dark' ? 'text-white/50' : 'text-gray-500'
            }`}>
              ⚡ Intervention rapide • 🎯 Résultats garantis • 🛡️ Zéro risque
            </p>
          </div>
        </div>
      </section>

      {/* Logo Carousel / Stats */}
      <LogoCarousel />

      {/* Section 1 - The Problem */}
      <section className={`py-24 relative overflow-hidden ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-[#0a0e0d] to-[#060705]'
          : 'bg-gradient-to-b from-gray-50 to-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Problem indicators */}
            <div className="space-y-6">
              <div className={`backdrop-blur-xl rounded-3xl p-8 border transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-red-500/10 border-red-500/30'
                  : 'bg-red-50 border-red-200'
              }`}>
                <div className="flex items-start gap-4">
                  <AlertTriangle className="text-red-500 flex-shrink-0" size={32} />
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Chaque jour de retard coûte cher
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-white/70' : 'text-gray-700'}`}>
                      Argent perdu, opportunités manquées, concurrence qui avance
                    </p>
                  </div>
                </div>
              </div>

              <div className={`backdrop-blur-xl rounded-3xl p-8 border transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-orange-500/10 border-orange-500/30'
                  : 'bg-orange-50 border-orange-200'
              }`}>
                <div className="flex items-start gap-4">
                  <TrendingDown className="text-orange-500 flex-shrink-0" size={32} />
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Équipes débordées
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-white/70' : 'text-gray-700'}`}>
                      Maintenance, bugs critiques, manque de bande passante
                    </p>
                  </div>
                </div>
              </div>

              <div className={`backdrop-blur-xl rounded-3xl p-8 border transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-yellow-500/10 border-yellow-500/30'
                  : 'bg-yellow-50 border-yellow-200'
              }`}>
                <div className="flex items-start gap-4">
                  <Clock className="text-yellow-500 flex-shrink-0" size={32} />
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      L'innovation attend... encore
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-white/70' : 'text-gray-700'}`}>
                      Les budgets s'étirent, la pression monte
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <h2 className={`text-4xl sm:text-5xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Comment briser ce cycle sans tout faire exploser ? 🤔
              </h2>
              
              <p className={`text-xl leading-relaxed ${
                theme === 'dark' ? 'text-white/80' : 'text-gray-700'
              }`}>
                Vos équipes internes, aussi talentueuses soient-elles, sont peut-être débordées par la maintenance, 
                bloquées sur des bugs critiques ou manquent simplement de bande passante pour vraiment accélérer.
              </p>

              <p className={`text-xl leading-relaxed ${
                theme === 'dark' ? 'text-white/80' : 'text-gray-700'
              }`}>
                Vous savez qu'il faut livrer plus vite, mais comment ?
              </p>

              {/* Tech Stack Bento */}
              <div className={`backdrop-blur-xl rounded-3xl p-8 border ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-[#2ca3bd]/10 to-[#2ca3bd]/5 border-[#2ca3bd]/20'
                  : 'bg-gradient-to-br from-white to-blue-50 border-blue-200'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="text-[#2ca3bd]" size={24} />
                  <h3 className={`text-lg font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Un vivier de 650+ développeurs experts
                  </h3>
                </div>
                <p className={`mb-4 text-sm ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                }`}>
                  Maîtrisant les technologies modernes pour renforcer vos rangs :
                </p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={index}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium ${
                          theme === 'dark'
                            ? 'bg-white/10 text-white/80'
                            : 'bg-white text-gray-700 border border-gray-200'
                        }`}
                      >
                        <Icon size={16} className="text-[#2ca3bd]" />
                        {tech.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - The Solution */}
      <section className={`py-24 relative overflow-hidden ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-[#060705] to-[#0a0e0d]'
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}>
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-400/20'
          }`}></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-block bg-[#2ca3bd]/10 border border-[#2ca3bd]/30 rounded-full px-6 py-3 text-sm text-[#2ca3bd] font-medium">
              La Solution Radicale
            </div>

            {/* Title */}
            <h2 className={`text-5xl sm:text-6xl lg:text-7xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Notre <span className="text-[#2ca3bd]">"Sprint Commando"</span> 🚀
            </h2>

            {/* Subtitle */}
            <p className={`text-2xl font-semibold ${
              theme === 'dark' ? 'text-white/90' : 'text-gray-800'
            }`}>
              Débloquez immédiatement vos projets les plus critiques
            </p>

            {/* Description */}
            <div className={`backdrop-blur-xl rounded-3xl p-8 md:p-12 border ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10'
                : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
            }`}>
              <p className={`text-xl leading-relaxed mb-6 ${
                theme === 'dark' ? 'text-white/80' : 'text-gray-700'
              }`}>
                C'est notre méthode unique pour débloquer immédiatement vos projets les plus critiques. 
                On ne vient pas "essayer", <span className="font-bold text-[#2ca3bd]">on vient livrer</span>.
              </p>

              <div className={`grid md:grid-cols-3 gap-6 p-6 rounded-2xl ${
                theme === 'dark' ? 'bg-white/5' : 'bg-gray-100'
              }`}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#2ca3bd] mb-2">14</div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                    Jours chrono
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#2ca3bd] mb-2">100%</div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                    Dédié à vous
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#2ca3bd] mb-2">0€</div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                    Si on ne livre pas
                  </div>
                </div>
              </div>

              <p className={`text-xl leading-relaxed mt-6 ${
                theme === 'dark' ? 'text-white/80' : 'text-gray-700'
              }`}>
                Nous prenons en charge une <span className="font-bold">fonctionnalité clé</span>, 
                la <span className="font-bold">résolution d'un bug bloquant</span>, 
                l'<span className="font-bold">intégration d'une API</span>... 
                et nous vous mettons le résultat entre les mains.
              </p>

              <div className={`mt-8 p-6 rounded-xl border-l-4 border-[#2ca3bd] ${
                theme === 'dark' ? 'bg-[#2ca3bd]/5' : 'bg-blue-50'
              }`}>
                <p className={`text-lg font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Pas de blabla, juste du code qui fonctionne et un projet remis sur les rails.
                </p>
                <p className={`text-base mt-2 ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-700'
                }`}>
                  C'est direct, intense, et ça donne des résultats tangibles, vite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Testimonials */}
      <TestimonialSection />

      {/* Section 4 - Pricing Grid */}
      <PricingGrid />

      {/* Section 5 - Contact Form */}
      <section 
        id="contact-sprint"
        className={`py-24 relative overflow-hidden ${
          theme === 'dark' 
            ? 'bg-gradient-to-b from-[#0a0e0d] to-[#060705]'
            : 'bg-gradient-to-b from-gray-50 to-white'
        }`}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute inset-0 bg-[size:50px_50px] ${
            theme === 'dark'
              ? 'bg-[linear-gradient(rgba(44,163,189,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(44,163,189,0.03)_1px,transparent_1px)]'
              : 'bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]'
          }`}></div>
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-blue-400/20'
          }`}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-block bg-[#2ca3bd]/10 border border-[#2ca3bd]/30 rounded-full px-4 py-2 text-sm text-[#2ca3bd] font-medium mb-4">
              Passez à l'action
            </div>
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Prêt à débloquer votre projet ?
            </h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-white/70' : 'text-gray-600'
            }`}>
              Parlez-nous de votre situation. Réponse sous 24h.
            </p>
          </div>

          {/* Form */}
          <div className={`backdrop-blur-xl rounded-3xl p-8 md:p-12 border ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10'
              : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
          }`}>
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Message envoyé ! 🎉
                </h3>
                <p className={`text-lg ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                }`}>
                  Nous vous recontactons sous 24h pour démarrer votre Sprint Commando.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#2ca3bd] focus:border-transparent transition-all ${
                        theme === 'dark'
                          ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                      }`}
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#2ca3bd] focus:border-transparent transition-all ${
                        theme === 'dark'
                          ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                      }`}
                      placeholder="jean@entreprise.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Entreprise *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#2ca3bd] focus:border-transparent transition-all ${
                        theme === 'dark'
                          ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                      }`}
                      placeholder="Votre entreprise"
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#2ca3bd] focus:border-transparent transition-all ${
                        theme === 'dark'
                          ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                      }`}
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Décrivez votre situation *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#2ca3bd] focus:border-transparent transition-all resize-none ${
                      theme === 'dark'
                        ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                    placeholder="Parlez-nous de votre projet bloqué, du bug critique, ou de la feature urgente à livrer..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    isLoading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[#2ca3bd] hover:bg-[#2ca3bd]/90 shadow-lg hover:shadow-xl hover:shadow-[#2ca3bd]/30'
                  } text-white`}
                >
                  {isLoading ? 'Envoi en cours...' : 'Lancer mon Sprint Commando 🚀'}
                </button>

                <p className={`text-center text-sm ${
                  theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                }`}>
                  🔒 Vos données sont sécurisées • ⚡ Réponse sous 24h garantie
                </p>
              </form>
            )}
          </div>

          {/* Trust elements */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            {[
              { label: 'Consultation gratuite', value: '30min' },
              { label: 'Réponse garantie', value: '24h' },
              { label: 'Satisfaction client', value: '100%' },
            ].map((item, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-[#2ca3bd] mb-1">{item.value}</div>
                <div className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
