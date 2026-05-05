import Link from "next/link";

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
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(81,154,207,0.08),_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
              Especialistas en Zona Oeste y CABA
            </span>
            <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl leading-[1.05] text-secondary text-balance">
              Vendé tu propiedad al mejor precio, rápido y sin estrés.
            </h1>
            <p className="text-secondary/70 text-lg leading-relaxed max-w-md">
              Publicá con el mejor estándar de calidad. Vendé con nuestro plan
              de comercialización premium y las últimas innovaciones
              tecnológicas.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 bg-primary text-white hover:bg-primary/90 transition-colors px-8 py-4 text-xs tracking-widest uppercase font-semibold"
              >
                Quiero vender
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-3 border border-secondary/30 text-secondary hover:border-primary hover:text-primary transition-colors px-8 py-4 text-xs tracking-widest uppercase"
              >
                Ver servicios
              </Link>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-3">
            {[
              { value: "-4 meses", label: "Tiempo promedio de venta" },
              { value: "+40", label: "Inmobiliarias en red" },
              { value: "360°", label: "Recorrido virtual incluido" },
              { value: "3 portales", label: "Publicación destacada" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border border-primary/20 bg-primary/5 p-6 flex flex-col gap-2"
              >
                <span className="font-serif text-3xl text-primary">
                  {stat.value}
                </span>
                <span className="text-xs text-secondary/60 leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-28 bg-primary/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-amber-400 block mb-4">
                Servicios
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-secondary">
                Nuestro Estándar de Calidad
              </h2>
            </div>
            <p className="text-secondary/70 max-w-sm text-sm leading-relaxed">
              Te contamos cómo vendemos en menos de 4 meses
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary/20">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white p-7 flex flex-col gap-3 hover:bg-primary/5 transition-colors group"
              >
                <span className="text-xs text-primary/60 font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-lg text-secondary group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 border border-primary/20 bg-primary/5">
            <p className="text-secondary/70 text-sm">
              <span className="text-primary font-medium">
                Amoblamiento virtual incluido:{" "}
              </span>
              Realizamos un amoblamiento virtual sobre ambientes vacíos para
              generar un mejor y mayor impacto.{" "}
              <span className="text-secondary font-medium uppercase text-xs tracking-wider">
                Hacemos que tu propiedad se vuelva irresistible.
              </span>
            </p>
          </div>

          <div className="mt-8 flex justify-start">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-3 border border-primary/40 text-primary hover:bg-primary hover:text-white transition-all px-7 py-3 text-xs tracking-widest uppercase"
            >
              Ver más
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre Sebastian */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-7">
            <span className="text-xs tracking-[0.3em] uppercase text-amber-400">
              El fundador
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-secondary">
              Sebastian Esquivel
            </h2>
            <p className="text-secondary/70 leading-relaxed">
              Nací en Ramos Mejía, Zona Oeste. Me recibí de Martillero, Corredor
              y Tasador Público a principios del 2021 y empecé a trabajar de
              forma independiente. En 2023 fundé{" "}
              <span className="text-secondary">
                Sebastian Esquivel Propiedades
              </span>
              . Me sigo capacitando diariamente sobre el mercado inmobiliario y
              las nuevas tecnologías. Actualmente curso el cuarto año de
              Abogacía en la UNLAM.
            </p>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-secondary/40 tracking-wider uppercase">
                Matrícula
              </span>
              <span className="text-secondary/70 text-sm">
                CMCPDJLM 1074 | CUCICBA 9497
              </span>
            </div>
            <Link
              href="/equipo"
              className="inline-flex items-center gap-3 border border-secondary/30 text-secondary hover:border-primary hover:text-primary transition-colors px-7 py-3 text-xs tracking-widest uppercase self-start"
            >
              Conocé al equipo
            </Link>
          </div>

          <div className="border border-primary/20 p-8 bg-primary/5 flex flex-col gap-6">
            <span className="text-xs tracking-widest uppercase text-secondary/60">
              Oficinas
            </span>
            <h3 className="font-serif text-2xl text-secondary">
              Palermo Hollywood
            </h3>
                <p className="text-secondary/70 text-sm leading-relaxed">
              Contamos con oficinas modernas en Palermo Hollywood para darte la
              mayor seguridad posible. Tenemos todo lo necesario para dar el
              mejor servicio.
            </p>
            <address className="not-italic text-secondary/60 text-sm">
              Arévalo 1880, Piso 2 — Palermo, CABA
            </address>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-28 bg-primary">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
              Simplificamos al extremo el proceso de venta de tu hogar.
            </h2>
            <p className="text-white/70 leading-relaxed">
              TE ACOMPAÑAMOS EN TODO EL PROCESO
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-white/80 leading-relaxed">
              Nos encargamos de publicar la propiedad, realizar una estrategia
              de acciones proactivas para concretar la venta, gestionar las
              consultas, precalificar clientes, organizar las visitas, negociar
              el precio de venta y de todo el papeleo y los contratos.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 bg-white text-primary hover:bg-white/90 transition-colors px-8 py-4 text-xs tracking-widest uppercase font-semibold self-start"
            >
              Quiero vender
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <span className="text-xs tracking-[0.3em] uppercase text-amber-400 block mb-4">
              FAQ
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-50">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary/20">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 hover:bg-primary/5 transition-colors">
                <h3 className="font-serif text-lg text-primary mb-3">
                  {faq.question}
                </h3>
            <p className="text-secondary/70 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 border-t border-primary/20">
        <div className="mx-auto max-w-7xl px-6 text-center flex flex-col items-center gap-8">
          <h2 className="font-serif text-4xl md:text-5xl text-secondary max-w-xl">
            ¿Listo para vender tu propiedad?
          </h2>
          <a
            href="https://api.whatsapp.com/send/?phone=5491137775276&text=Hola%20Sebasti%C3%A1n%2C%20me%20interesa%20vender%20mi%20propiedad.%20%C2%BFPodr%C3%ADas%20darme%20m%C3%A1s%20informaci%C3%B3n%3F&type=phone_number&app_absent=0"
            className="inline-flex items-center gap-3 bg-amber-400 text-stone-950 hover:bg-amber-300 transition-colors px-10 py-4 text-xs tracking-widest uppercase font-semibold"
          >
            Escribinos por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
