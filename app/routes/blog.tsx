import type { Route } from "./+types/blog";
import { useLoaderData } from "react-router";
import { Layout } from "~/components/Shared/Layout";
import { BlogList } from "~/components/Blog/BlogList";
import { sanityClient } from "~/utils/sanityClient";
import { POSTS_QUERY } from "~/utils/sanityQueries";
import type { BlogPostListItem } from "~/types";
import { buildMeta } from "~/utils/seo";

export async function loader() {
  const posts = await sanityClient.fetch<BlogPostListItem[]>(POSTS_QUERY);
  return { posts };
}

export const meta: Route.MetaFunction = () => {
  const title = "Blog";
  const description =
    "Découvrez nos analyses, conseils et retours d’expérience sur la technologie, l’IA et la transformation digitale.";

  return buildMeta({
    title,
    description,
    type: "website",
    url: "https://malitix.com/blog",
  });
};

export default function BlogIndex() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <section className="pt-32 pb-24 min-h-[70vh] bg-[var(--bg-primary)] relative overflow-hidden">
        {/* Abstract Background Decorators */}
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 bg-[var(--brand-primary)]/20 pointer-events-none" />
        <div className="absolute top-2/3 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 bg-[var(--brand-primary)]/20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-6 text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-primary)]/30 bg-[var(--brand-primary)]/10 px-4 py-2 text-xs font-semibold text-[var(--brand-primary)] uppercase tracking-wider">
              Blog Malitix
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Insights & retours terrain
            </h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              Analyses stratégiques, guides d'ingénierie et témoignages pour accélérer votre prise de décision technologique.
            </p>
          </div>

          <BlogList posts={posts ?? []} />
        </div>
      </section>
    </Layout>
  );
}
