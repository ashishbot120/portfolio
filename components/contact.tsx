"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, MapPin, Send } from "lucide-react"

export function Contact() {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:ashishwaghode1301@gmail.com?subject=Portfolio Contact&body=Hi Ashish, I found your portfolio and would like to connect!"
  }

  return (
    <section className="w-full h-full flex items-center justify-center px-6 relative">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Let’s Build Something Great 🚀
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Open to internships, collaborations, AI discussions, and exciting tech opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT CARD */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Send className="h-5 w-5 text-blue-500" />
                  Contact Information
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">

                {/* Email */}
                <a
                  href="mailto:ashishwaghode1301@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-blue-500/10 transition-all group"
                >
                  <Mail className="h-5 w-5 text-blue-500 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-sm text-zinc-400">
                      ashishwaghode1301@gmail.com
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/ashishbot120"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-purple-500/10 transition-all group"
                >
                  <Github className="h-5 w-5 text-purple-500 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium text-white">GitHub</p>
                    <p className="text-sm text-zinc-400">
                      github.com/ashishbot120
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                  <MapPin className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-sm text-zinc-400">
                      Mumbai, India
                    </p>
                  </div>
                </div>

                <Button
                  onClick={handleEmailClick}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-all"
                  size="lg"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
              <CardHeader>
                <CardTitle className="text-white">
                  What I'm Looking For
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">

                {[
                  {
                    title: "Internship Opportunities",
                    desc: "Backend, Full Stack, or AI/ML roles",
                  },
                  {
                    title: "AI Collaborations",
                    desc: "RAG systems, chatbots, intelligent apps",
                  },
                  {
                    title: "Hackathons",
                    desc: "Competitive coding & innovation events",
                  },
                  {
                    title: "Tech Networking",
                    desc: "Learning from experienced engineers",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-zinc-800/40 to-zinc-900/40 border border-white/10 hover:border-blue-500/40 transition-all"
                  >
                    <h4 className="font-semibold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-zinc-400">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}

              </CardContent>
            </Card>
          </motion.div>

        </div>
      </motion.div>

    </section>
  )
}
