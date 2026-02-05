import type { PortableTextValue } from './portableText';

export interface SanityImageAsset {
  _id: string;
  url: string;
  metadata?: {
    lqip?: string;
    dimensions?: {
      width: number;
      height: number;
    };
  };
}

export interface SanityImage {
  asset?: SanityImageAsset;
  alt?: string;
  crop?: unknown;
  hotspot?: unknown;
}

export interface BlogAuthor {
  _id: string;
  name: string;
  role?: string;
  image?: SanityImage;
}

export interface BlogTaxonomy {
  _id: string;
  title: string;
  slug?: string;
}

export interface BlogPostListItem {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  mainImage?: SanityImage;
  author?: BlogAuthor;
  categories?: BlogTaxonomy[];
  tags?: BlogTaxonomy[];
}

export interface BlogPost extends BlogPostListItem {
  body?: PortableTextValue;
  seo?: {
    title?: string;
    description?: string;
    image?: SanityImage;
  };
}
