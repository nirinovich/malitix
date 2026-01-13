import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, Mail, Phone, User } from 'lucide-react';
import { COMPANY_INFO } from '~/utils/constants';
import { useTheme } from '~/context/ThemeContext';
import { TextInput } from '~/components/Shared/Form/TextInput';
import { Textarea } from '~/components/Shared/Form/Textarea';
import { FormFeedback } from '~/components/Shared/Form/FormFeedback';
import { VALIDATION_PATTERNS } from '~/utils/validation';
import { submitContactForm } from '~/utils/forms/submitContact';

interface CTAFormData {
  email: string;
  name: string;
  phone?: string;
  message: string;
}

const FinalCTA: React.FC = React.memo(() => {
  const { theme } = useTheme();
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<CTAFormData>();

  const onSubmit = async (data: CTAFormData) => {
    try {
      await submitContactForm({ data, source: 'LP - Mobile App' });
      setSubmissionStatus('success');
      reset();

      setTimeout(() => {
        setSubmissionStatus('idle');
      }, 3000);
    } catch (err) {
      console.error(err);
      setSubmissionStatus('error');
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[var(--bg-primary)] relative" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#2ca3bd] text-white text-xs sm:text-sm font-bold mb-3 sm:mb-4">
            🚀 Audit Express — 30 min (offert)
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4 px-2">
            Prêt à démarrer ? 💪
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] px-2">
            Réservez votre audit gratuit de 30 minutes et obtenez un plan d'attaque clair
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#2ca3bd]/12 to-[#1e7a8f]/12 border border-[#2ca3bd]/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
          {submissionStatus === 'success' ? (
            <div className="text-center py-8 sm:py-10 space-y-3 sm:space-y-4 animate-in zoom-in">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-[#2ca3bd]/15 rounded-full">
                <CheckCircle2 className="text-[#2ca3bd]" size={32} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2">Message envoyé !</h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)]">Nous revenons vers vous sous 24h.</p>
              </div>
            </div>
          ) : (
            <>
              {submissionStatus === 'error' && <FormFeedback status="error" />}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextInput
                     label=""
                     placeholder="Votre nom"
                     icon={<User size={18} />}
                     error={errors.name?.message}
                     {...register('name', { required: 'Le nom est requis' })}
                     required
                  />
                  
                  <TextInput
                    label=""
                    type="email"
                    placeholder="Votre email"
                    icon={<Mail size={18} />}
                    error={errors.email?.message}
                    {...register('email', { 
                      required: 'L\'email est requis',
                      pattern: VALIDATION_PATTERNS.EMAIL
                    })}
                    required
                  />
                </div>

                <TextInput
                  label=""
                  type="tel"
                  placeholder="Téléphone (optionnel)"
                  icon={<Phone size={18} />}
                  error={errors.phone?.message}
                  {...register('phone', {
                    pattern: VALIDATION_PATTERNS.PHONE
                  })}
                />

                <Textarea
                  label=""
                  placeholder="Parlez-nous de votre projet..."
                  rows={4}
                  error={errors.message?.message}
                  {...register('message', { required: 'Le message est requis' })}
                  required
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2ca3bd] hover:bg-[#1e7a8f] disabled:bg-[#2ca3bd]/50 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#2ca3bd]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Demander mon audit gratuit</span>
                      <CheckCircle2 size={20} />
                    </>
                  )}
                </button>
                
                <p className="text-xs text-center text-[var(--text-muted)] mt-4">
                  En cliquant, vous acceptez d'être recontacté pour votre projet. Vos données restent confidentielles.
                </p>
              </form>
            </>
          )}
        </div>

        {/* Contact direct */}
        <div className="mt-8 sm:mt-12 text-center space-y-2">
          <p className="text-[var(--text-secondary)] text-sm sm:text-base">Vous préférez nous appeler ?</p>
          <a href={`tel:${COMPANY_INFO.phone}`} className="inline-block text-lg sm:text-xl font-bold text-[var(--text-primary)] hover:text-[#2ca3bd] transition-colors">
            {COMPANY_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
});

FinalCTA.displayName = 'FinalCTA';

export default FinalCTA;
