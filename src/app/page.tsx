import Link from "next/link";
import { ImageCompare, Reveal } from "@/components";
import Image from "next/image";

const services = [
  {
    title: "Foto Profesional",
    description:
      "Tomadas por un estudio especializado para que tu propiedad se luzca al máximo.",
  },
  {
    title: "Super Destacado",
    description:
      "Máxima exposición en los portales más destacados del mercado inmobiliario.",
  },
  {
    title: "Video Profesional",
    description:
      "Escenas realizadas con estabilizador en movimiento y tomas panorámicas de los ambientes.",
  },
  {
    title: "Tomas con Drone",
    description:
      "Para casas, terrenos o grandes inmuebles según zonas autorizadas.",
  },
  {
    title: "Recorrido 360°",
    description:
      "Un recorrido exhaustivo en primera persona para pre-visitar y apreciar todos sus atributos.",
  },
  {
    title: "Trabajo en Red",
    description:
      "Trabajamos dentro de un ecosistema colaborativo de más de 40 inmobiliarias.",
  },
  {
    title: "Plano Profesional",
    description:
      "Planta redibujada por arquitectos para comprender mejor la distribución.",
  },
  {
    title: "Seguimiento Semanal",
    description:
      "El propietario recibe semanalmente el informe con el embudo de ventas y probabilidad de venta.",
  },
];

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
      "El referidor identifica personas en su círculo que quieran vender, recomienda nuestro servicio y si la venta se concreta, recibe una comisión previamente establecida. Es una forma de ganar dinero simplemente estando atento.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero.avif" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-br from-primary/40 to-secondary/50" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 lg:grid-cols-[65%_1fr] gap-16 items-center">
          <Reveal className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-12 flex flex-col gap-8">
            <span className="text-xs tracking-[0.3em] uppercase text-black/60 font-medium">
              Especialistas en Zona Oeste y CABA
            </span>
            <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl leading-[1.05] text-black text-balance">
              Vendé tu propiedad al mejor precio, rápido y sin estrés.
            </h1>
            <p className="text-black/80 text-lg leading-relaxed max-w-md">
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
                className="inline-flex items-center gap-3 border border-black/30 text-black hover:border-black hover:bg-black/5 transition-colors px-8 py-4 text-xs tracking-widest uppercase"
              >
                Ver servicios
              </Link>
            </div>
          </Reveal>

          <div className="flex lg:flex-col justify-center flex-wrap gap-3">
            {[
              { value: "-4 meses", label: "Tiempo promedio de venta" },
              { value: "+40", label: "Inmobiliarias en red" },
              { value: "360°", label: "Recorrido virtual incluido" },
              { value: "3 portales", label: "Publicación destacada" },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1} className="border border-black/20 bg-white/20 backdrop-blur-sm p-6 flex flex-col gap-2 rounded">
                <span className="font-serif text-3xl text-black">
                  {stat.value}
                </span>
                <span className="text-xs text-black/70 leading-snug">
                  {stat.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-28 bg-primary-50">
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
            <p className="text-secondary-600 max-w-sm text-sm leading-relaxed">
              Te contamos cómo vendemos en menos de 4 meses
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-200">
            {services.map((service, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="h-full bg-white p-7 flex flex-col gap-3 hover:bg-primary-50 transition-colors group">
                  <span className="text-xs text-primary-500/80 font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-lg text-secondary-800 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-secondary-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Amoblamiento Virtual - Comparativa */}
          
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border border-primary-200 bg-white p-8 md:p-10 rounded-lg">
              <div className="flex flex-col gap-5">
                <Reveal>
                  <h2 className="font-serif text-4xl md:text-5xl text-secondary-800">
                    Amoblamiento virtual incluido
                  </h2>
                </Reveal>
                <Reveal>
                <p className="text-xs tracking-[0.3em] uppercase text-primary-600 font-medium">
                  Hacemos que tu propiedad se vuelva irresistible.
                </p>
                <p className="text-secondary-700 leading-relaxed">
                  Realizamos un amoblamiento virtual sobre ambientes vacíos para
                  generar un mejor y mayor impacto.
                </p>
                </Reveal>
                <Reveal>
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
              <div className="w-full">
                <ImageCompare />
              </div>
            </div>
        </div>
      </section>

      {/* Sobre Sebastian */}
      <section className="pt-28 pb-8 bg-white">
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
          
          <Reveal>
            {/* Grilla de imágenes */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="/office-1.avif"
                  alt="Oficina en Palermo Hollywood - Vista principal"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
                <Image
                  src="/office-3.avif"
                  alt="Oficina en Palermo Hollywood - Sala de reuniones"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="space-y-4 pt-8">
                <Image
                  src="/office-2.avif"
                  alt="Oficina en Palermo Hollywood - Espacio de trabajo"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
                <Image
                  src="/office-4.avif"
                  alt="Oficina en Palermo Hollywood - Recepción"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Proceso */}
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

      {/* FAQ */}
      <section className="py-28 bg-secondary-50">
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
                  <h3 className="font-serif text-lg text-primary-600 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">
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
          <a
            href="https://api.whatsapp.com/send/?phone=5491137775276&text=Hola%20Sebasti%C3%A1n%2C%20me%20interesa%20vender%20mi%20propiedad.%20%C2%BFPodr%C3%ADas%20darme%20m%C3%A1s%20informaci%C3%B3n%3F&type=phone_number&app_absent=0"
            className="inline-flex items-center gap-3 bg-primary-500 text-white hover:bg-primary-600 transition-colors px-10 py-4 text-xs tracking-widest uppercase font-semibold"
          >
            Escribinos por WhatsApp
          </a>
        </Reveal>
      </section>
    </>
  );
}
