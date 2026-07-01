import type { Metadata } from 'next'
import PageLayout from '@/components/templates/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
import { Filter } from 'lucide-react'
import { PROJECTS } from '@/lib/data/projects'
import { getWADirectLink } from '@/lib/utils/whatsapp'

export const metadata: Metadata = {
  title: 'Portfolio Proyek | Bakti Kawan Service',
  description: 'Portfolio proyek service furniture alkes dan komersial: before & after, studi kasus, berbagai klien. Bukti nyata kualitas pekerjaan kami.',
}

export default function ProyekPage() {
  return (
    <PageLayout>
      <div className="pt-24 pb-12 bg-bg-section">
        <div className="container-main">
          <div className="section-label mb-4">Portfolio Proyek</div>
          <h1 className="text-display-xl text-primary mb-4">
            Hasil Nyata yang{' '}
            <span className="gradient-text">Berbicara Sendiri</span>
          </h1>
          <p className="text-secondary text-xl max-w-2xl">
            Dokumentasi lengkap before & after dari ratusan proyek service furniture yang telah kami selesaikan.
          </p>
        </div>
      </div>

      <section className="section-padding bg-bg">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <div key={project.id} className="card group overflow-hidden">
                {/* Before/After Images */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-2">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.beforeImage}
                        alt={`Before - ${project.title}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        SEBELUM
                      </div>
                    </div>
                    <div className="relative overflow-hidden border-l-2 border-white">
                      <Image
                        src={project.afterImage}
                        alt={`After - ${project.title}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        SESUDAH
                      </div>
                    </div>
                  </div>
                  {/* Center divider */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white z-10" />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge text-xs">
                      {project.category === 'alkes' ? '🏥 Alkes' : project.category === 'kantor' ? '🏢 Kantor' : '☕ Komersial'}
                    </span>
                    <span className="text-xs text-muted">{project.year}</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-primary mb-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-secondary text-xs mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-muted">
                    <span>📍 {project.location}</span>
                    <span>⏱️ {project.duration}</span>
                    <span>🏢 {project.client}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted mb-6">Ingin hasil seperti ini untuk furniture Anda?</p>
            <Link href="/konsultasi" className="btn btn-primary btn-lg glow-orange">
              Konsultasi Gratis Sekarang
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
