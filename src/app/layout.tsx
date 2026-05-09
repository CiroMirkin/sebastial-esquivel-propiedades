import type { Metadata } from "next"
import { Playfair_Display, DM_Sans } from "next/font/google"
import "./globals.css"
import { Navbar, Footer, WhatsAppButton } from "@/components"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    template: "%s — Esquivel Propiedades",
    default: "Esquivel Propiedades",
  },
  description: "Especialistas en venta de propiedades en Zona Oeste y CABA.",
  metadataBase: new URL("https://www.esquivelpropiedades.com.ar"),
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Sebastian Esquivel Propiedades",
    title: "Esquivel Propiedades",
    description: "Especialistas en venta de propiedades en Zona Oeste y CABA.",
    images: [
      {
        url: "/team/sebastian-esquivel-CEO.avif",
        width: 1200,
        height: 630,
        alt: "Sebastian Esquivel — CEO de Esquivel Propiedades",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Esquivel Propiedades",
    description: "Especialistas en venta de propiedades en Zona Oeste y CABA.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className="bg-white text-secondary font-sans antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}