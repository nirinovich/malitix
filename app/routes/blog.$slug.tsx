import type { Route } from './+types/blog.$slug';
import { useLoaderData } from 'react-router';
import { Layout } from '~/components/Shared/Layout';
import { BlogPost } from '~/components/Blog/BlogPost';
import { sanityClient } from '~/utils/sanityClient';
import { POST_QUERY } from '~/utils/sanityQueries';
import type { BlogPost as BlogPostType } from '~/types';
import { buildMeta } from '~/utils/seo';

export async function loader({ params }: Route.LoaderArgs) {
  const slug = params.slug;
  if (!slug) {
    throw new Response('Not Found', { status: 404 });
  }

  const post = await sanityClient.fetch<BlogPostType>(POST_QUERY, { slug });

  if (!post?._id) {
    throw new Response('Not Found', { status: 404 });
  }

  return { post };
}

export const meta: Route.MetaFunction = ({ data }) => {
  if (!data?.post) {
    return buildMeta({
      title: 'Article introuvable',
      description: 'Cet article est introuvable.',
      type: 'article',
    });
  }

  const { post } = data;
  const image = post.seo?.image?.asset?.url || post.mainImage?.asset?.url;

  return buildMeta({
    title: post.seo?.title || post.title,
    description:
      post.seo?.description ||
      post.excerpt ||
      'Découvrez les insights Malitix pour accélérer vos projets digitaux.',
    image,
    type: 'article',
    url: `https://www.malitix.com/blog/${post.slug}`,
  });
};

export default function BlogDetail() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <section className="pt-28 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogPost post={post} />
        </div>
      </section>
    </Layout>
  );
}
