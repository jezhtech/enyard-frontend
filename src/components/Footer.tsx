import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/98fab40e-4f49-42c5-bf83-50cb4020d1a4.png" 
              alt="ENYARD" 
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Pioneering the future of enterprise software with AI-integrated solutions 
              that transform how businesses operate in the digital age.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Products</h4>
            <div className="space-y-2">
              <Link to="/products/timex" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                TimeX - Attendance Management
              </Link>
              <Link to="/products/corex" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                CoreX - ERP Solution
              </Link>
              <Link to="/products/fleetx" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                FleetX - Fleet Management
              </Link>
              <Link to="/products/churchx" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                ChurchX - Church Management
              </Link>
              <Link to="/products/medzorx" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                MedzorX - Hospital Management
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Company</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                About Us
              </Link>
              <Link to="/career" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Career
              </Link>
              <Link to="/blog" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Blog
              </Link>
              <Link to="/contact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80 text-sm">hello@enyard.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  123 Innovation Drive<br />
                  Tech Hub, CA 94043
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 ENYARD. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="/security" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;