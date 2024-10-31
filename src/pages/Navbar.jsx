// Navbar.jsx
import React, { useState } from 'react';
import { Home, User, Code2, GraduationCap, Briefcase, Trophy, Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { icon: <Home size={28} />, label: 'Home', section: 'home' },
    { icon: <User size={28} />, label: 'About', section: 'about' },
    { icon: <Code2 size={28} />, label: 'Skills', section: 'skills' },
    { icon: <GraduationCap size={28} />, label: 'Education', section: 'education' },
    { icon: <Briefcase size={28} />, label: 'Work Experience', section: 'experience' },
    { icon: <Trophy size={28} />, label: 'Projects', section: 'projects' },
    { icon: <Mail size={28} />, label: 'Contact', section: 'contact' }
  ];

  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed left-0 top-0 h-screen w-20 hidden md:flex flex-col items-center justify-center z-50">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleScroll(item.section)}
            className="group relative flex justify-center items-center w-14 h-14 my-3 rounded-full bg-white text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg"
          >
            {item.icon}
            {/* Tooltip */}
            <span className="absolute left-20 bg-white px-4 py-2 rounded-lg text-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap shadow-lg">
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-2"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 bg-white w-[70%] z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full pt-20 px-4">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.section)}
              className="flex items-center space-x-4 py-4 text-gray-800 hover:text-blue-600 transition-colors"
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;