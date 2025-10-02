import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, ExternalLink, Home, Briefcase, Award, BookOpen, Mail } from "lucide-react";

const UltraNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Projects", href: "/projects", icon: Award },
    { name: "Experience", href: "/experience", icon: Briefcase },
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-strong shadow-strong backdrop-blur-3xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              onClick={() => navigate('/')}
              className="cursor-pointer group"
            >
              <div className="relative">
                <div className="text-3xl font-display font-black text-gradient group-hover:scale-110 transition-transform">
                  AT
                </div>
                <div className="absolute -inset-2 bg-gradient-primary rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => navigate(item.href)}
                  className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isActive(item.href)
                      ? 'glass-strong text-primary shadow-glow-primary'
                      : 'hover:glass text-muted-foreground hover:text-foreground hover-lift'
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                  {isActive(item.href) && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full" />
                  )}
                </Button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 font-semibold px-6 py-3 hover-lift group"
                style={{ animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
                onClick={() => window.open('/Tafadzwa (Aubrey) Tsambatare - Resume v.09232025.pdf', '_blank')}
              >
                <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Resume
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden glass-strong hover-glow"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full glass-strong backdrop-blur-3xl border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    onClick={() => {
                      navigate(item.href);
                      setIsOpen(false);
                    }}
                    className={`w-full justify-start px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      isActive(item.href)
                        ? 'glass text-primary shadow-glow-primary'
                        : 'hover:glass text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Button>
                ))}
                <Button 
                  className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 font-semibold mt-6 animate-pulse"
                  onClick={() => {
                    window.open('/Tafadzwa (Aubrey) Tsambatare - Resume.pdf', '_blank');
                    setIsOpen(false);
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default UltraNavigation;