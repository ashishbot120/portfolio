"use client"

import { motion } from "framer-motion"
import { Brain, Code, Zap } from "lucide-react"
import { container, item } from "@/components/motion"

const cards = [
  {
    icon: Brain,
    title: "Applied AI Systems",
    desc: "Designing RAG pipelines, semantic search systems, and LLM-powered automation workflows optimized for real-world use.",
    accent: "from-blue-500/25 to-purple-500/25",
    shape: "rounded-[28px]",
  },
  {
    icon: Code,
    title: "Full-Stack Architecture",
    desc: "Building scalable SaaS systems using Next.js, Node.js, FastAPI, secure JWT authentication, and cloud-ready deployment models.",
    accent: "from-purple-500/25 to-pink-500/25",
    shape:
      "rounded-[28px] [clip-path:polygon(0%_0%,100%_0%,100%_88%,92%_100%,0%_100%)]",
  },
  {
    icon: Zap,
    title: "Systems & Hardware Thinking",
    desc: "Exploring CMOS logic, digital systems, and performance optimization — bridging hardware fundamentals with intelligent software systems.",
    accent: "from-emerald-500/25 to-sky-500/25",
    shape:
      "rounded-[28px] [clip-path:polygon(0%_0%,100%_0%,100%_100%,10%_100%,0%_86%)]",
  },
]

export function About() {
  return (
    <section id="about" className="relative w-full min-h-[100svh] flex items-center justify-center px-6 py-16 overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl" />
        <div className="absolute -bottom-24 right-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-r from-fuchsia-600/15 to-sky-600/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(255,255,255,0.07),transparent_60%)]" />
      </div>

      <div className="w-full max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* LEFT TEXT */}
          <motion.div variants={item}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300 backdrop-blur">
              Engineering • AI • Systems
            </div>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Engineering Intelligence.
              </span>
            </h2>

            <p className="mt-6 text-zinc-300 text-lg leading-relaxed">
              I build scalable backend systems and Applied AI architectures designed for production environments.
              My focus is intelligent automation, explainable AI, and high-performance full-stack platforms.
            </p>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              From Retrieval-Augmented Generation pipelines to Computer Vision-based traffic systems and secure SaaS architectures —
              I engineer systems that merge software depth with system-level thinking.
            </p>

            <motion.div
              variants={item}
              className="mt-8 grid grid-cols-2 gap-3 max-w-lg"
            >
              {[
                ["Focus", "RAG • CV • Backend"],
                ["Stack", "Next.js • FastAPI"],
                ["Deploy", "Docker • Vercel"],
                ["Mindset", "Production-first"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <div className="text-xs text-zinc-400">{k}</div>
                  <div className="mt-1 text-sm font-medium text-white">{v}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div variants={item} className="relative grid gap-6">
            {cards.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className={`group relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl ${c.shape}`}
                >
                  {/* glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${c.accent} blur-2xl`} />
                  </div>

                  <div className="relative p-7">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl border border-white/10 bg-white/5">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{c.title}</h3>
                    </div>

                    <motion.p
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.08 }}
                      className="mt-4 text-sm leading-relaxed text-zinc-300"
                    >
                      {c.desc}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.1 }}
                      className="mt-6 flex items-center gap-2 text-xs text-zinc-400"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                      Built for real-world automation
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
