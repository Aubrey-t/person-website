import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, MessageSquare, Send, MapPin, Calendar, Phone, Globe } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "", 
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const { firstName, lastName, email, subject, message } = formData;
    
    console.log('Form submitted with data:', { firstName, lastName, email, subject, message });
    
    try {
      // Try EmailJS first, with fallback to mailto
      const emailData = {
        service_id: 'service_1lq5y8s',
        template_id: 'template_7s04auc',
        user_id: '2x3KMShezT-HsYc3d',
        template_params: {
          from_name: `${firstName} ${lastName}`,
          from_email: email,
          subject: subject || 'Contact from Website',
          message: message,
          to_email: 'tafadzwa@tsambatare.com'
        }
      };

      console.log('Sending email with data:', emailData);

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
      });

      console.log('Response status:', response.status);

      if (response.ok) {
        const result = await response.text();
        console.log('Success:', result);
        
        // Show success message
        alert('✅ Message sent successfully! Thank you for reaching out. I\'ll get back to you soon.');
        
        // Clear form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        
        // Fallback to mailto if EmailJS fails
        console.log('EmailJS failed, using mailto fallback');
        const mailtoLink = `mailto:tafadzwa@tsambatare.com?subject=${encodeURIComponent(subject || 'Contact from Website')}&body=${encodeURIComponent(
          `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;
        window.open(mailtoLink, '_blank');
        alert('EmailJS service unavailable. Opening your email client instead.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Fallback to mailto if EmailJS completely fails
      console.log('EmailJS error, using mailto fallback');
      const mailtoLink = `mailto:tafadzwa@tsambatare.com?subject=${encodeURIComponent(subject || 'Contact from Website')}&body=${encodeURIComponent(
        `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;
      window.open(mailtoLink, '_blank');
      alert('EmailJS service unavailable. Opening your email client instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
      href: "https://www.linkedin.com/in/aubrey96/",
      gradient: "from-accent/20 to-primary/20"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "30-min consultation",
      action: "Book Call",
      href: "https://outlook.office365.com/book/BookaChatAubrey@tsambatare.com/?ismsaljsauthenabled=true",
      gradient: "from-primary/30 to-accent/15"
    }
  ];

  const availability = [
    {
      icon: MapPin,
      title: "Location",
      details: "Toronto, Ontario, Canada",
      subtitle: "Available for remote work and open to relocation"
    },
    {
      icon: Globe,
      title: "Time Zone", 
      details: "Eastern Time (UTC-5/-4)",
      subtitle: "Flexible for international collaboration"
    },
    {
      icon: Phone,
      title: "Response Time",
      details: "Within 24 hours",
      subtitle: "Typically respond same day during business hours"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="text-black">Let's</span> <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
            Ready to discuss quantitative finance projects, research collaborations, career opportunities, 
            or innovative approaches to financial engineering? I'd love to hear from you and explore how 
            we can work together to solve complex financial challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-black">Get In Touch</h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card
                    key={index}
                    className="glass hover-glow transition-smooth hover:scale-105 overflow-hidden group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`bg-gradient-to-r ${method.gradient} p-6`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-background/20 rounded-lg">
                            <method.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-foreground">{method.title}</h3>
                            <p className="text-foreground/80">{method.description}</p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="glass hover-glow opacity-0 group-hover:opacity-100 transition-all duration-300"
                          onClick={() => window.open(method.href, '_blank')}
                        >
                          {method.action}
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Availability Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-black">Availability & Info</h3>
              {availability.map((item, index) => (
                <Card 
                  key={index}
                  className="glass p-4 hover-glow transition-smooth"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-primary font-medium">{item.details}</p>
                      <p className="text-sm text-foreground/70 mt-1">{item.subtitle}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass p-8 hover-glow transition-smooth mt-14">
              <div className="flex items-center space-x-3 mb-8">
                <MessageSquare className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Send a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name *</label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="glass"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name *</label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="glass"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email *</label>
                  <Input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                    className="glass"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject *</label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Research Collaboration Opportunity"
                    className="glass"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message *</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I'd like to discuss a potential collaboration on quantitative finance research..."
                    className="glass min-h-[150px]"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-foreground/70 text-center">
                  Your message is important to me. I personally read and respond to every inquiry 
                  within 24 hours. For urgent matters, feel free to reach out via LinkedIn.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Areas of Interest */}
        <div className="mb-16">
          <Card className="glass p-10 hover-glow transition-smooth">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                What I'm <span className="text-gradient">Interested In</span>
              </h2>
              <p className="text-foreground/80 text-lg">
                Topics and opportunities I'm particularly excited to discuss
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Research Collaboration",
                  description: "Joint research projects in quantitative finance, risk management, or algorithmic trading"
                },
                {
                  title: "Career Opportunities", 
                  description: "Full-time roles in quantitative analysis, portfolio management, or financial engineering"
                },
                {
                  title: "Consulting Projects",
                  description: "Short-term engagements in financial modeling, backtesting, or strategy development"
                },
                {
                  title: "Knowledge Sharing",
                  description: "Speaking opportunities, workshops, or collaborative learning initiatives"
                }
              ].map((item, index) => (
                <Card
                  key={index}
                  className="glass p-6 hover-glow transition-smooth hover:scale-105 text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-bold text-lg mb-3 text-foreground">{item.title}</h3>
                  <p className="text-foreground/75 text-sm leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="glass p-8 max-w-2xl mx-auto hover-glow transition-smooth">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Make an <span className="text-gradient">Impact?</span>
            </h3>
            <p className="text-foreground/80 mb-6">
              Whether you're looking for quantitative analysis expertise, research collaboration, 
              or want to discuss innovative approaches to financial engineering, I'm here to help 
              turn complex challenges into actionable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="glass hover-glow"
                onClick={() => window.open('/Tafadzwa (Aubrey) Tsambatare - Resume v.09232025.pdf', '_blank')}
              >
                Download Resume
              </Button>
              <Button 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={() => window.open('https://outlook.office365.com/book/BookaChatAubrey@tsambatare.com/?ismsaljsauthenabled=true', '_blank')}
              >
                Schedule Call
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;