import type { Metadata } from "next"
import { Reveal, StaggeredGallery, TeamGrid } from "@/components";
import Image from "next/image";
import { ScrollButton } from "./ScrollButton";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "En Sebastian Esquivel Propiedades estamos comprometidos en fomentar el desarrollo profesional de futuros inmobiliarios, brindándoles acceso a recursos de capacitación y oportunidades de formación continua.",
  openGraph: {
    title: "Equipo — Esquivel Propiedades",
    description:
      "Sumate a la nueva generación de inmobiliarios. Capacitación continua, acceso a información privilegiada del mercado y oficinas modernas.",
  },
  twitter: {
    title: "Equipo — Esquivel Propiedades",
    description:
      "Sumate a la nueva generación de inmobiliarios. Capacitación continua, acceso a información privilegiada del mercado y oficinas modernas.",
  },
}

export default function EquipoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-150 md:min-h-0 md:py-24 overflow-hidden">
        <Image
          src="/sebastian-propiedades-equipo.avif"
          alt="Equipo Sebastian Esquivel Propiedades"
          fill
          className="object-cover object-center hidden md:block"
          priority
        />
        <Image
          src="/hero.avif"
          alt="Equipo Sebastian Esquivel Propiedades"
          fill
          className="object-cover object-top md:hidden"
          priority
        />
        <div className="absolute inset-0 bg-secondary-900/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(81,154,207,0.15),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-3 py-24">
          <Reveal className="px-3 py-4 backdrop-blur-md md:backdrop-blur-none rounded">
            <span className="text-xs tracking-[0.3em] uppercase text-primary-300 block mb-6">
              El equipo
            </span>
            <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl text-white mb-6">
              EQUIPO
            </h1>
            <p className="text-primary-100 text-lg max-w-2xl leading-relaxed">
              En Sebastian Esquivel Propiedades estamos comprometidos en fomentar
              el desarrollo profesional de futuros inmobiliarios, brindándoles
              acceso a recursos de capacitación y oportunidades de formación
              continua.
            </p>
            <ScrollButton target="equipo-contenido" />
          </Reveal>
        </div>
      </section>

      {/* Team grid */}
      <section id="equipo-contenido" className="py-16 bg-white scroll-mt-16">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-serif text-4xl pb-8">
              Trabajemos juntos
            </h2>
          </Reveal>
          <TeamGrid />
        </div>
      </section>

      {/* Sumate */}
      <section className="py-16 bg-linear-to-br from-primary-600 to-secondary-800">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-7">
            <StaggeredGallery
              images={[
                { src: "/sebastian-propiedades-equipo-1.avif", alt: "Oficina en Palermo Hollywood - Vista principal" },
                { src: "/sebastian-propiedades-equipo-3.avif", alt: "Oficina en Palermo Hollywood - Sala de reuniones" },
                { src: "/sebastian-propiedades-equipo-2.avif", alt: "Oficina en Palermo Hollywood - Espacio de trabajo" },
                { src: "/sebastian-propiedades-equipo-5.avif", alt: "Oficina en Palermo Hollywood - Recepción" },
              ]}
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {[
                "¿Trabajas actualmente en el rubro inmobiliario y crees que estás para más?",
                "¿Te sentís sólo y en un mercado oxidado?",
                "¿Querés crecer profesionalmente, ganar más y disfrutar más del trabajo?",
              ].map((question, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-primary-300 mt-0.5 shrink-0">—</span>
                  <p className="text-primary-50 text-lg leading-relaxed">
                    {question}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-primary-100 leading-relaxed text-sm">
              Hacemos que tu cartera de propiedades tenga el máximo nivel de
              destaque posible. Ofrecemos capacitación continua, acceso a
              información privilegiada del mercado y oficinas modernas
              totalmente equipadas.
            </p>
            <p className="text-primary-100 leading-relaxed text-sm">
              Si te ves alineado con nuestros valores y querés vender más
              ayudado por soporte en procesos y tecnologías de vanguardia,
              mientras elevás tu marca personal trabajando con la nueva
              generación de inmobiliarios, postulate.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=5491136118439&text=Hola%2C%20me%20interesa%20sumarme%20al%20equipo%20de%20Esquivel%20Propiedades.&type=phone_number&app_absent=0"
              className="inline-flex items-center gap-3 bg-white text-primary-700 hover:bg-primary-50 transition-colors px-8 py-4 text-xs tracking-widest uppercase font-semibold self-start"
            >
              Sumate
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
