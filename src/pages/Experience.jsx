import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
// Import company logos
import aptLogo from '../assets/apt.webp';
import aptitechLogo from '../assets/aptitech.webp';
import visualLabsLogo from '../assets/visual-labs.webp';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const lineRef = useRef(null);
  const progressLineRef = useRef(null);
  const cardsRef = useRef([]);
  const dotsRef = useRef([]);

  const experiences = [
    {
      title: "Frontend Intern",
      period: "Mar 2025 - May 2025",
      company: "Apt.",
      location: "Remote",
      logo: aptLogo,
      achievements: [
        "Built responsive React interfaces used in production, improving usability and performance across devices.",
        "Integrated frontend logic with live backend data to power real-time visualization components.",
        "Collaborated with designers and backend engineers to deliver clean, scalable UI features."
      ]
    },
    {
      title: "Full Stack Intern",
      period: "Dec 2023 - May 2024",
      company: "Aptitech Education Pvt. Ltd.",
      location: "Noida, India",
      logo: aptitechLogo,
      achievements: [
        "Gained hands-on experience in backend programming, working extensively with JavaScript, React, HTML, CSS, and DSA.",
        "Contributed to backend feature development and API integration across multiple internal projects.",
        "Refactored over 500+ lines of JavaScript code, improving scalability, readability, and maintainability."
      ]
    },
    {
      title: "Software Engineer Intern",
      period: "Jun 2023 - Aug 2023",
      company: "Visual Labs",
      location: "Mumbai, India",
      logo: visualLabsLogo,
      achievements: [
        "Developed and optimized full-stack web applications used in real-time scenarios.",
        "Optimized SQL queries, improving database performance by approximately 35%.",
        "Collaborated with cross-functional teams to implement scalable application features."
      ]
    },
    {
      title: "Software Engineer Intern",
      period: "Dec 2022 - Jan 2023",
      company: "Visual Labs",
      location: "Mumbai, India",
      logo: visualLabsLogo,
      achievements: [
        "Worked on frontend and backend features while strengthening fundamentals in DBMS and Python.",
        "Assisted in building internal tools and dashboards for data-driven workflows.",
        "Improved UI components and application structure through iterative enhancements."
      ]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current.children, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Background timeline line (static)
      gsap.fromTo(lineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 0.5
          }
        }
      );

      // Progress line (fills as you scroll) - hidden on mobile
      if (progressLineRef.current) {
        gsap.fromTo(progressLineRef.current,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              end: "bottom center",
              scrub: true
            }
          }
        );
      }

      cardsRef.current.forEach((card, index) => {
        const isEven = index % 2 === 0;
        const dot = dotsRef.current[index];
        
        gsap.fromTo(card,
          { 
            x: isEven ? 100 : -100, 
            opacity: 0,
            rotateY: isEven ? -5 : 5
          },
          {
            x: 0,
            opacity: 1,
            rotateY: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );

        gsap.fromTo(dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );

        ScrollTrigger.create({
          trigger: card,
          start: "top center",
          end: "bottom center",
          onEnter: () => gsap.to(dot, { scale: 1.3, borderColor: "var(--accent)", duration: 0.3 }),
          onLeave: () => gsap.to(dot, { scale: 1, borderColor: "var(--accent)", duration: 0.3 }),
          onEnterBack: () => gsap.to(dot, { scale: 1.3, borderColor: "var(--accent)", duration: 0.3 }),
          onLeaveBack: () => gsap.to(dot, { scale: 1, borderColor: "var(--accent)", duration: 0.3 })
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardHover = (card, isEntering) => {
    gsap.to(card, {
      y: isEntering ? -5 : 0,
      scale: isEntering ? 1.02 : 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <section ref={sectionRef} id="experience" className="relative py-20 md:py-28 bg-theme-primary overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />
      
      <div className="md:ml-20">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          
          {/* Header */}
          <div ref={headerRef} className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light/50 border border-accent/20 text-accent text-sm font-mono font-medium mb-6">
              <Building2 size={14} />
              <span>Career Timeline</span>
            </div>
            
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-theme-primary tracking-tight mb-6 opacity-0">
              Work Experience
            </h2>
            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-6 opacity-0" />
            <p className="text-theme-muted max-w-2xl mx-auto text-lg leading-relaxed font-medium opacity-0">
              My professional journey in the tech industry, building scalable solutions and collaborating with talented teams.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Background Timeline Line (subtle) */}
            <div 
              ref={lineRef}
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-theme-tertiary transform md:-translate-x-1/2 origin-top"
            />
            
            {/* Progress Line (fills as you scroll) - hidden on mobile */}
            <div 
              ref={progressLineRef}
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent transform -translate-x-1/2 origin-top z-10"
            />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot - Animated */}
                  <div 
                    ref={el => dotsRef.current[index] = el}
                    className="absolute left-4 md:left-1/2 w-4 h-4 bg-theme-secondary border-4 border-accent rounded-full transform -translate-x-1/2 mt-6 z-20 shadow-lg shadow-accent/20 opacity-0"
                  />

                  {/* Content Card */}
                  <div 
                    ref={el => cardsRef.current[index] = el}
                    className="ml-12 md:ml-0 md:w-[calc(50%-2rem)] opacity-0 perspective-1000"
                    onMouseEnter={(e) => handleCardHover(e.currentTarget, true)}
                    onMouseLeave={(e) => handleCardHover(e.currentTarget, false)}
                  >
                    <div className="bg-theme-secondary/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-theme shadow-theme hover:shadow-theme-lg hover:border-accent/30 transition-all duration-300 group cursor-pointer">
                      
                      {/* Header Section with Logo */}
                      <div className="flex flex-col gap-1 mb-6">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div className="flex-1">
                            <h3 className="text-lg md:text-xl font-bold text-theme-primary group-hover:text-accent transition-colors mb-1">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-2 text-theme-secondary font-medium">
                              <Briefcase size={16} className="text-accent" />
                              <span>{exp.company}</span>
                            </div>
                          </div>
                          
                          {/* Company Logo */}
                          <div className="shrink-0">
                            <img 
                              src={exp.logo} 
                              alt={exp.company}
                              className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-xl bg-theme-primary p-2 border border-theme group-hover:border-accent/30 transition-all duration-300"
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-theme-muted">
                          <span className="flex items-center gap-1.5">
                            <MapPin size={16} className="text-theme-muted" />
                            {exp.location}
                          </span>
                        </div>

                        {/* Date Badge */}
                        <div className="mt-3 inline-flex items-center gap-1 text-xs font-mono font-semibold text-accent bg-accent-light px-3 py-1.5 rounded-full w-fit">
                          <Calendar size={12} />
                          {exp.period}
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-theme-muted/30 to-transparent mb-6" />

                      {/* Achievements List */}
                      <ul className="space-y-3">
                        {exp.achievements.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-theme-secondary text-sm leading-relaxed">
                            <div className="p-1 rounded-md bg-accent-light text-accent mt-0.5 shrink-0">
                              <CheckCircle2 size={14} />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;