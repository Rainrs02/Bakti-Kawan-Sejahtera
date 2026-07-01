// lib/utils/whatsapp.ts
import type { ConsultationFormData } from '@/types/consultation'

// Nomor WA Admin (dummy — ganti dengan nomor asli)
export const WA_ADMIN_NUMBER = '6281200000001'

export function generateWAMessage(data: ConsultationFormData): string {
  const selectedServices = data.jenisLayanan || []
  const formattedServices = selectedServices.map(svc => {
    if (svc.includes('Lainnya (Kustom)') && data.layananLainnya) {
      return `${svc} [Kustom: ${data.layananLainnya}]`
    }
    return svc
  }).join('\n- ')

  const jenisLayananLabel = formattedServices.length > 0 ? `\n- ${formattedServices}` : 'Belum dipilih'
  
  const message = `*PERMINTAAN KONSULTASI GRATIS*
*servicealkes.com*
━━━━━━━━━━━━━━━━━━━━━━

👤 *Nama:* ${data.nama}
🏥 *Instansi/Perusahaan:* ${data.instansi}
📧 *Email:* ${data.email}
📱 *WhatsApp:* ${data.whatsapp}

🔧 *Jenis Layanan:* ${jenisLayananLabel}
📍 *Lokasi:* ${data.lokasi}

💬 *Pesan/Deskripsi Kerusakan:*
${data.pesan}

━━━━━━━━━━━━━━━━━━━━━━
_Pesan ini dikirim otomatis dari servicealkes.com_
_Mohon balas pesan ini untuk konfirmasi jadwal survey_`

  return encodeURIComponent(message)
}

export function getWALink(data: ConsultationFormData): string {
  const message = generateWAMessage(data)
  return `https://wa.me/${WA_ADMIN_NUMBER}?text=${message}`
}

export function getWADirectLink(customMessage?: string): string {
  if (customMessage) {
    return `https://wa.me/${WA_ADMIN_NUMBER}?text=${encodeURIComponent(customMessage)}`
  }
  const defaultMessage = encodeURIComponent(
    'Halo Bakti Kawan Service, saya ingin konsultasi mengenai layanan service furniture. Mohon informasinya. Terima kasih.'
  )
  return `https://wa.me/${WA_ADMIN_NUMBER}?text=${defaultMessage}`
}
