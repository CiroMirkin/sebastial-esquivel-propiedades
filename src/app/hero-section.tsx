"use client"

import Link from "next/link"
import Image from "next/image"
import { useScroll, useTransform, motion } from "motion/react"
import { Reveal } from "@/components/Reveal"

export function HeroSection() {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 600], [1, 0.75])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])
  const paddingBottom = useTransform(scrollY, [0, 400], [8, 0])
  const spacerHeight = useTransform(scrollY, [0, 400], [8, 0])

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
          <Reveal className="p-6 md:p-12 flex flex-col gap-3 md:gap-4">
            <span className="text-xs tracking-[0.3em] uppercase text-black/60 font-medium">
              Especialistas en Zona Oeste y CABA
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.05] text-black text-balance">
              Vendé tu propiedad al mejor precio, rápido y sin estrés.
            </h1>
            <p className="text-black/80 text-lg leading-relaxed max-w-xl pt-2 md:pt-4">
              Publicá con el mejor estándar de calidad. Vendé con nuestro plan
              de comercialización premium y las últimas innovaciones
              tecnológicas.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 bg-black text-white hover:bg-black/90 transition-colors px-8 py-4 text-xs tracking-widest uppercase font-semibold"
              >
                Quiero vender
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-3 border border-black/30 bg-white/80 text-black hover:border-black hover:bg-black/5 transition-colors px-8 py-4 text-xs tracking-widest uppercase"
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