import { useState, useEffect, useRef, useCallback, memo } from 'react';
import { FaLinkedinIn, FaGithub, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { ArrowDown } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../contexts/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

// Memoize social icons to prevent re-renders
const SocialIcon = memo(({ href, icon, label, theme, onMagneticMove, onMagneticLeave }) => {
  const iconRef = useRef(null);
  
  const handleMouseMove = useCallback((e) => {
    onMagneticMove(e, iconRef.current);
  }, [onMagneticMove]);
  
  return (
    <a
      ref={iconRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => onMagneticLeave(iconRef.current)}
      className={`
        w-11 h-11
        flex items-center justify-center
        rounded-full
        border
        backdrop-blur-sm
        transition-all duration-300
        hover:scale-110
        will-change-transform
        ${theme === 'dark' 
          ? 'border-white/20 bg-white/10 text-white hover:bg-accent hover:border-accent' 
          : 'border-theme-primary/20 bg-theme-primary/10 text-theme-primary hover:bg-accent hover:text-white hover:border-accent'
        }
      `}
    >
      {icon}
    </a>
  );
});

SocialIcon.displayName = 'SocialIcon';

const Hero = () => {
  const { theme } = useTheme();
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  // Use ref for typing speed to avoid re-renders
  const typingSpeedRef = useRef(150);
  const ctxRef = useRef(null);
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const badgeRef = useRef(null);
  const nameRef = useRef(null);
  const typewriterRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const socialsRef = useRef(null);

  const textArray = [
    'Full Stack Developer',
    'React Specialist',
    'Backend Engineer',
    'Problem Solver'
  ];

  // Get background image based on theme
  const getBgImage = useCallback(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    if (theme === 'dark') {
      return isMobile ? './bg/mhero.webp' : './bg/hero.webp';
    }
    return isMobile ? './bg/mlhero.webp' : './bg/mlhero.webp';
  }, [theme]);

  // Typing effect - optimized with ref
  useEffect(() => {
    const timer = setTimeout(() => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setText(prev => {
        if (!isDeleting && prev === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          return prev;
        }
        if (isDeleting && prev === '') {
          setIsDeleting(false);
          setLoopNum(l => l + 1);
          return '';
        }
        return isDeleting 
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1);
      });

      typingSpeedRef.current = isDeleting ? 50 : 100;
    }, typingSpeedRef.current);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  // Main GSAP animations - run once only
  useEffect(() => {
    // Prevent re-running if already initialized
    if (ctxRef.current) return;

    ctxRef.current = gsap.context(() => {
      const tl = gsap.timeline({ 
        defaults: { 
          ease: "power3.out",
          force3D: true // Hardware acceleration
        } 
      });

      // Background entrance
      gsap.fromTo(bgRef.current, 
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
      );

      // Content stagger
      tl.fromTo(badgeRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
      .fromTo(nameRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(typewriterRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.6"
      )
      .fromTo(descRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(buttonsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.3"
      )
      .fromTo(socialsRef.current?.children || [],
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.08 },
        "-=0.3"
      );

      // Parallax scroll - use transform only
      gsap.to(bgRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1 // Smooth scrubbing
        }
      });

      // Shimmer effect on name - use transform not background-position
      if (nameRef.current) {
        gsap.to(nameRef.current, {
          backgroundPosition: "200% center",
          duration: 3,
          repeat: -1,
          ease: "none"
        });
      }

    }, sectionRef);

    return () => {
      if (ctxRef.current) {
        ctxRef.current.revert();
        ctxRef.current = null;
      }
    };
  }, []); // Empty deps - run once

  // Throttled magnetic effect
  const magneticTimeoutRef = useRef(null);
  
  const handleMagneticMove = useCallback((e, element) => {
    if (!element || gsap.isTweening(element)) return;
    
    // Throttle to every 16ms (~60fps)
    if (magneticTimeoutRef.current) return;
    
    magneticTimeoutRef.current = setTimeout(() => {
      magneticTimeoutRef.current = null;
    }, 16);

    const rect = element.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    
    gsap.to(element, {
      x, y,
      duration: 0.2,
      ease: "power2.out",
      overwrite: "auto"
    });
  }, []);

  const handleMagneticLeave = useCallback((element) => {
    if (!element) return;
    gsap.to(element, {
      x: 0, y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)"
    });
  }, []);

  // Social links data
  const socialLinks = [
    { href: "https://www.linkedin.com/in/rehan42/", icon: <FaLinkedinIn size={18} />, label: "LinkedIn" },
    { href: "https://github.com/rsayyed591", icon: <FaGithub size={18} />, label: "GitHub" },
    { href: "https://leetcode.com/u/rehann/", icon: <SiLeetcode size={18} />, label: "LeetCode" },
    { href: "https://www.hackerrank.com/profile/rehansayyed591", icon: <FaHackerrank size={18} />, label: "HackerRank" }
  ];

  const shimmerColor = theme === 'dark' ? '#ffffff' : '#0f172a';

  return (
    <section 
      ref={sectionRef} 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <style>{`
        @keyframes shine {
          to { background-position: 200% center; }
        }
        
        .text-shimmer {
          background: linear-gradient(90deg, ${shimmerColor} 0%, var(--accent) 25%, ${shimmerColor} 50%, var(--accent) 75%, ${shimmerColor} 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Background */}
      <div 
        ref={bgRef} 
        className="absolute inset-0 z-0 will-change-transform"
        style={{ transform: 'translateZ(0)' }} // Force GPU layer
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${getBgImage()})`,
            willChange: 'transform'
          }}
        />
        <div className={`absolute inset-0 transition-colors duration-500 ${
          theme === 'dark' ? 'bg-black/50' : 'bg-white/20'
        }`} />
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-black/80 via-black/50 to-transparent'
            : 'bg-gradient-to-r from-white/60 via-white/30 to-transparent'
        }`} />
      </div>

      {/* Content */}
      <div className="md:ml-28 w-full z-10">
        <div className="container mx-auto px-6 pt-20">
          <div className="max-w-4xl">
            
            <div 
              ref={badgeRef} 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Available for Hire
            </div>

            <h1 
              ref={nameRef} 
              className="font-sans text-6xl md:text-8xl font-bold tracking-tight mb-6 pb-2 text-shimmer"
              style={{ 
                willChange: 'transform, opacity',
                transform: 'translateZ(0)' 
              }}
            >
              Rehan Sayyed
            </h1>

            <div 
              ref={typewriterRef} 
              className="h-12 flex items-baseline gap-3 text-2xl md:text-3xl font-light mb-8"
            >
              <span className={theme === 'dark' ? 'text-white/70' : 'text-theme-primary/70'}>
                I am a
              </span>
              <div className="flex items-center">
                <span className="text-accent font-sans font-semibold tracking-wide min-w-[200px]">
                  {text}
                </span>
                <span className="w-[3px] h-8 ml-1 bg-accent animate-pulse" />
              </div>
            </div>

            <p 
              ref={descRef} 
              className={`text-lg leading-relaxed max-w-xl mb-12 border-l-2 pl-6 ${
                theme === 'dark' 
                  ? 'text-white/80 border-white/30' 
                  : 'text-theme-primary/80 border-theme-primary/30'
              }`}
            >
              Building scalable, production-ready web applications with clean frontend architecture and reliable backend systems.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div ref={buttonsRef}>
                <a 
                  href="#projects"
                  className="inline-flex px-8 py-4 bg-accent text-white rounded-full font-semibold shadow-lg shadow-accent/30 hover:-translate-y-1 transition-all duration-300 items-center gap-2 hover:shadow-accent/50"
                >
                  View My Work
                  <ArrowDown size={18} />
                </a>
              </div>

              <div ref={socialsRef} className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <SocialIcon 
                    key={social.label}
                    {...social}
                    theme={theme}
                    onMagneticMove={handleMagneticMove}
                    onMagneticLeave={handleMagneticLeave}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block z-20 ${
        theme === 'dark' ? 'text-white/50' : 'text-theme-primary/50'
      }`}>
        <ArrowDown size={24} />
      </div>

    </section>
  );
};

export default Hero;