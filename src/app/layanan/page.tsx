import type { Metadata } from 'next'
import PageLayout from '@/components/templates/PageLayout'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/data/services'

export const metadata: Metadata = {
  title: 'Semua Layanan Service Furniture | Bakti Kawan Service',
  description: 'Layanan service furniture alat kesehatan, kantor, dan komersial. 19+ jenis layanan, teknisi bersertifikasi, garansi. Fast response Jabodetabek.',
}

const getServiceImage = (slug: string) => {
  const images: Record<string, string> = {
    'service-ambulance': '/images/services/ambulance.png',
    'service-bed-pasien': '/images/services/bed-pasien.png',
    'service-furniture-hotel': '/images/services/furniture-hotel.png',
    'service-kursi-kantor': '/images/services/kursi-kantor.png',
    'service-meja-operasi': '/images/services/meja-operasi.png',
    'service-meja-periksa': '/images/services/meja-periksa.png',
    'service-nurse-station': '/images/services/nurse-station.png',
    'service-reception-desk': '/images/services/reception-desk.png',
    'service-sofa-cafe': '/images/services/sofa-cafe.png',
    'service-sofa-kantor': '/images/services/sofa-kantor.png',
  }
  return images[slug] || '/images/services/teknisi-umum.png'
}

export default function LayananPage() {
  const alkesServices = SERVICES.filter(s => s.category === 'alkes')
  const kantorServices = SERVICES.filter(s => s.category === 'kantor')
  const komersialServices = SERVICES.filter(s => s.category === 'komersial')

  const categories = [
    { key: 'alkes', label: '🏥 Alat Kesehatan', desc: 'Rumah Sakit, Klinik, Puskesmas, Laboratorium', services: alkesServices, color: 'border-orange-200 bg-orange-50' },
    { key: 'kantor', label: '🏢 Furniture Kantor', desc: 'Perkantoran, Korporat & Institusi', services: kantorServices, color: 'border-slate-200 bg-slate-50' },
    { key: 'komersial', label: '☕ Furniture Komersial', desc: 'Cafe, Restoran, Hotel & Retail', services: komersialServices, color: 'border-stone-200 bg-stone-50' },
  ]

  return (
    <PageLayout>
      <div className="pt-24 pb-16 bg-bg-section">
        <div className="container-main">
          <div className="section-label mb-4">Semua Layanan</div>
          <h1 className="text-display-xl text-primary mb-4">
            19+ Layanan Service Furniture{' '}
            <span className="gradient-text">Profesional</span>
          </h1>
          <p className="text-secondary text-xl max-w-2xl">
            Dari alat kesehatan rumah sakit hingga furniture komersial premium. Semua ditangani teknisi bersertifikasi dengan garansi.
          </p>
        </div>
      </div>

      <div className="section-padding bg-bg">
        <div className="container-main space-y-16">
          {categories.map((cat) => (
            <div key={cat.key}>
              <div className="flex items-center justify-between flex-wrap gap-4 mb-8 border-b border-border pb-4">
                <div className="flex items-center gap-3">
                  <Link href={`/layanan/kategori/${cat.key}`} className="group">
                    <h2 className="text-display-md text-primary group-hover:text-accent transition-colors">{cat.label}</h2>
                  </Link>
                  <span className="badge">{cat.services.length} Layanan</span>
                </div>
                <Link
                  href={`/layanan/kategori/${cat.key}`}
                  className="text-sm font-bold text-accent hover:text-accent-hover flex items-center gap-1 group/btn"
                >
                  Lihat Kategori <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {cat.services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/layanan/${service.slug}`}
                    className="card group flex flex-col overflow-hidden"
                  >
                    <div className="relative w-full h-40 bg-zinc-100 dark:bg-zinc-800">
                      <Image
                        src={getServiceImage(service.slug)}
                        alt={service.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="font-semibold text-primary group-hover:text-accent transition-colors mb-2">
                        {service.name}
                      </h3>
                      <p className="text-secondary text-sm mb-4 line-clamp-2 flex-grow">{service.heroSubtitle}</p>
                      <div className="flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all mt-auto">
                        Lihat Detail <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
