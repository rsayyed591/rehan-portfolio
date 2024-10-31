import React from 'react';

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
        { name: 'C#', icon: <SiCsharp /> },
        { name: 'C', icon: <SiC /> },
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'JAVA', icon: <FaJava /> },
        { name: 'PYTHON', icon: <SiPython /> },
        { name: 'HTML5', icon: <SiHtml5 /> },
        { name: 'CSS3', icon: <SiCss3 /> },
        { name: 'PHP', icon: <SiPhp /> },
        { name: 'JAVASCRIPT', icon: <SiJavascript /> },
        { name: 'TYPESCRIPT', icon: <SiTypescript /> }
      ],
      Databases: [
        { name: 'MYSQL', icon: <SiMysql /> },
        { name: 'MONGODB', icon: <SiMongodb /> },
        { name: 'FIREBASE', icon: <SiFirebase /> },
        { name: 'ORACLE', icon: <SiOracle /> },
        { name: 'POSTGRESQL', icon: <SiPostgresql /> }
      ],
      Frameworks: [
        { name: 'BOOTSTRAP', icon: <SiBootstrap /> },
        { name: 'ANGULAR', icon: <SiAngular /> },
        { name: 'NODE.JS', icon: <SiNodedotjs /> },
        { name: 'REACT', icon: <SiReact /> },
        { name: 'FLASK', icon: <SiFlask /> },
        { name: 'DJANGO', icon: <SiDjango /> },
        { name: 'ANDROID', icon: <SiAndroid /> },
        { name: 'FLUTTER', icon: <SiFlutter /> }
      ],
      'Cloud/Tools': [
        { name: 'DOCKER', icon: <SiDocker /> },
        { name: 'GCP', icon: <SiGooglecloud /> },
        { name: 'AZURE', icon: <SiMicrosoftazure /> },
        { name: 'GIT', icon: <SiGit /> },
        { name: 'GITHUB', icon: <SiGithub /> }
      ]
    };
  
    return (
      <div id="skills" className="container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#2D2E32] mb-4">SKILLS</h1>
          <div className="h-1 w-16 sm:w-24 bg-blue-600 mx-auto"></div>
        </div>
  
        <div className="space-y-8 sm:space-y-12 sm:ml-24">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category}>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4 sm:mb-6">{category}:</h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center group"
                  >
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                      {/* Semi-circle background */}
                      <div className="absolute inset-0 bg-gray-100 rounded-full"></div>
                      {/* Icon container */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-700">
                        {React.cloneElement(skill.icon, { className: "w-6 h-6 sm:w-8 sm:h-8" })}
                      </div>
                    </div>
                    <span className="mt-2 text-[10px] sm:text-xs font-medium text-gray-700 text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Skills;