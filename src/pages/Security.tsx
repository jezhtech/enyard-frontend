import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Lock, 
  Eye, 
  Users, 
  Database, 
  Globe, 
  Mail, 
  Phone,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Info,
  ChevronDown,
  ChevronUp,
  Zap,
  Heart,
  Target,
  Award,
  BookOpen,
  Gavel,
  Server,
  Key,
  Fingerprint,
  Network,
  Cloud,
  Cpu,
  HardDrive,
  Wifi,
  WifiOff,
  Activity,
  Timer,
  AlertCircle,
  ShieldCheck,
 // FileShield,
  KeyRound,
  Scan,
  Bug,
 // Virus,
 // Fire,
  Building2,
  User
} from 'lucide-react';

const Security = () => {
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

  const securityFeatures = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption and security protocols that exceed industry standards"
    },
    {
      icon: Lock,
      title: "Multi-Layer Protection",
      description: "Defense in depth with multiple security layers protecting your data"
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Continuous security monitoring and threat detection across all systems"
    },
    {
      icon: Users,
      title: "Security Team",
      description: "Dedicated security experts working around the clock to protect your data"
    }
  ];

  const securityLayers = [
    {
      layer: "Application Security",
      items: ["Code security reviews", "Penetration testing", "Vulnerability assessments", "Secure development practices", "API security"],
      icon: Cpu,
      color: "blue"
    },
    {
      layer: "Network Security",
      items: ["DDoS protection", "Firewall protection", "Intrusion detection", "VPN access", "Network segmentation"],
      icon: Network,
      color: "green"
    },
    {
      layer: "Data Security",
      items: ["End-to-end encryption", "Data masking", "Backup encryption", "Data loss prevention", "Secure data transmission"],
      icon: Database,
      color: "purple"
    },
    {
      layer: "Infrastructure Security",
      items: ["Physical security", "Server hardening", "Access controls", "Environmental controls", "Redundant systems"],
      icon: Server,
      color: "orange"
    }
  ];

  const certifications = [
    {
      title: "SOC 2 Type II",
      description: "Service Organization Control 2 certification ensuring security, availability, and confidentiality",
      icon: Award,
      status: "Certified",
      validity: "Annual renewal"
    },
    {
      title: "ISO 27001",
      description: "International standard for information security management systems",
      icon: ShieldCheck,
      status: "Certified",
      validity: "Annual renewal"
    },
    {
      title: "GDPR Compliance",
      description: "Full compliance with European data protection regulations",
      icon: Gavel,
      status: "Compliant",
      validity: "Ongoing"
    },
    {
      title: "HIPAA Compliance",
      description: "Healthcare data protection standards for medical applications",
      icon: Heart,
      status: "Compliant",
      validity: "Ongoing"
    }
  ];

  const securityMeasures = [
    {
      category: "Encryption",
      measures: [
        { name: "AES-256 Encryption", description: "Military-grade encryption for data at rest" },
        { name: "TLS 1.3", description: "Latest transport layer security for data in transit" },
        { name: "Key Management", description: "Hardware security modules for key storage" },
        { name: "Database Encryption", description: "Full database encryption with transparent data encryption" }
      ],
      icon: Key
    },
    {
      category: "Access Control",
      measures: [
        { name: "Multi-Factor Authentication", description: "2FA/MFA for all user accounts" },
        { name: "Role-Based Access", description: "Granular permissions based on user roles" },
        { name: "Single Sign-On", description: "Enterprise SSO integration capabilities" },
        { name: "Session Management", description: "Automatic session timeout and management" }
      ],
      icon: Fingerprint
    },
    {
      category: "Monitoring & Detection",
      measures: [
        { name: "SIEM Integration", description: "Security information and event management" },
        { name: "Real-time Alerts", description: "Instant notification of security events" },
        { name: "Behavioral Analytics", description: "AI-powered anomaly detection" },
        { name: "Threat Intelligence", description: "Integration with threat intelligence feeds" }
      ],
      icon: Activity
    },
    {
      category: "Incident Response",
      measures: [
        { name: "24/7 Security Team", description: "Round-the-clock security monitoring" },
        { name: "Incident Playbooks", description: "Documented response procedures" },
        { name: "Forensic Capabilities", description: "Digital forensics and investigation tools" },
        { name: "Communication Protocols", description: "Clear escalation and notification procedures" }
      ],
      icon: AlertCircle
    }
  ];

  const threatProtection = [
    {
      threat: "DDoS Attacks",
      protection: "Multi-layer DDoS protection with automatic mitigation",
      icon: WifiOff,
      level: "High"
    },
    {
      threat: "SQL Injection",
      protection: "Parameterized queries and input validation",
      icon: Database,
      level: "High"
    },
    {
      threat: "Cross-Site Scripting",
      protection: "Content Security Policy and input sanitization",
      icon: Globe,
      level: "High"
    },
    {
      threat: "Insider Threats",
      protection: "User behavior analytics and access monitoring",
      icon: Users,
      level: "Medium"
    },
    {
      threat: "Malware",
      protection: "Anti-malware scanning and sandboxing",
      icon: Users,
      level: "High"
    },
    {
      threat: "Data Breaches",
      protection: "Encryption, access controls, and monitoring",
      icon: Globe,
      level: "Critical"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Shield className="w-4 h-4 mr-2" />
              Security & Compliance
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Fortress-Grade Security
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Your data is protected by enterprise-grade security measures that exceed industry standards. 
              We treat your security as our highest priority, implementing multiple layers of protection.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-sm">SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield className="w-5 h-5 text-blue-300" />
                <span className="text-sm">ISO 27001</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Lock className="w-5 h-5 text-purple-300" />
                <span className="text-sm">AES-256 Encryption</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-ping"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/15 rounded-full blur-lg animate-bounce"></div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Trust ENYARD with Your Data?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built our security framework on four core principles that ensure your data 
              is always protected, monitored, and secure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Layers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Defense in Depth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple security layers work together to create an impenetrable defense system 
              that protects your data at every level.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {securityLayers.map((layer, index) => (
              <Card key={index} className="p-8 border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-${layer.color}-100 rounded-xl flex items-center justify-center`}>
                    <layer.icon className={`w-6 h-6 text-${layer.color}-600`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{layer.layer}</h3>
                </div>
                <ul className="space-y-3">
                  {layer.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Security Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            
            {/* Overview Section */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('overview')}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <Info className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Security Overview</h3>
                    <p className="text-gray-600">Our comprehensive security approach</p>
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
                    At ENYARD, security is not just a feature—it's the foundation of everything we do. 
                    We implement enterprise-grade security measures that exceed industry standards and 
                    regulatory requirements.
                  </p>
                  <p>
                    Our security framework is built on the principle of defense in depth, with multiple 
                    layers of protection working together to safeguard your data, applications, and infrastructure.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                    <p className="text-red-800 font-medium">
                      <strong>Security First:</strong> Every decision we make starts with security considerations. 
                      We believe that trust is earned through transparency and demonstrated security excellence.
                    </p>
                  </div>
                </div>
              )}
            </Card>

            {/* Certifications */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('certifications')}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Certifications & Compliance</h3>
                    <p className="text-gray-600">Industry-recognized security standards</p>
                  </div>
                </div>
                {expandedSections.has('certifications') ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </div>
              
              {expandedSections.has('certifications') && (
                <div className="mt-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <cert.icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{cert.title}</h4>
                            <Badge variant="secondary" className="text-xs">
                              {cert.status}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{cert.description}</p>
                        <p className="text-xs text-gray-500">
                          <strong>Validity:</strong> {cert.validity}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>

            {/* Security Measures */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('measures')}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Security Measures</h3>
                    <p className="text-gray-600">Comprehensive protection strategies</p>
                  </div>
                </div>
                {expandedSections.has('measures') ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </div>
              
              {expandedSections.has('measures') && (
                <div className="mt-8 space-y-8">
                  {securityMeasures.map((category, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-gray-100">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <category.icon className="w-5 h-5 text-green-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">{category.category}</h4>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {category.measures.map((measure, measureIndex) => (
                          <div key={measureIndex} className="bg-white p-4 rounded-lg border border-gray-200">
                            <h5 className="font-medium text-gray-900 mb-2">{measure.name}</h5>
                            <p className="text-sm text-gray-600">{measure.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>

            {/* Threat Protection */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('threats')}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Threat Protection</h3>
                    <p className="text-gray-600">How we defend against common threats</p>
                  </div>
                </div>
                {expandedSections.has('threats') ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </div>
              
              {expandedSections.has('threats') && (
                <div className="mt-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {threatProtection.map((threat, index) => (
                      <div key={index} className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                              <threat.icon className="w-4 h-4 text-purple-600" />
                            </div>
                            <h4 className="font-semibold text-gray-900">{threat.threat}</h4>
                          </div>
                          <Badge 
                            variant={threat.level === 'Critical' ? 'destructive' : threat.level === 'High' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {threat.level}
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm">{threat.protection}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>

            {/* Incident Response */}
            <Card className="p-8 border-0 shadow-lg bg-white">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('incident')}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Timer className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Incident Response</h3>
                    <p className="text-gray-600">How we handle security incidents</p>
                  </div>
                </div>
                {expandedSections.has('incident') ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </div>
              
              {expandedSections.has('incident') && (
                <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Response Process</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                            <span className="text-red-600 text-xs font-bold">1</span>
                          </div>
                          <span>Detection and alerting within minutes</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5">
                            <span className="text-orange-600 text-xs font-bold">2</span>
                          </div>
                          <span>Immediate containment and mitigation</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-0.5">
                            <span className="text-yellow-600 text-xs font-bold">3</span>
                          </div>
                          <span>Investigation and root cause analysis</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                            <span className="text-green-600 text-xs font-bold">4</span>
                          </div>
                          <span>Recovery and lessons learned</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Response Team</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>24/7 security operations center</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Dedicated incident response team</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Automated response capabilities</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Customer notification protocols</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                    <h4 className="font-semibold text-orange-900 mb-3">Response Time Commitment</h4>
                    <p className="text-orange-800 text-sm leading-relaxed">
                      We commit to detecting and responding to security incidents within 15 minutes, 
                      with full containment within 1 hour. Our team is available 24/7 to handle any 
                      security concerns or incidents.
                    </p>
                  </div>
                </div>
              )}
            </Card>

            {/* Contact Information */}
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-r from-red-50 to-orange-50">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Security Questions?</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our security team is here to answer any questions about our security measures, 
                  certifications, or incident response procedures.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Security Team
                  </Button>
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Security Hotline
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8 text-sm">
                  <div className="text-center">
                    <Mail className="w-5 h-5 text-red-600 mx-auto mb-2" />
                    <p className="font-medium text-gray-900">Security Email</p>
                    <p className="text-gray-600">security@enyard.in</p>
                  </div>
                  <div className="text-center">
                    <Phone className="w-5 h-5 text-red-600 mx-auto mb-2" />
                    <p className="font-medium text-gray-900">Security Hotline</p>
                    <p className="text-gray-600">+91 91505 37718</p>
                  </div>
                  <div className="text-center">
                    <Timer className="w-5 h-5 text-red-600 mx-auto mb-2" />
                    <p className="font-medium text-gray-900">Response Time</p>
                    <p className="text-gray-600">Within 15 minutes</p>
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

export default Security; 