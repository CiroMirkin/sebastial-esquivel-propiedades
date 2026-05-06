import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { WhatsAppButton } from "@/components";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Esquivel Propiedades",
  description: "Especialistas en venta de propiedades en Zona Oeste y CABA.",
};

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/equipo", label: "Equipo" },
  { href: "/servicios", label: "Servicios" },
  { href: "/referidos", label: "Programa de Referidos" },
  {
    href: "https://www.zonaprop.com.ar/inmobiliarias/sebastian-esquivel-propiedades_30597191-inmuebles.html",
    label: "Propiedades",
    external: true,
  },
  { href: "/contacto", label: "Contacto" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable}`}>
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      <body className="bg-white text-secondary font-sans antialiased">
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-primary/90 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
            <Link href="/" className="flex items-center group">
              <img src="/logo-x.avif" alt="Esquivel Propiedades" className="h-10 w-auto transition-opacity group-hover:opacity-80" />
            </Link>

            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-widest uppercase text-white font-medium hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs tracking-widest uppercase text-white font-medium hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <Link href="/contacto"
              className="hidden md:hidden lg:inline-flex items-center gap-2 border border-white/60 text-white hover:bg-white hover:text-primary transition-all px-4 py-2 text-xs tracking-widest uppercase"
            >
              Vender
            </Link>

            <details className="md:hidden group">
                <summary className="list-none cursor-pointer p-2 text-white hover:text-white/80 transition-colors">
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                  <line x1="0" y1="1" x2="22" y2="1" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="0" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="0" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </summary>
              <div className="absolute top-16 left-0 right-0 bg-primary border-b border-white/20 px-6 py-6 flex flex-col gap-5">
                {navLinks.map((link) =>
                  link.external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs tracking-widest uppercase text-white font-medium hover:text-white/80 transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-xs tracking-widest uppercase text-white font-medium hover:text-white/80 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            </details>
          </div>
        </header>

        <main className="pt-16">{children}</main>

        <footer className="border-t border-secondary-700 bg-secondary-900">
          <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-4">
              <span className="font-serif text-primary-400 text-lg tracking-widest uppercase">
                Esquivel Propiedades
              </span>
              <p className="text-secondary-300 text-sm leading-relaxed">
                Especialistas en venta de propiedades en Zona Oeste y CABA con
                un plan de comercialización premium.
              </p>
              <p className="text-secondary-500 text-xs">
                CMCPDJLM 1074 | CUCICBA 9497
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs tracking-widest uppercase text-secondary-400 mb-1">
                Navegación
              </span>
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-secondary-300 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-secondary-300 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-xs tracking-widest uppercase text-secondary-400 mb-1">
                Contacto
              </span>
              <a
                href="https://api.whatsapp.com/send/?phone=5491137775276&text=Hola%20Sebasti%C3%A1n%2C%20me%20interesa%20vender%20mi%20propiedad.%20%C2%BFPodr%C3%ADas%20darme%20m%C3%A1s%20informaci%C3%B3n%3F&type=phone_number&app_absent=0"
                className="text-sm text-secondary-300 hover:text-primary-400 transition-colors"
              >
                +54 11 3777-5276
              </a>
              <a
                href="mailto:sebastianesquivel@deinmobiliarios.com"
                className="text-sm text-secondary-300 hover:text-primary-400 transition-colors break-all"
              >
                sebastianesquivel@deinmobiliarios.com
              </a>
              <p className="text-sm text-secondary-400">
                Arévalo 1880, Palermo, CABA
              </p>
              <div className="flex items-center gap-4 mt-2">
                <a
                  href="https://www.instagram.com/s.esquivelpropiedades/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-400 hover:text-primary-400 transition-colors"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@sebastianesquivel9252/featured"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-400 hover:text-primary-400 transition-colors"
                  aria-label="YouTube"
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-secondary-800 py-5 text-center text-xs text-secondary-500 tracking-wider">
            © {new Date().getFullYear()} Sebastian Esquivel Propiedades — Todos los derechos reservados
          </div>
        </footer>
        <WhatsAppButton />
      </body>
    </html>
  );
}
