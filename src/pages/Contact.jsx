import { useRef, useEffect, useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Sparkles, Copy, Check, Github, Linkedin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const [copied, setCopied] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current.children,
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

      gsap.fromTo(leftColRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftColRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(rightColRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightColRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      const contactItems = rightColRef.current.querySelectorAll('.contact-item');
      gsap.fromTo(contactItems,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightColRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const socialPreviews = {
    github: {
      icon: <Github size={24} />,
      title: "GitHub",
      username: "@rsayyed591",
      stats: [
        { label: "Repos", value: "20+" },
        { label: "Contributions", value: "500+" },
        { label: "Stars", value: "50+" }
      ],
      color: "from-gray-700 to-gray-900"
    },
    linkedin: {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      username: "Rehan Sayyed",
      stats: [
        { label: "Connections", value: "500+" },
        { label: "Endorsements", value: "20+" },
        { label: "Posts", value: "15+" }
      ],
      color: "from-blue-600 to-blue-800"
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-28 overflow-hidden bg-theme-primary"
    >
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent/20 blur-[100px]" />

      <div className="relative container mx-auto px-6 max-w-6xl z-10">
        
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light/50 border border-accent/20 text-accent text-sm font-mono font-medium mb-6">
            <Sparkles size={14} />
            <span>Get in Touch</span>
          </div>
          
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-theme-primary tracking-tight mb-6 opacity-0">
            Let&apos;s Connect
          </h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-6 opacity-0" />
          <p className="text-theme-muted max-w-2xl mx-auto text-lg leading-relaxed font-medium opacity-0">
            Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </div>
        
        <div className="md:ml-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Context & Socials */}
            <div ref={leftColRef} className="lg:pt-10 opacity-0">
              <div className="space-y-8">
                <h3 className="font-sans text-3xl font-bold text-theme-primary">
                  Rehan Sayyed
                </h3>

                <div className="space-y-4 text-lg text-theme-secondary leading-relaxed">
                  <p>
                    I am a full-stack developer passionate about building digital products that are not just functional, but performant and user-centric.
                  </p>
                  <p>
                    Currently open to <span className="font-semibold text-accent">internships</span> and <span className="font-semibold text-accent">collaborations</span>.
                  </p>
                </div>

                {/* Social Buttons with Preview Cards */}
                <div className="flex flex-wrap items-center gap-4 pt-4 relative">
                  {/* GitHub with Preview */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setHoveredSocial('github')}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <SocialBtn 
                      href="https://github.com/rsayyed591" 
                      icon={<FaGithub size={20} />} 
                      label="GitHub"
                      colorClass="hover:bg-theme-primary hover:border-theme-primary hover:text-theme-secondary"
                    />
                    
                    {/* Preview Card */}
                    {hoveredSocial === 'github' && (
                      <div className="absolute bottom-full left-0 mb-3 w-64 bg-theme-secondary rounded-2xl shadow-theme-lg border border-theme p-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
                        <div className={`h-20 rounded-xl bg-gradient-to-br ${socialPreviews.github.color} mb-3 flex items-center justify-center text-white`}>
                          {socialPreviews.github.icon}
                        </div>
                        <h4 className="font-bold text-theme-primary">{socialPreviews.github.title}</h4>
                        <p className="text-sm text-theme-muted mb-3">{socialPreviews.github.username}</p>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          {socialPreviews.github.stats.map((stat, i) => (
                            <div key={i} className="bg-theme-tertiary rounded-lg p-2">
                              <div className="text-lg font-bold text-accent">{stat.value}</div>
                              <div className="text-[10px] text-theme-muted uppercase">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* LinkedIn with Preview */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setHoveredSocial('linkedin')}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <SocialBtn 
                      href="https://www.linkedin.com/in/rehan42/" 
                      icon={<FaLinkedin size={20} />} 
                      label="LinkedIn"
                      colorClass="hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white"
                    />
                    
                    {/* Preview Card */}
                    {hoveredSocial === 'linkedin' && (
                      <div className="absolute bottom-full left-0 mb-3 w-64 bg-theme-secondary rounded-2xl shadow-theme-lg border border-theme p-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
                        <div className={`h-20 rounded-xl bg-gradient-to-br ${socialPreviews.linkedin.color} mb-3 flex items-center justify-center text-white`}>
                          {socialPreviews.linkedin.icon}
                        </div>
                        <h4 className="font-bold text-theme-primary">{socialPreviews.linkedin.title}</h4>
                        <p className="text-sm text-theme-muted mb-3">{socialPreviews.linkedin.username}</p>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          {socialPreviews.linkedin.stats.map((stat, i) => (
                            <div key={i} className="bg-theme-tertiary rounded-lg p-2">
                              <div className="text-lg font-bold text-accent">{stat.value}</div>
                              <div className="text-[10px] text-theme-muted uppercase">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Card */}
            <div ref={rightColRef} className="opacity-0">
              <div className="bg-theme-secondary/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-theme border border-theme relative group overflow-hidden hover:border-accent/30 transition-all duration-300">
                {/* Card Hover Gradient Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-light rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110 duration-500" />
                
                <div className="space-y-8 relative z-10">
                  {/* Email with Copy */}
                  <div className="contact-item opacity-0 group/item">
                    <ContactItem
                      icon={<Mail size={22} />}
                      label="Email Me"
                      value="rehansayyed591@gmail.com"
                      link="mailto:rehansayyed591@gmail.com"
                      onCopy={() => handleCopy("rehansayyed591@gmail.com", "email")}
                      copied={copied === "email"}
                    />
                  </div>

                  {/* Phone with Copy */}
                  <div className="contact-item opacity-0 group/item">
                    <ContactItem
                      icon={<Phone size={22} />}
                      label="Call Me"
                      value="+91 98331 65762"
                      link="tel:+919833165762"
                      onCopy={() => handleCopy("+919833165762", "phone")}
                      copied={copied === "phone"}
                    />
                  </div>

                  {/* Location */}
                  <div className="contact-item opacity-0">
                    <ContactItem
                      icon={<MapPin size={22} />}
                      label="Location"
                      value="Mumbai, India"
                    />
                  </div>

                  <div className="pt-6 contact-item opacity-0">
                    <a
                      href="mailto:rehansayyed591@gmail.com"
                      className="
                        w-full flex items-center justify-center gap-3
                        px-8 py-4
                        bg-accent text-white
                        rounded-xl font-semibold text-lg
                        shadow-lg shadow-accent/30
                        hover:bg-accent-dark hover:shadow-accent/50 hover:-translate-y-1
                        transition-all duration-300
                      "
                    >
                      Start a Conversation
                      <ArrowRight size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialBtn = ({ href, icon, label, colorClass }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`
      flex items-center gap-3 px-6 py-3 
      rounded-xl border border-theme 
      text-theme-secondary font-medium
      transition-all duration-300
      hover:text-theme-primary
      ${colorClass}
    `}
  >
    {icon}
    <span>{label}</span>
  </a>
);

const ContactItem = ({ icon, label, value, link, onCopy, copied }) => (
  <div className="flex items-start gap-5">
    <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-accent-light text-accent rounded-2xl">
      {icon}
    </div>
    <div className="pt-1 flex-1">
      <p className="text-sm font-semibold text-theme-muted uppercase tracking-wider mb-1 font-mono">
        {label}
      </p>
      <div className="flex items-center gap-2">
        {link ? (
          <a
            href={link}
            className="text-lg md:text-xl font-medium text-theme-primary hover:text-accent transition-colors break-all"
          >
            {value}
          </a>
        ) : (
          <p className="text-lg md:text-xl font-medium text-theme-primary">
            {value}
          </p>
        )}
        
        {/* Copy Button */}
        {onCopy && (
          <button
            onClick={onCopy}
            className="p-2 rounded-lg bg-theme-tertiary text-theme-muted hover:text-accent hover:bg-accent-light transition-all duration-200"
            title="Copy to clipboard"
          >
            {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
          </button>
        )}
      </div>
      
      {/* Copied Toast */}
      {copied && (
        <span className="text-xs text-green-500 font-medium mt-1 block animate-in fade-in slide-in-from-top-1">
          Copied to clipboard!
        </span>
      )}
    </div>
  </div>
);

export default Contact;