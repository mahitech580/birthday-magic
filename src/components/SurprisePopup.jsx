"use client"

import { motion } from "framer-motion"
import {
  Heart,
  Sparkles,
  Stethoscope,
} from "lucide-react"

export default function SurprisePopup({ onOpen }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute h-80 w-80 rounded-full bg-pink-400/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
          y: 35,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 170,
          damping: 17,
        }}
        className="relative w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/80 bg-white/95 p-7 text-center shadow-2xl backdrop-blur-xl sm:p-9"
      >

        <motion.div
          className="absolute left-4 top-4 text-pink-300"
          animate={{
            y: [0, -5, 0],
            rotate: [-8, 8, -8],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
          }}
        >
          <Heart className="h-6 w-6 fill-current" />
        </motion.div>

        <motion.div
          className="absolute right-4 top-4 text-purple-300"
          animate={{
            y: [0, -5, 0],
            rotate: [8, -8, 8],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
          }}
        >
          <Sparkles className="h-6 w-6" />
        </motion.div>

        <p className="font-dreamy text-4xl text-pink-400">
          A little surprise for you... 🎁
        </p>

        <motion.h1
          className="font-dreamy mt-3 text-6xl text-pink-500 sm:text-7xl"
          animate={{
            scale: [1, 1.025, 1],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
          }}
        >
          Birthday Star ❤️
        </motion.h1>

        <div className="mx-auto mt-3 h-px w-20 bg-gradient-to-r from-transparent via-pink-300 to-transparent" />

        <p className="font-lato mx-auto mt-6 max-w-xs text-base leading-7 text-gray-500 sm:text-lg">
          I made something especially for you.
          <br />
          Something I hope brings a little smile to your face. ✨
        </p>

        <motion.button
          onClick={onOpen}
          aria-label="Open your birthday surprise"
          className="mx-auto mt-8 flex h-24 w-24 cursor-pointer items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-600 text-white shadow-2xl shadow-pink-300/50 sm:h-28 sm:w-28"
          animate={{
            scale: [1, 1.08, 1],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          whileHover={{
            scale: 1.14,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <Stethoscope className="h-11 w-11 sm:h-14 sm:w-14" />
        </motion.button>

        <motion.p
          className="font-dreamy mt-5 text-3xl text-pink-500"
          animate={{
            opacity: [0.55, 1, 0.55],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
        >
          Open it... ❤️
        </motion.p>

        <p className="font-lato mt-5 text-xs tracking-wide text-gray-400">
          Made with a little bit of love. 💗
        </p>

      </motion.div>
    </motion.div>
  )
}

