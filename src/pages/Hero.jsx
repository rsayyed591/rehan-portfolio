import React, { useState, useEffect } from 'react';
import { FaLinkedinIn, FaGithub, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { ArrowDown } from 'lucide-react';
import { AnimateOnScroll } from '../components/AnimateOnScroll';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = [
    'Full Stack Developer',
    'React Specialist',
    'Backend Engineer',
    'Problem Solver'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); 
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // Social Icon Component
  const SocialIcon = ({ href, icon, label }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        w-11 h-11
        flex items-center justify-center
        rounded-full
        border border-white/10
        bg-white/5 backdrop-blur-sm
        text-gray-300
        transition-all duration-300
        hover:bg-white/10 hover:border-blue-400/50 hover:text-blue-400 hover:scale-110
      "
    >
      {icon}
    </a>
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* 1. LOAD CUSTOM FONT: Space Grotesk (Tech/Modern look) */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&display=swap');
          
          .font-tech {
            font-family: 'Space Grotesk', sans-serif;
          }

          @keyframes shine {
            to {
              background-position: 200% center;
            }
          }
          
          .text-shimmer {
            background: linear-gradient(
              to right, 
              #ffffff 20%, 
              #60a5fa 50%, 
              #ffffff 80%
            );
            background-size: 200% auto;
            color: #000;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shine 4s linear infinite;
          }
        `}
      </style>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ 
            backgroundImage: `url(${window.innerWidth <= 768 ? './mhero.jpg' : './hero.jpg'})` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="md:ml-28 w-full z-10">
        <div className="container mx-auto px-6 pt-20">
          <AnimateOnScroll className="max-w-4xl">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for Hire
            </div>

            {/* NAME: Applied 'font-tech' for the new typography */}
            <h1 className="font-tech text-6xl md:text-8xl font-bold tracking-tight mb-6 pb-2 text-shimmer">
              Rehan Sayyed
            </h1>

            {/* TYPEWRITER: Fixed alignment & Grammar */}
            {/* - Changed "I build" to "I am a" to match "React Specialist".
                - Added 'items-baseline' to align the text on the same line perfectly.
            */}
            <div className="h-12 flex items-baseline gap-3 text-2xl md:text-3xl font-light mb-8">
              <span className="text-gray-400">I am a</span>
              <div className="flex items-center">
                <span className="text-blue-400 font-tech font-semibold tracking-wide">
                  {text}
                </span>
                <span className="w-[3px] h-8 ml-1 bg-blue-400 animate-pulse" />
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-12 border-l-2 border-gray-700/50 pl-6">
              Building scalable, production-ready web applications with clean frontend architecture and reliable backend systems.
            </p>

            {/* Buttons & Socials */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a 
                href="#projects"
                className="
                  px-8 py-4 
                  bg-blue-600 text-white 
                  rounded-full font-semibold 
                  shadow-[0_0_20px_rgba(37,99,235,0.3)]
                  hover:bg-blue-500 hover:-translate-y-1 
                  transition-all duration-300
                  flex items-center gap-2
                "
              >
                View My Work
                <ArrowDown size={18} />
              </a>

              <div className="flex items-center gap-4">
                <SocialIcon href="https://www.linkedin.com/in/rehan42/" icon={<FaLinkedinIn size={18} />} label="LinkedIn" />
                <SocialIcon href="https://github.com/rsayyed591" icon={<FaGithub size={18} />} label="GitHub" />
                <SocialIcon href="https://leetcode.com/u/rehann/" icon={<SiLeetcode size={18} />} label="LeetCode" />
                <SocialIcon href="https://www.hackerrank.com/profile/rehansayyed591" icon={<FaHackerrank size={18} />} label="HackerRank" />
              </div>
            </div>

          </AnimateOnScroll>
        </div>
      </div>

      {/* Decorative Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/20 hidden md:block z-20">
        <ArrowDown size={24} />
      </div>

    </section>
  );
};

export default Hero;