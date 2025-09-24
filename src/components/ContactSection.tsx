import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, MessageSquare, Send, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "tafadzwa@tsambatare.com",
      action: "Send Email",
      href: "mailto:tafadzwa@tsambatare.com",
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
      description: "30-min sync up",
      action: "Book Call",
      href: "https://outlook.office365.com/owa/calendar/BookaChatAubrey@tsambatare.com/bookings/",
      gradient: "from-primary/30 to-accent/15"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900">Let's</span> <span className="text-yellow-600">Connect</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Ready to discuss quantitative finance projects, research collaborations, 
            or career opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-gray-900">Get In</span> <span className="text-yellow-600">Touch</span>
              </h3>
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
                            <h4 className="font-bold text-white">{method.title}</h4>
                            <p className="text-white/90 font-medium">{method.description}</p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="glass hover-glow"
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

            {/* Location Info */}
            <Card className="glass p-6 hover-glow transition-smooth">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Location</h4>
                  <p className="text-white/90 font-medium">Toronto, Ontario, Canada</p>
                </div>
              </div>
              <p className="text-sm text-white/90 font-medium">
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

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    className="glass"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className="glass"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john.doe@example.com"
                  className="glass"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Research Collaboration Opportunity"
                  className="glass"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="I'd like to discuss..."
                  className="glass min-h-[120px]"
                />
              </div>

              <Button 
                type="submit"
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
              <span className="text-gray-800">Ready to Make an</span> <span className="text-yellow-600">Impact?</span>
            </h3>
            <p className="text-white mb-6 font-medium">
              Whether you're looking for quantitative analysis expertise, research collaboration, 
              or want to discuss innovative approaches to financial engineering, I'm here to help.
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
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/BookaChatAubrey@tsambatare.com/bookings/', '_blank')}
              >
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