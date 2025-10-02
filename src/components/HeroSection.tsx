import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-12">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-4 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-4 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 sm:w-80 h-60 sm:h-80 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Content */}
        <div className="space-y-6 sm:space-y-8 animate-slide-up">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight">
              <span className="text-gradient">Aubrey</span>
              <br />
              <span className="text-foreground">Tsambatare</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-primary font-semibold">
              Quantitative Analyst & Financial Engineer
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Motivated by complex challenges in quantitative finance, I focus on developing 
              research-driven solutions in asset allocation, signal design, and portfolio analytics. 
              I combine technical expertise in Python and data systems with strong financial 
              intuition to build tools that are both practical and robust.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button 
              size="lg" 
              className="group bg-gradient-primary hover:shadow-glow transition-all duration-300 w-full sm:w-auto"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass hover-glow w-full sm:w-auto"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 sm:space-x-6 pt-4">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 glass rounded-full hover-glow transition-smooth hover:scale-110"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative lg:justify-self-end animate-fade-in mt-8 lg:mt-0" style={{ animationDelay: '0.3s' }}>
          <div className="relative flex justify-center lg:justify-end">
            {/* Glow Effect */}
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-glow-pulse" />
            
            {/* Image Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 glass rounded-full overflow-hidden shadow-strong">
              <img
                src="https://www.tsambatare.com/_next/image?url=%2Fprofile-photo.jpg&w=640&q=75"
                alt="Aubrey Tsambatare"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 glass rounded-lg p-2 sm:p-3 animate-float">
              <span className="text-xs sm:text-sm font-semibold text-primary">Python</span>
            </div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 glass rounded-lg p-2 sm:p-3 animate-float" style={{ animationDelay: '1s' }}>
              <span className="text-xs sm:text-sm font-semibold text-accent">Quantitative Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;