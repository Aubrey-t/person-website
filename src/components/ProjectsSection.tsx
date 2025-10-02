import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, TrendingUp, Shield, Activity } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      icon: TrendingUp,
      title: "Mean-Reverting Pairs Trading Model",
      description: "Supervised by Luis Seco, University of Toronto. Pairs trading strategy on Coca-Cola and Pepsi, targeting 5% short-term returns through statistical arbitrage and mean reversion techniques.",
      tags: ["Python", "Statistical Analysis", "Trading Strategy", "Risk Management"],
      status: "Completed",
      gradient: "bg-gradient-to-br from-primary/20 to-accent/20"
    },
    {
      icon: Shield,
      title: "Dynamic Hedging Strategy Analysis", 
      description: "Supervised by Luis Seco, University of Toronto. Comprehensive simulation of Delta and Delta-Gamma hedging strategies to compare risk and return stability across different market conditions.",
      tags: ["Options", "Risk Management", "Monte Carlo", "Derivatives"],
      status: "Research",
      gradient: "bg-gradient-to-br from-accent/20 to-primary/20"
    },
    {
      icon: Activity,
      title: "Quant Signal Research Engine",
      description: "Under guidance by Taha Jaffer, University of Toronto. Built a comprehensive Python platform to backtest trading signals and analyze portfolio performance with advanced metrics and visualization.",
      tags: ["Python", "Backtesting", "Portfolio Analytics", "Signal Processing"],
      status: "In Progress",
      gradient: "bg-gradient-to-br from-primary/30 to-accent/30"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Research-driven projects in quantitative finance, combining theoretical 
            foundations with practical applications in modern portfolio theory and risk management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass hover-glow transition-smooth hover:scale-105 overflow-hidden group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className={`${project.gradient} p-6 relative overflow-hidden`}>
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant="outline" 
                    className="glass text-xs font-medium"
                  >
                    {project.status}
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-background/20 rounded-lg">
                    <project.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="text-xs glass hover:bg-primary/10 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex space-x-2 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="glass hover-glow flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="glass hover:bg-primary/10"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Card className="glass p-8 max-w-2xl mx-auto hover-glow transition-smooth">
            <h3 className="text-2xl font-bold mb-4">
              Interested in <span className="text-gradient">Collaboration?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new opportunities in quantitative finance, 
              research collaborations, or innovative projects that challenge conventional approaches.
            </p>
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Let's Connect
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;