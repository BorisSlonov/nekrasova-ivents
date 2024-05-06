export interface IReview {
  id: number;
  img: {
    url: string;
  };
  name: string;
  text: string;
}

export interface IReviews {
  dataSlider: IReview[];
  domain: string;
  imgSrc?: string
}
