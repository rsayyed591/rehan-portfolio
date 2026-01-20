import React from 'react';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { Layers, Database, Palette, Wrench } from 'lucide-react'; // Category Icons
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiPython,
  SiDjango,
} from 'react-icons/si';

const Skills = () => {
  const skillsData = [
    {
      category: 'Core Stack',
      icon: <Layers size={20} className="text-blue-600" />,
      skills: [
        { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
        { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
      ],
    },
    {
      category: 'Backend & Data',
      icon: <Database size={20} className="text-blue-600" />,
      skills: [
        { name: 'Express.js', icon: <SiExpress className="text-black" /> },
        { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
        { name: 'Python', icon: <SiPython className="text-[#3776AB]" /> },
      ],
    },
    {
      category: 'Styling & State',
      icon: <Palette size={20} className="text-blue-600" />,
      skills: [
        { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: 'Bootstrap', icon: <SiBootstrap className="text-[#7952B3]" /> },
        { name: 'Redux', icon: <SiRedux className="text-[#764ABC]" /> },
        { name: 'CSS3', icon: <SiCss3 className="text-[#1572B6]" /> },
      ],
    },
    {
      category: 'Tools & DevOps',
      icon: <Wrench size={20} className="text-blue-600" />,
      skills: [
        { name: 'Git', icon: <SiGit className="text-[#F05032]" /> },
        { name: 'GitHub', icon: <SiGithub className="text-[#181717]" /> },
        { name: 'Django', icon: <SiDjango className="text-[#092E20]" /> },
        { name: 'HTML5', icon: <SiHtml5 className="text-[#E34F26]" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-28 bg-gray-50 relative overflow-hidden">
      {/* Background Decorations (Matching Contact.jsx) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 -z-10 h-[300px] w-[300px] rounded-full bg-blue-400 opacity-20 blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* Header */}
        <AnimateOnScroll className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Technical Skills
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            A comprehensive toolkit focused on scalable web architecture and modern user interfaces.
          </p>
        </AnimateOnScroll>

        <div className="md:ml-20">
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {skillsData.map((section, idx) => (
            <AnimateOnScroll key={idx} className="h-full">
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-blue-100 transition-colors h-full flex flex-col">
                
                {/* Category Title */}
                <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {section.category}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {section.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="group flex flex-col items-center justify-center p-4 rounded-xl hover:bg-blue-50/50 transition-all duration-300 border border-transparent hover:border-blue-100"
                    >
                      {/* Icon with Grayscale-to-Color Effect */}
                      <div className="text-3xl mb-3 text-gray-400 group-hover:text-current filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                        {skill.icon}
                      </div>
                      
                      <span className="text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Skills;