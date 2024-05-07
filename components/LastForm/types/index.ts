export interface ICategoriesCardFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null | string;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface ICategoriesCard {
  id: number;
  key: number,
  name: string;
  alternativeText: null | string;
  caption: null | string;
  width: number;
  height: number;
  catalogCard: {
    url: string
  },
  formats: {
    large: ICategoriesCardFormat;
    small: ICategoriesCardFormat;
    medium: ICategoriesCardFormat;
    thumbnail: ICategoriesCardFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null | string;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
}

export interface ICategories {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  text: string;
  slug: string;
  CategoriesCard: ICategoriesCard;
}
