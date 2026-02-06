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
import { useTheme } from '../contexts/ThemeContext';

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
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 100);

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

  // Theme-aware styles
  const isDark = theme === 'dark';

  return (
    <>
      {/* Desktop Sidebar */}
      <nav
        className={`
          fixed left-4 top-1/2 -translate-y-1/2 z-50
          hidden md:flex flex-col gap-4
          p-3 rounded-full
          border transition-all duration-300
          ${isDark
            ? 'bg-slate-900/80 border-slate-700 backdrop-blur-xl shadow-lg shadow-black/20'
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
                ${activeSection === item.section
                  ? 'bg-blue-600 text-white scale-110 shadow-lg shadow-blue-600/30'
                  : isDark
                    ? 'text-slate-400 hover:bg-slate-800 hover:text-blue-400'
                    : 'text-gray-500 hover:bg-blue-50 hover:text-blue-600'
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
                ${isDark
                  ? 'bg-slate-800 text-slate-100 border border-slate-700'
                  : 'bg-white text-gray-900 border border-gray-100'
                }
              `}
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              {item.label}
              <span 
                className={`absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 ${
                  isDark ? 'bg-slate-800' : 'bg-white'
                }`} 
              />
            </span>
          </div>
        ))}
      </nav>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          md:hidden fixed top-5 right-5 z-[60]
          w-12 h-12 rounded-full
          flex items-center justify-center
          transition-all duration-300 shadow-lg
          ${isOpen
            ? 'bg-white text-gray-900 rotate-90'
            : isDark
              ? 'bg-slate-800/90 text-slate-100 backdrop-blur-md border border-slate-700'
              : 'bg-white/90 text-gray-900 backdrop-blur-md border border-gray-200'
          }
        `}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`fixed inset-0 z-50 backdrop-blur-3xl flex flex-col items-center justify-center ${
              isDark ? 'bg-slate-950/95' : 'bg-gray-50/95'
            }`}
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
                      ${activeSection === item.section
                        ? 'text-blue-500 scale-110'
                        : isDark
                          ? 'text-slate-400 hover:text-slate-100'
                          : 'text-gray-500 hover:text-gray-900'
                      }
                    `}
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
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
              className={`absolute bottom-10 text-sm font-mono ${
                isDark ? 'text-slate-500' : 'text-gray-400'
              }`}
              style={{ fontFamily: 'Geist Mono, monospace' }}
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