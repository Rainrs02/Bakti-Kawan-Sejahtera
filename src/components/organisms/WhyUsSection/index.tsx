'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  Award, Shield, Clock, Wrench, Star, Users, Package, Headphones
} from 'lucide-react'

const FEATURES = [
  { icon: Award, title: 'Teknisi Bersertifikasi', desc: 'Terlatih & berpengalaman 10+ tahun di bidangnya' },
  { icon: Package, title: 'Spare Part OEM', desc: 'Suku cadang original berkualitas tinggi' },
  { icon: Shield, title: 'Bergaransi', desc: 'Garansi 3-12 bulan untuk setiap pekerjaan' },
  { icon: Clock, title: 'Fast Response', desc: 'Respons cepat dalam 15 menit, penjadwalan survey cepat' },
  { icon: Wrench, title: '20+ Tahun Pengalaman', desc: 'Dipercaya ribuan fasilitas kesehatan & korporat' },
  { icon: Headphones, title: 'Support 24/7', desc: 'Tim kami siap membantu kapan pun Anda butuhkan' },
]

const BIG_STATS = [
  { value: '5.000+', label: 'Proyek Selesai', desc: 'Di seluruh Indonesia' },
  { value: '20+', label: 'Tahun Pengalaman', desc: 'Sejak 2004' },
  { value: '150+', label: 'Teknisi Aktif', desc: 'Terlatih & tersertifikasi' },
  { value: '98%', label: 'Kepuasan Klien', desc: 'Berdasarkan survei internal' },
]

function StatBox({ value, label, desc }: { value: string; label: string; desc: string }) {
  return (
    <div className="p-6 rounded-2xl border border-border bg-white hover:border-accent/30 hover:shadow-md transition-all group">
      <div className="font-display font-extrabold text-4xl md:text-5xl text-primary group-hover:text-accent transition-colors mb-1 leading-none">
        {value}
      </div>
      <div className="font-semibold text-primary text-sm mb-0.5">{label}</div>
      <div className="text-muted text-xs">{desc}</div>
    </div>
  )
}

export default function WhyUsSection() {
  return (
    <section id="keunggulan" className="section-padding bg-bg overflow-hidden">
      <div className="container-main">
        {/* Top: Label + Heading */}
        <div className="max-w-2xl mb-16">
          <div className="section-label mb-4">Mengapa Kami?</div>
          <h2 className="text-display-xl text-primary">
            Mengapa Ribuan Rumah Sakit &{' '}
            <span className="gradient-text">Perusahaan Mempercayai Kami?</span>
          </h2>
        </div>

        {/* Main Grid: Broken layout */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left: Stats 2x2 grid */}
          <div className="lg:col-span-1 grid grid-cols-2 gap-4 content-start">
            {BIG_STATS.map((s) => (
              <StatBox key={s.label} {...s} />
            ))}
          </div>

          {/* Center: Team photo + quote */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="relative rounded-3xl overflow-hidden flex-1 min-h-64">
              <Image
                src="/images/team/team-photo.jpeg"
                alt="Tim teknisi profesional Bakti Kawan Service"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-white font-display font-bold text-lg leading-tight">
                  Tim Profesional Kami
                </div>
                <div className="text-white/90 text-sm mt-1">
                  150+ teknisi bersertifikasi siap melayani
                </div>
              </div>
            </div>

            {/* Testimonial quote */}
            <div className="bg-accent text-white rounded-2xl p-5">
              <div className="text-3xl font-serif mb-2 opacity-60">"</div>
              <p className="text-sm leading-relaxed mb-3 font-medium">
                Bakti Kawan Service adalah mitra terpercaya kami. Respons cepat, teknisi profesional,
                dan hasil pekerjaan selalu memuaskan.
              </p>
              <div className="text-xs text-white/90 font-semibold">
                — Dr. Ahmad, RS Pusat Jakarta
              </div>
            </div>
          </div>

          {/* Right: Feature list */}
          <div className="lg:col-span-1 space-y-3">
            <div className="mb-6 p-5 rounded-2xl bg-primary text-white">
              <div className="text-white/80 text-xs uppercase tracking-wider font-semibold mb-2">Komitmen Kami</div>
              <p className="text-white text-sm leading-relaxed">
                Setiap pekerjaan kami lakukan dengan standar kualitas tertinggi. Tidak selesai
                sebelum Anda benar-benar puas.
              </p>
            </div>
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-4 p-4 rounded-2xl border border-border bg-white hover:border-accent/20 hover:bg-accent-light/30 transition-all group cursor-default"
              >
                <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                  <Icon size={16} className="text-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-semibold text-primary text-sm">{title}</div>
                  <div className="text-secondary text-xs mt-0.5">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
