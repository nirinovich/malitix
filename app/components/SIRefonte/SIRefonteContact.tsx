import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRight, Mail, Globe, User, Phone, CheckCircle } from 'lucide-react';
import { useTheme } from '~/context/ThemeContext';
import { TextInput } from '~/components/Shared/Form/TextInput';
import { Textarea } from '~/components/Shared/Form/Textarea';
import { FormFeedback } from '~/components/Shared/Form/FormFeedback';
import { VALIDATION_PATTERNS } from '~/utils/validation';
import { submitContactForm } from '~/utils/forms/submitContact';

interface SIRefonteFormData {
  name: string;
  email: string;
  website: string;
  phone?: string;
  message?: string;
}

export default function SIRefonteContact() {
  const { theme } = useTheme();
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<SIRefonteFormData>();

  const onSubmit = async (data: SIRefonteFormData) => {
    try {
      await submitContactForm({ data, source: 'LP - SI Refonte' });
      setSubmissionStatus('success');
      reset();

      // Reset status after delay to show form again (Legacy behavior)
      setTimeout(() => {
        setSubmissionStatus('idle');
      }, 5000);

    } catch (err) {
      console.error(err);
      setSubmissionStatus('error');
    }
  };

  return (
    <section id="contact-sirefonte" className={`relative py-24 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#0a0e0d] to-[#0a0e0d]'
        : 'bg-[var(--bg-primary)]'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/5' : 'bg-[#2ca3bd]/10'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-[#2ca3bd] text-white text-sm font-bold mb-4">
            L'Audit Express — Diagnostic 8h (offert)
          </div>
          <h2 className={`text-4xl sm:text-5xl font-black mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Votre SI peut créer plus de valeur.
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
            La clé du diagnostic en 8h offert par Malitix.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Form */}
          <div>

            {/* Form Container */}
            <div className={`p-6 sm:p-8 rounded-3xl backdrop-blur-sm border-2 ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10'
                : 'bg-[var(--surface-primary)] border-gray-200 shadow-lg'
            }`}>
              {submissionStatus === 'success' ? (
                <FormFeedback status="success" message="Demande d'Audit Express envoyée avec succès !" />
              ) : (
                <>
                  {submissionStatus === 'error' && <FormFeedback status="error" />}
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name */}
                    <TextInput
                      label="Nom"
                      placeholder="Jean Dupont"
                      icon={<User size={20} />}
                      error={errors.name?.message}
                      {...register('name', { required: 'Le nom est requis' })}
                      required
                    />

                    {/* Email */}
                    <TextInput
                      label="E-mail"
                      type="email"
                      placeholder="jean.dupont@entreprise.fr"
                      icon={<Mail size={20} />}
                      error={errors.email?.message}
                      {...register('email', { 
                        required: 'L\'email est requis',
                        pattern: VALIDATION_PATTERNS.EMAIL
                      })}
                      required
                    />

                    {/* Website */}
                    <TextInput
                      label="Votre site web"
                      placeholder="https://votre-site.com"
                      icon={<Globe size={20} />}
                      error={errors.website?.message}
                      {...register('website', { required: 'Le site web est requis' })}
                      required
                    />

                    {/* Phone */}
                    <TextInput
                      label="Téléphone"
                      type="tel"
                      placeholder="+33 6 12 34 56 78"
                      icon={<Phone size={20} />}
                      error={errors.phone?.message}
                      {...register('phone', {
                        pattern: VALIDATION_PATTERNS.PHONE
                      })}
                    />

                    {/* Message */}
                    <Textarea
                      label="Message"
                      placeholder="Décrivez brièvement votre contexte SI..."
                      rows={4}
                      error={errors.message?.message}
                      {...register('message')}
                    />

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`group cursor-pointer w-full py-4 px-8 rounded-xl font-bold bg-gradient-to-r from-[#2ca3bd] to-[#248fa5] text-white transition-all hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Je demande mon Audit Express offert'}
                      {!isSubmitting && <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />}
                    </button>

                    <p className={`text-xs text-center ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
                      En soumettant ce formulaire, vous acceptez d'être recontacté par Malitix.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Right: Benefits/Promise */}
          <div className="space-y-6 lg:self-center">
            <div className={`p-6 sm:p-8 rounded-3xl backdrop-blur-sm border-2 ${
              theme === 'dark'
                ? 'bg-[#2ca3bd]/10 border-[#2ca3bd]/30'
                : 'bg-[#2ca3bd]/5 border-[#2ca3bd]/30 shadow-lg'
            }`}>
              <h3 className={`text-2xl font-black mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                L'Audit Express — Diagnostic 8h (offert)
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#2ca3bd] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className={`font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      1) Une vision claire de votre SI actuel
                    </div>
                    <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                      Cartographie infra / application / data / sécurité<br />
                      Détermination du niveau de maturité décisionnelle
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#2ca3bd] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className={`font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      2) Vos risques majeurs & leurs impacts
                    </div>
                    <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                      Cybersécurité, disponibilité, conformité<br />
                      Cartographie des risques à prioriser
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#2ca3bd] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className={`font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      3) Votre potentiel d'optimisation cloud
                    </div>
                    <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                      Analyse coûts + gigantesques économies (-20% -40%)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#2ca3bd] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className={`font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      4) Vos quick wins à ROI immédiat
                    </div>
                    <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                      Actions réalisables en 90 jours<br />
                      Gains de coûts, sécu, performance
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#2ca3bd] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className={`font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      5) Votre roadmap 90 jours
                    </div>
                    <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                      3 objectifs prioritaires<br />
                      Impacts, composante, budget indicatif
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
