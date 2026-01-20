import { forwardRef } from 'react';
import { cn } from '~/utils/cn';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className={className}>
        <label
          htmlFor={inputId}
          className={cn(
            "block text-sm font-medium mb-2",
            'text-[var(--text-primary)]'
          )}
        >
          {label} {props.required && '*'}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            "w-full px-4 py-3 rounded-lg sm:rounded-xl border transition-all text-sm sm:text-base outline-none resize-none",
            "focus:ring-2 focus:ring-[var(--form-input-focus-ring)] focus:border-[var(--form-input-focus-border)]",
            'bg-[var(--form-input-bg)] border-[var(--form-input-border)] text-[var(--form-input-text)] placeholder-[var(--form-input-placeholder)]',
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
