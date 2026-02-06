import { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, 
  SiExpress, SiMysql, SiMongodb, SiTailwindcss, 
  SiRedux, SiHtml5, SiCss3, 
  SiGit, SiGithub, SiPython, SiDjango 
} from 'react-icons/si';
import { Sparkles, Zap, Globe, Cpu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const constellationRef = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef(null);

  const skillConstellation = [
    { name: 'React', icon: SiReact, color: '#61DAFB', size: 'lg', x: 50, y: 42, category: 'core', level: 90, desc: 'Production-ready React apps, hooks, reusable components' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000', size: 'lg', x: 32, y: 28, category: 'core', level: 82, desc: 'SSR, routing, performance optimization, real-world apps' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', size: 'md', x: 70, y: 34, category: 'core', level: 88, desc: 'ES6+, async logic, clean and scalable codebases' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', size: 'md', x: 22, y: 55, category: 'backend', level: 80, desc: 'REST APIs, backend logic, real production usage' },
    { name: 'Express.js', icon: SiExpress, color: '#404040', size: 'sm', x: 36, y: 65, category: 'backend', level: 78, desc: 'API design, middleware, backend integrations' },
    { name: 'Python', icon: SiPython, color: '#3776AB', size: 'md', x: 82, y: 52, category: 'backend', level: 75, desc: 'Scripting, backend utilities, data handling' },
    { name: 'Django', icon: SiDjango, color: '#092E20', size: 'sm', x: 65, y: 20, category: 'backend', level: 72, desc: 'Backend services and admin-based systems' },
    { name: 'SQL', icon: SiMysql, color: '#4479A1', size: 'md', x: 85, y: 26, category: 'data', level: 82, desc: 'Query optimization, joins, performance tuning' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', size: 'sm', x: 15, y: 26, category: 'data', level: 75, desc: 'Document models and basic aggregations' },
    { name: 'Redux', icon: SiRedux, color: '#764ABC', size: 'sm', x: 90, y: 68, category: 'style', level: 80, desc: 'Global state, predictable data flow' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', size: 'md', x: 12, y: 75, category: 'style', level: 88, desc: 'Utility-first styling, responsive UIs' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6', size: 'sm', x: 76, y: 82, category: 'style', level: 85, desc: 'Flexbox, Grid, animations, clean layouts' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26', size: 'sm', x: 50, y: 88, category: 'style', level: 90, desc: 'Semantic markup, accessibility-friendly structure' },
    { name: 'Git', icon: SiGit, color: '#F05032', size: 'md', x: 6, y: 45, category: 'tools', level: 85, desc: 'Version control, collaboration workflows' },
    { name: 'GitHub', icon: SiGithub, color: '#181717', size: 'md', x: 94, y: 40, category: 'tools', level: 88, desc: 'Repositories, collaboration, project hosting' },
  ];

  const connections = [
    [0, 1], [0, 2], [0, 3], [0, 4],
    [1, 5], [2, 6],
    [3, 4], [3, 7], [3, 8],
    [4, 6],
    [5, 6],
    [7, 5], [8, 3],
    [9, 10], [10, 11], [11, 12], [12, 9],
    [13, 0], [14, 0], [13, 14],
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current.children,
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      const stars = constellationRef.current.querySelectorAll('.skill-node');
      gsap.fromTo(stars,
        { scale: 0, opacity: 0, rotation: -180 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          stagger: {
            amount: 1.5,
            from: "center"
          },
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: constellationRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      const lines = constellationRef.current.querySelectorAll('.connection-line');
      gsap.fromTo(lines,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.5,
          stagger: 0.1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: constellationRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      if (window.innerWidth >= 768) {
        stars.forEach((star, i) => {
          gsap.to(star, {
            y: "random(-15, 15)",
            x: "random(-10, 10)",
            duration: "random(2, 4)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.1
          });
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getIconSize = useCallback((size) => {
    if (isMobile) {
      return size === 'lg' ? 28 : size === 'md' ? 24 : 20;
    }
    return size === 'lg' ? 40 : size === 'md' ? 32 : 24;
  }, [isMobile]);

  // FIX: Use a delay before clearing hover to prevent flicker
  const hoverTimeoutRef = useRef(null);
  
  const handleInteraction = useCallback((index) => {
    if (isMobile) {
      setSelectedSkill(prev => prev === index ? null : index);
    } else {
      setHoveredSkill(index);
    }
  }, [isMobile]);

  const handleMouseLeave = useCallback(() => {
    // Add small delay before clearing to prevent flicker when moving to card
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredSkill(null);
    }, 100);
  }, []);

  const handleMouseEnter = useCallback((index) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredSkill(index);
  }, []);

  // FIX: Card mouse handlers to prevent flicker
  const handleCardMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handleCardMouseLeave = () => {
    setHoveredSkill(null);
  };

  const activeIndex = isMobile ? selectedSkill : hoveredSkill;
  const activeSkill = activeIndex !== null ? skillConstellation[activeIndex] : null;

  const isConnected = useCallback((index) => {
    const active = isMobile ? selectedSkill : hoveredSkill;
    if (active === null) return false;
    return connections.some(([a, b]) => 
      (a === active && b === index) || (b === active && a === index)
    );
  }, [hoveredSkill, selectedSkill, isMobile]);

  return (
    <section ref={sectionRef} id="skills" className="relative py-20 md:py-32 bg-theme-primary overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-accent/10 rounded-full blur-[100px] md:blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-accent/10 rounded-full blur-[100px] md:blur-[100px]" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        
        {/* Header */}
        <div ref={headerRef} className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light/50 border border-accent/20 text-accent text-sm font-mono font-medium mb-6">
            <Sparkles size={14} className="md:w-4 md:h-4" />
            <span>Technical Arsenal</span>
          </div>
          
          <h2 className="font-sans text-3xl md:text-5xl lg:text-6xl font-bold text-theme-primary tracking-tight mb-4 md:mb-6">
            Skill Constellation
          </h2>
          
          <div className="w-20 md:w-32 h-1 md:h-1.5 bg-accent mx-auto rounded-full mb-4 md:mb-6" />
          
          <p className="text-theme-muted max-w-xl mx-auto text-sm md:text-lg leading-relaxed">
            {isMobile ? 'Tap a skill to view details' : 'Hover to explore connections and view details'}
          </p>
        </div>

        {/* Constellation Map */}
        <div 
          className="relative h-[450px] md:h-[600px] mb-8 md:mb-12" 
          ref={constellationRef}
        >
          
          {/* SVG Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {connections.map(([start, end], i) => {
              const startNode = skillConstellation[start];
              const endNode = skillConstellation[end];
              if (!startNode || !endNode) return null;
              
              const isLineActive = activeIndex !== null && (start === activeIndex || end === activeIndex);
              
              return (
                <line
                  key={i}
                  x1={`${startNode.x}%`}
                  y1={`${startNode.y}%`}
                  x2={`${endNode.x}%`}
                  y2={`${endNode.y}%`}
                  stroke={isLineActive ? startNode.color : "var(--text-muted)"}
                  strokeWidth={isLineActive ? "3" : "2"}
                  className="connection-line origin-left transition-all duration-300"
                  style={{ opacity: activeIndex === null ? 0.3 : isLineActive ? 0.9 : 0.15 }}
                />
              );
            })}
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--text-muted)" stopOpacity="0" />
                <stop offset="50%" stopColor="var(--accent)" stopOpacity="1" />
                <stop offset="100%" stopColor="var(--text-muted)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Skill Nodes */}
          {skillConstellation.map((skill, index) => {
            const Icon = skill.icon;
            const isActive = activeIndex === index;
            const connected = isConnected(index);

            return (
              <div
                key={index}
                className="skill-node absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
                onMouseEnter={() => !isMobile && handleMouseEnter(index)}
                onMouseLeave={() => !isMobile && handleMouseLeave()}
                onClick={() => handleInteraction(index)}
              >
                <div 
                  className={`relative flex flex-col items-center gap-1 md:gap-2 p-2 md:p-4 rounded-xl md:rounded-2xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-theme-secondary scale-110 md:scale-125 z-20 shadow-theme-lg ring-2 md:ring-4 ring-accent/20' 
                      : connected 
                        ? 'bg-theme-secondary scale-105 md:scale-110 shadow-theme ring-1 md:ring-2 ring-accent/20' 
                        : 'bg-theme-secondary scale-100 shadow-theme hover:shadow-theme-lg'
                  } border border-theme`}
                >
                  <div 
                    className="transition-all duration-300"
                    style={{ 
                      color: isActive || connected ? skill.color : 'var(--text-muted)',
                      filter: isActive || connected ? 'grayscale(0)' : 'grayscale(1)',
                      transform: isActive ? 'scale(1.1)' : 'scale(1)'
                    }}
                  >
                    <Icon size={getIconSize(skill.size)} />
                  </div>
                  
                  <span 
                    className={`text-[9px] md:text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                      isActive ? 'text-theme-primary opacity-100' : 'text-theme-muted opacity-0'
                    }`}
                  >
                    {skill.name}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Floating Detail Card - FIX: Portal-like positioning with safe zone */}
          {activeSkill && (
            <div 
              ref={cardRef}
              className={`absolute z-50 w-56 md:w-72 bg-theme-secondary rounded-2xl shadow-theme-lg border border-theme p-4 md:p-5 transition-all duration-300 ${
                isMobile ? 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' : ''
              }`}
              style={!isMobile ? {
                // FIX: Position card away from edges to prevent overlap
                left: activeSkill.x > 50 ? `${Math.max(10, activeSkill.x - 35)}%` : `${Math.min(60, activeSkill.x + 10)}%`,
                top: activeSkill.y > 50 ? `${Math.max(10, activeSkill.y - 30)}%` : `${Math.min(60, activeSkill.y + 10)}%`,
              } : {}}
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            >
              {isMobile && (
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedSkill(null); }}
                  className="absolute -top-2 -right-2 w-7 h-7 md:w-8 md:h-8 bg-theme-tertiary rounded-full flex items-center justify-center text-theme-secondary hover:text-theme-primary active:bg-theme-primary transition-colors"
                >
                  <X size={14} className="md:w-4 md:h-4" />
                </button>
              )}
              
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <div 
                  className="p-1.5 md:p-2 rounded-lg md:rounded-xl"
                  style={{ backgroundColor: `${activeSkill.color}20`, color: activeSkill.color }}
                >
                  <activeSkill.icon size={isMobile ? 20 : 24} />
                </div>
                <div>
                  <h3 className="font-bold text-theme-primary text-sm md:text-lg">{activeSkill.name}</h3>
                  <span className="text-[10px] md:text-xs font-mono font-medium text-theme-muted uppercase tracking-wide">
                    {activeSkill.category}
                  </span>
                </div>
              </div>
              
              <p className="text-theme-secondary text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                {activeSkill.desc}
              </p>
              
              {/* Proficiency Bar */}
              <div className="space-y-1 md:space-y-2">
                <div className="flex justify-between text-[10px] md:text-xs font-semibold font-mono">
                  <span className="text-theme-muted">Proficiency</span>
                  <span className="text-accent">{activeSkill.level}%</span>
                </div>
                <div className="h-1.5 md:h-2 bg-theme-tertiary rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{ 
                      width: `${activeSkill.level}%`,
                      backgroundColor: activeSkill.color
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Category Legend */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto">
          {[
            { name: 'Core Stack', icon: Zap, color: 'from-yellow-400 to-orange-500', count: '3 skills' },
            { name: 'Backend', icon: Cpu, color: 'from-green-400 to-emerald-600', count: '4 skills' },
            { name: 'Data', icon: Globe, color: 'from-blue-400 to-cyan-500', count: '2 skills' },
            { name: 'Style', icon: Sparkles, color: 'from-purple-400 to-pink-500', count: '4 skills' }
          ].map((cat, i) => (
            <div 
              key={i}
              className="group p-4 md:p-6 rounded-xl md:rounded-2xl bg-theme-secondary border border-theme hover:border-accent/30 shadow-theme hover:shadow-theme-lg transition-all duration-300 text-center"
            >
              <div className={`inline-flex p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br ${cat.color} mb-2 md:mb-3 shadow-md group-hover:scale-110 transition-transform`}>
                <cat.icon size={isMobile ? 18 : 24} className="text-white" />
              </div>
              <h4 className="text-theme-primary font-bold text-sm md:text-base mb-0.5">{cat.name}</h4>
              <p className="text-theme-muted font-mono text-xs md:text-sm">{cat.count}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-theme-primary to-transparent" />
    </section>
  );
};

export default Skills;