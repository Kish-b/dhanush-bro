import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">Subscribe to our newsletter</h3>
            <p className="text-secondary-foreground/80 mb-6">
              Stay up to date with the latest updates and blog posts.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
              />
              <Button variant="default">Submit</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm hover:text-primary transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold mb-4">Courses</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-sm hover:text-primary transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm hover:text-primary transition-colors">
                  Data Science
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary transition-colors">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+213-345-1345</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>info@learnhub.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>123 Learning Street, Education City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 text-center text-sm">
          <p>&copy; 2025 LearnHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
