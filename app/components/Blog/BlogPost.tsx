import type { BlogPost } from '~/types';
import { formatDate } from '~/utils/formatDate';
import { urlFor } from '~/utils/sanityImage';
import { PortableTextRenderer } from './PortableTextRenderer';

interface BlogPostProps {
  post: BlogPost;
}

export function BlogPost({ post }: BlogPostProps) {
  const heroImageUrl = post.mainImage?.asset?.url
    ? urlFor(post.mainImage).width(1400).height(780).fit('crop').url()
    : null;

  return (
    <article className="space-y-10">
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)]">
          {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
          {post.author?.name && (
            <span className="inline-flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[var(--text-muted)]" />
              <span>{post.author.name}</span>
            </span>
          )}
        </div>

        <h1 className="text-3xl md:text-5xl font-semibold text-[var(--text-primary)]">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
            {post.excerpt}
          </p>
        )}

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
      </header>

      {heroImageUrl && (
        <div className="rounded-3xl overflow-hidden border border-[var(--border-primary)]">
          <img
            src={heroImageUrl}
            alt={post.mainImage?.alt || post.title}
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      <section className="max-w-3xl">
        <PortableTextRenderer value={post.body ?? []} />
      </section>

      {post.tags?.length ? (
        <footer className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag._id}
              className="px-3 py-1 rounded-full text-xs font-medium border border-[var(--border-primary)] text-[var(--text-secondary)]"
            >
              #{tag.title}
            </span>
          ))}
        </footer>
      ) : null}
    </article>
  );
}
