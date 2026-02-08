"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, MapPin, Send, Sparkles } from "lucide-react"
import { container, item } from "@/components/motion"

export function Contact() {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:ashishwaghode1301@gmail.com?subject=Portfolio Contact&body=Hi Ashish, I found your portfolio and would like to connect!"
  }

  return (
    <section id="contact" className="relative w-full min-h-[100svh] flex items-center justify-center px-6 py-16 overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl" />
        <div className="absolute -bottom-24 left-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-r from-fuchsia-600/12 to-sky-600/12 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(255,255,255,0.07),transparent_60%)]" />
      </div>

      <div className="w-full max-w-6xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Open to internships & collaborations
          </motion.div>

          <motion.h2 variants={item} className="mt-6 text-4xl font-bold text-white">
            Let’s Build Something Great
          </motion.h2>
          <motion.p variants={item} className="mt-3 text-zinc-400 max-w-2xl mx-auto">
            Open to internships, collaborations, AI discussions, and exciting tech opportunities.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* LEFT */}
          <motion.div variants={item} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 200 }}>
            <Card className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl">
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/25 via-purple-500/25 to-pink-500/25 blur-2xl" />
              </div>

              <CardHeader className="relative">
                <CardTitle className="flex items-center gap-2 text-white">
                  <Send className="h-5 w-5 text-blue-400" />
                  Contact Information
                </CardTitle>
              </CardHeader>

              <CardContent className="relative space-y-4">
                {/* Email */}
                <motion.a
                  href="mailto:ashishwaghode1301@gmail.com"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
                >
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-white">Email</p>
                    <p className="text-sm text-zinc-400 truncate">
                      ashishwaghode1301@gmail.com
                    </p>
                  </div>
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href="https://github.com/ashishbot120"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.06 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
                >
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-white">GitHub</p>
                    <p className="text-sm text-zinc-400 truncate">
                      github.com/ashishbot120
                    </p>
                  </div>
                </motion.a>

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.12 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5"
                >
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <MapPin className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-white">Location</p>
                    <p className="text-sm text-zinc-400 truncate">
                      Mumbai, India
                    </p>
                  </div>
                </motion.div>

                <Button
                  onClick={handleEmailClick}
                  className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90"
                  size="lg"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* RIGHT */}
          <motion.div variants={item} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 200 }}>
            <Card className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl">
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/25 via-pink-500/25 to-sky-500/25 blur-2xl" />
              </div>

              <CardHeader className="relative">
                <CardTitle className="text-white">What I’m Looking For</CardTitle>
              </CardHeader>

              <CardContent className="relative space-y-4">
                {[
                  { title: "Internship Opportunities", desc: "Backend, Full Stack, or AI/ML roles" },
                  { title: "AI Collaborations", desc: "RAG systems, chatbots, intelligent apps" },
                  { title: "Hackathons", desc: "Competitive coding & innovation events" },
                  { title: "Tech Networking", desc: "Learning from experienced engineers" },
                ].map((x, i) => (
                  <motion.div
                    key={x.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.06 }}
                    whileHover={{ y: -4 }}
                    className="p-5 rounded-[22px] border border-white/10 bg-gradient-to-br from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 transition-all"
                  >
                    <h4 className="font-semibold text-white mb-1">{x.title}</h4>
                    <p className="text-sm text-zinc-400">{x.desc}</p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
