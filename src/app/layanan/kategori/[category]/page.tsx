import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageLayout from '@/components/templates/PageLayout'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Wrench, CheckCircle } from 'lucide-react'
import { getCategoryPageData, CATEGORY_PAGES_DATA, getServicesByCategory } from '@/lib/data/services'
import { getWADirectLink } from '@/lib/utils/whatsapp'

interface CategoryPageProps {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return CATEGORY_PAGES_DATA.map((c) => ({ category: c.id }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params
  const catData = getCategoryPageData(category)
  if (!catData) return { title: 'Kategori Tidak Ditemukan' }
  
  return {
    title: catData.metaTitle,
    description: catData.metaDescription,
    alternates: {
      canonical: `https://servicealkes.com/layanan/kategori/${catData.id}`,
    },
    openGraph: {
      title: catData.metaTitle,
      description: catData.metaDescription,
      url: `https://servicealkes.com/layanan/kategori/${catData.id}`,
      type: 'website',
      images: [
        {
          url: catData.image,
          width: 800,
          height: 600,
          alt: catData.imageAlt,
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: catData.metaTitle,
      description: catData.metaDescription,
      images: [catData.image],
    }
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params
  const catData = getCategoryPageData(category)
  if (!catData) notFound()

  const services = getServicesByCategory(category)

  // Generate dynamic Schema JSON-LD
  const schemaJsonLD = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": catData.heroTitle,
    "description": catData.metaDescription,
    "url": `https://servicealkes.com/layanan/kategori/${catData.id}`,
    "about": {
      "@type": "Service",
      "name": catData.label,
      "provider": {
        "@type": "LocalBusiness",
        "name": "PT Bakti Kawan Sejahtera",
        "image": "https://servicealkes.com/images/logo/logo.png",
        "url": "https://servicealkes.com",
        "telephone": "+6281200000001",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jakarta",
          "addressRegion": "DKI Jakarta",
          "addressCountry": "ID"
        }
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": services.map((svc, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://servicealkes.com/layanan/${svc.slug}`,
        "name": svc.name
      }))
    }
  }

  // Pre-filled WhatsApp message for unlisted services
  const waCustomMessage = getWADirectLink(
    `Halo, saya ingin bertanya tentang layanan service kustom di kategori *${catData.label}* untuk barang yang tidak ada di menu. Mohon dibantu.`
  )

  return (
    <PageLayout>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLD) }}
      />

      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-bg-darker relative overflow-hidden">
        <div className="absolute inset-0 industrial-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-bg-darker via-secondary/95 to-bg-darker" />
        
        <div className="container-main relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/80 mb-8">
            <Link href="/" className="hover:text-white/90 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/layanan" className="hover:text-white/90 transition-colors">Layanan</Link>
            <span>/</span>
            <span className="text-white/90">{catData.label}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="badge badge-dark inline-block px-3 py-1 bg-white/10 text-white border border-white/20 rounded-full text-xs font-semibold uppercase tracking-wider">
                {catData.icon} Kategori {catData.label}
              </div>
              <h1 className="text-display-xl text-white font-display font-extrabold tracking-tight leading-tight">
                {catData.heroTitle}
              </h1>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl">
                {catData.heroSubtitle}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/konsultasi" className="btn btn-primary btn-lg glow-orange flex items-center gap-2">
                  Konsultasi Gratis <ArrowRight size={18} />
                </Link>
                <a 
                  href={waCustomMessage} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary border border-white/20 text-white hover:bg-white/10 btn-lg flex items-center gap-2"
                >
                  <Phone size={18} className="text-accent" /> Hubungi Kami
                </a>
              </div>
            </div>

            {/* Right Column (Image) */}
            <div className="lg:col-span-5 relative w-full h-[300px] md:h-[380px] rounded-3xl overflow-hidden shadow-xl border border-white/10 group">
              <Image
                src={catData.image}
                alt={catData.imageAlt}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-darker/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Description & Services Listing */}
      <div className="section-padding bg-bg">
        <div className="container-main space-y-16">
          {/* Long Description */}
          <section className="max-w-4xl space-y-4">
            <h2 className="text-display-md text-primary font-display font-bold">Tentang Kategori Ini</h2>
            <p className="text-secondary text-base md:text-lg leading-relaxed">
              {catData.longDescription}
            </p>
          </section>

          {/* Service Items Grid */}
          <section className="space-y-8">
            <div className="border-b border-border pb-4">
              <h2 className="text-display-md text-primary font-display font-bold">Daftar Layanan Tersedia</h2>
              <p className="text-secondary text-sm md:text-base mt-1">
                Silakan pilih salah satu sub-layanan spesifik di bawah ini untuk melihat detail cakupan pengerjaan.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/layanan/${service.slug}`}
                  className="card p-6 group hover:translate-y-[-4px] transition-all duration-300"
                >
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-5 border border-border">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-primary group-hover:text-accent transition-colors mb-2">
                    {service.name}
                  </h3>
                  <p className="text-secondary text-sm mb-4 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                    Lihat Detail Pengerjaan <ArrowRight size={14} />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Custom Service / Unlisted Service Section */}
          <section className="p-8 md:p-10 rounded-3xl bg-secondary text-white relative overflow-hidden shadow-xl border border-white/5">
            <div className="absolute -right-20 -top-20 w-52 h-52 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-3xl space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/10">
                <Wrench size={12} className="text-accent" /> Layanan Kustom / Lainnya
              </div>
              <h2 className="text-display-md text-white font-display font-bold">
                {catData.customServiceTitle}
              </h2>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                {catData.customServiceDescription}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={waCustomMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary bg-accent hover:bg-accent-hover text-white rounded-xl font-bold flex items-center gap-2 glow-orange-sm"
                >
                  Hubungi Admin Kustom
                </a>
                <Link
                  href="/konsultasi"
                  className="btn border border-white/20 text-white hover:bg-white/10 rounded-xl font-bold flex items-center gap-2 px-6 py-3"
                >
                  Form Konsultasi
                </Link>
              </div>
            </div>
          </section>

          {/* Standards & Trust Badges */}
          <section className="grid sm:grid-cols-3 gap-6 pt-4 border-t border-border">
            {[
              { title: 'Teknisi Berpengalaman', desc: 'Semua pengerjaan ditangani oleh teknisi ahli bersertifikasi resmi.' },
              { title: 'Garansi 3-12 Bulan', desc: 'Setiap perbaikan dilindungi garansi resmi pasca-service.' },
              { title: 'Material Berkualitas', desc: 'Menggunakan spare part original OEM dan pelapis berstandar industri.' }
            ].map((badge) => (
              <div key={badge.title} className="flex gap-3 items-start">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-primary mb-1">{badge.title}</h4>
                  <p className="text-secondary text-sm leading-relaxed">{badge.desc}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </PageLayout>
  )
}
