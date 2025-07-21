import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Cloud, Code, Brain, Rocket } from "lucide-react";

const InnovativeHero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const technologies = [
    { icon: Brain, label: "AI-Powered", delay: "0s" },
    { icon: Cloud, label: "Cloud-Native", delay: "0.2s" },
    { icon: Code, label: "Next-Gen Code", delay: "0.4s" },
    { icon: Zap, label: "Lightning Fast", delay: "0.6s" },
    { icon: Rocket, label: "Scalable", delay: "0.8s" },
    { icon: Sparkles, label: "Innovative", delay: "1s" },
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-background"
    >
      {/* Dynamic Cursor Follow */}
      <div 
        className="fixed w-96 h-96 pointer-events-none opacity-20 transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }}
      />

      {/* Floating Orbs */}
      <div className="floating-orb w-96 h-96 top-1/4 left-1/4 opacity-30" style={{ animationDelay: '0s' }} />
      <div className="floating-orb w-64 h-64 bottom-1/4 right-1/4 opacity-20" style={{ animationDelay: '2s' }} />
      <div className="floating-orb w-48 h-48 top-1/2 right-1/3 opacity-15" style={{ animationDelay: '4s' }} />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Animated Badge */}
        <div className="inline-flex items-center space-x-2 glass-strong rounded-full px-6 py-3 mb-8 border hover:scale-105 transition-transform duration-300">
          <Sparkles className="h-4 w-4 text-primary animate-spin" style={{ animationDuration: '3s' }} />
          <span className="text-sm font-medium text-gradient-animate">Redefining Enterprise Software</span>
        </div>

        {/* Main Headline with Stagger Animation */}
        <div className="space-y-4 mb-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <div className="stagger-item" style={{ animationDelay: '0.1s' }}>
              <span className="block">Where</span>
            </div>
            <div className="stagger-item" style={{ animationDelay: '0.3s' }}>
              <span className="text-gradient-animate block">Innovation</span>
            </div>
            <div className="stagger-item" style={{ animationDelay: '0.5s' }}>
              <span className="block">Meets</span>
            </div>
            <div className="stagger-item" style={{ animationDelay: '0.7s' }}>
              <span className="text-gradient-animate block">Intelligence</span>
            </div>
          </h1>
        </div>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed stagger-item" style={{ animationDelay: '0.9s' }}>
          Experience the next generation of business software. AI-integrated, cloud-native solutions 
          that don't just automate your processes—they revolutionize them.
        </p>

        {/* Technology Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div 
                key={tech.label}
                className="stagger-item flex items-center space-x-2 glass-strong rounded-full px-4 py-3 border hover:scale-110 transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: tech.delay }}
              >
                <IconComponent className="h-4 w-4 text-primary group-hover:rotate-12 transition-transform" />
                <span className="text-sm font-medium">{tech.label}</span>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons with Advanced Animations */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 stagger-item" style={{ animationDelay: '1.2s' }}>
          <Button 
            size="lg" 
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center text-lg">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="glass-strong px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 group text-lg"
          >
            <span className="flex items-center">
              See Live Demo
              <Sparkles className="ml-2 h-5 w-5 group-hover:animate-spin" />
            </span>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default InnovativeHero;