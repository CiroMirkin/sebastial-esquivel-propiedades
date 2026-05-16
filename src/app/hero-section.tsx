"use client"

import Link from "next/link"
import Image from "next/image"
import { useScroll, useTransform, motion } from "motion/react"
import { Reveal } from "@/components/Reveal"
import { useEffect, useState } from "react"

export function HeroSection() {
  const { scrollY } = useScroll()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const scaleRange = isMobile ? [0, 250] : [0, 600]
  const opacityRange = isMobile ? [0, 200] : [0, 500]
  const paddingRange = isMobile ? [0, 150] : [0, 400]

  const scale = useTransform(scrollY, scaleRange, [1, 0.75])
  const opacity = useTransform(scrollY, opacityRange, [1, 0])
  const paddingBottom = useTransform(scrollY, paddingRange, [8, 0])
  const spacerHeight = useTransform(scrollY, paddingRange, [8, 0])

  return (
    <section className="flex items-center overflow-hidden sticky top-0 -z-10" style={{ minHeight: "calc(100vh - 64px)" }}>
      <div className="absolute inset-0">
        <Image
          src="/hero.avif"
          alt="Equipo Sebastian Esquivel Propiedades"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-br from-primary/40 to-secondary/50" />
      </div>

      <motion.div style={{ paddingBottom }} className="relative mx-auto max-w-8xl px-6 flex flex-col gap-4">
        <motion.div style={{ scale, opacity }} className="origin-center backdrop-blur-md md:backdrop-blur-none">
          <Reveal className="p-5 md:p-12 flex flex-col gap-2 md:gap-4">
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-black/60 font-medium">
              Especialistas en Zona Oeste y CABA
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl xl:text-7xl leading-[1.08] text-black text-balance">
              Vendé tu propiedad al mejor precio, rápido y sin estrés.
            </h1>
            <p className="text-black/80 text-sm md:text-lg leading-relaxed max-w-xl pt-1 md:pt-4">
              Publicá con el mejor estándar de calidad. Vendé con nuestro plan
              de comercialización premium y las últimas innovaciones
              tecnológicas.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 pt-1 md:pt-2">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 md:gap-3 bg-black text-white hover:bg-black/90 transition-colors px-5 md:px-8 py-3 md:py-4 text-xs tracking-widest uppercase font-semibold"
              >
                Quiero vender
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 md:gap-3 border border-black/30 bg-white/80 text-black hover:border-black hover:bg-black/5 transition-colors px-5 md:px-8 py-3 md:py-4 text-xs tracking-widest uppercase"
              >
                Ver servicios
              </Link>
            </div>
          </Reveal>
        </motion.div>
        {/** Componente que genera espacio en blanco */}
        <motion.div style={{ height: spacerHeight }} className="w-2" />
      </motion.div>
    </section>
  )
}