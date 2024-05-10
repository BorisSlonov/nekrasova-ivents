export interface ICategoriesCard {
  imgSrc: string;
  goods: string;
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
