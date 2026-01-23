import React from 'react';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FolderGit2 } from 'lucide-react'; 

const Projects = () => {
  const projects = [
    {
      title: "Ishaara V1.0",
      image: "/projects/ishaarav1.png",
      description: "A web-based Indian Sign Language (ISL) translator that allows users to learn, translate, and explore ISL signs and sentences.",
      technologies: ["React", "CSS", "Node.js", "RoboFlow"],
      githubUrl: "https://github.com/vnrr2023/Ishaara-Website-2.0",
      liveUrl: "https://ishaara.netlify.app/",
    },
    {
      title: "Ishaara V2.0",
      image: "/projects/ishaarav2.png",
      description: "An updated version of Ishaara, a web-based Indian Sign Language (ISL) translator offering various resources and tools to engage with ISL.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
      githubUrl: "https://github.com/rsayyed591/Noname.json_LOC7",
      liveUrl: "https://ishaara.vercel.app/",
    },
    {
      title: "Hack-Manager",
      image: "/projects/hack-management.png",
      description: "A platform for managing hackathons, built with React, Node.js, and styled using Tailwind CSS. It facilitates participant registration, team formation, judging, and event management.",
      technologies: ["React", "Node.js", "Tailwind CSS"],
      githubUrl: "https://github.com/rsayyed591/Hack-Management-Frontend",
      liveUrl: "https://err404-manager.vercel.app/",
    },
    {
      title: "Medwell V1.0",
      image: "/projects/medwellv1.png",
      description: "A user-friendly web application designed to help patients and healthcare providers manage and visualize medical reports and data efficiently.",
      technologies: ["React", "Tailwind CSS", "Node.js", "Framer-motion", "jsPDF"],
      githubUrl: "https://github.com/rsayyed591/Medwell-Frontend",
      liveUrl: "https://imedwell.vercel.app/",
    },
    {
      title: "Medwell V2.0",
      image: "/projects/medwellv2.png",
      description: "An updated version of Medwell-Frontend, designed to help patients and healthcare providers manage and visualize medical reports and data efficiently.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "Shadcn"],
      githubUrl: "https://github.com/vnrr2023/Medwell-Frontend-2",
      liveUrl: "https://medwell2.vercel.app/",
    },
    {
      title: "AnnSampark",
      image: "/projects/annsampark.png",
      description: "A platform that connects surplus food donors with NGOs and food banks, ensuring real-time redistribution of food to those in need.",
      technologies: ["Next.js", "Node.js", "Tailwind CSS", "Shadcn"],
      githubUrl: "https://github.com/rsayyed591/Noname.json_LOC7",
      liveUrl: "https://annsampark.vercel.app/",
    },
    {
      title: "CSGPT AI",
      image: "/projects/csgpt.png",
      description: "A web-based AI model that generates answers from textbooks, notes, and other study materials, functioning like a chatbot.",
      technologies: ["React", "CSS", "Node.js", "MarkDown"],
      githubUrl: "https://github.com/rsayyed591/NoName.json_AiCodeX",
      liveUrl: "https://csgptai.vercel.app/",
    },
    {
      title: "Error 404 Hackathon",
      image: "/projects/error404.png",
      description: "A project developed during the Error 404 Hackathon, featuring a website for hackathon registration and updates.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
      githubUrl: "https://github.com/rsayyed591/Err_4046.0v2",
      liveUrl: "https://err-4046-0v2.vercel.app/",
    },
    {
      title: "2048 - The Game",
      image: "/projects/2048.png",
      description: "An interactive web-based version of the classic 2048 puzzle, built with Next.js and React using TypeScript.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/rsayyed591/Err_4046.0v2",
      liveUrl: "https://gameof2048.vercel.app/",
    },
    {
      title: "Memory Game",
      image: "/projects/memorygame.png",
      description: "A dynamic and engaging memory game developed with Next.js, React, and Tailwind CSS. Flip cards, match pairs, and challenge your memory!",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer-motion"],
      githubUrl: "https://github.com/rsayyed591/memory-game",
      liveUrl: "https://me-mory-game.vercel.app/",
    },
    {
      title: "Photopia",
      image: "/projects/photopia.png",
      description: "A full-stack photo storage and sharing platform designed with React, Node.js, and MySQL. Securely upload, organize, and share photos.",
      technologies: ["React", "Node.js", "MySQL", "Express.js", "JWT"],
      githubUrl: "https://github.com/rsayyed591/photopia",
      liveUrl: "https://photopia-one.vercel.app/",
    },
    {
      title: "Todo-List",
      image: "/projects/todolist.png",
      description: "A feature-rich To-Do List application built with React, Express.js, and MongoDB. Manage tasks with a clean UI.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      githubUrl: "https://github.com/rsayyed591/RS_To-Do_List",
      liveUrl: "https://rstodolist.vercel.app/",
    },
    {
      title: "CryptoKing",
      image: "/projects/crypto.png",
      description: "A powerful cryptocurrency tracking application built with React, Redux, and RapidAPI. Real-time market data and price tracking.",
      technologies: ["React", "Redux", "RapidAPI", "Tailwind CSS"],
      githubUrl: "https://github.com/rsayyed591/CryptoKing",
      liveUrl: "https://crypto-king-six.vercel.app/",
    },
  ];

   return (
    <section id="projects" className="relative py-24 bg-white overflow-hidden">
      {/* Technical Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      {/* Layout Wrapper to avoid sidebar collision */}
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          {/* Section Header */}
          <AnimateOnScroll className="mb-16">
            <div className="flex flex-col md:items-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Featured Projects
              </h2>
              <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-6" />
              <p className="text-gray-500 text-lg max-w-2xl text-center font-medium">
                A selection of production-ready applications showcasing full-stack capabilities, clean architecture, and user-centric design.
              </p>
            </div>
          </AnimateOnScroll>

        <div className="md:ml-20">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <AnimateOnScroll key={index}>
                <div className="group h-full bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-blue-900/10 hover:border-blue-100 transition-all duration-300 flex flex-col overflow-hidden">
                  
                  {/* Image Container with Overlay */}
                  <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Dark Overlay on Hover */}
                    <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]" />

                    {/* Action Buttons (Reveal on Hover) */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white text-gray-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors shadow-lg"
                        title="View Code"
                      >
                        <FaGithub size={20} />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white text-gray-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors shadow-lg"
                          title="View Live Demo"
                        >
                          <FaExternalLinkAlt size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                        <FolderGit2 size={18} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3 text-sm">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold px-3 py-1 bg-gray-50 text-gray-600 rounded-md border border-gray-100"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs font-semibold px-3 py-1 bg-gray-50 text-gray-400 rounded-md border border-gray-100">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
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

export default Projects;