"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export function Education() {
  return (
    <section
      id="education"
      className="h-screen flex flex-col justify-center bg-background"
    >
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Education</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Academic journey focused on AI systems, scalable architectures, and applied engineering.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {/* BE */}
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background/80 backdrop-blur border border-border/50">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md text-white">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">
                    B.E. Computer Engineering
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    2023 – 2027
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="text-sm space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Vidyavardhini's College of Engineering & Technology
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                University of Mumbai
              </div>

              <p className="font-semibold text-foreground">
                CGPA: 8.4
              </p>

              <div className="pt-3">
                <p className="text-xs uppercase tracking-wide font-semibold mb-2">
                  Focus Areas
                </p>
                <div className="text-muted-foreground space-y-1 text-xs">
                  <p>• AI & Machine Learning</p>
                  <p>• RAG Systems</p>
                  <p>• Computer Vision (YOLO)</p>
                  <p>• Backend Architecture</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* HSC */}
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background/80 backdrop-blur border border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">
                Higher Secondary (HSC)
              </CardTitle>
            </CardHeader>

            <CardContent className="text-sm space-y-2 text-muted-foreground">
              <p>Mount Carmel Junior College</p>
              <p>2023</p>
              <p className="font-semibold text-foreground">74% (Science)</p>
            </CardContent>
          </Card>

          {/* SSC */}
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background/80 backdrop-blur border border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">
                Secondary School (SSC)
              </CardTitle>
            </CardHeader>

            <CardContent className="text-sm space-y-2 text-muted-foreground">
              <p>Nazareth Convent High School</p>
              <p> 2021</p>
              <p className="font-semibold text-foreground">87%</p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}
