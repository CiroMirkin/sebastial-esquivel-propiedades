import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Programa de Referidos",
  description:
    "Recibí el 1% de la comisión inmobiliaria si la venta se concreta. Recomendá nuestro servicio y ganá dinero por estar atento. Alcance: Provincia de Buenos Aires y CABA.",
  openGraph: {
    title: "Programa de Referidos — Esquivel Propiedades",
    description:
      "Recibí el 1% de la comisión inmobiliaria si la venta se concreta. Recomendá nuestro servicio y ganá dinero por estar atento.",
  },
  twitter: {
    title: "Programa de Referidos — Esquivel Propiedades",
    description:
      "Recibí el 1% de la comisión inmobiliaria si la venta se concreta. Recomendá nuestro servicio y ganá dinero por estar atento.",
  },
}

const faqs = [
  {
    question: "¿Y cuánto dinero representa?",
    answer:
      "Acá te damos un ejemplo concreto. Supongamos que tenés un amigo/a que quiere mudarse de un monoambiente en Palermo a un dos ambientes. El monoambiente lo tasamos en 100.000 USD y a los dos meses se concreta la operación. Sólo por habernos recomendado a este referido, ganarás USD 1.000.",
  },
  {
    question: "¿Cómo cobro ese dinero?",
    answer:
      "Nuestra oficina está en Palermo, en la calle Arévalo 1880 piso 2. Solo deberás pasar por nuestra oficina a retirarlo. Suscribite al programa, recomendá nuestro servicio y ganá dinero sólo por estar atento.",
  },
  {
    question:
      "¿Si descubro que un amigo ya tiene su propiedad publicada con otra inmobiliaria sirve como referido?",
    answer:
      "Sí, por supuesto que sirve, en tanto y en cuanto ese inmueble no se venda y tu contacto, luego de transcurrido el tiempo de exclusividad (en general 4 meses), acepte cambiar de propuesta y vender con nosotros.",
  },
  {
    question: "¿El programa es para todo el país?",
    answer:
      "El alcance del programa aplica para la Provincia de Buenos Aires y la Ciudad Autónoma de Buenos Aires.",
  },
  {
    question: "¿Si el que necesita vender soy yo, cómo sería?",
    answer:
      "Ganarás de igual forma. Con cualquier inmobiliaria abonarás el 3% + IVA de comisión. Con nosotros ganarás ese 1% + IVA y en caso de que tu proyecto se concrete, abonarás solo el 2% + IVA.",
  },
];

