import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Education = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const educationData = [
    {
      logo: "./school.jpeg",
      institution: "Sheth Madhavdas Amersey High School",
      degree: "Secondary School Certificate Examination",
      duration: "July 2009 - May 2019",
      gpa: "Percentage 71%",
      activities: [
        "Head Boy of the School",
      ]
    },
    {
      logo: "./college.jpg",
      institution: "M.H.Saboo Siddik Technical High School and Junior College",
      degree: "Higher Secondary Certificate Examination",
      duration: "June 2019 - April 2021",
      gpa: "Percentage 83.15%",
      activities: []
    },
    {
      logo: "./college.jpg",
      institution: "M.H.Saboo Siddik Technical High School and Junior College",
      degree: "Bachelor of Computer Engineering",
      duration: "November 2021 - Present",
      gpa: "8.08",
      activities: [
        "Technical Head of Programmers' Club",
        "Head Coordinator of Programmers' Club",
        "Won 3rd Price in Hackathon"
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === educationData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? educationData.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="education" className="container mx-auto px-4 py-8 sm:py-16">
      <div className="text-center mb-8 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#2D2E32] mb-4">EDUCATION</h1>
        <div className="h-1 w-16 sm:w-24 bg-blue-600 mx-auto"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="relative h-[400px] sm:h-[500px] overflow-hidden rounded-xl bg-white">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-all duration-500 ease-in-out transform 
                ${index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
            >
              <div className="flex flex-col items-center justify-center h-full p-4 sm:p-8">
                <img
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  className="w-24 h-24 sm:w-32 sm:h-32 mb-4 sm:mb-6 object-contain"
                />
                <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">{edu.institution}</h2>
                <h3 className="text-lg sm:text-xl text-gray-600 mb-2">{edu.degree}</h3>
                <p className="text-sm sm:text-base text-gray-500 mb-2 sm:mb-4">{edu.duration}</p>
                <p className="text-base sm:text-lg font-semibold text-blue-600 mb-2 sm:mb-4">{edu.gpa}</p>
                {edu.activities.length > 0 && (
                  <ul className="text-center space-y-1 sm:space-y-2">
                    {edu.activities.map((activity, idx) => (
                      <li key={idx} className="text-sm sm:text-base text-gray-600 italic">{activity}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
          </button>

          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
            {educationData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 
                  ${index === currentSlide ? 'bg-blue-600 w-4 sm:w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;