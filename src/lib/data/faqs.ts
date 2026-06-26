// lib/data/faqs.ts

export interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

export const FAQS: FAQItem[] = [
  // Layanan
  {
    id: '1',
    category: 'Layanan',
    question: 'Apa saja jenis furniture yang bisa di-service oleh Bakti Kawan Sejahtera?',
    answer: 'Kami melayani service furniture alat kesehatan (bed pasien, troli, meja operasi, dll), furniture kantor (sofa, kursi, lemari, meja), dan furniture komersial (cafe, restoran, hotel, retail). Total ada 19+ jenis layanan yang tersedia.',
  },
  {
    id: '2',
    category: 'Layanan',
    question: 'Apakah ada layanan konsultasi gratis sebelum memutuskan service?',
    answer: 'Ya! Kami menyediakan konsultasi gratis via WhatsApp, telepon, atau kunjungan langsung. Tim kami akan memberikan diagnosa awal dan estimasi biaya tanpa kewajiban apapun.',
  },
  {
    id: '3',
    category: 'Layanan',
    question: 'Apakah bisa service darurat/emergency di luar jam kerja?',
    answer: 'Ya, kami memiliki layanan emergency 24/7 khusus untuk fasilitas kesehatan yang membutuhkan respons cepat. Tambahan biaya mungkin berlaku untuk layanan di luar jam kerja normal.',
  },
  {
    id: '4',
    category: 'Layanan',
    question: 'Berapa lama garansi yang diberikan setelah service?',
    answer: 'Garansi bervariasi sesuai jenis pekerjaan: 3-6 bulan untuk perbaikan komponen, 6-12 bulan untuk reupholstery dan renovasi, dan 12 bulan untuk pengerjaan besar. Semua garansi tertulis dalam dokumen resmi.',
  },
  // Wilayah
  {
    id: '5',
    category: 'Wilayah Layanan',
    question: 'Wilayah mana saja yang dilayani Bakti Kawan Sejahtera?',
    answer: 'Kami berbasis di Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi) dengan fast response dan penjadwalan survey cepat. Kami juga melayani seluruh Indonesia dengan sistem koordinasi teknisi dan mitra lokal.',
  },
  {
    id: '6',
    category: 'Wilayah Layanan',
    question: 'Bagaimana cara service untuk wilayah di luar Jabodetabek?',
    answer: 'Untuk luar Jabodetabek, kami melakukan konsultasi dan diagnosis via foto/video WhatsApp, kemudian merencanakan kunjungan teknisi atau berkoordinasi dengan mitra teknisi lokal kami di berbagai kota.',
  },
  {
    id: '7',
    category: 'Wilayah Layanan',
    question: 'Apakah ada biaya transportasi untuk teknisi ke lokasi saya?',
    answer: 'Untuk wilayah Jabodetabek, survey gratis tanpa biaya transportasi. Untuk wilayah lain, biaya transportasi akan didiskusikan dan dicantumkan dalam penawaran yang transparan.',
  },
  // Harga
  {
    id: '8',
    category: 'Harga & Pembayaran',
    question: 'Bagaimana cara mengetahui estimasi biaya service?',
    answer: 'Estimasi biaya diberikan setelah survey lapangan (gratis). Kami juga menyediakan konsultasi awal via foto/video untuk perkiraan biaya awal. Semua harga transparan dan tidak ada biaya tersembunyi.',
  },
  {
    id: '9',
    category: 'Harga & Pembayaran',
    question: 'Apakah ada metode pembayaran yang tersedia?',
    answer: 'Kami menerima pembayaran via transfer bank (BCA, BRI, Mandiri, BNI), tunai, dan untuk klien korporat tersedia pembayaran dengan purchase order (PO). Faktur resmi tersedia.',
  },
  {
    id: '10',
    category: 'Harga & Pembayaran',
    question: 'Apakah ada harga khusus untuk proyek massal atau kontrak jangka panjang?',
    answer: 'Ya, kami memberikan harga khusus untuk volume besar, proyek massal, dan kontrak maintenance berkala. Hubungi tim kami untuk penawaran khusus sesuai kebutuhan perusahaan Anda.',
  },
  // Proses
  {
    id: '11',
    category: 'Proses Service',
    question: 'Apa saja tahapan proses service di Bakti Kawan Sejahtera?',
    answer: '1) Konsultasi via WA/telepon, 2) Survey lapangan gratis, 3) Diagnosa dan penawaran harga, 4) Konfirmasi dan penjadwalan, 5) Pengerjaan oleh teknisi bersertifikasi, 6) QC dan serah terima, 7) Garansi tertulis diberikan.',
  },
  {
    id: '12',
    category: 'Proses Service',
    question: 'Berapa lama rata-rata waktu pengerjaan service?',
    answer: 'Perbaikan ringan: 1-4 jam on-site. Perbaikan sedang: 1-3 hari. Renovasi besar atau reupholstery: 3-7 hari. Waktu pengerjaan selalu dikomunikasikan di awal sebelum pekerjaan dimulai.',
  },
  {
    id: '13',
    category: 'Proses Service',
    question: 'Apakah furniture harus dibawa ke workshop atau dikerjakan on-site?',
    answer: 'Tergantung jenis pekerjaan. Banyak service yang bisa dilakukan on-site di lokasi Anda. Untuk pengerjaan yang membutuhkan alat workshop khusus, kami menyediakan layanan pickup & delivery.',
  },
  // Kualitas
  {
    id: '14',
    category: 'Kualitas & Spare Part',
    question: 'Spare part yang digunakan apakah original/OEM?',
    answer: 'Kami mengutamakan spare part berkualitas tinggi. Untuk beberapa komponen, kami menggunakan spare part aftermarket premium yang telah diuji kualitasnya. Jenis spare part selalu dikomunikasikan dalam penawaran.',
  },
  {
    id: '15',
    category: 'Kualitas & Spare Part',
    question: 'Bagaimana memastikan kualitas pekerjaan setelah service?',
    answer: 'Setiap pekerjaan melalui proses quality control sebelum serah terima. Teknisi senior kami melakukan inspeksi akhir, dan klien diundang untuk menyaksikan pengujian fungsi sebelum pekerjaan dinyatakan selesai.',
  },
]

export const FAQ_CATEGORIES = [...new Set(FAQS.map((f) => f.category))]
