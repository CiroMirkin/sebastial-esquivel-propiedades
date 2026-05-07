"use client"

import { motion } from "motion/react"

const WHATSAPP_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL!

export function WhatsAppCTA() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      className="inline-flex items-center gap-3 bg-[#0D9488] text-white px-10 py-4 text-xs tracking-widest uppercase font-semibold"
      animate={{ scaleX: [1, 1.04, 1] }}
      transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.5 }}
    >
      <i className="fa-brands fa-whatsapp text-2xl" />
      <span>Escribinos por WhatsApp</span>
    </motion.a>
  )
}