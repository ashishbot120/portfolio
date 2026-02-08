"use client"

import { Button } from "@/components/ui/button"
import { Github, Mail, MapPin, ArrowRight, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useMemo, useState } from "react"
import { container, item } from "@/components/motion"

export function Hero() {
  const titles = useMemo(
    () => [
      "Full-Stack & Applied AI Engineer",
      "RAG & Computer Vision Developer",
      "Scalable Backend Architect",
      "VLSI & Systems Explorer",
    ],
    []
  )

  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % titles.length), 2200)
    return () => clearInterval(t)
  }, [titles.length])

  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-20 pb-12">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/25 to-purple-600/25 blur-3xl" />
        <div className="absolute -bottom-24 right-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-r from-fuchsia-600/15 to-sky-600/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2"
        >
          {/* LEFT */}
          <motion.div variants={item} className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-4 py-2 text-xs text-muted-foreground backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Building intelligent, production-ready systems
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Ashish Waghode
              </span>
            </h1>

            {/* Sliding title */}
            <div className="mt-5 h-[44px] md:h-[52px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={idx}
                  initial={{ y: 24, opacity: 0, filter: "blur(6px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -24, opacity: 0, filter: "blur(6px)" }}
                  transition={{ duration: 0.55 }}
                  className="text-lg font-medium text-muted-foreground md:text-2xl"
                >
                  {titles[idx]}
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Computer Engineering undergraduate specializing in Full-Stack Development and Applied AI.
              Experienced in building scalable web architectures and integrating Machine Learning systems
              like RAG pipelines and Computer Vision models to solve real-world automation challenges.
            </p>

            <motion.div variants={item} className="mt-7 flex flex-wrap justify-center gap-4 lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>ashishwaghode1301@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, India</span>
              </div>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button size="lg" asChild className="group">
                <a href="mailto:ashishwaghode1301@gmail.com">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild className="border-border/60 bg-background/60 backdrop-blur">
                <a href="https://github.com/ashishbot120" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild className="border-border/60 bg-background/60 backdrop-blur">
                <a href="#projects">
                  View Projects
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT - Hero Visual Card */}
          <motion.div
            variants={item}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="relative overflow-hidden rounded-[28px] border border-border/50 bg-background/60 p-6 shadow-2xl backdrop-blur">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/25 to-purple-500/25 blur-2xl" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gradient-to-r from-pink-500/20 to-sky-500/20 blur-2xl" />

              <div className="relative space-y-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-muted-foreground">Now Building</div>
                  <div className="rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-3 py-1 text-xs text-muted-foreground">
                    2026
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xl font-semibold">RAG + CV + Full-Stack</div>
                  <p className="text-sm text-muted-foreground">
                    Systems that combine retrieval, reasoning, and real-world automation.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { k: "Stack", v: "Next.js • FastAPI" },
                    { k: "AI", v: "RAG • YOLO • OCR" },
                    { k: "DB", v: "MongoDB • Postgres" },
                    { k: "Deploy", v: "Docker • Vercel" },
                  ].map((x) => (
                    <div
                      key={x.k}
                      className="rounded-2xl border border-border/50 bg-background/50 p-4"
                    >
                      <div className="text-xs text-muted-foreground">{x.k}</div>
                      <div className="mt-1 text-sm font-medium">{x.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative shape */}
            <div className="absolute -bottom-10 -right-10 -z-10 h-40 w-40 rounded-[36px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
