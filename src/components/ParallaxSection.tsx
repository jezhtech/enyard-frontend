import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Database, Network, Bot } from "lucide-react";

const ParallaxSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrolled = -rect.top;
        setScrollY(scrolled * 0.5); // Parallax effect
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const techStack = [
    { icon: Cpu, label: "Advanced AI Models", description: "GPT-4 & Custom ML" },
    { icon: Database, label: "Real-time Processing", description: "Microsecond Response" },
    { icon: Network, label: "Global CDN", description: "Edge Computing" },
    { icon: Bot, label: "Intelligent Automation", description: "Self-Learning Systems" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ transform: `translateY(${scrollY}px)` }}
      >
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-primary/5 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 grid-lines opacity-20"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Built on the
                <span className="text-gradient-animate block">Future Stack</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our infrastructure combines cutting-edge AI, cloud-native architecture, 
                and quantum-ready systems to deliver unprecedented performance and reliability.
              </p>
            </div>

            <div className="space-y-6">
              {techStack.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div 
                    key={tech.label}
                    className="flex items-start space-x-4 p-4 glass rounded-xl hover:scale-105 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{tech.label}</h3>
                      <p className="text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button size="lg" className="group">
              Explore Our Technology
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
            </Button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div 
              className="glass-strong rounded-3xl p-8 border"
              style={{ transform: `translateY(${scrollY * -0.1}px)` }}
            >
              {/* Animated Code Block */}
              <div className="bg-primary/5 rounded-xl p-6 font-mono text-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex">
                    <span className="text-primary">const</span>
                    <span className="ml-2">ai = new</span>
                    <span className="text-accent ml-1">ENYARD.AI()</span>
                  </div>
                  <div className="flex">
                    <span className="text-primary">await</span>
                    <span className="ml-2">ai.revolutionize(</span>
                  </div>
                  <div className="ml-4 text-green-500">'your-business'</div>
                  <div>)</div>
                  <div className="text-green-500">// ✓ Success: Future unlocked</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div 
              className="absolute -top-8 -right-8 w-16 h-16 bg-primary/20 rounded-full blur-xl"
              style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            />
            <div 
              className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent/20 rounded-full blur-xl"
              style={{ transform: `translateY(${scrollY * -0.15}px)` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;