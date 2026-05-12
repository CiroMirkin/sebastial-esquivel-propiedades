"use client"

import Image from "next/image"
import { useState, useRef, useCallback, useEffect } from "react"

const images = [
  { before: "/1-1.avif", after: "/1-2.avif" },
  { before: "/2-1.avif", after: "/2-2.avif" },
  { before: "/3-1.avif", after: "/3-2.avif" },
  { before: "/4-1.avif", after: "/4-2.avif" },
]

const VISIBLE_DURATION = 6000 // 6s
const FADE_DURATION = 300

export function ImageCompare() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cycleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [sliderPos, setSliderPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [opacity, setOpacity] = useState(1)
  const [containerWidth, setContainerWidth] = useState<number | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width)
    })
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

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
      (e.target as HTMLElement).setPointerCapture(e.pointerId)
    },
    [getPercentage]
  )

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return
      e.preventDefault()
      setSliderPos(getPercentage(e.clientX))
    },
    [isDragging, getPercentage]
  )

  const handlePointerUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return
      e.preventDefault()
      setSliderPos(getPercentage(e.touches[0].clientX))
    },
    [isDragging, getPercentage]
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setSliderPos((p) => Math.max(p - 2, 0))
      else if (e.key === "ArrowRight") setSliderPos((p) => Math.min(p + 2, 100))
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    const clearCycle = () => {
      if (cycleTimeoutRef.current) clearTimeout(cycleTimeoutRef.current)
    }

    const startCycle = () => {
      clearCycle()
      cycleTimeoutRef.current = setTimeout(() => {
        setOpacity(0)
        cycleTimeoutRef.current = setTimeout(() => {
          setActiveIndex((prev) => (prev + 1) % images.length)
          setSliderPos(50)
          cycleTimeoutRef.current = setTimeout(() => {
            setOpacity(1)
            startCycle()
          }, 50)
        }, FADE_DURATION)
      }, VISIBLE_DURATION)
    }

    startCycle()
    return clearCycle
  }, [])

  const imageStyle = {
    width: containerWidth ? `${containerWidth}px` : "100%",
    maxWidth: "none",
  }

  const transitionClass = `transition-opacity duration-300 ease-in-out ${opacity === 0 ? "opacity-0" : "opacity-100"}`

  return (
    <div className="flex flex-col gap-4">
      <div
        ref={containerRef}
        className="relative w-full aspect-4/3 select-none overflow-hidden border border-primary-200"
        style={{ cursor: isDragging ? "grabbing" : "ew-resize", touchAction: "none" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onTouchMove={handleTouchMove}
        role="slider"
        aria-valuenow={Math.round(sliderPos)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Comparación antes y después del amoblamiento virtual"
        tabIndex={0}
      >
        <Image
          width={1200}
          height={900}
          src={images[activeIndex].after}
          alt="Ambiente amoblado virtualmente"
          className={`absolute inset-0 w-full h-full object-cover ${transitionClass}`}
          draggable={false}
          priority
        />

        <div
          className={`absolute inset-0 overflow-hidden ${transitionClass}`}
          style={{ width: `${sliderPos}%` }}
        >
          <Image
            width={1200}
            height={900}
            src={images[activeIndex].before}
            alt="Ambiente original sin amoblar"
            className="absolute inset-0 h-full object-cover"
            style={imageStyle}
            draggable={false}
            priority
          />
        </div>

        <div
          className="absolute top-0 bottom-0 w-px bg-white z-10"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute inset-y-0 -left-0.75 -right-0.75 bg-white/20 backdrop-blur-[1px]" />
        </div>

        <div
          className="absolute top-1/2 z-20 flex items-center justify-center"
          style={{ left: `${sliderPos}%`, transform: "translate(-50%, -50%)" }}
        >
          <div
            className={`w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm border border-white/40 shadow-lg flex items-center justify-center transition-transform duration-150 ${
              isDragging ? "scale-110" : "scale-100"
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-secondary-800">
              <path d="M6 3L1 9L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 3L17 9L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

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
        Arrastrá el control para comparar
      </p>
    </div>
  )
}