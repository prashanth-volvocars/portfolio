import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { useState } from "react";
import React from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "rprashanth27@gmail.com",
      action: "mailto:rprashanth27@gmail.com"
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+46 707753144",
      action: "tel:+46707753144"
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Gothenburg, Sweden",
      action: null
    }
  ];

  const socialLinks = [
    { icon: <Github size={20} />, label: "GitHub", url: "https://github.com/prashanth-volvocars" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", url: "https://linkedin.com/in/prashanth-ramadass-1b898356" },
    { icon: <Twitter size={20} />, label: "Medium", url: "https://medium.com/@rprashanth27" },
    { icon: <Mail size={20} />, label: "Email", url: "mailto:rprashanth27@gmail.com" }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6">
            <span className="text-sm text-muted-foreground">Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-medium mb-8 max-w-3xl mx-auto leading-tight">
            Let's work
            <span className="text-primary">together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always interested in hearing about new opportunities and exciting projects.
            Feel free to reach out if you'd like to discuss working together.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-16 max-w-3xl mx-auto">
          {/* Contact Form */}
          {/* <Card className="shadow-xl border-0 bg-background/80 backdrop-blur-sm">
            <CardHeader className="pb-8">
              <CardTitle className="text-2xl">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-base">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="h-12 text-base border-2 focus:border-primary/50 transition-colors duration-200"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-base">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="h-12 text-base border-2 focus:border-primary/50 transition-colors duration-200"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="subject" className="text-base">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="h-12 text-base border-2 focus:border-primary/50 transition-colors duration-200"
                    required
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="message" className="text-base">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    className="text-base border-2 focus:border-primary/50 transition-colors duration-200 resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-12 text-base shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Mail size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card> */}

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg border-0 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                      {info.action ? (
                        <a
                          href={info.action}
                          className="text-lg font-medium hover:text-primary transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-lg font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="justify-start h-12 border-2 hover:bg-primary/5 hover:border-primary/20 transition-all duration-300"
                      asChild
                    >
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        {social.icon}
                        <span className="ml-3 text-base">{social.label}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 bg-background/90 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 animate-pulse"></div>
                  <div>
                    <h3 className="text-lg font-medium mb-3">Available for opportunities</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      I'm currently available for new projects and opportunities.
                      Let's discuss how I can help bring your ideas to life.
                    </p>
                    <Badge variant="default" className="px-3 py-1">
                      Open to opportunities
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}