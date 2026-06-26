import type { Metadata } from 'next'
import PageLayout from '@/components/templates/PageLayout'
import HeroSection from '@/components/organisms/HeroSection'
import ServicesPreview from '@/components/organisms/ServicesPreview'
import AreaLayanan from '@/components/organisms/AreaLayanan'
import WhyUsSection from '@/components/organisms/WhyUsSection'
import ProseKerja from '@/components/organisms/ProseKerja'
import GalleryPreview from '@/components/organisms/GalleryPreview'
import TestimoniSection from '@/components/organisms/TestimoniSection'
import PartnerSection from '@/components/organisms/PartnerSection'
import HomeCTASection from '@/components/organisms/HomeCTASection'

export const metadata: Metadata = {
  title: 'Service Furniture Alkes Profesional | Bakti Kawan Sejahtera',
  description:
    'PT Bakti Kawan Sejahtera: service furniture alat kesehatan, kantor, dan komersial. Teknisi bersertifikasi, spare part berkualitas, garansi tertulis. Fast response Jabodetabek, melayani seluruh Indonesia.',
}

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <ServicesPreview />
      <AreaLayanan />
      <WhyUsSection />
      <ProseKerja />
      <GalleryPreview />
      <TestimoniSection />
      <PartnerSection />
      <HomeCTASection />
    </PageLayout>
  )
}
