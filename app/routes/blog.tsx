import { useEffect, useRef } from 'react';
import type { Route } from './+types/blog';
import { useLoaderData } from 'react-router';
import { Layout } from '~/components/Shared/Layout';
import { BlogList } from '~/components/Blog/BlogList';
import { NewsletterCTA } from '~/components/Blog/NewsletterCTA';
import { sanityClient } from '~/utils/sanityClient';
import { POSTS_QUERY } from '~/utils/sanityQueries';
import type { BlogPostListItem } from '~/types';
import { buildMeta, buildStructuredData } from '~/utils/seo';

export async function loader() {
  const posts = await sanityClient.fetch<BlogPostListItem[]>(POSTS_QUERY);
  return { posts };
}

export const meta: Route.MetaFunction = () => {
  const title = 'Blog';
  const description =
    'Découvrez nos analyses, conseils et retours d’expérience sur la technologie, l’IA et la transformation digitale.';

  const meta = buildMeta({
    title,
    description,
    type: 'website',
    url: 'https://malitix.com/blog',
  });

  const structuredData = buildStructuredData({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Blog Malitix',
    description,
    url: 'https://malitix.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Malitix',
      url: 'https://malitix.com',
    },
  });

  return [...meta, ...structuredData];
};

export default function BlogIndex() {
  const { posts } = useLoaderData<typeof loader>();
  const headerRef = useRef<HTMLDivElement>(null);

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
    <Layout>
      <section className="pt-28 pb-16" ref={headerRef}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Flanked eyebrow \u2014 matches site-wide pattern */}
            <div className="animate-on-scroll flex items-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#2ca3bd]/50" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#2ca3bd]">
                Journal Malitix
              </span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#2ca3bd]/50" />
            </div>
            <h1 className="animate-on-scroll stagger-1 text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)]">
              Insights & retours terrain
            </h1>
            <p className="animate-on-scroll stagger-2 max-w-2xl text-lg text-[var(--text-secondary)]">
              Analyses, guides et témoignages pour accélérer vos projets digitaux.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogList posts={posts ?? []} />
        </div>
      </section>

      {/* Bottom newsletter CTA */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterCTA variant="inline" />
        </div>
      </section>
    </Layout>
  );
}
