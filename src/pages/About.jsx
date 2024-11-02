import { BriefcaseBusiness, Braces, FileText, Medal, Download } from 'lucide-react';
import { AnimateOnScroll } from '../components/AnimateOnScroll';

const About = () => {
    return (
        <div id='about' className="container mx-auto px-4 py-12">
            <AnimateOnScroll className="text-center mb-16">
                <h1 className="text-3xl md:text-4xl font-bold text-[#2D2E32] mb-4">ABOUT</h1>
                <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
            </AnimateOnScroll>
            
            <div className="flex flex-col lg:flex-row gap-12 mb-16 max-w-7xl mx-auto sm:ml-24">
                <AnimateOnScroll className="lg:w-1/3">
                    <div className="w-full">
                        <img 
                            src="./about.JPG" 
                            alt="Profile" 
                            className="w-full h-auto rounded-lg shadow-lg object-cover" 
                        />
                    </div>
                </AnimateOnScroll>
                <AnimateOnScroll className="lg:w-2/3">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-[#2D2E32] text-lg leading-relaxed mb-6">
                            Hi! I'm Rehan Feroz Sayyed, a final-year Computer Engineering student from Mumbai with a passion for creating efficient, engaging web applications. My expertise spans both front-end and back-end development, and I'm skilled in frameworks like React, Node.js, and Django, along with languages such as JavaScript, Java, and Python.
                        </p>
                        <p className="text-[#2D2E32] text-lg leading-relaxed mb-6">
                            Over the course of my studies, I've undertaken diverse projects, including a recent one where I developed a full-stack solution using Next.js, demonstrating my adaptability and eagerness to explore cutting-edge tools. I also enjoy working on challenging data structures and algorithms to strengthen my problem-solving skills, which I'm currently refining through daily practice.
                        </p>
                        <p className="text-[#2D2E32] text-lg leading-relaxed mb-6">
                            Besides coding, I'm enthusiastic about sharing knowledge, which led me to participate in teaching computer science basics. When I'm not immersed in tech, you might find me exploring new cultures or volunteering within my community.
                        </p>
                        <p className="text-[#2D2E32] text-lg leading-relaxed mb-8">
                            I'm excited to continue growing in the field of web and software development, aiming to create innovative solutions that make a difference. Thanks for stopping by, and feel free to connect!
                        </p>
                        <a 
                            href="/rehan_resume.pdf" 
                            download="Rehan_Feroz_Sayyed_Resume" 
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors"
                        >
                            <Download className="mr-2 h-5 w-5" />
                            View Resume
                        </a>
                    </div>
                </AnimateOnScroll>
            </div>
            
            <AnimateOnScroll className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {[
                    { Icon: BriefcaseBusiness, count: 3, label: "Internships" },
                    { Icon: Braces, count: 32, label: "Projects" },
                    { Icon: FileText, count: 2, label: "Research" },
                    { Icon: Medal, count: 2, label: "Activities & Awards" },
                ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="flex items-center justify-center h-16 w-16 bg-blue-600 rounded-full mb-4 shadow-lg">
                            <item.Icon size={32} className="text-white"/>
                        </div>
                        <p className="text-2xl font-bold text-[#2D2E32] mb-2">{item.count}</p>
                        <p className="text-[#2D2E32] text-center font-medium">{item.label}</p>
                    </div>
                ))}
            </AnimateOnScroll>
        </div>
    );
}

export default About;