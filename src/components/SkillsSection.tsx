import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "NodeJS (TypeScript)", level: 95 },
        { name: "Golang", level: 85 },
        { name: "Java (Spring Boot)", level: 90 },
        { name: "Rust", level: 75 },
        { name: ".NET", level: 80 },
        { name: "GraphQL", level: 90 }
      ]
    },
    {
      title: "Cloud & Infrastructure", 
      skills: [
        { name: "Kubernetes (EKS/AKS)", level: 95 },
        { name: "AWS", level: 90 },
        { name: "Azure", level: 85 },
        { name: "Docker", level: 90 },
        { name: "Terraform", level: 85 },
        { name: "Helm", level: 90 }
      ]
    },
    {
      title: "Databases & Observability",
      skills: [
        { name: "Elasticsearch", level: 95 },
        { name: "Redis", level: 85 },
        { name: "DynamoDB", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "Prometheus", level: 90 },
        { name: "Grafana", level: 90 }
      ]
    }
  ];

  const tools = [
    "GitHub Actions", "Jenkins", "TeamCity", "k6", "Selenium", "Playwright", 
    "Mocha", "Jest", "Elastic APM", "Datadog", "CloudWatch", "InfluxDB"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Skills & Expertise</Badge>
          <h2 className="text-3xl lg:text-4xl font-medium mb-6">
            Technologies I work with
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's a comprehensive overview of the technologies and tools I use 
            to build modern, scalable applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-medium mb-6">Tools & Platforms</h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}