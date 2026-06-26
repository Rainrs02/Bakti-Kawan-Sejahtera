'use client'

import Link from 'next/link'
import { MapPin, Zap, Globe, Clock } from 'lucide-react'
import IndonesiaMap from './IndonesiaMap'

const JABODETABEK = ['Jakarta', 'Bogor', 'Depok', 'Tangerang', 'Bekasi']
const OTHER_CITIES = [
  'Bandung', 'Surabaya', 'Medan', 'Semarang', 'Makassar',
  'Yogyakarta', 'Palembang', 'Pekanbaru', 'Balikpapan', 'Manado',
  'Denpasar', 'Banjarmasin', 'Pontianak', 'Ambon', 'Jayapura'
]

const COVERAGE_FEATURES = [
  {
    icon: Zap,
    title: 'Fast Response Jabodetabek',
    desc: 'Survey cepat & fleksibel, respons dalam 15 menit, teknisi siap seharian',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: Globe,
    title: 'Cakupan Nasional',
    desc: 'Survey online, koordinasi mitra teknisi lokal di 34 provinsi',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: Clock,
    title: 'Emergency 24/7',
    desc: 'Layanan darurat untuk fasilitas kesehatan kapan pun dibutuhkan',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
]

export default function AreaLayanan() {
  return (
    <section id="area-layanan" className="section-padding bg-bg-section">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Map */}
          <div>
            <div className="section-label mb-4">Area Layanan</div>
            <h2 className="text-display-xl text-primary mb-4">
              Berbasis Jabodetabek,{' '}
              <span className="gradient-text">Melayani Seluruh Indonesia</span>
            </h2>
            <p className="text-secondary leading-relaxed mb-8">
              Pusat operasional kami berada di wilayah Jabodetabek dengan tim teknisi yang siap
              fast response. Kami juga melayani proyek di seluruh Indonesia melalui sistem
              koordinasi yang terintegrasi.
            </p>

            {/* Map SVG */}
            <div className="bg-white rounded-3xl border border-border overflow-hidden shadow-md">
              <IndonesiaMap />
            </div>
          </div>

          {/* Right: Coverage details */}
          <div>
            {/* Coverage features */}
            <div className="space-y-4 mb-8">
              {COVERAGE_FEATURES.map(({ icon: Icon, title, desc, color, bg }) => (
                <div key={title} className="flex gap-4 items-start p-4 rounded-2xl bg-white border border-border hover:border-accent/20 hover:shadow-md transition-all">
                  <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={18} className={color} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary text-sm mb-0.5">{title}</h3>
                    <p className="text-secondary text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Jabodetabek cities */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm font-bold text-primary uppercase tracking-wider">
                  Fast Response Area
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {JABODETABEK.map((city) => (
                  <span key={city} className="px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20">
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Other cities */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-border" />
                <span className="text-sm font-bold text-secondary uppercase tracking-wider">
                  Kota Lainnya
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {OTHER_CITIES.map((city) => (
                  <span key={city} className="px-3 py-1.5 rounded-full bg-bg-section text-secondary text-sm border border-border">
                    {city}
                  </span>
                ))}
                <span className="px-3 py-1.5 rounded-full bg-bg-section text-muted text-sm border border-border">
                  + Seluruh Indonesia
                </span>
              </div>
            </div>

            <Link href="/konsultasi" className="btn btn-primary btn-lg w-full sm:w-auto glow-orange-sm">
              <MapPin size={18} />
              Tanyakan Layanan di Kota Anda
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
