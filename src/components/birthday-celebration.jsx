"use client"

import { useState } from "react"
import TypewriterText from "@/components/TypewriterText"
import ReasonsFlipCards from "@/components/ReasonsFlipCards"
import HeartbeatPulse from "@/components/HeartbeatPulse"
import { motion, AnimatePresence } from "framer-motion"
import {
  Heart,
  Stethoscope,
  Code2,
  Sparkles,
  RotateCcw,
  ArrowRight,
  Stars
} from "lucide-react"

export default function BirthdayCelebration() {

  const [screen, setScreen] = useState(0)

  const nextScreen = () => {
    setScreen((prev) => prev + 1)
  }

  const replay = () => {
    window.location.reload()
  }

  return (
    <div className="relative w-full min-h-[560px] overflow-hidden">

      {/* PREMIUM GLOW BACKGROUND */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <motion.div
          className="absolute -left-20 top-10 h-40 w-40 rounded-full bg-pink-300/20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute -right-20 bottom-10 h-48 w-48 rounded-full bg-purple-300/20 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

      </div>

      <AnimatePresence mode="wait">

        {screen === 0 && (
          <motion.section
            key="birthday"
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 1.05,
              y: -30,
            }}
            transition={{
              duration: 0.8,
            }}
            className="celebration-section relative z-10 flex min-h-[560px] flex-col items-center justify-center px-2 py-8 text-center"
          >

            <div className="relative">

              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  rotate: [-4, 4, -4],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                }}
                className="celebration-icon text-6xl sm:text-7xl"
              >
                🎂
              </motion.div>

              <motion.div
                className="absolute -right-8 -top-3 text-xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 15, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                ✨
              </motion.div>

              <motion.div
                className="absolute -left-8 bottom-0 text-xl"
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, -15, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                }}
              >
                💗
              </motion.div>

            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-pink-400">
              Today is your day
            </p>

            <h1 className="celebration-title mt-3 px-2 text-4xl font-black leading-tight sm:text-5xl md:text-6xl font-dreamy">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
                Happy Birthday,
              </span>
              <br />
              <span className="text-gray-800">
                Ammu! 🎉
              </span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-7 text-gray-500 sm:text-lg">
              August 20, 2026
              <br />
              A beautiful day for a beautiful person. 💗
            </p>

            <div className="mt-7 flex items-center gap-4 text-2xl sm:gap-5 sm:text-3xl">
              <motion.span animate={{ y: [0, -6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
                🩺
              </motion.span>

              <motion.span animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                ❤️
              </motion.span>

              <motion.span animate={{ y: [0, -6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                🎂
              </motion.span>

              <motion.span animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 1.7, repeat: Infinity }}>
                💻
              </motion.span>
            </div>

            <motion.button
              onClick={nextScreen}
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-pink-200 sm:px-8 sm:py-4 sm:text-base"
            >
              Open your birthday message
              <ArrowRight className="h-5 w-5" />
            </motion.button>

          </motion.section>
        )}

        {screen === 1 && (
          <motion.section
            key="message"
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -80,
            }}
            transition={{
              duration: 0.7,
            }}
            className="celebration-section relative z-10 flex min-h-[560px] flex-col items-center px-2 py-8"
          >

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                rotate: [-4, 4, -4],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
              }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-purple-100 shadow-lg sm:h-20 sm:w-20"
            >
              <Heart className="h-8 w-8 fill-pink-400 text-pink-400 sm:h-10 sm:w-10" />
            </motion.div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.3em] text-pink-400">
              From Mahi
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-800 sm:text-4xl font-dreamy">
              Dear Ammu ❤️
            </h2>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              className="celebration-card mt-7 w-full max-w-2xl rounded-[2rem] border border-white/80 bg-white/75 p-5 text-left shadow-xl backdrop-blur-md sm:p-8"
            >

              <TypewriterText
                className="text-base leading-8 text-gray-600 sm:text-lg"
                text="Today is your special day, and I wanted to make it a little more memorable than just another birthday wish."
                speed={22}
              />

              <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
                So I made this tiny corner of the internet especially for you — with a little bit of code, a lot of thought, and plenty of birthday vibes. ✨
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
                You're working toward becoming an amazing doctor 🩺, and I genuinely hope your journey is filled with success, happiness, peace, and all the dreams you're working so hard for.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
                May you always have reasons to smile, people who believe in you, and countless beautiful moments ahead.
              </p>

              <div className="celebration-divider my-7"/>

              <p className="text-center text-lg font-bold text-pink-500 sm:text-xl">
                Happy Birthday, Ammu. 🎂❤️
              </p>

              <p className="mt-4 text-right text-base font-semibold text-gray-400 font-note">
                — Mahi
              </p>

            </motion.div>

            <motion.button
              onClick={nextScreen}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl sm:px-8 sm:py-4 sm:text-base"
            >
              There's one more thing... 👀
              <ArrowRight className="h-5 w-5" />
            </motion.button>

          </motion.section>
        )}

        {screen === 2 && (
          <motion.section
            key="couple"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.05,
            }}
            transition={{
              duration: 0.8,
            }}
            className="celebration-section relative z-10 flex min-h-[560px] flex-col items-center px-2 py-7 text-center"
          >

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="w-full max-w-2xl"
            >

              <div className="relative overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-2xl shadow-pink-200/60">

                <img
                  src="/ammu-mahi.png"
                  alt="Ammu and Mahi"
                  className="celebration-photo block h-auto w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-5 pt-16">
                  <p className="text-sm font-semibold text-white sm:text-base">
                    Healing lives with care • Building dreams with code
                  </p>
                </div>

              </div>

            </motion.div>

            <div className="mt-6 flex items-center gap-4">

              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-pink-100 shadow-md sm:h-16 sm:w-16"
              >
                <Stethoscope className="h-7 w-7 text-pink-500 sm:h-8 sm:w-8" />
              </motion.div>

              <div className="text-lg font-bold text-pink-400">
                +
              </div>

              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  delay: 0.25,
                }}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 shadow-md sm:h-16 sm:w-16"
              >
                <Code2 className="h-7 w-7 text-purple-500 sm:h-8 sm:w-8" />
              </motion.div>

            </div>

            <h2 className="mt-6 text-3xl font-black sm:text-4xl md:text-5xl">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Doctor + Engineer
              </span>
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
              She knows how to heal.
              <br />
              He knows how to build.
            </p>

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
              }}
              className="celebration-card mt-5 w-full max-w-lg rounded-3xl border border-pink-100 bg-white/75 p-5 shadow-lg backdrop-blur-md sm:p-6"
            >

              <div className="flex justify-center">
                <Stars className="h-7 w-7 text-pink-400" />
              </div>

              <p className="mt-3 text-xl font-bold text-pink-500 sm:text-2xl">
                Maybe the best couple? 😉❤️
              </p>

              <p className="mt-3 text-sm italic text-gray-400 sm:text-base">
                Just saying... 😌
              </p>

            </motion.div>

            <motion.div
              className="mt-5 flex flex-wrap justify-center gap-2 text-xs font-semibold sm:text-sm"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
              }}
            >

              <span className="rounded-full bg-pink-50 px-4 py-2 text-pink-500">
                🩺 Caring
              </span>

              <span className="rounded-full bg-purple-50 px-4 py-2 text-purple-500">
                💻 Creating
              </span>

              <span className="rounded-full bg-rose-50 px-4 py-2 text-rose-500">
                ❤️ Supporting
              </span>

            </motion.div>

            <motion.button
              onClick={nextScreen}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-pink-500 shadow-lg ring-1 ring-pink-200 sm:px-8 sm:py-4 sm:text-base"
            >
              One last message 🌸
              <ArrowRight className="h-5 w-5" />
            </motion.button>

          </motion.section>
        )}

        {screen === 5 && (
          <motion.section
            key="final"
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -40,
            }}
            transition={{
              duration: 0.8,
            }}
            className="celebration-section relative z-10 flex min-h-[560px] flex-col items-center justify-center px-2 py-10 text-center"
          >

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [-4, 4, -4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="celebration-icon text-6xl sm:text-7xl"
            >
              🌸
            </motion.div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-pink-400">
              One last little note
            </p>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl font-dreamy">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
                That's all, Ammu...
              </span>
            </h2>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.3,
              }}
              className="mt-8 w-full max-w-xl rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-xl backdrop-blur-md sm:p-8"
            >

              <Sparkles className="mx-auto h-8 w-8 text-pink-400" />

              <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
                I hope this little surprise gave you at least one smile today.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-500 sm:text-lg">
                Keep chasing your dreams, keep believing in yourself, and keep becoming the amazing doctor you're meant to be. 🩺
              </p>

              <p className="mt-6 text-lg font-bold text-pink-500 sm:text-xl">
                Happy Birthday once again, Ammu. 🎂❤️
              </p>

              <p className="mt-5 text-base font-semibold text-gray-400 font-note">
                — Mahi
              </p>

            </motion.div>

            <motion.button
              onClick={replay}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-pink-200 bg-white px-6 py-3 text-sm font-bold text-pink-500 shadow-lg sm:px-7 sm:py-3.5"
            >
              <RotateCcw className="h-5 w-5" />
              Replay the Surprise
            </motion.button>

          </motion.section>
        )}

        {screen === 3 && (
          <motion.section
            key="reasons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7 }}
            className="celebration-section relative z-10 flex min-h-[560px] flex-col items-center justify-center px-2 py-8 text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-pink-400">
              Tap each card
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl font-dreamy">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
                A few reasons why
              </span>
            </h2>

            <div className="mt-6 w-full max-w-xl">
              <ReasonsFlipCards />
            </div>

            <motion.button
              onClick={nextScreen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl sm:px-8 sm:py-4 sm:text-base"
            >
              One last thing
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.section>
        )}

        {screen === 4 && (
          <motion.section
            key="heartbeat"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7 }}
            className="celebration-section relative z-10 flex min-h-[560px] flex-col items-center justify-center px-2 py-8 text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-pink-400">
              Steady as ever
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl font-dreamy">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
                Your heart, my rhythm
              </span>
            </h2>

            <div className="mt-8 flex w-full items-center justify-center rounded-2xl border border-pink-100 bg-white/70 p-6">
              <HeartbeatPulse />
            </div>

            <p className="mt-6 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
              You spend your days keeping other hearts beating steady. I just wanted to keep yours company for a moment too.
            </p>

            <motion.button
              onClick={nextScreen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl sm:px-8 sm:py-4 sm:text-base"
            >
              Almost there
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.section>
        )}

      </AnimatePresence>

    </div>
  )
}





