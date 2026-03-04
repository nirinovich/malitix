import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { submitContactForm } from '~/utils/forms/submitContact';
import { VALIDATION_PATTERNS } from '~/utils/validation';

interface NewsletterFormData {
  email: string;
}

interface NewsletterCTAProps {
  variant?: 'inline' | 'compact';
}

export function NewsletterCTA({ variant = 'inline' }: NewsletterCTAProps) {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormData>();

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      await submitContactForm({ data, source: 'Blog Newsletter' });
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  /* ─── Success state ─── */
  if (status === 'success') {
    const successContent = (
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
          <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-sm font-medium text-[var(--text-primary)]">
          Inscription confirmée ! Vous recevrez nos prochains insights.
        </p>
      </div>
    );

    if (variant === 'compact') return successContent;

    return (
      <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center">
        {successContent}
      </div>
    );
  }

  /* ─── Compact variant (for sticky bar) ─── */
  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-3 w-full max-w-xl">
        <div className="relative flex-1">
          <input
            type="email"
            placeholder="votre@email.com"
            {...register('email', {
              required: "L'email est requis",
              pattern: VALIDATION_PATTERNS.EMAIL,
            })}
            className="w-full rounded-full bg-[var(--surface-primary)] border border-[var(--border-primary)] px-5 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[#2ca3bd]/50 focus:border-[#2ca3bd] transition-all"
          />
          {errors.email && (
            <p className="absolute -bottom-5 left-4 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="shrink-0 rounded-full bg-[#2ca3bd] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#2ca3bd]/25 hover:bg-[#248fa5] hover:shadow-[#2ca3bd]/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Envoi…' : "S'inscrire"}
        </button>
      </form>
    );
  }

  /* ─── Inline variant (full-width card) ─── */
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#2ca3bd]/20 bg-gradient-to-br from-[#2ca3bd]/10 via-transparent to-[#2ca3bd]/5 p-8 md:p-12">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#2ca3bd]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-[#2ca3bd]/5 blur-3xl" />

      <div className="relative flex flex-col items-center text-center gap-6 max-w-xl mx-auto">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2ca3bd]/30 bg-[#2ca3bd]/10 px-3 py-1 text-xs font-semibold text-[#2ca3bd]">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Newsletter
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
            Recevez nos insights chaque semaine
          </h3>
          <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
            Analyses, guides et retours terrain directement dans votre boîte mail. Pas de spam, uniquement de la valeur.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-md gap-3">
          <div className="relative flex-1">
            <input
              type="email"
              placeholder="votre@email.com"
              {...register('email', {
                required: "L'email est requis",
                pattern: VALIDATION_PATTERNS.EMAIL,
              })}
              className="w-full rounded-full bg-[var(--surface-primary)] border border-[var(--border-primary)] px-5 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[#2ca3bd]/50 focus:border-[#2ca3bd] transition-all"
            />
            {errors.email && (
              <p className="absolute -bottom-5 left-4 text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="shrink-0 rounded-full bg-[#2ca3bd] px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-[#2ca3bd]/30 hover:bg-[#248fa5] hover:shadow-[#2ca3bd]/50 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? 'Envoi…' : "S'inscrire"}
          </button>
        </form>
      </div>

      {status === 'error' && (
        <p className="mt-4 text-sm text-red-500 text-center">
          Une erreur est survenue. Veuillez réessayer.
        </p>
      )}
    </div>
  );
}
