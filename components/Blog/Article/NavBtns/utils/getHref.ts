import { IArticle, IBlogFilters } from "@/components/Blog/types";

export const getHref = (
  btnType: "prev" | "next",
  pageId: string,
  articles: IArticle[],
  curFilter: IBlogFilters
) => {
  const numPageId = Number(pageId);
  const curItemIndex = articles.findIndex((item) => item.id === numPageId);
  const filter = curFilter ? `?filter=${curFilter}` : "";

  if (btnType === "next") {
    const nextArticle = articles[curItemIndex + 1];
    if (nextArticle) {
      return `${nextArticle.id}${filter}`;
    } else {
      return `${pageId}${filter}`;
    }
  }

  if (btnType === "prev") {
    const prevArticle = articles[curItemIndex - 1];
    if (prevArticle) {
      return `${prevArticle.id}${filter}`;
    } else {
      return `${pageId}${filter}`;
    }
  }

  return `${pageId}${filter}`;
};
