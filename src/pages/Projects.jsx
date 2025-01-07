import React from 'react';
import { Github, PlayCircle } from "lucide-react"
import { AnimateOnScroll } from '../components/AnimateOnScroll'

const Projects = () => {
  const projects = [
    {
      title: "Woodsy Wayfinder",
      image: "/woodsy-wayfinder.jpg",
      description: "Player has to deliver all boxes to their destinations within the map by the end of the level while managing the destruction of paths and avoiding robbers and obstacles.",
      githubUrl: "#",
      playUrl: "#",
    },
    {
      title: "Integration of Medical Imaging Systems Course Work",
      image: "/medical-imaging.jpg",
      description: "Worked with set of DICOM images to understand different regions of anatomy and experimented with various transformations methods (fourier, cosine etc).",
      githubUrl: "#",
    },
    {
      title: "Evil Geniuses Genius League",
      image: "/evil-geniuses.jpg",
      description: "Analyzed game data of CS:GO, to understand patterns used by players and strategies developed by teams in the game.",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="container mx-auto px-4 py-8 sm:py-16">
      <AnimateOnScroll className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2E32] mb-4">
          PROJECTS AND PUBLICATIONS
        </h2>
        <div className="relative">
          <div className="h-px w-48 bg-gray-200 mx-auto"></div>
          <div className="h-1 w-12 bg-blue-600 mx-auto -mt-[1px]"></div>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <AnimateOnScroll key={index}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
              <div className="relative h-48 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-grow p-6">
                <h3 className="text-xl font-bold text-[#2D2E32] mb-4">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
              <div className="p-6 pt-0 flex gap-4">
                <a
                  href={project.githubUrl}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Github Repository
                </a>
                {project.playUrl && (
                  <a
                    href={project.playUrl}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Play Game
                  </a>
                )}
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default Projects;