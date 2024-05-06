interface IReview {
  id: number;
  img: {
    url: string;
  };
  name: string;
  text: string;
}

interface IReviews {
  dataSlider: IReview[];
  domain: string;
}
