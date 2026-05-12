import Image from "next/image"
import { Reveal } from "./Reveal"

export const portals = [
  { href: "http://zonaprop.com.ar/", src: "/zonaprop.svg", alt: "Zonaprop", width: 120 },
  { href: "https://mudafy.com.ar/", src: "/mudafy.svg", alt: "Mudafy", width: 100 },
  { href: "https://www.mercadolibre.com.ar/", src: "/mercadolibre.webp", alt: "Mercado Libre", width: 120 },
  { href: "https://www.argenprop.com/", src: "/argenprop.webp", alt: "Argenprop", width: 110 },
]

export function PartnersBar() {
  return (
    <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_1fr] justify-between">
      <Reveal className="px-6 py-10 flex flex-col gap-4">
        <span className="text-xs tracking-[0.3em] uppercase text-black/50 font-medium">
          Adheridos a la red
        </span>
        <a
          href="https://www.deinmobiliarios.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="self-start opacity-80 hover:opacity-100 transition-opacity bg-gray-500 rounded"
        >
          <Image src="/deinmobiliarios.png" alt="De Inmobiliarios" width={160} height={48} className="object-contain" />
        </a>
      </Reveal>

      <Reveal delay={0.1} className="px-6 pb-10 pt-0 lg:pt-10 flex flex-col gap-4">
        <span className="text-xs tracking-[0.3em] uppercase text-black750 font-medium">
          Encontranos en los siguientes portales
        </span>
        <div className="flex flex-wrap items-center gap-8">
          {portals.map((portal) => (
            <a
              key={portal.alt}
              href={portal.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image src={portal.src} alt={portal.alt} width={portal.width} height={36} className="object-contain" />
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  )
}