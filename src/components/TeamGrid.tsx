import Image from "next/image"
import { Reveal } from "./Reveal"

const team = [
  {
    name: "Sebastián Esquivel",
    role: "CEO | Martillero, Corredor y Tasador Público",
    photo: "/team/sebastian-esquivel-CEO.avif",
  },
  {
    name: "Nicole Amaya",
    role: "Coordinadora Comercial",
    photo: "/team/Nicole-Amaya-coordinadora-comercial.avif",
  },
  {
    name: "Lautaro Rocha",
    role: "Coordinador Comercial",
    photo: "/team/Lautaro-Rocha-coordinador-comercial.avif",
  },
  {
    name: "Laura Fioroli",
    role: "Coordinadora Comercial",
    photo: "/team/Laur-Fioroli-coordinadora-comercial.avif",
  },
  {
    name: "Aaron Linkweiler",
    role: "Coordinador Comercial",
    photo: "/team/Aaron-Linkweiler-coordinador-comercial.avif",
  },
]

export function TeamGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
      {team.map((member) => (
        <Reveal key={member.name} className="h-full">
          <div className="h-full bg-white flex flex-col items-center text-center transition-colors group">
            <Image
              src={member.photo}
              alt={member.name}
              width={400}
              height={500}
              className="w-full object-cover border-b border-primary-200 transition-colors"
            />
            <div className="px-4 py-6">
              <p className="text-secondary-800 font-semibold text-base mb-1">
                {member.name}
              </p>
              <p className="text-secondary-500 text-sm leading-snug">
                {member.role}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}