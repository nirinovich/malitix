import { useEffect, useRef } from 'react';
import type { BlogPostListItem } from '~/types';
import { BlogCard } from './BlogCard';

interface RelatedPostsProps {
  posts: BlogPostListItem[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

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
  }, []);

  if (!posts.length) return null;

  return (
    <section ref={containerRef} className="space-y-8">
      {/* Section header — flanked eyebrow pattern */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]/50" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2ca3bd]">
            À lire aussi
          </span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]/50" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
          Articles similaires
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <div key={post._id} className={`animate-on-scroll stagger-${i + 1}`}>
            <BlogCard post={post} />
          </div>
        ))}
      </div>
    </section>
  );
}
