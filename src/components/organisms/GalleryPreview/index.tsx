'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, X } from 'lucide-react'

const GALLERY_ITEMS = [
  { src: '/images/hero/hero-ambulance.webp', category: 'Ambulance', title: 'Interior ambulance', isTall: true },
  { src: '/images/gallery/cafe/Foto Cafe (2).webp', category: 'Komersial', title: 'Meja Cafe', isTall: false },
  { src: '/images/services/bed-pasien.webp', category: 'Alkes', title: 'Bed Pasien', isTall: false },
  { src: '/images/gallery/cafe/Foto Cafe (3).webp', category: 'Komersial', title: 'Sofa Booth Cafe', isTall: true },
  { src: '/images/gallery/alk-2.webp', category: 'Alkes', title: 'Bed Pasien Ekstra', isTall: false },
  { src: '/images/gallery/kom-2.webp', category: 'Komersial', title: 'Kursi dan Meja Cafe', isTall: false },
  { src: '/images/gallery/amb-1.webp', category: 'Ambulance', title: 'Karoseri Ambulance', isTall: false },
  { src: '/images/gallery/kan-1.webp', category: 'Kantor', title: 'Reception Desk', isTall: false },
  { src: '/images/gallery/produksi/Foto Teknisi (5).webp', category: 'Teknisi', title: 'Proses Pengerjaan', isTall: false },
  { src: '/images/gallery/produksi/Foto Teknisi (9).webp', category: 'Teknisi', title: 'Proses Detail', isTall: false },
]

export default function GalleryPreview() {
  const [selectedImage, setSelectedImage] = useState<{src: string, title: string} | null>(null)

  return (
    <>
      <section id="galeri-preview" className="section-padding bg-bg">
        <div className="container-main">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
            <div>
              <div className="section-label mb-4">Portfolio Kami</div>
              <h2 className="text-display-xl text-primary">
                Hasil Kerja{' '}
                <span className="gradient-text">Berbicara Sendiri</span>
              </h2>
              <p className="text-secondary mt-3 max-w-lg">
                Ratusan proyek berhasil diselesaikan. Dari bed pasien hingga furniture komersial premium.
              </p>
            </div>
            <Link href="/galeri" className="btn btn-secondary flex-shrink-0 group">
              Lihat Semua
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={i}
                role="button"
                onClick={() => setSelectedImage({ src: item.src, title: item.title })}
                className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                  item.isTall ? 'row-span-2 col-span-1' : 'col-span-1'
                }`}
              >
                <div className={`w-full ${
                  item.isTall ? 'h-full min-h-[400px]' : 'h-48 md:h-56'
                }`}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  
                  {/* Top-left category badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] sm:text-xs font-bold text-accent border border-accent bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* Bottom-left title */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="text-white text-xs sm:text-sm font-semibold drop-shadow-md">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom stats strip */}
          <div className="mt-10 p-6 rounded-3xl bg-bg-section border border-border flex flex-wrap items-center justify-between gap-6">
            {[
              { num: '500+', label: 'Foto Hasil Kerja' },
              { num: '6', label: 'Kategori Layanan' },
              { num: '98%', label: 'Klien Puas' },
              { num: 'Sebelum & Sesudah', label: 'Dokumentasi Lengkap' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="font-display font-extrabold text-2xl text-primary">{item.num}</div>
                <div className="text-sm text-muted">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
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
                alt={selectedImage.title}
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
