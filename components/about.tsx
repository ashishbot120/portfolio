import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate Computer Engineering student with a strong focus on AI and machine learning. I love
            building intelligent applications that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Brain className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">AI Enthusiast</h3>
              <p className="text-muted-foreground">
                Passionate about LLMs, RAG systems, and building intelligent chatbots with local AI models.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Code className="h-12 w-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
              <p className="text-muted-foreground">
                Experienced in Python, FastAPI, and building scalable backend systems with modern frameworks.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Zap className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
              <p className="text-muted-foreground">
                Love tackling complex challenges and turning innovative ideas into practical solutions.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Currently in my 3rd year of Computer Engineering at Vidyavardhini's College of Engineering and Technology. I
            specialize in building AI-powered applications, particularly focusing on document processing, natural
            language understanding, and creating intelligent chatbot systems. My recent work includes developing a
            sophisticated PDF chatbot with AI summarization and source tracking capabilities.
          </p>
        </div>
      </div>
    </section>
  )
}
