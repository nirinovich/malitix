import { PortableText, type PortableTextComponents } from '@portabletext/react';
import type { SanityImage } from '~/types';
import type { PortableTextValue } from '~/types/portableText';
import { urlFor } from '~/utils/sanityImage';

type TextChildrenProps = { children?: React.ReactNode };
type LinkValue = { href?: string; openInNewTab?: boolean };
type LinkProps = { children?: React.ReactNode; value?: LinkValue };
type ImageProps = { value?: SanityImage };

const components: PortableTextComponents = {
  block: {
    h2: ({ children }: TextChildrenProps) => (
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }: TextChildrenProps) => (
      <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
        {children}
      </h3>
    ),
    blockquote: ({ children }: TextChildrenProps) => (
      <blockquote className="border-l-4 border-[#2ca3bd] pl-4 italic text-[var(--text-secondary)] my-6">
        {children}
      </blockquote>
    ),
    normal: ({ children }: TextChildrenProps) => (
      <p className="text-base leading-relaxed text-[var(--text-secondary)] mb-4">
        {children}
      </p>
    ),
  },
  marks: {
    link: ({ children, value }: LinkProps) => {
      const rel = value?.href?.startsWith('/') ? undefined : 'noopener noreferrer';
      const target = value?.openInNewTab ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          rel={rel}
          target={target}
          className="text-[var(--brand-text)] underline"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }: ImageProps) => {
      const image = value;
      const imageUrl = image?.asset?.url
        ? urlFor(image).width(1200).height(700).fit('crop').url()
        : null;
      if (!imageUrl) return null;
      return (
        <figure className="my-8">
          <img
            src={imageUrl}
            alt={image?.alt || ''}
            className="w-full rounded-2xl border border-[var(--border-primary)]"
            loading="lazy"
          />
          {image?.alt && (
            <figcaption className="mt-3 text-sm text-[var(--text-muted)]">
              {image.alt}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  list: {
    bullet: ({ children }: TextChildrenProps) => (
      <ul className="list-disc pl-5 text-[var(--text-secondary)] space-y-2 mb-4">
        {children}
      </ul>
    ),
    number: ({ children }: TextChildrenProps) => (
      <ol className="list-decimal pl-5 text-[var(--text-secondary)] space-y-2 mb-4">
        {children}
      </ol>
    ),
  },
};

interface PortableTextRendererProps {
  value?: PortableTextValue;
}

export function PortableTextRenderer({ value }: PortableTextRendererProps) {
  if (!value?.length) return null;
  return <PortableText value={value} components={components} />;
}
