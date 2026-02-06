import { useRef, useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { ArrowUp, Sparkles, Code2 } from "lucide-react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Footer = () => {
  const footerRef = useRef(null);
  const contentRef = useRef(null);
  const lettersRef = useRef([]);
  const [isExploded, setIsExploded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const name = "Rehan Sayyed";
  const letters = name.split('');

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: 0 },
      ease: "power3.inOut"
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  // Track mouse for attraction force when exploded
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Apply attraction force to exploded letters
  useEffect(() => {
    if (isExploded && lettersRef.current.length > 0) {
      lettersRef.current.forEach((letter) => {
        if (letter) {
          const rect = letter.getBoundingClientRect();
          const footerRect = footerRef.current.getBoundingClientRect();
          const letterX = rect.left - footerRect.left + rect.width / 2;
          const letterY = rect.top - footerRect.top + rect.height / 2;
          
          const dx = mousePos.x - letterX;
          const dy = mousePos.y - letterY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const force = Math.max(0, 200 - distance) / 200;
          
          gsap.to(letter, {
            x: `+=${dx * force * 0.02}`,
            y: `+=${dy * force * 0.02}`,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      });
    }
  }, [mousePos, isExploded]);

  const handleExplode = () => {
    if (isExploded) {
      // Reform
      gsap.to(lettersRef.current, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        stagger: {
          amount: 0.3,
          from: "center"
        }
      });
      setIsExploded(false);
    } else {
      // Explode
      lettersRef.current.forEach((letter, i) => {
        if (letter) {
          const angle = (i / letters.length) * Math.PI * 2;
          const distance = 100 + Math.random() * 150;
          const x = Math.cos(angle) * distance;
          const y = Math.sin(angle) * distance;
          const rotation = (Math.random() - 0.5) * 720;
          
          gsap.to(letter, {
            x: x,
            y: y,
            rotation: rotation,
            scale: 0.5 + Math.random() * 0.5,
            duration: 0.6,
            ease: "power3.out"
          });
        }
      });
      setIsExploded(true);
    }
  };

  const MagneticSocialLink = ({ href, icon, label, color }) => {
    const btnRef = useRef(null);

    const handleMove = (e) => {
      const rect = btnRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btnRef.current, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
    };

    const handleLeave = () => {
      gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
    };

    return (
      <a
        ref={btnRef}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          group relative flex items-center gap-2 px-4 py-3
          rounded-xl border border-theme bg-theme-secondary
          text-theme-secondary font-medium
          transition-colors duration-300
          ${color}
          hover:shadow-theme-lg
        `}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {icon}
        <span className="text-sm">{label}</span>
      </a>
    );
  };

  const MagneticButton = ({ onClick, icon, label }) => {
    const btnRef = useRef(null);

    const handleMove = (e) => {
      const rect = btnRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btnRef.current, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
    };

    const handleLeave = () => {
      gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
    };

    return (
      <button
        ref={btnRef}
        onClick={onClick}
        className="group relative flex items-center gap-2 px-4 py-3 rounded-xl border border-theme bg-theme-secondary text-theme-secondary font-medium hover:bg-accent hover:text-white hover:border-accent hover:shadow-theme-lg transition-all duration-300"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {icon}
        <span className="text-sm">{label}</span>
      </button>
    );
  };

  return (
    <footer ref={footerRef} className="relative bg-theme-primary border-t border-theme overflow-hidden min-h-[400px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />

      <div className="container mx-auto px-6 py-12 md:py-16 max-w-6xl relative z-10">
        <div ref={contentRef} className="flex flex-col items-center gap-8">
          
          {/* Exploding Name */}
          <div className="text-center opacity-0 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light/50 border border-accent/20 text-accent text-sm font-mono font-medium mb-6">
              <Sparkles size={14} className="text-accent" />
              <span className="text-sm font-mono font-medium text-accent">Click name to explode</span>
            </div>
            
            {/* Exploding Text */}
            <h3 
              className="font-sans text-4xl md:text-6xl font-bold text-theme-primary cursor-pointer select-none relative"
              onClick={handleExplode}
            >
              <span className="flex flex-wrap justify-center gap-1">
                {letters.map((letter, i) => (
                  <span
                    key={i}
                    ref={el => lettersRef.current[i] = el}
                    className={`inline-block transition-colors duration-300 ${letter === ' ' ? 'w-4' : ''} ${isExploded ? 'text-accent' : 'hover:text-accent'}`}
                    style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </span>
            </h3>
            
            <p className="text-sm text-theme-muted font-medium mt-4 font-mono">
              Full-Stack Developer · React · Node.js
            </p>
          </div>

          {/* Middle: Social Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 opacity-0">
            <MagneticSocialLink 
              href="https://www.linkedin.com/in/rehan42/"
              icon={<FaLinkedin size={20} />}
              label="LinkedIn"
              color="hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]"
            />
            <MagneticSocialLink 
              href="https://github.com/rsayyed591"
              icon={<FaGithub size={20} />}
              label="GitHub"
              color="hover:bg-theme-primary hover:text-theme-secondary hover:border-theme-primary"
            />
            
            <div className="hidden md:block h-8 w-px bg-theme-tertiary mx-2" />

            <MagneticButton 
              onClick={scrollToTop}
              icon={<ArrowUp size={20} />}
              label="Top"
            />
          </div>

          {/* Bottom: Copyright */}
          <div className="pt-8 border-t border-theme w-full opacity-0">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
              <p className="text-sm text-theme-muted flex items-center gap-2">
                © {new Date().getFullYear()} Crafted with
                <span className="inline-flex items-center justify-center w-6 h-6 bg-accent-light rounded-full">
                  <FaHeart className="text-accent animate-pulse" size={12} />
                </span>
                by Rehan Sayyed
              </p>
              <span className="hidden md:inline text-theme-tertiary">·</span>
              <p className="text-xs text-theme-muted font-mono flex items-center gap-1">
                <Code2 size={12} />
                Built with React, Tailwind & GSAP
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-light to-accent" />
    </footer>
  );
};

export default Footer;