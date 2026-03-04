import { useCallback } from 'react';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import type { SanityImage } from '~/types';
import type { PortableTextValue } from '~/types/portableText';
import { urlFor } from '~/utils/sanityImage';
import { sanitizeUrl } from '~/utils/sanitizeUrl';

/** Ref callback that removes blur-up when the image is already cached. */
function blurUpRef(img: HTMLImageElement | null) {
  if (img?.complete) img.classList.remove('blur-up');
}

type TextChildrenProps = { children?: React.ReactNode };
type LinkValue = { href?: string; openInNewTab?: boolean };
type LinkProps = { children?: React.ReactNode; value?: LinkValue };
type ImageProps = { value?: SanityImage };
type CodeProps = { value?: { code?: string; language?: string; filename?: string } };

/** Generate a URL-safe slug from heading text. Must match extractHeadings() in TableOfContents. */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9àâäéèêëïîôùûüÿçœæ\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/** Extract raw text from React children (works with Portable Text spans). */
function childrenToText(children: React.ReactNode): string {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(childrenToText).join('');
  if (children && typeof children === 'object' && 'props' in children) {
    return childrenToText((children as React.ReactElement<{ children?: React.ReactNode }>).props.children);
  }
  return '';
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children }: TextChildrenProps) => {
      const text = childrenToText(children);
      const id = slugify(text);
      return (
        <h2 id={id} className="text-2xl font-semibold text-[var(--text-primary)] mt-12 mb-4 scroll-mt-24">
          {children}
        </h2>
      );
    },
    h3: ({ children }: TextChildrenProps) => {
      const text = childrenToText(children);
      const id = slugify(text);
      return (
        <h3 id={id} className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3 scroll-mt-24">
          {children}
        </h3>
      );
    },
    blockquote: ({ children }: TextChildrenProps) => (
      <blockquote className="border-l-4 border-[#2ca3bd] bg-[#2ca3bd]/5 rounded-r-xl pl-5 pr-4 py-4 italic text-[var(--text-secondary)] my-6">
        {children}
      </blockquote>
    ),
    normal: ({ children }: TextChildrenProps) => (
      <p className="text-base leading-relaxed text-[var(--text-secondary)] mb-5">
        {children}
      </p>
    ),
  },
  marks: {
    link: ({ children, value }: LinkProps) => {
      const href = sanitizeUrl(value?.href);

      if (!href) {
        return <span>{children}</span>;
      }

      const isExternal =
        !href.startsWith('/') &&
        !href.startsWith('#') &&
        !href.startsWith('mailto:') &&
        !href.startsWith('tel:');
      const rel = isExternal ? 'noopener noreferrer' : undefined;
      const target = value?.openInNewTab ? '_blank' : undefined;

      return (
        <a
          href={href}
          rel={rel}
          target={target}
          className="text-[var(--brand-text)] underline decoration-[var(--brand-text)]/30 underline-offset-2 hover:decoration-[var(--brand-text)] transition-colors"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }: TextChildrenProps) => (
      <strong className="font-semibold text-[var(--text-primary)]">{children}</strong>
    ),
    code: ({ children }: TextChildrenProps) => (
      <code className="rounded-md bg-[var(--surface-elevated)] px-1.5 py-0.5 text-sm font-mono text-[var(--brand-text)]">
        {children}
      </code>
    ),
  },
  types: {
    image: ({ value }: ImageProps) => {
      const image = value;
      const imageUrl = image?.asset?.url
        ? urlFor(image).width(1200).height(700).fit('crop').url()
        : null;
      if (!imageUrl) return null;
      const lqip = image?.asset?.metadata?.lqip;
      return (
        <figure className="my-8">
          <img
            ref={lqip ? blurUpRef : undefined}
            src={imageUrl}
            alt={image?.alt || ''}
            className={`w-full rounded-2xl border border-[var(--border-primary)] ${lqip ? 'blur-up' : ''}`}
            loading="lazy"
            style={lqip ? { backgroundImage: `url(${lqip})`, backgroundSize: 'cover' } : undefined}
            onLoad={(e) => e.currentTarget.classList.remove('blur-up')}
          />
          {image?.alt && (
            <figcaption className="mt-3 text-sm text-center text-[var(--text-muted)]">
              {image.alt}
            </figcaption>
          )}
        </figure>
      );
    },
    code: ({ value }: CodeProps) => {
      if (!value?.code) return null;
      return (
        <div className="my-6">
          {value.filename && (
            <div className="rounded-t-xl border border-b-0 border-[var(--border-primary)] bg-[var(--surface-elevated)] px-4 py-2 text-xs font-mono text-[var(--text-muted)]">
              {value.filename}
            </div>
          )}
          <pre className={`blog-code-block ${value.filename ? 'rounded-t-none' : ''}`}>
            <code>{value.code}</code>
          </pre>
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: TextChildrenProps) => (
      <ul className="list-disc pl-5 text-[var(--text-secondary)] space-y-2 mb-5">
        {children}
      </ul>
    ),
    number: ({ children }: TextChildrenProps) => (
      <ol className="list-decimal pl-5 text-[var(--text-secondary)] space-y-2 mb-5">
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
