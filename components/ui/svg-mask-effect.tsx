"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "motion/react"

interface SVGMaskEffectProps {
  children: React.ReactNode
  className?: string
}

export const SVGMaskEffect = ({ children, className = "" }: SVGMaskEffectProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"
        style={{
          maskImage: isHovered
            ? "linear-gradient(to right, transparent 0%, black 50%, transparent 100%)"
            : "linear-gradient(to right, transparent 0%, transparent 100%)",
          WebkitMaskImage: isHovered
            ? "linear-gradient(to right, transparent 0%, black 50%, transparent 100%)"
            : "linear-gradient(to right, transparent 0%, transparent 100%)",
        }}
        transition={{ duration: 0.5 }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
