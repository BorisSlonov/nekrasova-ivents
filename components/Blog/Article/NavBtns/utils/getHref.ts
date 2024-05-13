import { IArticle, IBlogFilters } from "@/components/Blog/types";

export const getHref = (
  btnType: "prev" | "next",
  pageId: string, // Изменили тип на number
  articles: IArticle[],
  curFilter: IBlogFilters
) => {
  const curItemIndex = articles.findIndex((item) => item.slug === pageId.toString()); // Сравнение по slug

  const filter = curFilter ? `?filter=${curFilter}` : "";

  if (btnType === "next") {
    const nextArticle = articles[curItemIndex + 1];
    if (nextArticle) {
      return `${nextArticle.slug}${filter}`; // Используем slug
    } else {
      return `${pageId}${filter}`;
    }
  }

  if (btnType === "prev") {
    const prevArticle = articles[curItemIndex - 1];
    if (prevArticle) {
      return `${prevArticle.slug}${filter}`; // Используем slug
    } else {
      return `${pageId}${filter}`;
    }
  }

  return `${pageId}${filter}`;
};
