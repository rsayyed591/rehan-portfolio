import { useRef, useEffect } from 'react';
import { Download, Terminal, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const frameRef = useRef(null);
  const textRef = useRef(null);
  const dotsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(imageRef.current,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.to(frameRef.current, {
        x: -10,
        y: -10,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.fromTo(textRef.current.children,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(ctaRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleImageMove = (e) => {
    const card = imageRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000
    });
  };

  const handleImageLeave = () => {
    gsap.to(imageRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)"
    });
  };

  const handleMagneticMove = (e) => {
    const btn = ctaRef.current;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(btn, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMagneticLeave = () => {
    gsap.to(ctaRef.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)"
    });
  };

  return (
    <section ref={sectionRef} id="about" className="relative py-28 bg-theme-primary overflow-hidden">
      {/* Background Decorations - theme aware */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-30" />
      <div className="absolute right-0 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-accent opacity-10 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div ref={headerRef} className="mb-20 text-center">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-theme-primary tracking-tight mb-6">
            About Me
          </h2>
          <div className="h-1.5 w-24 bg-accent rounded-full mb-6 mx-auto" />
          <p className="text-theme-muted font-mono uppercase tracking-widest text-sm">
            Developer · Problem Solver · Engineer
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image Column */}
          <div className="relative group flex justify-center lg:justify-end">
            <div 
              ref={imageRef}
              className="relative w-full max-w-md"
              style={{ transformStyle: "preserve-3d" }}
              onMouseMove={handleImageMove}
              onMouseLeave={handleImageLeave}
            >
              {/* Image Container */}
              <div className="relative z-10 overflow-hidden rounded-3xl shadow-theme-lg border border-theme bg-theme-secondary">
                <img
                  src="./about.webp"
                  alt="Rehan Sayyed"
                  className="w-full h-auto object-cover transition-all duration-500 hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Decorative Tech Frame */}
              <div 
                ref={frameRef}
                className="absolute -z-10 top-6 -right-6 w-full h-full border-2 border-accent/20 rounded-3xl bg-accent-light/10" 
              />
              
              {/* Dot Pattern */}
              <div 
                ref={dotsRef}
                className="absolute -z-20 -bottom-10 -left-10 w-32 h-32 opacity-20 text-accent"
              >
                <svg width="100%" height="100%" fill="currentColor">
                  <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div ref={textRef} className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-theme-primary flex items-center gap-3">
              <div className="p-2 bg-accent-light rounded-lg text-accent">
                <Terminal size={24} />
              </div>
              Building Reliable Web Systems
            </h3>

            <div className="space-y-4 text-lg text-theme-secondary leading-relaxed font-medium">
              <p>
                I'm a <span className="text-theme-primary font-bold">full-stack developer</span> focused on building production-ready web applications with clean architecture and long-term scalability in mind.
              </p>

              <p>
                I work across the stack using <span className="text-accent font-bold font-mono">React, Next.js, Node.js, and SQL</span>, ensuring performance, maintainability, and a strong user experience.
              </p>

              <p>
                Alongside real-world development, I continuously sharpen my problem-solving skills through structured <span className="text-theme-primary font-bold">DSA practice</span>.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                ref={ctaRef}
                href="/rehan_resume.pdf"
                download
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-theme-primary text-theme-primary border border-theme rounded-xl font-semibold text-lg shadow-theme hover:bg-accent hover:text-white hover:border-accent hover:shadow-accent/30 transition-all duration-300 will-change-transform"
              >
                <Download className="group-hover:animate-bounce" size={20} />
                Download Resume
                <ArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;