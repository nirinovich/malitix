import { useEffect, useRef, useCallback } from 'react';
import type { BlogPost as BlogPostType, BlogPostListItem } from '~/types';
import { formatDate } from '~/utils/formatDate';
import { urlFor } from '~/utils/sanityImage';
import { PortableTextRenderer } from './PortableTextRenderer';
import { Breadcrumbs } from './Breadcrumbs';
import { TableOfContents } from './TableOfContents';
import { AuthorBio } from './AuthorBio';
import { RelatedPosts } from './RelatedPosts';
import { NewsletterCTA } from './NewsletterCTA';
import { StickyNewsletterBar } from './StickyNewsletterBar';

interface BlogPostProps {
  post: BlogPostType;
  readingTime?: number;
  relatedPosts?: BlogPostListItem[];
}

export function BlogPost({ post, readingTime, relatedPosts }: BlogPostProps) {
  const heroImageUrl = post.mainImage?.asset?.url
    ? urlFor(post.mainImage).width(1400).height(780).fit('crop').url()
    : null;

  const lqip = post.mainImage?.asset?.metadata?.lqip;
  const headerRef = useRef<HTMLDivElement>(null);

  /** Ref callback: if image loaded from cache, remove blur immediately. */
  const blurUpRef = useCallback((img: HTMLImageElement | null) => {
    if (img?.complete) img.classList.remove('blur-up');
  }, []);

  /* Animate header on mount */
  useEffect(() => {
    const container = headerRef.current;
    if (!container) return;

    requestAnimationFrame(() => {
      container.querySelectorAll('.animate-on-scroll').forEach((el) => {
        el.classList.add('in-view');
      });
    });
  }, []);

  return (
    <>
      <article className="space-y-10">
        {/* Header */}
        <header ref={headerRef} className="space-y-6">
          <div className="animate-on-scroll">
            <Breadcrumbs
              items={[
                { label: 'Blog', to: '/blog' },
                { label: post.title },
              ]}
            />
          </div>

          <div className="animate-on-scroll stagger-1 space-y-4">
            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)]">
              {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
              {readingTime && (
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-[var(--text-muted)]" />
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {readingTime} min de lecture
                </span>
              )}
              {post.author?.name && (
                <span className="inline-flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[var(--text-muted)]" />
                  {post.author.image?.asset?.url && (
                    <img
                      src={urlFor(post.author.image).width(40).height(40).fit('crop').url()}
                      alt={post.author.name}
                      className="h-5 w-5 rounded-full object-cover"
                    />
                  )}
                  <span>{post.author.name}</span>
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-5xl font-semibold text-[var(--text-primary)] leading-tight">
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
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[#2ca3bd]/10 text-[#2ca3bd] border border-[#2ca3bd]/20"
                >
                  {category.title}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Hero image */}
        {heroImageUrl && (
          <div className="rounded-3xl overflow-hidden border border-[var(--border-primary)]">
            <img
              ref={lqip ? blurUpRef : undefined}
              src={heroImageUrl}
              alt={post.mainImage?.alt || post.title}
              className={`w-full object-cover ${lqip ? 'blur-up' : ''}`}
              style={lqip ? { backgroundImage: `url(${lqip})`, backgroundSize: 'cover' } : undefined}
              onLoad={(e) => e.currentTarget.classList.remove('blur-up')}
            />
          </div>
        )}

        {/* Mobile TOC */}
        {post.body?.length ? (
          <div className="lg:hidden">
            <TableOfContents body={post.body} />
          </div>
        ) : null}

        {/* Content + sidebar layout */}
        <div className="flex gap-10">
          {/* Main content */}
          <section className="min-w-0 flex-1 max-w-3xl">
            <PortableTextRenderer value={post.body ?? []} />

            {/* Inline newsletter CTA after body */}
            <div className="mt-12">
              <NewsletterCTA variant="inline" />
            </div>
          </section>

          {/* Desktop sidebar TOC */}
          {post.body?.length ? (
            <div className="hidden lg:block w-64 shrink-0">
              <TableOfContents body={post.body} />
            </div>
          ) : null}
        </div>

        {/* Tags */}
        {post.tags?.length ? (
          <footer className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-primary)]">
            {post.tags.map((tag) => (
              <span
                key={tag._id}
                className="px-3 py-1 rounded-full text-xs font-medium border border-[var(--border-primary)] text-[var(--text-secondary)] hover:border-[#2ca3bd]/30 hover:text-[var(--brand-text)] transition-colors"
              >
                #{tag.title}
              </span>
            ))}
          </footer>
        ) : null}

        {/* Author bio */}
        {post.author && (
          <div className="pt-2">
            <AuthorBio author={post.author} />
          </div>
        )}

        {/* Related posts */}
        {relatedPosts && relatedPosts.length > 0 && (
          <div className="pt-4">
            <RelatedPosts posts={relatedPosts} />
          </div>
        )}
      </article>

      {/* Sticky newsletter bar — sentinel placed after ~40% of article renders */}
      <StickyNewsletterBar />
    </>
  );
}
