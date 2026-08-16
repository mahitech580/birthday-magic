"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Heart } from "lucide-react"

export default function HeartBurst({ trigger }) {
  const hearts = Array.from({ length: 12 }).map((_, i) => {
    const angle = (i / 12) * Math.PI * 2
    return {
      id: i,
      x: Math.cos(angle) * 120,
      y: Math.sin(angle) * 120,
      delay: i * 0.02,
    }
  })

  return (
    <AnimatePresence>
      {trigger && (
        <div className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center">
          {hearts.map((h) => (
            <motion.div
              key={h.id}
              className="absolute text-pink-400"
              initial={{ x: 0, y: 0, opacity: 1, scale: 0.5 }}
              animate={{ x: h.x, y: h.y, opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.9, delay: h.delay, ease: "easeOut" }}
            >
              <Heart className="h-6 w-6 fill-current" />
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  )
}
