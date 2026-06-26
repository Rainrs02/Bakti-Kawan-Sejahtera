'use client'

import { useState } from 'react'
import PageLayout from '@/components/templates/PageLayout'
import Link from 'next/link'
import { Search, ChevronDown, ChevronUp } from 'lucide-react'
import { FAQS, FAQ_CATEGORIES } from '@/lib/data/faqs'
import { getWADirectLink } from '@/lib/utils/whatsapp'

export default function FAQPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [openIds, setOpenIds] = useState<string[]>([])

  const toggleFAQ = (id: string) => {
    setOpenIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  const filtered = FAQS.filter(f => {
    const matchCat = activeCategory === 'Semua' || f.category === activeCategory
    const matchSearch = !search || f.question.toLowerCase().includes(search.toLowerCase()) || f.answer.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <PageLayout>
      <div className="pt-24 pb-12 bg-bg-darker relative overflow-hidden">
        <div className="absolute inset-0 industrial-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-darker to-secondary/90" />
        <div className="container-main relative z-10 text-center max-w-2xl mx-auto">
          <div className="section-label mb-4 justify-center">FAQ</div>
          <h1 className="text-display-xl text-white mb-4">
            Pertanyaan yang{' '}
            <span className="gradient-text">Sering Ditanyakan</span>
          </h1>
          <p className="text-white/80 mb-8">
            Temukan jawaban atas pertanyaan umum tentang layanan, proses, harga, dan wilayah coverage kami.
          </p>

          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80" />
            <input
              type="text"
              placeholder="Cari pertanyaan..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/80 focus:outline-none focus:border-accent"
            />
          </div>
        </div>
      </div>

      <section className="section-padding bg-bg">
        <div className="container-main max-w-4xl">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {['Semua', ...FAQ_CATEGORIES].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-accent text-white shadow-orange-sm'
                    : 'bg-bg-section text-secondary border border-border hover:border-accent/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-2">
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-muted">
                <p className="text-lg mb-4">Tidak ada pertanyaan yang cocok</p>
                <a href={getWADirectLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Tanyakan Langsung via WhatsApp
                </a>
              </div>
            ) : (
              filtered.map(faq => (
                <div key={faq.id} className="border border-border rounded-2xl overflow-hidden bg-white hover:border-accent/20 transition-colors">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-start justify-between gap-4 p-5 text-left"
                  >
                    <div>
                      <div className="text-xs text-accent font-semibold mb-1">{faq.category}</div>
                      <div className="font-semibold text-primary">{faq.question}</div>
                    </div>
                    {openIds.includes(faq.id)
                      ? <ChevronUp size={18} className="text-accent flex-shrink-0 mt-1" />
                      : <ChevronDown size={18} className="text-muted flex-shrink-0 mt-1" />
                    }
                  </button>
                  {openIds.includes(faq.id) && (
                    <div className="px-5 pb-5 text-secondary text-sm leading-relaxed border-t border-border pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 p-8 rounded-3xl bg-bg-section border border-border text-center">
            <h3 className="font-display font-bold text-xl text-primary mb-2">
              Tidak menemukan jawaban yang Anda cari?
            </h3>
            <p className="text-secondary mb-6">Tim kami siap menjawab pertanyaan spesifik Anda secara langsung.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={getWADirectLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Tanya via WhatsApp
              </a>
              <Link href="/konsultasi" className="btn btn-secondary">
                Form Konsultasi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
