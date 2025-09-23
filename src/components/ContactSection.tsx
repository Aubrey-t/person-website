import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, MessageSquare, Send, MapPin, Calendar } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "aubrey@tsambatare.com",
      action: "Send Email",
      href: "mailto:aubrey@tsambatare.com",
      gradient: "from-primary/20 to-accent/20"
    },
    {
      icon: Linkedin,
      title: "LinkedIn", 
      description: "Professional Network",
      action: "Connect",
      href: "#",
      gradient: "from-accent/20 to-primary/20"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "30-min consultation",
      action: "Book Call",
      href: "#",
      gradient: "from-primary/30 to-accent/15"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss quantitative finance projects, research collaborations, 
            or career opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card
                    key={index}
                    className="glass hover-glow transition-smooth hover:scale-105 overflow-hidden"
                  >
                    <div className={`bg-gradient-to-r ${method.gradient} p-6`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-background/20 rounded-lg">
                            <method.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold">{method.title}</h4>
                            <p className="text-muted-foreground">{method.description}</p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="glass hover-glow"
                        >
                          {method.action}
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Location Info */}
            <Card className="glass p-6 hover-glow transition-smooth">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-muted-foreground">Toronto, Ontario, Canada</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Available for remote work and open to relocation for the right opportunity.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass p-8 hover-glow transition-smooth">
            <div className="flex items-center space-x-3 mb-6">
              <MessageSquare className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold">Send a Message</h3>
            </div>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input 
                    placeholder="John"
                    className="glass"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input 
                    placeholder="Doe"
                    className="glass"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input 
                  type="email"
                  placeholder="john.doe@example.com"
                  className="glass"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input 
                  placeholder="Research Collaboration Opportunity"
                  className="glass"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="I'd like to discuss..."
                  className="glass min-h-[120px]"
                />
              </div>

              <Button 
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                size="lg"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="glass p-8 max-w-2xl mx-auto hover-glow transition-smooth">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Make an <span className="text-gradient">Impact?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you're looking for quantitative analysis expertise, research collaboration, 
              or want to discuss innovative approaches to financial engineering, I'm here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="glass hover-glow">
                Download Resume
              </Button>
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Schedule Call
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;