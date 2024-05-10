export interface ICategoryCard {
  img: {
    id: number;
    url: string;
  }[];
  id: number;
  title: string;
  text?: string;
  subtitle?: string;
  price: string;
  slug: string;
  catalogCard: {
    url: string;
  };
}

export interface ICategoriesCard {
  key: number;
  imgSrc: string;
  title: string;
  text?: string;
  slug: string;
  catalogCard: {
    url: string;
  };
}

export interface ICategories {
  domain: string;
  dataCategories: ICategoryCard[];
}
