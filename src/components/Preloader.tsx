import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ assetsLoaded, onComplete }) => {
  // Internal state to track if the minimum animation time has passed
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    // 1. The "Visual Guarantee": Ensure animation plays for at least 3.8s
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // 2. The "Handshake": Only finish when BOTH clocks are ready
    if (minTimeElapsed && assetsLoaded) {
      onComplete();
    }
  }, [minTimeElapsed, assetsLoaded, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-gray-950 flex items-center justify-center overflow-hidden"
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
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#2563eb" />
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
            className="font-heading font-bold text-[100px] md:text-[130px] tracking-wider stroke-[2px] md:stroke-[1.5px]"
            fill="url(#logo-gradient)"
            stroke="#60a5fa" 
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