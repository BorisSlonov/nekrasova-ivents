export interface ICategoriesCard {
  imgSrc: string;
  subcats: {
    name: any;
    title: string
  }[];
  img: {
    formats: any;
    id: number;
    url: string;
  }[];
  id: number;
  title: string;
  text?: string;
  subtitle?: string;
  price: number;
  slug: string;
  catalogCard: {
    url: string;
  };
}

export interface ISubcategory {
  id: number;
  name: string;
};

export interface ICategories {
  dataCategories: ICategoriesCard[];
  domain: string;
}