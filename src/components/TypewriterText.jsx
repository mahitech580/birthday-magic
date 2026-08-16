"use client"

import { useEffect, useState } from "react"

export default function TypewriterText({ text, speed = 22, className = "" }) {
  const [displayed, setDisplayed] = useState("")

  useEffect(() => {
    setDisplayed("")
    let i = 0
    const interval = setInterval(() => {
      i += 1
      setDisplayed(text.slice(0, i))
      if (i >= text.length) clearInterval(interval)
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  return <p className={className}>{displayed}</p>
}
