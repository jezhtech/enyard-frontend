import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, ChevronDown } from "lucide-react";

const VercelHero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Innovative Multi-layered Background */}
      <div className="absolute inset-0">
        {/* Base gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 75% 25%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 25% 75%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              linear-gradient(135deg, 
                rgba(255, 255, 255, 1) 0%,
                rgba(248, 250, 252, 1) 25%,
                rgba(241, 245, 249, 1) 50%,
                rgba(248, 250, 252, 1) 75%,
                rgba(255, 255, 255, 1) 100%
              )
            `
          }}
        />
        
        {/* Dynamic flowing shapes */}
        <div 
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20 animate-pulse"
          style={{
            background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f59e0b 100%)',
            filter: 'blur(60px)',
            animationDuration: '8s',
          }}
        />
        <div 
          className="absolute top-20 -right-32 w-80 h-80 rounded-full opacity-25 animate-pulse"
          style={{
            background: 'linear-gradient(225deg, #3b82f6 0%, #22c55e 50%, #ec4899 100%)',
            filter: 'blur(50px)',
            animationDuration: '6s',
            animationDelay: '2s',
          }}
        />
        <div 
          className="absolute -bottom-32 left-1/4 w-72 h-72 rounded-full opacity-20 animate-pulse"
          style={{
            background: 'linear-gradient(45deg, #22c55e 0%, #06b6d4 50%, #8b5cf6 100%)',
            filter: 'blur(40px)',
            animationDuration: '10s',
            animationDelay: '4s',
          }}
        />
        
        {/* Geometric overlay pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Flowing gradient overlay */}
        <div 
          className="absolute bottom-0 left-0 w-full h-3/4 opacity-80"
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(168, 85, 247, 0.1) 0%,
                rgba(236, 72, 153, 0.1) 20%,
                rgba(251, 146, 60, 0.1) 40%,
                rgba(34, 197, 94, 0.1) 60%,
                rgba(6, 182, 212, 0.1) 80%,
                rgba(139, 92, 246, 0.1) 100%
              )
            `,
            clipPath: 'polygon(0 100%, 100% 100%, 100% 30%, 80% 25%, 60% 35%, 40% 25%, 20% 40%, 0 35%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Animated Badge */}
        <div 
          className={`inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <Sparkles className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-gray-700">Revolutionizing Enterprise Software</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-6 mb-8">
          <h1 
            className={`text-6xl md:text-8xl font-bold tracking-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            <span className="block text-gray-900">Build and deploy on</span>
            <span className="block text-gradient-animate">the AI Cloud.</span>
          </h1>
        </div>

        {/* Subheadline */}
        <p 
          className={`text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          ENYARD provides the developer tools and cloud infrastructure to build, scale, 
          and secure a faster, more personalized business experience.
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          <Button 
            size="lg" 
            className="group relative overflow-hidden bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center">
              ▲ Start Deploying
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 group"
          >
            <span className="flex items-center text-gray-700">
              <Play className="mr-2 h-5 w-5" />
              Get a Demo
            </span>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '1s' }}
        >
          <div className="flex flex-col items-center text-gray-500">
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
      <div className="absolute top-40 right-32 w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-32 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-60 right-20 w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
    </section>
  );
};

export default VercelHero;