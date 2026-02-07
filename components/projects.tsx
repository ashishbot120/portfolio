"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "OceanLuxe – Villa Booking Platform",
      description:
        "Full-stack rental platform with dual portal architecture for hosts and guests.",
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Razorpay",
        "JWT",
        "Tailwind CSS",
      ],
      features: [
        "Host & Guest dashboards",
        "JWT authentication",
        "Razorpay integration",
        "Booking calendar system",
      ],
      github: "https://github.com/ashishbot120/frontend-villabooking",
      demo: "https://frontend-villabooking.vercel.app",
      featured: true,
    },
    {
      title: "InvisiMail – AI Email Aliasing",
      description:
        "Privacy-focused disposable email alias generator to prevent spam.",
      technologies: ["FastAPI", "Python", "Email Routing", "Automation"],
      features: [
        "Alias generation",
        "Spam routing",
        "Automation scripts",
      ],
      github: "https://github.com/ashishbot120",
      demo: "https://invisi-mail.vercel.app/",
    },
    {
      title: "Intelligent Traffic Optimization",
      description:
        "Smart traffic light system adjusting signals using Computer Vision.",
      technologies: ["Python", "YOLO", "OpenCV"],
      features: [
        "Vehicle detection",
        "Dynamic signal timing",
        "Congestion metrics",
      ],
      github: "https://github.com/ashishbot120/Traffic-Optimize",
      demo: "https://traffic-optimize.onrender.com/",
    },
    {
      title: "PDF-RAG chatbot",
      description:
        "Semantic document QA system using Retrieval-Augmented Generation.",
      technologies: ["FastAPI", "ChromaDB", "Ollama", "LLMs"],
      features: [
        "Vector search",
        "Semantic chunking",
        "Explainable responses",
      ],
      github: "https://github.com/ashishbot120/pdf-rag-chatbot",
      demo: "http://139.59.44.180:8501/",
    },
  ]

  return (
    <section
      id="projects"
      className="h-screen flex flex-col justify-center bg-muted/50"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            AI systems, full-stack platforms, and production-ready applications.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="
                h-full
                flex flex-col
                justify-between
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-xl
                border border-border/50
                bg-background/80
                backdrop-blur
              "
            >
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  {project.title}
                  {project.featured && (
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs">
                      Featured
                    </Badge>
                  )}
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="flex flex-col justify-between h-full space-y-4">

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button size="sm" asChild className="flex-1">
                    <a href={project.github} target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>

                  {project.demo && (
                    <Button size="sm" variant="outline" asChild className="flex-1">
                      <a href={project.demo} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
