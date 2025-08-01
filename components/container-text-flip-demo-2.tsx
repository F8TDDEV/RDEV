"use client"

import { ContainerTextFlip } from "@/components/ui/container-text-flip"

export default function ContainerTextFlipDemo2() {
  return (
    <div className="flex items-center justify-center">
      <ContainerTextFlip
        words={["innovative", "creative", "dynamic", "powerful"]}
        className="text-2xl md:text-4xl font-semibold"
        interval={2500}
      />
    </div>
  )
}
