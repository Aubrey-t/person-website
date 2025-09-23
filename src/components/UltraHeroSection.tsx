import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Download, TrendingUp, Award, Users } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const UltraHeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Quantitative Analyst & Financial Engineer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const stats = [
    { icon: TrendingUp, label: "Portfolio Returns", value: "5%+" },
    { icon: Award, label: "Research Projects", value: "3+" },
    { icon: Users, label: "Academic Network", value: "U of T" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden particles">
      {/* Ultra-Premium Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <img 
          src={heroBackground}
          alt="Financial data visualization background"
          className="w-full h-full object-cover mix-blend-overlay opacity-20"
        />
        <div className="absolute inset-0 mesh-gradient opacity-60" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '6s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-10 animate-slide-up-stagger">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 glass rounded-full text-sm font-medium text-primary">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse" />
                Available for Opportunities
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-display font-black leading-none">
                <span className="text-gradient">Aubrey</span>
                <br />
                <span className="text-foreground">Tsambatare</span>
              </h1>
              
              <div className="h-16 flex items-center">
                <h2 className="text-2xl lg:text-3xl font-semibold text-primary font-mono">
                  {displayText}
                  <span className="animate-blink-caret border-r-2 border-primary ml-1"></span>
                </h2>
              </div>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                Driven by complex challenges in quantitative finance, I develop research-driven solutions 
                in <span className="text-gradient-gold font-semibold">asset allocation</span>, 
                <span className="text-gradient-gold font-semibold"> signal design</span>, and 
                <span className="text-gradient-gold font-semibold"> portfolio analytics</span>. 
                Combining deep technical expertise with financial intuition to build tools that bridge 
                theory and real-world application.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="glass-strong p-4 rounded-2xl hover-glow transition-smooth group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="p-3 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform">
                      <stat.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-lg font-bold text-gradient">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="group bg-gradient-primary hover:shadow-glow-primary transition-all duration-500 text-lg px-8 py-6 font-semibold hover-lift"
              >
                <ArrowRight className="mr-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="glass-strong hover-glow-accent text-lg px-8 py-6 font-semibold hover-tilt"
              >
                <Download className="mr-3 w-6 h-6" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-6">
              {[
                { icon: Github, href: "#", label: "GitHub", gradient: "from-primary/20 to-primary/40" },
                { icon: Linkedin, href: "#", label: "LinkedIn", gradient: "from-accent/20 to-accent/40" },
                { icon: Mail, href: "mailto:aubrey@tsambatare.com", label: "Email", gradient: "from-primary/30 to-accent/30" },
              ].map(({ icon: Icon, href, label, gradient }) => (
                <a
                  key={label}
                  href={href}
                  className={`p-4 glass-strong rounded-2xl hover-glow transition-smooth hover-lift group bg-gradient-to-br ${gradient}`}
                  aria-label={label}
                >
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Section */}
          <div className="relative lg:justify-self-end animate-fade-in-blur" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              {/* Animated Glow Ring */}
              <div className="absolute -inset-8 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse-glow" />
              
              {/* Main Profile Container */}
              <div className="relative glass-strong rounded-3xl p-8 hover-glow transition-smooth">
                {/* Profile Image */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto mb-8">
                  <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse-glow" />
                  <div className="relative w-full h-full glass-strong rounded-full overflow-hidden shadow-strong">
                    <img
                      src="https://www.tsambatare.com/_next/image?url=%2Fprofile-photo.jpg&w=640&q=75"
                      alt="Aubrey Tsambatare"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Floating Tech Badges */}
                  <div className="absolute -top-4 -right-4 glass-strong rounded-xl px-4 py-2 animate-float-slow">
                    <span className="text-sm font-bold text-gradient">Python</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 glass-strong rounded-xl px-4 py-2 animate-float-slow" style={{ animationDelay: '2s' }}>
                    <span className="text-sm font-bold text-gradient-gold">Quantitative Finance</span>
                  </div>
                  <div className="absolute top-1/2 -right-6 glass-strong rounded-xl px-3 py-2 animate-float-slow" style={{ animationDelay: '4s' }}>
                    <span className="text-xs font-bold text-accent">Risk Mgmt</span>
                  </div>
                </div>

                {/* Professional Summary */}
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-accent rounded-full">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    <span className="font-bold text-accent-foreground">Quantitative Finance</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gradient">Portfolio Analytics</h3>
                  <p className="text-muted-foreground">
                    Specializing in asset allocation strategies and risk management solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowRight className="w-5 h-5 rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default UltraHeroSection;