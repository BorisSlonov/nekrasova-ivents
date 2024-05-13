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
  url: any;
  id: number;
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
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
}

export interface IArticle {
  id: number;
  title: string;
  date: string;
  slug: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  img: {
    url: any;
    data: IBlogImage[];
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
