import { useRef, useEffect, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ArrowUpRight, Code2, Search, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");

  const featuredProjects = [
    {
      title: "Ishaara V2.0",
      image: "/projects/ishaarav2.png",
      description:
        "An updated version of Ishaara, a web-based Indian Sign Language (ISL) translator offering various resources and tools to engage with ISL.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
      githubUrl: "https://github.com/rsayyed591/Noname.json_LOC7",
      liveUrl: "https://ishaara.vercel.app/",
    },
    {
      title: "Hack-Manager",
      image: "/projects/hack-management.png",
      description:
        "A platform for managing hackathons, built with React, Node.js, and styled using Tailwind CSS. It facilitates participant registration, team formation, judging, and event management.",
      technologies: ["React", "Node.js", "Tailwind CSS"],
      githubUrl: "https://github.com/rsayyed591/Hack-Management-Frontend",
      liveUrl: "https://err404-manager.vercel.app/",
    },
    {
      title: "Medwell V2.0",
      image: "/projects/medwellv2.png",
      description:
        "An updated version of Medwell-Frontend, designed to help patients and healthcare providers manage and visualize medical reports and data efficiently.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "Shadcn"],
      githubUrl: "https://github.com/vnrr2023/Medwell-Frontend-2",
      liveUrl: "https://medwell2.vercel.app/",
    },
    {
      title: "CSGPT AI",
      image: "/projects/csgpt.png",
      description:
        "A web-based AI model that generates answers from textbooks, notes, and other study materials, functioning like a chatbot.",
      technologies: ["React", "CSS", "Node.js", "MarkDown"],
      githubUrl: "https://github.com/rsayyed591/NoName.json_AiCodeX",
      liveUrl: "https://csgptai.vercel.app/",
    },
    {
      title: "AnnSampark",
      image: "/projects/annsampark.png",
      description:
        "A platform that connects surplus food donors with NGOs and food banks, ensuring real-time redistribution of food to those in need.",
      technologies: ["Next.js", "Node.js", "Tailwind CSS", "Shadcn"],
      githubUrl: "https://github.com/rsayyed591/Noname.json_LOC7",
      liveUrl: "https://annsampark.vercel.app/",
    },
  ];

  const otherProjects = [
    {
      title: "Ishaara V1.0",
      image: "/projects/ishaarav1.png",
      description:
        "A web-based Indian Sign Language (ISL) translator that allows users to learn, translate, and explore ISL signs and sentences.",
      technologies: ["React", "CSS", "Node.js", "RoboFlow"],
      githubUrl: "https://github.com/vnrr2023/Ishaara-Website-2.0",
      liveUrl: "https://ishaara.netlify.app/",
    },
    {
      title: "Medwell V1.0",
      image: "/projects/medwellv1.png",
      description:
        "A user-friendly web application designed to help patients and healthcare providers manage and visualize medical reports and data efficiently.",
      technologies: ["React", "Tailwind CSS", "Node.js", "Framer-motion", "jsPDF"],
      githubUrl: "https://github.com/rsayyed591/Medwell-Frontend",
      liveUrl: "https://imedwell.vercel.app/",
    },
    {
      title: "Error 404 Hackathon",
      image: "/projects/error404.png",
      description:
        "A project developed during the Error 404 Hackathon, featuring a website for hackathon registration and updates.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
      githubUrl: "https://github.com/rsayyed591/Err_4046.0v2",
      liveUrl: "https://err-4046-0v2.vercel.app/",
    },
    {
      title: "2048 - The Game",
      image: "/projects/2048.png",
      description:
        "An interactive web-based version of the classic 2048 puzzle, built with Next.js and React using TypeScript.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/rsayyed591/Err_4046.0v2",
      liveUrl: "https://gameof2048.vercel.app/",
    },
    {
      title: "Memory Game",
      image: "/projects/memorygame.png",
      description:
        "A dynamic and engaging memory game developed with Next.js, React, and Tailwind CSS. Flip cards, match pairs, and challenge your memory!",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer-motion"],
      githubUrl: "https://github.com/rsayyed591/memory-game",
      liveUrl: "https://me-mory-game.vercel.app/",
    },
    {
      title: "Photopia",
      image: "/projects/photopia.png",
      description:
        "A full-stack photo storage and sharing platform designed with React, Node.js, and MySQL. Securely upload, organize, and share photos.",
      technologies: ["React", "Node.js", "MySQL", "Express.js", "JWT"],
      githubUrl: "https://github.com/rsayyed591/photopia",
      liveUrl: "https://photopia-one.vercel.app/",
    },
    {
      title: "Todo-List",
      image: "/projects/todolist.png",
      description:
        "A feature-rich To-Do List application built with React, Express.js, and MongoDB. Manage tasks with a clean UI.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      githubUrl: "https://github.com/rsayyed591/RS_To-Do_List",
      liveUrl: "https://rstodolist.vercel.app/",
    },
    {
      title: "CryptoKing",
      image: "/projects/crypto.png",
      description:
        "A powerful cryptocurrency tracking application built with React, Redux, and RapidAPI. Real-time market data and price tracking.",
      technologies: ["React", "Redux", "RapidAPI", "Tailwind CSS"],
      githubUrl: "https://github.com/rsayyed591/CryptoKing",
      liveUrl: "https://crypto-king-six.vercel.app/",
    },
  ];

  const allProjects = [...featuredProjects, ...otherProjects];

  // Filter projects based on search only
  const filteredProjects = useMemo(() => {
    if (!searchQuery) return allProjects;
    return allProjects.filter(project => 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  // Split back into featured and others for display
  const filteredFeatured = filteredProjects.filter(p => 
    featuredProjects.some(fp => fp.title === p.title)
  );
  const filteredOthers = filteredProjects.filter(p => 
    otherProjects.some(op => op.title === p.title)
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      const cards = gridRef.current.querySelectorAll(".project-card");
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate cards when search changes
  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll(".project-card");
      gsap.fromTo(
        cards,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out",
        },
      );
    }
  }, [filteredProjects]);

  const ProjectCard = ({ project, featured = false }) => (
    <div
      className={`project-card group bg-theme-secondary rounded-2xl overflow-hidden border border-theme shadow-theme hover:shadow-theme-lg transition-all duration-300 hover:-translate-y-1 ${featured ? "md:col-span-1" : ""}`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden bg-theme-tertiary ${featured ? "h-56 md:h-64" : "h-48"}`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-theme-primary/80 via-theme-primary/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-theme-secondary text-theme-primary rounded-full hover:bg-theme-primary hover:text-theme-secondary transition-colors shadow-lg border border-theme"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub size={18} />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-accent text-white rounded-full hover:bg-accent-dark transition-colors shadow-lg shadow-accent/30"
            onClick={(e) => e.stopPropagation()}
          >
            <FaExternalLinkAlt size={16} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className={`${featured ? "p-6" : "p-5"}`}>
        <h3
          className={`font-bold text-theme-primary group-hover:text-accent transition-colors mb-2 ${featured ? "text-xl" : "text-lg"}`}
        >
          {project.title}
        </h3>

        <p
          className={`text-theme-secondary leading-relaxed mb-4 ${featured ? "text-sm line-clamp-3" : "text-sm line-clamp-2"}`}
        >
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className={`font-mono font-medium px-2 py-1 bg-accent-light text-accent rounded ${featured ? "text-xs" : "text-[11px]"}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-20 md:py-28 bg-theme-primary overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light/50 border border-accent/20 text-accent text-sm font-mono font-medium mb-6">
            <Code2 size={14} />
            <span>Selected Work</span>
          </div>
          <h2 className="font-sans text-3xl md:text-5xl font-bold text-theme-primary tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-theme-muted max-w-xl mx-auto text-sm md:text-base">
            Production-ready applications built with modern technologies and best practices.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 md:mb-12">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-theme-muted" size={18} />
            <input
              type="text"
              placeholder="Search projects by name, description, or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3 bg-theme-secondary border border-theme rounded-full text-theme-primary placeholder:text-theme-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-theme-muted hover:text-theme-primary transition-colors"
              >
                <X size={18} />
              </button>
            )}
          </div>
          
          {/* Results count */}
          {searchQuery && (
            <p className="text-center mt-3 text-sm text-theme-muted">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
            </p>
          )}
        </div>

        {/* Projects Grid */}
        <div ref={gridRef}>
          {filteredFeatured.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {filteredFeatured.map((project, index) => (
                  <ProjectCard key={`featured-${index}`} project={project} featured={true} />
                ))}
              </div>

              {filteredOthers.length > 0 && (
                <>
                  <div className="flex items-center gap-4 py-6">
                    <div className="flex-1 h-px bg-theme-tertiary" />
                    <span className="text-xs font-mono font-medium text-theme-muted uppercase tracking-wider">
                      More Projects
                    </span>
                    <div className="flex-1 h-px bg-theme-tertiary" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredOthers.map((project, index) => (
                      <ProjectCard key={`other-${index}`} project={project} featured={false} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-theme-muted text-lg mb-4">No projects found matching "{searchQuery}"</p>
              <button
                onClick={() => setSearchQuery("")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent-dark transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* View All GitHub */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/rsayyed591"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-theme-primary text-theme-primary border border-theme rounded-full text-sm font-medium hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 shadow-theme hover:shadow-accent/30"
          >
            <FaGithub size={18} />
            <span>View all on GitHub</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;