import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Users, Target, Award, Lightbulb, Rocket, Heart } from 'lucide-react';

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { label: 'Clients Served', value: '500+', icon: Users },
    { label: 'Projects Delivered', value: '1000+', icon: Target },
    { label: 'Awards Won', value: '25+', icon: Award },
    { label: 'Years Experience', value: '10+', icon: Lightbulb }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We leverage cutting-edge AI technology to create solutions that push boundaries.',
      icon: Rocket,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Client-Centric',
      description: 'Every solution is crafted with our clients\' success as the primary focus.',
      icon: Heart,
      gradient: 'from-pink-500 to-red-500'
    },
    {
      title: 'Excellence Driven',
      description: 'We maintain the highest standards in every project we undertake.',
      icon: Award,
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 mesh-background opacity-30"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        
        <div className="container relative z-10 text-center">
          <div className="stagger-item" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-7xl md:text-9xl font-bold mb-8 text-gradient-animate">
              About ENYARD
            </h1>
          </div>
          
          <div className="stagger-item" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12">
              Pioneering the future of software development with AI-powered solutions 
              that transform businesses and enhance user experiences across the globe.
            </p>
          </div>
          
          <div className="stagger-item" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="group">
              Our Journey
              <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="floating-orb w-64 h-64 top-20 left-10 bg-gradient-to-br from-blue-400 to-purple-600 opacity-20" />
        <div className="floating-orb w-48 h-48 bottom-20 right-10 bg-gradient-to-br from-pink-400 to-red-600 opacity-20" />
      </section>

      {/* Stats Section */}
      <section className="py-24 relative">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-8 text-center magnetic-card glass">
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 text-gradient">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                To democratize advanced technology by creating intuitive, AI-powered software solutions 
                that empower businesses to achieve unprecedented growth and efficiency. We believe 
                technology should be accessible, powerful, and transformative.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-primary" />
                  <span>AI-First Development Approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-primary" />
                  <span>Cloud-Native Architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-primary" />
                  <span>User-Centric Design Philosophy</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-strong rounded-3xl p-8 magnetic-card">
                <div className="aspect-square bg-gradient-mesh rounded-2xl flex items-center justify-center">
                  <Lightbulb className="h-24 w-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 text-gradient">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision we make and every solution we create.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 magnetic-card glass relative overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <value.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 mesh-background opacity-10" />
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 text-gradient">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Passionate innovators, creative problem-solvers, and technology enthusiasts 
              working together to shape the future of software development.
            </p>
            <Button size="lg" variant="outline">
              Join Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;