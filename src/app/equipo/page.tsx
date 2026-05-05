import Link from "next/link";

const team = [
  {
    name: "Sebastián Esquivel",
    role: "CEO | Martillero, Corredor y Tasador Público",
    initials: "SE",
  },
  {
    name: "Nicole Amaya",
    role: "Coordinadora Comercial",
    initials: "NA",
  },
  {
    name: "Lautaro Rocha",
    role: "Coordinador Comercial",
    initials: "LR",
  },
  {
    name: "Laura Fioroli",
    role: "Coordinadora Comercial",
    initials: "LF",
  },
  {
    name: "Aaron Linkweiler",
    role: "Coordinador Comercial",
    initials: "AL",
  },
];

export default function EquipoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-stone-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(180,130,50,0.1),_transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <span className="text-xs tracking-[0.3em] uppercase text-amber-400 block mb-6">
            El equipo
          </span>
          <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl text-stone-50 mb-6">
            EQUIPO
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl leading-relaxed">
            En Sebastian Esquivel Propiedades estamos comprometidos en fomentar
            el desarrollo profesional de futuros inmobiliarios, brindándoles
            acceso a recursos de capacitación y oportunidades de formación
            continua.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-stone-800">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-stone-950 p-8 flex flex-col items-center text-center gap-4 hover:bg-stone-900 transition-colors group"
              >
                <div className="w-20 h-20 bg-stone-800 border border-stone-700 group-hover:border-amber-400/40 transition-colors flex items-center justify-center font-serif text-xl text-amber-400">
                  {member.initials}
                </div>
                <div>
                  <p className="text-stone-100 font-medium text-sm mb-1">
                    {member.name}
                  </p>
                  <p className="text-stone-500 text-xs leading-snug">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sumate */}
      <section className="py-24 bg-stone-900/30 border-t border-b border-stone-800">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-4">
              {[
                "¿Trabajas actualmente en el rubro inmobiliario y crees que estás para más?",
                "¿Te sentís sólo y en un mercado oxidado?",
                "¿Querés crecer profesionalmente, ganar más y disfrutar más del trabajo?",
              ].map((question, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-amber-400 mt-0.5 shrink-0">—</span>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    {question}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-4xl text-stone-50">
              Trabajemos juntos
            </h2>
            <p className="text-stone-400 leading-relaxed text-sm">
              Hacemos que tu cartera de propiedades tenga el máximo nivel de
              destaque posible. Ofrecemos capacitación continua, acceso a
              información privilegiada del mercado y oficinas modernas
              totalmente equipadas.
            </p>
            <p className="text-stone-400 leading-relaxed text-sm">
              Si te ves alineado con nuestros valores y querés vender más
              ayudado por soporte en procesos y tecnologías de vanguardia,
              mientras elevás tu marca personal trabajando con la nueva
              generación de inmobiliarios, postulate.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=5491136118439&text=Hola%2C%20me%20interesa%20sumarme%20al%20equipo%20de%20Esquivel%20Propiedades.&type=phone_number&app_absent=0"
              className="inline-flex items-center gap-3 bg-amber-400 text-stone-950 hover:bg-amber-300 transition-colors px-8 py-4 text-xs tracking-widest uppercase font-semibold self-start"
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
