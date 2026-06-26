import Navbar from '@/components/organisms/Navbar'
import Footer from '@/components/organisms/Footer'
import WhatsAppFloat from '@/components/molecules/WhatsAppFloat'

interface PageLayoutProps {
  children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
