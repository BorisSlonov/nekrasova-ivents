export interface IReview {
  title: string;
  slug: string;
  id: number;
  imgSrc: string,
  name: string;
  text: string;
  img: {
    url: string;
  };

}

export interface IReviewsSlider {
  dataSlider: IReview[];
  domain: string;
  imgSrc?: string;
}