"use client"

import { Reveal } from "./Reveal";
import { motion, useAnimation } from "motion/react";

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
  const controls = useAnimation();

  return (
    <div
      className="h-full"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => controls.start({ rotateX: 180 })}
      onMouseLeave={() => controls.start({ rotateX: 0 })}
    >
      <motion.div
        className="relative h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={controls}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      >
        <div
          className="h-full bg-white p-7 flex flex-col gap-3"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <span className="text-md text-primary-500/80 font-mono">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-serif text-2xl text-secondary-800">
            {service.title}
          </h3>
          <p className="text-secondary-500 text-lg leading-relaxed invisible">
            {service.description}
          </p>
        </div>

        <div
          className="absolute inset-0 bg-primary-600 p-7 flex flex-col justify-center gap-4"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateX(180deg)",
          }}
        >
          <h3 className="font-serif text-2xl text-white">
            {service.title}
          </h3>
          <p className="text-white/80 text-lg leading-relaxed">
            {service.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}