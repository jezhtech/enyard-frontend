import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal, Bug, Shield, Code, Users, Calendar, Play, Zap, Lightbulb, Lock, Search, CheckCircle, ArrowRight } from "lucide-react";

const Penguin = () => {
  const [activeModule, setActiveModule] = useState(0);
  const [typedText, setTypedText] = useState("");

  const fullText = `// Penguin Cybersecurity Learning Platform
import { PenguinPlatform } from '@enyard/penguin';

const learningPlatform = new PenguinPlatform({
  modules: [
    'vulnerability-labs',
    'tool-showcase',
    'ctf-challenges',
    'threat-intelligence'
  ],
  user: {
    id: 'cyber_enthusiast_123',
    level: 'intermediate',
    progress: {
      'vulnerability-labs': 75,
      'tool-showcase': 60
    }
  }
});

learningPlatform.init();
learningPlatform.startLearningSession('vulnerability-labs');
`;

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 20); // Typing speed
    return () => clearInterval(typingInterval);
  }, []);

  const modules = [
    {
      name: "Vulnerability Labs",
      icon: Bug,
      description: "Hands-on labs to exploit and understand various software vulnerabilities.",
      features: [
        "OWASP Top 10 Scenarios",
        "Web Application Exploitation",
        "Network Penetration Testing",
        "Binary Exploitation Basics",
      ],
    },
    {
      name: "Tool Showcase",
      icon: Code,
      description: "Explore and learn to use industry-standard cybersecurity tools.",
      features: [
        "Nmap for Network Scanning",
        "Metasploit Framework",
        "Burp Suite for Web Testing",
        "Wireshark for Packet Analysis",
      ],
    },
    {
      name: "CTF Challenges",
      icon: Lock,
      description: "Engage in Capture The Flag challenges to test and hone your skills.",
      features: [
        "Beginner to Advanced Challenges",
        "Forensics & Reverse Engineering",
        "Cryptography Puzzles",
        "Real-world Scenarios",
      ],
    },
    {
      name: "Threat Intelligence",
      icon: Search,
      description: "Stay updated with the latest threats, attack vectors, and defensive strategies.",
      features: [
        "Daily Threat Briefings",
        "Vulnerability Disclosures",
        "Malware Analysis Reports",
        "Industry Best Practices",
      ],
    },
  ];

  const pricingTiers = [
    {
      name: "Explorer",
      price: "$19",
      frequency: "/month",
      features: [
        "Access to Basic Labs",
        "Limited Tool Showcase",
        "Community Forum Access",
        "Monthly Newsletter",
      ],
      buttonText: "Start Exploring",
    },
    {
      name: "Pro Hacker",
      price: "$49",
      frequency: "/month",
      features: [
        "Full Lab Access",
        "Advanced Tool Showcase",
        "CTF Challenges",
        "Priority Support",
        "Threat Intelligence Feeds",
      ],
      buttonText: "Go Pro",
      highlight: true,
    },
    {
      name: "Elite Sentinel",
      price: "$99",
      frequency: "/month",
      features: [
        "All Pro Features",
        "Personalized Mentorship",
        "Exclusive Webinars",
        "Early Access to New Content",
        "Custom Learning Paths",
      ],
      buttonText: "Become Elite",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900 text-white">
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="mesh-background"></div>
            <div className="floating-orb orb-1"></div>
            <div className="floating-orb orb-2"></div>
            <div className="floating-orb orb-3"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <Badge variant="secondary" className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm mb-4 animate-pulse">
              Launching Soon: Oct 1, 2025
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Penguin: Your Cybersecurity Learning Hub
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Empower cybersecurity enthusiasts with a single platform to master tools, explore vulnerabilities, and conquer challenges.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 shadow-lg transform hover:scale-105 transition-transform">
                Get Notified <Play className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white text-lg px-8 py-3 shadow-lg transform hover:scale-105 transition-transform">
                Explore Features <Lightbulb className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Code Showcase Section */}
        <section className="py-20 md:py-32 bg-gray-950 text-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Interactive Learning, Real-world Impact
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Penguin offers a unique, hands-on approach to cybersecurity education. Dive into interactive labs, master essential tools, and tackle real-world scenarios to build practical skills.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Multi-vulnerability exploitation labs</span>
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Comprehensive tool integration and tutorials</span>
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>AI-powered guidance and personalized learning paths</span>
                  </li>
                </ul>
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3 shadow-lg transform hover:scale-105 transition-transform">
                  See How It Works <Zap className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="relative bg-gray-800 rounded-lg shadow-2xl p-6 font-mono text-sm overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  </div>
                  <span className="text-gray-400">penguin-platform.sh</span>
                </div>
                <pre className="whitespace-pre-wrap text-green-300">
                  {typedText}
                  <span className="animate-pulse">_</span>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Core Learning Modules
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Penguin is structured around key cybersecurity domains, offering deep dives into each area.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {modules.map((module, index) => (
                <Card
                  key={module.name}
                  className={`relative overflow-hidden rounded-xl shadow-lg border border-gray-200 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                    ${activeModule === index ? "ring-4 ring-blue-500 ring-opacity-50" : ""}
                  `}
                  onClick={() => setActiveModule(index)}
                >
                  <CardHeader className="p-6 pb-4 flex flex-col items-center">
                    <div className="p-4 rounded-full bg-blue-100 text-blue-600 shadow-md mb-4">
                      <module.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">{module.name}</CardTitle>
                    <p className="text-gray-600 text-center text-sm">
                      {module.description}
                    </p>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <ul className="space-y-2 text-left">
                      {module.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Module View */}
        {modules[activeModule] && (
          <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Deep Dive into {modules[activeModule].name}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    {modules[activeModule].description} Explore the sub-modules and advanced topics within this domain.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {modules[activeModule].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-800">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                        <span className="text-base font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 shadow-lg transform hover:scale-105 transition-transform">
                    <span className="flex items-center">
                      Start Learning {modules[activeModule].name}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  </Button>
                </div>
                <div className="order-1 md:order-2 flex justify-center items-center">
                  <div className="p-8 rounded-full bg-blue-50 text-blue-600 shadow-xl">
                    {(() => {
                      const IconComponent = modules[activeModule].icon;
                      return <IconComponent className="w-32 h-32" />;
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Pricing Section */}
        <section className="py-20 md:py-32 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Flexible Plans for Every Enthusiast
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Choose the plan that best fits your learning journey and cybersecurity aspirations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <Card
                  key={tier.name}
                  className={`bg-gray-800 text-white rounded-xl shadow-2xl border ${tier.highlight ? "border-blue-500 ring-4 ring-blue-500 ring-opacity-50" : "border-gray-700"}
                    transform transition-all duration-300 hover:scale-105 hover:shadow-3xl
                  `}
                >
                  <CardHeader className="p-8 pb-4">
                    <CardTitle className="text-3xl font-bold mb-2">{tier.name}</CardTitle>
                    <p className="text-gray-400">{tier.name === "Explorer" ? "Perfect for beginners" : tier.name === "Pro Hacker" ? "For serious learners" : "Master cybersecurity"}</p>
                    <div className="my-6">
                      <span className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        {tier.price}
                      </span>
                      <span className="text-xl text-gray-400">{tier.frequency}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <ul className="space-y-3 mb-8 text-left">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      size="lg"
                      className={`w-full text-lg px-8 py-3 shadow-lg ${tier.highlight ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-700 hover:bg-gray-600"} text-white`}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Penguin; 