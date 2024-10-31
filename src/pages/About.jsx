import { BriefcaseBusiness, Braces, FileText, Medal, Download } from 'lucide-react';

const About = () => {
    return (
      <>
        <div className="container ml-auto mt-10 px-5">
            <div className="text-center items-center m-10">
                <p className="font-bold text-2xl md:text-4xl text-gray-500">About</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center m-5 space-y-5 md:space-y-0 md:space-x-5">
                <img 
                    src="./about.JPG" 
                    alt="About Image" 
                    className="w-full h-auto max-h-[26rem] mr-15 object-cover" 
                />
                <div className="max-w-3xl">
                    <p className="font-thin text-sm md:text-base leading-relaxed">
                        Hi! I'm Rehan Feroz Sayyed, a final-year Computer Engineering student from Mumbai with a passion for creating efficient, engaging web applications. My expertise spans both front-end and back-end development, and I’m skilled in frameworks like React, Node.js, and Django, along with languages such as JavaScript, Java, and Python.<br/><br/>
                        
                        Over the course of my studies, I've undertaken diverse projects, including a recent one where I developed a full-stack solution using Next.js, demonstrating my adaptability and eagerness to explore cutting-edge tools. I also enjoy working on challenging data structures and algorithms to strengthen my problem-solving skills, which I’m currently refining through daily practice.<br/><br/>
                        
                        Besides coding, I’m enthusiastic about sharing knowledge, which led me to participate in teaching computer science basics. When I'm not immersed in tech, you might find me exploring new cultures or volunteering within my community.<br/><br/>
                        
                        I’m excited to continue growing in the field of web and software development, aiming to create innovative solutions that make a difference. Thanks for stopping by, and feel free to connect!
                    </p>
                    <a href="/rehan_resume.pdf" download="Rehan_Feroz_Sayyed_Resume" className="text-blue-700 mt-3 inline-block">
                        <Download size={12} className="inline-block" /> MY RESUME
                    </a>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-around m-5 space-y-5 md:space-x-5 gap-5">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex items-center justify-center h-12 w-12 bg-blue-600 rounded-full">
                        <BriefcaseBusiness size={28} className="text-white"/>
                    </div>
                    <p className="my-2 text-2xl font-semibold">3</p>
                    <p>Internships</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex items-center justify-center h-12 w-12 bg-blue-600 rounded-full">
                        <Braces size={28} className="text-white"/>
                    </div>
                    <p className="my-2 text-2xl font-semibold">32</p>
                    <p>Projects</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex items-center justify-center h-12 w-12 bg-blue-600 rounded-full">
                        <FileText size={28} className="text-white"/>
                    </div>
                    <p className="my-2 text-2xl font-semibold">2</p>
                    <p>Research</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex items-center justify-center h-12 w-12 bg-blue-600 rounded-full">
                        <Medal size={28} className="text-white"/>
                    </div>
                    <p className="my-2 text-2xl font-semibold">2</p>
                    <p>Activities & Awards</p>
                </div>
            </div>
        </div>
      </>
    );
}

export default About;
