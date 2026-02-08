"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"

const sections = [
  { id: "home", component: <Hero /> },
  { id: "about", component: <About /> },
  { id: "skills", component: <Skills /> },
  { id: "projects", component: <Projects /> },
  { id: "education", component: <Education /> },
  { id: "contact", component: <Contact /> },
]

export default function Home() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const goTo = useCallback(
    (id: string) => {
      const i = sections.findIndex((s) => s.id === id)
      if (i === -1 || i === index) return
      setDirection(i > index ? 1 : -1)
      setIndex(i)
    },
    [index]
  )

  const next = useCallback(() => {
    if (index < sections.length - 1) {
      setDirection(1)
      setIndex((prev) => prev + 1)
    }
  }, [index])

  const prev = useCallback(() => {
    if (index > 0) {
      setDirection(-1)
      setIndex((prev) => prev - 1)
    }
  }, [index])

  // Keyboard Navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [next, prev])

  // Mouse Wheel Navigation (with small cooldown so it doesn't jump too fast)
  useEffect(() => {
    let locked = false
    const handleWheel = (e: WheelEvent) => {
      if (locked) return
      locked = true
      if (e.deltaY > 0) next()
      if (e.deltaY < 0) prev()
      setTimeout(() => (locked = false), 650)
    }
    window.addEventListener("wheel", handleWheel, { passive: true })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [next, prev])

  return (
    <div className="h-screen w-screen overflow-hidden relative bg-[#050507]">
      {/* consistent background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(70%_45%_at_50%_0%,rgba(99,102,241,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_35%_at_85%_20%,rgba(168,85,247,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_35%_at_10%_80%,rgba(236,72,153,0.08),transparent_60%)]" />
      </div>

      {/* Navbar */}
      <Navbar activeId={sections[index].id} onNavigate={goTo} />

      <div className="h-full w-full perspective-[1500px] pt-16">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.section
            key={sections[index].id}
            id={sections[index].id}
            custom={direction}
            initial={{
              rotateY: direction > 0 ? 120 : -120,
              opacity: 0,
              x: direction > 0 ? 320 : -320,
              filter: "blur(8px)",
            }}
            animate={{
              rotateY: 0,
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            exit={{
              rotateY: direction > 0 ? -120 : 120,
              opacity: 0,
              x: direction > 0 ? -320 : 320,
              filter: "blur(8px)",
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="h-full w-full overflow-hidden"
          >
            <div className="h-full w-full overflow-y-auto no-scrollbar">
    {sections[index].component}
  </div>
          </motion.section>
        </AnimatePresence>

        {/* Arrows (modernized) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          <button
            onClick={prev}
            className="px-4 py-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all text-white"
          >
            ◀
          </button>

          <button
            onClick={next}
            className="px-4 py-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all text-white"
          >
            ▶
          </button>
        </div>

        {/* Dots (premium) */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-4">
          {sections.map((section, i) => (
            <motion.button
              key={section.id}
              onClick={() => {
                setDirection(i > index ? 1 : -1)
                setIndex(i)
              }}
              whileHover={{ scale: 1.25 }}
              className={`w-3.5 h-3.5 rounded-full transition-all border ${
                i === index
                  ? "bg-white border-white"
                  : "bg-white/20 border-white/20 hover:bg-white/35"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
