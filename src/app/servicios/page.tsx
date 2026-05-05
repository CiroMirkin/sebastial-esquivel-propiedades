import Link from "next/link";

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

const portals = ["ZonaProp", "MercadoLibre", "Argenprop"];

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(81,154,207,0.06),_transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <span className="text-xs tracking-[0.3em] uppercase text-primary block mb-6">
            Lo que hacemos
          </span>
          <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl text-secondary mb-6">
            SERVICIOS
          </h1>
          <p className="text-secondary/70 text-lg max-w-xl leading-relaxed">
            Usamos tecnología de vanguardia para vender tu propiedad en menos de
            4 meses, al mejor precio y en el menor tiempo posible.
          </p>
        </div>
      </section>

      {/* Plan Premium */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-secondary mb-5">
                Plan de Comercialización Premium
              </h2>
              <p className="text-secondary/70 leading-relaxed">
                Realizamos procesos transparentes, seguros y eficaces para la
                tranquilidad de todas las partes. Obtené nuestro informe de
                tasación en tiempo récord y descubrí el valor de tu propiedad.
              </p>
            </div>
            <div className="flex flex-col gap-4 border border-primary/20 bg-primary/5 p-8">
              <span className="text-xs tracking-widest uppercase text-secondary/60">
                Portales donde publicamos
              </span>
              {portals.map((portal) => (
                <div
                  key={portal}
                  className="flex items-center gap-3 text-secondary"
                >
                  <span className="w-1.5 h-1.5 bg-primary shrink-0" />
                  <span className="text-sm">{portal}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-primary/20">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-7 flex flex-col gap-3 hover:bg-primary/5 transition-colors group"
              >
                <span className="text-xs text-primary/60 font-mono">
                  {service.id}
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
        </div>
      </section>

      {/* Tasación */}
      <section className="py-24 bg-primary/5 border-t border-b border-primary/20">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-4xl text-secondary">
              ¿Querés saber cuánto vale tu propiedad?
            </h2>
            <p className="text-secondary/70 leading-relaxed">
              Con nuestro informe de tasación tendrás toda la información
              necesaria, tanto de tu propiedad como del contexto actual del
              mercado, para tomar decisiones informadas en conjunto con un agente
              de primerísimo nivel.
            </p>
            <p className="font-serif text-xl text-primary">
              Hagamos que tu propiedad sea la próxima que dibujemos
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 bg-primary text-white hover:bg-primary/90 transition-colors px-8 py-4 text-xs tracking-widest uppercase font-semibold self-start"
            >
              Quiero vender
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <div className="border border-primary/20 bg-white p-8">
              <h3 className="font-serif text-2xl text-secondary mb-4">
                Oficinas en Palermo Hollywood
              </h3>
              <p className="text-secondary/70 text-sm leading-relaxed mb-4">
                Contamos con oficinas modernas en Palermo Hollywood para darte
                la mayor seguridad posible. Tenemos todo lo necesario para dar
                el mejor servicio.
              </p>
              <address className="not-italic text-secondary/60 text-sm">
                Arévalo 1880, Piso 2 — Palermo, CABA
              </address>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
