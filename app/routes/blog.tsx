import type { Route } from './+types/blog';
import { useLoaderData } from 'react-router';
import { Layout } from '~/components/Shared/Layout';
import { BlogList } from '~/components/Blog/BlogList';
import { sanityClient } from '~/utils/sanityClient';
import { POSTS_QUERY } from '~/utils/sanityQueries';
import type { BlogPostListItem } from '~/types';
import { buildMeta } from '~/utils/seo';

export async function loader() {
  const posts = await sanityClient.fetch<BlogPostListItem[]>(POSTS_QUERY);
  return { posts };
}

export const meta: Route.MetaFunction = () => {
  const title = 'Blog';
  const description =
    'Découvrez nos analyses, conseils et retours d’expérience sur la technologie, l’IA et la transformation digitale.';

  return buildMeta({
    title,
    description,
    type: 'website',
    url: 'https://malitix.com/blog',
  });
};

export default function BlogIndex() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2ca3bd]/30 bg-[#2ca3bd]/10 px-4 py-2 text-xs font-semibold text-[#2ca3bd]">
              Journal Malitix
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold text-[var(--text-primary)]">
              Insights & retours terrain
            </h1>
            <p className="max-w-2xl text-lg text-[var(--text-secondary)]">
              Analyses, guides et témoignages pour accélérer vos projets digitaux.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogList posts={posts ?? []} />
        </div>
      </section>
    </Layout>
  );
}
