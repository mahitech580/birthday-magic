"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const colors = [
      "text-pink-400",
      "text-pink-300",
      "text-rose-400",
      "text-purple-400",
      "text-fuchsia-300",
    ]

    const fills = [
      "fill-pink-100",
      "fill-rose-100",
      "fill-purple-100",
      "fill-fuchsia-100",
    ]

    const newHearts = Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 12 + Math.random() * 16,
      color: colors[Math.floor(Math.random() * colors.length)],
      fill: fills[Math.floor(Math.random() * fills.length)],
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 6,
    }))

    setHearts(newHearts)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
          }}
          animate={{
            y: [0, -35, 0],
            x: [0, 12, -12, 0],
            rotate: [-5, 5, -5],
            scale: [1, 1.12, 1],
            opacity: [0.25, 0.65, 0.25],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart
            style={{
              width: `${heart.size}px`,
              height: `${heart.size}px`,
            }}
            className={`${heart.color} ${heart.fill}`}
          />
        </motion.div>
      ))}
    </div>
  )
}
