import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageLayout from '@/components/templates/PageLayout'
import Link from 'next/link'
import Image from 'next/image'
import { getServiceBySlug, getAllSlugs, SERVICES } from '@/lib/data/services'
import { getWADirectLink } from '@/lib/utils/whatsapp'
import { CheckCircle, ArrowRight, Phone, Shield, Clock, Wrench } from 'lucide-react'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return { title: 'Layanan Tidak Ditemukan' }
  
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://servicealkes.com/layanan/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://servicealkes.com/layanan/${service.slug}`,
      type: 'article',
      images: [
        {
          url: service.image,
          width: 800,
          height: 600,
          alt: service.imageAlt,
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.image],
    }
  }
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const relatedServices = SERVICES.filter(s => service.relatedSlugs.includes(s.slug))

  const categoryLabels: Record<string, string> = {
    alkes: '🏥 Alat Kesehatan',
    kantor: '🏢 Furniture Kantor',
    komersial: '☕ Furniture Komersial',
  }

  // Schema.org JSON-LD Structured Data
  const schemaJsonLD = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "image": `https://servicealkes.com${service.image}`,
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
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "DKI Jakarta"
      },
      {
        "@type": "State",
        "name": "Jawa Barat"
      },
      {
        "@type": "State",
        "name": "Banten"
      },
      {
        "@type": "Country",
        "name": "Indonesia"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Jasa Service & Perbaikan Furniture",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.name,
            "description": service.description
          }
        }
      ]
    }
  }

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
            <span className="text-white/90">{service.shortName}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="badge badge-dark inline-block px-3 py-1 bg-white/10 text-white border border-white/20 rounded-full text-xs font-semibold uppercase tracking-wider">
                {categoryLabels[service.category]}
              </div>
              <h1 className="text-display-xl text-white font-display font-extrabold tracking-tight leading-tight">
                {service.heroTitle}
              </h1>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl">
                {service.heroSubtitle}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/konsultasi" className="btn btn-primary btn-lg glow-orange flex items-center gap-2">
                  Konsultasi Gratis <ArrowRight size={18} />
                </Link>
                <a 
                  href={getWADirectLink(`Halo, saya butuh informasi ${service.name}. Mohon bantuannya.`)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary border border-white/20 text-white hover:bg-white/10 btn-lg flex items-center gap-2"
                >
                  <Phone size={18} className="text-accent" /> Chat WhatsApp
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative w-full h-[320px] md:h-[400px] lg:h-[450px] rounded-3xl overflow-hidden shadow-xl border border-white/10 group">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-darker/80 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 text-white space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold tracking-widest text-accent uppercase">Teknisi On-Site</span>
                </div>
                <p className="text-sm font-medium text-white/90">Garansi Layanan 3–12 Bulan Tertulis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Details */}
      <div className="section-padding bg-bg">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Content column */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Description */}
              <section aria-labelledby="section-about">
                <h2 id="section-about" className="text-display-md text-primary mb-6 font-display font-bold">
                  Tentang Layanan Ini
                </h2>
                <div className="prose prose-gray max-w-none">
                  {service.longDescription.split('\n\n').map((para, i) => (
                    <p key={i} className="text-secondary leading-relaxed mb-6 text-base md:text-lg">
                      {para.trim()}
                    </p>
                  ))}
                </div>
              </section>

              {/* Benefits */}
              <section aria-labelledby="section-benefits">
                <h2 id="section-benefits" className="text-display-md text-primary mb-6 font-display font-bold">
                  Keunggulan Layanan Kami
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3 p-5 rounded-xl bg-bg-section border border-border hover:border-accent/10 transition-colors">
                      <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-secondary text-sm md:text-base font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Process */}
              <section aria-labelledby="section-process">
                <h2 id="section-process" className="text-display-md text-primary mb-8 font-display font-bold">
                  Proses Pengerjaan
                </h2>
                <div className="space-y-4">
                  {service.process.map((step) => (
                    <div key={step.step} className="flex gap-4 p-6 rounded-2xl border border-border bg-white hover:border-accent/20 transition-all shadow-sm">
                      <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center font-display font-bold text-xl flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-primary mb-1">{step.title}</h3>
                        <p className="text-secondary text-sm md:text-base leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              {service.faqs.length > 0 && (
                <section aria-labelledby="section-faqs">
                  <h2 id="section-faqs" className="text-display-md text-primary mb-6 font-display font-bold">
                    FAQ — Pertanyaan Umum
                  </h2>
                  <div className="space-y-3">
                    {service.faqs.map((faq, i) => (
                      <details key={i} className="accordion-item group border border-border rounded-xl bg-white overflow-hidden">
                        <summary className="accordion-trigger cursor-pointer list-none flex items-center justify-between p-5 font-semibold text-primary select-none hover:bg-bg-section transition-colors">
                          {faq.question}
                          <span className="text-accent text-xl group-open:rotate-45 transition-transform inline-block">+</span>
                        </summary>
                        <div className="accordion-content p-5 pt-0 text-secondary border-t border-border/50 text-sm md:text-base leading-relaxed bg-bg-section/35">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="p-6 md:p-8 rounded-3xl bg-primary text-white sticky top-24 shadow-lg border border-white/5 overflow-hidden relative">
                <div className="absolute -right-16 -top-16 w-36 h-36 bg-accent/20 rounded-full blur-2xl" />
                <h3 className="font-display font-bold text-2xl mb-3 relative z-10">Butuh {service.shortName}?</h3>
                <p className="text-white/90 text-sm md:text-base mb-8 relative z-10 leading-relaxed">
                  Konsultasi gratis, survey gratis. Teknisi bersertifikasi kami siap datang langsung ke lokasi Anda.
                </p>
                <div className="space-y-4 relative z-10">
                  <Link href="/konsultasi" className="btn btn-primary w-full justify-center py-3 bg-accent hover:bg-accent-hover text-white rounded-xl font-bold transition-all text-center block">
                    Konsultasi Gratis
                  </Link>
                  <a
                    href={getWADirectLink(`Halo, saya butuh informasi ${service.name}. Mohon bantuannya.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-whatsapp hover:bg-green-600 w-full justify-center py-3 text-white rounded-xl font-bold transition-all text-center block"
                  >
                    WhatsApp Sekarang
                  </a>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 space-y-4 relative z-10">
                  {[
                    { icon: Shield, text: 'Garansi 3–12 Bulan Tertulis' },
                    { icon: Clock, text: 'Respons Cepat < 15 Menit' },
                    { icon: Wrench, text: 'Teknisi Bersertifikasi Resmi' },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 text-sm text-white/90">
                      <Icon size={18} className="text-accent flex-shrink-0" />
                      <span className="font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <nav aria-label="Layanan Terkait" className="p-6 rounded-3xl border border-border bg-white shadow-sm">
                  <h3 className="font-display font-bold text-lg text-primary mb-4">Layanan Terkait</h3>
                  <div className="space-y-1">
                    {relatedServices.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/layanan/${related.slug}`}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-bg-section transition-colors group"
                      >
                        <span className="text-sm md:text-base font-medium text-secondary group-hover:text-accent transition-colors">
                          {related.shortName}
                        </span>
                        <ArrowRight size={16} className="text-muted group-hover:text-accent transition-all group-hover:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                </nav>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
