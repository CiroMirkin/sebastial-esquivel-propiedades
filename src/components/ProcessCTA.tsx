import Link from "next/link"
import Image from "next/image"
import { Reveal } from "./Reveal"

export function ProcessCTA() {
  return (
    <section className="py-28 bg-gradient-to-br from-primary-600 to-secondary-800">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Reveal className="flex flex-col gap-6">
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
            Simplificamos al extremo el proceso de venta de tu hogar.
          </h2>
          <p className="text-primary-100 leading-relaxed">
            TE ACOMPAÑAMOS EN TODO EL PROCESO
          </p>
        </Reveal>
        <Reveal delay={0.15} className="flex flex-col gap-5">
          <p className="text-white/90 leading-relaxed">
            Nos encargamos de publicar la propiedad, realizar una estrategia
            de acciones proactivas para concretar la venta, gestionar las
            consultas, precalificar clientes, organizar las visitas, negociar
            el precio de venta y de todo el papeleo y los contratos.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 bg-white text-primary-700 hover:bg-primary-50 transition-colors px-8 py-4 text-xs tracking-widest uppercase font-semibold self-start"
          >
            Quiero vender
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}