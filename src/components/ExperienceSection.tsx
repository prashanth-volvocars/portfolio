import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior IT Consultant",
      company: "Volvo Cars",
      location: "Gothenburg, Sweden",
      period: "Feb 2021 - Present",
      type: "Full-time",
      description: "Leading cloud-native solutions and distributed systems architecture. Implementing observability frameworks and optimizing infrastructure costs.",
      achievements: [
        "Implemented Elastic APM framework for unified observability",
        "Built QA analytics portal powered by Elasticsearch",
        "Reduced AWS costs from $50K → $12K and 13K → 8K",
        "Developed GraphQL subgraphs with Node.js & Apollo",
        "Migrated CI/CD pipelines from Azure DevOps → GitHub Actions",
        "Architected distributed testing platform on Amazon EKS"
      ],
      technologies: ["Node.js", "Kubernetes", "AWS", "Elasticsearch", "GraphQL", "GitHub Actions"]
    },
    {
      title: "Senior Software Engineer",
      company: "CloudSense India Pvt Ltd",
      location: "Chennai, India",
      period: "Jun 2020 - Feb 2021",
      type: "Full-time",
      description: "Customized Salesforce Commerce Cloud for telecom and media clients. Maintained CI/CD pipelines and improved deployment processes.",
      achievements: [
        "Customized Salesforce Commerce Cloud for telecom/media clients",
        "Maintained CI/CD pipelines using Jenkins, improving deployment speed",
        "Delivered scalable e-commerce solutions for enterprise clients"
      ],
      technologies: ["Salesforce", "JavaScript", "Jenkins", "CI/CD"]
    },
    {
      title: "Senior Software Engineer",
      company: "Altimetrik India Pvt Ltd",
      location: "Chennai, India",
      period: "Dec 2018 - Apr 2020",
      type: "Full-time",
      description: "Built container orchestration tools for BNY Mellon enabling zero-infrastructure deployments and automated resource optimization.",
      achievements: [
        "Built container orchestration tools for BNY Mellon enabling zero-infra deployments",
        "Increased infrastructure utilization by 60% via automated right-sizing",
        "Maintained secure Docker base images, reducing vulnerabilities",
        "Migrated CI/CD pipelines from Jenkins → TeamCity"
      ],
      technologies: ["Docker", "Kubernetes", "Java", "TeamCity", "Jenkins"]
    },
    {
      title: "Senior Software Engineer",
      company: "Full Creative India Pvt Ltd",
      location: "Chennai, India",
      period: "Dec 2014 - Dec 2018",
      type: "Full-time",
      description: "Built WebSocket-based messaging platform and B2C chat systems with advanced analytics and automated testing frameworks.",
      achievements: [
        "Built WebSocket-based messaging platform supporting 100K+ concurrent users",
        "Delivered B2C chat system with Elasticsearch analytics",
        "Automated end-to-end testing with Selenium + Mocha",
        "Implemented real-time messaging with high scalability"
      ],
      technologies: ["WebSocket", "Elasticsearch", "Selenium", "Mocha", "Node.js"]
    },
    {
      title: "Systems Engineer",
      company: "ICAD Saudi Arabia",
      location: "Riyadh, Saudi Arabia",
      period: "Sep 2012 - Jun 2014",
      type: "Full-time",
      description: "Oversaw airport IT infrastructure deployments across Middle East aviation projects, ensuring compliance with civil aviation standards.",
      achievements: [
        "Oversaw airport IT infrastructure deployments across Middle East aviation projects",
        "Ensured compliance with civil aviation standards",
        "Managed complex infrastructure projects in aviation sector"
      ],
      technologies: ["Infrastructure", "Aviation Systems", "IT Management"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Experience</Badge>
          <h2 className="text-3xl lg:text-4xl font-medium mb-6">
            My professional journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Over 10 years of experience working with amazing teams and companies, 
            building products that make a difference.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                  
                  <Card className="md:ml-16">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <CardTitle className="text-lg">{exp.title}</CardTitle>
                          <div className="text-primary font-medium">{exp.company}</div>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1">
                          <Badge variant="secondary">{exp.type}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar size={14} className="mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin size={14} className="mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}