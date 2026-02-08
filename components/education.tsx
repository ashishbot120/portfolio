"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"
import { container, item } from "@/components/motion"

const edu = [
  {
    title: "B.E. Computer Engineering",
    place: "Vidyavardhini's College of Engineering & Technology",
    meta: "University of Mumbai",
    year: "2023 – 2027",
    score: "CGPA: 8.4",
    highlights: ["AI & Machine Learning", "RAG Systems", "Computer Vision (YOLO)", "Backend Architecture"],
    icon: GraduationCap,
    accent: "from-blue-500/25 to-purple-500/25",
  },
  {
    title: "Higher Secondary (HSC)",
    place: "Mount Carmel Junior College",
    meta: "Science",
    year: "2023",
    score: "74%",
    highlights: ["Mathematics", "Physics", "Chemistry"],
    icon: Award,
    accent: "from-purple-500/25 to-pink-500/25",
  },
  {
    title: "Secondary School (SSC)",
    place: "Nazareth Convent High School",
    meta: "Board",
    year: "2021",
    score: "87%",
    highlights: ["Core academics", "Discipline & consistency"],
    icon: Award,
    accent: "from-emerald-500/25 to-sky-500/25",
  },
]

export function Education() {
  return (
    <section id="education" className="relative w-full min-h-[100svh] flex items-center justify-center px-6 py-16 overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-r from-blue-600/15 to-purple-600/15 blur-3xl" />
        <div className="absolute -bottom-28 right-[-140px] h-[520px] w-[520px] rounded-full bg-gradient-to-r from-fuchsia-600/10 to-sky-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_40%_at_50%_5%,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="w-full max-w-6xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <motion.h2 variants={item} className="text-4xl font-bold text-white mb-3">
            Education
          </motion.h2>
          <motion.p variants={item} className="text-zinc-400 max-w-2xl mx-auto">
            Academic journey focused on AI systems, scalable architectures, and applied engineering foundations.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {edu.map((e, i) => {
            const Icon = e.icon
            const shape =
              i % 3 === 0
                ? "rounded-[28px]"
                : i % 3 === 1
                ? "rounded-[28px] [clip-path:polygon(0%_0%,100%_0%,100%_88%,92%_100%,0%_100%)]"
                : "rounded-[28px] [clip-path:polygon(0%_0%,100%_0%,100%_100%,10%_100%,0%_86%)]"

            return (
              <motion.div key={e.title} variants={item}>
                <Card className={`group relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl ${shape}`}>
                  {/* glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${e.accent} blur-2xl`} />
                  </div>

                  <CardHeader className="relative">
                    <div className="flex items-start gap-3">
                      <div className="p-3 rounded-2xl border border-white/10 bg-white/5">
                        <Icon className="h-6 w-6 text-white" />
                      </div>

                      <div className="min-w-0">
                        <CardTitle className="text-lg text-white leading-snug">
                          {e.title}
                        </CardTitle>
                        <p className="text-xs text-zinc-400 mt-1">{e.year}</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative space-y-4">
                    <div className="space-y-2 text-sm text-zinc-300">
                      <div className="flex items-center gap-2 text-zinc-300">
                        <MapPin className="h-4 w-4 text-zinc-400" />
                        <span className="truncate">{e.place}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-300">
                        <Calendar className="h-4 w-4 text-zinc-400" />
                        <span className="truncate">{e.meta}</span>
                      </div>

                      <div className="pt-2 font-semibold text-white">{e.score}</div>
                    </div>

                    <div className="pt-2">
                      <p className="text-xs uppercase tracking-wide font-semibold text-zinc-400 mb-2">
                        Focus / Highlights
                      </p>

                      <div className="space-y-2">
                        {e.highlights.map((h, idx) => (
                          <motion.div
                            key={h}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: idx * 0.04 }}
                            className="flex items-start gap-2 text-sm text-zinc-300"
                          >
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                            <span>{h}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
