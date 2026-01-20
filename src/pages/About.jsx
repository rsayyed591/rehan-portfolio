import { Download, Terminal, ArrowRight } from 'lucide-react';
import { AnimateOnScroll } from '../components/AnimateOnScroll';

const About = () => {
  return (
    <section id="about" className="relative py-28 bg-gray-50 overflow-hidden">
      {/* Background Decorations (Matching Skills & Contact) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute right-0 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-blue-400 opacity-10 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <AnimateOnScroll className="mb-20">
          <div className="flex flex-col md:items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              About Me
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 rounded-full mb-6" />
            <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">
              Developer · Problem Solver · Engineer
            </p>
          </div>
        </AnimateOnScroll>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image Column */}
          <AnimateOnScroll className="relative group flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Image Container */}
              <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl border border-gray-100 bg-white">
                <img
                  src="./about.JPG"
                  alt="Rehan Sayyed"
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
              </div>
              
              {/* Decorative Tech Frame Behind */}
              <div className="absolute -z-10 top-6 -right-6 w-full h-full border-2 border-blue-600/20 rounded-3xl translate-x-0 translate-y-0 lg:translate-x-4 lg:translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
              
              {/* Dot Pattern Accent */}
              <div className="absolute -z-20 -bottom-10 -left-10 w-32 h-32 opacity-20 text-blue-600">
                <svg width="100%" height="100%" fill="currentColor">
                  <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Text Column */}
          <AnimateOnScroll>
            <div className="space-y-8">

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <Terminal size={24} />
                </div>
                Building Reliable Web Systems
              </h3>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  I’m a <span className="text-gray-900 font-bold">full-stack developer</span> focused on building production-ready web applications with clean architecture and long-term scalability in mind.
                </p>

                <p>
                  I work across the stack using <span className="text-blue-600 font-bold">React, Next.js, Node.js, and SQL</span>, ensuring performance, maintainability, and a strong user experience.
                </p>

                <p>
                  Alongside real-world development, I continuously sharpen my problem-solving skills through structured <span className="text-gray-900 font-bold">DSA practice</span>.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <a
                  href="/rehan_resume.pdf"
                  download
                  className="
                    group
                    inline-flex items-center gap-3
                    px-8 py-4
                    bg-gray-900 text-white
                    rounded-xl
                    font-semibold text-lg
                    shadow-xl shadow-gray-900/20
                    hover:bg-blue-600 hover:shadow-blue-600/30 hover:-translate-y-1
                    transition-all duration-300
                  "
                >
                  <Download className="group-hover:animate-bounce" size={20} />
                  Download Resume
                </a>
              </div>

            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
};

export default About;