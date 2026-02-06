import { useRef, useEffect, useState, useCallback } from 'react';
import { GraduationCap, Award, Calendar, School, Sparkles, ExternalLink } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Engineering',
      institute: 'M.H. Saboo Siddik College of Engineering',
      period: '2021 – 2025',
      score: 'CGPA: 8.09',
      status: 'Final Year',
      highlights: [
        'Head Coordinator & Technical Lead, Programmers Club',
        '3rd Place – Resilience Masters Hackathon'
      ]
    },
    {
      degree: 'Higher Secondary Certificate (Science)',
      institute: 'M.H. Saboo Siddik Junior College',
      period: '2019 – 2021',
      score: 'Score: 81.67%',
      status: 'Completed',
      highlights: []
    }
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current?.children || [],
        { y: 60, opacity: 0 },
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

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        gsap.fromTo(card,
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.15
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  const handleMouseMove = useCallback((e, index) => {
    if (isMobile) return;
    
    const card = cardsRef.current[index];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }, [isMobile]);

  const handleMouseLeave = useCallback((index) => {
    setHoveredCard(null);
  }, []);

  return (
    <section ref={sectionRef} id="education" className="relative py-20 md:py-28 bg-theme-primary overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light/50 border border-accent/20 text-accent text-sm font-mono font-medium mb-6">
            <Sparkles size={14} />
            <span>Academic Journey</span>
          </div>
          
          <h2 className="font-sans text-3xl md:text-5xl font-bold text-theme-primary tracking-tight mb-4 md:mb-6 opacity-0">
            Education
          </h2>
          <div className="w-16 md:w-24 h-1 md:h-1.5 bg-accent mx-auto rounded-full mb-4 md:mb-6 opacity-0" />
          <p className="text-theme-muted max-w-2xl mx-auto text-base md:text-lg leading-relaxed opacity-0 px-4">
            Academic background and key milestones in my engineering journey.
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="group relative opacity-0"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Glow effect on hover */}
              <div 
                className="absolute -inset-px bg-gradient-to-r from-accent/50 to-accent-light/50 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                style={{
                  background: hoveredCard === index 
                    ? `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.15), transparent 40%)`
                    : 'none'
                }}
              />
              
              {/* Card */}
              <div 
                className="relative h-full flex flex-col bg-theme-secondary/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-theme overflow-hidden transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-theme-lg"
                style={{
                  background: hoveredCard === index 
                    ? `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.06), transparent 40%)`
                    : undefined
                }}
              >
                {/* Top section with icon and meta */}
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    {/* Animated icon container */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-md group-hover:scale-110 transition-transform duration-300" />
                      <div className="relative p-3 md:p-4 bg-accent-light rounded-2xl text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <GraduationCap size={isMobile ? 24 : 32} strokeWidth={1.5} />
                      </div>
                    </div>
                    
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-tertiary border border-theme text-xs font-mono text-theme-muted mb-2">
                        <Calendar size={12} />
                        {edu.period}
                      </span>
                      <div className="text-xs font-mono text-accent font-medium">
                        {edu.status}
                      </div>
                    </div>
                  </div>

                  {/* Score badge */}
                  <div className="flex flex-col items-end">
                    <span className="text-2xl md:text-3xl font-bold text-accent font-mono tracking-tight">
                      {edu.score.split(': ')[1]}
                    </span>
                    <span className="text-xs text-theme-muted uppercase tracking-wider">
                      {edu.score.split(':')[0]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-theme-primary leading-tight group-hover:text-accent transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-theme-secondary">
                    <School size={18} className="text-accent shrink-0" />
                    <span className="font-medium">{edu.institute}</span>
                  </div>
                </div>

                {/* Divider with gradient */}
                <div className="h-px bg-gradient-to-r from-transparent via-theme-muted/30 to-transparent mb-6" />

                {/* Highlights */}
                {edu.highlights.length > 0 ? (
                  <div className="mt-auto space-y-3">
                    <h4 className="text-xs font-mono text-theme-muted uppercase tracking-wider mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {edu.highlights.map((item, i) => (
                        <li 
                          key={i} 
                          className="flex items-start gap-3 text-theme-secondary text-sm group/item"
                        >
                          <div className="p-1 rounded-md bg-accent-light text-accent mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform">
                            <Award size={14} />
                          </div>
                          <span className="group-hover/item:text-theme-primary transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="mt-auto pt-4">
                    <div className="flex items-center gap-2 text-theme-muted text-sm">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span>Completed with distinction</span>
                    </div>
                  </div>
                )}

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-accent/5 to-transparent transform translate-x-1/2 -translate-y-1/2" />
                </div>

                {/* Bottom bar indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;