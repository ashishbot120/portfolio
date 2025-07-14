import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ashish Waghode - Full Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Ashish Waghode, a Computer Engineering student specializing in AI, machine learning, and full-stack development. Featured project: PDF Chatbot with AI Summarization.",
  keywords:
    "Ashish Waghode, Full Stack Developer, AI Enthusiast, Python, FastAPI, Machine Learning, PDF Chatbot, Computer Engineering",
  authors: [{ name: "Ashish Waghode" }],
  openGraph: {
    title: "Ashish Waghode - Full Stack Developer & AI Enthusiast",
    description: "Portfolio showcasing AI projects, full-stack development skills, and innovative solutions.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
