import groq from 'groq';
import { defineQuery } from 'groq';

export const POSTS_QUERY = defineQuery(groq`
  *[_type == "post" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()]
    | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      mainImage {
        asset->{
          _id,
          url,
          metadata { lqip, dimensions }
        },
        alt,
        crop,
        hotspot
      },
      author->{
        _id,
        name,
        role,
        image {
          asset->{
            _id,
            url,
            metadata { lqip, dimensions }
          },
          alt,
          crop,
          hotspot
        }
      },
      categories[]->{ _id, title, "slug": slug.current },
      tags[]->{ _id, title, "slug": slug.current }
    }
`);

export const POST_QUERY = defineQuery(groq`
  *[_type == "post" && slug.current == $slug && defined(publishedAt) && publishedAt <= now()][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    body[]{
      ...,
      _type == "image" => {
        ...,
        asset->{
          _id,
          url,
          metadata { lqip, dimensions }
        },
        alt,
        crop,
        hotspot
      }
    },
    mainImage {
      asset->{
        _id,
        url,
        metadata { lqip, dimensions }
      },
      alt,
      crop,
      hotspot
    },
    author->{
      _id,
      name,
      role,
      image {
        asset->{
          _id,
          url,
          metadata { lqip, dimensions }
        },
        alt,
        crop,
        hotspot
      }
    },
    categories[]->{ _id, title, "slug": slug.current },
    tags[]->{ _id, title, "slug": slug.current },
    seo {
      title,
      description,
      image {
        asset->{
          _id,
          url,
          metadata { lqip, dimensions }
        },
        alt,
        crop,
        hotspot
      }
    }
  }
`);
