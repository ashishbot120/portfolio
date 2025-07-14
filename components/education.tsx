import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and learning journey in Computer Engineering.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">Bachelor of Engineering in Computer Engineering</CardTitle>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Vidyavardhini's College of Engineering and Technology</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Expected Graduation: 2026</span>
                    </div>
                    <p className="text-sm">Affiliated to Mumbai University</p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Current Status:</h4>
                  <p className="text-muted-foreground">
                    3rd Year Student - Actively learning and building projects in AI/ML and Full Stack Development
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Key Focus Areas:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Artificial Intelligence and Machine Learning</li>
                    <li>Natural Language Processing</li>
                    <li>Backend Development with Python</li>
                    <li>Database Management and Vector Databases</li>
                    <li>Software Engineering Principles</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Academic Interests:</h4>
                  <p className="text-muted-foreground">
                    Specializing in AI-powered applications, document processing systems, and intelligent chatbot
                    development. Actively working on projects that combine theoretical knowledge with practical
                    implementation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
