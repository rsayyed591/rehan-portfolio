import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const Preloader = ({ assetsLoaded, onComplete }) => {
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (minTimeElapsed && assetsLoaded) {
      onComplete();
    }
  }, [minTimeElapsed, assetsLoaded, onComplete]);

  // Use CSS variables for dynamic colors - no hardcoded values
  const accentDark = 'var(--accent-dark)';
  const accent = 'var(--accent)';

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-theme-primary"
    >
      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          scale: { duration: 2.5, ease: "easeOut" },
          opacity: { duration: 2.0, ease: "easeInOut" } 
        }}
        className="relative flex items-center justify-center"
      >
        <svg viewBox="0 0 400 160" className="w-80 h-32 md:w-[500px] md:h-48 overflow-visible">
          <defs>
            <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={accentDark} />
              <stop offset="100%" stopColor={accent} />
            </linearGradient>
            
            <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-bold text-[100px] md:text-[130px] tracking-wider stroke-[2px] md:stroke-[1.5px] font-sans"
            fill="url(#logo-gradient)"
            stroke={accent}
            filter="url(#neon-glow)"
            initial={{ 
              strokeDasharray: 800, 
              strokeDashoffset: 800, 
              fillOpacity: 0 
            }}
            animate={{ 
              strokeDashoffset: 0,
              fillOpacity: 1 
            }}
            transition={{ 
              strokeDashoffset: { duration: 2, ease: "easeInOut" },
              fillOpacity: { duration: 1.2, delay: 2.2, ease: "easeOut" } 
            }}
          >
            RS.
          </motion.text>
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;