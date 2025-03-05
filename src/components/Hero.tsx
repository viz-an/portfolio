
import React, { useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (circleRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        
        // Subtle parallax effect
        const moveX = (x - window.innerWidth / 2) * 0.02;
        const moveY = (y - window.innerHeight / 2) * 0.02;
        
        circleRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background circle */}
      <div 
        ref={circleRef}
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 opacity-70 blur-3xl"
        style={{ top: '20%', right: '10%' }}
      />

      <div className="container px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Front-End Developer
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Crafting exceptional web experiences with modern technologies
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Specialized in React, TypeScript, and modern JavaScript frameworks to build responsive, accessible, and performant web applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <a 
                href="#projects" 
                className="px-8 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:translate-y-[-2px] active:translate-y-[0px]"
              >
                View my work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 rounded-md bg-secondary text-secondary-foreground font-medium transition-colors hover:bg-secondary/80"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <span className="text-sm font-medium mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
