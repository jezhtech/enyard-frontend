import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Church, Heart, Users, Calendar, DollarSign, BookOpen, Play, Code, Terminal, Zap, Cross } from "lucide-react";

const ChurchX = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [typedText, setTypedText] = useState("");

  const fullText = `// ChurchX Management System
import { ChurchX } from '@enyard/churchx';

const church = new ChurchX({
  diocese: 'Roman Catholic',
  features: [
    'member-management',
    'donation-tracking',
    'event-planning',
    'mass-scheduling'
  ],
  ai: {
    insights: true,
    automation: true
  }
});

await church.initialize();
console.log('⛪ Church Management Ready');`;

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

  const features = [
    {
      icon: Users,
      title: "Member Management",
      description: "Complete parishioner database with family connections and communication tools",
      details: ["Family tree management", "Sacrament tracking", "Communication preferences", "Volunteer coordination"],
      color: "from-blue-500/20 to-indigo-600/20"
    },
    {
      icon: DollarSign,
      title: "Donation Tracking",
      description: "Secure donation management with automated receipts and financial reporting",
      details: ["Online giving platform", "Automated receipts", "Pledge tracking", "Financial reporting"],
      color: "from-green-500/20 to-emerald-600/20"
    },
    {
      icon: Calendar,
      title: "Event Planning",
      description: "Comprehensive event management for masses, celebrations, and community activities",
      details: ["Mass scheduling", "Event registration", "Resource booking", "Volunteer scheduling"],
      color: "from-purple-500/20 to-violet-600/20"
    },
    {
      icon: BookOpen,
      title: "Sacrament Records",
      description: "Digital sacrament management with secure record keeping and certificates",
      details: ["Baptism records", "Confirmation tracking", "Marriage certificates", "First communion"],
      color: "from-orange-500/20 to-red-600/20"
    }
  ];

  const stats = [
    { label: "Catholic Churches", value: "500+" },
    { label: "Dioceses Served", value: "25" },
    { label: "Members Managed", value: "100K+" },
    { label: "Donations Processed", value: "$50M+" }
  ];

  const plans = [
    {
      name: "Parish",
      price: "$49",
      period: "/month",
      features: ["Up to 500 members", "Basic features", "Email support", "Donation tracking", "Event management"],
      popular: false
    },
    {
      name: "Diocese",
      price: "$149",
      period: "/month",
      features: ["Up to 2000 members", "All features", "Priority support", "Multi-location", "Advanced reporting", "API access"],
      popular: true
    },
    {
      name: "Archdiocese",
      price: "Custom",
      period: "",
      features: ["Unlimited members", "Custom features", "Dedicated support", "White-label", "Advanced integrations"],
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
        <div className="floating-orb w-64 h-64 bg-purple-500/10 top-1/2 -left-32" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="glass">
                  <Church className="w-4 h-4 mr-2" />
                  Catholic Church Management
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold">
                  Church<span className="text-gradient">X</span>
                  <br />
                  <span className="text-2xl md:text-3xl text-muted-foreground font-normal">
                    Sacred Management System
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  AI-integrated church management system specifically designed for 
                  Roman Catholic churches and dioceses. Manage members, donations, 
                  events, and sacraments with divine efficiency.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group">
                  <Play className="w-4 h-4 mr-2" />
                  Start Free Trial
                  <Cross className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  <Code className="w-4 h-4 mr-2" />
                  View Documentation
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span>Secure & Private</span>
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
                    <span className="text-sm text-muted-foreground ml-4">churchx-config.js</span>
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
              Sacred <span className="text-gradient">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything your parish needs for spiritual and administrative excellence
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

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Catholic Communities</h2>
            <p className="text-muted-foreground">Serving parishes and dioceses worldwide</p>
          </div>
          
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
              Heavenly <span className="text-gradient">Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Affordable solutions for parishes of all sizes
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
                    {plan.name === "Archdiocese" ? "Contact Us" : "Start Free Trial"}
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
              Ready to modernize your parish management?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of Catholic churches already using ChurchX for their administrative needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="group">
                Start Free Trial
                <Cross className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChurchX;