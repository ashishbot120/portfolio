"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { container, item } from "@/components/motion"

const skillCategories = [
  { title: "Languages", skills: ["Python", "JavaScript", "TypeScript"], accent: "from-blue-500/25 to-purple-500/25" },
  { title: "Web Technologies", skills: ["Next.js", "React.js", "Node.js", "Express", "FastAPI", "Tailwind CSS"], accent: "from-purple-500/25 to-pink-500/25" },
  { title: "AI / ML", skills: ["RAG", "NLP", "YOLO", "OCR", "Vector Databases", "LLMs"], accent: "from-sky-500/25 to-fuchsia-500/25" },
  { title: "Databases", skills: ["MongoDB", "PostgreSQL", "ChromaDB"], accent: "from-emerald-500/25 to-sky-500/25" },
  { title: "Systems & Hardware", skills: ["VLSI Basics", "CMOS Fundamentals", "Digital Circuits"], accent: "from-amber-500/25 to-rose-500/25" },
  { title: "Tools", skills: ["Git", "Docker", "Postman", "Streamlit", "Vercel"], accent: "from-indigo-500/25 to-purple-500/25" },
]

const shapeClass = (i: number) => {
  const shapes = [
    "rounded-[28px]",
    "rounded-[28px] [clip-path:polygon(0%_0%,100%_0%,100%_88%,92%_100%,0%_100%)]",
    "rounded-[28px] [clip-path:polygon(0%_0%,100%_0%,100%_100%,10%_100%,0%_86%)]",
  ]
  return shapes[i % shapes.length]
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full min-h-[100svh] flex items-center justify-center px-6 py-16 overflow-hidden"
    >
      {/* background (same style as About) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/18 to-purple-600/18 blur-3xl" />
        <div className="absolute -bottom-24 left-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-r from-fuchsia-600/14 to-sky-600/14 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(255,255,255,0.07),transparent_60%)]" />
      </div>

      <div className="w-full max-w-7xl">
        {/* header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300 backdrop-blur">
            Technologies • Tools • Systems
          </div>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight text-white">
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            A focused stack for building production-grade applications — from AI pipelines to scalable backend systems.
          </p>
        </div>

        {/* grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} variants={item}>
              <Card
                className={[
                  "group relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl transition-all duration-300",
                  "hover:-translate-y-1 hover:shadow-2xl",
                  shapeClass(index),
                ].join(" ")}
              >
                {/* glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${category.accent} blur-2xl`} />
                </div>

                <CardHeader className="relative pb-2">
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-lg text-white">
                      {category.title}
                    </CardTitle>

                    <Badge className="bg-white/10 border border-white/15 text-white backdrop-blur">
                      {category.skills.length}+
                    </Badge>
                  </div>

                  <div className="mt-3 h-px w-full bg-white/10" />
                </CardHeader>

                <CardContent className="relative pt-4">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: i * 0.03 }}
                      >
                        <Badge className="bg-white/5 border border-white/10 text-zinc-200 hover:bg-white/10 transition-colors">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.08 }}
                    className="mt-5 flex items-center gap-2 text-xs text-zinc-400"
                  >
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
