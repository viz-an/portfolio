import React, { useState, useRef } from "react";
import { useTheme } from "./ThemeProvider";

const DecorativePattern: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate relative position (0-1)
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="w-full h-full bg-gradient-to-tr from-background to-secondary/60 rounded-lg overflow-hidden relative cursor-pointer transition-all duration-300"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Overlay text moved on top */}
      <div className="absolute inset-x-0 top-0 pt-6 flex flex-col items-center justify-center text-center px-6 z-10">
        <div className="text-xs uppercase tracking-wider text-muted-foreground/70">Creative Developer</div>
        <div className="text-sm mt-1 font-medium">Building digital experiences</div>
      </div>

      {/* Main pattern container */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid lines */}
        <div 
          className="absolute inset-0 transition-transform duration-500" 
          style={{ 
            opacity: 0.1,
            transform: isHovering ? `rotate(${(mousePosition.x - 0.5) * 5}deg)` : 'none'
          }}
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke={isDark ? "white" : "black"}
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Animated circles */}
        <div 
          className="absolute transition-all duration-300" 
          style={{ 
            top: `${10 + mousePosition.y * 10}%`, 
            left: `${15 + mousePosition.x * 15}%`,
            transform: isHovering ? 'scale(1.2)' : 'scale(1)'
          }}
        >
          <div className="w-12 h-12 rounded-full bg-primary/30 animate-float" style={{ animationDelay: "0s" }}></div>
        </div>
        <div 
          className="absolute transition-all duration-300" 
          style={{ 
            top: `${50 - mousePosition.y * 10}%`, 
            right: `${20 - mousePosition.x * 10}%`,
            transform: isHovering ? 'scale(1.2)' : 'scale(1)'
          }}
        >
          <div className="w-20 h-20 rounded-full bg-primary/20 animate-float" style={{ animationDelay: "1.5s" }}></div>
        </div>
        <div 
          className="absolute transition-all duration-300" 
          style={{ 
            bottom: `${15 + mousePosition.y * 8}%`, 
            left: `${35 - mousePosition.x * 10}%`,
            transform: isHovering ? 'scale(1.1)' : 'scale(1)'
          }}
        >
          <div className="w-16 h-16 rounded-full bg-primary/25 animate-float" style={{ animationDelay: "0.8s" }}></div>
        </div>

        {/* Decorative shapes */}
        <div 
          className="absolute transition-all duration-500" 
          style={{ 
            top: `${25 - mousePosition.y * 5}%`, 
            right: `${25 - mousePosition.x * 5}%`,
            transform: isHovering ? 'rotate(15deg)' : 'rotate(0deg)'
          }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-float" style={{ animationDelay: "1.2s" }}>
            <rect x="10" y="10" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="2" className={`${isHovering ? "text-primary" : "text-primary/60"}`} />
          </svg>
        </div>
        <div 
          className="absolute transition-all duration-500" 
          style={{ 
            bottom: `${33 + mousePosition.y * 6}%`, 
            left: `${20 + mousePosition.x * 6}%`,
            transform: isHovering ? 'rotate(-10deg)' : 'rotate(0deg)'
          }}
        >
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-float" style={{ animationDelay: "0.5s" }}>
            <circle cx="25" cy="25" r="15" stroke="currentColor" strokeWidth="2" className={`${isHovering ? "text-primary" : "text-primary/70"}`} />
          </svg>
        </div>

        {/* Accent lines */}
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="absolute inset-0 transition-all duration-500"
          style={{ 
            transform: isHovering ? `translate(${(mousePosition.x - 0.5) * 10}px, ${(mousePosition.y - 0.5) * 10}px)` : 'none'
          }}
        >
          <path d="M0,50 Q25,30 50,50 T100,50" stroke="currentColor" strokeWidth="0.5" fill="none" className={`${isHovering ? "text-primary/50" : "text-primary/30"}`} />
          <path d="M0,70 Q25,50 50,70 T100,70" stroke="currentColor" strokeWidth="0.5" fill="none" className={`${isHovering ? "text-primary/50" : "text-primary/30"}`} />
        </svg>
      </div>

      {/* Central element */}
      <div 
        className="absolute inset-0 flex items-center justify-center transition-all duration-500"
        style={{ 
          transform: isHovering ? `translate(${(mousePosition.x - 0.5) * -20}px, ${(mousePosition.y - 0.5) * -20}px)` : 'none'
        }}
      >
        <div className="relative w-32 h-32">
          <div className={`absolute inset-0 rounded-lg border-2 ${isHovering ? "border-primary" : "border-primary/50"} animate-pulse`}></div>
          <div className={`absolute inset-4 rounded-lg border-2 ${isHovering ? "border-primary" : "border-primary/60"} animate-pulse`} style={{ animationDelay: "0.3s" }}></div>
          <div className={`absolute inset-8 rounded-lg border-2 ${isHovering ? "border-primary" : "border-primary/70"} animate-pulse`} style={{ animationDelay: "0.6s" }}></div>
          <div className={`absolute inset-12 rounded-lg ${isHovering ? "bg-primary/40" : "bg-primary/20"} animate-pulse`} style={{ animationDelay: "0.9s" }}></div>
        </div>
      </div>
      
      {/* Call-to-action text that appears on hover */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
        style={{ zIndex: 5 }}
      >
        <a
            href="https://github.com/an-viz"
            target="_blank" rel="noopener noreferrer"
            className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-md text-sm font-medium">
          Explore my work
        </a>
      </div>
    </div>
  );
};

export default DecorativePattern;
