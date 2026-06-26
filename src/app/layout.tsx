import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://servicealkes.com'),
  title: {
    template: '%s | Bakti Kawan Sejahtera',
    default: 'Bakti Kawan Sejahtera — Service Furniture Alkes Profesional',
  },
  description:
    'PT Bakti Kawan Sejahtera: service furniture alat kesehatan, kantor, dan komersial. Teknisi bersertifikasi, spare part OEM, garansi tertulis. Fast response Jabodetabek, melayani seluruh Indonesia.',
  keywords: [
    'service alkes',
    'service furniture rumah sakit',
    'service bed pasien',
    'service ambulance',
    'service meja operasi',
    'reupholstery sofa kantor',
    'service kursi kantor jakarta',
    'service furniture klinik',
    'bakti kawan sejahtera',
    'servicealkes.com',
  ],
  authors: [{ name: 'PT Bakti Kawan Sejahtera', url: 'https://servicealkes.com' }],
  creator: 'PT Bakti Kawan Sejahtera',
  publisher: 'PT Bakti Kawan Sejahtera',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://servicealkes.com',
    siteName: 'Bakti Kawan Sejahtera',
    title: 'Service Furniture Alkes Profesional | Bakti Kawan Sejahtera',
    description:
      'Layanan service furniture alkes, kantor, dan komersial. Teknisi bersertifikasi, garansi tertulis, fast response Jabodetabek.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bakti Kawan Sejahtera — Service Furniture Profesional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bakti Kawan Sejahtera — Service Furniture Alkes Profesional',
    description: 'Layanan service furniture alkes, kantor, dan komersial profesional. Fast response Jabodetabek.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-token',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'PT Bakti Kawan Sejahtera',
    alternateName: 'Bakti Kawan Sejahtera',
    url: 'https://servicealkes.com',
    logo: 'https://servicealkes.com/images/logo.png',
    image: 'https://servicealkes.com/images/og-image.jpg',
    description: 'Layanan service dan perbaikan furniture alat kesehatan, kantor, dan komersial profesional di Jabodetabek dan seluruh Indonesia.',
    telephone: '+6281200000001',
    email: 'info@servicealkes.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Contoh No. 123',
      addressLocality: 'Jakarta Timur',
      addressRegion: 'DKI Jakarta',
      postalCode: '13000',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.2088,
      longitude: 106.8456,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '14:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Jakarta' },
      { '@type': 'City', name: 'Bogor' },
      { '@type': 'City', name: 'Depok' },
      { '@type': 'City', name: 'Tangerang' },
      { '@type': 'City', name: 'Bekasi' },
      { '@type': 'Country', name: 'Indonesia' },
    ],
    serviceType: [
      'Service Furniture Alat Kesehatan',
      'Service Furniture Kantor',
      'Service Furniture Komersial',
      'Reupholstery',
      'Renovasi Furniture',
    ],
    priceRange: '$$',
    currenciesAccepted: 'IDR',
    paymentAccepted: 'Cash, Bank Transfer',
    sameAs: [
      'https://www.instagram.com/baktikawansejahtera',
      'https://www.facebook.com/baktikawansejahtera',
    ],
  }

  return (
    <html lang="id" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  )
}
