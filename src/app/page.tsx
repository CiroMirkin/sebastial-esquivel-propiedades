import type { Metadata } from "next"
import Link from "next/link";
import { ImageCompare, PartnersBar, ProcessCTA, Reveal, Services, StaggeredGallery, WhatsAppCTA } from "@/components";
import Image from "next/image";
import { Hero } from "./Hero";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Publicá con el mejor estándar de calidad. Vendé con nuestro plan de comercialización premium y las últimas innovaciones tecnológicas. Especialistas en Zona Oeste y CABA.",
  openGraph: {
    title: "Esquivel Propiedades — Vendé tu propiedad al mejor precio, rápido y sin estrés",
    description:
      "Publicá con el mejor estándar de calidad. Vendé con nuestro plan de comercialización premium y las últimas innovaciones tecnológicas.",
  },
  twitter: {
    title: "Esquivel Propiedades — Vendé tu propiedad al mejor precio, rápido y sin estrés",
    description:
      "Publicá con el mejor estándar de calidad. Vendé con nuestro plan de comercialización premium y las últimas innovaciones tecnológicas.",
  },
}

const faqs = [
  {
    question: "¿Cuánto vale mi propiedad?",
    answer:
      "En nuestra web ponemos a tu disposición la posibilidad de agendar una cita para realizar una valoración profesional y personalizada de tu vivienda, entregándote nuestro informe de tasación para que puedas tomar decisiones informadas.",
  },
  {
    question: "¿Trabajan con exclusividad?",
    answer:
      "Sí. Trabajamos con exclusividad por un período de 120 días consecutivos (4 meses). Al focalizar nuestros esfuerzos únicamente en tu propiedad, podemos asignar más recursos y tiempo a su comercialización, invertir en estrategias publicitarias personalizadas y garantizar una prestación de servicio de primer nivel sin conflicto de intereses.",
  },
  {
    question: "¿En qué portales se publicará mi propiedad?",
    answer:
      "Tu propiedad será promocionada de forma superdestacada en Zonaprop, MercadoLibre y Argenprop. Además incluimos video profesional, fotografías de alta calidad, tour virtual 360°, plano digital y amoblamiento virtual si el inmueble está desocupado.",
  },
  {
    question: "¿Cuánto tiempo se tarda en vender?",
    answer:
      "Las propiedades correctamente valoradas y bien presentadas suelen cerrarse en menos de 120 días. Para terrenos el proceso puede durar entre 3 y 8 meses. Nuestro objetivo es vender en el tiempo óptimo y al mejor precio posible.",
  },
  {
    question: "¿Cuáles son los costos al comprar o vender?",
    answer:
      "Los costos incluyen honorarios de la inmobiliaria, impuesto de sellos, impuesto de transferencia inmobiliaria o ganancias, gastos de escrituración, honorarios de escribanía, estudio de títulos, entre otros. Te proporcionamos una proforma de gastos detallada.",
  },
  {
    question: "¿Cómo funciona el esquema de referidos?",
    answer:
      "El referidor identifica personas en su círculo que quieran vender, recomienda nuestro servicio y si la venta se concreta, recibe una comisión previamente establecida.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Servicios */}
      <section className="pt-28 pb-20 bg-primary-50">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-primary-600 block mb-4">
                Servicios
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-secondary-800">
                Nuestro Estándar de Calidad
              </h2>
            </div>
          </Reveal>
          
          <Services />
        </div>
      </section>

      {/* Amoblamiento Virtual - Comparativa */}
      <section className="bg-primary-50 border-b border-primary-200 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-10 md:pt-10 px-8 md:px-10">
          <div className="flex flex-col gap-5">
            <Reveal>
              <p className="mb-4 text-xs tracking-[0.3em] uppercase text-primary-600 font-medium">
                Hacemos que tu propiedad se vuelva irresistible.
              </p>
              <h2 className="mb-4 font-serif text-4xl md:text-5xl text-secondary-800">
                Amoblamiento virtual incluido
              </h2>
              <p className="text-secondary-700 leading-relaxed">
                Realizamos un amoblamiento virtual sobre ambientes vacíos para
                generar un mejor y mayor impacto.
              </p>
              <div className="mt-8 flex justify-start">
                <Link
                  href="/servicios"
                  className="inline-flex items-center gap-3 border border-primary-400 text-primary-700 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all px-7 py-3 text-xs tracking-widest uppercase"
                >
                  Ver más
                </Link>
              </div>
            </Reveal>
            </div>
            <Reveal className="w-full">
              <ImageCompare />
            </Reveal>
        </div>
      </section>

      {/* Sobre Sebastian */}
      <section className="pt-10 pb-8 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <Reveal className="md:w-1/2 order-2 md:order-0 lg:block hidden">
              <div className="relative">
                <Image
                  className="w-full h-auto object-cover rounded shadow-xl"
                  src="/sebastian-esquivel.avif"
                  alt="Sebastian Esquivel Fundador"
                  height={600}
                  width={480}
                  priority
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-100 rounded-full -z-10 hidden md:block" />
              </div>
            </Reveal>

            <Reveal className="flex flex-col gap-7 md:w-1/2 order-1 md:order-0">
              <span className="text-xs tracking-[0.3em] uppercase text-primary-600">
                El fundador
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-secondary-900">
                Sebastian Esquivel
              </h2>
              <p className="text-secondary-600 leading-relaxed">
                Nací en Ramos Mejía, Zona Oeste. Me recibí de Martillero, Corredor
                y Tasador Público a principios del 2021 y empecé a trabajar de
                forma independiente. En 2023 fundé{" "}
                <span className="text-secondary-900 font-medium">
                  Sebastian Esquivel Propiedades
                </span>
                . Me sigo capacitando diariamente sobre el mercado inmobiliario y
                las nuevas tecnologías. Actualmente curso el cuarto año de
                Abogacía en la UNLAM.
              </p>
              <div className="lg:block hidden">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-secondary-400 tracking-wider uppercase">
                    Matrícula
                  </span>
                  <span className="text-secondary-700 text-sm">
                    CMCPDJLM 1074 | CUCICBA 9497
                  </span>
                </div>
                <Link
                  href="/equipo"
                  className="mt-6 inline-flex items-center gap-3 border border-secondary-200 text-secondary-700 hover:border-primary-500 hover:text-primary-600 transition-colors px-7 py-3 text-xs tracking-widest uppercase self-start"
                >
                  Conocé al equipo
                </Link>
              </div>
            </Reveal>

            <Reveal className="md:w-1/2 order-2 md:order-0 lg:hidden block">
              <div className="relative">
                <Image
                  className="w-full h-auto object-cover rounded shadow-xl"
                  src="/sebastian-esquivel.avif"
                  alt="Sebastian Esquivel Fundador"
                  height={600}
                  width={480}
                  priority
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-100 rounded-full -z-10 hidden md:block" />
              </div>
              <div className="mt-6 block lg:hidden">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-secondary-400 tracking-wider uppercase">
                    Matrícula
                  </span>
                  <span className="text-secondary-700 text-sm">
                    CMCPDJLM 1074 | CUCICBA 9497
                  </span>
                </div>
                <Link
                  href="/equipo"
                  className="mt-6 inline-flex items-center gap-3 border border-secondary-200 text-secondary-700 hover:border-primary-500 hover:text-primary-600 transition-colors px-7 py-3 text-xs tracking-widest uppercase self-start"
                >
                  Conocé al equipo
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Sobre Oficinas */}
      <section className="pb-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal delay={0.15}>
            <div className="border border-primary-100 p-8 bg-primary-50 flex flex-col gap-6">
              <span className="text-xs tracking-widest uppercase text-secondary-500">
                Oficinas
              </span>
              <h3 className="font-serif text-2xl text-secondary-900">
                Palermo Hollywood
              </h3>
              <p className="text-secondary-600 text-sm leading-relaxed">
                Contamos con oficinas modernas en Palermo Hollywood para darte la
                mayor seguridad posible. Tenemos todo lo necesario para dar el
                mejor servicio.
              </p>
              <address className="not-italic text-secondary-500 text-sm">
                Arévalo 1880, Piso 2 — Palermo, CABA
              </address>
            </div>
          </Reveal>
          
          <StaggeredGallery
            images={[
              { src: "/office-1.avif", alt: "Oficina en Palermo Hollywood - Vista principal" },
              { src: "/office-3.avif", alt: "Oficina en Palermo Hollywood - Sala de reuniones" },
              { src: "/office-2.avif", alt: "Oficina en Palermo Hollywood - Espacio de trabajo" },
              { src: "/office-4.avif", alt: "Oficina en Palermo Hollywood - Recepción" },
            ]}
          />
        </div>
      </section>

      {/* Proceso */}
      <ProcessCTA />
      <section className="bg-white w-full">
        <PartnersBar />
      </section>

      {/* FAQ */}
      <section className="py-28 pt-18 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14">
            <span className="text-xs tracking-[0.3em] uppercase text-primary-600 block mb-4">
              FAQ
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-secondary-900">
              Preguntas Frecuentes
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary-200">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="h-full bg-white p-8 hover:bg-primary-50 transition-colors">
                  <h3 className="font-serif text-2xl text-primary-600 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-secondary-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-secondary-900">
        <Reveal className="mx-auto max-w-7xl px-6 text-center flex flex-col items-center gap-8">
          <h2 className="font-serif text-4xl md:text-5xl text-white max-w-xl">
            ¿Listo para vender tu propiedad?
          </h2>
          <WhatsAppCTA />
        </Reveal>
      </section>
    </>
  );
}
