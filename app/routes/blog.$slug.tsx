import type { Route } from './+types/blog.$slug';
import { useLoaderData } from 'react-router';
import { Layout } from '~/components/Shared/Layout';
import { BlogPost } from '~/components/Blog/BlogPost';
import { sanityClient } from '~/utils/sanityClient';
import { POST_QUERY, RELATED_POSTS_QUERY } from '~/utils/sanityQueries';
import type { BlogPost as BlogPostType, BlogPostListItem } from '~/types';
import { buildMeta, buildStructuredData } from '~/utils/seo';

/**
 * Estimate reading time from Portable Text body.
 * Serialises blocks to plain text and divides by 200 wpm.
 */
function estimateReadingTime(body: unknown[] | undefined): number {
  if (!body?.length) return 1;
  let wordCount = 0;
  for (const block of body) {
    const b = block as Record<string, unknown>;
    const children = b.children as { text?: string }[] | undefined;
    if (children) {
      for (const child of children) {
        if (child.text) {
          wordCount += child.text.split(/\s+/).filter(Boolean).length;
        }
      }
    }
  }
  return Math.max(1, Math.ceil(wordCount / 200));
}

export async function loader({ params }: Route.LoaderArgs) {
  const slug = params.slug;
  if (!slug) {
    throw new Response('Not Found', { status: 404 });
  }

  const post = await sanityClient.fetch<BlogPostType>(POST_QUERY, { slug });

  if (!post?._id) {
    throw new Response('Not Found', { status: 404 });
  }

  const readingTime = estimateReadingTime(post.body as unknown[] | undefined);

  // Fetch related posts (same categories, exclude current)
  const categoryIds = post.categories?.map((c) => c._id) ?? [];
  let relatedPosts: BlogPostListItem[] = [];
  if (categoryIds.length > 0) {
    relatedPosts = await sanityClient.fetch<BlogPostListItem[]>(
      RELATED_POSTS_QUERY,
      { currentId: post._id, categoryIds }
    );
  }

  return { post, readingTime, relatedPosts };
}

export const meta: Route.MetaFunction = ({ data }) => {
  if (!data?.post) {
    return buildMeta({
      title: 'Article introuvable',
      description: 'Cet article est introuvable.',
      type: 'article',
    });
  }

  const { post, readingTime } = data;
  const image = post.seo?.image?.asset?.url || post.mainImage?.asset?.url;
  const url = `https://malitix.com/blog/${post.slug}`;

  const meta = buildMeta({
    title: post.seo?.title || post.title,
    description:
      post.seo?.description ||
      post.excerpt ||
      'Découvrez les insights Malitix pour accélérer vos projets digitaux.',
    image,
    type: 'article',
    url,
  });

  // BlogPosting structured data (JSON-LD)
  const structuredData = buildStructuredData({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || '',
    image: image || undefined,
    datePublished: post.publishedAt || undefined,
    author: post.author
      ? { '@type': 'Person', name: post.author.name }
      : undefined,
    publisher: {
      '@type': 'Organization',
      name: 'Malitix',
      url: 'https://malitix.com',
    },
    url,
    wordCount: readingTime ? readingTime * 200 : undefined,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  });

  // BreadcrumbList structured data
  const breadcrumbs = buildStructuredData({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://malitix.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://malitix.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  });

  return [...meta, ...structuredData, ...breadcrumbs];
};

export default function BlogDetail() {
  const { post, readingTime, relatedPosts } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <section className="pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogPost post={post} readingTime={readingTime} relatedPosts={relatedPosts} />
        </div>
      </section>
    </Layout>
  );
}
