export interface ICategoriesCard {
  goods: string[];
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