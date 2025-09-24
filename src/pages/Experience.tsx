import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building, GraduationCap, Award, Calendar, MapPin, ExternalLink, Linkedin, ChevronDown, Briefcase } from "lucide-react";
import { useState } from "react";

const Experience = () => {
  const [expandedWorkCard, setExpandedWorkCard] = useState<number | null>(null);

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

  const workExperience = [
    {
      type: "work",
      icon: Building,
      title: "Intern, Consultant – Complex Financial Instruments Valuations (Derivatives)",
      organization: "KPMG",
      subtitle: "Valuations – Complex Financial Instruments Intern",
      location: "Toronto, Canada",
      period: "Jan 2025 - Apr 2025",
      logo: "/kpmg.png",
      description: "Developed Monte Carlo-based models to value performance share units (PSUs) and exotic equity derivatives, incorporating features like peer-relative performance, payout caps, and path dependency.",
      highlights: [
        "Python", "Financial Modeling", "SQL", "Monte Carlo Simulation", 
        "Bloomberg Terminal", "Model Risk", "Automation", "Capital IQ", "PSU Valuations"
      ],
      achievements: [
        "Developed Monte Carlo-based models to value performance share units (PSUs) and exotic equity derivatives, incorporating features like peer-relative performance, payout caps, and path dependency.",
        "Built and calibrated Black-Scholes and binomial tree models for standard and barrier options, leveraging market data extracted from Bloomberg and Capital IQ.",
        "Engineered valuation frameworks that integrated key risk factors including volatility term structures, peer correlations, discount curves, and credit risk adjustments.",
        "Produced technical documentation and valuation memos supporting audit and advisory engagements, ensuring compliance with IFRS 13 and internal governance standards."
      ],
      gradient: "from-primary/20 to-accent/20",
      link: "https://home.kpmg/ca/en/home.html"
    },
    {
      type: "work",
      icon: Building,
      title: "Full Stack Engineer",
      organization: "HSBC Software Development",
      subtitle: "HSBC Software Development",
      location: "Toronto, Canada",
      period: "Sep 2022 - Aug 2024",
      logo: "/hsbc.png",
      description: "Participated in the design and development of an in-house Inventory Management System for REPO trading, replacing legacy vendor software and aligning closely with trader requirements across regions.",
      highlights: [
        "APIs", "Database Components", "E-trading Platforms", "UX Design", 
        "Cash Prime Brokerage", "System Integration", "Workflow Efficiency"
      ],
      achievements: [
        "Participated in the design and development of an in-house Inventory Management System for REPO trading, replacing legacy vendor software and aligning closely with trader requirements across regions.",
        "Applied design thinking and UX principles to enhance the usability of HSBC's E-trading platforms in both equities and REPO markets, including interface design, prototyping, and feature reviews.",
        "Contributed to the development of APIs, database components, and technical specifications supporting robust, high-performance electronic trading systems across capital markets.",
        "Supported modernization efforts in Cash Prime Brokerage by helping develop a flexible trade entry platform to replace outdated vendor solutions, improving integration and workflow efficiency."
      ],
      gradient: "from-accent/20 to-primary/20",
      link: "https://www.hsbc.ca/"
    },
    {
      type: "work",
      icon: Building,
      title: "Senior Software Engineer & UX Analyst Developer",
      organization: "HSBC Software Development",
      subtitle: "HSBC Software Development",
      location: "Guangzhou, China",
      period: "Oct 2019 - Sep 2022",
      logo: "/hsbc.png",
      description: "Contributed to the development of AI and NLP driven tools aimed at enhancing HSBC's REPO trading platform, working closely with designers, developers, and data scientists across global teams.",
      highlights: [
        "AI Tools", "NLP", "FIX Engine", "UX Design", "Dashboards", 
        "Productivity", "Trade Messaging"
      ],
      achievements: [
        "Contributed to the development of AI and NLP driven tools aimed at enhancing HSBC's REPO trading platform, working closely with designers, developers, and data scientists across global teams.",
        "Supported the design and deployment of a secure FIX Engine for Cash Equities trading, replacing a third-party solution and improving system performance and cost efficiency.",
        "Participated in UX design initiatives for trading tools and internal dashboards within Global Banking & Markets (GBM), including user research, prototyping, and interface enhancements.",
        "Helped build interactive dashboards that provided data-driven insights into software delivery and team productivity across GBM.",
        "Collaborated with sales and product teams to create tools that structured trade-related messages into formats ready for order generation, improving usability and front-office efficiency."
      ],
      gradient: "from-primary/30 to-accent/15",
      link: "https://www.hsbc.ca/"
    },
    {
      type: "work",
      icon: Building,
      title: "Blockchain Dev - Intern",
      organization: "Unity Labs",
      subtitle: "Unity Labs",
      location: "Guangzhou, China",
      period: "Jun 2018 – Aug 2019",
      logo: "/unityLabs.png",
      description: "Developed and deployed smart contracts on the Ethereum blockchain using Solidity, gaining hands-on experience in blockchain technology and decentralized applications.",
      highlights: [
        "Solidity", "Ethereum", "Smart Contracts", "dApps", 
        "Web3.js", "APIs", "Security Audits"
      ],
      achievements: [
        "Developed and deployed smart contracts on the Ethereum blockchain using Solidity.",
        "Designed decentralized applications (dApps) with secure backend logic.",
        "Collaborated with the backend team to integrate blockchain APIs.",
        "Participated in code reviews and smart contract audits to ensure code quality.",
        "Gained experience with Web3.js and Ethereum test networks (Ropsten, Kovan)."
      ],
      gradient: "from-accent/20 to-primary/20",
      link: "#"
    },
    {
      type: "work",
      icon: Building,
      title: "Symbio - Intern",
      organization: "Symbio",
      subtitle: "Symbio - Intern",
      location: "Beijing, China",
      period: "Jan 2016 – Mar 2017",
      logo: "/symbio.png",
      description: "Created and executed manual test cases for Android and iOS applications, gaining foundational understanding of SDLC and QA best practices.",
      highlights: [
        "Manual Testing", "Android", "iOS", "Jira", 
        "SDLC", "QA", "Bug Tracking"
      ],
      achievements: [
        "Created and executed manual test cases for Android and iOS applications.",
        "Documented bugs and worked with developers to verify fixes.",
        "Performed regression and smoke testing across app releases.",
        "Used Jira for test planning and defect tracking.",
        "Gained foundational understanding of SDLC and QA best practices."
      ],
      gradient: "from-primary/20 to-accent/20",
      link: "#"
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
          <h1 className="text-5xl lg:text-6xl font-black mb-6">
            <span style={{color: 'black'}}>Professional</span> <span className="text-gradient">Journey</span>
          </h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed" style={{color: 'black'}}>
            A progression through academic excellence and international experience, building expertise 
            in quantitative finance, software engineering, and cross-cultural collaboration. Each step 
            has shaped my approach to problem-solving and analytical thinking.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span style={{color: 'black'}}>Work</span> <span className="text-gradient">Experience</span>
            </h2>
          </div>

          <div className="space-y-8">
            {workExperience.map((item, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card 
                  className="glass hover-glow transition-all duration-300 overflow-hidden cursor-pointer"
                  onMouseEnter={() => setExpandedWorkCard(index)}
                  onMouseLeave={() => setExpandedWorkCard(null)}
                >
                  {/* Header - Always Visible */}
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                          <img 
                            src={item.logo} 
                            alt={`${item.organization} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-xl lg:text-2xl font-bold mb-2 text-foreground">{item.title}</h2>
                          <a 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary text-lg font-semibold hover:underline flex items-center space-x-2 mb-3"
                          >
                            <span>{item.organization}</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                          <div className="flex items-center space-x-4 text-muted-foreground text-sm">
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
                      <ChevronDown 
                        className={`w-5 h-5 text-primary transition-transform duration-300 ${
                          expandedWorkCard === index ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>

                    {/* Skills/Highlights - Always Visible */}
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.slice(0, 6).map((highlight, highlightIndex) => (
                          <Badge
                            key={highlightIndex}
                            variant="outline"
                            className="glass hover:bg-primary/10 transition-colors px-3 py-1 text-xs"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      expandedWorkCard === index 
                        ? 'max-h-[800px] opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 space-y-6 border-t border-border/50 pt-6">
                      {/* Description */}
                      <p className="text-foreground/85 leading-relaxed">
                        {item.description}
                      </p>

                      {/* All Highlights */}
                      <div>
                        <h3 className="text-lg font-bold mb-3 text-foreground">Technologies & Skills</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                          {item.highlights.map((highlight, highlightIndex) => (
                            <Badge
                              key={highlightIndex}
                              variant="outline"
                              className="glass hover:bg-primary/10 transition-colors px-3 py-2 text-center text-sm"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h3 className="text-lg font-bold mb-3 text-foreground">Key Achievements</h3>
                        <div className="space-y-3">
                          {item.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <p className="text-foreground/80 leading-relaxed text-sm">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span style={{color: 'black'}}>Education</span>
            </h2>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="glass hover-glow transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-primary rounded-lg">
                        <item.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl lg:text-2xl font-bold mb-2 text-foreground">{item.title}</h2>
                        <a 
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary text-lg font-semibold hover:underline flex items-center space-x-2 mb-3"
                        >
                          <span>{item.organization}</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <div className="flex items-center space-x-4 text-muted-foreground text-sm mb-4">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{item.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{item.period}</span>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-foreground/85 leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Key Areas - Limited */}
                        <div className="flex flex-wrap gap-2">
                          {item.highlights.slice(0, 4).map((highlight, highlightIndex) => (
                            <Badge
                              key={highlightIndex}
                              variant="outline"
                              className="glass hover:bg-primary/10 transition-colors px-3 py-1 text-xs"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Expertise */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span style={{color: 'black'}}>Technical</span> <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{color: 'black'}}>
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