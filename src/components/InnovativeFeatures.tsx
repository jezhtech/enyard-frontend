import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Cloud, Code, Zap, Shield, Rocket } from "lucide-react";

const InnovativeFeatures = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Machine learning algorithms that adapt and optimize your business processes in real-time.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Cloud-Native Architecture",
      description: "Built for the cloud with automatic scaling, global distribution, and 99.99% uptime guarantee.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Developer-First Platform",
      description: "APIs, SDKs, and tools designed by developers for developers. Ship faster with better DX.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Microsecond response times with edge computing and intelligent caching strategies.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption, SOC 2 compliance, and zero-trust architecture.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Infinite Scalability",
      description: "From startup to enterprise, scale seamlessly without infrastructure worries or performance degradation.",
      color: "from-indigo-500 to-purple-500"
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-32 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              Why Choose ENYARD
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The future of enterprise
              <span className="block text-gradient-animate">software is here</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the next generation of business tools powered by AI, 
              built for scale, and designed for the modern enterprise.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className={`relative group transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative p-8 bg-white rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group-hover:shadow-colored">
                  {/* Icon with Gradient Background */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-0.5`}>
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-gray-700" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Hover Effect Arrow */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  {/* Gradient Border on Hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div 
          className={`text-center mt-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="flex items-center">
              Explore All Features
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InnovativeFeatures;