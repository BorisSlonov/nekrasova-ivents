export interface ICategoriesCard {
  key: number;
  imgSrc: string;
  title: string;
  text?: string;
  slug: string;
  catalogCard: {
    url: string;
  }
}

export interface ICategories {
  CategoriesCard: ICategoriesCard;
}