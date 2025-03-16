"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface Card {
  id: number
  title: string
  image: string
  color: string
  borderColor: string
  shadowColor: string
  hoverGlow: string
  buttonGlow: string
}

const CARDS = [
  {
    id: 1,
    title: "@username",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BuOCODLuzwuMy4Pwud485RgUmd1IAT.png",
    color: "from-cyan-500/20 via-teal-500/10 to-transparent",
    borderColor: "border-cyan-500/20",
    shadowColor: "shadow-cyan-500/30",
    hoverGlow: "group-hover:bg-cyan-500/20",
    buttonGlow: "group-hover:shadow-cyan-500/50",
  },
  {
    id: 2,
    title: "@username",
    image: "https://i.pinimg.com/736x/6f/19/29/6f1929c2d8b6a39ce4d3d689bf305977.jpg",
    color: "from-blue-500/20 via-cyan-500/10 to-transparent",
    borderColor: "border-blue-500/20",
    shadowColor: "shadow-blue-500/30",
    hoverGlow: "group-hover:bg-blue-500/20",
    buttonGlow: "group-hover:shadow-blue-500/50",
  },
  {
    id: 3,
    title: "@username",
    image: "https://i.pinimg.com/736x/9d/df/f9/9ddff9e064ddfb0ba875af8a6802effb.jpg",
    color: "from-fuchsia-500/20 via-purple-500/10 to-transparent",
    borderColor: "border-fuchsia-500/20",
    shadowColor: "shadow-fuchsia-500/30",
    hoverGlow: "group-hover:bg-fuchsia-500/20",
    buttonGlow: "group-hover:shadow-fuchsia-500/50",
  },
]

export default function GlowCards() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {CARDS.map((card) => (
        <div
          key={card.id}
          className={cn(
            "group relative h-[350px] w-full rounded-xl bg-zinc-900/50 p-6",
            "border border-zinc-800 transition-all duration-500",
            "hover:border-opacity-100 hover:shadow-lg",
            card.borderColor,
          )}
          onMouseEnter={() => setHoveredId(card.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Glow effect */}
          <div
            className={cn(
              "absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 rounded-xl",
              "bg-gradient-to-b",
              card.color,
              hoveredId === card.id ? "opacity-100" : "",
            )}
          />

          {/* Spotlight effect */}
          <motion.div
            className="pointer-events-none absolute -inset-px z-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            animate={
              hoveredId === card.id
                ? {
                    background: [
                      `radial-gradient(350px circle at var(--x) var(--y), ${card.color.includes("cyan") ? "rgba(6, 182, 212, 0.15)" : card.color.includes("blue") ? "rgba(59, 130, 246, 0.15)" : "rgba(192, 38, 211, 0.15)"}, transparent)`,
                    ],
                  }
                : {}
            }
            style={
              {
                "--x": "calc(var(--mouse-x, 0) * 1px)",
                "--y": "calc(var(--mouse-y, 0) * 1px)",
              } as any
            }
            transition={{ duration: 0.5 }}
          />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              <div className="relative w-full h-full">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="mt-auto relative z-10">
              <button
                className={cn(
                  "w-full rounded-md border border-zinc-800 bg-zinc-900/80 py-2 text-sm font-medium text-white",
                  "transition-all duration-500 shadow-sm",
                  "hover:shadow-md",
                  card.buttonGlow,
                )}
              >
                {card.title}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

