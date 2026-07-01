// lib/data/services.ts
import type { ServiceData, CategoryPageData } from '@/types/service'

const DEFAULT_PROCESS = [
  {
    step: 1,
    title: 'Hubungi Kami',
    description: 'Hubungi kami via WhatsApp, telepon, atau form konsultasi. Tim kami siap merespons dalam 15 menit.',
    icon: 'phone',
  },
  {
    step: 2,
    title: 'Survey Gratis',
    description: 'Teknisi berpengalaman kami akan datang ke lokasi Anda untuk survey dan diagnosis kerusakan secara akurat.',
    icon: 'map-pin',
  },
  {
    step: 3,
    title: 'Penawaran Harga',
    description: 'Kami memberikan estimasi biaya yang transparan dan kompetitif sebelum pekerjaan dimulai.',
    icon: 'file-text',
  },
  {
    step: 4,
    title: 'Perbaikan Profesional',
    description: 'Teknisi bersertifikasi kami melakukan perbaikan menggunakan spare part berkualitas dan peralatan modern.',
    icon: 'wrench',
  },
  {
    step: 5,
    title: 'Bergaransi',
    description: 'Setiap pekerjaan dilengkapi garansi 3 bulan. Kepuasan Anda adalah prioritas kami.',
    icon: 'shield-check',
  },
]

