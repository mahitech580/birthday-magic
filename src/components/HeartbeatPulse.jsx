"use client"

import { motion } from "framer-motion"

export default function HeartbeatPulse() {
  const pathLength = 1

  return (
    <div className="w-full max-w-md">
      <svg viewBox="0 0 400 100" className="w-full">
        <motion.path
          d="M0,50 L80,50 L100,20 L120,80 L140,10 L160,90 L180,50 L400,50"
          fill="none"
          stroke="#ec4899"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  )
}
