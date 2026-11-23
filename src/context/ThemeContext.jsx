
import { createContext, useState, useContext } from 'react';

// Étape 1 : créer le contexte
export const ThemeContext = createContext(null);

// Étape 2 : créer le Provider
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  // Changer le thème
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Étape 3 : créer un Custom Hook
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used inside a ThemeProvider');
  }

  return context;
}
