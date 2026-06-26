// lib/data/testimonials.ts

export interface Testimonial {
  id: string
  name: string
  role: string
  institution: string
  avatar: string
  rating: number
  text: string
  service: string
  date: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Ahmad Santoso',
    role: 'Direktur Operasional',
    institution: 'RS Pusat Jakarta Timur',
    avatar: '/images/testimonials/avatar-1.jpg',
    rating: 5,
    text: 'Sangat puas dengan layanan Bakti Kawan Sejahtera. Bed pasien ICU kami yang rusak berhasil diperbaiki hanya dalam 1 hari. Teknisinya profesional, tepat waktu, dan hasilnya memuaskan. Spare part yang digunakan juga original.',
    service: 'Service Bed Pasien',
    date: '2024-11-15',
  },
  {
    id: '2',
    name: 'Siti Rahmawati, S.Kep',
    role: 'Kepala Keperawatan',
    institution: 'RSUD Bekasi',
    avatar: '/images/testimonials/avatar-2.jpg',
    rating: 5,
    text: 'Tim Bakti Kawan Sejahtera luar biasa. Troli emergency kami yang macet dikerjakan sangat cepat dan rapi. Teknisinya juga menjelaskan penyebab kerusakan dengan detail. Pasti akan menggunakan jasa mereka lagi.',
    service: 'Service Troli Emergency',
    date: '2024-10-22',
  },
  {
    id: '3',
    name: 'Hendra Wijaya',
    role: 'Facility Manager',
    institution: 'Klinik Sehat Bersama',
    avatar: '/images/testimonials/avatar-3.jpg',
    rating: 5,
    text: 'Nurse station kami yang sudah 5 tahun terlihat baru lagi setelah direnovasi oleh tim BKS. Hasilnya melebihi ekspektasi, dan harganya sangat kompetitif. Garansi 12 bulan yang diberikan juga membuat kami tenang.',
    service: 'Service Nurse Station',
    date: '2024-09-08',
  },
  {
    id: '4',
    name: 'Dewi Kusuma',
    role: 'Owner',
    institution: 'Kopi Nusantara Cafe',
    avatar: '/images/testimonials/avatar-4.jpg',
    rating: 5,
    text: 'Sofa cafe saya yang sudah lusuh berubah total setelah di-reupholstery oleh Bakti Kawan. Banyak pelanggan yang komentar sofa saya keliatan lebih cantik dan nyaman. Sangat recommended untuk bisnis F&B!',
    service: 'Service Sofa Cafe',
    date: '2024-08-30',
  },
  {
    id: '5',
    name: 'Ir. Bambang Sutrisno',
    role: 'General Services Manager',
    institution: 'Bank Nasional Indonesia',
    avatar: '/images/testimonials/avatar-5.jpg',
    rating: 5,
    text: 'Kami meng-service lebih dari 200 kursi kantor sekaligus dengan BKS. Hasilnya konsisten dan dikerjakan tepat jadwal tanpa mengganggu operasional kantor. Harga juga sangat kompetitif untuk volume sebesar ini.',
    service: 'Service Kursi Kantor',
    date: '2024-07-14',
  },
  {
    id: '6',
    name: 'dr. Maya Putri',
    role: 'Kepala Klinik',
    institution: 'Puskesmas Cakung Jakarta Timur',
    avatar: '/images/testimonials/avatar-6.jpg',
    rating: 5,
    text: 'Meja periksa dan lampu pemeriksaan kami diperbaiki dengan sangat profesional. Teknisi datang tepat waktu, memberikan estimasi akurat, dan hasilnya memuaskan. Pelayanan 24/7 mereka sangat membantu di saat darurat.',
    service: 'Service Meja Periksa',
    date: '2024-06-20',
  },
]
