"use client"

import { useScroll, useTransform, motion } from "motion/react"
import { useEffect, useState } from "react"
import { Grainient, Reveal } from "@/components"

export default function Hero() {
  const { scrollY } = useScroll()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const videoScale = useTransform(
    scrollY,
    [0, 400],
    isMobile ? [1, 0.82] : [1, 1],
  )
  const videoOpacity = useTransform(scrollY, [0, 350], isMobile ? [1, 0] : [1, 1])

  const videoContainerHeight = useTransform(
  scrollY,
  [200, 380],
  isMobile ? ["375px", "0px"] : ["", ""],
)
  return (
    <main
      className="min-h-screen bg-(--cream) text-white"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <Grainient
          color1="#519acf"
          color2="#43427f"
          color3="#74b7e3"
          timeSpeed={0.4}
          warpStrength={1.5}
          warpFrequency={6.0}
          warpAmplitude={120.0}
          rotationAmount={700.0}
          noiseScale={2.5}
          grainAmount={0.03}
          contrast={1.3}
          saturation={1.1}
          zoom={1.0}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/10 to-black/50" />
      </div>

      <section className="relative" style={{ minHeight: isMobile ? "110vh" : "100vh" }}>
        <div className="sticky top-14 flex items-center overflow-hidden">
          <div className="relative mx-auto w-full max-w-350 px-6 pt-10 pb-14 md:px-12 md:pt-16 lg:grid lg:grid-cols-12 lg:items-center lg:gap-12">

            <div className="lg:col-span-5">
              <div className="">
                <Reveal>
                  <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/50 px-4 py-1.5 text-xs tracking-[0.25em] uppercase backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-600 text-black" />
                    Zona Oeste · CABA
                  </div>
                </Reveal>


                <Reveal delay={0.1}>
                  <h1
                    className="font-serif text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.03em] text-white"
                    style={{ fontWeight: 400 }}
                  >
                    Vendé tu
                    <br />
                    propiedad{" "}
                    <em
                      className="font-serif not-italic text-secondary-900"
                      style={{ fontStyle: "italic", fontWeight: 300 }}
                    >
                      al mejor
                    </em>
                    <br />
                    <em
                      className="font-serif text-secondary-900"
                      style={{ fontStyle: "italic", fontWeight: 300 }}
                    >
                      precio.
                    </em>
                  </h1>
                </Reveal>

                <Reveal delay={0.2}>
                  <p className="mt-8 max-w-xl text-base leading-relaxed md:text-lg">
                    Publicá con el mejor estándar de calidad del mercado. Plan de
                    comercialización premium, fotografía profesional, video con drone
                    y recorridos 360°. Rápido, sin estrés.
                  </p>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="my-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                    <a
                      href="#contacto"
                      className="group inline-flex items-center gap-3 rounded-full bg-primary-200 px-7 py-4 text-sm font-medium text-black shadow-primary-200 transition-all hover:-translate-y-0.1 hover:shadow-[0_30px_60px_-15px_oklch(0.55_0.16_38/0.6)]"
                    >
                      Quiero vender
                      <span className="grid h-7 w-7 place-items-center rounded-full bg-secondary-900 text-white transition-transform group-hover:translate-x-0.5" />
                    </a>
                    <a
                      href="#servicios"
                      className="inline-flex items-center gap-2 text-sm text-white underline decoration-white/30 underline-offset-8 transition-colors hover:decoration-primary-200"
                    >
                      Ver nuestros servicios
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Video — anima independientemente del texto */}
            <motion.div
              style={{
                scale: videoScale,
                opacity: videoOpacity,
                height: videoContainerHeight,
              }}
              className="overflow-hidden origin-top will-change-transform md:col-span-7"
            >
              <Reveal delay={0.15}>
                <div className="relative">
                  <div className="relative aspect-378/275 overflow-hidden rounded-xs bg-white/5 shadow-[0_40px_80px_-30px_oklch(0.18_0.015_60/0.4)]">
                    <video
                      src="https://video.wixstatic.com/video/3a5020_3c1710fec808431db33449e705befe96/1080p/mp4/file.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-secondary-900/60 via-transparent to-transparent" />

                    <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-(--cream)/95 px-3 py-1.5 text-[11px] tracking-[0.2em] uppercase backdrop-blur">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-(--brand)" />
                      En venta
                    </div>

                    <div className="absolute right-6 bottom-6 left-6 text-(--cream)">
                      <div
                        className="text-2xl leading-tight tracking-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        Nuestras propiedades
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats — flujo normal, empuja el hero hacia arriba */}
      <div className="relative z-10 border-y border-white/10 bg-(--cream)">
  <div className="mx-auto grid max-w-350 grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
    {[
      { value: "−4", suffix: "meses", label: "Tiempo promedio de venta" },
      { value: "+40", suffix: "red", label: "Inmobiliarias asociadas" },
      { value: "360°", suffix: "tour", label: "Recorrido virtual incluido" },
      { value: "3", suffix: "portales", label: "Publicación destacada" },
    ].map((s, i) => {
      const content = (
        <div className="px-6 py-8 md:px-10 md:py-10">
          <div className="flex items-baseline gap-2">
            <div
              className="text-4xl tracking-tight text-white md:text-5xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              {s.value}
            </div>
            <div className="text-xs tracking-[0.2em] uppercase text-white">
              {s.suffix}
            </div>
          </div>
          <div className="mt-2 text-sm text-white">{s.label}</div>
        </div>
      )

      return isMobile ? (
        <Reveal key={s.label} delay={i * 0.1}>{content}</Reveal>
      ) : (
        <div key={s.label}>{content}</div>
      )
    })}
  </div>
</div>
    </main>
  )
}