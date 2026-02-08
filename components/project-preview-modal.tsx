"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

type Props = {
  open: boolean
  onOpenChange: (v: boolean) => void
  title: string
  images: string[]
  startIndex?: number
}

export function ProjectPreviewModal({
  open,
  onOpenChange,
  title,
  images,
  startIndex = 0,
}: Props) {
  const [idx, setIdx] = React.useState(startIndex)

  React.useEffect(() => {
    if (open) setIdx(startIndex)
  }, [open, startIndex])

  const hasMany = images.length > 1

  const prev = React.useCallback(() => {
    if (!images.length) return
    setIdx((p) => (p - 1 + images.length) % images.length)
  }, [images.length])

  const next = React.useCallback(() => {
    if (!images.length) return
    setIdx((p) => (p + 1) % images.length)
  }, [images.length])

  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
      if (e.key === "Escape") onOpenChange(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, prev, next, onOpenChange])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-screen h-screen max-w-none border-white/10 bg-black p-0 text-white">
        <div className="h-full w-full flex flex-col">
          {/* Header */}
          <DialogHeader className="px-5 pt-5 pb-4 border-b border-white/10">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <DialogTitle className="text-lg md:text-xl font-semibold truncate">
                  {title}
                </DialogTitle>
                <p className="text-xs text-zinc-400 mt-1">
                  {images.length ? `${idx + 1} / ${images.length}` : ""}
                </p>
              </div>

              <Button
                variant="outline"
                size="icon"
                className="border-white/10 bg-white/5 hover:bg-white/10"
                onClick={() => onOpenChange(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          {/* Image Area */}
          <div className="relative flex-1 w-full bg-black flex items-center justify-center">
            <div className="relative h-[78vh] w-full">
              <AnimatePresence mode="wait">
                {images[idx] && (
                  <motion.div
                    key={images[idx]}
                    initial={{ opacity: 0, scale: 1.01 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[idx]}
                      alt={`${title} screenshot ${idx + 1}`}
                      fill
                      className="object-contain bg-black"
                      priority
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {hasMany && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 hover:bg-black/70 transition"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>

                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 hover:bg-black/70 transition"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {hasMany && (
            <div className="px-5 pb-6 pt-5 border-t border-white/10">
              <div className="flex gap-3 overflow-x-auto no-scrollbar">
                {images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setIdx(i)}
                    className={[
                      "relative h-16 w-28 shrink-0 overflow-hidden rounded-xl border transition",
                      i === idx
                        ? "border-white/50 ring-2 ring-white/20"
                        : "border-white/10 opacity-80 hover:opacity-100",
                    ].join(" ")}
                    aria-label={`Open image ${i + 1}`}
                  >
                    <Image src={src} alt={`thumb ${i + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>

              <p className="mt-3 text-xs text-zinc-400">
                Tip: Use <span className="text-zinc-200">←</span> /{" "}
                <span className="text-zinc-200">→</span> keys to navigate
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
