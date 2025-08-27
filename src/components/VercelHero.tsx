import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, ChevronDown, X, Zap, Building2, Users, Globe, Target, Rocket, CheckCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const VercelHero = () => {
  const heroRef = useRef<HTMLElement>(null);
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
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section 
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
      >
        {/* Innovative Multi-layered Creative Background */}
        <div className="absolute inset-0">
          {/* Pure white base */}
          <div className="absolute inset-0 bg-white" />
          
          {/* Subtle geometric grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(90deg, #000 1px, transparent 1px),
                linear-gradient(0deg, #000 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
          
          {/* Floating geometric shapes */}
          <div 
            className="absolute top-20 left-20 w-32 h-32 opacity-[0.08] animate-pulse"
            style={{
              background: 'linear-gradient(45deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              animationDuration: '8s',
              filter: 'blur(1px)',
            }}
          />
          <div 
            className="absolute top-40 right-32 w-24 h-24 opacity-[0.06] animate-pulse"
            style={{
              background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #fbbf24 100%)',
              borderRadius: '50%',
              animationDuration: '6s',
              animationDelay: '2s',
              filter: 'blur(1px)',
            }}
          />
          <div 
            className="absolute bottom-40 left-32 w-28 h-28 opacity-[0.05] animate-pulse"
            style={{
              background: 'linear-gradient(135deg, #fef3c7 0%, #fbbf24 50%, #f59e0b 100%)',
              borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%',
              animationDuration: '7s',
              animationDelay: '1s',
              filter: 'blur(1px)',
            }}
          />
          <div 
            className="absolute top-60 right-20 w-20 h-20 opacity-[0.04] animate-pulse"
            style={{
              background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #a7f3d0 100%)',
              borderRadius: '50%',
              animationDuration: '5s',
              animationDelay: '3s',
              filter: 'blur(1px)',
            }}
          />
          
          {/* Dynamic gradient overlay */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              background: `
                radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
              `,
              filter: 'blur(40px)',
            }}
          />
          
          {/* Animated mesh gradient */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              background: `
                linear-gradient(45deg, 
                  rgba(102, 126, 234, 0.1) 0%, 
                  rgba(118, 75, 162, 0.1) 25%, 
                  rgba(240, 147, 251, 0.1) 50%,
                  rgba(245, 87, 108, 0.1) 75%,
                  rgba(79, 172, 254, 0.1) 100%
                )
              `,
              backgroundSize: '400% 400%',
              animation: 'gradientShift 15s ease infinite',
            }}
          />
          
          {/* Geometric accent */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-32 opacity-[0.02]"
            style={{
              background: `
                linear-gradient(45deg, 
                  rgba(102, 126, 234, 0.1) 0%, 
                  rgba(118, 75, 162, 0.1) 25%, 
                  rgba(240, 147, 251, 0.1) 50%,
                  rgba(245, 87, 108, 0.1) 75%,
                  rgba(34, 197, 94, 0.1) 100%
                )
              `,
              clipPath: 'polygon(0 100%, 100% 100%, 100% 60%, 80% 40%, 60% 60%, 40% 40%, 20% 60%, 0 40%)',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Animated Badge */}
          <div 
            className={`inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8 border border-gray-200/50 shadow-sm transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-blue-600" />
            <span className="text-xs md:text-sm font-medium text-gray-700">Where Innovation Meets Intelligence</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
            <h1 
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <span className="block text-gray-900">Elevate Your Venture</span>
              <span className="block text-gradient-animate">Beyond Imagination</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p 
            className={`text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            Revolutionizes venture management with intelligent applications that think, learn, and evolve. 
            Transform your operations from reactive to predictive, from manual to autonomous, from today to tomorrow.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.8s' }}
          >
            <Button 
              size="lg" 
              onClick={() => setIsDialogOpen(true)}
              className="group relative overflow-hidden bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center">
                Begin Your Transformation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 group shadow-sm"
            >
              <span className="flex items-center text-gray-700">
                <Play className="mr-2 h-5 w-5" />
                Witness the Revolution
              </span>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1s' }}
          >
            <div className="flex flex-col items-center text-gray-500">
              <span className="text-sm font-medium mb-2">Scroll to explore</span>
              <ChevronDown className="h-5 w-5 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-30" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-500 rounded-full animate-pulse opacity-30" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-32 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse opacity-30" style={{ animationDelay: '2s' }} />
        <div className="absolute top-60 right-20 w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse opacity-30" style={{ animationDelay: '0.5s' }} />
      </section>

      {/* Transformation Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-bold flex items-center justify-center">
              <Zap className="w-6 h-6 mr-2 text-primary" />
              Begin Your Transformation
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

export default VercelHero;