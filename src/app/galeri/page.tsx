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
  {
    "src": "/images/gallery/produksi/Foto Teknisi (1).webp",
    "alt": "Teknisi profesional 1",
    "category": "Foto Teknisi"
  },
  {
    "src": "/images/gallery/produksi/Foto Teknisi (2).webp",
    "alt": "Teknisi profesional 2",
    "category": "Foto Teknisi"
  },
  {
    "src": "/images/gallery/produksi/Foto Teknisi (3).webp",
    "alt": "Teknisi profesional 3",
    "category": "Foto Teknisi"
  },
  {
    "src": "/images/gallery/produksi/Foto Teknisi (5).webp",
    "alt": "Teknisi profesional 5",
    "category": "Foto Teknisi"
  },
  {
    "src": "/images/gallery/produksi/Lemari Alkes (1).webp",
    "alt": "Lemari Alkes 1",
    "category": "Alat Kesehatan"
  },
  {
    "src": "/images/gallery/produksi/Lemari Alkes (2).webp",
    "alt": "Lemari Alkes 2",
    "category": "Alat Kesehatan"
  },
  {
    "src": "/images/gallery/produksi/Lemari Alkes.webp",
    "alt": "Lemari Alkes",
    "category": "Alat Kesehatan"
  },
  {
    "src": "/images/gallery/produksi/Foto Teknisi (4).webp",
    "alt": "Teknisi profesional 4",
    "category": "Foto Teknisi"
  },
  {
    "src": "/images/gallery/produksi/Teras Rumah.webp",
    "alt": "Teras Rumah",
    "category": "Furniture Rumah"
  },
  {
    "src": "/images/gallery/all/gal-0.webp",
    "alt": "Alat Kesehatan 1",
    "category": "Alat Kesehatan"
  },
  {
    "src": "/images/gallery/all/gal-1.webp",
    "alt": "Alat Kesehatan 2",
    "category": "Alat Kesehatan"
  },
  {
    "src": "/images/gallery/all/gal-2.webp",
    "alt": "Alat Kesehatan 3",
    "category": "Alat Kesehatan"
  },
  {
    "src": "/images/gallery/all/gal-3.webp",
    "alt": "Alat Kesehatan 4",
    "category": "Alat Kesehatan"
  },
  {
    "src": "/images/gallery/all/gal-4.webp",
    "alt": "Alat Kesehatan 5",
    "category": "Alat Kesehatan"
  },
  {
    "src": "/images/gallery/all/gal-5.webp",
    "alt": "Alat Kesehatan 6",
    "category": "Alat Kesehatan"
  },
  {
    "src": "/images/gallery/produksi/Foto Teknisi (6).webp",
    "alt": "Teknisi profesional 6",
    "category": "Foto Teknisi"
  },
  {
    "src": "/images/gallery/all/gal-6.webp",
    "alt": "Alat Kesehatan 7",
    "category": "Alat Kesehatan"
  },
  {
    "src": "/images/gallery/all/gal-7.webp",
    "alt": "Alat Kesehatan 8",
    "category": "Alat Kesehatan"
  },
  {
    "src": "/images/gallery/all/gal-8.webp",
    "alt": "Alat Kesehatan 9",
    "category": "Alat Kesehatan"
  },
  {
    "src": "/images/gallery/all/gal-9.webp",
    "alt": "Alat Kesehatan 10",
    "category": "Alat Kesehatan"
  },
  {
    "src": "/images/gallery/all/gal-10.webp",
    "alt": "Alat Kesehatan 11",
    "category": "Alat Kesehatan"
  },
  {
    "src": "/images/gallery/all/gal-11.webp",
    "alt": "Alat Kesehatan 12",
    "category": "Alat Kesehatan"
  },
  {
    "src": "/images/gallery/all/gal-12.webp",
    "alt": "Alat Kesehatan 13",
    "category": "Alat Kesehatan"
  },
  {
    "src": "/images/gallery/produksi/Foto Teknisi (7).webp",
    "alt": "Teknisi profesional 7",
    "category": "Foto Teknisi"
  },
  {
    "src": "/images/gallery/all/gal-13.webp",
    "alt": "Ambulance 14",
    "category": "Ambulance"
  },
  {
    "src": "/images/gallery/all/gal-14.webp",
    "alt": "Ambulance 15",
    "category": "Ambulance"
  },
  {
    "src": "/images/gallery/all/gal-15.webp",
    "alt": "Ambulance 16",
    "category": "Ambulance"
  },
  {
    "src": "/images/gallery/all/gal-16.webp",
    "alt": "Ambulance 17",
    "category": "Ambulance"
  },
  {
    "src": "/images/gallery/all/gal-17.webp",
    "alt": "Furniture Kantor 18",
    "category": "Furniture Kantor"
  },
  {
    "src": "/images/gallery/all/gal-18.webp",
    "alt": "Furniture Kantor 19",
    "category": "Furniture Kantor"
  },
  {
    "src": "/images/gallery/all/gal-19.webp",
    "alt": "Furniture Kantor 20",
    "category": "Furniture Kantor"
  },
  {
    "src": "/images/gallery/produksi/Foto Teknisi (8).webp",
    "alt": "Teknisi profesional 8",
    "category": "Foto Teknisi"
  },
  {
    "src": "/images/gallery/all/gal-20.webp",
    "alt": "Furniture Kantor 21",
    "category": "Furniture Kantor"
  },
  {
    "src": "/images/gallery/all/gal-21.webp",
    "alt": "Furniture Komersial 22",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-22.webp",
    "alt": "Furniture Komersial 23",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-23.webp",
    "alt": "Furniture Komersial 24",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-24.webp",
    "alt": "Furniture Komersial 25",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-25.webp",
    "alt": "Furniture Komersial 26",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-26.webp",
    "alt": "Furniture Komersial 27",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/produksi/Foto Teknisi (9).webp",
    "alt": "Teknisi profesional 9",
    "category": "Foto Teknisi"
  },
  {
    "src": "/images/gallery/all/gal-27.webp",
    "alt": "Furniture Komersial 28",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-28.webp",
    "alt": "Furniture Komersial 29",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-29.webp",
    "alt": "Furniture Komersial 30",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-30.webp",
    "alt": "Furniture Komersial 31",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-31.webp",
    "alt": "Furniture Komersial 32",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-32.webp",
    "alt": "Furniture Komersial 33",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-33.webp",
    "alt": "Furniture Komersial 34",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/produksi/Foto Teknisi (10).webp",
    "alt": "Teknisi profesional 10",
    "category": "Foto Teknisi"
  },
  {
    "src": "/images/gallery/all/gal-34.webp",
    "alt": "Furniture Komersial 35",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-35.webp",
    "alt": "Furniture Komersial 36",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-36.webp",
    "alt": "Furniture Komersial 37",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-37.webp",
    "alt": "Furniture Komersial 38",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-38.webp",
    "alt": "Furniture Komersial 39",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-39.webp",
    "alt": "Furniture Komersial 40",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-40.webp",
    "alt": "Furniture Komersial 41",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/produksi/Foto Teknisi (11).webp",
    "alt": "Teknisi profesional 11",
    "category": "Foto Teknisi"
  },
  {
    "src": "/images/gallery/all/gal-41.webp",
    "alt": "Furniture Komersial 42",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-42.webp",
    "alt": "Furniture Komersial 43",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-43.webp",
    "alt": "Furniture Komersial 44",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-44.webp",
    "alt": "Furniture Komersial 45",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-45.webp",
    "alt": "Furniture Komersial 46",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-46.webp",
    "alt": "Furniture Komersial 47",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-47.webp",
    "alt": "Furniture Komersial 48",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/produksi/Foto Produksi (12).webp",
    "alt": "Produksi 12",
    "category": "Foto Teknisi"
  },
  {
    "src": "/images/gallery/all/gal-48.webp",
    "alt": "Furniture Komersial 49",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-49.webp",
    "alt": "Furniture Komersial 50",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-50.webp",
    "alt": "Furniture Komersial 51",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-51.webp",
    "alt": "Furniture Komersial 52",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-52.webp",
    "alt": "Furniture Komersial 53",
    "category": "Furniture Komersial"
  },
  {
    "src": "/images/gallery/all/gal-53.webp",
    "alt": "Furniture Komersial 54",
    "category": "Furniture Komersial"
  }
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
