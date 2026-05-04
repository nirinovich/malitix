import type { BlogPost as BlogPostType } from "~/types";
import { formatDate } from "~/utils/formatDate";
import { urlFor } from "~/utils/sanityImage";
import { PortableTextRenderer } from "./PortableTextRenderer";
import { Link } from "react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

interface BlogPostProps {
  post: BlogPostType;
}

export function BlogPost({ post }: BlogPostProps) {
  const heroImageUrl = post.mainImage?.asset?.url
    ? urlFor(post.mainImage).width(1200).height(600).fit("crop").url()
    : null;

  return (
    <>
      {/* Hero Header */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-[var(--bg-primary)] border-b border-[var(--border-primary)]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 bg-[var(--brand-primary)]/20 pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-8 font-medium">
            <ArrowLeft size={16} /> Retour au blog
          </Link>

          <div className="space-y-6">
            {post.categories && post.categories.length > 0 && (
              <div className="inline-flex flex-wrap items-center gap-3 text-sm text-[var(--brand-primary)] font-bold uppercase tracking-widest">
                {post.categories.map((cat, i) => (
                  <span key={cat._id} className="flex items-center gap-3">
                    <span>{cat.title}</span>
                    {i < post.categories!.length - 1 && <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-primary)]" />}
                  </span>
                ))}
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-[var(--text-primary)] leading-[1.15] tracking-tight">
              {post.title}
            </h1>
            
            {post.excerpt && (
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed font-light">
                {post.excerpt}
              </p>
            )}

            <div className="flex items-center gap-3 text-sm text-[var(--text-muted)] pt-4">
              {post.author?.name && <span>Par {post.author.name}</span>}
              {post.author?.name && post.publishedAt && <span>•</span>}
              {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
            </div>
          </div>
        </div>
        
        {heroImageUrl && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-[var(--border-primary)] relative">
              <img 
                src={heroImageUrl} 
                alt={post.mainImage?.alt || post.title} 
                className="w-full h-auto max-h-[500px] object-cover"
              />
            </div>
          </div>
        )}
      </section>

      {/* Article Content */}
      <article className="py-16 bg-[var(--bg-primary)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg dark:prose-invert prose-headings:text-[var(--text-primary)] prose-a:text-[var(--brand-primary)] hover:prose-a:text-[#248fa5]">
          <PortableTextRenderer value={post.body ?? []} />
        </div>
      </article>

      {/* CTA Final */}
      <section className="py-24 bg-[var(--bg-primary)] border-t border-[var(--border-primary)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-20 bg-[var(--brand-primary)]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-6">
            Prêt à accélérer votre projet ?
          </h2>
          <div className="text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto space-y-4">
            <p>
              Nos experts sont disponibles pour échanger sur vos problématiques technologiques.
            </p>
            <p className="text-sm border border-[var(--border-primary)] p-4 rounded-xl bg-[var(--surface-primary)] inline-block text-left mx-auto">
              <strong className="block text-[var(--text-primary)] mb-2">Notre approche :</strong>
              <span className="flex items-center gap-2 mb-1"><CheckCircle2 size={16} className="text-[var(--brand-primary)]" /> Audit technique de votre existant.</span>
              <span className="flex items-center gap-2 mb-1"><CheckCircle2 size={16} className="text-[var(--brand-primary)]" /> Plan d'action détaillé sous 48h.</span>
              <span className="flex items-center gap-2 text-amber-500 font-medium dark:text-amber-400">Échange 100% gratuit avec un expert technique senior.</span>
            </p>
          </div>
          
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 bg-[var(--brand-primary)] hover:opacity-90 text-white px-8 py-5 rounded-xl font-bold text-lg shadow-xl shadow-[var(--brand-primary)]/30 transition-all hover:scale-105 hover:shadow-[var(--brand-primary)]/50 cursor-pointer"
          >
            Prendre rendez-vous avec un expert <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
