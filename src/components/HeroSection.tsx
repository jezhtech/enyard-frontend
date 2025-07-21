import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Cloud } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">AI-Powered Innovation</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="block">Redefining</span>
          <span className="text-gradient block">Business Software</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Experience the future of enterprise solutions with AI-integrated applications 
          that adapt to your business needs. Cloud-native, intelligent, and effortless.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 border">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">AI-Accelerated Development</span>
          </div>
          <div className="flex items-center space-x-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 border">
            <Cloud className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Complete Cloud Solutions</span>
          </div>
          <div className="flex items-center space-x-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 border">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Intelligent Automation</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="group relative overflow-hidden">
            <span className="relative z-10 flex items-center">
              Explore Our Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
          <Button variant="outline" size="lg" className="glass">
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-border/50">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Active Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <div className="text-sm text-muted-foreground">Core Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">AI Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;