'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const CATEGORIES = [
  {
    id: 'alkes',
    icon: '🏥',
    label: 'Alat Kesehatan',
    description: 'Rumah Sakit, Klinik, Puskesmas, Laboratorium',
    count: 10,
    href: '/layanan/kategori/alkes',
    imageSrc: '/images/services/troli-emergency-cat.webp',
    accent: '#F97316',
    featured: false,
    services: ['Bed Pasien', 'Meja Operasi', 'Troli Emergency', 'Nurse Station'],
  },
  {
    id: 'kantor',
    icon: '🏢',
    label: 'Furniture Kantor',
    description: 'Perkantoran, Korporat & Institusi',
    count: 5,
    href: '/layanan/kategori/kantor',
    imageSrc: '/images/services/sofa-kursi-kantor.webp',
    accent: '#2B2B2B',
    featured: false,
    services: ['Sofa Kantor', 'Kursi Ergonomis', 'Meja Meeting', 'Reception Desk'],
  },
  {
    id: 'komersial',
    icon: '☕',
    label: 'Furniture Komersial',
    description: 'Cafe, Restoran, Hotel & Retail',
    count: 4,
    href: '/layanan/kategori/komersial',
    imageSrc: '/images/services/cafe-restoran.webp',
    accent: '#171717',
    featured: false,
    services: ['Sofa Cafe', 'Booth Seating', 'Furniture Hotel', 'Display Retail'],
  },
]

export default function ServicesPreview() {
  return (
    <section id="layanan-preview" className="section-padding bg-bg">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-lg">
            <div className="section-label mb-4">Our Services</div>
            <h2 className="text-display-xl text-primary">
              Tiga Bidang Utama{' '}
              <span className="gradient-text">Layanan Kami</span>
            </h2>
          </div>
          <div className="flex-shrink-0">
            <Link href="/layanan" className="btn btn-secondary group">
              Semua Layanan
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Cards Grid — Asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className={`card group relative overflow-hidden ${
                cat.featured ? 'lg:row-span-1' : ''
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden ${
                  cat.featured ? 'h-56 md:h-64' : 'h-40 md:h-48'
                }`}
              >
                <Image
                  src={cat.imageSrc}
                  alt={cat.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {/* Icon badge */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-xl shadow-md">
                  {cat.icon}
                </div>

                {/* Count badge */}
                <div className="absolute top-4 right-4">
                  <span className="badge badge-dark text-xs">
                    {cat.count} Layanan
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-primary mb-1 group-hover:text-accent transition-colors">
                  {cat.label}
                </h3>
                <p className="text-sm text-secondary mb-4">{cat.description}</p>

                {/* Service tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cat.services.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full bg-bg-section text-secondary font-medium border border-border"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                  Lihat Layanan
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: cat.accent }}
              />
            </Link>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted">
            Tidak menemukan layanan yang dicari?{' '}
            <Link href="/konsultasi" className="text-accent font-semibold hover:underline">
              Konsultasi langsung dengan tim kami →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
