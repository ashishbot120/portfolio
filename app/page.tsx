"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";

const sections = [
  { id: "home", component: <Hero /> },
  { id: "about", component: <About /> },
  { id: "skills", component: <Skills /> },
  { id: "projects", component: <Projects /> },
  { id: "education", component: <Education /> },
  { id: "contact", component: <Contact /> },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    if (index < sections.length - 1) {
      setDirection(1);
      setIndex((prev) => prev + 1);
    }
  }, [index]);

  const prev = useCallback(() => {
    if (index > 0) {
      setDirection(-1);
      setIndex((prev) => prev - 1);
    }
  }, [index]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  // Mouse Wheel Navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) next();
      if (e.deltaY < 0) prev();
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [next, prev]);

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black relative perspective-[1500px]">

      <AnimatePresence mode="wait" custom={direction}>
        <motion.section
          key={sections[index].id}
          id={sections[index].id}
          custom={direction}
          initial={{
            rotateY: direction > 0 ? 120 : -120,
            opacity: 0,
            x: direction > 0 ? 300 : -300,
          }}
          animate={{
            rotateY: 0,
            opacity: 1,
            x: 0,
          }}
          exit={{
            rotateY: direction > 0 ? -120 : 120,
            opacity: 0,
            x: direction > 0 ? -300 : 300,
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="h-full w-full flex items-center justify-center"
        >
          {sections[index].component}
        </motion.section>
      </AnimatePresence>

      {/* Arrows */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-8">
        <button
          onClick={prev}
          className="px-5 py-2 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all"
        >
          ◀
        </button>

        <button
          onClick={next}
          className="px-5 py-2 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all"
        >
          ▶
        </button>
      </div>

      {/* Dots */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
        {sections.map((section, i) => (
          <motion.div
            key={section.id}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            whileHover={{ scale: 1.4 }}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              i === index ? "bg-white scale-125" : "bg-white/30"
            }`}
          />
        ))}
      </div>

    </div>
  );
}
