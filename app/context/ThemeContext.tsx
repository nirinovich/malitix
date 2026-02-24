import { createContext, useState, useLayoutEffect } from 'react';
import type { ReactNode } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  systemPreference: Theme;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Detects system color scheme preference using prefers-color-scheme media query
 * Falls back to 'light' if detection is not supported
 */
function getSystemPreference(): Theme {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const query = window.matchMedia('(prefers-color-scheme: dark)');
  return query.matches ? 'dark' : 'light';
}

/**
 * Gets the initial theme with priority order:
 * 1. localStorage (user preference)
 * 2. System preference (prefers-color-scheme)
 * 3. Default to 'light'
 *
 * This function is called synchronously to prevent flash of wrong theme.
 */
function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light';
  }

  // Check localStorage first (highest priority)
  const stored = localStorage.getItem('theme') as Theme | null;
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }

  // Fall back to system preference
  return getSystemPreference();
}

/**
 * Sets up a listener for system theme preference changes
 * Returns a cleanup function to remove the listener
 */
function listenToSystemPreference(callback: (theme: Theme) => void) {
  if (typeof window === 'undefined') {
    return () => { };
  }

  const query = window.matchMedia('(prefers-color-scheme: dark)');

  const handler = (e: MediaQueryListEvent) => {
    callback(e.matches ? 'dark' : 'light');
  };

  query.addEventListener('change', handler);
  return () => query.removeEventListener('change', handler);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const systemPreference = getSystemPreference();

  // Use useLayoutEffect to update DOM before rendering
  // This prevents flash of wrong theme color
  useLayoutEffect(() => {
    localStorage.setItem('theme', theme);
    const html = document.documentElement;
    const opposite = theme === 'light' ? 'dark' : 'light';

    // Only mutate DOM if needed — avoids blocking main thread during hydration
    if (!html.classList.contains(theme) || html.classList.contains(opposite)) {
      html.classList.remove(opposite);
      if (!html.classList.contains(theme)) {
        html.classList.add(theme);
      }
    }

    // Enable smooth transitions for theme toggle only after first paint
    if (!html.classList.contains('theme-ready')) {
      requestAnimationFrame(() => html.classList.add('theme-ready'));
    }
  }, [theme]);

  // Listen for system preference changes and update localStorage-less component
  useLayoutEffect(() => {
    // Only listen if user hasn't explicitly set a preference in localStorage
    const userPreference = localStorage.getItem('theme');
    if (!userPreference) {
      return listenToSystemPreference((newSystemPreference) => {
        setTheme(newSystemPreference);
      });
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, systemPreference }}>
      {children}
    </ThemeContext.Provider>
  );
}
