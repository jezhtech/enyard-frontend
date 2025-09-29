import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Briefcase,
  GraduationCap,
  Coffee,
  Gamepad2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Career = () => {
  const navigate = useNavigate();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const positions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      salary: "$80k - $120k",
      tags: ["React", "Node.js", "TypeScript", "AI Integration"],
      description:
        "Lead development of AI-powered applications and mentor junior developers.",
    },
    {
      title: "AI/ML Engineer",
      department: "Research",
      location: "Remote",
      type: "Full-time",
      salary: "$100k - $150k",
      tags: ["Python", "TensorFlow", "PyTorch", "NLP"],
      description:
        "Design and implement AI solutions that power our innovative products.",
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "On-site / Hybrid",
      type: "Full-time",
      salary: "$70k - $100k",
      tags: ["Figma", "Design Systems", "User Research", "Prototyping"],
      description:
        "Create intuitive and beautiful user experiences for our software solutions.",
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $130k",
      tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      description:
        "Build and maintain scalable cloud infrastructure for our applications.",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Hybrid",
      type: "Full-time",
      salary: "$85k - $120k",
      tags: ["Strategy", "Analytics", "Agile", "User Stories"],
      description:
        "Drive product vision and strategy for our innovative software solutions.",
    },
    {
      title: "Frontend Developer (Intern)",
      department: "Engineering",
      location: "Remote",
      type: "Internship",
      salary: "$20k - $30k",
      tags: ["React", "JavaScript", "CSS", "Learning"],
      description:
        "Learn and contribute to our frontend development with mentorship.",
    },
  ];

  const benefits = [
    {
      icon: Coffee,
      title: "Flexible Work",
      description:
        "Work from anywhere with flexible hours that suit your lifestyle.",
    },
    {
      icon: GraduationCap,
      title: "Learning & Growth",
      description:
        "Continuous learning opportunities and conference attendance.",
    },
    {
      icon: Users,
      title: "Great Team",
      description:
        "Work with passionate, talented people who care about excellence.",
    },
    {
      icon: Gamepad2,
      title: "Work-Life Balance",
      description: "Enjoy unlimited PTO and company-wide mental health days.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />

        <div className="container relative z-10 text-center">
          <div className="stagger-item" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-7xl md:text-9xl font-bold mb-8 text-black">
              Join ENYARD
            </h1>
          </div>

          <div className="stagger-item" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12">
              Shape the future of AI-powered software development. Work with
              cutting-edge technology and brilliant minds to create solutions
              that change the world.
            </p>
          </div>

          <div className="stagger-item" style={{ animationDelay: "0.3s" }}>
            <Button
              onClick={() => {
                const section = document.getElementById("open-positions");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              size="lg"
              className="group"
            >
              View Open Positions
              <Briefcase className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="floating-orb w-72 h-72 top-10 right-10 bg-gradient-to-br from-green-400 to-blue-600 opacity-20" />
        <div className="floating-orb w-56 h-56 bottom-10 left-10 bg-gradient-to-br from-yellow-400 to-pink-600 opacity-20" />
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 text-gradient">
              Why Join Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in creating an environment where innovation thrives and
              people grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 text-center magnetic-card glass">
                <benefit.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 text-gradient">
              Open Positions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find your next challenge and help us build the future of software.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <Card
                key={index}
                className="p-8 magnetic-card glass group hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {position.title}
                    </h3>
                    <Badge variant="secondary" className="mb-2">
                      {position.department}
                    </Badge>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Apply
                  </Button>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {position.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {position.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {position.type}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <DollarSign className="h-4 w-4 mr-2" />
                    {position.salary}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {position.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 mesh-background opacity-10" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 text-gradient">
                Our Culture
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We foster a culture of innovation, collaboration, and continuous
                learning. Our team is passionate about technology and committed
                to delivering exceptional results while maintaining work-life
                balance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-primary" />
                  <span>Remote-first culture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-primary" />
                  <span>Transparent communication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-primary" />
                  <span>Innovation time (20% projects)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-primary" />
                  <span>Diversity and inclusion</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass-strong rounded-3xl p-8 magnetic-card">
                <div className="aspect-square bg-gradient-vercel rounded-2xl flex items-center justify-center">
                  <Users className="h-24 w-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container text-center">
          <h2 className="text-5xl font-bold mb-8 text-gradient">
            Ready to Start?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Don't see the perfect role? We're always looking for exceptional
            talent. Send us your resume and let's start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Submit Your Resume</Button>
            <Button
              onClick={() => navigate("/about")}
              size="lg"
              variant="outline"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
