import { Zap, Brain, Cloud, Shield, Rocket, Globe, Users, TrendingUp } from "lucide-react";

const InfiniteMarquee = () => {
  const features = [
    { icon: Brain, text: "AI-Powered Intelligence" },
    { icon: Cloud, text: "100% Cloud-Native" },
    { icon: Zap, text: "Lightning Performance" },
    { icon: Shield, text: "Enterprise Security" },
    { icon: Rocket, text: "Instant Deployment" },
    { icon: Globe, text: "Global Scale" },
    { icon: Users, text: "Team Collaboration" },
    { icon: TrendingUp, text: "Growth Analytics" },
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground overflow-hidden">
      <div className="relative">
        {/* Top Marquee */}
        <div className="flex whitespace-nowrap infinite-scroll">
          {[...features, ...features].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex items-center space-x-3 mx-8">
                <IconComponent className="h-6 w-6" />
                <span className="text-lg font-medium">{feature.text}</span>
                <div className="w-1 h-1 bg-primary-foreground/30 rounded-full" />
              </div>
            );
          })}
        </div>
        
        {/* Stats Counter */}
        <div className="py-8 border-t border-primary-foreground/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">1M+</div>
                <div className="text-primary-foreground/80">Users Worldwide</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.99%</div>
                <div className="text-primary-foreground/80">Uptime SLA</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-primary-foreground/80">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-primary-foreground/80">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteMarquee;