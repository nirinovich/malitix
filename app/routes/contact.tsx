import { useState } from 'react';
import type { Route } from './+types/contact';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle2, Mail, Phone, MapPin, Building2, Clock, Globe } from 'lucide-react';
import { COMPANY_INFO } from '~/utils/constants';
import { TextInput } from '~/components/Shared/Form/TextInput';
import { Textarea } from '~/components/Shared/Form/Textarea';
import { FormFeedback } from '~/components/Shared/Form/FormFeedback';
import { VALIDATION_PATTERNS } from '~/utils/validation';
import { submitContactForm } from '~/utils/forms/submitContact';
import { Layout } from '~/components/Shared/Layout';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Consultation Gratuite | Malitix" },
    { name: "description", content: "Prenez contact avec Malitix pour discuter de votre projet de développement web, mobile, ou de refonte SI." },
  ];
}

interface ContactFormData {
  name: string;
  email: string;
  website?: string;
  message: string;
}

export default function Contact() {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      await submitContactForm({ data, source: 'Contact Page' });
      setSubmissionStatus('success');
      reset();

      setTimeout(() => {
        setSubmissionStatus('idle');
      }, 5000);
    } catch (err) {
      console.error(err);
      setSubmissionStatus('error');
    }
  };

  return (
    <Layout>
      <div className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] relative overflow-hidden">
        {/* Abstract Background Decorators */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] bg-[#2ca3bd]/10 pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] bg-[var(--cta-orb-bg)] pointer-events-none" />
        <div className="absolute inset-0 cta-grid-pattern opacity-30 pointer-events-none"></div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-0">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-center">
            
            {/* Left Side - Presentation */}
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]"></div>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
                    Consultation Gratuite
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black leading-tight text-[var(--text-primary)]">
                  Discutons de vos <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ca3bd] to-[#51cede]">
                    futurs succès
                  </span>
                </h1>
                <p className="text-lg sm:text-xl leading-relaxed text-[var(--text-secondary)] max-w-2xl">
                  Qu'il s'agisse d'un nouveau projet, d'une refonte complète ou du renfort de votre équipe technique, nos experts vous accompagnent à chaque étape.
                </p>
              </div>

              {/* Info grid */}
              <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-[var(--border-primary)]">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#2ca3bd]/10 p-3 rounded-2xl">
                      <Mail className="text-[#2ca3bd]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Email</h3>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-[var(--text-primary)] font-medium hover:text-[#2ca3bd] transition-colors">{COMPANY_INFO.email}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#2ca3bd]/10 p-3 rounded-2xl">
                      <Phone className="text-[#2ca3bd]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Téléphone</h3>
                      <a href={`tel:${COMPANY_INFO.phone}`} className="text-[var(--text-primary)] font-medium hover:text-[#2ca3bd] transition-colors">{COMPANY_INFO.phone}</a>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#2ca3bd]/10 p-3 rounded-2xl">
                      <Building2 className="text-[#2ca3bd]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Bureau</h3>
                      <p className="text-[var(--text-primary)] font-medium">{COMPANY_INFO.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#2ca3bd]/10 p-3 rounded-2xl">
                      <Clock className="text-[#2ca3bd]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">Disponibilité</h3>
                      <p className="text-[var(--text-primary)] font-medium">Lundi - Vendredi, 9h-18h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form Card */}
            <div className="relative">
              {/* Card Decoration */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#2ca3bd]/50 to-transparent rounded-[2rem] blur opacity-30 pointer-events-none"></div>
              
              <div className="relative bg-[var(--surface-primary)] backdrop-blur-xl border border-[var(--border-primary)] rounded-[2rem] p-8 sm:p-10 shadow-2xl">
                {submissionStatus === 'success' ? (
                  <div className="text-center py-16 space-y-6 animation-fade-in-up">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-[#2ca3bd]/10 rounded-full mb-4 mx-auto animate-bounce-soft">
                      <CheckCircle2 className="text-[#2ca3bd]" size={48} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black mb-3 text-[var(--text-primary)]">
                        Demande reçue !
                      </h3>
                      <p className="text-[var(--text-secondary)] text-lg max-w-sm mx-auto leading-relaxed">
                        Merci pour votre message. Un expert technique reviendra vers vous sous 24 heures pour planifier notre appel.
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Envoyez-nous un message</h2>
                      <p className="text-[var(--text-secondary)] text-sm">Les champs marqués d'un astérisque (*) sont requis.</p>
                    </div>

                    {submissionStatus === 'error' && <div className="mb-6"><FormFeedback status="error" /></div>}
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <TextInput
                          label="Nom complet *"
                          placeholder="Jean Dupont"
                          error={errors.name?.message}
                          {...register('name', { required: 'Le nom est requis' })}
                          className="!bg-[var(--bg-primary)]"
                        />

                        <TextInput
                          label="Email professionnel *"
                          type="email"
                          placeholder="jean@entreprise.fr"
                          error={errors.email?.message}
                          {...register('email', { 
                            required: 'L\'email est requis',
                            pattern: VALIDATION_PATTERNS.EMAIL
                          })}
                          className="!bg-[var(--bg-primary)]"
                        />
                      </div>

                      <TextInput
                        label="Site web / URL de l'entreprise"
                        placeholder="https://votre-site.com"
                        error={errors.website?.message}
                        icon={<Globe size={18} className="text-[var(--text-muted)]" />}
                        {...register('website')}
                        className="!bg-[var(--bg-primary)]"
                      />

                      <Textarea
                        label="Parlez-nous de votre projet *"
                        placeholder="Décrivez votre contexte, vos enjeux métier, et les technologies ciblées..."
                        rows={5}
                        error={errors.message?.message}
                        {...register('message', { required: 'Le message est requis' })}
                        className="!bg-[var(--bg-primary)]"
                      />

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#2ca3bd] to-[#36bccf] hover:from-[#248fa5] hover:to-[#2ca3bd] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_10px_30px_-10px_rgba(44,163,189,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(44,163,189,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 mt-4 cursor-pointer"
                      >
                        {isSubmitting ? 'Envoi en cours...' : 'Planifier ma consultation'}
                        <Send size={20} className={isSubmitting ? 'animate-pulse translate-x-1' : 'group-hover:translate-x-1 transition-transform'} />
                      </button>

                      <p className="text-xs text-center text-[var(--text-muted)] mt-4">
                        Vos informations sont sécurisées et ne seront jamais partagées.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
