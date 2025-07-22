import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Users,
  HeadphonesIcon,
  Globe,
  Calendar,
  CheckCircle,
  Star
} from 'lucide-react';

const Contact = () => {
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses to your questions',
      contact: 'support@enyard.com',
      availability: 'Replies within 2-4 hours',
      type: 'primary'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      contact: '+1 (555) 123-4567',
      availability: 'Mon-Fri, 9 AM - 6 PM EST',
      type: 'secondary'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Instant help when you need it',
      contact: 'Start Chat',
      availability: '24/7 Available',
      type: 'accent'
    },
    {
      icon: Calendar,
      title: 'Schedule Call',
      description: 'Book a personalized consultation',
      contact: 'Book Meeting',
      availability: 'Available slots daily',
      type: 'secondary'
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Tech Street, Suite 500',
      country: 'United States',
      phone: '+1 (555) 123-4567',
      email: 'sf@enyard.com',
      timezone: 'PST',
      isHeadquarters: true
    },
    {
      city: 'London',
      address: '456 Innovation Lane, Floor 3',
      country: 'United Kingdom',
      phone: '+44 20 7123 4567',
      email: 'london@enyard.com',
      timezone: 'GMT'
    },
    {
      city: 'Singapore',
      address: '789 Business District, Tower A',
      country: 'Singapore',
      phone: '+65 6123 4567',
      email: 'sg@enyard.com',
      timezone: 'SGT'
    },
    {
      city: 'Toronto',
      address: '321 Startup Hub, Level 8',
      country: 'Canada',
      phone: '+1 (416) 123-4567',
      email: 'toronto@enyard.com',
      timezone: 'EST'
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'sales', label: 'Sales & Pricing' },
    { value: 'support', label: 'Technical Support' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'careers', label: 'Careers' },
    { value: 'media', label: 'Media & Press' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 gradient-mesh opacity-30"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        
        <div className="container relative z-10 text-center">
          <div className="stagger-item" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gradient-animate">
              Contact Us
            </h1>
          </div>
          
          <div className="stagger-item" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12">
              Ready to transform your business with AI-powered solutions? 
              Our team is here to help you every step of the way.
            </p>
          </div>
          
          <div className="stagger-item" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-center space-x-8 text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-500" />
                <span>Expert Guidance</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-2 text-blue-500" />
                <span>Global Reach</span>
              </div>
            </div>
          </div>
        </div>

        <div className="floating-orb w-64 h-64 top-10 right-10 bg-gradient-to-br from-teal-400 to-blue-600 opacity-20" />
        <div className="floating-orb w-48 h-48 bottom-10 left-10 bg-gradient-to-br from-purple-400 to-pink-600 opacity-20" />
      </section>

      {/* Contact Methods */}
      <section className="py-24 relative">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Get In Touch</h2>
            <p className="text-muted-foreground">Choose the best way to reach us</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-6 text-center magnetic-card glass group cursor-pointer">
                <div className="p-3 rounded-xl bg-primary/10 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                  {method.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {method.description}
                </p>
                <div className="font-semibold text-primary mb-2">
                  {method.contact}
                </div>
                <Badge variant="outline" className="text-xs">
                  {method.availability}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="p-8 glass-strong">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your project or requirements..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gradient">
                  Why Choose ENYARD?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-primary mt-2" />
                    <div>
                      <h4 className="font-semibold mb-1">AI-Powered Innovation</h4>
                      <p className="text-muted-foreground text-sm">
                        Cutting-edge AI technology integrated into every solution
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-primary mt-2" />
                    <div>
                      <h4 className="font-semibold mb-1">Cloud-Native Architecture</h4>
                      <p className="text-muted-foreground text-sm">
                        Scalable, secure, and reliable cloud-based solutions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-primary mt-2" />
                    <div>
                      <h4 className="font-semibold mb-1">24/7 Expert Support</h4>
                      <p className="text-muted-foreground text-sm">
                        Round-the-clock assistance from our technical experts
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-primary mt-2" />
                    <div>
                      <h4 className="font-semibold mb-1">Rapid Implementation</h4>
                      <p className="text-muted-foreground text-sm">
                        Quick deployment with minimal disruption to your business
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6 glass">
                <h4 className="font-bold mb-4 flex items-center">
                  <HeadphonesIcon className="h-5 w-5 mr-2 text-primary" />
                  Need Immediate Help?
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  For urgent technical issues or critical support needs, our emergency 
                  hotline is available 24/7.
                </p>
                <Button variant="outline" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Emergency Support
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-24 relative">
        <div className="absolute inset-0 mesh-background opacity-10" />
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">
              Global Presence
            </h2>
            <p className="text-muted-foreground">
              We're here to serve you across the globe
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="p-6 magnetic-card glass relative">
                {office.isHeadquarters && (
                  <Badge className="absolute top-4 right-4 bg-primary/10 text-primary border-primary/20">
                    HQ
                  </Badge>
                )}
                
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">{office.city}</h3>
                  <p className="text-muted-foreground text-sm">{office.country}</p>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{office.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{office.timezone}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-8 text-gradient">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Can't find the answer you're looking for? Our support team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              View FAQ
            </Button>
            <Button size="lg" variant="outline">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;