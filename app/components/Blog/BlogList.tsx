import type { BlogPostListItem } from '~/types';
import { BlogCard } from './BlogCard';

interface BlogListProps {
  posts: BlogPostListItem[];
}

export function BlogList({ posts }: BlogListProps) {
  if (!posts.length) {
    return (
      <div className="rounded-3xl border border-dashed border-[var(--border-primary)] bg-[var(--surface-primary)] p-10 text-center">
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">Bientôt des articles</h3>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          Les premiers contenus arrivent. Revenez vite pour découvrir nos analyses.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post._id} post={post} />
      ))}
    </div>
  );
}
