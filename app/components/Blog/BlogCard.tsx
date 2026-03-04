import { useCallback } from 'react';
import { Link } from 'react-router';
import type { BlogPostListItem } from '~/types';
import { formatDate } from '~/utils/formatDate';
import { urlFor } from '~/utils/sanityImage';

interface BlogCardProps {
  post: BlogPostListItem;
  readingTime?: number;
}

export function BlogCard({ post, readingTime }: BlogCardProps) {
  const imageUrl = post.mainImage?.asset?.url
    ? urlFor(post.mainImage)
        .width(800)
        .height(450)
        .fit('crop')
        .url()
    : null;

  const lqip = post.mainImage?.asset?.metadata?.lqip;

  /** Ref callback: if image loaded from cache, remove blur immediately. */
  const blurUpRef = useCallback((img: HTMLImageElement | null) => {
    if (img?.complete) img.classList.remove('blur-up');
  }, []);

  const authorAvatarUrl = post.author?.image?.asset?.url
    ? urlFor(post.author.image).width(64).height(64).fit('crop').url()
    : null;

  return (
    <article className="group relative rounded-3xl border border-[var(--border-primary)] bg-[var(--surface-primary)] overflow-hidden shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-[#2ca3bd]/10 hover:-translate-y-1 transition-all duration-500">
      {/* Glow orb on hover */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#2ca3bd]/10 blur-3xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />

      <Link to={`/blog/${post.slug}`} className="block relative">
        {imageUrl ? (
          <div className="relative h-56 w-full overflow-hidden">
            <img
              ref={lqip ? blurUpRef : undefined}
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05] ${lqip ? 'blur-up' : ''}`}
              loading="lazy"
              style={lqip ? { backgroundImage: `url(${lqip})`, backgroundSize: 'cover' } : undefined}
              onLoad={(e) => e.currentTarget.classList.remove('blur-up')}
            />
          </div>
        ) : (
          <div className="h-56 w-full bg-gradient-to-br from-[#2ca3bd]/15 via-transparent to-[#2ca3bd]/5" />
        )}

        {/* Reading time badge */}
        {readingTime && (
          <span className="absolute top-3 right-3 rounded-full bg-black/60 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
            {readingTime} min
          </span>
        )}
      </Link>

      <div className="relative p-6 space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)]">
          {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
          {post.author?.name && (
            <span className="inline-flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[var(--text-muted)]" />
              {authorAvatarUrl ? (
                <img
                  src={authorAvatarUrl}
                  alt={post.author.name}
                  className="h-5 w-5 rounded-full object-cover"
                  loading="lazy"
                />
              ) : null}
              <span>{post.author.name}</span>
            </span>
          )}
        </div>

        <div>
          <Link
            to={`/blog/${post.slug}`}
            className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-text)] transition-colors duration-300"
          >
            {post.title}
          </Link>
          {post.excerpt && (
            <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {post.categories?.map((category) => (
            <span
              key={category._id}
              className="px-3 py-1 rounded-full text-xs font-medium bg-[#2ca3bd]/10 text-[#2ca3bd] border border-[#2ca3bd]/20"
            >
              {category.title}
            </span>
          ))}
        </div>

        {/* Read more indicator */}
        <div className="flex items-center gap-2 text-sm font-medium text-[var(--brand-text)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Lire l'article</span>
          <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </article>
  );
}
