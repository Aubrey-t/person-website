import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building, GraduationCap, Award, Calendar, MapPin, ExternalLink, Linkedin } from "lucide-react";

const Experience = () => {
  const timeline = [
    {
      type: "education",
      icon: GraduationCap,
      title: "Master of Mathematical Finance",
      organization: "University of Toronto",
      location: "Toronto, Canada",
      period: "Aug 2024 - July 2025",
      description: "Specialized in quantitative finance, derivatives pricing, and risk management. Conducted research under the supervision of Luis Seco on pairs trading strategies and dynamic hedging methodologies.",
      highlights: [
        "Pricing Theory & Derivatives Modeling",
        "Operations Research & Optimization",
        "Numerical Methods for Finance", 
        "Machine Learning for Financial Applications",
        "Portfolio Theory & Risk Management",
        "Monte Carlo Methods & Simulation"
      ],
      achievements: [
        "Developed mean-reverting pairs trading strategy achieving 5% target returns",
        "Conducted comprehensive Delta-Gamma hedging analysis across market conditions",
        "Built quantitative signal research engine for backtesting and performance analysis"
      ],
      gradient: "from-primary/20 to-accent/20",
      link: "https://www.utoronto.ca/"
    },
    {
      type: "education", 
      icon: GraduationCap,
      title: "Bachelor of Engineering (Software)",
      organization: "Beijing Jiaotong University",
      location: "Beijing, China",
      period: "Sept 2014 - Jun 2018",
      description: "Comprehensive software engineering program with focus on algorithms, system design, and distributed computing. Built strong technical foundation that later enabled transition into quantitative finance.",
      highlights: [
        "Algorithms & Data Structures",
        "Software Architecture & Design",
        "Distributed Systems & Networks",
        "Database Management Systems",
        "Object-Oriented Programming",
        "Software Engineering Methodologies"
      ],
      achievements: [
        "Graduated with strong technical foundation in programming and systems",
        "Developed multiple software projects using various programming languages",
        "Gained international experience living and studying in China"
      ],
      gradient: "from-accent/20 to-primary/20",
      link: "https://en.bjtu.edu.cn/"
    },
    {
      type: "certification",
      icon: Award,
      title: "Mandarin Proficiency Certificate",
      organization: "Wuhan University of Technology", 
      location: "China",
      period: "Sept 2013 - Aug 2014",
      description: "Intensive Mandarin language program preparing for university studies in China. Achieved proficiency in Mandarin Chinese, enabling successful completion of engineering degree in Chinese academic environment.",
      highlights: [
        "Advanced Mandarin Proficiency",
        "Chinese Cultural Understanding",
        "Cross-Cultural Communication",
        "Academic Chinese Writing",
        "Business Chinese Fundamentals"
      ],
      achievements: [
        "Achieved fluency in Mandarin Chinese",
        "Successfully prepared for university studies in Chinese",
        "Developed cross-cultural communication skills"
      ],
      gradient: "from-primary/30 to-accent/15",
      link: "http://sie.whut.edu.cn/english/ist/"
    }
  ];

  const skills = {
    "Technical Skills": [
      "Python", "R", "SQL", "MATLAB", "C++", "JavaScript", "Git"
    ],
    "Financial Tools": [
      "Bloomberg Terminal", "Excel VBA", "QuantLib", "Pandas", "NumPy", "Matplotlib"
    ],
    "Quantitative Methods": [
      "Monte Carlo Simulation", "Risk Management", "Portfolio Optimization", 
      "Derivatives Pricing", "Statistical Analysis", "Machine Learning"
    ],
    "Soft Skills": [
      "Research & Analysis", "Problem Solving", "Cross-Cultural Communication",
      "Project Management", "Team Collaboration", "Presentation Skills"
    ]
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-black mb-6 text-foreground">
            Professional <span className="text-gradient">Journey</span>
          </h1>
          <p className="text-xl text-foreground/90 max-w-4xl mx-auto leading-relaxed">
            A progression through academic excellence and international experience, building expertise 
            in quantitative finance, software engineering, and cross-cultural collaboration. Each step 
            has shaped my approach to problem-solving and analytical thinking.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30 hidden md:block" />

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 w-5 h-5 bg-gradient-primary rounded-full shadow-glow hidden md:block border-2 border-background" />

                {/* Content */}
                <div className="md:ml-20">
                  <Card className="glass hover-glow transition-smooth hover:scale-[1.01] overflow-hidden">
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${item.gradient} p-8`}>
                      <div className="flex items-start justify-between flex-wrap gap-6">
                        <div className="flex items-start space-x-6">
                          <div className="p-4 bg-background/20 rounded-xl">
                            <item.icon className="w-8 h-8 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-foreground">{item.title}</h2>
                            <a 
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary text-xl font-semibold hover:underline flex items-center space-x-2 mb-3"
                            >
                              <span>{item.organization}</span>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                            <div className="flex items-center space-x-4 text-muted-foreground mb-4">
                              <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4" />
                                <span>{item.location}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4" />
                                <span>{item.period}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-8">
                      {/* Description */}
                      <p className="text-foreground/85 leading-relaxed text-lg">
                        {item.description}
                      </p>

                      {/* Coursework/Highlights */}
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-foreground">Key Areas of Study</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {item.highlights.map((highlight, highlightIndex) => (
                            <Badge
                              key={highlightIndex}
                              variant="outline"
                              className="glass hover:bg-primary/10 transition-colors px-4 py-2 text-center"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-foreground">Key Achievements</h3>
                        <div className="space-y-3">
                          {item.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <p className="text-foreground/80 leading-relaxed">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Expertise */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Technical <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
              A comprehensive skill set spanning quantitative methods, programming, and financial analysis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card
                key={index}
                className="glass p-8 hover-glow transition-smooth hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-6 text-foreground">{category}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {skillList.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="glass hover:bg-primary/10 transition-colors px-3 py-2 text-center text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Personal Journey */}
        <div className="mb-16">
          <Card className="glass p-10 hover-glow transition-smooth">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                My <span className="text-gradient">Journey</span>
              </h2>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-8 text-foreground/90 leading-relaxed">
              <p className="text-lg">
                I was born and raised in Zimbabwe, and by the age of 25, I had lived in three countries, 
                each shaping how I think, learn, and adapt. Growing up in an underdeveloped country with 
                limited access to financial education or exposure to quantitative finance, I relied on 
                curiosity, discipline, and persistence to navigate my path.
              </p>
              
              <p className="text-lg">
                That journey took me from local classrooms to building software in China, and eventually 
                to Canada, where I discovered my passion for markets, modeling, and data-driven decision 
                making. My early background in software engineering equipped me with the technical 
                foundation to solve real-world problems first through programming, then through 
                quantitative analysis.
              </p>
              
              <p className="text-lg">
                But it was the complexity of financial markets, and the challenge of extracting insight 
                from data, that truly captivated me. That curiosity led me to pursue a Master of 
                Mathematical Finance at the University of Toronto, where I've focused on asset allocation, 
                derivatives modeling, and portfolio analytics.
              </p>
              
              <p className="text-lg">
                Having had to overcome barriers of access and visibility in this field, I bring a unique 
                sense of drive and gratitude to every opportunity. I'm deeply motivated to keep building 
                tools and strategies that bridge theory and application, and to do so with clarity, 
                creativity, and humility.
              </p>
            </div>

            <div className="text-center mt-10">
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <Linkedin className="w-4 h-4 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="glass p-8 max-w-2xl mx-auto hover-glow transition-smooth">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Make an <span className="text-gradient">Impact?</span>
            </h3>
            <p className="text-foreground/80 mb-6">
              Whether you're looking for quantitative analysis expertise, research collaboration, 
              or want to discuss innovative approaches to financial engineering, I'm here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="glass hover-glow">
                Download Resume
              </Button>
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Get In Touch
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Experience;