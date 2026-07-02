// lib/data/projects.ts

export interface Project {
  id: string
  title: string
  client: string
  category: string
  description: string
  beforeImage: string
  afterImage: string
  location: string
  duration: string
  year: number
  tags: string[]
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Renovasi 50 Unit Bed Pasien ICU',
    client: 'RS Pusat Jakarta',
    category: 'alkes',
    description: 'Penggantian busa, cover medical grade, perbaikan sistem hydraulic dan rem untuk 50 unit bed ICU. Diselesaikan dalam 2 minggu tanpa gangguan operasional.',
    beforeImage: '/images/projects/project-1-before.jpg',
    afterImage: '/images/projects/project-1-after.jpg',
    location: 'Jakarta Pusat',
    duration: '2 minggu',
    year: 2024,
    tags: ['bed pasien', 'ICU', 'renovasi massal'],
  },
  {
    id: '2',
    title: 'Reupholstery Sofa Lounge Kantor',
    client: 'Perusahaan Teknologi Nasional',
    category: 'kantor',
    description: 'Reupholstery 30 unit sofa lounge kantor dengan material leather premium. Transformasi total ruang tunggu menjadi tampilan modern dan premium.',
    beforeImage: '/images/projects/project-2-before.jpg',
    afterImage: '/images/projects/project-2-after.jpg',
    location: 'Jakarta Selatan',
    duration: '1 minggu',
    year: 2024,
    tags: ['sofa kantor', 'reupholstery', 'leather premium'],
  },
  {
    id: '3',
    title: 'Service Nurse Station Puskesmas',
    client: 'Puskesmas Kecamatan Cakung',
    category: 'alkes',
    description: 'Renovasi total 3 unit nurse station di puskesmas. Perbaikan counter, penambahan storage, dan pengecatan ulang untuk tampilan yang lebih bersih dan profesional.',
    beforeImage: '/images/projects/project-3-before.jpg',
    afterImage: '/images/projects/project-3-after.jpg',
    location: 'Kabupaten Bogor',
    duration: '5 hari',
    year: 2024,
    tags: ['nurse station', 'renovasi', 'puskesmas'],
  },
  {
    id: '4',
    title: 'Reupholstery Booth Cafe & Resto',
    client: 'Kedai Kopi Premium Kemang',
    category: 'komersial',
    description: 'Renovasi booth seating dan kursi untuk 2 cabang cafe. Material vinyl anti-noda warna custom sesuai brand identity cafe.',
    beforeImage: '/images/projects/project-4-before.jpg',
    afterImage: '/images/projects/project-4-after.jpg',
    location: 'Jakarta Selatan',
    duration: '3 hari',
    year: 2024,
    tags: ['sofa cafe', 'booth seating', 'vinyl custom'],
  },
  {
    id: '5',
    title: 'Service 200 Kursi Kantor Massal',
    client: 'Bank Nasional Indonesia',
    category: 'kantor',
    description: 'Service massal 200 kursi kantor: penggantian piston, roda, dan reupholstery. On-site di kantor pusat dengan 3 teknisi selama 5 hari kerja.',
    beforeImage: '/images/projects/project-5-before.jpg',
    afterImage: '/images/projects/project-5-after.jpg',
    location: 'Jakarta Pusat',
    duration: '5 hari',
    year: 2023,
    tags: ['kursi kantor', 'service massal', 'corporate'],
  },
  {
    id: '6',
    title: 'Renovasi Interior Ambulance',
    client: 'Dinas Kesehatan DKI Jakarta',
    category: 'alkes',
    description: 'Perbaikan dan renovasi interior 10 unit ambulance: tandu, bracket, kabinet medis, dan sistem pengikat. Memenuhi standar BNSP.',
    beforeImage: '/images/projects/project-6-before.jpg',
    afterImage: '/images/projects/project-6-after.jpg',
    location: 'Jakarta',
    duration: '2 minggu',
    year: 2023,
    tags: ['ambulance', 'renovasi interior', 'pemerintahan'],
  },
]
