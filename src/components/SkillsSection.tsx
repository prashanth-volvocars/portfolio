import React from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

export function SkillsSection() {
  // Function to calculate progress bar value based on years of experience
  const calculateLevel = (years: number): number => {
    // Linear scale: 1 year = 10%, 2 years = 20%, ..., 10 years = 100%
    return Math.min(years * 10, 100);
  };

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "NodeJS (TypeScript)", years: 8 },
        { name: "Java (Spring Boot)", years: 4 },
        { name: "Golang", years: 3 },
        { name: ".NET", years: 1 },
        { name: "Rust", years: 1 },
        { name: "React (Next.js, Vue.js)", years: 4 },
      ]
    },
    {
      title: "Cloud & Infrastructure",
      skills: [
        { name: "Kubernetes (EKS/AKS)", years: 4 },
        { name: "AWS", years: 7 },
        { name: "Docker", years: 4 },
        { name: "Azure", years: 2 },
        { name: "Terraform", years: 3 },
        { name: "Helm", years: 3 }
      ]
    },
    {
      title: "Databases & Observability",
      skills: [
        { name: "Elasticsearch", years: 4 },
        { name: "MongoDB", years: 1 },
        { name: "Redis", years: 7 },
        { name: "Prometheus", years: 3 },
        { name: "Grafana", years: 3 },
        { name: "DynamoDB", years: 1 }
      ]
    },
  ];

  const tools = [
    "GitHub Actions", "Jenkins", "TeamCity", "K6", "Selenium", "Playwright",
    "Mocha", "Jest", "Elastic APM", "Datadog", "CloudWatch",
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
                      <span className="text-muted-foreground">{skill.years} years</span>
                    </div>
                    <Progress value={calculateLevel(skill.years)} className="h-2" />
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