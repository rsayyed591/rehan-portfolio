import React from 'react';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import {
  SiCsharp,
  SiC,
  SiCplusplus,
  SiPython,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiOracle,
  SiPostgresql,
  SiBootstrap,
  SiAngular,
  SiNodedotjs,
  SiReact,
  SiFlask,
  SiDjango,
  SiAndroid,
  SiFlutter,
  SiDocker,
  SiGooglecloud,
  SiMicrosoftazure,
  SiGit,
  SiGithub
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const Skills = () => {
  const skillsData = {
    Languages: [
      { name: 'C', icon: <SiC className="text-[#00599C]" /> },
      { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" /> },
      { name: 'JAVA', icon: <FaJava className="text-[#007396]" /> },
      { name: 'PYTHON', icon: <SiPython className="text-[#3776AB]" /> },
      { name: 'HTML5', icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: 'CSS3', icon: <SiCss3 className="text-[#1572B6]" /> },
      { name: 'PHP', icon: <SiPhp className="text-[#777BB4]" /> },
      { name: 'JAVASCRIPT', icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: 'TYPESCRIPT', icon: <SiTypescript className="text-[#3178C6]" /> }
    ],
    Databases: [
      { name: 'MYSQL', icon: <SiMysql className="text-[#4479A1]" /> },
      { name: 'MONGODB', icon: <SiMongodb className="text-[#47A248]" /> },
    ],
    Frameworks: [
      { name: 'BOOTSTRAP', icon: <SiBootstrap className="text-[#7952B3]" /> },
      { name: 'NODE.JS', icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: 'REACT', icon: <SiReact className="text-[#61DAFB]" /> },
      { name: 'DJANGO', icon: <SiDjango className="text-[#092E20]" /> },
    ],
    'Cloud/Tools': [
      { name: 'GIT', icon: <SiGit className="text-[#F05032]" /> },
      { name: 'GITHUB', icon: <SiGithub className="text-[#181717]" /> }
    ]
  };

  return (
    <div id="skills" className="container mx-auto px-4 py-8 sm:py-16">
      <AnimateOnScroll className="text-center mb-8 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#2D2E32] mb-4">SKILLS</h1>
        <div className="h-1 w-16 sm:w-24 bg-blue-600 mx-auto"></div>
      </AnimateOnScroll>

      <div className="space-y-8 sm:space-y-12 sm:ml-24">
        {Object.entries(skillsData).map(([category, skills]) => (
          <AnimateOnScroll key={category}>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4 sm:mb-6">{category}:</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center group"
                >
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                    {/* Semi-circle background */}
                    <div className="absolute inset-0 bg-gray-100 rounded-full transition-all duration-300 group-hover:bg-gray-200 shadow-md group-hover:shadow-lg"></div>
                    {/* Icon container */}
                    <div className="absolute inset-0 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                      {React.cloneElement(skill.icon, { 
                        className: `w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110 ${skill.icon.props.className}` 
                      })}
                    </div>
                  </div>
                  <span className="mt-2 text-[10px] sm:text-xs font-medium text-gray-700 text-center group-hover:text-gray-900 transition-all duration-300 group-hover:-translate-y-0.5">
                    {skill.name}
                  </span>
                </div>
              ))}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    );
  };
  
  export default Skills;