import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="H & J Auto Repairs" className="h-16 md:h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive(item.path) ? "text-accent" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+441234567890" className="flex items-center space-x-2 text-sm font-medium text-foreground hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span>01234 567890</span>
            </a>
            <Button asChild variant="default" className="bg-accent hover:bg-accent/90">
              <a href="https://wa.me/441234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Book Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block text-sm font-medium transition-colors hover:text-accent ${
                  isActive(item.path) ? "text-accent" : "text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a href="tel:+441234567890" className="flex items-center space-x-2 text-sm font-medium text-foreground hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span>01234 567890</span>
            </a>
            <Button asChild variant="default" className="w-full bg-accent hover:bg-accent/90">
              <a href="https://wa.me/441234567890" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Book Now
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
