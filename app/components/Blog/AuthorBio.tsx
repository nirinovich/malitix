import type { BlogAuthor } from '~/types';
import type { PortableTextValue } from '~/types/portableText';
import { urlFor } from '~/utils/sanityImage';
import { PortableTextRenderer } from './PortableTextRenderer';

interface AuthorBioProps {
  author: BlogAuthor;
}

export function AuthorBio({ author }: AuthorBioProps) {
  const avatarUrl = author.image?.asset?.url
    ? urlFor(author.image).width(128).height(128).fit('crop').url()
    : null;

  return (
    <div className="rounded-3xl border border-[var(--border-primary)] bg-[var(--surface-primary)] p-6 md:p-8">
      <div className="flex items-start gap-5">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={author.name}
            className="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-[#2ca3bd]/20"
            loading="lazy"
          />
        ) : (
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2ca3bd]/20 to-[#2ca3bd]/5 text-[#2ca3bd] font-bold text-xl">
            {author.name.charAt(0)}
          </div>
        )}

        <div className="space-y-1.5 min-w-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2ca3bd]">
            À propos de l'auteur
          </p>
          <h4 className="text-lg font-semibold text-[var(--text-primary)]">{author.name}</h4>
          {author.role && (
            <p className="text-sm text-[var(--text-secondary)]">{author.role}</p>
          )}
          {author.bio && (
            <div className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
              {typeof author.bio === 'string' ? (
                <p>{author.bio}</p>
              ) : (
                <PortableTextRenderer value={author.bio as PortableTextValue} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
