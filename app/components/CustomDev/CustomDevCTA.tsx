import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Clock, Rocket, CheckCircle2 } from 'lucide-react';
import { useTheme } from '~/context/ThemeContext';
import { TextInput } from '~/components/Shared/Form/TextInput';
import { Textarea } from '~/components/Shared/Form/Textarea';
import { FormFeedback } from '~/components/Shared/Form/FormFeedback';
import { VALIDATION_PATTERNS } from '~/utils/validation';
import { submitContactForm } from '~/utils/forms/submitContact';

interface CustomDevFormData {
  name: string;
  email: string;
  website?: string;
  message: string;
}

export default function CustomDevCTA() {
  const { theme } = useTheme();
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<CustomDevFormData>();

  const onSubmit = async (data: CustomDevFormData) => {
    try {
      await submitContactForm({ data, source: 'Développement sur mesure' });
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
    <section 
      id="contact-customdev"
      className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-[#0a0e0d] to-[#060705]'
          : 'bg-[var(--bg-primary)]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`rounded-3xl p-8 sm:p-12 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-[#2ca3bd]/10 to-[#2ca3bd]/5 border border-[#2ca3bd]/30'
            : 'bg-gradient-to-r from-[var(--surface-primary)] to-[var(--surface-primary)] border border-[#2ca3bd]/20'
        }`}>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${
                theme === 'dark'
                  ? 'bg-[#2ca3bd]/20 text-[#2ca3bd]'
                  : 'bg-[#2ca3bd]/15 text-[#2ca3bd]'
              }`}>
                <Clock size={16} />
                2 places restantes ce mois
              </div>

              <h2 className={`text-4xl sm:text-5xl font-black ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Votre Application en{' '}
                <span className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'}>
                  90 Jours
                </span>
              </h2>

              <ul className="space-y-3">
                {['Budget fixe garanti', 'Audit gratuit de 45 min', 'Réponse sous 24h'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className={theme === 'dark' ? 'text-[#2ca3bd]' : 'text-[#2ca3bd]'} size={20} />
                    <span className={`text-lg ${
                      theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                    }`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`rounded-2xl p-6 sm:p-8 backdrop-blur-xl border ${
              theme === 'dark' 
                ? 'bg-[#060705]/80 border-white/10'
                : 'bg-white/80 border-slate-200'
            }`}>
              {submissionStatus === 'success' ? (
                <div className="text-center py-12">
                   {/* We could use FormFeedback here, but preserving specific icon/style as requested by logic above */}
                   <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-500 mb-4 animate-in zoom-in">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Message envoyé !</h3>
                  <p className={theme === 'dark' ? 'text-white/60' : 'text-gray-600'}>
                    Nous revenons vers vous sous 24h.
                  </p>
                </div>
              ) : (
                <>
                  {submissionStatus === 'error' && <FormFeedback status="error" />}
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <TextInput
                        label="Nom"
                        placeholder="Jean Dupont"
                        error={errors.name?.message}
                        {...register('name', { required: 'Le nom est requis' })}
                        required
                      />
                      <TextInput
                        label="Email"
                        placeholder="jean@entreprise.com"
                        type="email" 
                        error={errors.email?.message}
                        {...register('email', { 
                          required: 'L\'email est requis',
                          pattern: VALIDATION_PATTERNS.EMAIL
                        })}
                        required
                      />
                    </div>

                    <TextInput
                      label="Site web actuel (optionnel)"
                      placeholder="https://"
                      type="url"
                      error={errors.website?.message}
                      {...register('website')}
                    />

                    <Textarea
                      label="Projet"
                      placeholder="Décrivez votre besoin..."
                      rows={3}
                      error={errors.message?.message}
                      {...register('message', { required: 'Le message est requis' })}
                      required
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed ${
                        theme === 'dark'
                          ? 'bg-[#2ca3bd] hover:bg-[#1e7a8f] text-white shadow-lg shadow-[#2ca3bd]/25'
                          : 'bg-[#2ca3bd] hover:bg-[#1e7a8f] text-white shadow-lg shadow-[#2ca3bd]/25'
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <span>Réserver mon audit gratuit</span>
                          <Rocket size={20} />
                        </>
                      )}
                    </button>
                    <div className={`text-center text-xs ${
                      theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                    }`}>
                      Aucun engagement. Réponse sous 24h ouvrées.
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
