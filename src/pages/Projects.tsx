import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, TrendingUp, Shield, Activity, Linkedin, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: TrendingUp,
      title: "Mean-Reverting Pairs Trading Model",
      description: "Pairs trading strategy on Coca-Cola and Pepsi, targeting 5% short-term returns through statistical arbitrage and mean reversion techniques.",
      supervisor: "Luis Seco",
      institution: "University of Toronto",
      tags: ["Python", "Statistical Analysis", "Trading Strategy", "Risk Management", "Mean Reversion", "Pairs Trading"],
      status: "Completed",
      gradient: "from-primary/20 to-accent/20",
      details: "Developed a sophisticated pairs trading strategy focusing on the historical relationship between Coca-Cola and Pepsi stock prices. Implemented statistical tests for cointegration, calculated optimal hedge ratios, and designed entry/exit signals based on price spread deviations. The strategy achieved consistent 5% short-term returns while maintaining controlled risk exposure."
    },
    {
      icon: Shield,
      title: "Dynamic Hedging Strategy Analysis", 
      description: "Comprehensive simulation of Delta and Delta-Gamma hedging strategies to compare risk and return stability across different market conditions.",
      supervisor: "Luis Seco",
      institution: "University of Toronto",
      tags: ["Options", "Risk Management", "Monte Carlo", "Derivatives", "Delta Hedging", "Greeks"],
      status: "Research",
      gradient: "from-accent/20 to-primary/20",
      details: "Conducted extensive Monte Carlo simulations comparing Delta and Delta-Gamma hedging effectiveness across various market scenarios. Analyzed hedging performance under different volatility regimes, interest rate environments, and market stress conditions. Results provided insights into optimal rebalancing frequencies and cost-benefit trade-offs."
    },
    {
      icon: Activity,
      title: "Quant Signal Research Engine",
      description: "Built a comprehensive Python platform to backtest trading signals and analyze portfolio performance with advanced metrics and visualization.",
      supervisor: "Taha Jaffer",
      institution: "University of Toronto",
      tags: ["Python", "Backtesting", "Portfolio Analytics", "Signal Processing", "Performance Attribution", "Data Visualization"],
      status: "In Progress",
      gradient: "from-primary/30 to-accent/15",
      details: "Designed and implemented a modular backtesting framework capable of testing multiple trading signals simultaneously. Features include performance attribution analysis, risk-adjusted metrics calculation, and interactive visualization dashboards. The platform supports various asset classes and incorporates transaction costs and market impact models."
    }
  ];

  return (
    <div className="min-h-screen pt-24 particles">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up-stagger">
          <h1 className="text-6xl lg:text-8xl font-display font-black mb-8">
            Featured <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            Research-driven projects in <span className="text-gradient-gold font-semibold">quantitative finance</span>, 
            combining theoretical foundations with practical applications in modern portfolio theory, 
            derivatives pricing, and <span className="text-gradient-gold font-semibold">risk management</span>. 
            Each project represents a deep dive into complex financial problems with measurable outcomes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-strong hover-glow-accent transition-all duration-700 hover:scale-[1.02] overflow-hidden rounded-3xl animate-slide-up-stagger"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.gradient} p-10 relative overflow-hidden`}>
                <div className="absolute top-8 right-8">
                  <div className={`glass-strong text-lg font-bold px-6 py-3 rounded-2xl ${
                    project.status === "Completed" ? "text-accent" : 
                    project.status === "Research" ? "text-primary" : "text-gradient"
                  }`}>
                    {project.status}
                  </div>
                </div>
                
                <div className="flex items-start space-x-8 mb-8">
                  <div className="p-6 bg-background/20 rounded-2xl hover-lift">
                    <project.icon className="w-12 h-12 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-4xl lg:text-5xl font-display font-black mb-4 hover:text-gradient transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-xl lg:text-2xl text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Supervisor Information */}
                    <div className="flex items-center space-x-3 text-primary font-bold text-lg">
                      <span>Supervised by</span>
                      <a 
                        href={`https://www.linkedin.com/search/results/people/?keywords=${project.supervisor}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center space-x-2 hover-glow-accent transition-smooth"
                      >
                        <span className="text-gradient-gold">{project.supervisor}</span>
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <span>•</span>
                      <span className="text-accent">{project.institution}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-10 space-y-8">
                {/* Detailed Description */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gradient">Project Details</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.details}
                  </p>
                </div>

                {/* Technical Stack */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Technical Stack & Methods</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {project.tags.map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        className="glass hover:glass-strong transition-all duration-300 px-4 py-3 text-center rounded-2xl hover-lift"
                      >
                        <span className="text-sm font-bold text-gradient">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-border">
                  <Button
                    className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-500 font-bold text-lg px-8 py-6 hover-lift flex-1 group"
                  >
                    <ExternalLink className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    View Detailed Report
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    className="glass-strong hover-glow-accent font-bold text-lg px-8 py-6 hover-tilt flex-1 group"
                  >
                    <Github className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Philosophy */}
        <div className="mt-20">
          <Card className="glass p-10 hover-glow transition-smooth">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-6">
                Research <span className="text-gradient">Philosophy</span>
              </h2>
              <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  My approach to quantitative research is rooted in the belief that the most impactful 
                  work happens at the intersection of rigorous theory and practical application. Each 
                  project begins with a deep understanding of the underlying financial principles, 
                  followed by careful implementation that considers real-world constraints.
                </p>
                <p>
                  I focus on developing solutions that are not only mathematically sound but also 
                  practically implementable, scalable, and robust across different market conditions. 
                  This means paying careful attention to data quality, model assumptions, and the 
                  economic intuition behind every analytical choice.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="p-4 bg-gradient-primary rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Theory-Driven</h3>
                <p className="text-muted-foreground">
                  Grounded in solid financial theory and mathematical foundations
                </p>
              </div>
              
              <div className="text-center">
                <div className="p-4 bg-gradient-accent rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Data-Focused</h3>
                <p className="text-muted-foreground">
                  Emphasis on data quality, statistical significance, and robust testing
                </p>
              </div>
              
              <div className="text-center">
                <div className="p-4 bg-gradient-primary rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Risk-Aware</h3>
                <p className="text-muted-foreground">
                  Comprehensive risk management and stress testing in all implementations
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Card className="glass p-8 max-w-2xl mx-auto hover-glow transition-smooth">
            <h3 className="text-2xl font-bold mb-4">
              Interested in <span className="text-gradient">Collaboration?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new research opportunities, collaboration on 
              quantitative projects, or sharing insights about financial modeling and analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Let's Connect
              </Button>
              <Button variant="outline" className="glass hover-glow">
                View Resume
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;