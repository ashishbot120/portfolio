"use client"

import { motion } from "framer-motion"
import { Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
]

export function Navbar({
  activeId,
  onNavigate,
}: {
  activeId: string
  onNavigate: (id: string) => void
}) {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-white/10 bg-black/35 backdrop-blur-xl shadow-xl px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            {/* Brand */}
            <button
              onClick={() => onNavigate("home")}
              className="text-white font-semibold tracking-tight"
            >
              Ashish <span className="text-zinc-400">Waghode</span>
            </button>

            {/* Links */}
            <div className="hidden md:flex items-center gap-2">
              {nav.map((n) => (
                <button
                  key={n.id}
                  onClick={() => onNavigate(n.id)}
                  className={`relative px-3 py-1.5 rounded-xl text-sm transition-all ${
                    activeId === n.id
                      ? "text-white"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {activeId === n.id && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-xl bg-white/10 border border-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{n.label}</span>
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="border-white/10 bg-white/5 text-white hover:bg-white/10"
                size="sm"
                asChild
              >
                <a href="mailto:ashishwaghode1301@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </a>
              </Button>

              <Button
                variant="outline"
                className="border-white/10 bg-white/5 text-white hover:bg-white/10"
                size="sm"
                asChild
              >
                <a href="https://github.com/ashishbot120" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <span className="text-xs text-zinc-400">
  {activeId.toUpperCase()}
</span>

            </div>
          </div>

          {/* Mobile quick nav */}
          <div className="mt-3 flex md:hidden gap-2 overflow-x-auto no-scrollbar">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => onNavigate(n.id)}
                className={`shrink-0 px-3 py-1.5 rounded-xl text-xs border transition-all ${
                  activeId === n.id
                    ? "bg-white/10 border-white/15 text-white"
                    : "bg-white/5 border-white/10 text-zinc-300"
                }`}
              >
                {n.label}
              </button>
            ))}
          </div>    
        </div>
      </div>
    </div>
  )
}