export const SERVICES: ServiceData[] = [
  // =============================================
  // KATEGORI: ALKES (10 layanan)
  // =============================================
  {
    slug: 'service-bed-pasien',
    name: 'Service Bed Pasien',
    shortName: 'Bed Pasien',
    category: 'alkes',
    heroTitle: 'Jasa Service Bed Pasien Rumah Sakit & Klinik | Profesional & Bergaransi',
    heroSubtitle: 'Layanan reparasi, pemeliharaan, dan refurbishment bed pasien manual, elektrik, hingga ICU bed di Jabodetabek & seluruh Indonesia.',
    description: 'Solusi terpercaya untuk perbaikan sistem mekanis, elektrikal, actuator, hidrolik, dan jok bed pasien rumah sakit.',
    longDescription: `Ranjang pasien (bed pasien) merupakan aset vital di setiap fasilitas kesehatan. Kerusakan pada bed pasien dapat mengganggu kenyamanan dan keselamatan pasien, serta menghambat kinerja tenaga medis. PT Bakti Kawan Service hadir sebagai partner terpercaya untuk jasa service bed pasien secara profesional di Jabodetabek dan seluruh Indonesia.

Teknisi kami memiliki sertifikasi resmi dan keahlian mendalam untuk memperbaiki berbagai jenis ranjang medis, mulai dari tipe manual (1 crank, 2 crank, 3 crank), bed elektrik otomatis, hingga ranjang ruang ICU dengan sistem hidrolik yang rumit. Kami mengatasi masalah seperti actuator elektrik mati, kebocoran oli hidrolik, crank manual dol/macet, karat pada rangka, hingga kerusakan roda dan sistem pengunci (central lock system).

Guna menjamin keamanan jangka panjang, kami hanya menggunakan suku cadang berkualitas OEM yang orisinal. Layanan kami meliputi perbaikan struktural (welding & alignment), refurbishment jok matras dengan medical-grade anti-bacterial vinyl, pengecatan ulang anti-karat (powder coating), serta kalibrasi fungsi keseluruhan. Setiap pekerjaan kami lengkapi dengan garansi 3 bulan untuk ketenangan pikiran Anda.`,
    benefits: [
      'Teknisi bersertifikasi dengan pengalaman 10+ tahun',
      'Spare part berkualitas OEM original',
      'Fast response Jabodetabek (layanan cepat)',
      'Garansi 3 bulan',
      'Penanganan bed manual, electric, dan ICU',
      'Perbaikan on-site di lokasi fasilitas kesehatan',
      'Harga transparan tanpa biaya tersembunyi',
      'Layanan maintenance berkala tersedia',
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      {
        question: 'Berapa lama proses perbaikan bed pasien biasanya?',
        answer: 'Tergantung tingkat kerusakan. Perbaikan ringan (engsel, roda, rem) dapat diselesaikan dalam 1-2 jam di lokasi. Kerusakan berat pada sistem hydraulic atau electric membutuhkan 1-3 hari kerja.',
      },
      {
        question: 'Apakah bisa service bed pasien di luar Jabodetabek?',
        answer: 'Ya, kami melayani seluruh Indonesia. Untuk wilayah luar Jabodetabek, kami menyediakan layanan survey online/foto, kemudian penjadwalan teknisi atau kerjasama dengan teknisi mitra lokal.',
      },
      {
        question: 'Spare part yang digunakan apakah original?',
        answer: 'Ya, kami menggunakan spare part berkualitas tinggi. Kami bekerja sama langsung dengan distributor spare part terpercaya untuk memastikan kualitas dan keaslian.',
      },
      {
        question: 'Apakah ada garansi setelah perbaikan?',
        answer: 'Setiap perbaikan yang kami lakukan disertai garansi 3 bulan, tergantung jenis pekerjaan. Jika ada masalah dalam periode garansi, kami akan memperbaikinya tanpa biaya tambahan.',
      },
      {
        question: 'Berapa estimasi biaya service bed pasien?',
        answer: 'Biaya bervariasi tergantung jenis dan tingkat kerusakan. Kami memberikan estimasi harga gratis setelah survey. Hubungi kami untuk konsultasi awal tanpa biaya.',
      },
    ],
    gallery: [],
    relatedSlugs: ['service-troli-emergency', 'service-nurse-station', 'service-meja-periksa'],
    metaTitle: 'Service Bed Pasien Profesional | Bakti Kawan Service Jakarta',
    metaDescription: 'Jasa service dan perbaikan bed pasien rumah sakit, klinik, puskesmas. Teknisi bersertifikasi, spare part berkualitas, garansi. Fast response Jabodetabek. Hubungi kami sekarang!',
    image: '/images/services/bed-pasien.png',
    imageAlt: 'Teknisi PT Bakti Kawan Service sedang melakukan perbaikan bed pasien rumah sakit',
  },

  {
    slug: 'service-ambulance',
    name: 'Service Furniture Ambulance',
    shortName: 'Furniture Ambulance',
    category: 'alkes',
    heroTitle: 'Service & Refurbishment Interior Ambulance | Standar Medis',
    heroSubtitle: 'Reparasi stretcher, bracket pengunci tandu, kabinet medis, dan restrukturisasi interior ambulance agar selalu siap pakai.',
    description: 'Perbaikan dan modifikasi interior kendaraan ambulance untuk memastikan fungsionalitas dan keamanan pasien selama mobilisasi.',
    longDescription: `Kondisi interior dan furniture di dalam mobil ambulance harus selalu berada dalam kondisi 100% prima demi keselamatan pasien selama transportasi darurat. Guncangan di jalan menuntut semua kompartemen, terutama sistem pengunci stretcher dan bracket medis, berfungsi dengan presisi tinggi. PT Bakti Kawan Service menyediakan jasa reparasi dan refurbishment terlengkap untuk interior ambulance.

Kami melayani perbaikan tandu stretcher (baik tipe lipat maupun automatic loading), penggantian pelapis matras dengan bahan vinyl standar medis yang anti-mikroba dan mudah didekontaminasi, perbaikan kabinet obat berbahan multiplex atau stainless steel, hingga penguatan bracket tabung oksigen dan dudukan gantungan infus.

Dengan dukungan teknisi berpengalaman di bidang karoseri dan interior kendaraan medis, kami memastikan setiap modifikasi dan perbaikan memenuhi regulasi dinas kesehatan. Kami siap melakukan pekerjaan on-site di pool ambulance atau rumah sakit Anda untuk meminimalisir downtime operasional unit rescue.`,
    benefits: [
      'Memenuhi standar keselamatan medis',
      'Teknisi berpengalaman interior kendaraan medis',
      'Spare part sesuai spesifikasi ambulance',
      'Inspeksi keamanan menyeluruh',
      'Service on-site di pool ambulance',
      'Garansi 3 bulan',
      'Sertifikat kelayakan tersedia',
      'Konsultasi desain ulang interior',
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      {
        question: 'Apa saja komponen ambulance yang bisa di-service?',
        answer: 'Kami menangani tandu/stretcher, bracket mounting, kabinet obat dan alkes, kursi attendant, sistem pengikat pasien, pencahayaan interior, dan berbagai furniture interior ambulance lainnya.',
      },
      {
        question: 'Apakah service bisa dilakukan di pool ambulance kami?',
        answer: 'Ya, kami menyediakan layanan service on-site di lokasi Anda. Teknisi kami akan datang ke pool ambulance, RS, atau instansi Anda untuk meminimalisir gangguan operasional.',
      },
      {
        question: 'Berapa lama downtime ambulance selama service?',
        answer: 'Kami berusaha meminimalisir downtime. Perbaikan sedang biasanya 4-8 jam. Untuk renovasi interior total, estimasi 2-5 hari kerja. Kami juga bisa mengatur jadwal service di luar jam operasional.',
      },
    ],
    gallery: [],
    relatedSlugs: ['service-bed-pasien', 'service-troli-emergency', 'service-lemari-alkes'],
    metaTitle: 'Service Furniture Ambulance Profesional | Bakti Kawan Service',
    metaDescription: 'Layanan service furniture interior ambulance: tandu, bracket, kabinet medis. Teknisi berpengalaman, standar keselamatan medis. Fast response Jabodetabek. Hubungi kami!',
    image: '/images/services/ambulance.png',
    imageAlt: 'Interior mobil ambulance dengan tandu stretcher dan kabinet medis yang telah diperbaiki',
  },

  {
    slug: 'service-meja-operasi',
    name: 'Service Meja Operasi',
    shortName: 'Meja Operasi',
    category: 'alkes',
    heroTitle: 'Jasa Service Meja Operasi (Surgical Table) Presisi Tinggi',
    heroSubtitle: 'Perbaikan sistem elektrik, hidrolik, mekanik, remote control, dan kalibrasi sudut kemiringan meja operasi rumah sakit.',
    description: 'Teknisi ahli untuk perbaikan meja operasi berbagai brand medis internasional dengan garansi presisi dan keamanan pasien.',
    longDescription: `Meja operasi (operating table/surgical table) adalah perangkat dengan tingkat kerumitan mekanis dan hidrolik yang tinggi. Kerusakan kecil pada sistem penyesuaian sudut (tilt, lateral, trendelenburg) dapat sangat fatal saat tindakan bedah berlangsung. PT Bakti Kawan Service menghadirkan teknisi spesialis yang terlatih untuk melakukan diagnosa mendalam dan perbaikan meja operasi kamar bedah.

Cakupan layanan kami meliputi perbaikan sistem hidrolik (kebocoran seal piston, penggantian oli hidrolik khusus), sistem elektrikal (actuator, control box, remote control kabel/wireless), restorasi struktur stainless steel anti-korosi (grade SUS 304), penggantian matras memory foam dengan pelapis anti-statis (antistatic vinyl), serta perbaikan aksesoris penunjang seperti armrest, headrest, dan leg holder.

Kami melayani perbaikan untuk berbagai merek meja operasi terkemuka (seperti Maquet, Trumpf, Merivaara, Mizuho, dll). Seluruh pengerjaan diakhiri dengan proses kalibrasi ketat untuk memastikan akurasi posisi sesuai indikator derajat panel kontrol.`,
    benefits: [
      'Teknisi spesialis peralatan bedah',
      'Diagnostic tools modern',
      'Perbaikan sistem hydraulic dan electric',
      'Kalibrasi posisi dan angulasi',
      'Spare part presisi tinggi',
      'Laporan servis tertulis',
      'Garansi 3 bulan',
      'Emergency service tersedia',
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      {
        question: 'Merek meja operasi apa saja yang bisa di-service?',
        answer: 'Kami berpengalaman menangani berbagai merek: Maquet, Trumpf, Merivaara, Schaerer, Brumaba, dan merek lokal. Hubungi kami untuk konfirmasi kompatibilitas merek Anda.',
      },
      {
        question: 'Apakah kalibrasi ulang diperlukan setelah perbaikan?',
        answer: 'Ya, setiap perbaikan pada sistem positioning dan hydraulic selalu diikuti kalibrasi ulang untuk memastikan akurasi dan keamanan. Kami menyediakan sertifikat kalibrasi.',
      },
    ],
    gallery: [],
    relatedSlugs: ['service-lampu-pemeriksaan', 'service-nurse-station', 'service-meja-periksa'],
    metaTitle: 'Service Meja Operasi Profesional | Bakti Kawan Service Jakarta',
    metaDescription: 'Service dan perbaikan meja operasi: sistem hydraulic, electric, positioning. Teknisi bersertifikasi, berbagai merek internasional. Fast response Jabodetabek. Konsultasi gratis!',
    image: '/images/services/meja-operasi.png',
    imageAlt: 'Meja operasi stainless steel modern di dalam ruang operasi rumah sakit',
  },

  {
    slug: 'service-meja-periksa',
    name: 'Service Meja Periksa',
    shortName: 'Meja Periksa',
    category: 'alkes',
    heroTitle: 'Service Meja Periksa Pasien (Examination Table) Klinik & RS',
    heroSubtitle: 'Jasa perbaikan bed periksa manual, meja ginekologi (obgyn bed), dan meja tindakan medis dengan hasil rapi dan higienis.',
    description: 'Layanan ganti kulit oscar, tambah busa, perbaikan engsel penyangga kepala, dan struktur rangka meja periksa pasien.',
    longDescription: `Meja periksa pasien (examination table) yang robek, kotor, atau tidak stabil rangkanya dapat mengurangi rasa nyaman pasien serta merusak citra profesional klinik atau rumah sakit Anda. PT Bakti Kawan Service memberikan solusi cepat untuk service dan refurbishment meja periksa, meja tindakan, serta obgyn bed (meja ginekologi).

Layanan kami meliputi penggantian busa dengan high-density foam yang tahan amblas, pelapisan ulang jok menggunakan kulit sintetis (vinyl/oscar) berkualitas tinggi yang anti-bakteri, tahan air, dan mudah dibersihkan menggunakan disinfektan. Kami juga memperbaiki engsel adjuster kemiringan kepala, pengelasan struktur besi yang keropos, penggantian kaki karet anti-selip, hingga modifikasi penambahan dudukan roll kertas pelapis.

Pengerjaan dapat dilakukan langsung di lokasi klinik Anda (on-site service) agar tidak mengganggu operasional harian dokter dan perawat.`,
    benefits: [
      'Perbaikan meja periksa manual dan elektrik',
      'Penggantian busa dan vinyl cover',
      'Perbaikan sistem sandaran dan footrest',
      'Service meja ginekologi khusus',
      'Harga terjangkau dan transparan',
      'Garansi 3 bulan',
      'Fast response untuk darurat',
      'Konsultasi pemilihan bahan gratis',
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      {
        question: 'Apakah bisa hanya ganti busa/jok saja?',
        answer: 'Ya, kami menerima penggantian busa, foam, dan vinyl/leather cover saja. Kami memiliki berbagai pilihan bahan yang sesuai standar medis (mudah dibersihkan, antibacterial).',
      },
    ],
    gallery: [],
    relatedSlugs: ['service-bed-pasien', 'service-meja-operasi', 'service-nurse-station'],
    metaTitle: 'Service Meja Periksa Klinik & RS | Bakti Kawan Service',
    metaDescription: 'Layanan service meja periksa pasien: examination table manual & elektrik, meja ginekologi. Teknisi berpengalaman, penggantian busa berkualitas. Garansi.',
    image: '/images/services/meja-periksa.png',
    imageAlt: 'Bed periksa pasien klinik dengan pelapis kulit sintetis putih bersih yang nyaman',
  },

  {
    slug: 'service-troli-emergency',
    name: 'Service Troli Emergency',
    shortName: 'Troli Emergency',
    category: 'alkes',
    heroTitle: 'Service Troli Emergency (Crash Cart) & Resusitasi',
    heroSubtitle: 'Perbaikan sistem laci central lock, roda caster rem ganda, bracket defibrillator, dan tiang infus troli darurat.',
    description: 'Perbaikan cepat troli emergency IGD dan ICU untuk memastikan kesiapan 100% dalam penanganan pasien kritis.',
    longDescription: `Troli emergency atau crash cart adalah garda terdepan dalam menyelamatkan nyawa pasien di unit gawat darurat (IGD) atau ICU. Seluruh komponennya — mulai dari roda yang harus berputar mulus 360 derajat, laci yang harus terbuka instan saat ditarik, hingga sistem penguncian segel pengaman — wajib berfungsi tanpa celah. PT Bakti Kawan Service memprioritaskan layanan perbaikan troli emergency demi mendukung kesiapan medis Anda.

Layanan perbaikan kami mencakup penyetelan ulang rel laci yang macet atau keluar jalur, perbaikan sistem penguncian central lock / break-away lock, penggantian roda caster medis dengan tipe polyurethane anti-bising dan anti-statis lengkap dengan double lock, perbaikan bracket defibrillator, tiang infus terintegrasi, serta papan resusitasi jantung (cpr board).

Kami memahami urgensi alat ini, sehingga kami menawarkan waktu respons kilat dan estimasi pengerjaan penjadwalan cepat untuk perbaikan ringan di wilayah Jabodetabek.`,
    benefits: [
      'Prioritas layanan untuk alat emergency',
      'Perbaikan laci dan sistem kunci',
      'Service roda dan rem',
      'Pengecatan dan refurbishment',
      'Penggantian label dan marking',
      'Inspeksi komprehensif',
      'Garansi 3 bulan',
      'Emergency call 24/7',
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      {
        question: 'Berapa lama waktu service troli emergency?',
        answer: 'Perbaikan standar dapat diselesaikan dalam 2-4 jam. Untuk refurbishment total, membutuhkan 1-2 hari kerja. Kami memahami urgensi alat ini dan akan memprioritaskan pengerjaannya.',
      },
    ],
    gallery: [],
    relatedSlugs: ['service-troli-instrumen', 'service-nurse-station', 'service-lemari-alkes'],
    metaTitle: 'Service Troli Emergency & Crash Cart | Bakti Kawan Service',
    metaDescription: 'Service dan perbaikan troli emergency, crash cart, resuscitation trolley. Prioritas tinggi, respons cepat. Teknisi berpengalaman. Fast response Jabodetabek.',
    image: '/images/services/workshop.png',
    imageAlt: 'Proses perbaikan dan penyesuaian komponen troli emergency di bengkel kerja',
  },

  {
    slug: 'service-troli-instrumen',
    name: 'Service Troli Instrumen',
    shortName: 'Troli Instrumen',
    category: 'alkes',
    heroTitle: 'Jasa Service Troli Instrumen Stainless Steel RS',
    heroSubtitle: 'Restorasi, poles stainless, perbaikan roda bising, dan pengelasan troli instrumen medis kamar operasi.',
    description: 'Perbaikan troli instrumen medis, mayo stand, dan meja dorong obat berbahan stainless steel dengan standar sterilisasi tinggi.',
    longDescription: `Troli instrumen medis yang digunakan di kamar operasi (OK) atau ruang sterilisasi (CSSD) dituntut bebas dari karat, retak, dan kotoran tersembunyi yang dapat menjadi sarang bakteri. PT Bakti Kawan Service menyediakan layanan reparasi khusus untuk troli instrumen stainless steel, mayo stand, serta bowl stand.

Teknisi kami ahli dalam pengelasan argon (TIG welding) untuk memperbaiki sambungan besi stainless yang lepas tanpa meninggalkan celah tajam yang berbahaya bagi petugas medis. Kami juga melayani poles permukaan stainless steel menggunakan pasta khusus untuk mengembalikan lapisan pasif (passivation) yang mencegah korosi akibat paparan disinfektan kimiawi.

Selain itu, kami mengganti roda caster berkarat atau bising dengan roda berkualitas tinggi bersertifikasi medis yang tidak merusak lantai epoxy rumah sakit.`,
    benefits: [
      'Perbaikan roda dan caster',
      'Service engsel dan laci',
      'Poles dan restorasi permukaan stainless',
      'Penggantian tray dan aksesori',
      'Standar kebersihan medis',
      'Garansi 3 bulan',
      'Konsultasi ergonomi',
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      {
        question: 'Apakah permukaan stainless bisa dipoles kembali?',
        answer: 'Ya, kami memiliki layanan restorasi dan poles permukaan stainless steel yang dapat menghilangkan goresan ringan dan mengembalikan kilap asli. Untuk kerusakan berat, kami bisa melakukan penggantian panel.',
      },
    ],
    gallery: [],
    relatedSlugs: ['service-troli-emergency', 'service-meja-operasi', 'service-lemari-alkes'],
    metaTitle: 'Service Troli Instrumen Medis | Bakti Kawan Service Jakarta',
    metaDescription: 'Layanan service troli instrumen medis, mayo stand, instrument trolley. Standar kebersihan medis, restorasi stainless. Teknisi berpengalaman. Hubungi kami.',
    image: '/images/services/meja-operasi.png',
    imageAlt: 'Troli instrumen medis stainless steel steril di samping meja operasi',
  },

  {
    slug: 'service-lemari-alkes',
    name: 'Service Lemari Alkes',
    shortName: 'Lemari Alkes',
    category: 'alkes',
    heroTitle: 'Service & Modifikasi Lemari Alat Kesehatan (Medicine Cabinet)',
    heroSubtitle: 'Reparasi pintu kaca lemari obat, sistem kunci pengaman narkotika, rak gantung, dan restorasi cat kabinet medis.',
    description: 'Layanan service lemari penyimpanan instrumen, lemari obat steril, dan lemari narkotika dengan sistem pengaman ganda.',
    longDescription: `Lemari alat kesehatan (alkes) dan lemari obat merupakan tempat penyimpanan krusial yang memerlukan standar keamanan dan higienitas tinggi. Pintu yang macet, kaca yang retak, atau kunci yang rusak dapat menghambat akses obat saat kondisi darurat atau bahkan melanggar standar akreditasi rumah sakit. PT Bakti Kawan Service menyediakan jasa perbaikan dan refurbishment lemari alkes secara tuntas.

Kami menangani penggantian engsel pintu lemari, pemasangan kaca tempered baru, perbaikan rel laci geser, hingga kalibrasi atau upgrade kunci pengaman khusus untuk lemari narkotika/psikotropika (double lock system sesuai standar Kemenkes). Kami juga melayani pengecatan ulang menggunakan cat epoxy oven (powder coating) yang tahan terhadap cairan kimia antiseptik.

Modifikasi penambahan sekat rak acrylic atau lampu LED internal juga dapat disesuaikan dengan kebutuhan ruang farmasi Anda.`,
    benefits: [
      'Perbaikan pintu dan engsel',
      'Service sistem kunci dan gembok',
      'Penggantian rak dan divider',
      'Pengecatan dan refurbishment',
      'Standar kebersihan medis',
      'Berbagai material tersedia',
      'Garansi 3 bulan',
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      {
        question: 'Bisa pesan lemari alkes custom?',
        answer: 'Ya, selain service kami juga melayani pembuatan lemari alkes custom sesuai kebutuhan spesifik fasilitas Anda. Konsultasikan kebutuhan dimensi, material, dan konfigurasi rak dengan tim kami.',
      },
    ],
    gallery: [],
    relatedSlugs: ['service-nurse-station', 'service-troli-instrumen', 'service-bed-pasien'],
    metaTitle: 'Service Lemari Alkes & Medicine Cabinet | Bakti Kawan Service',
    metaDescription: 'Layanan service lemari alat kesehatan, medicine cabinet, storage medis. Perbaikan pintu, kunci, rak. Standar kebersihan medis. Fast response Jabodetabek.',
    image: '/images/services/workshop.png',
    imageAlt: 'Teknisi sedang melakukan perbaikan lemari penyimpanan obat rumah sakit',
  },

  {
    slug: 'service-nurse-station',
    name: 'Service Nurse Station',
    shortName: 'Nurse Station',
    category: 'alkes',
    heroTitle: 'Jasa Service & Renovasi Nurse Station (Meja Perawat)',
    heroSubtitle: 'Refurbishment meja counter perawat, perbaikan laci rekam medis, instalasi jalur kabel data, dan peremajaan estetika.',
    description: 'Layanan restorasi, perbaikan struktur, dan renovasi nurse station agar lebih ergonomis, fungsional, dan rapi.',
    longDescription: `Nurse station adalah jantung dari setiap bangsal perawatan rumah sakit, tempat para perawat mengelola rekam medis dan memonitor pasien. Meja counter yang rusak, laci dokumen yang macet, atau kabel komputer yang berantakan sangat mengganggu efisiensi kerja. PT Bakti Kawan Service menghadirkan jasa service, restorasi, dan renovasi meja nurse station secara komprehensif.

Kami memperbaiki struktur meja berbahan HPL, kayu solid, maupun solid surface yang retak atau terkelupas. Kami merapikan sistem manajemen kabel (cable management) untuk komputer dan perangkat medis, memperbaiki engsel laci rekam medis agar mudah diakses, serta memasang aksesoris ergonomis tambahan.

Kami menawarkan waktu kerja fleksibel (termasuk pengerjaan malam hari/akhir pekan) guna memastikan tidak ada gangguan pada pelayanan pasien rawat inap rumah sakit Anda.`,
    benefits: [
      'Perbaikan counter dan meja',
      'Service laci and penyimpanan',
      'Renovasi dan resizing',
      'Pemasangan aksesoris ergonomis',
      'Material pilihan berkualitas',
      'Desain fungsional medis',
      'Garansi 3 bulan',
      'Konsultasi layout gratis',
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      {
        question: 'Apakah bisa renovasi nurse station tanpa harus tutup total?',
        answer: 'Ya, kami merancang jadwal pekerjaan untuk meminimalisir gangguan operasional. Renovasi bisa dilakukan bertahap atau saat shift malam. Diskusikan kebutuhan Anda dengan tim kami.',
      },
    ],
    gallery: [],
    relatedSlugs: ['service-lemari-alkes', 'service-reception-desk', 'service-meja-periksa'],
    metaTitle: 'Service & Renovasi Nurse Station | Bakti Kawan Service Jakarta',
    metaDescription: 'Layanan service dan renovasi nurse station rumah sakit. Perbaikan counter, laci, penambahan aksesoris ergonomis. Teknisi berpengalaman. Konsultasi gratis!',
    image: '/images/services/nurse-station.png',
    imageAlt: 'Desain nurse station rumah sakit yang bersih, modern, dan ergonomis setelah perbaikan',
  },

  {
    slug: 'service-lampu-pemeriksaan',
    name: 'Service Lampu Pemeriksaan',
    shortName: 'Lampu Pemeriksaan',
    category: 'alkes',
    heroTitle: 'Service Lampu Pemeriksaan Medis (Examination & Surgical Light)',
    heroSubtitle: 'Perbaikan examination lamp, minor surgical light, penggantian modul LED, perbaikan lengan fleksibel (arm mechanism) dan kelistrikan.',
    description: 'Solusi perbaikan lampu tindakan medis dan examination lamp rumah sakit agar pencahayaan tetap fokus dan stabil.',
    longDescription: `Pencahayaan yang redup atau lengan penyeimbang (spring arm) lampu pemeriksaan yang sering merosot ke bawah sangat mengganggu konsentrasi dokter saat melakukan tindakan medis atau pemeriksaan fisik pasien. PT Bakti Kawan Service memiliki teknisi yang ahli dalam service lampu pemeriksaan (examination lamp) dan lampu operasi (minor surgical light).

Kami menangani penggantian bohlam halogen atau upgrade ke modul LED hemat energi berintensitas tinggi, perbaikan trafo/ballast kelistrikan yang korslet, penyetelan ulang tegangan pegas di dalam lengan penyeimbang agar lampu stabil di posisi yang diinginkan, serta penggantian saklar dan kabel spiral.

Kami memastikan intensitas cahaya (lux) dan temperatur warna pasca-servis kembali optimal sesuai standar pemeriksaan klinis.`,
    benefits: [
      'Perbaikan sistem pencahayaan',
      'Penggantian lampu dan LED modul',
      'Service sendi dan arm mechanism',
      'Kalibrasi intensitas cahaya',
      'Perbaikan sistem listrik',
      'Garansi 3 bulan',
      'Spare part berbagai merek',
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      {
        question: 'Lampu shadowless bisa di-service juga?',
        answer: 'Ya, kami berpengalaman menangani lampu shadowless untuk kamar operasi. Termasuk penggantian lampu halogen/LED, perbaikan arm dan sendi, serta kalibrasi distribusi cahaya.',
      },
    ],
    gallery: [],
    relatedSlugs: ['service-meja-operasi', 'service-lampu-fisioterapi', 'service-nurse-station'],
    metaTitle: 'Service Lampu Pemeriksaan Medis | Bakti Kawan Service',
    metaDescription: 'Layanan service lampu pemeriksaan medis, examination lamp, surgical light. Penggantian LED, kalibrasi cahaya. Teknisi bersertifikasi. Fast response Jabodetabek.',
    image: '/images/services/meja-periksa.png',
    imageAlt: 'Lampu pemeriksaan medis dengan lengan fleksibel di ruang dokter',
  },

  {
    slug: 'service-lampu-fisioterapi',
    name: 'Service Lampu Fisioterapi',
    shortName: 'Lampu Fisioterapi',
    category: 'alkes',
    heroTitle: 'Service Lampu Fisioterapi & Infrared Medis',
    heroSubtitle: 'Reparasi lampu terapi infrared, UV, perbaikan timer otomatis, dimmer intensitas panas, dan kalibrasi radiasi aman.',
    description: 'Jasa service lampu terapi infra merah klinik rehabilitasi medis dengan jaminan keamanan kelistrikan dan radiasi.',
    longDescription: `Lampu fisioterapi infrared memancarkan radiasi panas yang meresap ke dalam jaringan otot untuk meredakan nyeri. Oleh karena itu, akurasi durasi timer dan kestabilan intensitas panas sangat penting agar kulit pasien tidak mengalami luka bakar (overheating). PT Bakti Kawan Service melayani jasa perbaikan lampu fisioterapi infrared berbagai model (mobile stand maupun table-top).

Layanan kami meliputi penggantian elemen pemanas / bohlam infrared orisinal, perbaikan modul timer mekanik maupun digital yang tidak berfungsi, penyetelan dimmer control intensitas panas, perbaikan kabel daya dan grounding untuk menghindari kebocoran arus listrik, serta perbaikan roda stand mobile.

Setiap unit diuji menggunakan alat pengukur radiasi termal pasca-reparasi demi keselamatan pasien.`,
    benefits: [
      'Perbaikan lampu infrared dan UV',
      'Kalibrasi output dan intensitas',
      'Penggantian komponen listrik',
      'Service housing dan arm',
      'Pengujian keamanan radiasi',
      'Garansi 3 bulan',
      'Konsultasi teknis gratis',
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      {
        question: 'Apakah ada pengujian keamanan setelah perbaikan?',
        answer: 'Ya, setiap perbaikan lampu terapi kami lakukan pengujian output, intensitas, dan keamanan radiasi sebelum diserahkan. Kami menyediakan laporan pengujian tertulis.',
      },
    ],
    gallery: [],
    relatedSlugs: ['service-lampu-pemeriksaan', 'service-meja-periksa', 'service-nurse-station'],
    metaTitle: 'Service Lampu Fisioterapi & Infrared | Bakti Kawan Service',
    metaDescription: 'Layanan service lampu fisioterapi, infrared lamp, peralatan terapi cahaya. Kalibrasi output, pengujian keamanan. Teknisi berpengalaman. Hubungi kami sekarang.',
    image: '/images/services/meja-periksa.png',
    imageAlt: 'Alat lampu terapi infrared fisioterapi mobile stand di klinik rehabilitasi',
  },

  // =============================================
  // KATEGORI: KANTOR (5 layanan)
  // =============================================
  {
    slug: 'service-sofa-kantor',
    name: 'Service Sofa Kantor',
    shortName: 'Sofa Kantor',
    category: 'kantor',
    heroTitle: 'Jasa Service & Reupholstery Sofa Kantor Premium',
    heroSubtitle: 'Reparasi sofa lobi, sofa ruang direktur, ganti kulit sintetis/kain fabric, tambah busa, dan perbaikan rangka kayu/besi.',
    description: 'Solusi hemat mengembalikan kemewahan sofa kantor Anda dengan ratusan pilihan material premium fabric & leather.',
    longDescription: `Sofa yang lusuh, robek, atau jebol di ruang tunggu direksi atau lobi kantor dapat merusak citra profesional perusahaan di mata klien penting. Mengeluarkan anggaran untuk membeli sofa baru tentu tidak perlu jika Anda bisa merestorasinya. PT Bakti Kawan Service adalah ahli reupholstery (ganti kulit) dan reparasi sofa kantor berkualitas premium.

Kami menawarkan ratusan katalog contoh bahan pelapis berkualitas tinggi, mulai dari kain fabric tenun (seperti Ateja), suede mewah, hingga kulit sintetis (synthetic leather/oscar) premium yang tahan gores dan mudah dibersihkan. Layanan kami mencakup penggantian busa amblas dengan busa yellow foam super bergaransi anti-kempes, perbaikan anyaman karet (webbing) dan per/spring sofa yang putus, penguatan rangka kayu yang patah atau berayap, serta refinishing kaki kayu/besi sofa.

Kami menyediakan layanan jemput-antar sofa untuk wilayah Jakarta, Bogor, Depok, Tangerang, dan Bekasi.`,
    benefits: [
      'Ratusan pilihan material fabric dan leather',
      'Reupholstery total atau partial',
      'Perbaikan rangka dan spring',
      'Penggantian busa dan padding',
      'Restorasi kaki sofa',
      'Pengambilan dan pengiriman tersedia',
      'Garansi jahitan 3 bulan',
      'Konsultasi material gratis',
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      {
        question: 'Lebih hemat mana: reupholstery atau beli sofa baru?',
        answer: 'Reupholstery biasanya 40-60% lebih hemat dibanding membeli sofa baru dengan kualitas setara. Terlebih jika rangka sofa masih kokoh, reupholstery adalah pilihan paling cost-effective.',
      },
      {
        question: 'Berapa lama proses reupholstery sofa kantor?',
        answer: 'Tergantung ukuran dan kompleksitas. Sofa single seater: 2-3 hari. Sofa 3 seater: 3-5 hari. Sofa L-shape besar: 5-7 hari kerja. Untuk proyek massal, kami menyesuaikan jadwal.',
      },
    ],
    gallery: [],
    relatedSlugs: ['service-kursi-kantor', 'service-reception-desk', 'service-sofa-cafe'],
    metaTitle: 'Service & Reupholstery Sofa Kantor Jakarta | Bakti Kawan Service',
    metaDescription: 'Layanan service dan reupholstery sofa kantor, lobi, ruang tunggu. Ratusan pilihan material, garansi jahitan. Hemat 40-60% vs beli baru. Fast response Jabodetabek.',
    image: '/images/services/sofa-kantor.png',
    imageAlt: 'Sofa kulit minimalis abu-abu di lobi kantor yang mewah dan rapi setelah reupholstery',
  },

  {
    slug: 'service-kursi-kantor',
    name: 'Service Kursi Kantor',
    shortName: 'Kursi Kantor',
    category: 'kantor',
    heroTitle: 'Service & Perbaikan Kursi Kantor Jakarta | Cepat & Hemat',
    heroSubtitle: 'Jasa ganti hidrolik (piston gaslift) kursi turun sendiri, roda pecah, mekanik miring, tambah busa, dan reupholstery massal.',
    description: 'Perbaikan kursi direktur, kursi kerja staf, dan kursi ergonomis jaring (mesh) dengan komponen universal berkualitas.',
    longDescription: `Kursi kantor yang rusak seperti hidrolik bocor (kursi merosot sendiri saat diduduki), roda macet/pecah, atau sandaran tangan goyang sangat memengaruhi kenyamanan dan produktivitas staf Anda, bahkan dapat memicu nyeri punggung (ergonomic hazard). PT Bakti Kawan Service adalah solusi andalan untuk service kursi kantor di Jakarta dan sekitarnya.

Kami memiliki stok suku cadang kursi kantor terlengkap, seperti gaslift hidrolik kelas heavy-duty (Class 4), roda nylon berputar lancar, mekanik ayunan (tilting mechanism), serta sandaran tangan (armrest). Kami juga melayani reupholstery (ganti kain/jaring mesh) kursi direktur dan kursi rapat dalam jumlah satuan maupun massal (proyek korporat).

Untuk service massal di atas 10 unit, kami menyediakan layanan on-site di kantor Anda agar aktivitas operasional perusahaan Anda tetap berjalan tanpa hambatan.`,
    benefits: [
      'Penggantian piston gas cylinder',
      'Perbaikan tilt mechanism',
      'Penggantian roda/caster',
      'Reupholstery fabric dan leather',
      'Perbaikan sandaran tangan',
      'Spare part universal tersedia',
      'Garansi 3 bulan',
      'Service massal untuk perusahaan',
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      {
        question: 'Apakah spare part kursi kantor tersedia untuk semua merek?',
        answer: 'Kami memiliki stok spare part universal yang kompatibel dengan sebagian besar kursi kantor. Untuk merek premium tertentu (Humanscale, Herman Miller, dll), kami bisa membantu pengadaan spare part asli.',
      },
      {
        question: 'Bisa service kursi dalam jumlah banyak sekaligus?',
        answer: 'Ya, kami melayani service massal untuk perusahaan. Tersedia layanan on-site dimana teknisi kami datang ke kantor Anda untuk service banyak kursi sekaligus. Tersedia harga khusus untuk volume besar.',
      },
    ],
    gallery: [],
    relatedSlugs: ['service-sofa-kantor', 'service-meja-meeting', 'service-reception-desk'],
    metaTitle: 'Service Kursi Kantor Profesional | Bakti Kawan Service Jakarta',
    metaDescription: 'Layanan service kursi kantor: piston, roda, tilt mechanism, reupholstery. Spare part universal, service massal. Hemat biaya, hasil berkualitas. Hubungi kami!',
    image: '/images/services/kursi-kantor.png',
    imageAlt: 'Kursi kerja ergonomis jaring mesh hitam yang kokoh dan nyaman di ruang kerja kantor',
  },

  {
    slug: 'service-lemari-arsip',
    name: 'Service Lemari Arsip',
    shortName: 'Lemari Arsip',
    category: 'kantor',
    heroTitle: 'Service Lemari Arsip Besi & Filing Cabinet Kantor',
    heroSubtitle: 'Perbaikan lemari arsip, filing cabinet logam/kayu, rel laci seret, ganti kunci hilang/rusak, dan restorasi cat keropos.',
    description: 'Jasa service filing cabinet logam, mobile file roll o\'pack, dan lemari arsip kayu perkantoran.',
    longDescription: `Lemari arsip dan filing cabinet besi yang macet lacinya sangat menjengkelkan ketika Anda harus mencari dokumen penting dengan cepat. Masalah kunci laci filing cabinet hilang atau patah juga mengancam keamanan dokumen rahasia perusahaan. PT Bakti Kawan Service melayani jasa perbaikan lemari arsip logam maupun kayu secara profesional.

Kami menangani penyetelan ulang rel bantalan peluru (ball bearing slide) laci yang macet atau keluar jalur, pembongkaran dan penggantian silinder kunci laci sentral (central lock), pelurusan pintu lemari besi penyok, pengelasan engsel pintu lepas, hingga pengecatan ulang touch-up anti-karat.

Kami juga melayani perbaikan sistem mekanik penggerak roda pada Mobile File (Roll O'Pack) ukuran besar.`,
    benefits: [
      'Perbaikan sistem kunci dan gembok',
      'Service rel dan laci macet',
      'Penggantian handle dan aksesori',
      'Pengecatan dan touch-up',
      'Perbaikan engsel dan stopper',
      'Garansi 3 bulan',
      'Layanan pickup & delivery',
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      {
        question: 'Apakah bisa duplikat kunci filing cabinet yang hilang?',
        answer: 'Ya, kami menyediakan layanan penggantian silinder kunci secara utuh (lock replacement) agar Anda mendapatkan kunci baru yang aman dan presisi.'
      }
    ],
    gallery: [],
    relatedSlugs: ['service-meja-meeting', 'service-kursi-kantor', 'service-reception-desk'],
    metaTitle: 'Service Lemari Arsip & Filing Cabinet | Bakti Kawan Service',
    metaDescription: 'Layanan service lemari arsip dan filing cabinet: perbaikan kunci, laci, rel. Pengecatan dan touch-up. Teknisi berpengalaman. Fast response Jabodetabek.',
    image: '/images/services/workshop.png',
    imageAlt: 'Mekanik sedang merapikan rel laci filing cabinet logam kantor',
  },

  {
    slug: 'service-meja-meeting',
    name: 'Service Meja Meeting',
    shortName: 'Meja Meeting',
    category: 'kantor',
    heroTitle: 'Jasa Restorasi & Service Meja Meeting (Meja Rapat)',
    heroSubtitle: 'Refinishing permukaan kayu tergores/kusam, perbaikan kaki meja goyang, dan instalasi box cable management tanam.',
    description: 'Restorasi meja rapat kayu jati, veneer, multiplex, HPL, dan pemasangan jalur kabel listrik/data meja modern.',
    longDescription: `Meja rapat (meeting table) adalah focal point utama di ruang konferensi di mana keputusan-keputusan penting perusahaan diambil. Permukaan meja rapat yang kusam, tergores pulpen, bergelembung terkena air panas, atau struktur kaki meja bergoyang memberikan kesan buruk bagi klien atau mitra rapat. PT Bakti Kawan Service menawarkan jasa restorasi dan refinishing meja meeting premium.

Kami ahli dalam perbaikan lapisan veneer kayu yang mengelupas, pemolesan ulang (polishing) melamik/polyurethane permukaan meja kayu solid agar mengkilap kembali, serta penempelan ulang bahan HPL yang copot. Kami juga melayani modifikasi modern seperti pembuatan lubang tanam dan pemasangan power outlet box (stopkontak & colokan LAN/HDMI pop-up) agar meja rapat bersih dari kabel yang berserakan.`,
    benefits: [
      'Restorasi permukaan kayu dan veneer',
      'Perbaikan kaki dan struktur',
      'Penggantian edge banding',
      'Polishing dan refinishing',
      'Perbaikan cable management',
      'Service aksesori meja',
      'Garansi 3 bulan',
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      {
        question: 'Apakah meja yang berukuran sangat panjang bisa diperbaiki di tempat?',
        answer: 'Tergantung tingkat kerusakan. Refinishing ringan, perbaikan kaki miring, dan pemasangan lubang kabel dapat dilakukan langsung di kantor Anda. Untuk refinishing semprot total, meja perlu kami bawa ke workshop.'
      }
    ],
    gallery: [],
    relatedSlugs: ['service-kursi-kantor', 'service-lemari-arsip', 'service-reception-desk'],
    metaTitle: 'Service & Restorasi Meja Meeting | Bakti Kawan Service Jakarta',
    metaDescription: 'Layanan service meja meeting dan konferensi: restorasi permukaan, perbaikan struktur, polishing. Profesional dan bergaransi. Fast response Jabodetabek.',
    image: '/images/services/reception-desk.png',
    imageAlt: 'Meja meeting kayu panjang dengan finishing mengkilap dan manajemen kabel terintegrasi',
  },

  {
    slug: 'service-reception-desk',
    name: 'Service Reception Desk',
    shortName: 'Reception Desk',
    category: 'kantor',
    heroTitle: 'Service & Refurbishment Meja Resepsionis (Reception Desk)',
    heroSubtitle: 'Perbaikan counter HPL retak, pemasangan lampu LED strip aksen, pembuatan laci kasir, dan poles marmer solid surface.',
    description: 'Jasa peremajaan meja resepsionis lobi utama kantor, klinik, dan hotel untuk kesan pertama yang profesional.',
    longDescription: `Meja resepsionis adalah perwakilan visual pertama (first impression) yang dilihat oleh setiap pengunjung, tamu, atau calon klien yang memasuki kantor, klinik, atau hotel Anda. Meja resepsionis yang kusam, retak sudut HPL-nya, atau tidak rapi sistem penyimpanannya dapat menurunkan wibawa instansi. PT Bakti Kawan Service menyediakan jasa perbaikan dan peremajaan estetika meja resepsionis secara kustom.

Cakupan kerja kami meliputi pengeleman ulang dan penggantian lembaran HPL luar yang retak, pemolesan permukaan counter berbahan solid surface atau marmer yang kusam dan tergores, pemasangan lampu LED backlight strip dekoratif tersembunyi untuk kesan modern-futuristik, serta pembuatan laci penyimpanan rekam medis/kasir tambahan lengkap dengan sistem kunci laci yang aman.`,
    benefits: [
      'Restorasi permukaan dan panel',
      'Renovasi desain modern',
      'Penggantian material pilihan',
      'Pemasangan LED accent',
      'Perbaikan laci dan storage',
      'Material premium tersedia',
      'Garansi 3 bulan',
      'Desain 3D preview',
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      {
        question: 'Apakah bisa ganti model meja resepsionis yang sudah ada?',
        answer: 'Ya, kami melayani redesain sebagian meja resepsionis agar tampil lebih modern tanpa harus membongkar seluruh meja lama (cost-effective facelift).'
      }
    ],
    gallery: [],
    relatedSlugs: ['service-nurse-station', 'service-sofa-kantor', 'service-meja-meeting'],
    metaTitle: 'Service & Renovasi Reception Desk | Bakti Kawan Service',
    metaDescription: 'Layanan service dan renovasi reception desk lobi kantor, hotel, klinik. Restorasi, redesain modern, material premium. Garansi 3 bulan. Konsultasi gratis!',
    image: '/images/services/reception-desk.png',
    imageAlt: 'Meja resepsionis kayu minimalis dengan pencahayaan LED tersembunyi di lobi utama',
  },

  // =============================================
  // KATEGORI: KOMERSIAL (4 layanan)
  // =============================================
  {
    slug: 'service-sofa-cafe',
    name: 'Service Sofa Cafe',
    shortName: 'Sofa Cafe',
    category: 'komersial',
    heroTitle: 'Jasa Reupholstery Sofa Cafe & Booth Seating Restoran',
    heroSubtitle: 'Ganti kain jok sofa cafe robek, perbaikan busa kempes, kustomisasi booth bench panjang, material anti-noda premium.',
    description: 'Perbaikan jok kulit sintetis cafe yang pecah-pecah dengan material berkualitas tinggi, pengerjaan cepat di luar jam buka.',
    longDescription: `Di bisnis kuliner (F&B), kenyamanan tempat duduk berbanding lurus dengan lamanya pelanggan tinggal dan besarnya nominal pesanan mereka. Sofa cafe atau booth seating restoran yang kulitnya pecah-pecah, robek, atau busanya amblas hingga menyentuh rangka kayu akan membuat pelanggan kapok berkunjung kembali. PT Bakti Kawan Service menawarkan jasa reupholstery sofa cafe dan booth seating dengan kualitas jahitan kelas butik.

Kami merekomendasikan material khusus F&B: kulit sintetis (oscar) heavy-duty tahan air dan noda saus, atau kain fabric dengan teknologi mudah dibersihkan (easy-clean fabric). Kami memperbaiki konstruksi rangka kayu sofa bench panjang, mengganti busa royal foam dengan tingkat keempukan (density) yang pas untuk duduk santai, serta merapikan kancing aksen (chesterfield style).

Kami menawarkan opsi pengerjaan malam hari saat cafe tutup untuk meminimalkan kehilangan omzet bisnis Anda.`,
    benefits: [
      'Material tahan noda dan mudah dibersihkan',
      'Ratusan pilihan warna dan tekstur',
      'Perbaikan booth seating custom',
      'Service kursi bar dan stool',
      'Material food-safe tersedia',
      'Pengerjaan cepat (minimalisir tutup)',
      'Garansi 3 bulan',
      'Konsultasi desain gratis',
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      {
        question: 'Material apa yang direkomendasikan untuk cafe?',
        answer: 'Kami merekomendasikan vinyl atau PVC leather yang tahan noda, mudah dibersihkan, dan tahan lama untuk penggunaan intensif. Tersedia berbagai warna dan tekstur yang sesuai dengan konsep cafe Anda.',
      },
      {
        question: 'Apakah bisa dikerjakan saat cafe tutup (malam hari)?',
        answer: 'Ya, kami menyediakan layanan pengerjaan di luar jam operasional untuk meminimalisir gangguan. Hubungi kami untuk mengatur jadwal yang sesuai.',
      },
    ],
    gallery: [],
    relatedSlugs: ['service-furniture-restoran', 'service-sofa-kantor', 'service-furniture-hotel'],
    metaTitle: 'Service & Reupholstery Sofa Cafe | Bakti Kawan Service Jakarta',
    metaDescription: 'Layanan service sofa cafe, reupholstery kursi restoran. Material tahan noda, ratusan pilihan warna. Pengerjaan cepat, garansi 3 bulan. Hubungi kami!',
    image: '/images/services/sofa-cafe.png',
    imageAlt: 'Booth seating sofa kulit coklat klasik yang elegan di dalam cafe modern',
  },

  {
    slug: 'service-furniture-restoran',
    name: 'Service Furniture Restoran',
    shortName: 'Furniture Restoran',
    category: 'komersial',
    heroTitle: 'Service Furniture Restoran, Bar & F&B Outlet',
    heroSubtitle: 'Perbaikan kursi makan kayu/besi bergoyang, perbaikan dudukan bar stool miring, poles meja makan marmer/kayu.',
    description: 'Jasa perbaikan meja makan, kursi kayu, kursi besi, dan stool restoran agar aman diduduki pelanggan.',
    longDescription: `Penggunaan harian yang sangat intensif membuat kursi dan meja makan restoran rentan bergoyang atau patah pada sambungan kaki-kakinya. Kursi makan yang tidak kokoh sangat berbahaya karena dapat membuat pelanggan terjatuh dan memicu tuntutan hukum. PT Bakti Kawan Service menyediakan layanan perbaikan furniture restoran secara cepat dan massal.

Kami melayani pengencangan sekrup dan pengeleman ulang sambungan kayu kursi makan yang longgar, pengelasan sambungan besi kursi bar stool yang retak, penggantian karet penahan kaki kursi agar tidak bising dan merusak lantai keramik, hingga pemolesan dan pelapisan ulang (varnishing/coating) meja makan kayu yang kusam akibat sering dilap cairan disinfektan.

Kami siap melayani jaringan restoran waralaba (restaurant chain) dengan kontrak maintenance berkala yang ekonomis.`,
    benefits: [
      'Reupholstery kursi dan booth',
      'Perbaikan kaki meja dan kursi',
      'Service bar stool dan high chair',
      'Material food-grade tersedia',
      'Pengerjaan massal untuk chain restoran',
      'Jadwal fleksibel (non-operasional)',
      'Garansi 3 bulan',
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      {
        question: 'Apakah meja yang berlubang/terbakar bisa mulus kembali?',
        answer: 'Ya, tim kayu kami berpengalaman melakukan touch-up kayu dempul resin dan plitur ulang untuk menyamarkan cacat permukaan meja makan.'
      }
    ],
    gallery: [],
    relatedSlugs: ['service-sofa-cafe', 'service-furniture-hotel', 'service-furniture-retail'],
    metaTitle: 'Service Furniture Restoran Profesional | Bakti Kawan Service',
    metaDescription: 'Layanan service furniture restoran: kursi, meja, booth, bar stool. Reupholstery, perbaikan struktur. Jadwal fleksibel, harga kompetitif. Fast response Jakarta.',
    image: '/images/services/sofa-cafe.png',
    imageAlt: 'Set meja makan dan kursi kayu restoran yang kokoh setelah restorasi',
  },

  {
    slug: 'service-furniture-hotel',
    name: 'Service Furniture Hotel',
    shortName: 'Furniture Hotel',
    category: 'komersial',
    heroTitle: 'Jasa Service & Refurbishment Furniture Hotel (Hospitality)',
    heroSubtitle: 'Perbaikan bedroom set hotel (headboard, dipan, nakas), reupholstery lounge chair lobi, dan poles kayu premium.',
    description: 'Layanan service furniture hotel dengan standar kualitas visual dan daya tahan tinggi standar hospitality.',
    longDescription: `Di industri perhotelan, kenyamanan dan kemewahan visual adalah segalanya. Kamar hotel dengan dipan bergoyang, headboard kulit terkelupas, nakas yang lacinya seret, atau armchair lobi yang beroda rusak dapat langsung menurunkan penilaian rating hotel Anda di platform online (OTA). PT Bakti Kawan Service adalah partner tepercaya untuk refurbishment furniture hotel standar bintang 3 hingga bintang 5.

Tim kami ahli merestorasi dipan (bed base/box spring), melapis ulang (reupholstery) headboard dengan kulit asli maupun sintetis berkualitas tinggi bersertifikasi tahan api (fire retardant), memoles kembali (refinishing) lemari pakaian wardrobe kayu kamar, nakas, dan meja kerja, serta merestorasi kursi santai lounge chair lobi utama.

Kami bekerja sama dengan divisi housekeeping hotel Anda untuk menjadwalkan perbaikan blok per blok kamar (room-by-room staging) agar tingkat okupansi (occupancy rate) hotel Anda tetap terjaga maksimal selama masa perbaikan.`,
    benefits: [
      'Perbaikan bedroom set hotel',
      'Service sofa dan kursi lobi',
      'Renovasi furniture area publik',
      'Material standar hospitality',
      'Pengerjaan minimal gangguan tamu',
      'Pemeliharaan berkala tersedia',
      'Garansi 3 bulan',
      'Kontrak maintenance tersedia',
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      {
        question: 'Apakah bisa service furniture kamar hotel tanpa mengganggu tamu?',
        answer: 'Ya, kami merancang jadwal kerja yang mempertimbangkan operasional hotel. Biasanya dilakukan saat kamar vacant atau saat periode occupancy rendah. Tim kami bekerja efisien dan bersih.',
      },
    ],
    gallery: [],
    relatedSlugs: ['service-furniture-restoran', 'service-sofa-cafe', 'service-furniture-retail'],
    metaTitle: 'Service Furniture Hotel & Hospitality | Bakti Kawan Service',
    metaDescription: 'Layanan service furniture hotel: bedroom set, sofa lobi, area publik. Standar hospitality premium, minimal gangguan operasional. Kontrak maintenance tersedia.',
    image: '/images/services/furniture-hotel.png',
    imageAlt: 'Interior kamar tidur hotel mewah dengan headboard kulit rapi dan nakas kayu mengkilap',
  },

  {
    slug: 'service-furniture-retail',
    name: 'Service Furniture Retail',
    shortName: 'Furniture Retail',
    category: 'komersial',
    heroTitle: 'Service Display Rack, Gondola, & Furniture Retail Toko',
    heroSubtitle: 'Perbaikan showcase kaca display produk, counter meja kasir, rak gondola besi miring, dan visual merchandising fixture.',
    description: 'Layanan service dan modifikasi display toko, butik, minimarket, showroom, dan supermarket.',
    longDescription: `Visual merchandising yang menarik sangat bergantung pada kondisi fisik rak display dan meja kasir toko Anda. Rak gondola yang miring karena tidak kuat menahan beban produk, atau showcase kaca dengan pintu geser macet dapat mengurangi estetika display produk dan menurunkan minat beli pengunjung showroom/butik Anda. PT Bakti Kawan Service melayani jasa perbaikan furniture retail terlengkap.

Kami memperbaiki rel pintu kaca geser (sliding glass display showcase), memasang strip lampu sorot LED produk tersembunyi, meluruskan tiang gondola besi penyok, memperkuat sambungan las rak besi, serta memperbaiki atau merenovasi area meja kasir (cashier counter) termasuk penambahan kompartemen penyimpanan uang kertas dan laci keyboard.

Kami siap dipanggil untuk pengerjaan malam hari setelah toko tutup (after-hours service) guna memastikan tidak ada gangguan pada aktivitas belanja pelanggan Anda.`,
    benefits: [
      'Perbaikan display rack dan gondola',
      'Service showcase dan vitrine',
      'Perbaikan meja kasir',
      'Relayout dan penataan ulang',
      'Pengecatan dan touch-up',
      'Pemasangan signage dan label',
      'Layanan massal untuk chain toko',
      'Garansi 3 bulan',
    ],
    process: DEFAULT_PROCESS,
    faqs: [
      {
        question: 'Apakah bisa modifikasi kaca showcase yang pecah menjadi tempered glass?',
        answer: 'Ya, kami sangat merekomendasikan dan melayani pemasangan tempered glass untuk showcase ritel demi faktor keamanan staff dan pembeli.'
      }
    ],
    gallery: [],
    relatedSlugs: ['service-furniture-restoran', 'service-furniture-hotel', 'service-reception-desk'],
    metaTitle: 'Service Furniture Retail & Toko | Bakti Kawan Service Jakarta',
    metaDescription: 'Layanan service furniture retail: display rack, gondola, showcase, meja kasir. Perbaikan dan perawatan toko. Fast response Jabodetabek. Hubungi kami!',
    image: '/images/services/reception-desk.png',
    imageAlt: 'Rak display kaca modern dengan sorot lampu LED yang menarik setelah perbaikan',
  },
]

