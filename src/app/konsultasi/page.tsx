'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import PageLayout from '@/components/templates/PageLayout'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, CheckCircle, Upload, ArrowRight, Send, ChevronDown } from 'lucide-react'
import { consultationSchema, JENIS_LAYANAN_OPTIONS, type ConsultationSchema } from '@/lib/validations/consultationSchema'
import { getWALink, WA_ADMIN_NUMBER } from '@/lib/utils/whatsapp'
import ConsultationForm from '@/components/organisms/ConsultationForm'

const CONTACT_INFO = [
  { icon: Phone, label: 'WhatsApp / Telepon', value: '+62 812 0000 0001', href: `https://wa.me/${WA_ADMIN_NUMBER}` },
  { icon: Mail, label: 'Email', value: 'info@servicealkes.com', href: 'mailto:info@servicealkes.com' },
  { icon: MapPin, label: 'Alamat', value: 'RT.1/RW.4, Tarikolot, Kec. Citeureup, Kabupaten Bogor, Jawa Barat 16810', href: '#' },
  { icon: Clock, label: 'Jam Operasional', value: 'Sen–Jum 08.00–17.00 | Sabtu 08.00–14.00\nEmergency 24/7', href: '#' },
]

export default function KonsultasiPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <div className="pt-24 pb-12 bg-bg-section">
        <div className="container-main">
          <div className="section-label mb-4">Konsultasi Gratis</div>
          <h1 className="text-display-xl text-primary mb-4">
            Ceritakan Kebutuhan Anda,{' '}
            <span className="gradient-text">Kami Siapkan Solusinya</span>
          </h1>
          <p className="text-secondary text-xl max-w-2xl">
            Isi form di bawah ini dan pesan WhatsApp terstruktur akan otomatis tergenerate untuk tim kami.
            Gratis, tanpa kewajiban apapun.
          </p>
        </div>
      </div>

      <section className="section-padding bg-bg">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <ConsultationForm />
            </div>

            {/* Sidebar Info */}
            <div className="space-y-5">
              {/* Contact cards */}
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex gap-4 p-5 rounded-2xl border border-border bg-white hover:border-accent/20 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-muted font-semibold uppercase tracking-wider mb-1">{label}</div>
                    <div className="text-sm font-medium text-primary whitespace-pre-line">{value}</div>
                  </div>
                </a>
              ))}

              {/* Google Maps placeholder */}
              <div className="rounded-2xl overflow-hidden border border-border h-48 bg-bg-section flex items-center justify-center">
                <div className="text-center text-muted text-sm">
                  <MapPin size={32} className="mx-auto mb-2 text-accent" />
                  <p className="font-medium text-primary">Google Maps</p>
                  <p>Kabupaten Bogor, Jawa Barat</p>
                </div>
              </div>

              {/* Trust list */}
              <div className="p-5 rounded-2xl bg-bg-section border border-border">
                <h3 className="font-bold text-sm text-primary mb-4">Mengapa Konsultasi dengan Kami?</h3>
                <ul className="space-y-2">
                  {[
                    'Konsultasi 24 jam via WA/Telepon',
                    'Survey lapangan',
                    'Estimasi harga transparan',
                    'Tanpa kewajiban apapun',
                    'Respons dalam 15 menit',
                    'teknisi berpengalaman',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-secondary">
                      <CheckCircle size={14} className="text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
