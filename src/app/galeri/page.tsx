import type { Metadata } from 'next'
import PageLayout from '@/components/templates/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
import { getWADirectLink } from '@/lib/utils/whatsapp'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Galeri | Bakti Kawan Service',
  description: 'Galeri foto hasil service furniture alkes, kantor, dan komersial dari Bakti Kawan Service. Lihat kualitas pekerjaan kami.',
}

const GALLERY_IMAGES = [
  { src: '/images/projects/project-6-after.jpg', alt: 'Interior ambulance', category: 'Ambulance' },
  { src: '/images/projects/project-1-after.jpg', alt: 'Bed pasien setelah service', category: 'Alkes' },
  { src: '/images/projects/project-2-after.jpg', alt: 'Service Sofa Kantor', category: 'Kantor' },
  { src: '/images/projects/project-4-after.jpg', alt: 'Service Sofa Cafe', category: 'Komersial' },
  { src: '/images/services/bed-pasien.png', alt: 'Bed pasien rumah sakit', category: 'Alkes' },
  { src: '/images/services/sofa-kantor.png', alt: 'Service Sofa', category: 'Kantor' },
  { src: '/images/services/sofa-cafe.png', alt: 'Service Sofa Premium', category: 'Komersial' },
  { src: '/images/services/ambulance.png', alt: 'Renovasi Ambulance', category: 'Ambulance' },
]

export default function GaleriPage() {
  return (
    <PageLayout>
      <div className="pt-24 pb-12 bg-bg-section">
        <div className="container-main">
          <div className="section-label mb-4">Galeri Foto</div>
          <h1 className="text-display-xl text-primary mb-4">
            Dokumentasi Hasil{' '}
            <span className="gradient-text">Pekerjaan Kami</span>
          </h1>
          <p className="text-secondary text-xl max-w-2xl">
            Foto-foto nyata dari proses dan hasil service furniture yang telah kami kerjakan.
          </p>
        </div>
      </div>

      <section className="section-padding bg-bg">
        <div className="container-main">
          <div className="masonry-grid">
            {GALLERY_IMAGES.map((img, i) => (
              <div key={i} className="masonry-item group relative overflow-hidden rounded-2xl cursor-pointer">
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

          <div className="mt-12 text-center">
            <p className="text-muted mb-6">Ingin furniture Anda tampil seperti ini?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/konsultasi" className="btn btn-primary btn-lg glow-orange">
                Konsultasi Gratis
              </Link>
              <a href={getWADirectLink()} target="_blank" rel="noopener noreferrer" className="btn bg-whatsapp hover:bg-whatsapp/90 text-white border-none btn-lg flex items-center gap-2">
                <Phone size={18} className="text-white" /> Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
