import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Web Technologies",
    skills: ["Next.js", "React.js", "Node.js", "Express", "FastAPI", "Tailwind CSS"],
  },
  {
    title: "AI / ML",
    skills: ["RAG", "NLP", "YOLO", "OCR", "Vector Databases", "LLMs"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "ChromaDB"],
  },
  {
    title: "Systems & Hardware",
    skills: ["VLSI Basics", "CMOS Fundamentals", "Digital Circuits"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "Postman", "Streamlit", "Vercel"],
  },
]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build intelligent applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
