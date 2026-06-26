'use client'

export default function PartnerSection() {
  const partners = [
    'RSUP Nasional RSCM', 'RS Pondok Indah', 'Siloam Hospitals',
    'Kemenkes RI', 'BPJS Kesehatan', 'Pemprov DKI Jakarta',
    'RS Hermina Group', 'Omni Hospital', 'Bank BRI', 'PT Telkom Indonesia',
    'Grand Hyatt Jakarta', 'Prodia Laboratorium', 'RS Mitra Keluarga',
    'Klinik Kimia Farma', 'Bank Mandiri', 'Pertamina',
  ]

  // Duplicate for seamless loop
  const doubled = [...partners, ...partners]

  return (
    <section id="partner" className="py-16 bg-bg overflow-hidden">
      <div className="container-main mb-8">
        <div className="text-center">
          <div className="section-label mb-2 justify-center">Klien & Partner</div>
          <h2 className="text-display-md text-primary">
            Dipercaya oleh{' '}
            <span className="gradient-text">Ratusan Institusi</span>
          </h2>
        </div>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="partner-logo-track">
            {doubled.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex-shrink-0 px-6 py-3 rounded-xl border border-border bg-white/80 hover:border-accent/30 hover:shadow-sm transition-all cursor-default"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold text-xs">{name.charAt(0)}</span>
                  </div>
                  <span className="text-sm font-semibold text-secondary whitespace-nowrap">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="container-main mt-6 text-center">
        <p className="text-sm text-muted">
          Dan 500+ institusi lainnya di seluruh Indonesia
        </p>
      </div>
    </section>
  )
}
