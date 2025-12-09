import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

interface CTAFormData {
  email: string;
  name: string;
  phone: string;
}

interface FinalCTAProps {}

const FinalCTA: React.FC<FinalCTAProps> = React.memo(() => {
  const [formData, setFormData] = useState<CTAFormData>({
    email: '',
    name: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Add form submission logic here
    setFormData({ email: '', name: '', phone: '' });
  };

  return (
    <section className="py-24 bg-[var(--bg-primary)]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Prêt à démarrer ?
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Réservez votre audit gratuit de 30 minutes
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#2ca3bd]/20 to-[#1e7a8f]/20 border-2 border-[#2ca3bd] rounded-2xl p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="votre@email.com"
              required
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]"
            />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              required
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Votre numéro de téléphone"
              required
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]"
            />
            <button type="submit" className="w-full px-8 py-4 bg-[#2ca3bd] hover:bg-[#1e7a8f] text-white font-bold rounded-lg transition-all">
              Faire auditer mon projet
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-[var(--text-secondary)]">
          ✓ Pas de spam • ✓ Audit gratuit • ✓ Sans engagement
        </p>

        <div className="mt-12 pt-8 border-t border-[var(--border-primary)]">
          <p className="text-center text-[var(--text-secondary)] mb-6">Ou contactez-nous directement :</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:contact@malitix.com" className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg hover:border-[#2ca3bd] transition-all">
              <Mail size={20} className="text-[#2ca3bd]" />
              <span className="text-[var(--text-primary)] font-semibold">Email</span>
            </a>
            <a href="tel:+33123456789" className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg hover:border-[#2ca3bd] transition-all">
              <Phone size={20} className="text-[#2ca3bd]" />
              <span className="text-[var(--text-primary)] font-semibold">Téléphone</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

FinalCTA.displayName = 'FinalCTA';

export default FinalCTA;
