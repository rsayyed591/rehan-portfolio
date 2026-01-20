import { GraduationCap, Award, Calendar, School } from 'lucide-react';
import { AnimateOnScroll } from '../components/AnimateOnScroll';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Engineering',
      institute: 'M.H. Saboo Siddik College of Engineering',
      period: '2021 – 2025',
      score: 'CGPA: 8.09',
      highlights: [
        'Head Coordinator & Technical Lead, Programmers’ Club',
        '3rd Place – Resilience Masters Hackathon'
      ]
    },
    {
      degree: 'Higher Secondary Certificate (Science)',
      institute: 'M.H. Saboo Siddik Junior College',
      period: '2019 – 2021',
      score: 'Score: 81.67%',
      highlights: []
    }
  ];

  return (
    <section id="education" className="relative py-28 bg-gray-50 overflow-hidden">
      {/* Background Decorations (Consistent with other files) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 -z-10 h-[300px] w-[300px] rounded-full bg-blue-400 opacity-20 blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        {/* Header */}
        <AnimateOnScroll className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Education
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Academic background and key milestones in my engineering journey.
          </p>
        </AnimateOnScroll>
        
        <div className="md:ml-10">
        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {education.map((edu, index) => (
            <AnimateOnScroll key={index} className="h-full">
              <div className="group h-full flex flex-col bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-blue-100 transition-all duration-300 relative overflow-hidden">
                
                {/* Decorative Hover Blob */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Top Meta: Icon & Date */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                      <GraduationCap size={28} />
                    </div>
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-sm font-semibold text-gray-500">
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="mb-6 space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                      {edu.degree}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-gray-600 font-medium">
                      <School size={18} className="text-blue-500 shrink-0" />
                      {edu.institute}
                    </div>

                    <div className="pt-2">
                       <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-sm font-bold rounded-lg border border-green-100">
                         {edu.score}
                       </span>
                    </div>
                  </div>

                  {/* Highlights Section (Pushed to bottom if exists) */}
                  {edu.highlights.length > 0 && (
                    <div className="mt-auto pt-6 border-t border-gray-100">
                      <ul className="space-y-3">
                        {edu.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600 text-sm font-medium">
                            <Award size={16} className="text-blue-500 mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
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

export default Education;