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
      title: "Intelligent Business Automation",
      description: "Transform complex business processes into intelligent workflows. Our platform learns your operations and automates everything from data entry to decision-making, saving thousands of hours annually.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Enterprise-Grade Infrastructure",
      description: "Scale without limits on our bulletproof cloud platform. 99.99% uptime, global distribution, and enterprise security that keeps your data safe while enabling seamless growth.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Future-Ready Applications",
      description: "Build applications that evolve with your business. Our intelligent development platform creates solutions that learn, adapt, and grow alongside your enterprise needs.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Lightning-Fast Performance",
      description: "Experience enterprise speed at its finest. Microsecond response times, instant deployments, and real-time analytics that keep your business running at peak efficiency.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security & Compliance",
      description: "Bank-grade security with intelligent threat detection. SOC 2 compliant, GDPR ready, and zero-trust architecture that protects your enterprise data at every level.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Unlimited Enterprise Scalability",
      description: "From startup to Fortune 500, our platform scales with your ambition. Handle millions of users, process terabytes of data, and grow without infrastructure worries.",
      color: "from-indigo-500 to-purple-500"
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-32 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
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
        <div className="text-center mb-12 md:mb-20">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
              Why Enterprises Choose ENYARD
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
              The Future of
              <span className="block text-gradient-animate">Enterprise Management</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Join forward-thinking enterprises that have discovered the power of intelligent automation. 
              Our platform doesn't just improve efficiency—it redefines how businesses operate.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                <div className="relative p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group-hover:shadow-colored h-full flex flex-col">
                  {/* Icon with Gradient Background */}
                  <div className="relative mb-4 md:mb-6 flex-shrink-0">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${feature.color} p-0.5`}>
                      <div className="w-full h-full bg-white rounded-xl md:rounded-2xl flex items-center justify-center">
                        <IconComponent className="h-6 w-6 md:h-8 md:w-8 text-gray-700" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex-shrink-0">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6 flex-1">
                      {feature.description}
                    </p>

                    {/* Hover Effect Arrow - Fixed at bottom */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0">
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
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
              Transform Your Business
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InnovativeFeatures;