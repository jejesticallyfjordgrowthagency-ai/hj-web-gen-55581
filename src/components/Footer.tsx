import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="H & J Auto Repairs" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/80">
              Professional car repairs and upgrades in Bedford. Trusted by hundreds of satisfied customers.
            </p>
            <div className="mt-4 flex items-center space-x-1">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span className="text-sm ml-2">5.0 (22 reviews)</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Unit 7a, Fenlake Rd, Bedford MK42 0HB, UK</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+447789548910" className="hover:text-accent transition-colors">
                  07789 548910
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:hjautorepairs@hotmail.com" className="hover:text-accent transition-colors">
                  hjautorepairs@hotmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2 gap-3 mt-4">
                <a href="https://www.facebook.com/profile.php?id=61560948601635" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/hj_auto_repairs" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon–Wed: 9am–3pm / 4–6pm</p>
                  <p>Thu–Fri: 9am–6pm</p>
                  <p>Saturday: 9am–1pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} H & J Auto Repairs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
