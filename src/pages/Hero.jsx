// Hero.jsx
import React, { useState, useEffect } from 'react';
import { FaLinkedinIn, FaGithub, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { AnimateOnScroll } from '../components/AnimateOnScroll';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = [
    'BE in Computer Engineering',
    'FullStack Developer',
    'Web Developer',
    'Frontend Developer',
    'Software Developer'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, textArray]);
  
const SocialIcon = ({ href, icon, label }) => (
<a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-center items-center w-10 h-10 rounded-full text-gray-800 hover:text-blue-600 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
    aria-label={label}
>
    {icon}
</a>
);

return (
    <div id='home' className="relative min-h-screen flex flex-col justify-center overflow-hidden text-gray-800">
      {/* Background with blur effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter opacity-70 z-0"
        style={{ 
          backgroundImage: `url(${window.innerWidth <= 768 ? './mhero.jpg' : './hero.jpg'})`,
          backgroundPosition: 'center center'
        }}
      />

      {/* Content */}
      <AnimateOnScroll className="relative z-10 px-6 md:px-32">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
          Rehan Sayyed
        </h1>
        <div className="flex flex-wrap items-center gap-2 text-xl md:text-2xl">
          <span>I'm a</span>
          <span className="text-blue-600 min-h-[2rem] flex items-center">
            {text}
          </span>
          <span className="opacity-70 animate-blink">|</span>
        </div>
        <div className="mt-6 md:mt-8 flex gap-4">
          <SocialIcon href="https://www.linkedin.com/in/rehan42/" icon={<FaLinkedinIn size={20} />} label="LinkedIn" />
          <SocialIcon href="https://github.com/rsayyed591" icon={<FaGithub size={20} />} label="GitHub" />
          <SocialIcon href="https://leetcode.com/u/rehann/" icon={<SiLeetcode size={20} />} label="LeetCode" />
          <SocialIcon href="https://www.hackerrank.com/profile/rehansayyed591" icon={<FaHackerrank size={20} />} label="HackerRank" />
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default Hero;