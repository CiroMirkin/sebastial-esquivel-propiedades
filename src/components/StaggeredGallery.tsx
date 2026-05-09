import Image from "next/image"
import sharp from "sharp"
import path from "path"
import { Reveal } from "./Reveal"

interface StaggeredImage {
  src: string
  alt: string
}

interface ResolvedImage extends StaggeredImage {
  width: number
  height: number
}

interface StaggeredGalleryProps {
  images: StaggeredImage[]
}

async function resolveImages(images: StaggeredImage[]): Promise<ResolvedImage[]> {
  return Promise.all(
    images.map(async (img) => {
      const filePath = path.join(process.cwd(), "public", img.src)
      const metadata = await sharp(filePath).metadata()
      return {
        ...img,
        width: metadata.width ?? 800,
        height: metadata.height ?? 600,
      }
    })
  )
}

export async function StaggeredGallery({ images }: StaggeredGalleryProps) {
  const resolved = await resolveImages(images)
  const mid = Math.ceil(resolved.length / 2)
  const left = resolved.slice(0, mid)
  const right = resolved.slice(mid)

  const renderImage = (img: ResolvedImage) => (
    <Image
      key={img.src}
      src={img.src}
      alt={img.alt}
      width={img.width}
      height={img.height}
      className="w-full h-auto object-cover rounded-lg shadow-md"
    />
  )

  return (
    <Reveal>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          {left.map(renderImage)}
        </div>
        <div className="space-y-4 pt-8">
          {right.map(renderImage)}
        </div>
      </div>
    </Reveal>
  )
}