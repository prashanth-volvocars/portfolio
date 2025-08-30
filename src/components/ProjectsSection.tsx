import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProjectsSection() {
  const projects = [
    {
      title: "Distributed Testing Platform on Amazon EKS",
      description: "Architected and built a comprehensive testing platform integrating Selenium Grid, KEDA autoscaling, k6 OSS for load testing, Grafana for monitoring, and InfluxDB for metrics storage.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTI4M3wwfDF8c2VhcmNofDF8fGt1YmVybmV0ZXMlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzM1NjQ0MzAzfDA&ixlib=rb-4.0.3&q=80&w=1080",
      tags: ["Kubernetes", "EKS", "Selenium", "KEDA", "k6", "Grafana"],
      featured: true
    },
    {
      title: "QA Analytics Portal",
      description: "Built a comprehensive analytics portal powered by Elasticsearch to provide insights into testing metrics, performance data, and quality assurance processes across multiple teams.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTI4M3wwfDF8c2VhcmNofDF8fGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwwfHx8fDE3MzU2NDQzMDN8MA&ixlib=rb-4.0.3&q=80&w=1080",
      tags: ["Elasticsearch", "Node.js", "React", "Analytics", "Dashboard"],
      featured: true
    },
    {
      title: "KEDA Selenium Grid Scaler",
      description: "Open source contribution implementing a custom scaler for KEDA that enables automatic scaling of Selenium Grid based on pending test requests, improving resource utilization.",
      image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTI4M3wwfDF8c2VhcmNofDF8fG9wZW4lMjBzb3VyY2UlMjBjb2RlfGVufDB8fHx8MTczNTY0NDMwM3ww&ixlib=rb-4.0.3&q=80&w=1080",
      tags: ["KEDA", "Golang", "Kubernetes", "Selenium", "Open Source"],
      featured: false
    },
    {
      title: "WebSocket Messaging Platform",
      description: "Developed a high-performance messaging platform supporting 100K+ concurrent users with real-time communication, built using WebSocket technology and scalable architecture.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTI4M3wwfDF8c2VhcmNofDF8fHJlYWwlMjB0aW1lJTIwbWVzc2FnaW5nfGVufDB8fHx8MTczNTY0NDMwM3ww&ixlib=rb-4.0.3&q=80&w=1080",
      tags: ["WebSocket", "Node.js", "Real-time", "Scalability", "Messaging"],
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6">
            <span className="text-sm text-muted-foreground">Featured Work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-medium mb-8 max-w-4xl mx-auto leading-tight">
            Projects that showcase my 
            <span className="text-primary">expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on that demonstrate my skills 
            in full stack development, from concept to deployment.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <Card key={index} className={`overflow-hidden group hover:shadow-2xl transition-all duration-500 ${
              project.featured 
                ? 'border-primary/20 shadow-xl bg-gradient-to-br from-background via-background to-primary/5' 
                : 'shadow-lg hover:shadow-xl border-border/50'
            }`}>
              <div className={`grid ${project.featured ? 'lg:grid-cols-2' : 'md:grid-cols-2'} gap-0`}>
                <div className={`relative ${index % 2 === 1 && !project.featured ? 'md:order-2' : ''}`}>
                  <div className="aspect-video md:aspect-[4/3] relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    {project.featured && (
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-primary/90 backdrop-blur-sm border-primary/20 shadow-lg">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className={`p-8 lg:p-12 flex flex-col justify-between ${
                  index % 2 === 1 && !project.featured ? 'md:order-1' : ''
                }`}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-medium mb-4 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="secondary" 
                          className="px-3 py-1 text-sm bg-muted/80 hover:bg-primary/10 transition-colors duration-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4 pt-6">
                    <Button 
                      variant="outline" 
                      className="px-6 py-2 border-2 hover:bg-muted/50 transition-all duration-300"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button 
                      className="px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-3 text-base border-2 hover:bg-muted/50 transition-all duration-300 hover:scale-105"
          >
            <Github size={18} className="mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}