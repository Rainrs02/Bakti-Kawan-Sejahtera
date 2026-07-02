'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const GALLERY_ITEMS = [
  { src: '/images/hero/hero-ambulance.jpg', category: 'Ambulance', title: 'Interior ambulance', isTall: true },
  { src: '/images/hero/hero-teknisi.jpeg', category: 'Kantor', title: 'Meja Bundar', isTall: false },
  { src: '/images/services/bed-pasien.jpg', category: 'Alkes', title: 'Bed Pasien', isTall: false },
  { src: '/images/services/cafe-restoran.jpg', category: 'Komersial', title: 'Sofa Cafe', isTall: true },
  { src: '/images/gallery/alk-2.jpg', category: 'Alkes', title: 'Bed Pasien Ekstra', isTall: false },
  { src: '/images/gallery/kom-2.jpg', category: 'Komersial', title: 'Kursi Komersial', isTall: false },
  { src: '/images/gallery/amb-1.jpg', category: 'Ambulance', title: 'Karoseri Ambulance', isTall: false },
  { src: '/images/gallery/kan-1.jpg', category: 'Kantor', title: 'Kursi Kantor', isTall: false },
]

export default function GalleryPreview() {
  return (
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
            <Link
              key={i}
              href="/galeri"
              className={`relative overflow-hidden rounded-2xl group ${
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
            </Link>
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
  )
}
