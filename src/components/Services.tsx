"use client"

import { Reveal } from "./Reveal";

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

export function Services() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-200">
      {services.map((service, i) => (
        <Reveal key={i} delay={i * 0.08}>
          <ServiceCard service={service} index={i} />
        </Reveal>
      ))}
    </div>
  );
}

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  return (
    <div className="h-full bg-white p-7 flex flex-col gap-3">
      <span className="text-md text-primary-500/80 font-mono">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="font-serif text-2xl text-secondary-800">
        {service.title}
      </h3>
      <p className="text-secondary-500 text-lg leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}