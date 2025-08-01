"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { useEffect, useState } from "react"

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    const currentWord = words[currentWordIndex]?.text || ""

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentCharIndex < currentWord.length) {
            setDisplayText(currentWord.slice(0, currentCharIndex + 1))
            setCurrentCharIndex((prev) => prev + 1)
          } else {
            // Finished typing, wait then start deleting
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          // Deleting
          if (currentCharIndex > 0) {
            setDisplayText(currentWord.slice(0, currentCharIndex - 1))
            setCurrentCharIndex((prev) => prev - 1)
          } else {
            // Finished deleting, move to next word
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 50 : 150,
    ) // Faster deletion, slower typing

    return () => clearTimeout(timeout)
  }, [currentCharIndex, currentWordIndex, isDeleting, words])

  return (
    <div className={cn("text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center", className)}>
      <span className="text-white">{displayText}</span>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className={cn("inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500 ml-1", cursorClassName)}
      ></motion.span>
    </div>
  )
}
