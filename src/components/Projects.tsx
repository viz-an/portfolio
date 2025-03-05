
import React, { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A responsive e-commerce solution with React, Redux and TypeScript. Features include real-time inventory updates, personalized recommendations, and WebSocket integration.",
    category: "React Development",
    image: "bg-gradient-to-r from-blue-500 to-indigo-600",
    link: "#",
    technologies: ["React", "Redux", "TypeScript", "WebSocket", "Styled Components"]
  },
  {
    id: 2,
    title: "Healthcare Dashboard",
    description: "Accessible healthcare application built with ARIA standards. Features appointment scheduling, interactive charts for health metrics, and secure patient portal.",
    category: "UI/UX & Accessibility",
    image: "bg-gradient-to-r from-emerald-500 to-teal-600",
    link: "#",
    technologies: ["React", "TypeScript", "ARIA", "Tailwind CSS", "Chart.js"]
  },
  {
    id: 3,
    title: "Finance Analytics Platform",
    description: "Interactive financial dashboard with real-time data visualization, complex filtering capabilities, and performance-optimized rendering of large datasets.",
    category: "Data Visualization",
    image: "bg-gradient-to-r from-violet-500 to-purple-600",
    link: "#",
    technologies: ["React", "D3.js", "TypeScript", "MongoDB", "Node.js"]
  },
  {
    id: 4,
    title: "Media Streaming Application",
    description: "Custom media player with HTML5 Canvas, WebAudio API, and FFMpeg integration for real-time audio visualization and video manipulation.",
    category: "Media & WebAudio",
    image: "bg-gradient-to-r from-amber-500 to-orange-600",
    link: "#",
    technologies: ["JavaScript", "WebAudio API", "Canvas", "FFMpeg", "HTML5"]
  },
];

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-32">
      <div className="container px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-6 animate-on-scroll">
            Portfolio
          </span>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6 animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
            Featured projects
          </h2>
          
          <p className="text-lg text-muted-foreground animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
            A selection of my recent work showcasing front-end development expertise, responsive design, and technical problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative rounded-xl overflow-hidden border border-border hover:border-primary/20 transition-all duration-300 animate-on-scroll"
              style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className={`h-64 ${project.image} flex items-center justify-center`}>
                <span className="text-white text-sm opacity-50">Project image</span>
              </div>
              
              <div className="p-6 bg-background">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-medium text-muted-foreground mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <a 
                    href={project.link} 
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary text-primary transform translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={`${project.id}-tech-${techIndex}`}
                      className="px-2 py-1 bg-secondary/50 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/10 rounded-xl transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll" style={{ transitionDelay: "0.6s" }}>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
          >
            <span>View all projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
