"use client"

import { SVGMaskEffect } from "@/components/ui/svg-mask-effect"

export default function SVGMaskEffectDemo() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <SVGMaskEffect className="p-8 rounded-2xl border border-gray-800">
        <h3 className="text-2xl font-bold text-white mb-4">Interactive Element</h3>
        <p className="text-gray-300">Hover over this area to see the gradient mask effect in action.</p>
      </SVGMaskEffect>
    </div>
  )
}
