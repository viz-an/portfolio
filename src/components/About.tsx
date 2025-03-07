import React, { useEffect, useRef } from "react";
import DecorativePattern from "./DecorativePattern";

const About: React.FC = () => {
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
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-secondary/30"
    >
      <div className="container px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <div className="relative">
                <div className="w-full h-[480px] rounded-lg overflow-hidden animate-on-scroll">
                  <DecorativePattern />

                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg bg-primary z-10 animate-on-scroll" style={{ transitionDelay: "0.2s" }} />
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-lg border border-primary z-10 animate-on-scroll" style={{ transitionDelay: "0.3s" }} />
              </div>
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-6 animate-on-scroll">
                About me
              </span>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6 animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
                Front-end specialist with full-stack capabilities
              </h2>
              
              <div className="text-muted-foreground space-y-4">
                <p className="animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
                  I'm a dedicated front-end developer with expertise in ReactJS, TypeScript, and modern JavaScript frameworks. I build responsive, accessible, and high-performance web applications with a focus on exceptional user experiences.
                </p>
                
                <p className="animate-on-scroll" style={{ transitionDelay: "0.3s" }}>
                  Each project is an opportunity to solve complex problems through clean, thoughtful design. I'm constantly refining my craft, staying current with emerging technologies and design trends.
                </p>
                
                <p className="animate-on-scroll" style={{ transitionDelay: "0.4s" }}>
                  I'm passionate about design principles and implementing pixel-perfect interfaces using the latest design tools and techniques. I follow the 8-point design grid system and collaborate closely with designers to bring visions to life.
                </p>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-on-scroll" style={{ transitionDelay: "0.5s" }}>
                <a 
                  href="#contact" 
                  className="px-6 py-2.5 rounded-md bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:translate-y-[-2px] active:translate-y-[0px]"
                >
                  Get in touch
                </a>
                <a 
                  href="#projects" 
                  className="px-6 py-2.5 rounded-md bg-secondary text-secondary-foreground font-medium transition-colors hover:bg-secondary/80"
                >
                  View my work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
