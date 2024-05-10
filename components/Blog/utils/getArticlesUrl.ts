import { IBlogFilters } from "../types";

export const getArticlesUrl = (filter: IBlogFilters) => {
  return `${process.env.API_URL}posts?populate=*&sort[0]=date:desc`;
};
