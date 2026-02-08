"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { container, item } from "@/components/motion"

export function Skills() {
  const skillCategories = [
    { title: "Languages", skills: ["Python", "JavaScript", "TypeScript"] },
    { title: "Web Technologies", skills: ["Next.js", "React.js", "Node.js", "Express", "FastAPI", "Tailwind CSS"] },
    { title: "AI / ML", skills: ["RAG", "NLP", "YOLO", "OCR", "Vector Databases", "LLMs"] },
    { title: "Databases", skills: ["MongoDB", "PostgreSQL", "ChromaDB"] },
    { title: "Systems & Hardware", skills: ["VLSI Basics", "CMOS Fundamentals", "Digital Circuits"] },
    { title: "Tools", skills: ["Git", "Docker", "Postman", "Streamlit", "Vercel"] },
  ]

  const shapeClass = (i: number) => {
    const shapes = [
      "rounded-[26px]",
      "rounded-[26px] [clip-path:polygon(0%_0%,100%_0%,100%_88%,94%_100%,0%_100%)]",
      "rounded-[26px] [clip-path:polygon(0%_0%,100%_0%,100%_100%,6%_100%,0%_88%)]",
    ]
    return shapes[i % shapes.length]
  }

  return (
    <section id="skills" className="relative py-20">
      {/* softer background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_30%_at_50%_0%,rgba(168,85,247,0.10),transparent_60%)]" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build intelligent, production-ready applications.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Card
                className={[
                  // LIGHTER surface
                  "group relative overflow-hidden",
                  "bg-white/[0.03] dark:bg-white/[0.04]",
                  "border border-white/10 dark:border-white/10",
                  "backdrop-blur-xl",
                  "shadow-md hover:shadow-xl",
                  "transition-all duration-300 hover:-translate-y-1",
                  shapeClass(index),
                ].join(" ")}
              >
                {/* very subtle glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15 blur-lg" />
                </div>

                <CardHeader className="relative pb-2">
                  <CardTitle className="text-lg flex items-center justify-between">
                    {category.title}
                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      {category.skills.length}
                    </span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative pt-2">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-wrap gap-2"
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.03 }}
                      >
                        <Badge
                          className="
                            bg-white/5 dark:bg-white/5
                            border border-white/10
                            text-foreground
                            backdrop-blur
                          "
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