// Helper functions
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug)
}

export function getServicesByCategory(category: string): ServiceData[] {
  return SERVICES.filter((s) => s.category === category)
}

export function getAllSlugs(): string[] {
  return SERVICES.map((s) => s.slug)
}

export const CATEGORY_PAGES_DATA: CategoryPageData[] = [
  {
    id: 'alkes',
    label: 'Alat Kesehatan',
    icon: '🏥',
    heroTitle: 'Service Furniture Alat Kesehatan & Ranjang Rumah Sakit',
    heroSubtitle: 'Layanan reparasi, maintenance berkala, dan penyuplai spare part ranjang pasien, meja operasi, serta kompartemen medis bergaransi.',
    longDescription: 'Divisi khusus alat kesehatan PT Bakti Kawan Service didedikasikan untuk memastikan seluruh furniture dan penunjang operasional medis di rumah sakit, klinik, puskesmas, dan laboratorium Anda selalu dalam kondisi prima. Kami memahami standar tinggi yang diperlukan di lingkungan medis, mulai dari tingkat sterilisasi permukaan, anti-korosi bahan stainless steel, hingga keandalan sistem gerak actuators dan hydraulics. Didukung oleh teknisi bersertifikasi dan berpengalaman 10+ tahun, kami siap melakukan diagnosis akurat dan perbaikan cepat di lokasi (on-site) maupun penanganan khusus di workshop kami.',
    image: '/images/services/bed-pasien.png',
    imageAlt: 'Teknisi profesional merapikan bed pasien di rumah sakit',
    metaTitle: 'Jasa Service & Perbaikan Alat Kesehatan RS | Bakti Kawan Service',
    metaDescription: 'Layanan service furniture alat kesehatan & ranjang rumah sakit. Perbaikan bed pasien manual/elektrik, meja operasi, troli emergency. Garansi 3 bulan.',
    customServiceTitle: 'Butuh Service Alat Kesehatan Lain yang Tidak Terdaftar?',
    customServiceDescription: 'Kami melayani perbaikan dan pembuatan kustom berbagai furniture medis lainnya di luar menu utama (seperti ranjang bersalin/obgyn bed, tiang infus kustom, meja lab stainless steel, lemari farmasi ganda, dll). Hubungi tim kami untuk konsultasi spesifikasi teknis dan estimasi biaya gratis.'
  },
  {
    id: 'kantor',
    label: 'Furniture Kantor',
    icon: '🏢',
    heroTitle: 'Service & Restorasi Furniture Kantor Profesional',
    heroSubtitle: 'Jasa reupholstery (ganti kulit/kain) sofa, service kursi kerja hidrolik, perbaikan rel filing cabinet, dan refinishing meja rapat perkantoran.',
    longDescription: 'Membeli unit furniture kantor baru setiap kali ada kerusakan kecil adalah pengeluaran yang tidak perlu untuk perusahaan Anda. PT Bakti Kawan Service menghadirkan divisi perbaikan furniture kantor untuk menghemat anggaran operasional perusahaan hingga 40-60%. Kami melayani restorasi menyeluruh dari kursi direktur ergonomis, sofa lobi ruang tunggu, lemari arsip/filing cabinet logam, hingga refinishing meja meeting kayu premium. Kami melayani korporat, BUMN, perbankan, dan instansi pemerintahan dengan standar pengerjaan rapi dan bergaransi.',
    image: '/images/services/sofa-kantor.png',
    imageAlt: 'Sofa lobby kantor premium yang rapi setelah restorasi',
    metaTitle: 'Service & Reupholstery Furniture Kantor | Bakti Kawan Service',
    metaDescription: 'Jasa perbaikan dan ganti kulit sofa lobi, kursi kantor hidrolik, filing cabinet, meja rapat HPL/kayu. Hemat biaya operasional 40-60% dengan hasil bergaransi.',
    customServiceTitle: 'Memiliki Furniture Kantor Khusus atau Volume Besar?',
    customServiceDescription: 'Kami menangani service kustom massal untuk furniture kantor khusus lainnya (seperti partisi sekat kubikal workstation, kursi auditorium lipat, Mobile File/Roll O\'pack logam, credenza direksi, dll). Kami menyediakan layanan survey gratis langsung ke kantor Anda di wilayah Jabodetabek.'
  },
  {
    id: 'komersial',
    label: 'Furniture Komersial',
    icon: '☕',
    heroTitle: 'Service Furniture Cafe, Restoran, & Hotel (Hospitality)',
    heroSubtitle: 'Jasa reupholstery sofa booth cafe, perbaikan kursi makan restoran, dipan tidur, dan headboard kamar hotel standar premium.',
    longDescription: 'Tampilan visual furniture adalah faktor penentu dalam bisnis kuliner dan hospitality. Sofa cafe yang sobek atau dipan hotel yang bergoyang dapat merusak kenyamanan pelanggan dan citra bisnis Anda. PT Bakti Kawan Service menawarkan jasa service dan reupholstery furniture komersial dengan kualitas jahitan kelas butik dan material tahan noda. Kami memahami pentingnya kelancaran usaha Anda, oleh karena itu kami menawarkan opsi waktu kerja malam hari (after-hours) agar pengerjaan tidak mengganggu omzet harian Anda.',
    image: '/images/services/sofa-cafe.png',
    imageAlt: 'Booth seating sofa kulit cokelat elegan di cafe modern',
    metaTitle: 'Jasa Service & Reupholstery Furniture Cafe, Resto, Hotel | BKS',
    metaDescription: 'Reparasi dan reupholstery sofa booth cafe, kursi makan restoran, bedset kamar hotel. Kain tahan air/noda, pengerjaan cepat (opsi malam hari). Garansi 3 bulan.',
    customServiceTitle: 'Butuh Custom Project / Renovasi Furniture Bisnis?',
    customServiceDescription: 'Kami menerima perbaikan kustom untuk elemen visual merchandising ritel dan hospitality lainnya (seperti showcase kaca toko, rak gantungan baju butik, lounge chair bar, meja resepsionis kasir, dll). Hubungi kami untuk penawaran kontrak maintenance berkala.'
  }
]

export function getCategoryPageData(categoryId: string): CategoryPageData | undefined {
  return CATEGORY_PAGES_DATA.find((c) => c.id === categoryId)
}

export const SERVICE_CATEGORIES = {
  alkes: {
    id: 'alkes' as const,
    label: 'Alat Kesehatan',
    icon: '🏥',
    description: 'Service furniture rumah sakit, klinik, puskesmas, dan laboratorium',
    color: '#F97316',
  },
  kantor: {
    id: 'kantor' as const,
    label: 'Furniture Kantor',
    icon: '🏢',
    description: 'Service furniture perkantoran, korporat, dan institusi',
    color: '#2B2B2B',
  },
  komersial: {
    id: 'komersial' as const,
    label: 'Furniture Komersial',
    icon: '☕',
    description: 'Service furniture cafe, restoran, hotel, dan retail',
    color: '#171717',
  },
}
