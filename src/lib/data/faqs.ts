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
    question: 'Apa saja jenis furniture yang bisa di-service oleh Bakti Kawan Service?',
    answer: 'Kami melayani service furniture alat kesehatan (bed pasien, troli, meja operasi, dll), furniture kantor (sofa, kursi, lemari, meja), dan furniture komersial (cafe, restoran, hotel, retail). Total ada 19+ jenis layanan yang tersedia.',
  },
  {
    id: '2',
    category: 'Layanan',
    question: 'Apakah ada layanan konsultasi gratis sebelum memutuskan service?',
    answer: 'Ya! Kami menyediakan konsultasi 24 jam via WhatsApp dan telepon. Tim kami akan memberikan diagnosa awal dan estimasi biaya tanpa kewajiban apapun.',
  },
  {
    id: '3',
    category: 'Layanan',
    question: 'Apakah bisa service darurat/emergency di luar jam kerja?',
    answer: 'Kami tidak melayani pengerjaan di luar jam kerja (malam hari/after-hours). Namun, kami menyediakan layanan konsultasi darurat 24 jam untuk membantu Anda melakukan penanganan awal.',
  },
  {
    id: '4',
    category: 'Layanan',
    question: 'Berapa lama garansi yang diberikan setelah service?',
    answer: 'Kami memberikan garansi 3 bulan untuk konstruksi (pengelasan, tekuk plat, rangka) dan garansi 1 bulan untuk sparepart (seperti roda, komponen ABS, dll).',
  },
  // Wilayah
  {
    id: '5',
    category: 'Wilayah Layanan',
    question: 'Wilayah mana saja yang dilayani Bakti Kawan Service?',
    answer: 'Kami berbasis di Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi) dengan fast response dan penjadwalan survey cepat. Kami juga melayani seluruh Indonesia dengan sistem koordinasi pengiriman atau kunjungan lapangan.',
  },
  {
    id: '6',
    category: 'Wilayah Layanan',
    question: 'Bagaimana cara service untuk wilayah di luar Jabodetabek?',
    answer: 'Untuk luar Jabodetabek, kami melayani konsultasi via form/WhatsApp. Setelah itu, Anda bisa mengirimkan barang yang rusak ke workshop kami, atau kami dapat melakukan survei lapangan dengan biaya tertentu.',
  },
  {
    id: '7',
    category: 'Wilayah Layanan',
    question: 'Apakah ada layanan transportasi atau antar jemput gratis?',
    answer: 'Tidak ada layanan transportasi gratis. Pengiriman barang yang di servis dapat dilakukan oleh customer dengan biaya tertentu, atau bisa dikondisikan untuk diambil di tempat.',
  },
  // Harga
  {
    id: '8',
    category: 'Harga & Pembayaran',
    question: 'Bagaimana cara mengetahui estimasi biaya service?',
    answer: 'Estimasi biaya akan diberikan setelah dilakukan analisis kerusakan yang telah dikonsultasikan sebelumnya melalui form atau WhatsApp.',
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
    question: 'Apa saja tahapan proses service di Bakti Kawan Service?',
    answer: '1) Konsultasi lewat form. 2) Dilanjutkan dengan pengiriman video ke Admin via WA. 3) Analisis kerusakan. 4) Kami memberikan estimasi durasi pengerjaan, pilihan sparepart, dan penawaran harga. 5) Pengiriman barang yang diservis oleh customer dengan biaya tertentu atau diambil di tempat.',
  },
  {
    id: '12',
    category: 'Proses Service',
    question: 'Berapa lama rata-rata waktu pengerjaan service?',
    answer: 'Waktu pengerjaan sangat bervariasi bergantung pada level kerusakan dan ketersediaan sparepart. Estimasi waktu akan selalu kami sampaikan di awal penawaran.',
  },
  {
    id: '13',
    category: 'Proses Service',
    question: 'Apakah furniture harus dibawa ke workshop (pabrik) atau dikerjakan on-site?',
    answer: 'Proses pengerjaan bisa dilakukan dengan membawa barang ke pabrik kami atau dikerjakan langsung di lokasi (on-site). Semua ini bergantung pada level kerusakan barang tersebut.',
  },
  // Kualitas
  {
    id: '14',
    category: 'Kualitas & Spare Part',
    question: 'Sparepart apa yang digunakan untuk perbaikan?',
    answer: 'Kami menyediakan pilihan sparepart Standar dan Premium. Hal ini memberikan kebebasan bagi customer untuk memilih opsi ekonomis sesuai anggaran, atau opsi premium untuk keawetan maksimal.',
  },
  {
    id: '15',
    category: 'Kualitas & Spare Part',
    question: 'Bagaimana memastikan kualitas pekerjaan setelah service?',
    answer: 'Setiap pekerjaan melalui proses quality control sebelum serah terima. Teknisi senior kami melakukan inspeksi akhir, dan klien diundang untuk menyaksikan pengujian fungsi sebelum pekerjaan dinyatakan selesai.',
  },
]

export const FAQ_CATEGORIES = [...new Set(FAQS.map((f) => f.category))]
