"use client"

import { motion } from "framer-motion"
import { Brain, Code, Zap } from "lucide-react"

export function About() {
  return (
    <section className="w-full h-full flex items-center justify-center px-8 relative">

      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE - TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Engineering Intelligence.
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            I build scalable backend systems and Applied AI architectures designed
            for production environments. My focus is on intelligent automation,
            explainable AI, and high-performance full-stack platforms.
          </p>

          <p className="text-zinc-500 leading-relaxed">
            From Retrieval-Augmented Generation pipelines to Computer Vision-based
            traffic systems and secure SaaS architectures — I engineer systems
            that merge software depth with system-level thinking.
          </p>
        </motion.div>

        {/* RIGHT SIDE - MODERN STACKED CARDS */}
        <div className="relative flex flex-col gap-8">

          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.04 }}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl"
          >
            <Brain className="h-10 w-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Applied AI Systems
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Designing RAG pipelines, semantic search systems, and LLM-powered
              automation workflows optimized for real-world use.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.04 }}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl ml-8"
          >
            <Code className="h-10 w-10 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Full-Stack Architecture
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Building scalable SaaS systems using Next.js, Node.js, FastAPI,
              secure JWT authentication, and cloud-ready deployment models.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.04 }}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl"
          >
            <Zap className="h-10 w-10 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Systems & Hardware Thinking
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Exploring CMOS logic, digital systems, and performance optimization —
              bridging hardware fundamentals with intelligent software systems.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
