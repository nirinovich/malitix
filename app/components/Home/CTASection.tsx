import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import { CTA_TEXT, COMPANY_INFO } from '~/utils/constants';
import { useTheme } from '~/context/ThemeContext';
import { TextInput } from '~/components/Shared/Form/TextInput';
import { Textarea } from '~/components/Shared/Form/Textarea';
import { FormFeedback } from '~/components/Shared/Form/FormFeedback';
import { VALIDATION_PATTERNS } from '~/utils/validation';
import { submitContactForm } from '~/utils/forms/submitContact';

interface HomeFormData {
  name: string;
  email: string;
  website?: string;
  message: string;
}

export function CTASection() {
  const { theme } = useTheme();
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<HomeFormData>();

  const onSubmit = async (data: HomeFormData) => {
    try {
      await submitContactForm({ data, source: 'Main Page' });
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
    <section id="contact" className={`py-24 bg-gradient-to-b relative overflow-hidden ${
      theme === 'dark' 
        ? 'from-[#0a0e0d] to-[#060705]'
        : 'from-[var(--bg-primary)] to-[var(--bg-primary)]'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-0 w-full h-full bg-[size:50px_50px] ${
          theme === 'dark'
            ? 'bg-[linear-gradient(rgba(44,163,189,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(44,163,189,0.03)_1px,transparent_1px)]'
            : 'bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#2ca3bd]/10' : 'bg-[var(--bg-secondary)]'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]"></div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2ca3bd]">
                  Contactez-nous
                </span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]"></div>
              </div>
              <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Prêt à propulser votre entreprise ?
              </h2>
              <p className={`text-xl leading-relaxed ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-600'
              }`}>
                Discutons de votre projet et découvrons comment Malitix peut vous aider à atteindre vos objectifs technologiques.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                'Consultation gratuite de 30 minutes',
                'Réponse sous 24 heures',
                'Devis personnalisé et détaillé',
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-[#2ca3bd]/20 p-2 rounded-full">
                    <CheckCircle2 className="text-[#2ca3bd]" size={20} />
                  </div>
                  <span className={theme === 'dark' ? 'text-white/90' : 'text-gray-800'}>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className={`pt-8 border-t space-y-4 ${
              theme === 'dark' ? 'border-white/10' : 'border-gray-200'
            }`}>
              <div className={`flex items-center gap-3 ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-600'
              }`}>
                <Mail className="text-[#2ca3bd]" size={20} />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#2ca3bd] transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className={`flex items-center gap-3 ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-600'
              }`}>
                <Phone className="text-[#2ca3bd]" size={20} />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#2ca3bd] transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className={`flex items-center gap-3 ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-600'
              }`}>
                <MapPin className="text-[#2ca3bd]" size={20} />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="relative">
            <div className={`backdrop-blur-xl rounded-3xl p-8 shadow-2xl ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/10'
                : 'bg-gradient-to-br from-[var(--surface-primary)] to-[var(--bg-secondary)] border border-gray-200'
            }`}>
              {submissionStatus === 'success' ? (
                <div className="text-center py-12 space-y-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#2ca3bd]/20 rounded-full animate-in zoom-in">
                    <CheckCircle2 className="text-[#2ca3bd]" size={40} />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Message envoyé !
                    </h3>
                    <p className={theme === 'dark' ? 'text-white/70' : 'text-gray-600'}>
                      Nous reviendrons vers vous sous 24 heures.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  {submissionStatus === 'error' && <FormFeedback status="error" />}
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <TextInput
                      label="Nom complet"
                      placeholder="Jean Dupont"
                      error={errors.name?.message}
                      {...register('name', { required: 'Le nom est requis' })}
                      required
                    />

                    <TextInput
                      label="Email professionnel"
                      type="email"
                      placeholder="jean@entreprise.fr"
                      error={errors.email?.message}
                      {...register('email', { 
                        required: 'L\'email est requis',
                        pattern: VALIDATION_PATTERNS.EMAIL
                      })}
                      required
                    />

                    <TextInput
                      label="Site web"
                      placeholder="https://votre-site.com"
                      error={errors.website?.message}
                      {...register('website')}
                    />

                    <Textarea
                      label="Parlez-nous de votre projet"
                      placeholder="Décrivez votre projet, vos besoins et vos objectifs..."
                      rows={4}
                      error={errors.message?.message}
                      {...register('message', { required: 'Le message est requis' })}
                      required
                    />

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#2ca3bd] hover:bg-[#248fa5] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-[#2ca3bd]/30 hover:shadow-[#2ca3bd]/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
                    >
                      {isSubmitting ? 'Envoi en cours...' : CTA_TEXT.primary}
                      <Send size={20} className={isSubmitting ? 'animate-pulse' : ''} />
                    </button>

                    <p className={`text-sm text-center ${
                      theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                    }`}>
                      En envoyant ce formulaire, vous acceptez notre politique de confidentialité
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
