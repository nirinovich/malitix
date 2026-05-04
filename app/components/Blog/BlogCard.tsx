import { Link } from "react-router";
import type { BlogPostListItem } from "~/types";
import { formatDate } from "~/utils/formatDate";
import { urlFor } from "~/utils/sanityImage";
import { ArrowRight, Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  post: BlogPostListItem;
}

export function BlogCard({ post }: BlogCardProps) {
  const imageUrl = post.mainImage?.asset?.url
    ? urlFor(post.mainImage).width(800).height(450).fit("crop").url()
    : null;

  // Since estimatedReadingTime might not be available in Sanity yet, fallback to 5
  const readTime = (post as any).estimatedReadingTime || 5;

  return (
    <Link to={`/blog/${post.slug}`} className="group rounded-[2.5rem] border border-[var(--border-primary)] bg-[var(--surface-primary)] overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-[var(--brand-primary)]/20 flex flex-col h-full">
      <div className="h-56 bg-[var(--bg-secondary)] flex items-center justify-center border-b border-[var(--border-primary)] relative overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={post.mainImage?.alt || post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[var(--brand-primary)]/15 via-transparent to-[var(--brand-primary)]/5" />
        )}
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs text-[var(--text-muted)] mb-5 font-medium uppercase tracking-wider">
          {post.publishedAt && (
            <span className="flex items-center gap-1">
              <Calendar size={14} className="text-[var(--brand-primary)]" /> 
              {formatDate(post.publishedAt)}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Clock size={14} className="text-[var(--brand-primary)]" /> 
            {readTime} min
          </span>
        </div>

        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 group-hover:text-[var(--brand-primary)] transition-colors leading-tight">
          {post.title}
        </h3>
        
        {post.excerpt && (
          <p className="text-[var(--text-secondary)] text-base mb-8 line-clamp-3 leading-relaxed flex-grow">
            {post.excerpt}
          </p>
        )}

        <div className="mt-auto flex items-center gap-2 text-[var(--brand-primary)] font-bold text-sm tracking-wide uppercase">
          Lire l'analyse <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
}
