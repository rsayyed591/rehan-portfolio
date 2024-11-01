import React from 'react';

const Experience = () => {
    const experiences = [
        {
            title: "FULL STACK INTERN",
            period: "Dec 2023 - May 2024",
            company: "Aptitech Education Pvt. Ltd., Noida, India",
            achievements: [
              "Gained hands-on experience in backend programming, diving deep into DSA, JavaScript, HTML, CSS, and React.",
              "Played a vital role in the backend team, contributing to various development tasks and projects.",
              "Showcased strong technical abilities and a keen willingness to learn, significantly impacting project success."
            ]
          },
          {
            title: "SOFTWARE ENGINEER INTERN",
            period: "June 2023 - Aug 2023",
            company: "Visual Labs, Mumbai, India",
            achievements: [
              "Collaborated with cross-functional teams to design and implement new UI features, improving user interaction and satisfaction.",
              "Enhanced backend functionality with optimized SQL queries, reducing load times by 30%.",
              "Worked with team members to troubleshoot and resolve performance issues, ensuring efficient application performance."
            ]
          },
          {
          title: "SOFTWARE ENGINEER INTERN",
          period: "Dec 2022 - Jan 2023",
          company: "Visual Labs, Mumbai, India",
          achievements: [
            "Enhanced skills in DBMS, Python, and C++ while refining algorithms and UI features.",
            "Led project teams with effective collaboration and leadership, steering projects to success.",
            "Developed real-time data visualization tools and websites, demonstrating versatility and innovation."
          ]
        }        
    ];
    
    

  return (
    <section id="experience" className="container mx-auto px-4 py-8 sm:py-16">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2E32] mb-4">
          WORK EXPERIENCE
        </h2>
        <div className="relative">
          <div className="h-px w-48 bg-gray-200 mx-auto"></div>
          <div className="h-1 w-12 bg-blue-600 mx-auto -mt-[1px]"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="border-l-2 border-blue-600 ml-6 sm:ml-8 space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 sm:pl-10">
              {/* Timeline dot */}
              <div className="absolute left-0 w-4 h-4 bg-white border-2 border-blue-600 rounded-full transform -translate-x-1/2 mt-1.5"></div>
              
              {/* Content */}
              <div className="resume-item">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">
                  {exp.title}
                </h3>
                <h4 className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg mb-2">
                  {exp.period}
                </h4>
                <h5 className="text-blue-600 italic mb-4">{exp.company}</h5>
                <ul className="space-y-3 list-disc pl-5">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-700">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;