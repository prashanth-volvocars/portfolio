import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="container mx-auto px-6 py-32 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Available for opportunities</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl leading-[0.9] tracking-tight">
                  <span className="block text-foreground">Prashanth</span>
                  <span className="block text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Ramadass
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-xl leading-relaxed">
                  Cloud-native Full Stack Engineer with
                  <span className="text-foreground font-medium"> 10+ years </span>
                  of expertise in distributed systems, Kubernetes, and modern web technologies.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="px-8 py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="mr-2" size={18} />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-base border-2 hover:bg-muted/50 transition-all duration-300"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </Button>
            </div>

            <div className="flex gap-2 pt-6">
              {[
                { icon: Github, href: "https://github.com/prashanth-volvocars", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/prashanth-ramadass-1b898356", label: "LinkedIn" },
                { icon: Mail, href: "mailto:rprashanth27@gmail.com", label: "Email" }
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon size={20} />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:justify-self-end">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl blur-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl"></div>

              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted border border-border/50 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU2NDQzODAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Prashanth Ramadass - Cloud-native Full Stack Engineer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-8 -right-8 bg-background border border-border shadow-xl p-6 rounded-2xl backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-3xl font-medium bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">10+</div>
                  <div className="text-sm text-muted-foreground font-medium">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="hover:bg-primary/10 transition-all duration-300"
          >
            <ArrowDown size={20} className="animate-bounce" />
          </Button>
        </div>
      </div>
    </section>
  );
}