interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

interface IBlogImage {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      large?: ImageFormat;
      small?: ImageFormat;
      medium?: ImageFormat;
      thumbnail?: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    createdAt: string;
    updatedAt: string;
  };
}

export interface IArticle {
  id: number;
  attributes: {
    title: string;
    date: string;
    type: string;
    slug: string;
    text: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    img: {
      data: IBlogImage[];
    };
  };
}

export interface IArticleData {
  data: IArticle[];
}

export type IBlogFilters =
  | "Events"
  | "News"
  | "Explainers"
  | "Articles"
  | undefined;
