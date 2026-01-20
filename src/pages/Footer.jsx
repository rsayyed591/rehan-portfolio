import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white border-t border-gray-200 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Main Container (Offset for Sidebar) */}
        <div className="container mx-auto px-6 py-8 max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Left: Brand & Role */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                Rehan Sayyed
              </h3>
              <p className="text-sm text-gray-500 font-medium mt-1">
                Full-Stack Developer · React · Node.js
              </p>
            </div>

            {/* Middle: Copyright & Built With */}
            <div className="text-center">
              <p className="text-sm text-gray-400 flex items-center justify-center gap-1.5">
                © {new Date().getFullYear()} Made with 
                <FaHeart className="text-red-400 animate-pulse" size={12} /> 
                by Rehan
              </p>
            </div>

            {/* Right: Socials & Back to Top */}
            <div className="flex items-center gap-4">
              <SocialLink 
                href="https://www.linkedin.com/in/rehan42/" 
                icon={<FaLinkedin size={18} />} 
              />
              <SocialLink 
                href="https://github.com/rsayyed591" 
                icon={<FaGithub size={18} />} 
              />
              
              {/* Divider */}
              <div className="h-6 w-px bg-gray-200 mx-1" />

              <button
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
                aria-label="Scroll to top"
              >
                <ArrowUp size={18} />
              </button>
            </div>

          </div>
        </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="
      p-2 rounded-lg
      text-gray-500
      hover:text-blue-600 hover:bg-blue-50
      transition-all duration-300
    "
  >
    {icon}
  </a>
);

export default Footer;