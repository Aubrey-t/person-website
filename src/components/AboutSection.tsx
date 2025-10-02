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
    "Python", "SQL", "Bloomberg Terminal",
    "Risk Management", "Portfolio Optimization", "Derivatives Valuations",
    "Machine Learning", "Quantitative Research",
    "Financial Modeling"
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-800">About</span> <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            A journey from Zimbabwe to becoming a quantitative analyst, driven by curiosity, 
            discipline, and persistence in navigating complex financial challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Story */}
          <div className="space-y-6">
            <Card className="glass p-8 hover-glow transition-smooth">
              <h3 className="text-2xl font-bold mb-4 text-white text-center">My Journey</h3>
              <div className="space-y-4 text-white/90 leading-relaxed text-center">
                <p>
                  I was born and raised in Zimbabwe, and by the age of 25, I had lived in three countries each shaping how I think, learn, and adapt. Growing up in an underdeveloped country with limited access to financial education or exposure to quantitative finance, I relied on curiosity, discipline, and persistence to navigate my path. That journey took me from local classrooms to building software in China, and eventually to Canada, where I discovered my passion for markets, modeling, and data-driven decision making.
                </p>
                <p>
                  My early background in software engineering equipped me with the technical foundation to solve real-world problems first through programming, then through quantitative analysis. But it was the complexity of financial markets, and the challenge of extracting insight from data, that truly captivated me. That curiosity led me to pursue a Master of Mathematical Finance at the University of Toronto, where I've been focused on asset allocation, derivatives modeling, and portfolio analytics.
                </p>
                <p>
                  Having had to overcome barriers of access and visibility in this field, I bring a unique sense of drive and gratitude to every opportunity. I'm deeply motivated to keep building tools and strategies that bridge theory and application and to do so with clarity, creativity, and humility. Outside of finance, I recharge through hiking, snowboarding, Rugby and learning from people with radically different perspectives.
                </p>
              </div>
            </Card>
          </div>

          {/* Highlights */}
          <div className="flex flex-col justify-center space-y-6">
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

