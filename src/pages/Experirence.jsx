import React from 'react';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
const experiences = [
  {
    title: "Frontend Intern",
    period: "Mar 2025 - May 2025",
    company: "Apt.",
    location: "Remote",
    achievements: [
      "Built responsive React interfaces used in production, improving usability and performance across devices.",
      "Integrated frontend logic with live backend data to power real-time visualization components.",
      "Collaborated with designers and backend engineers to deliver clean, scalable UI features."
    ]
  },
  {
    title: "Full Stack Intern",
    period: "Dec 2023 - May 2024",
    company: "Aptitech Education Pvt. Ltd.",
    location: "Noida, India",
    achievements: [
      "Gained hands-on experience in backend programming, working extensively with JavaScript, React, HTML, CSS, and DSA.",
      "Contributed to backend feature development and API integration across multiple internal projects.",
      "Refactored over 500+ lines of JavaScript code, improving scalability, readability, and maintainability."
    ]
  },
  {
    title: "Software Engineer Intern",
    period: "Jun 2023 - Aug 2023",
    company: "Visual Labs",
    location: "Mumbai, India",
    achievements: [
      "Developed and optimized full-stack web applications used in real-time scenarios.",
      "Optimized SQL queries, improving database performance by approximately 35%.",
      "Collaborated with cross-functional teams to implement scalable application features."
    ]
  },
  {
    title: "Software Engineer Intern",
    period: "Dec 2022 - Jan 2023",
    company: "Visual Labs",
    location: "Mumbai, India",
    achievements: [
      "Worked on frontend and backend features while strengthening fundamentals in DBMS and Python.",
      "Assisted in building internal tools and dashboards for data-driven workflows.",
      "Improved UI components and application structure through iterative enhancements."
    ]
  }
];

  return (
    <section id="experience" className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Technical Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      {/* Reverted to md:ml-20 (The one that looked good) */}
      <div className="md:ml-20">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          
          {/* Header */}
          <AnimateOnScroll className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Work Experience
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
              My professional journey in the tech industry, building scalable solutions and collaborating with talented teams.
            </p>
          </AnimateOnScroll>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <AnimateOnScroll key={index}>
                  <div className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Timeline Dot (Center) */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full transform -translate-x-1/2 mt-6 z-10 shadow-lg shadow-blue-600/20" />

                    {/* Content Card 
                        FIX: Removed 'w-full' and 'w-auto'.
                        - On mobile: 'ml-12' pushes it right, and without a fixed width, it naturally fills remaining space (fixing overflow).
                        - On desktop: 'md:w-[calc(50%-2rem)]' sets the precise width needed for the timeline.
                    */}
                    <div className="ml-12 md:ml-0 md:w-[calc(50%-2rem)]">
                      <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:border-blue-100 transition-all duration-300 group">
                        
                        {/* Header Section */}
                        <div className="flex flex-col gap-1 mb-6">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {exp.title}
                            </h3>
                            <div className="hidden sm:flex items-center gap-1 text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                              <Calendar size={12} />
                              {exp.period}
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium">
                            <span className="flex items-center gap-1.5">
                              <Briefcase size={16} className="text-blue-500" />
                              {exp.company}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin size={16} className="text-gray-400" />
                              {exp.location}
                            </span>
                          </div>

                          {/* Mobile Date (Visible only on small screens) */}
                          <div className="sm:hidden mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full w-fit">
                            <Calendar size={12} />
                            {exp.period}
                          </div>
                        </div>

                        {/* Achievements List */}
                        <ul className="space-y-3">
                          {exp.achievements.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                              <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;