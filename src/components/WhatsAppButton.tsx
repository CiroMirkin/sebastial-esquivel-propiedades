'use client';

import { motion } from 'motion/react'

const WHATSAPP_MSG = 'Hola Sebastián, me interesa vender mi propiedad. ¿Podrías darme más información?';

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/549113777527?text=${encodeURIComponent(WHATSAPP_MSG)}`}
      target="_blank"
      rel="noopener"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-10 right-16 z-40 bg-[#0D9488] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      <i className="fa-brands fa-whatsapp text-2xl"></i>
    </motion.a>
  )
}