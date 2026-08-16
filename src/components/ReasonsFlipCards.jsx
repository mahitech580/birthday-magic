"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const reasons = [
  "The way you care for people, even strangers",
  "How hard you work without ever complaining",
  "Your laugh, which fixes bad days instantly",
  "How you remember tiny details about people",
  "The calm you bring into chaotic moments",
  "How proud you make everyone around you",
]

export default function ReasonsFlipCards() {
  const [flipped, setFlipped] = useState({})

  const toggle = (i) => {
    setFlipped((prev) => ({ ...prev, [i]: !prev[i] }))
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {reasons.map((reason, i) => (
        <div
          key={i}
          onClick={() => toggle(i)}
          className="relative h-28 cursor-pointer"
          style={{ perspective: "800px" }}
        >
          <motion.div
            className="relative h-full w-full rounded-2xl shadow-md"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: flipped[i] ? 180 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 to-purple-500 text-white"
              style={{ backfaceVisibility: "hidden" }}
            >
              <span className="text-sm font-semibold">Reason {i + 1}</span>
            </div>

            <div
              className="absolute inset-0 flex items-center justify-center rounded-2xl border border-pink-100 bg-white p-3 text-center"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <span className="text-xs leading-5 text-gray-700 sm:text-sm">{reason}</span>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}
