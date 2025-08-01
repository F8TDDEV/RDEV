"use client"

import { ContainerTextFlip } from "@/components/ui/container-text-flip"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export default function ContainerTextFlipDemo() {
  const words = ["developer", "designer", "leader", "dumbass"]
  return (
    <div className="flex items-center justify-start w-full">
      <BackgroundGradient className="rounded-3xl p-8" containerClassName="max-w-fit">
        <BackgroundGradientAnimation className="rounded-3xl p-8">
          <motion.h1
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            className={cn("relative text-left text-4xl leading-normal font-bold tracking-tight text-white md:text-7xl")}
            layout
          >
            <div className="inline-block">
              Rusal strives to be the best <ContainerTextFlip words={words} />
            </div>
          </motion.h1>
        </BackgroundGradientAnimation>
      </BackgroundGradient>
    </div>
  )
}
