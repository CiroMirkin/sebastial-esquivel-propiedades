"use client"

import { motion } from "motion/react"
import { scroller } from "react-scroll"

interface ScrollButtonProps {
  target: string
  text?: string
  className?: string
}

export function ScrollButton({ target, text = "Ver más", className = "" }: ScrollButtonProps) {
  const handleClick = () => {
    scroller.scrollTo(target, {
      smooth: true,
      offset: -64,
      duration: 500,
    })
  }

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className={"inline-flex items-center gap-3 mt-10 border border-white/40 text-white hover:bg-white/10 transition-colors px-8 py-4 text-xs tracking-widest uppercase font-semibold " + className}
    >
      { text }
      <motion.svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        animate={{ y: [0, 3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M7 1v12M2 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </motion.svg>
    </motion.button>
  )
}