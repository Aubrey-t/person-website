import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Brain, Code, Target } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: "Financial Markets",
      description: "Deep expertise in quantitative finance, risk management, and portfolio optimization"
    },
    {
      icon: Brain,
      title: "Research-Driven",
      description: "Analytical mindset focused on data-driven solutions and statistical modeling"
    },
    {
      icon: Code,
      title: "Technical Skills",
      description: "Proficient in Python, data systems, and financial engineering tools"
    },
    {
      icon: Target,
      title: "Results-Focused",
      description: "Practical approach bridging theory and real-world application"
    }
  ];

  const skills = [
    "Python", "R", "SQL", "Bloomberg Terminal", "MATLAB",
    "Risk Management", "Portfolio Optimization", "Derivatives Pricing",
    "Machine Learning", "Statistical Analysis", "Quantitative Research",
    "Financial Modeling", "Algorithmic Trading", "Data Analysis"
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            A journey from Zimbabwe to becoming a quantitative analyst, driven by curiosity, 
            discipline, and persistence in navigating complex financial challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Story */}
          <div className="space-y-6">
            <Card className="glass p-8 hover-glow transition-smooth">
              <h3 className="text-2xl font-bold mb-4 text-foreground">My Journey</h3>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  I was born and raised in Zimbabwe, and by the age of 25, I had lived in three 
                  countries, each shaping how I think, learn, and adapt. Growing up in an 
                  underdeveloped country with limited access to financial education or exposure 
                  to quantitative finance, I relied on curiosity, discipline, and persistence 
                  to navigate my path.
                </p>
                <p>
                  That journey took me from local classrooms to building software in university labs, 
                  and eventually to the sophisticated world of quantitative finance. Each step 
                  reinforced my belief that with the right mindset and tools, complex problems 
                  become opportunities for innovation.
                </p>
                <p>
                  Today, I combine my technical background with financial intuition to develop 
                  practical, robust solutions that bridge the gap between theory and real-world 
                  application.
                </p>
              </div>
            </Card>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="glass p-6 hover-glow transition-smooth hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <highlight.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">{highlight.title}</h4>
                    <p className="text-foreground/80">{highlight.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <Card className="glass p-8 hover-glow transition-smooth">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
            Technical <span className="text-gradient">Expertise</span>
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="glass px-4 py-2 text-sm font-medium hover:bg-primary/10 transition-smooth hover:scale-105"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;