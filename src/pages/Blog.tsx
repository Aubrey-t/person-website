import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search, TrendingUp, BookOpen, ArrowRight, Tag, User } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Quantitative Finance", "Research Methods", "Market Analysis", "Career Insights", "Technical Tutorials"];

  const blogPosts = [
    {
      title: "Building Robust Backtesting Frameworks for Quantitative Strategies",
      excerpt: "Learn how to construct comprehensive backtesting systems that account for transaction costs, market impact, and realistic trading constraints to avoid common pitfalls in strategy development.",
      category: "Technical Tutorials",
      date: "2024-03-15",
      readTime: "12 min read",
      tags: ["Python", "Backtesting", "Risk Management", "Portfolio Analytics"],
      gradient: "from-primary/20 to-accent/20",
      status: "Published"
    },
    {
      title: "The Psychology of Risk in Quantitative Finance",
      excerpt: "Exploring how behavioral biases affect quantitative models and strategies for building more robust risk management systems that account for human psychology in financial markets.",
      category: "Quantitative Finance", 
      date: "2024-03-08",
      readTime: "8 min read",
      tags: ["Risk Management", "Behavioral Finance", "Psychology", "Model Risk"],
      gradient: "from-accent/20 to-primary/20",
      status: "Published"
    },
    {
      title: "From Software Engineer to Quant: Lessons from a Career Transition",
      excerpt: "Personal insights and practical advice for professionals looking to transition into quantitative finance, including skill development, networking strategies, and common challenges.",
      category: "Career Insights",
      date: "2024-03-01", 
      readTime: "15 min read",
      tags: ["Career Development", "Personal Growth", "Quantitative Finance", "Networking"],
      gradient: "from-primary/30 to-accent/15",
      status: "Published"
    },
    {
      title: "Monte Carlo Methods in Portfolio Optimization: A Practical Guide",
      excerpt: "Deep dive into implementing Monte Carlo simulation techniques for portfolio optimization, including variance reduction methods and parallel processing for improved computational efficiency.",
      category: "Research Methods",
      date: "2024-02-22",
      readTime: "18 min read", 
      tags: ["Monte Carlo", "Portfolio Theory", "Optimization", "Computational Finance"],
      gradient: "from-accent/25 to-primary/25",
      status: "Published"
    },
    {
      title: "Understanding Market Microstructure for Better Strategy Development",
      excerpt: "How market microstructure effects impact quantitative strategies and practical approaches to modeling transaction costs, market impact, and execution dynamics.",
      category: "Market Analysis",
      date: "2024-02-15",
      readTime: "10 min read",
      tags: ["Market Microstructure", "Trading", "Execution", "Strategy Development"],
      gradient: "from-primary/20 to-accent/30",
      status: "Published"
    },
    {
      title: "Advanced Time Series Analysis for Financial Data",
      excerpt: "Comprehensive guide to modern time series techniques including GARCH models, regime switching, and machine learning approaches for financial forecasting and risk modeling.",
      category: "Technical Tutorials",
      date: "2024-02-08",
      readTime: "20 min read",
      tags: ["Time Series", "GARCH", "Machine Learning", "Forecasting"],
      gradient: "from-accent/20 to-primary/25",
      status: "Draft"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-black mb-6 text-foreground">
            Quant <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-xl text-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Exploring the intersection of mathematics, finance, and technology. Sharing insights on 
            quantitative methods, market analysis, research methodologies, and the evolving landscape 
            of financial engineering.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-foreground">
            <TrendingUp className="w-6 h-6 mr-2 text-primary" />
            Featured Article
          </h2>
          <Card className="glass hover-glow transition-smooth hover:scale-[1.02] overflow-hidden">
            <div className={`bg-gradient-to-r ${featuredPost.gradient} p-8`}>
              <div className="flex items-start justify-between mb-6">
                <Badge variant="outline" className="glass">Featured</Badge>
                <Badge 
                  variant={featuredPost.status === "Published" ? "default" : "secondary"}
                  className="glass"
                >
                  {featuredPost.status}
                </Badge>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  <Badge variant="outline" className="glass w-fit">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-3xl font-bold leading-tight text-foreground">{featuredPost.title}</h3>
                  <p className="text-lg text-foreground/85 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { 
                        year: 'numeric', month: 'long', day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="glass text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="glass pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-gradient-primary" : "glass hover-glow"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.slice(1).map((post, index) => (
            <Card
              key={index}
              className="glass hover-glow transition-smooth hover:scale-105 overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`bg-gradient-to-r ${post.gradient} p-6`}>
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="outline" className="glass text-xs">
                    {post.category}
                  </Badge>
                  <Badge 
                    variant={post.status === "Published" ? "default" : "secondary"}
                    className="glass text-xs"
                  >
                    {post.status}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight text-foreground">
                  {post.title}
                </h3>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-foreground/80 leading-relaxed text-sm">
                  {post.excerpt}
                </p>

                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', day: 'numeric', year: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="glass text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 3 && (
                    <Badge variant="outline" className="glass text-xs">
                      +{post.tags.length - 3} more
                    </Badge>
                  )}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full glass hover-glow group mt-4"
                  disabled={post.status === "Draft"}
                >
                  {post.status === "Draft" ? "Coming Soon" : "Read More"}
                  {post.status !== "Draft" && (
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  )}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mb-16">
          <Card className="glass p-10 hover-glow transition-smooth">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Stay <span className="text-gradient">Updated</span>
              </h2>
              <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
                Get notified when I publish new insights on quantitative finance, research methods, 
                and career development in the financial industry.
              </p>
            </div>

            <div className="max-w-md mx-auto flex gap-4">
              <Input 
                placeholder="Your email address"
                className="glass flex-1"
              />
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Subscribe
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-4">
              No spam, unsubscribe anytime. I respect your privacy.
            </p>
          </Card>
        </div>

        {/* About This Blog */}
        <div className="text-center">
          <Card className="glass p-8 max-w-2xl mx-auto hover-glow transition-smooth">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">About This Blog</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed mb-6">
              This blog is where I share my thoughts on quantitative finance, research methodologies, 
              and the intersection of technology and financial markets. Drawing from my academic 
              research and practical experience, I aim to make complex topics accessible while 
              maintaining technical rigor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="glass hover-glow">
                <User className="w-4 h-4 mr-2" />
                About Me
              </Button>
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <Tag className="w-4 h-4 mr-2" />
                Browse Topics
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;