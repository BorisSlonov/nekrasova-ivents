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