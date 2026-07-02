'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { getWADirectLink } from '@/lib/utils/whatsapp'
import { SERVICE_CATEGORIES, SERVICES } from '@/lib/data/services'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Layanan', href: '/layanan', hasMegaMenu: true },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Kontak', href: '/kontak' },
]

const alkesServices = SERVICES.filter((s) => s.category === 'alkes')
const kantorServices = SERVICES.filter((s) => s.category === 'kantor')
const komersialServices = SERVICES.filter((s) => s.category === 'komersial')

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [mobileLayananOpen, setMobileLayananOpen] = useState(false)
  const megaMenuRef = useRef<HTMLDivElement>(null)
  const megaMenuTimerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleMegaMenuEnter = () => {
    if (megaMenuTimerRef.current) clearTimeout(megaMenuTimerRef.current)
    setMegaMenuOpen(true)
  }

  const handleMegaMenuLeave = () => {
    megaMenuTimerRef.current = setTimeout(() => setMegaMenuOpen(false), 150)
  }

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }



  return (
    <>
      <header
        className={cn(
          'navbar',
          scrolled && 'navbar-scrolled'
        )}
      >
        <div className="container-main">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 flex-shrink-0"
              onClick={() => setMenuOpen(false)}
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image
                  src="/images/logo/logo.webp"
                  alt="Bakti Kawan Service"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <div
                  className={cn(
                    'font-display font-bold text-base leading-tight transition-colors text-primary'
                  )}
                >
                  Bakti Kawan
                </div>
                <div className="text-accent text-xs font-semibold tracking-wider uppercase">
                  Service
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.hasMegaMenu ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={handleMegaMenuEnter}
                    onMouseLeave={handleMegaMenuLeave}
                  >
                    <button
                      className={cn(
                        'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                        'text-secondary hover:text-primary hover:bg-bg-section',
                        isActive(link.href) && 'text-accent'
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          'transition-transform duration-200',
                          megaMenuOpen && 'rotate-180'
                        )}
                      />
                    </button>

                    {/* Mega Menu */}
                    <div
                      ref={megaMenuRef}
                      className={cn(
                        'mega-menu',
                        megaMenuOpen && 'open'
                      )}
                      style={{ width: '700px' }}
                    >
                      <div className="grid grid-cols-3 gap-6">
                        {/* Alkes */}
                        <div>
                          <Link href="/layanan/kategori/alkes" className="flex items-center gap-2 mb-3 group/title" onClick={() => setMegaMenuOpen(false)}>
                            <span className="text-lg">🏥</span>
                            <span className="text-xs font-bold uppercase tracking-wider text-accent group-hover/title:text-accent-hover transition-colors">
                              Alat Kesehatan
                            </span>
                          </Link>
                          <div className="space-y-1">
                            {alkesServices.map((svc) => (
                              <Link
                                key={svc.slug}
                                href={`/layanan/${svc.slug}`}
                                className="block px-2 py-1.5 text-sm text-secondary hover:text-accent hover:bg-accent-light rounded-lg transition-colors duration-150"
                                onClick={() => setMegaMenuOpen(false)}
                              >
                                {svc.shortName}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Kantor */}
                        <div>
                          <Link href="/layanan/kategori/kantor" className="flex items-center gap-2 mb-3 group/title" onClick={() => setMegaMenuOpen(false)}>
                            <span className="text-lg">🏢</span>
                            <span className="text-xs font-bold uppercase tracking-wider text-accent group-hover/title:text-accent-hover transition-colors">
                              Furniture Kantor
                            </span>
                          </Link>
                          <div className="space-y-1">
                            {kantorServices.map((svc) => (
                              <Link
                                key={svc.slug}
                                href={`/layanan/${svc.slug}`}
                                className="block px-2 py-1.5 text-sm text-secondary hover:text-accent hover:bg-accent-light rounded-lg transition-colors duration-150"
                                onClick={() => setMegaMenuOpen(false)}
                              >
                                {svc.shortName}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Komersial */}
                        <div>
                          <Link href="/layanan/kategori/komersial" className="flex items-center gap-2 mb-3 group/title" onClick={() => setMegaMenuOpen(false)}>
                            <span className="text-lg">☕</span>
                            <span className="text-xs font-bold uppercase tracking-wider text-accent group-hover/title:text-accent-hover transition-colors">
                              Furniture Komersial
                            </span>
                          </Link>
                          <div className="space-y-1">
                            {komersialServices.map((svc) => (
                              <Link
                                key={svc.slug}
                                href={`/layanan/${svc.slug}`}
                                className="block px-2 py-1.5 text-sm text-secondary hover:text-accent hover:bg-accent-light rounded-lg transition-colors duration-150"
                                onClick={() => setMegaMenuOpen(false)}
                              >
                                {svc.shortName}
                              </Link>
                            ))}
                          </div>

                          {/* View all */}
                          <div className="mt-4 pt-3 border-t border-border">
                            <Link
                              href="/layanan"
                              className="flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
                              onClick={() => setMegaMenuOpen(false)}
                            >
                              Lihat Semua Layanan →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                      'text-secondary hover:text-primary hover:bg-bg-section',
                      isActive(link.href) && 'text-accent'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={getWADirectLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
              >
                <Phone size={15} />
                <span className="hidden xl:inline">+62 812 0000 0001</span>
              </a>
              <Link
                href="/konsultasi"
                className="btn btn-primary btn-sm glow-orange-sm"
              >
                Konsultasi Gratis
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className={cn(
                'lg:hidden p-2 rounded-lg transition-colors text-primary hover:bg-bg-section'
              )}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={cn('mobile-menu', menuOpen && 'open')}>
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={() => setMenuOpen(false)}
            >
              <div className="relative w-10 h-10">
                <Image src="/images/logo/logo.webp" alt="BKS" fill className="object-contain" />
              </div>
              <div>
                <div className="font-display font-bold text-sm text-primary">Bakti Kawan</div>
                <div className="text-accent text-xs font-semibold tracking-wider uppercase">Service</div>
              </div>
            </Link>
            <button
              className="p-2 rounded-lg text-primary hover:bg-bg-section"
              onClick={() => setMenuOpen(false)}
            >
              <X size={22} />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-1">
            {navLinks.map((link) =>
              link.hasMegaMenu ? (
                <div key={link.href}>
                  <button
                    className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-primary font-semibold hover:bg-bg-section transition-colors"
                    onClick={() => setMobileLayananOpen(!mobileLayananOpen)}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={16}
                      className={cn('transition-transform', mobileLayananOpen && 'rotate-180')}
                    />
                  </button>
                  {mobileLayananOpen && (
                    <div className="mt-1 ml-3 space-y-4 pl-4 border-l-2 border-accent/20">
                      {[
                        { label: '🏥 Alat Kesehatan', services: alkesServices, slug: 'alkes' },
                        { label: '🏢 Furniture Kantor', services: kantorServices, slug: 'kantor' },
                        { label: '☕ Furniture Komersial', services: komersialServices, slug: 'komersial' },
                      ].map((cat) => (
                        <div key={cat.label}>
                          <Link
                            href={`/layanan/kategori/${cat.slug}`}
                            className="block text-xs font-bold uppercase tracking-wider text-accent mb-2 hover:text-accent-hover transition-colors"
                            onClick={() => setMenuOpen(false)}
                          >
                            {cat.label}
                          </Link>
                          <div className="space-y-1">
                            {cat.services.map((svc) => (
                              <Link
                                key={svc.slug}
                                href={`/layanan/${svc.slug}`}
                                className="block py-1.5 text-sm text-secondary hover:text-accent transition-colors"
                                onClick={() => setMenuOpen(false)}
                              >
                                {svc.shortName}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                      <Link
                        href="/layanan"
                        className="block py-1.5 text-sm font-semibold text-accent"
                        onClick={() => setMenuOpen(false)}
                      >
                        Lihat Semua Layanan →
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'block px-3 py-3 rounded-xl font-medium transition-colors',
                    isActive(link.href)
                      ? 'text-accent bg-accent-light'
                      : 'text-primary hover:bg-bg-section'
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile CTA */}
          <div className="px-5 py-6 border-t border-border space-y-3">
            <a
              href={getWADirectLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-full justify-center"
            >
              💬 WhatsApp: +62 812 0000 0001
            </a>
            <Link
              href="/konsultasi"
              className="btn btn-primary w-full justify-center"
              onClick={() => setMenuOpen(false)}
            >
              Konsultasi Gratis
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[98] bg-black/30 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  )
}
