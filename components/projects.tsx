import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, FileText, Brain, Search } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "PDF Chatbot with AI Summarization",
      description:
        "A powerful AI-based chatbot where users upload a PDF, ask questions about it, and receive accurate answers along with the exact source from the document. Features iterative summarization, chunking, and vector search for explainable AI responses.",
      technologies: [
        "Python",
        "FastAPI",
        "Streamlit",
        "PyMuPDF",
        "Tesseract OCR",
        "SentenceTransformer",
        "ChromaDB",
        "Ollama (Mistral)",
      ],
      features: [
        "PDF uploading with text & OCR-based chunking",
        "Iterative summarization and embedding storage",
        "Cosine similarity for relevant chunk finding",
        "Local LLM (Ollama) for secure question answering",
        "Source chunk and location tracking",
        "Simple Streamlit interface",
      ],
      github: "https://github.com/ashishbot120/pdf-rag-chatbot",
      demo: null,
      icon: <FileText className="h-6 w-6" />,
      featured: true,
    },
    {
      title: "AI Document Processor",
      description:
        "Advanced document processing system with OCR capabilities and intelligent text extraction for various document formats.",
      technologies: ["Python", "Tesseract OCR", "PyMuPDF", "OpenCV"],
      features: [
        "Multi-format document support",
        "OCR text extraction",
        "Intelligent text preprocessing",
        "Batch processing capabilities",
      ],
      github: "#",
      demo: null,
      icon: <Brain className="h-6 w-6" />,
      featured: false,
    },
    {
      title: "Vector Search Engine",
      description:
        "Custom vector search engine using embeddings and similarity search for semantic document retrieval.",
      technologies: ["Python", "ChromaDB", "SentenceTransformer", "FastAPI"],
      features: [
        "Semantic search capabilities",
        "Vector embeddings storage",
        "Real-time similarity matching",
        "RESTful API interface",
      ],
      github: "#",
      demo: null,
      icon: <Search className="h-6 w-6" />,
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in AI, machine learning, and full-stack
            development.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`${project.featured ? "border-2 border-blue-500/20 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20" : ""}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">{project.icon}</div>
                    <div>
                      <CardTitle className="text-xl mb-2">
                        {project.title}
                        {project.featured && (
                          <Badge className="ml-2" variant="default">
                            Featured
                          </Badge>
                        )}
                      </CardTitle>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button variant="outline" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
