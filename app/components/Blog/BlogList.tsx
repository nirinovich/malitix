import { useEffect, useRef, useState, useMemo } from 'react';
import { Link } from 'react-router';
import type { BlogPostListItem, BlogTaxonomy } from '~/types';
import { BlogCard } from './BlogCard';
import { CategoryFilter } from './CategoryFilter';
import { formatDate } from '~/utils/formatDate';
import { urlFor } from '~/utils/sanityImage';

interface BlogListProps {
  posts: BlogPostListItem[];
}

export function BlogList({ posts }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  /* Extract unique categories from all posts */
  const categories = useMemo(() => {
    const map = new Map<string, BlogTaxonomy>();
    for (const post of posts) {
      for (const cat of post.categories ?? []) {
        if (cat.slug && !map.has(cat.slug)) {
          map.set(cat.slug, cat);
        }
      }
    }
    return Array.from(map.values());
  }, [posts]);

  /* Filter posts by category */
  const filteredPosts = useMemo(() => {
    if (!activeCategory) return posts;
    return posts.filter((p) =>
      p.categories?.some((c) => c.slug === activeCategory)
    );
  }, [posts, activeCategory]);

  const [featured, ...rest] = filteredPosts;

  /* Scroll-triggered animations */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          container.querySelectorAll('.animate-on-scroll').forEach((el) => {
            el.classList.add('in-view');
          });
          observer.disconnect();
        }
      },
      { rootMargin: '-50px', threshold: 0 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [filteredPosts]);

  if (!posts.length) {
    return (
      <div className="rounded-3xl border border-dashed border-[var(--border-primary)] bg-[var(--surface-primary)] p-12 text-center space-y-4">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2ca3bd]/10">
          <svg className="h-8 w-8 text-[#2ca3bd]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">Bientôt des articles</h3>
        <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
          Les premiers contenus arrivent. Revenez vite pour découvrir nos analyses et retours terrain.
        </p>
      </div>
    );
  }

  const featuredImage = featured?.mainImage?.asset?.url
    ? urlFor(featured.mainImage).width(1200).height(600).fit('crop').url()
    : null;

  const featuredLqip = featured?.mainImage?.asset?.metadata?.lqip;

  return (
    <div ref={containerRef} className="space-y-10">
      {/* Category filter */}
      {categories.length > 1 && (
        <div className="animate-on-scroll">
          <CategoryFilter
            categories={categories}
            activeSlug={activeCategory}
            onSelect={setActiveCategory}
          />
        </div>
      )}

      {/* Post count */}
      <p className="text-sm text-[var(--text-muted)] animate-on-scroll stagger-1">
        {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
      </p>

      {/* Featured hero card — first post */}
      {featured && (
        <Link
          to={`/blog/${featured.slug}`}
          className="featured-card group block rounded-3xl border border-[var(--border-primary)] bg-[var(--surface-primary)] overflow-hidden shadow-lg shadow-black/5 animate-on-scroll stagger-1"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-full min-h-[280px] overflow-hidden">
              {featuredImage ? (
                <img
                  src={featuredImage}
                  alt={featured.mainImage?.alt || featured.title}
                  className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${featuredLqip ? 'blur-up' : ''}`}
                  style={featuredLqip ? { backgroundImage: `url(${featuredLqip})`, backgroundSize: 'cover' } : undefined}
                  onLoad={(e) => e.currentTarget.classList.remove('blur-up')}
                  ref={(img) => { if (img?.complete) img.classList.remove('blur-up'); }}
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-[#2ca3bd]/15 via-transparent to-[#2ca3bd]/5" />
              )}
            </div>

            <div className="flex flex-col justify-center p-8 md:p-10 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                {featured.categories?.map((cat) => (
                  <span
                    key={cat._id}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-[#2ca3bd]/10 text-[#2ca3bd] border border-[#2ca3bd]/20"
                  >
                    {cat.title}
                  </span>
                ))}
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-text)] transition-colors duration-300">
                {featured.title}
              </h2>

              {featured.excerpt && (
                <p className="text-base text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                  {featured.excerpt}
                </p>
              )}

              <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                {featured.publishedAt && <span>{formatDate(featured.publishedAt)}</span>}
                {featured.author?.name && (
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[var(--text-muted)]" />
                    <span>{featured.author.name}</span>
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-[var(--brand-text)] pt-2">
                <span>Lire l'article</span>
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Grid of remaining posts */}
      {rest.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <div key={post._id} className={`animate-on-scroll stagger-${(i % 6) + 1}`}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
