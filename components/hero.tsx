"use client"

import { Button } from "@/components/ui/button"
import { Github, Mail, MapPin } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ashish Waghode
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-16">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "AI Enthusiast",
                2000,
                "Backend Developer",
                2000,
                "Student Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            3rd Year Computer Engineering student passionate about AI, machine learning, and building intelligent
            applications. Specialized in Python, FastAPI, and LLM-based solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>ashishwaghode1301@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Vasai, India</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToProjects} size="lg">
              View My Work
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToContact}>
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/ashishbot120" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
