import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: <Github size={18} />, href: "https://github.com/prashanth-volvocars", label: "GitHub" },
    { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/prashanth-ramadass-1b898356", label: "LinkedIn" },
    { icon: <Mail size={18} />, href: "mailto:rprashanth27@gmail.com", label: "Email" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-t from-muted/30 to-background border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <button 
              onClick={scrollToTop}
              className="text-xl font-medium text-primary hover:opacity-80 transition-all duration-200 hover:scale-105"
            >
              {"<Prashanth />"}
            </button>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Cloud-native Full Stack Engineer with 10+ years of experience in 
              distributed systems, Kubernetes, AWS, and Azure.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <Button 
                  key={index} 
                  variant="ghost" 
                  size="icon" 
                  className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-all duration-200 text-left hover:translate-x-1"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Get In Touch</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">Ready to start your next project?</p>
              <div className="space-y-2">
                <a 
                  href="mailto:rprashanth27@gmail.com" 
                  className="block hover:text-primary transition-colors duration-200 hover:translate-x-1"
                >
                  rprashanth27@gmail.com
                </a>
                <a 
                  href="tel:+46707753144" 
                  className="block hover:text-primary transition-colors duration-200 hover:translate-x-1"
                >
                  +46 707753144
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-muted-foreground">
              © {currentYear} Prashanth Ramadass. All rights reserved.
            </p>
            <div className="flex items-center text-muted-foreground group">
              <span>Made with</span>
              <Heart size={16} className="mx-2 text-red-500 fill-current group-hover:scale-110 transition-transform duration-200" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}