import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Building2, Truck, Church, Heart, ArrowRight, Star, Zap, Users, TrendingUp } from "lucide-react";

const ProductsGrid = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-index]');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const products = [
    {
      name: "TimeX",
      description: "Revolutionary attendance management that thinks like you do. Automatically detect patterns, predict trends, and eliminate time theft with intelligent biometric technology that adapts to your workplace.",
      icon: Clock,
      features: ["Smart Biometric Recognition", "Predictive Analytics", "Automated Scheduling", "Fraud Prevention"],
      stats: { users: "50k+", accuracy: "99.9%", saved: "40%" },
      color: "from-blue-500/20 to-cyan-500/20",
      accentColor: "blue-500",
    },
    {
      name: "CoreX",
      description: "The ERP that grows with your business. Watch as it learns your processes, anticipates your needs, and automates complex workflows. From startup to enterprise, it's the only system you'll ever need.",
      icon: Building2,
      features: ["Intelligent Process Automation", "Real-time Business Insights", "Smart Workflow Management", "Predictive Planning"],
      stats: { users: "100k+", efficiency: "75%", growth: "200%" },
      color: "from-green-500/20 to-emerald-500/20",
      accentColor: "green-500",
    },
    {
      name: "FleetX",
      description: "Fleet management that thinks ahead. Optimize routes in real-time, predict maintenance needs, and slash costs with intelligent systems that learn from every journey and improve continuously.",
      icon: Truck,
      features: ["Real-time Route Optimization", "Predictive Maintenance", "Cost Intelligence", "Live Fleet Tracking"],
      stats: { vehicles: "25k+", savings: "30%", uptime: "98%" },
      color: "from-orange-500/20 to-amber-500/20",
      accentColor: "orange-500",
    },
    {
      name: "ChurchX",
      description: "Bring your congregation together like never before. Manage members intelligently, plan events seamlessly, and foster community with tools that understand the unique needs of spiritual organizations.",
      icon: Church,
      features: ["Smart Member Management", "Event Planning Automation", "Donation Intelligence", "Community Hub"],
      stats: { churches: "5k+", members: "500k+", engagement: "85%" },
      color: "from-purple-500/20 to-violet-500/20",
      accentColor: "purple-500",
    },
    {
      name: "MedzorX",
      description: "Healthcare management that saves lives. From intelligent diagnostics to automated patient care, our platform helps medical professionals focus on what matters most—delivering exceptional care.",
      icon: Heart,
      features: ["Intelligent Medical Diagnostics", "Patient Care Analytics", "Smart Appointment Management", "Compliance Automation"],
      stats: { hospitals: "200+", patients: "1M+", efficiency: "60%" },
      color: "from-red-500/20 to-rose-500/20",
      accentColor: "red-500",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-lines opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div 
            className={`scroll-reveal ${visibleItems.has(-1) ? 'revealed' : ''}`}
            data-index="-1"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Solutions That
              <span className="text-gradient-animate"> Redefine Possibility</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Five revolutionary platforms that don't just solve problems—they anticipate them. 
              Each solution learns, adapts, and evolves to become more valuable every day.
            </p>
          </div>
        </div>

        {/* Products Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-20">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            const isVisible = visibleItems.has(index);
            
            // Define custom grid layouts for visual interest
            const gridClasses = [
              "lg:col-span-6", // TimeX - wide
              "lg:col-span-6", // CoreX - wide  
              "lg:col-span-4", // FleetX - medium
              "lg:col-span-4", // ChurchX - medium
              "lg:col-span-4", // MedzorX - medium
            ];

            return (
              <Card 
                key={product.name}
                data-index={index}
                className={`magnetic-card glass-strong border-0 relative overflow-hidden group ${gridClasses[index]} ${
                  isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  minHeight: index < 2 ? '400px' : '350px'
                }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-all duration-700`} />
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'var(--gradient-border)' }} />
                
                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">4.9</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 group/feature">
                        <Zap className="h-3 w-3 text-primary group-hover/feature:rotate-12 transition-transform" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 glass rounded-lg">
                    {Object.entries(product.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    className="group/btn w-full justify-between text-primary hover:text-primary hover:bg-primary/10"
                  >
                    <span>Explore {product.name}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center ${visibleItems.has(99) ? 'scroll-reveal revealed' : 'scroll-reveal'}`}
          data-index="99"
        >
          <div className="glass-strong rounded-3xl p-12 max-w-4xl mx-auto border">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Ready to Redefine Your Future?</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Join forward-thinking enterprises already transforming their operations with our intelligent ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group px-8">
                Start Free Trial
                <Zap className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="glass px-8">
                <Users className="mr-2 h-4 w-4" />
                Book Live Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;