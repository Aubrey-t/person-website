import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, GraduationCap, Award, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const timeline = [
    {
      type: "education",
      icon: GraduationCap,
      title: "University of Toronto",
      subtitle: "Master of Mathematical Finance",
      period: "2023 - 2024",
      description: "Specialized in quantitative finance, derivatives pricing, and risk management. Conducted research under the supervision of Luis Seco on pairs trading strategies and dynamic hedging.",
      highlights: ["Statistical Arbitrage", "Options Pricing", "Portfolio Optimization", "Risk Management"],
      gradient: "from-primary/20 to-accent/20"
    },
    {
      type: "research",
      icon: Award,
      title: "Research Projects",
      subtitle: "Quantitative Finance Research",
      period: "2023 - Present",
      description: "Multiple research initiatives focusing on algorithmic trading, signal generation, and portfolio analytics. Developed practical solutions bridging academic theory with market applications.",
      highlights: ["Signal Processing", "Backtesting Frameworks", "Performance Analytics", "Market Microstructure"],
      gradient: "from-accent/20 to-primary/20"
    },
    {
      type: "experience",
      icon: Building,
      title: "Previous Experience",
      subtitle: "Technology & Analytics",
      period: "2020 - 2023",
      description: "Built technical expertise in data systems and software development, providing the foundation for quantitative finance applications and algorithmic solution development.",
      highlights: ["Python Development", "Data Analysis", "System Architecture", "Algorithm Design"],
      gradient: "from-primary/30 to-accent/15"
    }
  ];

  const certifications = [
    "CFA Level I Candidate",
    "Python for Finance",
    "Risk Management",
    "Quantitative Methods",
    "Financial Modeling"
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A progression through academic excellence and practical application, 
            building expertise in quantitative finance and research methodologies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent opacity-30 hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 w-5 h-5 bg-gradient-primary rounded-full shadow-glow hidden md:block" />

                {/* Content */}
                <div className="md:ml-20">
                  <Card className="glass hover-glow transition-smooth hover:scale-[1.02] overflow-hidden">
                    <div className={`bg-gradient-to-r ${item.gradient} p-6`}>
                      <div className="flex items-start justify-between flex-wrap gap-4">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-background/20 rounded-lg">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-primary font-semibold">{item.subtitle}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="glass">
                          <Calendar className="w-3 h-3 mr-1" />
                          {item.period}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, highlightIndex) => (
                          <Badge
                            key={highlightIndex}
                            variant="outline"
                            className="text-xs glass hover:bg-primary/10 transition-colors"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <Card className="glass p-8 hover-glow transition-smooth">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-gradient">Certifications & Continuous Learning</span>
              </h3>
              <p className="text-muted-foreground">
                Committed to staying current with industry standards and emerging methodologies
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="glass p-4 text-center hover-glow transition-smooth hover:scale-105"
                >
                  <p className="text-sm font-medium">{cert}</p>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;