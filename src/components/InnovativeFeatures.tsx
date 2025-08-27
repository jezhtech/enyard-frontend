import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Cloud, Code, Zap, Shield, Rocket, X, Building2, Users, Target, CheckCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const InnovativeFeatures = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    companySize: '',
    challenges: '',
    goals: '',
    timeline: '',
    budget: '',
    contactName: '',
    email: '',
    phone: '',
    preferredContact: 'email'
  });

  const totalSteps = 4;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsDialogOpen(false);
    setCurrentStep(1);
    setFormData({
      companyName: '',
      industry: '',
      companySize: '',
      challenges: '',
      goals: '',
      timeline: '',
      budget: '',
      contactName: '',
      email: '',
      phone: '',
      preferredContact: 'email'
    });
  };

  const getStepProgress = () => {
    return (currentStep / totalSteps) * 100;
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Tell us about your company</h3>
              <p className="text-muted-foreground">Let's start with the basics</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  placeholder="Enter your company name"
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="industry">Industry *</Label>
                <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="companySize">Company Size *</Label>
                <Select value={formData.companySize} onValueChange={(value) => handleInputChange('companySize', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 employees</SelectItem>
                    <SelectItem value="11-50">11-50 employees</SelectItem>
                    <SelectItem value="51-200">51-200 employees</SelectItem>
                    <SelectItem value="201-1000">201-1000 employees</SelectItem>
                    <SelectItem value="1000+">1000+ employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">What are your challenges?</h3>
              <p className="text-muted-foreground">Help us understand your needs</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="challenges">Current Challenges *</Label>
                <Textarea
                  id="challenges"
                  value={formData.challenges}
                  onChange={(e) => handleInputChange('challenges', e.target.value)}
                  placeholder="Describe the main challenges your company is facing..."
                  className="mt-2 min-h-[100px]"
                />
              </div>
              
              <div>
                <Label htmlFor="goals">Goals & Objectives *</Label>
                <Textarea
                  id="goals"
                  value={formData.goals}
                  onChange={(e) => handleInputChange('goals', e.target.value)}
                  placeholder="What do you want to achieve with our solutions?"
                  className="mt-2 min-h-[100px]"
                />
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Project Details</h3>
              <p className="text-muted-foreground">Let's plan your transformation</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="timeline">Timeline *</Label>
                <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate (0-3 months)</SelectItem>
                    <SelectItem value="short">Short term (3-6 months)</SelectItem>
                    <SelectItem value="medium">Medium term (6-12 months)</SelectItem>
                    <SelectItem value="long">Long term (12+ months)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="budget">Budget Range *</Label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-10k">Under $10,000</SelectItem>
                    <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                    <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                    <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                    <SelectItem value="500k+">$500,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p className="text-muted-foreground">We'll get back to you soon</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="contactName">Full Name *</Label>
                <Input
                  id="contactName"
                  value={formData.contactName}
                  onChange={(e) => handleInputChange('contactName', e.target.value)}
                  placeholder="Enter your full name"
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email address"
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Enter your phone number"
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                <Select value={formData.preferredContact} onValueChange={(value) => handleInputChange('preferredContact', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="phone">Phone</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

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
      description: "Build applications that evolve with your business. Our intelligent development platform creates solutions that learn, adapt, and grow alongside your venture needs.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Lightning-Fast Performance",
      description: "Experience venture speed at its finest. Microsecond response times, instant deployments, and real-time analytics that keep your business running at peak efficiency.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security & Compliance",
      description: "Zero-trust architecture that protects your venture data at every level. Process terabytes of infrastructure worries with confidence.",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: Rocket,
      title: "Scalable Growth Solutions",
      description: "Built for ventures that dream big. Our platform scales with your ambitions, from startup to enterprise, without missing a beat.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <>
      <section 
        ref={sectionRef}
        className="py-32 relative bg-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-20">
            <div 
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 text-gray-700 text-xs md:text-sm font-medium mb-4 md:mb-6">
                Why Ventures Choose ENYARD
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
                The Future of
                <span className="block text-gradient-animate">Venture Management</span>
              </h2>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
                Join forward-thinking ventures that have discovered the power of intelligent automation. 
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
                  className={`group relative p-6 md:p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border border-gray-100 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 0.1}s`,
                    background: `linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)`
                  }}
                >
                  {/* Icon Section */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 md:p-4 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10`}>
                      <IconComponent className={`h-6 w-6 md:h-8 md:w-8 text-gradient-to-br ${feature.color} bg-clip-text`} />
                    </div>
                    
                    {/* Hover Effect Arrow - Fixed at bottom */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0">
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
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
                  </div>

                  {/* Gradient Border on Hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
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
              onClick={() => setIsDialogOpen(true)}
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

      {/* Transformation Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-bold flex items-center justify-center">
              <Rocket className="w-6 h-6 mr-2 text-primary" />
              Transform Your Business
            </DialogTitle>
            <p className="text-muted-foreground">Let's create your personalized transformation roadmap</p>
          </DialogHeader>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Step {currentStep} of {totalSteps}</span>
              <span>{Math.round(getStepProgress())}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${getStepProgress()}%` }}
              />
            </div>
          </div>

          {/* Step Content */}
          <div className="py-4">
            {renderStepContent()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center"
            >
              Previous
            </Button>
            
            <div className="flex gap-2">
              {currentStep < totalSteps ? (
                <Button onClick={nextStep} className="flex items-center">
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="flex items-center bg-green-600 hover:bg-green-700">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Submit & Begin Transformation
                </Button>
              )}
            </div>
          </div>

          {/* Step Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSteps }, (_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index + 1 === currentStep
                    ? 'bg-primary scale-125'
                    : index + 1 < currentStep
                    ? 'bg-green-500'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InnovativeFeatures;