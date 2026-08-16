"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Heart, Sparkles } from "lucide-react"

export default function Countdown({ targetDate, onCountdownEnd }) {

  const calculateTime = () => {

    const difference = targetDate.getTime() - Date.now()

    if (difference <= 0) {
      return {
        total: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }
    }

    return {
      total: difference,
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  const [time, setTime] = useState(calculateTime())

  useEffect(() => {

    const timer = setInterval(() => {

      const newTime = calculateTime()

      setTime(newTime)

      if (newTime.total <= 0) {
        clearInterval(timer)
        onCountdownEnd?.()
      }

    }, 1000)

    return () => clearInterval(timer)

  }, [targetDate, onCountdownEnd])

  const boxes = [
    ["Days", time.days],
    ["Hours", time.hours],
    ["Minutes", time.minutes],
    ["Seconds", time.seconds],
  ]

  return (
    <div className="text-center">

      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 shadow-md"
      >
        <Heart className="h-8 w-8 fill-pink-400 text-pink-400" />
      </motion.div>

      <div className="flex items-center justify-center gap-2 text-pink-400">

        <Sparkles className="h-4 w-4" />

        <p className="text-sm font-semibold uppercase tracking-[0.2em]">
          Something special is coming
        </p>

        <Sparkles className="h-4 w-4" />

      </div>

      <h1 className="mt-4 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-3xl font-bold text-transparent md:text-5xl font-dreamy">
        Your Birthday ❤️
      </h1>

      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600">
        Someone has a little surprise waiting for you.
        <br />
        Just a little more time... ✨
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">

        {boxes.map(([label, value]) => (

          <motion.div
            key={label}
            whileHover={{
              y: -5,
              scale: 1.03,
            }}
            className="rounded-2xl border border-pink-100 bg-white/80 p-4 shadow-lg"
          >

            <motion.div
              key={value}
              initial={{
                scale: 0.7,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              className="text-3xl font-bold text-pink-500 md:text-4xl"
            >
              {String(value).padStart(2, "0")}
            </motion.div>

            <p className="mt-2 text-sm font-medium text-gray-500">
              {label}
            </p>

          </motion.div>

        ))}

      </div>

      <p className="mt-8 text-sm text-gray-400">
        A special day made just for you ❤️
      </p>

    </div>
  )
}

