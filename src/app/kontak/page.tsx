import type { Metadata } from 'next'
import PageLayout from '@/components/templates/PageLayout'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react'
import { getWADirectLink, WA_ADMIN_NUMBER } from '@/lib/utils/whatsapp'

export const metadata: Metadata = {
  title: 'Kontak | Bakti Kawan Sejahtera',
  description: 'Hubungi Bakti Kawan Sejahtera via WhatsApp, telepon, atau email. Fast response untuk Jabodetabek. Konsultasi gratis tersedia.',
}

export default function KontakPage() {
  return (
    <PageLayout>
      <div className="pt-24 pb-12 bg-bg-section">
        <div className="container-main">
          <div className="section-label mb-4">Hubungi Kami</div>
          <h1 className="text-display-xl text-primary mb-4">
            Kami Siap{' '}
            <span className="gradient-text">Membantu Anda</span>
          </h1>
          <p className="text-secondary text-xl max-w-2xl">
            Pilih cara menghubungi yang paling nyaman untuk Anda. Tim kami siap merespons dalam 15 menit.
          </p>
        </div>
      </div>

      <section className="section-padding bg-bg">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-5">
              {[
                {
                  icon: Phone,
                  label: 'WhatsApp (Direkomendasikan)',
                  value: '+62 812 0000 0001',
                  desc: 'Respons tercepat. Kirim foto kerusakan langsung via WA.',
                  href: getWADirectLink(),
                  cta: 'Buka WhatsApp',
                  color: 'bg-whatsapp',
                },
                {
                  icon: Phone,
                  label: 'Telepon',
                  value: '+62 812 0000 0001',
                  desc: 'Senin–Jumat 08.00–17.00, Sabtu 08.00–14.00',
                  href: `tel:${WA_ADMIN_NUMBER}`,
                  cta: 'Telepon Sekarang',
                  color: 'bg-accent',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'info@servicealkes.com',
                  desc: 'Untuk pertanyaan detail atau permintaan penawaran resmi.',
                  href: 'mailto:info@servicealkes.com',
                  cta: 'Kirim Email',
                  color: 'bg-blue-500',
                },
              ].map(({ icon: Icon, label, value, desc, href, cta, color }) => (
                <div key={label} className="p-6 rounded-2xl border border-border bg-white hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={22} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-muted font-semibold uppercase tracking-wider mb-1">{label}</div>
                      <div className="font-display font-bold text-primary text-lg mb-1">{value}</div>
                      <p className="text-secondary text-sm mb-4">{desc}</p>
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        className="btn btn-primary btn-sm">
                        {cta} <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {/* Hours */}
              <div className="p-6 rounded-2xl border border-border bg-bg-section">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={20} className="text-accent" />
                  <h3 className="font-semibold text-primary">Jam Operasional</h3>
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    { day: 'Senin – Jumat', time: '08.00 – 17.00 WIB' },
                    { day: 'Sabtu', time: '08.00 – 14.00 WIB' },
                    { day: 'Minggu', time: 'Tutup (kecuali darurat)' },
                    { day: 'Emergency 24/7', time: 'Untuk fasilitas kesehatan', accent: true },
                  ].map(({ day, time, accent }) => (
                    <div key={day} className={`flex justify-between ${accent ? 'text-accent font-semibold' : 'text-secondary'}`}>
                      <span>{day}</span>
                      <span>{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              {/* Map placeholder */}
              <div className="rounded-3xl overflow-hidden border border-border bg-bg-section h-72 flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin size={40} className="text-accent mx-auto mb-3" />
                  <div className="font-bold text-primary mb-1">Bakti Kawan Sejahtera</div>
                  <div className="text-secondary text-sm">Jl. Contoh No. 123</div>
                  <div className="text-secondary text-sm">Jakarta Timur, DKI Jakarta 13000</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-primary text-white">
                <h3 className="font-display font-bold text-xl mb-4">Konsultasi Lebih Lanjut?</h3>
                <p className="text-white/80 text-sm mb-6">
                  Isi form konsultasi kami untuk mendapatkan respons terstruktur dan estimasi harga yang lebih detail.
                </p>
                <Link href="/konsultasi" className="btn btn-primary w-full justify-center">
                  Isi Form Konsultasi →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
