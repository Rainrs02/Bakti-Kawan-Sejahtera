import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageLayout from '@/components/templates/PageLayout'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import { getBlogPostBySlug, getBlogPosts } from '@/lib/data/blog-posts'
import { getWADirectLink } from '@/lib/utils/whatsapp'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getBlogPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return { title: 'Artikel Tidak Ditemukan' }
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      tags: post.tags,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const allPosts = getBlogPosts().filter((p) => p.slug !== slug).slice(0, 2)

  // Simple markdown-ish renderer
  const renderContent = (content: string) => {
    return content
      .trim()
      .split('\n')
      .map((line, i) => {
        if (line.startsWith('# ')) return <h1 key={i} className="text-display-lg text-primary mt-8 mb-4 first:mt-0">{line.slice(2)}</h1>
        if (line.startsWith('## ')) return <h2 key={i} className="text-display-md text-primary mt-8 mb-4">{line.slice(3)}</h2>
        if (line.startsWith('### ')) return <h3 key={i} className="text-xl font-bold text-primary mt-6 mb-3">{line.slice(4)}</h3>
        if (line.startsWith('**') && line.endsWith('**')) return <p key={i} className="font-bold text-primary mb-2">{line.slice(2, -2)}</p>
        if (line.startsWith('✅ ') || line.startsWith('❌ ') || line.startsWith('🚨 ')) return <p key={i} className="text-secondary mb-2 pl-2">{line}</p>
        if (line.startsWith('- ')) return <li key={i} className="text-secondary mb-1 ml-4 list-disc">{line.slice(2)}</li>
        if (line.startsWith('| ') || line.startsWith('|--')) return null
        if (line.match(/^\d+\. /)) return <li key={i} className="text-secondary mb-1 ml-4 list-decimal">{line.replace(/^\d+\. /, '')}</li>
        if (line === '') return <br key={i} />
        return <p key={i} className="text-secondary leading-relaxed mb-4">{line}</p>
      })
  }

  return (
    <PageLayout>
      {/* Article Hero */}
      <div className="pt-24 pb-10 bg-bg-section border-b border-border">
        <div className="container-main max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors mb-6">
            <ArrowLeft size={16} /> Kembali ke Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="badge">{post.category}</span>
            <span className="flex items-center gap-1.5 text-xs text-muted">
              <Clock size={12} /> {post.readingTime} menit baca
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted">
              <Calendar size={12} />
              {new Date(post.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>
          <h1 className="text-display-lg text-primary mb-4">{post.title}</h1>
          <p className="text-secondary text-xl leading-relaxed">{post.excerpt}</p>
        </div>
      </div>

      {/* Article Body */}
      <div className="section-padding bg-bg">
        <div className="container-main max-w-4xl">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Content */}
            <article className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                {renderContent(post.content)}
              </div>

              {/* Tags */}
              <div className="mt-10 pt-6 border-t border-border">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag size={14} className="text-muted" />
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-bg-section text-secondary text-xs border border-border">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA */}
              <div className="p-5 rounded-2xl bg-primary text-white sticky top-24">
                <h3 className="font-bold text-base mb-2">Butuh Bantuan Service?</h3>
                <p className="text-white/80 text-sm mb-4">Konsultasi gratis dengan teknisi bersertifikasi kami.</p>
                <Link href="/konsultasi" className="btn btn-primary w-full justify-center text-sm mb-2">
                  Konsultasi Gratis
                </Link>
                <a href={getWADirectLink()} target="_blank" rel="noopener noreferrer" className="btn bg-whatsapp text-white hover:bg-green-600 w-full justify-center text-sm">
                  WhatsApp
                </a>
              </div>

              {/* Related Posts */}
              {allPosts.length > 0 && (
                <div className="p-5 rounded-2xl border border-border">
                  <h3 className="font-bold text-sm text-primary mb-4">Artikel Lainnya</h3>
                  <div className="space-y-3">
                    {allPosts.map((p) => (
                      <Link key={p.slug} href={`/blog/${p.slug}`} className="block group">
                        <div className="text-sm font-medium text-secondary group-hover:text-accent transition-colors line-clamp-2 mb-1">
                          {p.title}
                        </div>
                        <div className="text-xs text-muted">{p.readingTime} menit baca</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
