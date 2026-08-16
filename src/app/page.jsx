"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

import Countdown from "@/components/countdown"
import BirthdayCelebration from "@/components/birthday-celebration"
import SurprisePopup from "@/components/SurprisePopup"
import Confetti from "@/components/confetti"
import FloatingHearts from "@/components/floating-hearts"
import HeartBurst from "@/components/HeartBurst"
import SparkleTrail from "@/components/SparkleTrail"

import { MoveRight, PartyPopper } from "lucide-react"

export default function Home() {
  const [showSurprise, setShowSurprise] = useState(true)
  const [isBirthday, setIsBirthday] = useState(false)
  const [showForYouBtn, setShowForYouBtn] = useState(false)
  const [showBurst, setShowBurst] = useState(false)
  const [bubbles, setBubbles] = useState([])

  const audioRef = useRef(null)

  const birthdayDate = new Date(Date.now() + 10000)

  useEffect(() => {
    const generated = Array.from({ length: 26 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: 10 + Math.random() * 35,
      duration: 5 + Math.random() * 7,
      delay: Math.random() * 6,
      opacity: 0.08 + Math.random() * 0.16,
      color: [
        "rgba(244,114,182,0.30)",
        "rgba(192,132,252,0.30)",
        "rgba(251,113,133,0.25)",
        "rgba(217,70,239,0.22)",
        "rgba(255,255,255,0.45)",
      ][Math.floor(Math.random() * 5)],
    }))

    setBubbles(generated)
  }, [])

  const openSurprise = () => {
    setShowSurprise(false)

    if (audioRef.current) {
      audioRef.current.volume = 0.8
      audioRef.current.currentTime = 0

      audioRef.current.play().catch((error) => {
        console.log("Music error:", error)
      })
    }
  }

  const startCelebration = () => {
    setShowForYouBtn(false)
    setIsBirthday(true)
    setShowBurst(true)

    setTimeout(() => {
      setShowBurst(false)
    }, 100)
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-purple-100">

      {/* SOFT BACKGROUND LIGHT */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        <motion.div
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-pink-300/20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-purple-300/20 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-[-150px] left-1/3 h-96 w-96 rounded-full bg-rose-300/15 blur-3xl"
          animate={{
            x: [0, 30, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* FLOATING BUBBLES */}
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full"
            style={{
              left: bubble.left,
              top: bubble.top,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              background: bubble.color,
              opacity: bubble.opacity,
              filter: "blur(1px)",
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, -15, 0],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* SUBTLE VIGNETTE */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(124,58,237,0.06)_100%)]" />

      </div>

      <FloatingHearts />
      <SparkleTrail />
      <HeartBurst trigger={showBurst} />

      {isBirthday && <Confetti />}

      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4 py-8 sm:px-6">

        {showSurprise ? (
          <SurprisePopup onOpen={openSurprise} />
        ) : (
          <>
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="w-full max-w-3xl"
            >
              <motion.div
                className=" birthday-main-card rounded-[2rem] p-5 sm:p-8 md:p-10"
                initial={{
                  scale: 0.95,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                <AnimatePresence mode="wait">
                  {isBirthday ? (
                    <BirthdayCelebration key="celebration" />
                  ) : (
                    <Countdown
                      key="countdown"
                      targetDate={birthdayDate}
                      onCountdownEnd={() => setShowForYouBtn(true)}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>

            <AnimatePresence>
              {showForYouBtn && (
                <motion.div
                  className="mt-8 flex flex-col items-center justify-center sm:mt-10"
                  initial={{
                    opacity: 0,
                    y: 25,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                >
                  <motion.button
                    onClick={startCelebration}
                    className="for-you-button flex items-center gap-3 rounded-full border-2 border-white bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-8 py-4 text-white shadow-xl sm:px-10 sm:py-5"
                    whileTap={{
                      scale: 0.94,
                    }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <PartyPopper className="h-6 w-6" />

                    <span className="text-xl font-dreamy sm:text-2xl">
                      For you
                    </span>

                    <MoveRight className="h-6 w-6" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        <audio
          ref={audioRef}
          src="/birthday-special/birthday.mp3"
          preload="auto"
          loop
        />

      </div>
    </main>
  )
}





