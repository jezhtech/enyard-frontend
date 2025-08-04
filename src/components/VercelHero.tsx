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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Innovative Multi-layered Creative Background */}
      <div className="absolute inset-0">
        {/* Pure white base */}
        <div className="absolute inset-0 bg-white" />
        
        {/* Subtle geometric grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #000 1px, transparent 1px),
              linear-gradient(0deg, #000 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Floating geometric shapes */}
        <div 
          className="absolute top-20 left-20 w-32 h-32 opacity-[0.08] animate-pulse"
          style={{
            background: 'linear-gradient(45deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            animationDuration: '8s',
            filter: 'blur(1px)',
          }}
        />
        <div 
          className="absolute top-40 right-32 w-24 h-24 opacity-[0.06] animate-pulse"
          style={{
            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #fbbf24 100%)',
            borderRadius: '50%',
            animationDuration: '6s',
            animationDelay: '2s',
            filter: 'blur(1px)',
          }}
        />
        <div 
          className="absolute bottom-32 left-1/3 w-40 h-40 opacity-[0.07] animate-pulse"
          style={{
            background: 'linear-gradient(225deg, #f3e8ff 0%, #e9d5ff 50%, #c084fc 100%)',
            borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
            animationDuration: '10s',
            animationDelay: '4s',
            filter: 'blur(1px)',
          }}
        />
        
        {/* Subtle gradient overlays */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 40%),
              radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 40%),
              radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 40%),
              radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 40%)
            `
          }}
        />
        
        {/* Animated mesh gradient */}
        <div 
          className="absolute inset-0 opacity-[0.12]"
          style={{
            background: `
              conic-gradient(from 0deg at 50% 50%, 
                rgba(59, 130, 246, 0.1) 0deg, 
                rgba(168, 85, 247, 0.1) 72deg, 
                rgba(236, 72, 153, 0.1) 144deg, 
                rgba(34, 197, 94, 0.1) 216deg, 
                rgba(59, 130, 246, 0.1) 288deg, 
                rgba(59, 130, 246, 0.1) 360deg)
            `,
            animation: 'rotate 20s linear infinite',
          }}
        />
        
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '3s' }} />
          <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '4s' }} />
        </div>
        
        {/* Subtle wave effect at bottom */}
        <div 
          className="absolute bottom-0 left-0 w-full h-32 opacity-[0.08]"
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(59, 130, 246, 0.1) 0%,
                rgba(168, 85, 247, 0.1) 25%,
                rgba(236, 72, 153, 0.1) 50%,
                rgba(34, 197, 94, 0.1) 75%,
                rgba(59, 130, 246, 0.1) 100%
              )
            `,
            clipPath: 'polygon(0 100%, 100% 100%, 100% 60%, 80% 40%, 60% 60%, 40% 40%, 20% 60%, 0 40%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Animated Badge */}
        <div 
          className={`inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8 border border-gray-200/50 shadow-sm transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-blue-600" />
          <span className="text-xs md:text-sm font-medium text-gray-700">Where Innovation Meets Intelligence</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            <span className="block text-gray-900">Elevate Your Enterprise</span>
            <span className="block text-gradient-animate">Beyond Imagination</span>
          </h1>
        </div>

        {/* Subheadline */}
        <p 
          className={`text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          Revolutionizes enterprise management with intelligent applications that think, learn, and evolve. 
          Transform your operations from reactive to predictive, from manual to autonomous, from today to tomorrow.
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
              Begin Your Transformation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 group shadow-sm"
          >
            <span className="flex items-center text-gray-700">
              <Play className="mr-2 h-5 w-5" />
              Witness the Revolution
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
      <div className="absolute top-20 left-20 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-30" />
      <div className="absolute top-40 right-32 w-3 h-3 bg-purple-500 rounded-full animate-pulse opacity-30" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-32 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse opacity-30" style={{ animationDelay: '2s' }} />
      <div className="absolute top-60 right-20 w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse opacity-30" style={{ animationDelay: '0.5s' }} />
    </section>
  );
};

export default VercelHero;