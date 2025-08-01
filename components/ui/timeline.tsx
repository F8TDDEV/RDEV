"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"

export const ScrollTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      if (typeof window === "undefined") return

      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      const scrollPercent = scrollTop / (docHeight - winHeight)

      setScrollProgress(Math.min(Math.max(scrollPercent, 0), 1))
    }

    updateScrollProgress()
    window.addEventListener("scroll", updateScrollProgress)
    window.addEventListener("resize", updateScrollProgress)

    return () => {
      window.removeEventListener("scroll", updateScrollProgress)
      window.removeEventListener("resize", updateScrollProgress)
    }
  }, [])

  const timelineHeight = typeof window !== "undefined" ? window.innerHeight * 0.85 : 400

  return (
    <div className="fixed left-4 top-0 z-40 pointer-events-none">
      {/* Background line */}
      <div className="w-[3px] bg-gray-800/30 rounded-full" style={{ height: `${timelineHeight}px` }} />

      {/* Animated progress line */}
      <motion.div
        className="absolute top-0 left-0 w-[3px] rounded-full shadow-lg shadow-purple-500/20"
        style={{
          background: "linear-gradient(to bottom, #a855f7, #3b82f6, #06b6d4)",
          height: `${scrollProgress * timelineHeight}px`,
          opacity: scrollProgress > 0 ? 1 : 0.3,
        }}
        transition={{
          height: { type: "spring", stiffness: 100, damping: 30 },
          opacity: { duration: 0.3 },
        }}
      />
    </div>
  )
}
