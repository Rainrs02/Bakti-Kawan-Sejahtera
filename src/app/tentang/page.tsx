import type { Metadata } from 'next'
import PageLayout from '@/components/templates/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Target, Eye, ArrowRight } from 'lucide-react'
import { COMPANY_STATS } from '@/lib/data/partners'

export const metadata: Metadata = {
  title: 'Tentang Kami | Bakti Kawan Service',
  description: 'PT Bakti Kawan Service — 20+ tahun melayani service furniture alkes, kantor, dan komersial. Kenali visi, misi, tim, dan nilai-nilai perusahaan kami.',
}

const TIMELINE = [
  { year: '2004', event: 'Perusahaan didirikan dengan fokus service furniture alat kesehatan di Jakarta' },
  { year: '2008', event: 'Ekspansi layanan ke furniture kantor dan komersial' },
  { year: '2012', event: 'Membuka workshop besar dan rekrut 50+ teknisi bersertifikasi' },
  { year: '2016', event: 'Cakupan nasional — melayani proyek di 15+ provinsi' },
  { year: '2019', event: 'Kemitraan dengan distributor spare part berkualitas terkemuka' },
  { year: '2022', event: 'Milestone 5000+ proyek berhasil diselesaikan' },
  { year: '2024', event: 'Pengembangan sistem digital untuk koordinasi teknisi nasional' },
]

const VALUES = [
  { icon: '🎯', title: 'Profesional', desc: 'Setiap pekerjaan kami tangani dengan standar tertinggi dan keahlian yang teruji.' },
  { icon: '⚡', title: 'Responsif', desc: 'Respons cepat dalam 15 menit. Kami memahami bahwa waktu adalah hal krusial.' },
  { icon: '🛡️', title: 'Terpercaya', desc: 'Garansi di setiap pekerjaan. Kepuasan Anda adalah komitmen kami.' },
  { icon: '💎', title: 'Berkualitas', desc: 'Spare part OEM dan bahan premium untuk hasil perbaikan yang tahan lama.' },
  { icon: '🤝', title: 'Integritas', desc: 'Harga transparan, tidak ada biaya tersembunyi. Kejujuran adalah fondasi kami.' },
  { icon: '🌟', title: 'Inovatif', desc: 'Terus berinovasi dalam teknologi dan metode untuk hasil service terbaik.' },
]

export default function TentangPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-bg-darker relative overflow-hidden">
        <div className="absolute inset-0 industrial-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-bg-darker via-secondary to-bg-darker" />
        <div className="container-main relative z-10">
          <div className="max-w-3xl">
            <div className="section-label mb-4">Tentang Kami</div>
            <h1 className="text-display-xl text-white mb-6">
              Melayani dengan Hati,{' '}
              <span className="gradient-text">Bekerja dengan Presisi</span>
            </h1>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              PT Bakti Kawan Service didirikan tahun 2004 dengan misi sederhana: memberikan layanan
              service furniture yang benar-benar profesional dan dapat dipercaya untuk fasilitas
              kesehatan dan bisnis di Indonesia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/konsultasi" className="btn btn-primary btn-lg glow-orange">
                Konsultasi Gratis <ArrowRight size={18} />
              </Link>
              <Link href="/proyek" className="btn btn-secondary border-white/20 text-white hover:bg-white/10 btn-lg">
                Lihat Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-accent">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {COMPANY_STATS.map((stat) => (
              <div key={stat.label} className="text-center text-white">
                <div className="font-display font-extrabold text-4xl md:text-5xl mb-1">
                  {stat.value}{stat.suffix}
                </div>
                <div className="font-semibold text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story + Team Photo */}
      <section className="section-padding bg-bg">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="section-label mb-4">Cerita Kami</div>
              <h2 className="text-display-lg text-primary mb-6">Dua Dekade Membangun Kepercayaan</h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>
                  Bakti Kawan Service lahir dari kesadaran bahwa fasilitas kesehatan di Indonesia
                  membutuhkan mitra service furniture yang benar-benar dapat diandalkan. Di tahun 2004,
                  kami memulai dari workshop kecil di Jakarta Timur dengan 5 orang teknisi.
                </p>
                <p>
                  Kini, dengan 150+ teknisi bersertifikasi dan pengalaman menangani 5.000+ proyek
                  di seluruh Indonesia, kami telah menjadi salah satu penyedia layanan service furniture
                  alkes dan komersial terpercaya di Indonesia.
                </p>
                <p>
                  Setiap pekerjaan kami lakukan dengan standar kualitas tertinggi — menggunakan spare
                  part OEM berkualitas, teknisi terlatih, dan selalu memberikan garansi untuk
                  setiap pekerjaan.
                </p>
              </div>
            </div>
            <div className="relative h-80 lg:h-[420px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/team/team-photo.png"
                alt="Tim profesional Bakti Kawan Service"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-white font-display font-bold text-lg">Tim Kami</div>
                <div className="text-white/90 text-sm">150+ Teknisi Bersertifikasi</div>
              </div>
            </div>
          </div>

          {/* Visi & Misi */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            <div className="p-8 rounded-3xl bg-primary text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Eye size={20} className="text-accent" />
                </div>
                <h3 className="font-display font-bold text-xl">Visi</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                Menjadi penyedia layanan service furniture alat kesehatan dan komersial yang paling
                dipercaya di Indonesia, dikenal karena profesionalisme, kualitas, dan integritas
                dalam setiap pekerjaan.
              </p>
            </div>
            <div className="p-8 rounded-3xl border border-border bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Target size={20} className="text-accent" />
                </div>
                <h3 className="font-display font-bold text-xl text-primary">Misi</h3>
              </div>
              <ul className="space-y-2">
                {[
                  'Memberikan layanan service furniture berkualitas tinggi dengan harga transparan',
                  'Menggunakan spare part berkualitas untuk hasil yang tahan lama dan aman',
                  'Merespons setiap kebutuhan klien dengan cepat dan profesional',
                  'Terus berinovasi untuk meningkatkan kualitas layanan',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-secondary text-sm">
                    <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Values */}
          <div>
            <div className="text-center mb-10">
              <div className="section-label mb-3 justify-center">Nilai-Nilai Kami</div>
              <h2 className="text-display-lg text-primary">Prinsip yang Memandu Kami</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {VALUES.map((v) => (
                <div key={v.title} className="p-6 rounded-2xl border border-border bg-white hover:border-accent/20 hover:shadow-md transition-all group">
                  <div className="text-3xl mb-3">{v.icon}</div>
                  <h3 className="font-display font-bold text-lg text-primary mb-2 group-hover:text-accent transition-colors">{v.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <div className="section-label mb-3 justify-center">Perjalanan Kami</div>
              <h2 className="text-display-lg text-primary">20+ Tahun Inovasi & Dedikasi</h2>
            </div>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-0.5" />
              <div className="space-y-8">
                {TIMELINE.map((item, i) => (
                  <div key={item.year} className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <div className="font-display font-extrabold text-3xl text-accent">{item.year}</div>
                      <p className="text-secondary text-sm mt-1">{item.event}</p>
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent md:-translate-x-1.5 mt-1.5" />
                    <div className="pl-10 md:hidden">
                      <div className="font-display font-bold text-xl text-accent">{item.year}</div>
                      <p className="text-secondary text-sm mt-1">{item.event}</p>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
