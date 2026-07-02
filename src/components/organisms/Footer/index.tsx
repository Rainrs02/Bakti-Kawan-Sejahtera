'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react'
import { getWADirectLink } from '@/lib/utils/whatsapp'
// Services imported inline below

const SERVICES_ALKES = [
  { label: 'Service Bed Pasien', href: '/layanan/service-bed-pasien' },
  { label: 'Service Ambulance', href: '/layanan/service-ambulance' },
  { label: 'Service Meja Operasi', href: '/layanan/service-meja-operasi' },
  { label: 'Service Meja Periksa', href: '/layanan/service-meja-periksa' },
  { label: 'Service Troli Emergency', href: '/layanan/service-troli-emergency' },
  { label: 'Service Nurse Station', href: '/layanan/service-nurse-station' },
  { label: 'Service Lampu Pemeriksaan', href: '/layanan/service-lampu-pemeriksaan' },
]

const SERVICES_KANTOR = [
  { label: 'Service Sofa Kantor', href: '/layanan/service-sofa-kantor' },
  { label: 'Service Kursi Kantor', href: '/layanan/service-kursi-kantor' },
  { label: 'Service Lemari Arsip', href: '/layanan/service-lemari-arsip' },
  { label: 'Service Meja Meeting', href: '/layanan/service-meja-meeting' },
  { label: 'Service Reception Desk', href: '/layanan/service-reception-desk' },
]

const SERVICES_KOMERSIAL = [
  { label: 'Service Sofa Cafe', href: '/layanan/service-sofa-cafe' },
  { label: 'Service Furniture Restoran', href: '/layanan/service-furniture-restoran' },
  { label: 'Service Furniture Hotel', href: '/layanan/service-furniture-hotel' },
  { label: 'Service Furniture Retail', href: '/layanan/service-furniture-retail' },
]

const QUICK_LINKS = [
  { label: 'Tentang Kami', href: '/tentang' },
  { label: 'Semua Layanan', href: '/layanan' },
  { label: 'Blog & Artikel', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Kontak', href: '/kontak' },
  { label: 'Konsultasi Gratis', href: '/konsultasi' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="container-main py-10 md:py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-label text-accent mb-2">Siap Membantu Anda</p>
              <h2 className="text-display-md text-white mb-1">
                Furniture Bermasalah?
              </h2>
              <p className="text-white/80 text-sm">
                Konsultasi 24 jam via WA, estimasi harga transparan.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <a
                href={getWADirectLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-whatsapp text-white hover:bg-green-600 btn-lg"
              >
                <span>💬</span> Chat WhatsApp
              </a>
              <Link href="/konsultasi" className="btn btn-white btn-lg">
                Konsultasi Gratis
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 bg-white rounded-xl p-1">
                <Image
                  src="/images/logo/logo.png"
                  alt="Bakti Kawan Service"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <div className="font-display font-bold text-white text-base leading-tight">
                  Bakti Kawan Service
                </div>
                <div className="text-accent text-xs font-semibold tracking-widest uppercase">
                  servicealkes.com
                </div>
              </div>
            </Link>

            <p className="text-white/90 text-sm leading-relaxed mb-6 max-w-xs">
              Penyedia layanan service furniture alat kesehatan, kantor, dan komersial profesional.
              Teknisi bersertifikasi, spare part berkualitas, garansi. Melayani seluruh Indonesia.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href={getWADirectLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Phone size={14} />
                </div>
                +62 812 0000 0001
              </a>
              <a
                href="mailto:info@servicealkes.com"
                className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Mail size={14} />
                </div>
                info@servicealkes.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/80">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} />
                </div>
                <span>RT.1/RW.4, Tarikolot, Kec. Citeureup,<br />Kabupaten Bogor, Jawa Barat 16810</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/80">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={14} />
                </div>
                <div>
                  <div>Sen–Jum: 08.00 – 17.00 WIB</div>
                  <div>Sabtu: 08.00 – 14.00 WIB</div>
                  <div className="text-accent">Emergency 24/7 tersedia</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: 'https://instagram.com/baktikawanservice', label: 'Instagram' },
                { icon: Facebook, href: 'https://facebook.com/baktikawanservice', label: 'Facebook' },
                { icon: Youtube, href: 'https://youtube.com', label: 'Youtube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/80 hover:bg-accent hover:text-white transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Layanan Alkes */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <span>🏥</span> Alat Kesehatan
            </h3>
            <ul className="space-y-2">
              {SERVICES_ALKES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-white/90 text-sm hover:text-accent transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/layanan" className="text-accent text-sm font-medium hover:text-orange-400 transition-colors">
                  + Lihat Semua →
                </Link>
              </li>
            </ul>
          </div>

          {/* Layanan Kantor & Komersial */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <span>🏢</span> Furniture Kantor
            </h3>
            <ul className="space-y-2 mb-6">
              {SERVICES_KANTOR.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-white/90 text-sm hover:text-accent transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <span>☕</span> Furniture Komersial
            </h3>
            <ul className="space-y-2">
              {SERVICES_KOMERSIAL.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-white/90 text-sm hover:text-accent transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Navigasi</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/90 text-sm hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Trust Badges */}
            <div className="mt-8 space-y-2">
              {['✔ Teknisi Bersertifikasi', '✔ Spare Part OEM', '✔ Bergaransi', '✔ Fast Response 24/7'].map((badge) => (
                <div key={badge} className="text-xs text-white/80 flex items-center gap-2">
                  <span className="text-accent">{badge.slice(0, 1)}</span>
                  <span>{badge.slice(2)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-main py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/90">
            <p>© {currentYear} PT Bakti Kawan Service. Seluruh hak cipta dilindungi.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-white/80 transition-colors">Kebijakan Privasi</Link>
              <Link href="/sitemap.xml" className="hover:text-white/80 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
