
import React, { useEffect, useRef } from "react";

interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "JavaScript",
    skills: [
      { name: "ES5/ES6", level: 95 },
      { name: "ReactJS", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Redux", level: 90 },
      { name: "NodeJS", level: 85 },
      { name: "Webpack/Babel", level: 82 },
      { name: "StoryBook", level: 80 },
      { name: "WebSocket", level: 78 },
    ],
  },
  {
    name: "HTML & CSS",
    skills: [
      { name: "HTML5 & ARIA", level: 96 },
      { name: "WebAudio/Canvas", level: 83 },
      { name: "Tailwind CSS", level: 92 },
      { name: "SASS/LESS", level: 90 },
      { name: "Styled Components", level: 88 },
      { name: "UI Libraries", level: 91 }, // Bootstrap, Material UI, Chakra UI
      { name: "Cross-browser", level: 94 },
    ],
  },
  {
    name: "Backend & Others",
    skills: [
      { name: "Python/Django", level: 82 },
      { name: "Java/OOP", level: 79 },
      { name: "MongoDB", level: 85 },
      { name: "SQL Databases", level: 84 }, // MySQL, PostgreSQL
      { name: "Design Tools", level: 87 }, // Figma, AdobeXD
      { name: "DevOps", level: 81 }, // GitHub, GitLab, CI/CD, Docker
    ],
  },
];

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            
            // Animate skill bars when in view
            if (entry.target.classList.contains("skill-animation-container")) {
              const skillBars = entry.target.querySelectorAll(".skill-bar");
              skillBars.forEach((bar, index) => {
                setTimeout(() => {
                  (bar as HTMLElement).style.width = `${(bar as HTMLElement).dataset.level}%`;
                }, 100 * index);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".animate-on-scroll, .skill-animation-container");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  // const filteredSkills = (category: "design" | "development" | "tools") => {
  //   return skills.filter(skill => skill.category === category);
  // };

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-6 animate-on-scroll">
            Technical expertise
          </span>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6 animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
            Skills & technologies
          </h2>
          
          <p className="text-lg text-muted-foreground animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
            Specialized in modern frontend development with strong foundations in backend technologies and design principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.name}
              className="bg-background p-8 rounded-xl border border-muted animate-on-scroll" 
              style={{ transitionDelay: `${0.1 * (categoryIndex + 1)}s` }}
            >
              <h3 className="text-xl font-bold mb-6">{category.name}</h3>
              <div className="space-y-6 skill-animation-container">
                {category.skills.map((skill, index) => (
                  <div key={`${category.name}-${index}`}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="skill-bar h-full bg-primary rounded-full w-0 transition-all duration-1000 ease-out-expo"
                        data-level={skill.level}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
