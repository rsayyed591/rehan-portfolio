import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light';
  return localStorage.getItem('portfolio-theme') || 'light';
};

const [theme, setTheme] = useState(getInitialTheme);

useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme);
}, [theme]);


  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);