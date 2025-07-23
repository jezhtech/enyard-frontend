import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, MapPin, BarChart3, Shield, Calendar, DollarSign, Play, Code, Terminal, Zap, Car, Route } from "lucide-react";

const FleetX = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [typedText, setTypedText] = useState("");

  const fullText = `// FleetX Vehicle Management System
import { FleetX } from '@enyard/fleetx';

const fleet = new FleetX({
  features: [
    'vehicle-booking',
    'route-optimization',
    'maintenance-tracking',
    'cost-analytics'
  ],
  ai: {
    routing: true,
    predictions: true,
    optimization: true
  },
  integrations: ['GPS', 'Telematics', 'Fuel Cards']
});

await fleet.initialize();
console.log('🚗 Fleet Management Ready');

// Demo: fcfleet.com`;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 25);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: Calendar,
      title: "Smart Booking System",
      description: "AI-powered vehicle booking with automatic scheduling and conflict resolution",
      details: ["Real-time availability", "Automated scheduling", "Conflict resolution", "Mobile booking"],
      color: "from-blue-500/20 to-cyan-600/20"
    },
    {
      icon: Route,
      title: "Route Optimization",
      description: "Advanced route planning with real-time traffic and fuel optimization",
      details: ["Traffic analysis", "Fuel optimization", "Multi-stop planning", "Real-time updates"],
      color: "from-green-500/20 to-emerald-600/20"
    },
    {
      icon: BarChart3,
      title: "Cost Analytics",
      description: "Comprehensive cost tracking and analytics with predictive insights",
      details: ["Fuel monitoring", "Maintenance costs", "Usage analytics", "ROI tracking"],
      color: "from-purple-500/20 to-violet-600/20"
    },
    {
      icon: Shield,
      title: "Fleet Security",
      description: "Advanced security features with real-time monitoring and alerts",
      details: ["GPS tracking", "Theft protection", "Driver monitoring", "Emergency alerts"],
      color: "from-orange-500/20 to-red-600/20"
    }
  ];

  const useCases = [
    {
      title: "Corporate Fleet",
      description: "Employee vehicle booking and management",
      icon: Car,
      savings: "30% cost reduction"
    },
    {
      title: "Rental Business",
      description: "Complete rental management solution",
      icon: DollarSign,
      savings: "50% efficiency gain"
    },
    {
      title: "Logistics Company",
      description: "Delivery and transportation optimization",
      icon: Truck,
      savings: "25% fuel savings"
    },
    {
      title: "Service Fleet",
      description: "Field service vehicle coordination",
      icon: MapPin,
      savings: "40% time savings"
    }
  ];

  const stats = [
    { label: "Vehicles Managed", value: "50K+" },
    { label: "Miles Optimized", value: "100M+" },
    { label: "Cost Savings", value: "$25M+" },
    { label: "CO2 Reduction", value: "15%" }
  ];

  const plans = [
    {
      name: "Starter",
      price: "$39",
      period: "/month",
      features: ["Up to 25 vehicles", "Basic booking", "GPS tracking", "Email support", "Mobile app"],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      features: ["Up to 100 vehicles", "Advanced analytics", "Route optimization", "24/7 support", "API access", "Custom integrations"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: ["Unlimited vehicles", "Full AI suite", "White-label solution", "Dedicated support", "Custom development"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-background opacity-30" />
        <div className="floating-orb w-96 h-96 bg-primary/10 -top-48 -right-48" />
        <div className="floating-orb w-64 h-64 bg-orange-500/10 top-1/2 -left-32" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="glass">
                  <Truck className="w-4 h-4 mr-2" />
                  AI-Powered Fleet Management
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold">
                  Fleet<span className="text-gradient">X</span>
                  <br />
                  <span className="text-2xl md:text-3xl text-muted-foreground font-normal">
                    Smart Vehicle Solutions
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  AI-integrated vehicle booking and rental software designed for 
                  external companies. Optimize routes, reduce costs, and streamline 
                  your entire fleet operation.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group">
                  <Play className="w-4 h-4 mr-2" />
                  Start Free Trial
                  <Car className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  <Code className="w-4 h-4 mr-2" />
                  Visit Demo: fcfleet.com
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Real-time Tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span>AI Optimized</span>
                </div>
              </div>
            </div>

            {/* Code Terminal */}
            <div className="relative">
              <Card className="glass border-border/50 overflow-hidden">
                <CardHeader className="bg-muted/30 border-b border-border/50">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <span className="text-sm text-muted-foreground ml-4">fleetx-config.js</span>
                  </div>
                </CardHeader>
                <CardContent className="p-6 bg-slate-900/50 font-mono text-sm">
                  <pre className="text-green-400 whitespace-pre-wrap">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Intelligent <span className="text-gradient">Fleet Features</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to manage your fleet efficiently
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className={`group hover-lift glass border-0 relative overflow-hidden cursor-pointer transition-all duration-300 ${
                  activeFeature === index ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="grid grid-cols-1 gap-2">
                    {feature.details.map((detail) => (
                      <div key={detail} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Perfect for Every Business</h2>
            <p className="text-muted-foreground">Trusted by companies across industries</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="glass text-center p-6 hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{useCase.description}</p>
                <Badge variant="outline" className="text-green-600">
                  {useCase.savings}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center glass rounded-xl p-8">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Fleet <span className="text-gradient">Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Transparent pricing that scales with your fleet
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card key={plan.name} className={`relative overflow-hidden ${plan.popular ? 'border-primary shadow-lg scale-105' : 'glass'}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-primary">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  <Button 
                    className="w-full mt-6" 
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to optimize your fleet operations?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join companies saving millions with FleetX intelligent fleet management.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="group">
                Start Free Trial
                <Car className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Visit Demo Site
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FleetX;