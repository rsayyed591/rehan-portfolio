import { useEffect, useState } from 'react';
import {
  Home,
  User,
  Code2,
  GraduationCap,
  Briefcase,
  Trophy,
  Mail,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { icon: <Home size={20} />, label: 'Home', section: 'home' },
  { icon: <User size={20} />, label: 'About', section: 'about' },
  { icon: <Code2 size={20} />, label: 'Skills', section: 'skills' },
  { icon: <GraduationCap size={20} />, label: 'Education', section: 'education' },
  { icon: <Briefcase size={20} />, label: 'Experience', section: 'experience' },
  { icon: <Trophy size={20} />, label: 'Projects', section: 'projects' },
  { icon: <Mail size={20} />, label: 'Contact', section: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll for styling and active section detection
  useEffect(() => {
    const handleScroll = () => {
      // 1. Detect if scrolled past hero for navbar styling
      setIsScrolled(window.scrollY > window.innerHeight - 100);

      // 2. Detect active section
      const sections = navItems.map(item => document.getElementById(item.section));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* --------------------------------------------------
        DESKTOP SIDEBAR 
        --------------------------------------------------
      */}
      <nav
        className={`
          fixed left-4 top-1/2 -translate-y-1/2 z-50
          hidden md:flex flex-col gap-4
          p-3 rounded-full
          border transition-all duration-300
          ${
            !isScrolled
              ? 'bg-white/10 border-white/20 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]'
              : 'bg-white/80 border-gray-200 backdrop-blur-xl shadow-lg'
          }
        `}
      >
        {navItems.map((item) => (
          <div key={item.section} className="relative group">
            <button
              onClick={() => scrollToSection(item.section)}
              className={`
                relative w-11 h-11 rounded-full flex items-center justify-center
                transition-all duration-300
                ${
                  activeSection === item.section
                    ? 'bg-blue-600 text-white scale-110 shadow-lg shadow-blue-600/30'
                    : isScrolled
                      ? 'text-gray-500 hover:bg-blue-50 hover:text-blue-600'
                      : 'text-white/80 hover:bg-white/20 hover:text-white'
                }
              `}
            >
              {item.icon}
            </button>

            {/* Tooltip */}
            <span
              className={`
                absolute left-14 top-1/2 -translate-y-1/2
                px-3 py-1.5 rounded-lg
                text-sm font-medium
                opacity-0 -translate-x-2 pointer-events-none
                group-hover:opacity-100 group-hover:translate-x-0
                transition-all duration-300
                whitespace-nowrap shadow-md
                ${
                  isScrolled 
                    ? 'bg-white text-gray-900 border border-gray-100' 
                    : 'bg-black/80 text-white border border-white/10'
                }
              `}
            >
              {item.label}
              {/* Little arrow pointing left */}
              <span 
                className={`absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 ${
                  isScrolled ? 'bg-white' : 'bg-black/80'
                }`} 
              />
            </span>
          </div>
        ))}
      </nav>

      {/* --------------------------------------------------
        MOBILE TOGGLE BUTTON
        --------------------------------------------------
      */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          md:hidden fixed top-5 right-5 z-[60]
          w-12 h-12 rounded-full
          flex items-center justify-center
          transition-all duration-300 shadow-lg
          ${
            isOpen
              ? 'bg-white text-gray-900'
              : isScrolled
                ? 'bg-white/90 text-gray-900 backdrop-blur-md'
                : 'bg-white/10 text-white backdrop-blur-md border border-white/20'
          }
        `}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* --------------------------------------------------
        MOBILE MENU OVERLAY 
        --------------------------------------------------
      */}
      <div className="md:hidden fixed top-6 right-6 z-[60]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            w-12 h-12 rounded-full
            flex items-center justify-center
            transition-all duration-300 shadow-lg
            ${
              isOpen
                ? 'bg-white text-gray-900 rotate-90'
                : isScrolled
                  ? 'bg-white/90 text-gray-900 backdrop-blur-md'
                  : 'bg-white/10 text-white backdrop-blur-md border border-white/20'
            }
          `}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-gray-950/95 backdrop-blur-3xl flex flex-col items-center justify-center"
          >
            <motion.nav 
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              className="flex flex-col gap-8 text-center"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.section}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <button
                    onClick={() => scrollToSection(item.section)}
                    className={`
                      flex items-center gap-4 text-3xl font-bold tracking-tight
                      transition-all duration-300
                      ${
                        activeSection === item.section
                          ? 'text-blue-500 scale-110'
                          : 'text-gray-400 hover:text-white'
                      }
                    `}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                </motion.div>
              ))}
            </motion.nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 text-gray-500 text-sm font-mono"
            >
              Rehan Sayyed &copy; 2026
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;