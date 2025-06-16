// themeContext.tsx
'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Add types for theme and setTheme
/**
 * @typedef {Object} ThemeContextType
 * @property {string} theme
 * @property {React.Dispatch<React.SetStateAction<string>>} setTheme
 */

/** @type {import('react').Context<ThemeContextType | undefined>} */
const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  // Try to get theme from localStorage, fallback to 'light'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used inside a ThemeProvider');
  }
  return context;
};
