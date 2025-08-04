import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Shield, 
  Users, 
  Globe, 
  Mail, 
  Phone,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Info,
  ChevronDown,
  ChevronUp,
  Scale,
  Lock,
  Zap,
  Heart,
  Target,
  Award,
  BookOpen,
  Gavel
} from 'lucide-react';

const Terms = () => {
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

  const termsFeatures = [
    {
      icon: Shield,
      title: "Clear & Fair Terms",
      description: "Transparent agreements that protect both parties with balanced rights and responsibilities"
    },
    {
      icon: Users,
      title: "User-Centric Approach",
      description: "Terms designed with your best interests in mind, ensuring fair and ethical practices"
    },
    {
      icon: Scale,
      title: "Legal Compliance",
      description: "Fully compliant with international laws and regulations governing software services"
    },
    {
      icon: Heart,
      title: "Trust & Transparency",
      description: "Building lasting relationships through honest, straightforward terms of service"
    }
  ];

  const serviceCategories = [
    {
      category: "Software Licenses",
      items: ["TimeX Attendance Management", "CoreX ERP Solution", "FleetX Fleet Management", "ChurchX Church Management", "MedzorX Hospital Management"],
      terms: "Non-exclusive, revocable license for authorized use"
    },
    {
      category: "Cloud Services",
      items: ["Data hosting and storage", "Application hosting", "Backup and recovery", "Security monitoring", "Performance optimization"],
      terms: "99.9% uptime guarantee with SLA commitments"
    },
    {
      category: "Support Services",
      items: ["Technical support", "Training and documentation", "Custom development", "Integration services", "Consulting"],
      terms: "Response times based on service level agreements"
    },
    {
      category: "Professional Services",
      items: ["Implementation consulting", "Custom development", "Data migration", "Training programs", "Ongoing maintenance"],
      terms: "Project-based terms with milestone deliverables"
    }
  ];

  const userObligations = [
    {
      title: "Authorized Use",
      description: "Use our services only for lawful purposes and in accordance with these terms",
      icon: CheckCircle
    },
    {
      title: "Account Security",
      description: "Maintain the security of your account credentials and notify us of any unauthorized access",
      icon: Lock
    },
    {
      title: "Compliance",
      description: "Comply with all applicable laws and regulations when using our services",
      icon: Gavel
    },
    {
      title: "Payment Obligations",
      description: "Pay all fees and charges in accordance with your service agreement",
      icon: Target
    },
    {
      title: "Data Accuracy",
      description: "Provide accurate and complete information when using our services",
      icon: BookOpen
    },
    {
      title: "Respectful Use",
      description: "Use our services in a manner that respects the rights of others",
      icon: Heart
    }
  ];

  const companyObligations = [
    {
      title: "Service Availability",
      description: "Maintain high availability and performance standards for our services",
      icon: Zap
    },
    {
      title: "Data Protection",
      description: "Implement robust security measures to protect your data and privacy",
      icon: Shield
    },
    {
      title: "Support & Maintenance",
      description: "Provide timely support and regular maintenance for our services",
      icon: Users
    },
    {
      title: "Transparency",
      description: "Communicate clearly about service changes, updates, and any issues",
      icon: Globe
    },
    {
      title: "Compliance",
      description: "Maintain compliance with all applicable laws and regulations",
      icon: Award
    },
    {
      title: "Continuous Improvement",
      description: "Continuously improve our services based on user feedback and industry best practices",
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <FileText className="w-4 h-4 mr-2" />
              Terms of Service
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Fair Terms, Clear Expectations
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Our Terms of Service are designed to be transparent, fair, and user-friendly. 
              We believe in building trust through clear agreements that protect everyone's interests.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-sm">User-Friendly</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield className="w-5 h-5 text-blue-300" />
                <span className="text-sm">Legally Compliant</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Scale className="w-5 h-5 text-purple-300" />
                <span className="text-sm">Fair & Balanced</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-ping"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/15 rounded-full blur-lg animate-bounce"></div>
      </section>

      {/* Terms Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Terms Are Different?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've crafted our terms with four core principles that ensure fairness, 
              transparency, and mutual respect between ENYARD and our valued customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {termsFeatures.map((feature, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Terms Content */}
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
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Info className="w-6 h-6 text-green-600" />
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
                    These Terms of Service ("Terms") govern your use of ENYARD's software solutions, 
                    services, and platforms. By accessing or using our services, you agree to be bound 
                    by these Terms and all applicable laws and regulations.
                  </p>
                  <p>
                    ENYARD provides enterprise software solutions including attendance management, 
                    ERP systems, fleet management, church management, and hospital management platforms. 
                    These Terms apply to all users, customers, and visitors of our services.
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                    <p className="text-green-800 font-medium">
                      <strong>Key Principle:</strong> We believe in fair, transparent terms that protect 
                      both parties while fostering long-term partnerships built on trust and mutual respect.
                    </p>
                  </div>
                </div>
              )}
            </Card>

            {/* Services Covered */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('services')}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Services Covered</h3>
                    <p className="text-gray-600">What's included in our terms</p>
                  </div>
                </div>
                {expandedSections.has('services') ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </div>
              
              {expandedSections.has('services') && (
                <div className="mt-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-xl">
                        <h4 className="font-semibold text-gray-900 mb-3">{category.category}</h4>
                        <ul className="space-y-2 mb-4">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-gray-500">
                          <strong>Terms:</strong> {category.terms}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>

            {/* User Obligations */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('user-obligations')}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Your Obligations</h3>
                    <p className="text-gray-600">What we expect from you</p>
                  </div>
                </div>
                {expandedSections.has('user-obligations') ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </div>
              
              {expandedSections.has('user-obligations') && (
                <div className="mt-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {userObligations.map((obligation, index) => (
                      <div key={index} className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-gray-100">
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <obligation.icon className="w-5 h-5 text-green-600" />
                          </div>
                          <h4 className="font-semibold text-gray-900">{obligation.title}</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{obligation.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>

            {/* Our Obligations */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('our-obligations')}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Obligations</h3>
                    <p className="text-gray-600">What you can expect from us</p>
                  </div>
                </div>
                {expandedSections.has('our-obligations') ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </div>
              
              {expandedSections.has('our-obligations') && (
                <div className="mt-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {companyObligations.map((obligation, index) => (
                      <div key={index} className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <obligation.icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <h4 className="font-semibold text-gray-900">{obligation.title}</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{obligation.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>

            {/* Payment Terms */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('payment')}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Payment Terms</h3>
                    <p className="text-gray-600">Billing and payment policies</p>
                  </div>
                </div>
                {expandedSections.has('payment') ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </div>
              
              {expandedSections.has('payment') && (
                <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Billing</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Monthly or annual billing cycles</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Invoices sent 30 days before due date</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Multiple payment methods accepted</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Transparent pricing with no hidden fees</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Payment Policies</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Payment due within 30 days of invoice</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Late payment fees apply after 30 days</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Service suspension after 60 days overdue</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Refund policies clearly defined</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {/* Termination */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('termination')}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Termination</h3>
                    <p className="text-gray-600">How agreements can end</p>
                  </div>
                </div>
                {expandedSections.has('termination') ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </div>
              
              {expandedSections.has('termination') && (
                <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">By You</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>30 days written notice required</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Access continues until end of billing period</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Data export available for 30 days</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>No termination fees for standard cancellation</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">By Us</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Material breach of terms</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Non-payment after 60 days</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Illegal or harmful use of services</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>30 days notice for service discontinuation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <h4 className="font-semibold text-yellow-900 mb-3">Data Protection After Termination</h4>
                    <p className="text-yellow-800 text-sm leading-relaxed">
                      We retain your data for 30 days after termination to allow for export. 
                      After this period, data is permanently deleted unless required by law. 
                      You can request data export at any time during this period.
                    </p>
                  </div>
                </div>
              )}
            </Card>

            {/* Contact Information */}
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Questions About Our Terms?</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We're committed to transparency and are here to answer any questions you may have 
                  about our terms of service or legal agreements.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </Button>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8 text-sm">
                  <div className="text-center">
                    <Mail className="w-5 h-5 text-green-600 mx-auto mb-2" />
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">legal@enyard.in</p>
                  </div>
                  <div className="text-center">
                    <Phone className="w-5 h-5 text-green-600 mx-auto mb-2" />
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 91505 37718</p>
                  </div>
                  <div className="text-center">
                    <Calendar className="w-5 h-5 text-green-600 mx-auto mb-2" />
                    <p className="font-medium text-gray-900">Response Time</p>
                    <p className="text-gray-600">Within 48 hours</p>
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

export default Terms; 