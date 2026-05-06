"use client"

import { useState, useRef, useCallback, useEffect } from "react"

const images = [
  { before: "/1-1.avif", after: "/1-2.avif" },
  { before: "/2-1.avif", after: "/2-2.avif" },
  { before: "/3-1.avif", after: "/3-2.avif" },
  { before: "/4-1.avif", after: "/4-2.avif" },
]

// Tiempos en milisegundos
const VISIBLE_DURATION = 6000 // 6s
const FADE_DURATION = 300       // 300ms para fade in/out

export function ImageCompare() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [sliderPos, setSliderPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [opacity, setOpacity] = useState(1)

  const getPercentage = useCallback((clientX: number) => {
    if (!containerRef.current) return 50
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    return Math.min(Math.max((x / rect.width) * 100, 0), 100)
  }, [])

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault()
      setIsDragging(true)
      setSliderPos(getPercentage(e.clientX));
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [getPercentage]
  )

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return
      setSliderPos(getPercentage(e.clientX))
    },
    [isDragging, getPercentage]
  )

  const handlePointerUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setSliderPos((p) => Math.max(p - 2, 0))
      } else if (e.key === "ArrowRight") {
        setSliderPos((p) => Math.min(p + 2, 100))
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const nextImage = () => {
      setOpacity(0)
      timeoutId = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % images.length)
        setSliderPos(50)
        timeoutId = setTimeout(() => {
          setOpacity(1)
        }, 50)
      }, FADE_DURATION)
    }

    const scheduleNextChange = () => {
      timeoutId = setTimeout(() => {
        nextImage()
      }, VISIBLE_DURATION)
    }

    // Función recursiva para el ciclo infinito
    const cycle = () => {
      scheduleNextChange()

      // Cuando termine el fade-out + cambio + fade-in, esperar VISIBLE_DURATION nuevamente
      // Pero como ya programamos scheduleNextChange dentro del cambio de imagen,
      // necesitamos encadenarlo correctamente.
    }

    // Iniciar el primer ciclo
    const startCycle = () => {
      // Limpiar por si acaso
      if (timeoutId) clearTimeout(timeoutId)

      // Esperar VISIBLE_DURATION con la imagen actual
      timeoutId = setTimeout(() => {
        // Fade out
        setOpacity(0)

        // Cambiar imagen después del fade out
        timeoutId = setTimeout(() => {
          setActiveIndex((prev) => (prev + 1) % images.length)
          setSliderPos(50)

          // Fade in
          timeoutId = setTimeout(() => {
            setOpacity(1)

            // Recursividad: esperar VISIBLE_DURATION y repetir
            startCycle()
          }, 50)
        }, FADE_DURATION)
      }, VISIBLE_DURATION)
    }

    startCycle()

    return () => clearTimeout(timeoutId)
  }, [])

  const transitionClasses = `transition-opacity duration-300 ease-in-out ${
    opacity === 0 ? "opacity-0" : "opacity-100"
  }`

  return (
    <div className="flex flex-col gap-4">
      <div
        ref={containerRef}
        className="relative w-full aspect-4/3 select-none overflow-hidden cursor-ew-resize rounded-lg border border-primary-200"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        role="slider"
        aria-valuenow={Math.round(sliderPos)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Comparación antes y después del amoblamiento virtual"
        tabIndex={0}
      >
        {/* Después (fondo completo) */}
        <img
          src={images[activeIndex].after}
          alt="Ambiente amoblado virtualmente"
          className={`absolute inset-0 w-full h-full object-cover ${transitionClasses}`}
          draggable={false}
        />

        {/* Antes (recortado) */}
        <div
          className={`absolute inset-0 overflow-hidden ${transitionClasses}`}
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={images[activeIndex].before}
            alt="Ambiente original sin amoblar"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              width: containerRef.current
                ? `${containerRef.current.offsetWidth}px`
                : "100%",
              maxWidth: "none",
            }}
            draggable={false}
          />
        </div>

        {/* Línea divisoria */}
        <div
          className="absolute top-0 bottom-0 w-px bg-white z-10"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute inset-y-0 -left-[3px] -right-[3px] bg-white/20 backdrop-blur-[1px]" />
        </div>

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
          style={{ left: `${sliderPos}%`, transform: `translate(-50%, -50%)` }}
        >
          <div
            className={`w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-white/40 shadow-lg flex items-center justify-center transition-transform duration-150 ${
              isDragging ? "scale-110" : "scale-100"
            }`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="text-secondary-800"
            >
              <path
                d="M6 3L1 9L6 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 3L17 9L12 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-black/50 backdrop-blur-sm text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded">
            Antes
          </span>
        </div>
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-primary-600/80 backdrop-blur-sm text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded">
            Después
          </span>
        </div>
      </div>

      <p className="text-secondary-500 text-xs text-center">
        Arrastrá el control o usá las flechas ← → para comparar
      </p>
    </div>
  )
}