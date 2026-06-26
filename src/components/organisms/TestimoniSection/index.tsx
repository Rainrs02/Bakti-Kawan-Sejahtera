'use client'

import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/data/testimonials'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200 fill-gray-200'}
        />
      ))}
    </div>
  )
}

export default function TestimoniSection() {
  // Show first 4 testimonials in a 2x2 grid with alternating offset
  const featured = TESTIMONIALS.slice(0, 4)

  return (
    <section id="testimoni" className="section-padding bg-bg-section">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="section-label mb-4 justify-center">Testimoni</div>
          <h2 className="text-display-xl text-primary">
            Apa Kata{' '}
            <span className="gradient-text">Klien Kami?</span>
          </h2>
          <p className="text-secondary mt-3">
            Ribuan fasilitas kesehatan dan perusahaan telah mempercayakan kebutuhan service mereka kepada kami.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {featured.map((testimonial, i) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${i % 2 === 1 ? 'md:mt-6' : ''}`}
            >
              {/* Quote icon */}
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Quote size={16} className="text-accent" />
              </div>

              {/* Stars */}
              <div className="mb-3">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Text */}
              <p className="testimonial-quote">"{testimonial.text}"</p>

              {/* Service tag */}
              <div className="mb-4">
                <span className="badge text-xs">
                  {testimonial.service}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-orange-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-primary text-sm">{testimonial.name}</div>
                  <div className="text-muted text-xs">{testimonial.role} · {testimonial.institution}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary strip */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-2xl bg-white border border-border shadow-sm">
            <div className="text-center">
              <div className="font-display font-extrabold text-2xl text-primary">4.9/5</div>
              <div className="flex justify-center mt-1">
                <StarRating rating={5} />
              </div>
              <div className="text-xs text-muted mt-1">Rating Rata-rata</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="font-display font-extrabold text-2xl text-primary">5.000+</div>
              <div className="text-xs text-muted mt-1">Total Ulasan</div>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center hidden sm:block">
              <div className="font-display font-extrabold text-2xl text-primary">98%</div>
              <div className="text-xs text-muted mt-1">Rekomendasikan Kami</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
