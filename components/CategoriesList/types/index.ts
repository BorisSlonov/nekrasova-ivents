export interface ICategoriesCard {
  imgSrc: string;
  goods: {
    title: string
  }[];
  img: {
    id: number;
    url: string;
  }[];
  id: number;
  title?: string;
  text?: string;
  subtitle?: string;
  price: string;
  slug: string;
  catalogCard: {
    url: string;
  };
}

export interface ICategories {
  dataCategories: ICategoriesCard[];
  domain: string;
}