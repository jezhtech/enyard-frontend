import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Building2, Truck, Shield, Heart, ArrowRight, Terminal } from "lucide-react";

const ProductsShowcase = () => {
  const products = [
    {
      name: "TimeX",
      description: "Intelligent attendance management with AI-powered insights",
      icon: Clock,
      features: ["Biometric Integration", "Real-time Analytics", "Smart Scheduling"],
      color: "from-blue-500/20 to-blue-600/20",
    },
    {
      name: "CoreX",
      description: "Complete ERP solution for modern enterprises",
      icon: Building2,
      features: ["Financial Management", "Inventory Control", "Process Automation"],
      color: "from-green-500/20 to-green-600/20",
    },
    {
      name: "FleetX",
      description: "Smart fleet booking and management system",
      icon: Truck,
      features: ["Route Optimization", "Predictive Maintenance", "Cost Analytics"],
      color: "from-orange-500/20 to-orange-600/20",
    },
    {
      name: "XSafety",
      description: "Advanced safety management system for airlines",
      icon: Shield,
      features: ["Incident Monitoring", "Hazard Analysis", "Safety Auditing"],
      color: "from-purple-500/20 to-purple-600/20",
    },
    {
      name: "MedzorX",
      description: "Advanced hospital management system",
      icon: Heart,
      features: ["Patient Records", "Appointment Scheduling", "Medical Analytics"],
      color: "from-red-500/20 to-red-600/20",
    },
    {
      name: "Penguin",
      description: "Cybersecurity learning platform for enthusiasts",
      icon: Terminal,
      features: ["Interactive Labs", "Vulnerability Databases", "Tool Integrations"],
      color: "from-gray-500/20 to-gray-600/20",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Product
            <span className="text-gradient"> Ecosystem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Six powerful solutions, one unified platform. Each product is enhanced 
            with AI capabilities to streamline your operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card 
                key={product.name} 
                className={`group hover-lift glass border-0 relative overflow-hidden ${
                  index === 2 ? 'lg:col-span-1 lg:row-span-1' : ''
                }`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-muted-foreground mb-6">
              Schedule a demo to see how our AI-powered solutions can revolutionize your operations.
            </p>
            <Button size="lg" className="group">
              Schedule Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;