export default function ReferidosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-primary-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(81,154,207,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-primary-600 block mb-6">
              Programa
            </span>
            <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl text-secondary-900 mb-6">
              REFERIDOS
            </h1>
            <p className="text-secondary-600 text-lg max-w-lg leading-relaxed">
              ¿Cómo funciona el esquema de referidos?
            </p>
          </div>
          <div className="border border-primary-300 bg-primary-100/50 p-8">
            <p className="font-serif text-2xl text-primary-700 mb-2">
              Estar atento tiene premio
            </p>
            <p className="text-secondary-600 text-sm">
              Recibís el 1% de la comisión inmobiliaria si la venta se concreta.
            </p>
          </div>
        </div>
      </section>

      {/* Descripción */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-3xl text-secondary-900">
              ¿Cómo funciona?
            </h2>
            <p className="text-secondary-600 leading-relaxed">
              Si tenés una mente observadora y descubrís que alguien de tu
              círculo familiar o de amistades está vendiendo o planea vender una
              propiedad, al recomendar nuestro servicio podés obtener beneficios
              económicos.
            </p>
            <p className="text-secondary-600 leading-relaxed">
              Si al referir nuestro servicio a tu contacto, logramos conseguir
              la venta de esa propiedad y se lleva a cabo,{" "}
              <span className="text-secondary-900 font-medium">
                recibirás el 1% de la comisión inmobiliaria
              </span>{" "}
              basada en el precio de venta.
            </p>

            <div className="grid grid-cols-3 gap-px bg-primary-200 mt-4">
              {[
                { step: "01", label: "Referís a un contacto" },
                { step: "02", label: "Nosotros vendemos la propiedad" },
                { step: "03", label: "Cobrás tu comisión" },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-white p-5 flex flex-col gap-2"
                >
                  <span className="text-xs text-primary-500/80 font-mono">
                    {item.step}
                  </span>
                  <p className="text-secondary-800 text-xs leading-snug">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="https://api.whatsapp.com/send/?phone=5491136118439&text=Hola%2C%20me%20interesa%20sumarme%20al%20programa%20de%20referidos%20de%20Esquivel%20Propiedades.&type=phone_number&app_absent=0"
              className="inline-flex items-center gap-3 bg-primary-600 text-white hover:bg-primary-700 transition-colors px-8 py-4 text-xs tracking-widest uppercase font-semibold self-start"
            >
              Quiero sumarme
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="border border-primary-200 bg-primary-50 p-8 flex flex-col gap-4">
            <span className="text-xs tracking-widest uppercase text-secondary-500">
              Ejemplo concreto
            </span>
            <p className="font-serif text-2xl text-secondary-900">
              Un monoambiente en Palermo
            </p>
            <div className="flex flex-col gap-3 pt-2">
              {[
                { label: "Precio de venta", value: "USD 100.000" },
                { label: "Tu comisión (1%)", value: "USD 1.000" },
                { label: "Plazo estimado", value: "2 meses" },
                { label: "Alcance del programa", value: "Buenos Aires + CABA" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b border-primary-200 pb-3"
                >
                  <span className="text-secondary-500 text-sm">{item.label}</span>
                  <span className="text-primary-600 text-sm font-medium">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-serif text-4xl text-secondary-900 mb-12">
            Preguntas frecuentes
          </h2>
          <div className="flex flex-col divide-y divide-primary-200">
            {faqs.map((faq, i) => (
              <div key={i} className="py-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                <h3 className="font-serif text-lg text-primary-600">
                  {faq.question}
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto referidos */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-4xl text-secondary-900">Contacto</h2>
            <p className="text-secondary-600 text-sm">
              Ayudame a ayudar a otras familias
            </p>
            <p className="text-secondary-500 text-sm leading-relaxed">
              Trabajemos en conjunto generando un beneficio para todas las
              partes.
            </p>
            <div className="flex flex-col gap-3 pt-4">
              <a
                href="https://api.whatsapp.com/send/?phone=5491136118439&text=Hola%2C%20me%20interesa%20sumarme%20al%20programa%20de%20referidos.&type=phone_number&app_absent=0"
                className="flex items-center gap-3 text-secondary-800 hover:text-primary-600 transition-colors text-sm"
              >
                <span className="w-8 h-8 border border-secondary-200 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                +54 11 3611-8439
              </a>
              <a
                href="mailto:sebastianesquivel@deinmobiliarios.com"
                className="flex items-center gap-3 text-secondary-800 hover:text-primary-600 transition-colors text-sm break-all"
              >
                <span className="w-8 h-8 border border-secondary-200 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                sebastianesquivel@deinmobiliarios.com
              </a>
              <p className="flex items-center gap-3 text-secondary-500 text-sm">
                <span className="w-8 h-8 border border-secondary-200 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                Arévalo 1880, Palermo, Capital Federal
              </p>
            </div>
          </div>

          <form className="flex flex-col gap-4 bg-primary-50/50 p-8 rounded-xl border border-primary-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-widest uppercase text-secondary-500">
                  Nombre y Apellido
                </label>
                <input
                  type="text"
                  className="bg-white border border-secondary-200 focus:border-primary-500 outline-none text-secondary-800 px-4 py-3 text-sm transition-colors placeholder:text-secondary-400"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-widest uppercase text-secondary-500">
                  Email
                </label>
                <input
                  type="email"
                  className="bg-white border border-secondary-200 focus:border-primary-500 outline-none text-secondary-800 px-4 py-3 text-sm transition-colors placeholder:text-secondary-400"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-widest uppercase text-secondary-500">
                  Prefijo
                </label>
                <input
                  type="text"
                  className="bg-white border border-secondary-200 focus:border-primary-500 outline-none text-secondary-800 px-4 py-3 text-sm transition-colors placeholder:text-secondary-400"
                  placeholder="+54"
                />
              </div>
              <div className="col-span-2 flex flex-col gap-1.5">
                <label className="text-xs tracking-widest uppercase text-secondary-500">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="bg-white border border-secondary-200 focus:border-primary-500 outline-none text-secondary-800 px-4 py-3 text-sm transition-colors placeholder:text-secondary-400"
                  placeholder="11 1234-5678"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-primary-600 text-white hover:bg-primary-700 transition-colors px-8 py-4 text-xs tracking-widest uppercase font-semibold self-start mt-2"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
