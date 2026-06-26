import type { Metadata } from 'next'
import PageLayout from '@/components/templates/PageLayout'
import Link from 'next/link'
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'
import { getBlogPosts } from '@/lib/data/blog-posts'

export const metadata: Metadata = {
  title: 'Blog & Artikel | Bakti Kawan Sejahtera',
  description: 'Artikel informatif tentang perawatan furniture alkes, tips service, regulasi sanitasi, dan panduan maintenance untuk fasilitas kesehatan dan bisnis.',
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <PageLayout>
      <div className="pt-24 pb-12 bg-bg-section">
        <div className="container-main">
          <div className="section-label mb-4">Blog & Artikel</div>
          <h1 className="text-display-xl text-primary mb-4">
            Panduan & Insight{' '}
            <span className="gradient-text">Furniture Service</span>
          </h1>
          <p className="text-secondary text-xl max-w-2xl">
            Artikel informatif dari tim ahli kami tentang perawatan, service, dan maintenance furniture alkes dan komersial.
          </p>
        </div>
      </div>

      <section className="section-padding bg-bg">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card group flex flex-col">
                <div className="h-48 bg-gradient-to-br from-bg-section to-bg-darker rounded-t-2xl flex items-center justify-center p-6 overflow-hidden relative">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 30% 70%, #F97316 0%, transparent 60%)',
                    }}
                  />
                  <div className="text-4xl">📰</div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="badge text-xs">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-muted">
                      <Clock size={12} /> {post.readingTime} menit baca
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-lg text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2 flex-1">
                    {post.title}
                  </h2>
                  <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-muted">
                      <Calendar size={12} />
                      {new Date(post.publishedAt).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </div>
                    <span className="text-accent text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Baca <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
