import type { Metadata } from "next"
import { portals, Reveal, StaggeredGallery } from "@/components";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Usamos tecnología de vanguardia para vender tu propiedad en menos de 4 meses, al mejor precio y en el menor tiempo posible. Plan de Comercialización Premium.",
  openGraph: {
    title: "Servicios — Esquivel Propiedades",
    description:
      "Usamos tecnología de vanguardia para vender tu propiedad en menos de 4 meses, al mejor precio y en el menor tiempo posible.",
  },
  twitter: {
    title: "Servicios — Esquivel Propiedades",
    description:
      "Usamos tecnología de vanguardia para vender tu propiedad en menos de 4 meses, al mejor precio y en el menor tiempo posible.",
  },
}

const services = [
  {
    id: "01",
    title: "Foto Profesional",
    description:
      "Tomadas por un estudio especializado para que tu propiedad se luzca al máximo en todas las plataformas.",
  },
  {
    id: "02",
    title: "Super Destacado",
    description:
      'Aviso "Superdestacado Premier" en ZonaProp y destaque "Oro Premium" en MercadoLibre Inmuebles.',
  },
  {
    id: "03",
    title: "Video Profesional",
    description:
      "Escenas realizadas con estabilizador en movimiento y tomas panorámicas de todos los ambientes.",
  },
  {
    id: "04",
    title: "Tomas con Drone",
    description:
      "Para casas, terrenos o grandes inmuebles según zonas autorizadas, mostrando el entorno completo.",
  },
  {
    id: "05",
    title: "Recorrido 360°",
    description:
      "Un recorrido exhaustivo en primera persona que permite a los interesados pre-visitar y apreciar todos los atributos.",
  },
  {
    id: "06",
    title: "Trabajo en Red",
    description:
      "Operamos dentro de un ecosistema colaborativo de más de 40 inmobiliarias para maximizar la exposición.",
  },
  {
    id: "07",
    title: "Plano Profesional",
    description:
      "Planta redibujada por arquitectos para que los interesados comprendan mejor la distribución del inmueble.",
  },
  {
    id: "08",
    title: "Seguimiento Semanal",
    description:
      "Semanalmente el propietario recibe el informe con el embudo de ventas y la probabilidad de vender.",
  },
  {
    id: "09",
    title: "Amoblamiento Virtual",
    description:
      "Realizamos amoblamiento virtual sobre ambientes vacíos para generar mayor impacto e interés.",
  },
  {
    id: "10",
    title: "Home Staging",
    description:
      "Informe de home staging para presentar tu propiedad en su mejor versión y acelerar la venta.",
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-38 bg-primary-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(81,154,207,0.15),transparent_55%)]" />
        <Image
          src="/servicios.avif"
          alt="Servicios de Sebastian Esquivel Propiedades"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="relative mx-auto max-w-7xl px-3">
          <Reveal className="px-3 py-4 backdrop-blur-md inline-flex flex-col rounded">
            <span className="text-xs tracking-[0.3em] uppercase text-white block mb-6">
              Lo que hacemos
            </span>
            <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl text-white mb-6">
              SERVICIOS
            </h1>
            <p className="text-white text-lg max-w-xl leading-relaxed">
              Usamos tecnología de vanguardia para vender tu propiedad en menos de
              4 meses, al mejor precio y en el menor tiempo posible.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Plan Premium */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <Reveal>
              <h2 className="font-serif text-4xl md:text-5xl text-secondary-900 mb-5">
                Plan de Comercialización Premium
              </h2>
              <p className="text-secondary-600 leading-relaxed">
                Usamos tecnología de vanguardia para vender tu propiedad en menos de 4 meses, al mejor precio y en el menor tiempo posible. Realizamos procesos transparentes, seguros y eficaces para la tranquilidad de todas las partes.
              </p>
            </Reveal>
            <Reveal className="flex flex-col gap-4 border border-primary-200 bg-primary-50 p-8">
              <span className="text-xs tracking-widest uppercase text-secondary-500">
                Portales donde publicamos
              </span>
              <div className="flex flex-wrap justify-evenly items-center gap-4">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-primary-200">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-7 flex flex-col gap-3 hover:bg-primary-50 transition-colors group"
              >
                <span className="text-xs text-primary-500/80 font-mono">
                  {service.id}
                </span>
                <h3 className="font-serif text-lg text-secondary-800 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tasación */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-secondary-800">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <Reveal>
            <h2 className="font-serif text-4xl text-white">
              Mostramos tu propiedad en su mejor versión
            </h2>
            </Reveal>
            <Reveal className="flex flex-col gap-4">
              {[
                'Aviso "Superdestacado Premier" en ZonaProp y destaque "Oro Premium" en MercadoLibre Inmuebles.',
                "Fotos y videos profesionales, tour virtual en 360°, plano con medidas, tomas con drone y amoblamiento virtual sobre ambientes vacíos.",
                "Informe de home staging para tu propiedad.",
                "Informe recurrente de comercialización para que estés al tanto de lo que va pasando con la venta.",
              ].map((question, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-primary-300 mt-0.5 shrink-0">—</span>
                  <p className="text-primary-50 text-base leading-relaxed">
                    {question}
                  </p>
                </div>
              ))}
            </Reveal>
            <Reveal>

            <p className="text-primary-100 leading-relaxed">
              Con nuestro informe de tasación conocerás el valor real de tu propiedad y el contexto actual del mercado para tomar decisiones informadas junto a un agente de primer nivel.
            </p>
            </Reveal>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 bg-white text-primary-700 hover:bg-primary-50 transition-colors px-8 py-4 text-xs tracking-widest uppercase font-semibold self-start"
            >
              Quiero vender
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <StaggeredGallery
              images={[
                { src: "/servicios/equipo-servicios.avif", alt: "Oficina en Palermo Hollywood - Vista principal" },
                { src: "/servicios/Sebastian-Esquivel-servicios.avif", alt: "Oficina en Palermo Hollywood - Sala de reuniones" },
                { src: "/servicios/casa.avif", alt: "Oficina en Palermo Hollywood - Espacio de trabajo" },
                { src: "/office-1.avif", alt: "Oficina en Palermo Hollywood - Espacio de trabajo" },
              ]}
            />
            <Reveal className="border mt-8 border-white/20 bg-white/10 backdrop-blur-sm p-8">
              <h3 className="font-serif text-2xl text-white mb-4">
                Oficinas en Palermo Hollywood
              </h3>
              <p className="text-primary-100 text-sm leading-relaxed mb-4">
                Contamos con oficinas modernas en Palermo Hollywood para darte
                la mayor seguridad posible. Tenemos todo lo necesario para dar
                el mejor servicio.
              </p>
              <address className="not-italic text-primary-200 text-sm">
                Arévalo 1880, Piso 2 — Palermo, CABA
              </address>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
