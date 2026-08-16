"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function SparkleTrail() {

  const [sparkles, setSparkles] = useState([])

  useEffect(() => {

    let lastTime = 0

    const handleMove = (event) => {

      const now = Date.now()

      if (now - lastTime < 45) {
        return
      }

      lastTime = now

      const id = `${now}-${Math.random()}`

      const colors = [
        "bg-pink-300",
        "bg-fuchsia-300",
        "bg-purple-300",
        "bg-rose-300",
        "bg-white",
      ]

      const sparkle = {
        id,
        x: event.clientX,
        y: event.clientY,
        size: 3 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
      }

      setSparkles((prev) => [...prev.slice(-18), sparkle])

      setTimeout(() => {

        setSparkles((prev) =>
          prev.filter((item) => item.id !== id)
        )

      }, 650)

    }

    window.addEventListener("mousemove", handleMove)

    return () => {
      window.removeEventListener("mousemove", handleMove)
    }

  }, [])

  return (

    <div className="pointer-events-none fixed inset-0 z-[60]">

      <AnimatePresence>

        {sparkles.map((sparkle) => (

          <motion.div
            key={sparkle.id}
            className={`absolute rounded-full ${sparkle.color} sparkle-trail-dot`}
            style={{
              left: sparkle.x,
              top: sparkle.y,
              width: sparkle.size,
              height: sparkle.size,
            }}
            initial={{
              opacity: 0,
              scale: 0,
              x: -2,
              y: 2,
            }}
            animate={{
              opacity: [0, 0.9, 0],
              scale: [0, 1.3, 0.3],
              x: [0, Math.random() * 12 - 6],
              y: [0, -18 - Math.random() * 14],
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
          />

        ))}

      </AnimatePresence>

    </div>

  )
}
