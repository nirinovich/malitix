import { forwardRef } from 'react';
import { useTheme } from '~/context/ThemeContext';
import { cn } from '~/utils/cn';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const { theme } = useTheme();
    const inputId = id || props.name;

    return (
      <div className={className}>
        <label
          htmlFor={inputId}
          className={cn(
            "block text-sm font-medium mb-2",
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          )}
        >
          {label} {props.required && '*'}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            "w-full px-4 py-3 rounded-lg sm:rounded-xl border transition-all text-sm sm:text-base outline-none resize-none",
            "focus:ring-2 focus:ring-[#2ca3bd] focus:border-transparent",
            theme === 'dark'
              ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
              : 'bg-[var(--bg-secondary)] border-gray-300 text-gray-900 placeholder-gray-400',
            error ? "border-red-500 focus:ring-red-500" : ""
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500 animate-in slide-in-from-top-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
