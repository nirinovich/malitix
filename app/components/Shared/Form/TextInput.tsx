import { forwardRef } from 'react';
import { useTheme } from '~/context/ThemeContext';
import { cn } from '~/utils/cn';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, icon, className, id, ...props }, ref) => {
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
              theme === 'dark'
                ? 'bg-white/5 border-white/10 text-white placeholder-white/40'
                : 'bg-[var(--bg-secondary)] border-gray-300 text-gray-900 placeholder-gray-400',
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
