import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Code,
  Terminal,
  Zap,
  ArrowLeftRight,
  BrainCircuit,
  FolderUp,
  FileClock,
} from "lucide-react";

const WorkX365 = () => {
  const [typedText, setTypedText] = useState("");

  const fullText =
    "import { DocX } from '@enyard/docx';\n\nconst dms = new DocX({\n  storage: 'cloud', // 'on-premise'\n  encryption: 'AES_256',\n  workflows: {\n    contract_approval: true,\n    invoice_routing: true,\n  },\n  ai: {\n    metadata_tagging: true,\n    full_text_search: true,\n  }\n});\nawait dms.initialize();\nconsole.log('🔒 DocX System Ready');";

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [typedText, fullText]);

  const features = [
    {
      icon: ArrowLeftRight,
      title: "Assigned Workflow & Automation",
      description: "Manage multi-step processes with Assigned Workflows. Route documents based on rules, set automatic reminders, and track document status in real-time.                  ",
      code: "policy.enforce('Approval')",
    },
    {
      icon: BrainCircuit,
      title: "Deep Search & Advanced Filtering",
      description: "Utilize Deep Search combined with filters for Meta Tags, Document Status, and Client to find any file in seconds, no matter the volume.                                 ",
      code: "DocX.AI.deepSearch()",
    },
    {
      icon: FolderUp,
      title: "Bulk Upload & File Request",
      description: "Streamline document ingestion. Easily handle high-volume document migration with Bulk Upload or use File Request to securely collect documents from external parties.    ",
      code: "DocX.IO.batchUpload()",
    },
    {
      icon: FileClock,
      title: "Comprehensive Audit Trail",
      description: "A dedicated Documents Audit Trail logs every action, ensuring an unalterable, transparent history of who accessed, modified, or signed every single file.                 ",
      code: "DocX.Log.getHistory(doc)",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      features: [
        "Up to 50 employees",
        "Basic AI recognition",
        "Mobile app",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      features: [
        "Up to 500 employees",
        "Advanced AI analytics",
        "Camera integration",
        "24/7 support",
        "Custom reports",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Unlimited employees",
        "Full AI suite",
        "Multi-location",
        "Dedicated support",
        "Custom integrations",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-background opacity-30" />
        <div className="floating-orb w-96 h-96 bg-primary/10 -top-48 -right-48" />
        <div className="floating-orb w-64 h-64 bg-blue-500/10 top-1/2 -left-32" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="glass">
                  <Terminal className="w-4 h-4 mr-2" />
                  Document Management
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold">
                  Work<span className="text-gradient">X</span>365
                  <br />
                  <span className="text-2xl md:text-3xl text-muted-foreground font-normal">
                    Intelligent Document Control.
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Experience a revolutionary approach to document management. DocX combines granular Role-Based Access with an intuitive system to organize, secure, and automate the entire document lifecycle for every team.


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
                  View Documentation
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>🔍 Deep Search & Meta Tags</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span>📈 Documents Audit Trail</span>
                </div>
              </div>
            </div>

            {/* Code Terminal */}
            <div className="relative">
              <Card className="glass border-border/50 overflow-hidden">
                <CardHeader className="bg-muted/30 py-2 px-3 border-b border-border/50">
                  <div className="flex items-center space-x-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <span className="text-sm text-muted-foreground ml-4">
                      docX-demo.js
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-6 bg-slate-900 font-mono text-sm min-h-[260px]">
                  <div className="space-y-1">
                    {typedText.split("\n").map((line, i, arr) => (
                      <div key={i} className="flex items-start">
                        <span className="text-muted-foreground/50 w-8 flex-shrink-0 text-right mr-4 select-none">
                          {i + 1}
                        </span>
                        <pre className="flex-grow m-0 p-0 text-green-400 whitespace-pre-wrap">
                          {line}
                          {i === arr.length - 1 && (
                            <span className="animate-pulse inline">|</span>
                          )}
                        </pre>
                      </div>
                    ))}
                  </div>
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
              Powerful <span className="text-gradient">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Built for developers, designed for enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="group hover-lift glass border-0 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="relative z-10">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  <div className="bg-slate-900/50 rounded p-3 font-mono text-sm text-green-400">
                    {feature.code}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Simple <span className="text-gradient">Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the perfect plan for your organization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative overflow-hidden ${plan.popular ? "border-primary shadow-lg scale-105" : "glass"}`}
              >
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
                    {plan.name === "Enterprise"
                      ? "Contact Sales"
                      : "Start Free Trial"}
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
              Ready to revolutionize your attendance system?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of companies already using WorkX365 for seamless
              attendance management.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="group">
                Start Free Trial
                <Zap className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
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

export default WorkX365;
