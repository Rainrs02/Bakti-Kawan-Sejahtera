'use client'

import { Phone, MapPin, ClipboardList, Wrench, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

const STEPS = [
  {
    number: '01',
    icon: Phone,
    title: 'Hubungi Kami',
    desc: 'Hubungi via WhatsApp, telepon, atau form konsultasi. Tim kami merespons dalam 15 menit.',
    highlight: 'Respons 15 menit',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Survey Gratis',
    desc: 'Teknisi kami datang ke lokasi untuk survey dan diagnosa akurat. Gratis tanpa syarat.',
    highlight: 'Respon Cepat Jabodetabek',
  },
  {
    number: '03',
    icon: ClipboardList,
    title: 'Penawaran Transparan',
    desc: 'Estimasi biaya detail dan transparan. Tidak ada biaya tersembunyi. Anda putuskan.',
    highlight: 'Harga Terbuka',
  },
  {
    number: '04',
    icon: Wrench,
    title: 'Perbaikan Profesional',
    desc: 'Teknisi bersertifikasi mengerjakan dengan spare part berkualitas dan peralatan modern.',
    highlight: 'Spare Part OEM',
  },
  {
    number: '05',
    icon: ShieldCheck,
    title: 'Bergaransi',
    desc: 'Serah terima dengan garansi 3–12 bulan. Kepuasan Anda jaminan kami.',
    highlight: 'Garansi 3–12 Bln',
  },
]

export default function ProseKerja() {
  return (
    <section id="proses-kerja" className="section-padding bg-bg-darker relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 industrial-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-darker via-secondary to-bg-darker" />

      <div className="container-main relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-5">
            Proses Kerja
          </div>
          <h2 className="text-display-xl text-white mb-4">
            Bagaimana Kami{' '}
            <span className="gradient-text">Bekerja untuk Anda?</span>
          </h2>
          <p className="text-white/90 text-lg">
            Proses sederhana, transparan, dan berorientasi pada hasil terbaik untuk Anda.
          </p>
        </div>

        {/* Steps — Horizontal scroll on mobile, grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent z-0" />

          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative flex flex-col items-center text-center group">
                {/* Step number circle */}
                <div className="relative z-10 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-bg-darker border-2 border-accent/40 group-hover:border-accent group-hover:bg-accent transition-all duration-300 flex items-center justify-center shadow-lg">
                    <Icon size={24} className="text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white text-xs font-black flex items-center justify-center font-display">
                    {i + 1}
                  </div>
                </div>

                <div className="px-2">
                  <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                    {step.highlight}
                  </div>
                  <h3 className="font-display font-bold text-white text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/konsultasi" className="btn btn-primary btn-lg glow-orange">
            Mulai Proses Sekarang →
          </Link>
          <p className="text-white/90 text-sm mt-3">
            Gratis konsultasi. Gratis survey. Tanpa kewajiban.
          </p>
        </div>
      </div>
    </section>
  )
}
