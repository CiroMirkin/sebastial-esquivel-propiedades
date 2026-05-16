import { Grainient } from "@/components";

export default function Hero() {
  return (
    <main
      className="min-h-screen bg-(--cream) text-white"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
        >
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

        <div className="relative mx-auto grid max-w-350 grid-cols-1 gap-10 px-6 pt-8 pb-20 md:px-12 md:pt-16 md:pb-28 lg:grid-cols-12 lg:gap-12">
          <div className="relative z-10 lg:col-span-5">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/50 px-4 py-1.5 text-xs tracking-[0.25em] uppercase backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-600 text-black" />
              Zona Oeste · CABA
            </div>

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

            <p className="mt-8 max-w-xl text-base leading-relaxed md:text-lg">
              Publicá con el mejor estándar de calidad del mercado. Plan de
              comercialización premium, fotografía profesional, video con drone
              y recorridos 360°. Rápido, sin estrés.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
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
          </div>

          <div className="relative lg:col-span-7">
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
          </div>
        </div>
      </section>
    </main>
  );
}
