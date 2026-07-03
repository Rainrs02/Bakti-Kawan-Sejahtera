'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  return (
    <>
      <div className="masonry-grid">
        {images.map((img, i) => (
          <div
            key={i}
            className="masonry-item group relative overflow-hidden rounded-2xl cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <div className={`relative w-full ${i % 3 === 0 ? 'h-80' : i % 3 === 1 ? 'h-56' : 'h-64'} overflow-hidden`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute top-3 left-3">
                <span className="badge badge-dark text-xs">{img.category}</span>
              </div>
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-semibold">{img.alt}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/80 transition-colors backdrop-blur-md"
            >
              <X size={24} />
            </button>
            <div className="relative w-full h-full min-h-[50vh] md:min-h-[80vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
