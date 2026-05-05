export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-stone-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(180,130,50,0.1),_transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <span className="text-xs tracking-[0.3em] uppercase text-amber-400 block mb-6">
            Hablemos
          </span>
          <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl text-stone-50 mb-6">
            Contacto
          </h1>
          <p className="text-stone-400 text-lg max-w-lg leading-relaxed">
            Vendé tu propiedad con un servicio de excelencia. Recibí una
            atención personalizada contactándote con nuestro equipo.
          </p>
        </div>
      </section>

      {/* Contacto principal */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <a
                href="https://api.whatsapp.com/send/?phone=5491137775276&text=Hola%20Sebasti%C3%A1n%2C%20me%20interesa%20vender%20mi%20propiedad.%20%C2%BFPodr%C3%ADas%20darme%20m%C3%A1s%20informaci%C3%B3n%3F&type=phone_number&app_absent=0"
                className="group flex items-center gap-5 border border-stone-800 hover:border-amber-400/40 bg-stone-900/30 hover:bg-stone-900/60 transition-all p-6"
              >
                <div className="w-12 h-12 border border-stone-700 group-hover:border-amber-400/40 transition-colors flex items-center justify-center text-stone-400 group-hover:text-amber-400 shrink-0">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-stone-500 mb-1">
                    WhatsApp
                  </p>
                  <p className="text-stone-200 group-hover:text-amber-400 transition-colors font-medium">
                    +54 11 3777-5276
                  </p>
                </div>
              </a>

              <a
                href="mailto:sebastianesquivel@deinmobiliarios.com"
                className="group flex items-center gap-5 border border-stone-800 hover:border-amber-400/40 bg-stone-900/30 hover:bg-stone-900/60 transition-all p-6"
              >
                <div className="w-12 h-12 border border-stone-700 group-hover:border-amber-400/40 transition-colors flex items-center justify-center text-stone-400 group-hover:text-amber-400 shrink-0">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-stone-500 mb-1">
                    Email
                  </p>
                  <p className="text-stone-200 group-hover:text-amber-400 transition-colors font-medium break-all">
                    sebastianesquivel@deinmobiliarios.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-5 border border-stone-800 bg-stone-900/30 p-6">
                <div className="w-12 h-12 border border-stone-700 flex items-center justify-center text-stone-400 shrink-0">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-stone-500 mb-1">
                    Oficina
                  </p>
                  <address className="not-italic text-stone-200 font-medium text-sm">
                    Arévalo 1880, Piso 2 — Palermo, CABA
                  </address>
                </div>
              </div>
            </div>

            <div className="border border-stone-800 bg-stone-900/20 p-6">
              <p className="text-stone-500 text-xs leading-relaxed">
                <span className="text-stone-400 font-medium">
                  Sebastian Esquivel Propiedades
                </span>{" "}
                — CMCPDJLM 1074 | CUCICBA 9497. Adheridos a la red
                Deinmobiliarios.
              </p>
            </div>
          </div>

          <form className="flex flex-col gap-5">
            <h2 className="font-serif text-3xl text-stone-50 mb-2">
              Envianos un mensaje
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-widest uppercase text-stone-500">
                  Nombre y Apellido
                </label>
                <input
                  type="text"
                  className="bg-stone-900 border border-stone-700 focus:border-amber-400/60 outline-none text-stone-200 px-4 py-3 text-sm transition-colors placeholder:text-stone-600"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-widest uppercase text-stone-500">
                  Email
                </label>
                <input
                  type="email"
                  className="bg-stone-900 border border-stone-700 focus:border-amber-400/60 outline-none text-stone-200 px-4 py-3 text-sm transition-colors placeholder:text-stone-600"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs tracking-widest uppercase text-stone-500">
                  Prefijo
                </label>
                <input
                  type="text"
                  className="bg-stone-900 border border-stone-700 focus:border-amber-400/60 outline-none text-stone-200 px-4 py-3 text-sm transition-colors placeholder:text-stone-600"
                  placeholder="+54"
                />
              </div>
              <div className="col-span-2 flex flex-col gap-1.5">
                <label className="text-xs tracking-widest uppercase text-stone-500">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="bg-stone-900 border border-stone-700 focus:border-amber-400/60 outline-none text-stone-200 px-4 py-3 text-sm transition-colors placeholder:text-stone-600"
                  placeholder="11 1234-5678"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs tracking-widest uppercase text-stone-500">
                Mensaje
              </label>
              <textarea
                rows={4}
                className="bg-stone-900 border border-stone-700 focus:border-amber-400/60 outline-none text-stone-200 px-4 py-3 text-sm transition-colors placeholder:text-stone-600 resize-none"
                placeholder="Contanos sobre tu propiedad..."
              />
            </div>
            <button
              type="submit"
              className="bg-amber-400 text-stone-950 hover:bg-amber-300 transition-colors px-8 py-4 text-xs tracking-widest uppercase font-semibold self-start"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
