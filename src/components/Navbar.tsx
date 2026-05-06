"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import { navLinks } from "./navLinks"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const prevPathnameRef = useRef(pathname)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname
      setIsOpen(false)
    }
  }, [pathname])

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = ""
      return
    }
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-primary/90 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.15)]" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
           <Image
                src="/logo-x.avif"
                alt="Esquivel Propiedades"
                width={160}
                height={40}
                className="h-10 w-auto transition-opacity hover:opacity-80"
            />
          </Link>

          <nav className="hidden md:flex items-center md:gap-6 lg:gap-7">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3, ease: "easeOut" }}
              >
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-xs tracking-widest uppercase text-white font-medium group"
                  >
                    <span className="hover:text-white/80 transition-colors">{link.label}</span>
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white/60 transition-all duration-300 group-hover:w-full" />
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="relative text-xs tracking-widest uppercase text-white font-medium group"
                  >
                    <span className="hover:text-white/80 transition-colors">{link.label}</span>
                    <motion.span
                      className="absolute -bottom-0.5 left-0 h-px bg-white/60"
                      initial={false}
                      animate={{ width: pathname === link.href ? "100%" : "0%" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          <Link
            href="/contacto"
            className="hidden lg:inline-flex items-center gap-2 border border-white/60 text-white hover:bg-white hover:text-primary transition-all duration-200 px-4 py-2 text-xs tracking-widest uppercase"
          >
            Vender
          </Link>

          <button
            className="md:hidden p-2 text-white hover:text-white/80 transition-colors"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            <motion.div
              className="flex flex-col gap-[5px] w-[22px]"
              animate={isOpen ? "open" : "closed"}
            >
              <motion.span
                className="block h-[1.5px] bg-current origin-center"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6.5 },
                }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="block h-[1.5px] bg-current"
                variants={{
                  closed: { opacity: 1, scaleX: 1 },
                  open: { opacity: 0, scaleX: 0 },
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-[1.5px] bg-current origin-center"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6.5 },
                }}
                transition={{ duration: 0.25 }}
              />
            </motion.div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="fixed top-16 left-0 right-0 z-40 bg-primary border-b border-white/20 md:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="px-6 py-6 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ delay: i * 0.04, duration: 0.25, ease: "easeOut" }}
                  >
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block py-3 text-xs tracking-widest uppercase text-white font-medium hover:text-white/70 transition-colors border-b border-white/10 last:border-0"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className={`block py-3 text-xs tracking-widest uppercase font-medium transition-colors border-b border-white/10 last:border-0 ${
                          pathname === link.href ? "text-white/60" : "text-white hover:text-white/70"
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: navLinks.length * 0.04, duration: 0.25 }}
                  className="pt-4"
                >
                  <Link
                    href="/contacto"
                    className="block text-center border border-white/60 text-white hover:bg-white hover:text-primary transition-all duration-200 px-4 py-3 text-xs tracking-widest uppercase"
                  >
                    Vender
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}