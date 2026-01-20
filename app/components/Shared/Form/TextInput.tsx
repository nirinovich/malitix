import { forwardRef } from 'react';
import { cn } from '~/utils/cn';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, icon, className, id, ...props }, ref) => {
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
        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2ca3bd]">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "w-full rounded-lg sm:rounded-xl border transition-all text-sm sm:text-base outline-none",
              "focus:ring-2 focus:ring-[#2ca3bd] focus:border-transparent",
              icon ? "pl-12 pr-4" : "px-4",
              "py-2.5 sm:py-3",
              'bg-[var(--bg-secondary)] border-[var(--border-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)]',
              error ? "border-red-500 focus:ring-red-500" : ""
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-500 animate-in slide-in-from-top-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
