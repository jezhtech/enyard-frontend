import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Eye, 
  Lock, 
  Users, 
  Database, 
  Globe, 
  Mail, 
  Phone,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Info,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';

const Privacy = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['overview']));

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const privacyFeatures = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption and security protocols protect your data"
    },
    {
      icon: Eye,
      title: "Transparent Practices",
      description: "Clear, understandable privacy policies with no hidden terms"
    },
    {
      icon: Lock,
      title: "Data Control",
      description: "You own your data. Full control over what we collect and store"
    },
    {
      icon: Users,
      title: "User Rights",
      description: "Access, modify, or delete your data anytime with ease"
    }
  ];

  const dataCategories = [
    {
      category: "Personal Information",
      items: ["Name and contact details", "Company information", "Account credentials"],
      purpose: "Account management and communication"
    },
    {
      category: "Usage Data",
      items: ["Application usage patterns", "Feature interactions", "Performance metrics"],
      purpose: "Service improvement and optimization"
    },
    {
      category: "Technical Data",
      items: ["Device information", "IP addresses", "Browser details"],
      purpose: "Security and compatibility"
    },
    {
      category: "Business Data",
      items: ["Company workflows", "Process data", "Analytics"],
      purpose: "Service delivery and support"
    }
  ];

  const userRights = [
    {
      title: "Right to Access",
      description: "Request a copy of all personal data we hold about you",
      icon: Eye
    },
    {
      title: "Right to Rectification",
      description: "Correct inaccurate or incomplete personal data",
      icon: CheckCircle
    },
    {
      title: "Right to Erasure",
      description: "Request deletion of your personal data",
      icon: AlertTriangle
    },
    {
      title: "Right to Portability",
      description: "Receive your data in a structured, machine-readable format",
      icon: Database
    },
    {
      title: "Right to Object",
      description: "Object to processing of your personal data",
      icon: Users
    },
    {
      title: "Right to Restriction",
      description: "Limit how we process your personal data",
      icon: Lock
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Shield className="w-4 h-4 mr-2" />
              Privacy & Security
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Your Privacy, Our Priority
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              At ENYARD, we believe privacy is a fundamental human right. Our comprehensive privacy policy 
              ensures your data is protected, transparent, and under your control.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-sm">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield className="w-5 h-5 text-blue-300" />
                <span className="text-sm">SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Lock className="w-5 h-5 text-purple-300" />
                <span className="text-sm">End-to-End Encrypted</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-ping"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/15 rounded-full blur-lg animate-bounce"></div>
      </section>

      {/* Privacy Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Trust ENYARD with Your Data?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built our privacy framework on four core principles that ensure your data 
              is always protected, transparent, and under your control.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyFeatures.map((feature, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Privacy Policy Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            
            {/* Overview Section */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('overview')}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Info className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Overview</h3>
                    <p className="text-gray-600">Last updated: January 15, 2025</p>
                  </div>
                </div>
                {expandedSections.has('overview') ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </div>
              
              {expandedSections.has('overview') && (
                <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    This Privacy Policy describes how ENYARD ("we," "us," or "our") collects, uses, and protects 
                    your personal information when you use our software solutions and services. We are committed 
                    to protecting your privacy and ensuring the security of your data.
                  </p>
                  <p>
                    By using our services, you agree to the collection and use of information in accordance with 
                    this policy. We will not use or share your information with anyone except as described in 
                    this Privacy Policy.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                    <p className="text-blue-800 font-medium">
                      <strong>Key Principle:</strong> We collect only what we need, use it only for its intended purpose, 
                      and protect it with enterprise-grade security measures.
                    </p>
                  </div>
                </div>
              )}
            </Card>

            {/* Information We Collect */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('collection')}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Database className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Information We Collect</h3>
                    <p className="text-gray-600">What data we gather and why</p>
                  </div>
                </div>
                {expandedSections.has('collection') ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </div>
              
              {expandedSections.has('collection') && (
                <div className="mt-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {dataCategories.map((category, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-xl">
                        <h4 className="font-semibold text-gray-900 mb-3">{category.category}</h4>
                        <ul className="space-y-2 mb-4">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-gray-500">
                          <strong>Purpose:</strong> {category.purpose}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>

            {/* How We Use Your Information */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('usage')}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">How We Use Your Information</h3>
                    <p className="text-gray-600">Transparent usage practices</p>
                  </div>
                </div>
                {expandedSections.has('usage') ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </div>
              
              {expandedSections.has('usage') && (
                <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Primary Uses</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Provide and maintain our services</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Process transactions and payments</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Send important service updates</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Provide customer support</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Improvement & Analytics</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Analyze usage patterns to improve services</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Develop new features and capabilities</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Ensure security and prevent fraud</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Comply with legal obligations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {/* Your Rights */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('rights')}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Your Rights</h3>
                    <p className="text-gray-600">Control over your personal data</p>
                  </div>
                </div>
                {expandedSections.has('rights') ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </div>
              
              {expandedSections.has('rights') && (
                <div className="mt-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {userRights.map((right, index) => (
                      <div key={index} className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-gray-100">
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <right.icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <h4 className="font-semibold text-gray-900">{right.title}</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{right.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h4 className="font-semibold text-blue-900 mb-3">How to Exercise Your Rights</h4>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      To exercise any of these rights, contact us at{' '}
                      <a href="mailto:privacy@enyard.in" className="text-blue-600 hover:underline font-medium">
                        privacy@enyard.in
                      </a>
                      . We will respond to your request within 30 days and may ask for additional 
                      information to verify your identity.
                    </p>
                  </div>
                </div>
              )}
            </Card>

            {/* Data Security */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('security')}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <Lock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Data Security</h3>
                    <p className="text-gray-600">How we protect your information</p>
                  </div>
                </div>
                {expandedSections.has('security') ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </div>
              
              {expandedSections.has('security') && (
                <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    We implement industry-standard security measures to protect your personal information 
                    against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">Technical Safeguards</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>End-to-end encryption (AES-256)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Secure HTTPS connections</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Multi-factor authentication</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Regular security audits</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">Organizational Measures</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Employee security training</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Access control policies</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Incident response procedures</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Regular policy reviews</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {/* Contact Information */}
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Questions About Privacy?</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We're committed to transparency and are here to answer any questions you may have 
                  about our privacy practices or your personal data.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8 text-sm">
                  <div className="text-center">
                    <Mail className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">privacy@enyard.in</p>
                  </div>
                  <div className="text-center">
                    <Phone className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 91505 37718</p>
                  </div>
                  <div className="text-center">
                    <Calendar className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <p className="font-medium text-gray-900">Response Time</p>
                    <p className="text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Privacy; 