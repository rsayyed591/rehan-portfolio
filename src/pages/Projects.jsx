import React from 'react';
import { AnimateOnScroll } from '../components/AnimateOnScroll';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
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
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "Framer-motion", "Shadcn"],
      githubUrl: "https://github.com/vnrr2023/Medwell-Frontend-2",
      liveUrl: "https://medwell2.vercel.app/",
    },
    {
      title: "AnnSampark",
      image: "/projects/annsampark.png",
      description: "A platform that connects surplus food donors with NGOs and food banks, ensuring real-time redistribution of food to those in need.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "Framer-motion", "Shadcn"],
      githubUrl: "https://github.com/rsayyed591/Noname.json_LOC7",
      liveUrl: "https://annsampark.vercel.app/",
    },
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
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "Framer-motion", "Shadcn"],
      githubUrl: "https://github.com/rsayyed591/Noname.json_LOC7",
      liveUrl: "https://ishaara.vercel.app/",
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
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "Framer-motion", "Shadcn"],
      githubUrl: "https://github.com/rsayyed591/Err_4046.0v2",
      liveUrl: "https://err-4046-0v2.vercel.app/",
    },
    {
      title: "2048 - The Game",
      image: "/projects/2048.png",
      description: "An interactive web-based version of the classic 2048 puzzle, built with Next.js and React using TypeScript. Players slide tiles in four directions to merge matching numbers and aim to reach the 2048 tile.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "Framer-motion", "Shadcn"],
      githubUrl: "https://github.com/rsayyed591/Err_4046.0v2",
      liveUrl: "https://gameof2048.vercel.app/",
    },
    {
      title: "Memory Game",
      image: "/projects/memorygame.png",
      description: "A dynamic and engaging memory game developed with Next.js, React, and Tailwind CSS. Flip cards, match pairs, and challenge your memory in Single Player or Two-Player mode, featuring smooth animations and celebratory confetti for winners!",
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "Framer-motion", "Shadcn"],
      githubUrl: "https://github.com/rsayyed591/memory-game",
      liveUrl: "https://me-mory-game.vercel.app/",
    },
    {
      title: "Photopia",
      image: "/projects/photopia.png",
      description: "A full-stack photo storage and sharing platform designed with React, Node.js, and MySQL. Photopia enables users to securely upload, organize, and share their photos through a sleek and modern interface.",
      technologies: ["React", "Tailwind CSS", "Node.js", "MySQL", "Express.js", "JWT"],
      githubUrl: "https://github.com/rsayyed591/photopia",
      liveUrl: "https://photopia-one.vercel.app/",
    },
    {
      title: "Todo-List",
      image: "/projects/todolist.png",
      description: "A feature-rich To-Do List application built with React, Express.js, and MongoDB. It allows users to efficiently manage their tasks with options to add, update, mark as complete/incomplete, and delete tasks—all wrapped in a clean UI.",
      technologies: ["React", "Tailwind CSS", "Node.js", "Mongodb", "Express.js"],
      githubUrl: "https://github.com/rsayyed591/RS_To-Do_List",
      liveUrl: "https://rstodolist.vercel.app/",
    },
    {
      title: "CryptoKing",
      image: "/projects/crypto.png",
      description: "A powerful cryptocurrency tracking application built with React, Redux, and RapidAPI. CryptoKing provides real-time market data, price tracking, and trends to help users stay informed about the crypto world.",
      technologies: ["React", "Tailwind CSS", "Node.js", "RapidAPi", "Redux"],
      githubUrl: "https://github.com/rsayyed591/CryptoKing",
      liveUrl: "https://crypto-king-six.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Projects and Publications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:ml-24">
          {projects.map((project, index) => (
            <AnimateOnScroll key={index}>
              <motion.div 
  className="w-[360px] h-[480px] bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
  whileHover={{ y: -5 }}
>
  <img
    src={project.image || "/placeholder.svg"}
    alt={project.title}
    className="w-full h-48 object-contain"
  />
  <div className="p-4 flex flex-col flex-grow">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
    
    <p className="text-gray-600 text-sm line-clamp-3 flex-grow overflow-hidden">
      {project.description}
    </p>

    <div className="mt-1">
      <h4 className="text-sm font-semibold text-gray-700 mb-1">Technologies:</h4>
      <div className="flex flex-wrap gap-1">
        {project.technologies.map((tech, i) => (
          <span key={i} className="px-2 py-2 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>

    {/* This ensures buttons are at the bottom */}
    <div className="flex justify-between items-center mt-auto">
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
      >
        <FaGithub className="mr-2" />
        GitHub
      </a>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
          <FaExternalLinkAlt className="mr-2" />
          View Online
        </a>
      )}
    </div>
  </div>
</motion.div>

            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;