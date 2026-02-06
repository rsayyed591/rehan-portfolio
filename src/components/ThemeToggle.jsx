import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      className="
        group
        fixed bottom-6 right-6 z-50
        w-14 h-14 md:w-16 md:h-16
        rounded-full overflow-hidden
        border-2 border-theme
        shadow-theme-lg
        transition-all duration-300 ease-out
        hover:scale-110 active:scale-95
        hover:rotate-3
        will-change-transform
        focus:outline-none 
        focus:ring-2 focus:ring-accent 
        focus:ring-offset-2 focus:ring-offset-theme-primary
      "
    >
      {/* Floating idle animation */}
      <span className="absolute inset-0 animate-pulse-slow opacity-20 pointer-events-none" />

      {/* Background Image */}
      <div
        className="
          w-full h-full
          bg-cover bg-center
          transition-transform duration-500 ease-out
          group-hover:scale-110
          group-hover:brightness-110
        "
        style={{
          backgroundImage:
            theme === 'light'
              ? 'url(/toggle/open-book.webp)'
              : 'url(/toggle/closed-journal.webp)',
        }}
      />

      {/* Gradient Overlay */}
      <div className="
        absolute inset-0 
        bg-gradient-to-tr 
        from-black/20 
        via-transparent 
        to-white/10 
        pointer-events-none
      " />

      {/* Soft Glow */}
      <div
        className="
          absolute inset-0 rounded-full
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          pointer-events-none
        "
        style={{
          boxShadow:
            theme === 'light'
              ? 'inset 0 0 25px rgba(255, 200, 100, 0.35)'
              : 'inset 0 0 25px rgba(100, 150, 255, 0.35)',
        }}
      />
    </button>
  );
};

export default ThemeToggle;
