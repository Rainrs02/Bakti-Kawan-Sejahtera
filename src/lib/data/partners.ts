// lib/data/partners.ts

export interface Partner {
  id: string
  name: string
  logo: string
  type: 'hospital' | 'clinic' | 'government' | 'corporate' | 'commercial'
}

export const PARTNERS: Partner[] = [
  { id: '1', name: 'RSUP Nasional Cipto Mangunkusumo', logo: '/images/partners/rscm.svg', type: 'hospital' },
  { id: '2', name: 'RS Pondok Indah', logo: '/images/partners/rspi.svg', type: 'hospital' },
  { id: '3', name: 'Siloam Hospitals', logo: '/images/partners/siloam.svg', type: 'hospital' },
  { id: '4', name: 'Kementerian Kesehatan RI', logo: '/images/partners/kemenkes.svg', type: 'government' },
  { id: '5', name: 'BPJS Kesehatan', logo: '/images/partners/bpjs.svg', type: 'government' },
  { id: '6', name: 'Pemerintah DKI Jakarta', logo: '/images/partners/dki.svg', type: 'government' },
  { id: '7', name: 'RS Hermina', logo: '/images/partners/hermina.svg', type: 'hospital' },
  { id: '8', name: 'Omni Hospital', logo: '/images/partners/omni.svg', type: 'hospital' },
  { id: '9', name: 'Bank BRI', logo: '/images/partners/bri.svg', type: 'corporate' },
  { id: '10', name: 'PT Telkom Indonesia', logo: '/images/partners/telkom.svg', type: 'corporate' },
  { id: '11', name: 'Hotel Grand Hyatt', logo: '/images/partners/hyatt.svg', type: 'commercial' },
  { id: '12', name: 'Jaringan Klinik Prodia', logo: '/images/partners/prodia.svg', type: 'clinic' },
]

// Stats for homepage
export const COMPANY_STATS = [
  { value: 5000, suffix: '+', label: 'Proyek Selesai', description: 'Berbagai jenis furniture medis dan komersial' },
  { value: 20, suffix: '+', label: 'Tahun Pengalaman', description: 'Berpengalaman sejak 2004' },
  { value: 150, suffix: '+', label: 'Teknisi Aktif', description: 'Tersertifikasi dan terlatih' },
  { value: 34, suffix: ' Prov', label: 'Seluruh Indonesia', description: 'Dari Sabang sampai Merauke' },
]
