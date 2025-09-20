import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Database, Server, Globe } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Full Stack Development",
      description: "Expert in NodeJS (TypeScript), Golang, Rust, Java, and modern frameworks"
    },
    {
      icon: <Server size={24} />,
      title: "Cloud & Infrastructure", 
      description: "Kubernetes (EKS/AKS), AWS, Azure, Docker, Terraform, and Helm"
    },
    {
      icon: <Database size={24} />,
      title: "Observability & Data",
      description: "PostgreSQL, Elasticsearch, Redis, DynamoDB, MongoDB, Elastic APM, Prometheus, Grafana"
    },
    {
      icon: <Globe size={24} />,
      title: "DevOps & Testing",
      description: "GitHub Actions, Azure Pipelines, Jest, Selenium, Playwright, and CI/CD automation"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6">
            <span className="text-sm text-muted-foreground">About Me</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-medium mb-8 max-w-4xl mx-auto leading-tight">
            Passionate about creating 
            <span className="text-primary"> digital experiences</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Cloud-native Full Stack Engineer with 10+ years of experience in distributed systems, 
            Kubernetes, AWS, and Azure. I specialize in system design, performance tuning, and 
            cost optimization. Active contributor to open-source projects like KEDA and SeleniumHQ, 
            with expertise in troubleshooting complex issues and improving developer experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {highlights.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg bg-background/80 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-medium mb-8">My Journey</h3>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  My journey began in aeronautical engineering, but I found my passion in 
                  software development. Starting with systems engineering in aviation, I 
                  evolved into full stack development, specializing in cloud-native solutions.
                </p>
                <p>
                  At Volvo Cars, I've implemented unified observability frameworks, reduced 
                  AWS costs from $50K to $12K, and architected distributed testing platforms 
                  on Amazon EKS. I believe in building scalable, cost-effective solutions.
                </p>
                <p>
                  I'm passionate about open source contributions, having worked on Selenium 
                  Grid scaler, for KEDA and integrating it with Docker Selenium's Helm charts. 
                  I also share knowledge through technical publications on Medium.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "4", label: "Languages" },
              { number: "5", label: "Organizations" },
              { number: "2", label: "Open Source Projects" }
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative text-center p-8 rounded-2xl bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-4xl font-medium text-primary mb-3">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}