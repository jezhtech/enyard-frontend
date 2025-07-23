import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Brain, Database, TrendingUp, Shield, Users, Play, Code, Terminal, Zap, Package, DollarSign } from "lucide-react";

const CoreX = () => {
  const [activeModule, setActiveModule] = useState(0);
  const [typedText, setTypedText] = useState("");

  const fullText = `// CoreX ERP Implementation
import { CoreX } from '@enyard/corex';

const erp = new CoreX({
  modules: ['finance', 'inventory', 'hr', 'crm'],
  ai: {
    analytics: true,
    automation: true,
    forecasting: true
  }
});

await erp.initialize();
console.log('🚀 ERP System Ready');`;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  const modules = [
    {
      icon: DollarSign,
      title: "Financial Management",
      description: "Complete accounting, invoicing, and financial reporting with AI insights",
      features: ["AI-powered forecasting", "Automated invoicing", "Real-time reporting", "Multi-currency support"],
      color: "from-green-500/20 to-emerald-600/20"
    },
    {
      icon: Package,
      title: "Inventory Control",
      description: "Smart inventory management with predictive analytics",
      features: ["Auto-reorder points", "Demand forecasting", "Supplier management", "Real-time tracking"],
      color: "from-blue-500/20 to-cyan-600/20"
    },
    {
      icon: Users,
      title: "Human Resources",
      description: "Complete HR suite with AI-driven talent management",
      features: ["Employee onboarding", "Performance analytics", "Payroll automation", "Talent acquisition"],
      color: "from-purple-500/20 to-violet-600/20"
    },
    {
      icon: TrendingUp,
      title: "CRM & Sales",
      description: "Customer relationship management with sales automation",
      features: ["Lead scoring", "Sales pipeline", "Customer analytics", "Marketing automation"],
      color: "from-orange-500/20 to-red-600/20"
    }
  ];

  const stats = [
    { label: "Companies Trust CoreX", value: "10,000+" },
    { label: "Average ROI Increase", value: "340%" },
    { label: "Time Saved Weekly", value: "25 hrs" },
    { label: "Processes Automated", value: "1,200+" }
  ];

  const plans = [
    {
      name: "Startup",
      price: "$99",
      period: "/month",
      features: ["Up to 10 users", "2 modules", "Basic AI features", "Email support", "Mobile app"],
      popular: false
    },
    {
      name: "Business",
      price: "$299",
      period: "/month",
      features: ["Up to 100 users", "All modules", "Advanced AI", "Priority support", "Custom workflows", "API access"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: ["Unlimited users", "Custom modules", "Full AI suite", "Dedicated support", "White-label option"],
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
        <div className="floating-orb w-64 h-64 bg-green-500/10 top-1/2 -left-32" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="glass">
                  <Building2 className="w-4 h-4 mr-2" />
                  AI-Powered ERP
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold">
                  Core<span className="text-gradient">X</span>
                  <br />
                  <span className="text-2xl md:text-3xl text-muted-foreground font-normal">
                    Complete ERP Solution
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Intelligent enterprise resource planning with AI automation, 
                  real-time analytics, and seamless integration across all business processes.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group">
                  <Play className="w-4 h-4 mr-2" />
                  Start Free Trial
                  <Zap className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  <Code className="w-4 h-4 mr-2" />
                  API Documentation
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                {stats.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="text-center glass rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
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
                    <span className="text-sm text-muted-foreground ml-4">corex-setup.js</span>
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

      {/* Modules Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Integrated <span className="text-gradient">Modules</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything your business needs in one intelligent platform
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <Card 
                key={module.title} 
                className={`group hover-lift glass border-0 relative overflow-hidden cursor-pointer transition-all duration-300 ${
                  activeModule === index ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setActiveModule(index)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <module.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{module.title}</CardTitle>
                      <p className="text-muted-foreground text-sm">{module.description}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="grid grid-cols-2 gap-2">
                    {module.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Flexible <span className="text-gradient">Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Scale with your business needs
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
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">
              Transform your business operations today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join industry leaders who trust CoreX for their enterprise resource planning.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="group">
                Start Free Trial
                <Zap className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoreX;