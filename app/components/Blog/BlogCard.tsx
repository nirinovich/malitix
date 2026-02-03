import { Link } from 'react-router';
import type { BlogPostListItem } from '~/types';
import { formatDate } from '~/utils/formatDate';
import { urlFor } from '~/utils/sanityImage';

interface BlogCardProps {
  post: BlogPostListItem;
}

export function BlogCard({ post }: BlogCardProps) {
  const imageUrl = post.mainImage?.asset?.url
    ? urlFor(post.mainImage)
        .width(800)
        .height(450)
        .fit('crop')
        .url()
    : null;

  return (
    <article className="group rounded-3xl border border-[var(--border-primary)] bg-[var(--surface-primary)] overflow-hidden shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all">
      <Link to={`/blog/${post.slug}`} className="block">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={post.mainImage?.alt || post.title}
            className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="h-56 w-full bg-gradient-to-br from-[#2ca3bd]/15 via-transparent to-[#2ca3bd]/5" />
        )}
      </Link>

      <div className="p-6 space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)]">
          {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
          {post.author?.name && (
            <span className="inline-flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[var(--text-muted)]" />
              <span>{post.author.name}</span>
            </span>
          )}
        </div>

        <div>
          <Link
            to={`/blog/${post.slug}`}
            className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-text)] transition-colors"
          >
            {post.title}
          </Link>
          {post.excerpt && (
            <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {post.categories?.map((category) => (
            <span
              key={category._id}
              className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--surface-elevated)] text-[var(--text-secondary)]"
            >
              {category.title}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
