import { useState } from 'react';
import { ArrowRight, Mail, User, Phone, Building2, CheckCircle } from 'lucide-react';

export default function BIAdvisorContact() {
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
      // Google Ads conversion tracking
      if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
        (window as any).gtag_report_conversion(undefined);
      }

      const response = await fetch('https://arkedown.app.n8n.cloud/webhook/malitix', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'LP - BI Advisor',
        }),
      });

      if (!response.ok) throw new Error('Erreur lors de l\'envoi du formulaire');

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

  return (
    <section
      id="bi-advisor-contact"
      className="relative py-24 px-6 sm:px-12 bg-[#0B0D17] text-white border-t-8 border-[#2ca3bd]"
    >
      {/* Subtle background noise/grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M0%200h20v20H0V0zm20%2020h20v20H20V20z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
      
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/3 left-1/3 w-[700px] h-[700px] rounded-full blur-[120px] bg-[#2ca3bd]/10"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block bg-[#2ca3bd]/20 text-[#2ca3bd] px-6 py-2 rounded-full font-black uppercase tracking-widest text-sm mb-6 border border-[#2ca3bd]/50">
            DÉMO & TEST GRATUIT
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase">
            PRÊT À DIALOGUER <span className="text-[#2ca3bd]">AVEC VOTRE ENTREPRISE ?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium">
            Lancez un Proof of Concept sur vos données historiques. Résultats en moins de 48h.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Form */}
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-12 rounded-3xl bg-[#0a0e0d] border-4 border-[#1A1C25] shadow-2xl relative"
          >
            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-bold mb-3 text-white uppercase tracking-widest">
                  Nom *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2ca3bd]" size={24} />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jean Dupont"
                    className="w-full pl-14 pr-4 py-4 rounded-2xl border-2 transition-all focus:outline-none focus:border-[#2ca3bd] bg-[#111] border-[#333] text-white placeholder-gray-500 font-medium text-lg"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold mb-3 text-white uppercase tracking-widest">
                  E-mail *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2ca3bd]" size={24} />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jean.dupont@entreprise.fr"
                    className="w-full pl-14 pr-4 py-4 rounded-2xl border-2 transition-all focus:outline-none focus:border-[#2ca3bd] bg-[#111] border-[#333] text-white placeholder-gray-500 font-medium text-lg"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-bold mb-3 text-white uppercase tracking-widest">
                  Entreprise *
                </label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2ca3bd]" size={24} />
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Nom de votre entreprise"
                    className="w-full pl-14 pr-4 py-4 rounded-2xl border-2 transition-all focus:outline-none focus:border-[#2ca3bd] bg-[#111] border-[#333] text-white placeholder-gray-500 font-medium text-lg"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-bold mb-3 text-white uppercase tracking-widest">
                  Téléphone
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2ca3bd]" size={24} />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+33 6 12 34 56 78"
                    className="w-full pl-14 pr-4 py-4 rounded-2xl border-2 transition-all focus:outline-none focus:border-[#2ca3bd] bg-[#111] border-[#333] text-white placeholder-gray-500 font-medium text-lg"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold mb-3 text-white uppercase tracking-widest">
                  Votre contexte (optionnel)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  placeholder="Quel ERP utilisez-vous ? Quelles sont vos problématiques data actuelles ?"
                  className="w-full px-5 py-4 rounded-2xl border-2 transition-all focus:outline-none focus:border-[#2ca3bd] resize-none bg-[#111] border-[#333] text-white placeholder-gray-500 font-medium text-lg"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading || isSubmitted}
                className={`group cursor-pointer w-full mt-4 bg-[#2ca3bd] hover:bg-[#248fa5] text-white px-8 py-6 rounded-2xl font-black text-xl tracking-wide uppercase shadow-[0_0_40px_rgba(44,163,189,0.3)] hover:shadow-[0_0_60px_rgba(44,163,189,0.5)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 border border-white/20 ${
                  isLoading || isSubmitted ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading
                  ? 'ENVOI EN COURS...'
                  : isSubmitted
                  ? '✓ DEMANDE ENVOYÉE !'
                  : 'RÉSERVER MA DÉMO GRATUITE'}
                {!isLoading && !isSubmitted && (
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
                )}
              </button>

              <p className="text-xs text-center text-gray-500 font-bold uppercase tracking-widest mt-4">
                En soumettant ce formulaire, vous acceptez d'être recontacté par Malitix.
              </p>
            </div>
          </form>

          {/* Right — What you get */}
          <div className="space-y-6 lg:self-center">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#2ca3bd]/5 relative border border-[#2ca3bd]/30">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#2ca3bd]" />
              <h3 className="text-3xl font-black mb-10 text-white uppercase tracking-widest">
                CE QUE VOUS OBTENEZ
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: '1) Une démo live sur vos données',
                    desc: 'Connecté à votre ERP, en conditions réelles, pas sur des données fictives.',
                  },
                  {
                    title: '2) Une session de questions/réponses dédiée',
                    desc: "Avec un expert Malitix pour calibrer BI Advisor à vos cas d'usage métier.",
                  },
                  {
                    title: '3) Un POC complet sous 48h',
                    desc: 'Prévisions, alertes et chatbot BI configurés sur vos données historiques.',
                  },
                  {
                    title: '4) Un rapport d\'impact ROI personnalisé',
                    desc: 'Estimations chiffrées du gain de temps et de marge pour votre activité.',
                  },
                  {
                    title: '5) Zéro engagement',
                    desc: "Aucun contrat. Décidez d'avancer uniquement si les résultats vous convainquent.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <CheckCircle className="text-[#2ca3bd] flex-shrink-0" size={24} />
                    <div>
                      <div className="font-bold text-lg mb-1 text-white">
                        {item.title}
                      </div>
                      <p className="text-gray-400 font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl text-center border-2 border-gray-800 bg-[#1A1C25]">
              <p className="text-gray-400 font-bold tracking-widest uppercase text-sm">
                "NOUS NE LANÇONS QUE 5 POC PAR MOIS POUR GARANTIR UN ACCOMPAGNEMENT PREMIUM."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
