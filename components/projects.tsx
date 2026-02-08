"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Star, Images } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import { container, item } from "@/components/motion"
import { ProjectPreviewModal } from "@/components/project-preview-modal"

type Project = {
  title: string
  description: string
  technologies: string[]
  github: string
  demo?: string
  featured?: boolean
  images?: string[]
}

function useHoverSlideshow(active: boolean, images: string[] | undefined) {
  const [slide, setSlide] = useState(0)
  const count = images?.length ?? 0

  useEffect(() => {
    if (!active || count <= 1) return
    setSlide(0)

    const t = setInterval(() => {
      setSlide((s) => (s + 1) % count)
    }, 1100)

    return () => clearInterval(t)
  }, [active, count])

  return slide
}

export function Projects() {
  const projects: Project[] = useMemo(
    () => [
      {
        title: "OceanLuxe – Villa Booking Platform",
        description: "Full-stack rental platform with dual portal architecture for hosts and guests.",
        technologies: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Razorpay", "JWT", "Tailwind CSS"],
        github: "https://github.com/ashishbot120/frontend-villabooking",
        demo: "https://frontend-villabooking.vercel.app",
        featured: true,
        images: [
          "/projects/oceanluxe/1.jpeg",
          "/projects/oceanluxe/2.jpeg",
          "/projects/oceanluxe/3.jpeg",
          "/projects/oceanluxe/4.jpeg",
          "/projects/oceanluxe/5.jpeg",
          "/projects/oceanluxe/6.jpeg",
          "/projects/oceanluxe/7.jpeg",
          "/projects/oceanluxe/8.jpeg",
        ],
      },
      {
        title: "InvisiMail – AI Email Aliasing",
        description: "Privacy-focused disposable email alias generator to prevent spam.",
        technologies: ["FastAPI", "Python", "Email Routing", "Automation"],
        github: "https://github.com/ashishbot120",
        demo: "https://invisi-mail.vercel.app/",
        images: [
          "/projects/invisimail/1.jpeg",
          "/projects/invisimail/2.jpeg",
          "/projects/invisimail/3.jpeg",
          "/projects/invisimail/4.jpeg",
          "/projects/invisimail/5.jpeg",
          "/projects/invisimail/6.jpeg",
        ],
      },
      {
        title: "Traffic Optimization",
        description: "Smart traffic light system adjusting signals using Computer Vision.",
        technologies: ["Python", "YOLO", "OpenCV"],
        github: "https://github.com/ashishbot120/Traffic-Optimize",
        demo: "https://traffic-optimize.onrender.com/",
        images: [
          "/projects/traffic/1.jpeg",
          "/projects/traffic/2.jpeg",
          "/projects/traffic/3.jpeg",
          "/projects/traffic/4.jpeg",
          "/projects/traffic/5.jpeg",
          "/projects/traffic/6.jpeg",
          "/projects/traffic/7.jpeg",
          "/projects/traffic/8.jpeg",
        ],
      },
      {
        title: "PDF-RAG Chatbot",
        description: "Semantic document QA system using Retrieval-Augmented Generation.",
        technologies: ["FastAPI", "ChromaDB", "Ollama", "LLMs"],
        github: "https://github.com/ashishbot120/pdf-rag-chatbot",
        demo: "http://139.59.44.180:8501/",
        images: [
          "/projects/pdf-rag/1.jpeg",
          "/projects/pdf-rag/2.jpeg",
          "/projects/pdf-rag/3.jpeg",
          "/projects/pdf-rag/4.jpeg",
          "/projects/pdf-rag/5.jpeg",
        ],
      },
    ],
    []
  )

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Modal state
  const [modalOpen, setModalOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<{ title: string; images: string[] } | null>(null)

  const openPreview = (title: string, images: string[]) => {
    setActiveProject({ title, images })
    setModalOpen(true)
  }

  return (
    <section id="projects" className="relative py-20 bg-muted/40 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_35%_at_70%_0%,rgba(168,85,247,0.14),transparent_60%)]" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-white">Featured Projects</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            AI systems, full-stack platforms, and production-ready applications.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {projects.map((project, index) => {
            const active = hoveredIndex === index
            const slide = useHoverSlideshow(active, project.images)
            const currentImage = project.images?.[slide]
            const imgCount = project.images?.length ?? 0

            return (
              <motion.div
                key={index}
                variants={item}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
              >
                <Card className="group relative h-full overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl transition-all duration-300 rounded-[28px]">
                  {/* Hover image takeover (FULL image shown clearly) */}
                  <AnimatePresence>
                    {active && currentImage && (
                      <motion.div
                        key={currentImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="absolute inset-0 z-20"
                      >
                        {/* Blurred background fill */}
                        <div className="absolute inset-0">
                          <Image
                            src={currentImage}
                            alt=""
                            fill
                            className="object-cover scale-110 blur-2xl opacity-35"
                            priority={false}
                          />
                        </div>

                        {/* Main image (FULL, no crop) */}
                        <div className="absolute inset-0">
                          <Image
                            src={currentImage}
                            alt={`${project.title} preview`}
                            fill
                            className="object-contain"
                            priority={false}
                          />
                        </div>

                        {/* Small badge only */}
                        <div className="absolute left-4 bottom-4">
                          <Badge className="bg-black/40 border border-white/10 text-white backdrop-blur">
                            <Images className="h-3.5 w-3.5 mr-1" />
                            {imgCount} shots
                          </Badge>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Glow edge on hover */}
                  <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl" />
                  </div>

                  {/* TEXT CONTENT (visible normally, hides on hover) */}
                  <motion.div
                    whileHover={{ y: -8, rotateX: 1.5, rotateY: -1.5 }}
                    transition={{ type: "spring", stiffness: 240, damping: 18 }}
                    className="relative z-30 h-full"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
                      <CardHeader className="relative">
                        <div className="flex items-start justify-between gap-3">
                          <CardTitle className="text-lg leading-snug text-white">
                            {project.title}
                          </CardTitle>

                          {project.featured ? (
                            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                              <Star className="h-3.5 w-3.5 mr-1" />
                              Featured
                            </Badge>
                          ) : (
                            <Badge className="bg-white/5 border border-white/10 text-zinc-200">
                              <Images className="h-3.5 w-3.5 mr-1" />
                              {imgCount}
                            </Badge>
                          )}
                        </div>

                        <p className="text-sm text-zinc-300 mt-2">{project.description}</p>
                      </CardHeader>

                      <CardContent className="relative flex h-full flex-col justify-between gap-5">
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wide text-zinc-300/80 mb-2">
                            Tech Stack
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <Badge
                                key={i}
                                className="text-xs bg-white/5 border border-white/10 text-zinc-200"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Buttons */}
                        <div className="grid grid-cols-3 gap-2 pt-2">
                          <Button size="sm" asChild className="rounded-xl">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>

                          {project.demo ? (
                            <Button
                              size="sm"
                              variant="outline"
                              asChild
                              className="rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10"
                            >
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Demo
                              </a>
                            </Button>
                          ) : (
                            <Button
                              size="sm"
                              variant="outline"
                              className="rounded-xl border-white/10 bg-white/5 text-white"
                              disabled
                            >
                              Demo
                            </Button>
                          )}

                          <Button
                            size="sm"
                            variant="outline"
                            className="rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10"
                            onClick={() => openPreview(project.title, project.images ?? [])}
                            disabled={!project.images || project.images.length === 0}
                          >
                            <Images className="h-4 w-4 mr-2" />
                            Preview
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Modal */}
      <ProjectPreviewModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        title={activeProject?.title ?? ""}
        images={activeProject?.images ?? []}
      />
    </section>
  )
}
