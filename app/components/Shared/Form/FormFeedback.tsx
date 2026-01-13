import { useTheme } from '~/context/ThemeContext';
import { Check, X } from 'lucide-react';

interface FormFeedbackProps {
  status: 'success' | 'error' | 'idle';
  message?: string;
}

export function FormFeedback({ status, message }: FormFeedbackProps) {
  const { theme } = useTheme();

  if (status === 'idle') return null;

  if (status === 'success') {
    return (
      <div className="text-center py-8 sm:py-12 animate-in fade-in zoom-in duration-300">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-500/20 mb-4">
          <Check className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
        </div>
        <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Message envoyé ! 🎉
        </h3>
        <p className={`text-base sm:text-lg ${
          theme === 'dark' ? 'text-white/70' : 'text-gray-600'
        }`}>
          {message || "Nous vous recontactons sous 24h."}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-4 mb-6 flex gap-3 text-red-500 animate-in fade-in slide-in-from-top-1">
      <X size={20} className="flex-shrink-0 mt-0.5" />
      <p className="text-sm">{message || "Une erreur est survenue."}</p>
    </div>
  );
}
