import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AnimateOnScroll } from "../components/AnimateOnScroll";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden bg-gray-50"
    >
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]" />

      <div className="relative container mx-auto px-6 max-w-6xl z-10">
        
        {/* Header */}
        <AnimateOnScroll className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Let’s Connect
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Whether you have a question, a project idea, or just want to say hi, I’ll try my best to get back to you!
          </p>
        </AnimateOnScroll>
        <div className="md:ml-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Context & Socials */}
          <AnimateOnScroll className="lg:pt-10">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900">
                Rehan Sayyed
              </h3>

              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  I am a full-stack developer passionate about building digital products that are not just functional, but performant and user-centric.
                </p>
                <p>
                  Currently open to <span className="font-semibold text-blue-600">internships</span> and <span className="font-semibold text-blue-600">collaborations</span>.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <SocialBtn 
                  href="https://www.linkedin.com/in/rehan42/" 
                  icon={<FaLinkedin size={20} />} 
                  label="LinkedIn"
                  colorClass="hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white"
                />
                
                <SocialBtn 
                  href="https://github.com/rsayyed591" 
                  icon={<FaGithub size={20} />} 
                  label="GitHub"
                  colorClass="hover:bg-gray-900 hover:border-gray-900 hover:text-white"
                />
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right Column: Contact Card */}
          <AnimateOnScroll>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 relative group overflow-hidden">
              {/* Card Hover Gradient Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110 duration-500" />
              
              <div className="space-y-8 relative z-10">
                <ContactItem
                  icon={<Mail size={22} />}
                  label="Email Me"
                  value="rehansayyed591@gmail.com"
                  link="mailto:rehansayyed591@gmail.com"
                />

                <ContactItem
                  icon={<Phone size={22} />}
                  label="Call Me"
                  value="+91 98331 65762"
                  link="tel:+919833165762"
                />

                <ContactItem
                  icon={<MapPin size={22} />}
                  label="Location"
                  value="Mumbai, India"
                />

                <div className="pt-6">
                  <a
                    href="mailto:rehansayyed591@gmail.com"
                    className="
                      w-full flex items-center justify-center gap-3
                      px-8 py-4
                      bg-gray-900 text-white
                      rounded-xl font-semibold text-lg
                      shadow-lg shadow-gray-900/20
                      hover:bg-blue-600 hover:shadow-blue-600/30 hover:-translate-y-1
                      transition-all duration-300
                    "
                  >
                    Start a Conversation
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
      </div>
    </section>
  );
};

// Helper Components for cleaner code

const SocialBtn = ({ href, icon, label, colorClass }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`
      flex items-center gap-3 px-6 py-3 
      rounded-xl border border-gray-200 
      text-gray-700 font-medium
      transition-all duration-300
      ${colorClass}
    `}
  >
    {icon}
    <span>{label}</span>
  </a>
);

const ContactItem = ({ icon, label, value, link }) => (
  <div className="flex items-start gap-5">
    <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-blue-50 text-blue-600 rounded-2xl">
      {icon}
    </div>
    <div className="pt-1">
      <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
        {label}
      </p>
      {link ? (
        <a
          href={link}
          className="text-lg md:text-xl font-medium text-gray-900 hover:text-blue-600 transition-colors break-all"
        >
          {value}
        </a>
      ) : (
        <p className="text-lg md:text-xl font-medium text-gray-900">
          {value}
        </p>
      )}
    </div>
  </div>
);

export default Contact;