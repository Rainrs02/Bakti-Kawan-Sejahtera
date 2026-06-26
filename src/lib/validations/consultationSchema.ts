// lib/validations/consultationSchema.ts
import { z } from 'zod'

export const consultationSchema = z.object({
  nama: z
    .string()
    .min(3, 'Nama minimal 3 karakter')
    .max(100, 'Nama terlalu panjang'),
  
  instansi: z
    .string()
    .min(3, 'Nama instansi/perusahaan wajib diisi')
    .max(200, 'Nama instansi terlalu panjang'),
  
  email: z
    .string()
    .email('Format email tidak valid')
    .min(1, 'Email wajib diisi'),
  
  whatsapp: z
    .string()
    .regex(
      /^(\+62|62|0)[0-9]{8,13}$/,
      'Format nomor WA tidak valid (contoh: 08123456789)'
    ),
  
  jenisLayanan: z
    .array(z.string())
    .min(1, 'Pilih minimal satu jenis layanan yang dibutuhkan'),
  
  layananLainnya: z.string().max(200, 'Teks kustom terlalu panjang').optional(),
  
  lokasi: z
    .string()
    .min(5, 'Tulis lokasi lengkap (kota/kecamatan)')
    .max(300, 'Lokasi terlalu panjang'),
  
  pesan: z
    .string()
    .min(20, 'Deskripsikan kerusakan/kebutuhan Anda (minimal 20 karakter)')
    .max(2000, 'Pesan terlalu panjang'),
  
  foto: z.any().optional(),
})

export type ConsultationSchema = z.infer<typeof consultationSchema>

// Opsi jenis layanan untuk dropdown
export const JENIS_LAYANAN_OPTIONS = [
  // Alkes
  { value: 'service-bed-pasien', label: '🏥 Service Bed Pasien', category: 'Alat Kesehatan' },
  { value: 'service-ambulance', label: '🚑 Service Furniture Ambulance', category: 'Alat Kesehatan' },
  { value: 'service-meja-operasi', label: '⚕️ Service Meja Operasi', category: 'Alat Kesehatan' },
  { value: 'service-meja-periksa', label: '🩺 Service Meja Periksa', category: 'Alat Kesehatan' },
  { value: 'service-troli-emergency', label: '🚨 Service Troli Emergency', category: 'Alat Kesehatan' },
  { value: 'service-troli-instrumen', label: '🔧 Service Troli Instrumen', category: 'Alat Kesehatan' },
  { value: 'service-lemari-alkes', label: '🗄️ Service Lemari Alkes', category: 'Alat Kesehatan' },
  { value: 'service-nurse-station', label: '👩‍⚕️ Service Nurse Station', category: 'Alat Kesehatan' },
  { value: 'service-lampu-pemeriksaan', label: '💡 Service Lampu Pemeriksaan', category: 'Alat Kesehatan' },
  { value: 'service-lampu-fisioterapi', label: '🔦 Service Lampu Fisioterapi', category: 'Alat Kesehatan' },
  // Kantor
  { value: 'service-sofa-kantor', label: '🛋️ Service Sofa Kantor', category: 'Furniture Kantor' },
  { value: 'service-kursi-kantor', label: '🪑 Service Kursi Kantor', category: 'Furniture Kantor' },
  { value: 'service-lemari-arsip', label: '📁 Service Lemari Arsip', category: 'Furniture Kantor' },
  { value: 'service-meja-meeting', label: '📋 Service Meja Meeting', category: 'Furniture Kantor' },
  { value: 'service-reception-desk', label: '🏢 Service Reception Desk', category: 'Furniture Kantor' },
  // Komersial
  { value: 'service-sofa-cafe', label: '☕ Service Sofa Cafe', category: 'Furniture Komersial' },
  { value: 'service-furniture-restoran', label: '🍽️ Service Furniture Restoran', category: 'Furniture Komersial' },
  { value: 'service-furniture-hotel', label: '🏨 Service Furniture Hotel', category: 'Furniture Komersial' },
  { value: 'service-furniture-retail', label: '🛍️ Service Furniture Retail', category: 'Furniture Komersial' },
  // Lainnya
  { value: 'Lainnya', label: 'Lainnya (Kustom)', category: 'Lainnya' },
]
