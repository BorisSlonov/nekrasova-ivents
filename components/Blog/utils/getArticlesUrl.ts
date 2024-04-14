import { IBlogFilters } from "../types";

export const getArticlesUrl = (filter: IBlogFilters) => {
  if (filter === undefined) {
    return `${process.env.API_URL}posts?populate=*&sort[0]=date:desc`;
  }

  return `${process.env.API_URL}posts?populate=*&filters[type][$eq]=${filter}&sort[0]=date:desc`;
};
