import { IArticle, IBlogFilters } from "@/components/Blog/types";
import { getArticlesUrl } from "@/components/Blog/utils/getArticlesUrl";

export const getArticles = async (
  filter: IBlogFilters
): Promise<IArticle[] | undefined> => {
  const url = getArticlesUrl(filter);

  try {
    const result = await fetch(url, {
      cache: "no-store",
    });

    const articlesData = await result.json();
    return articlesData.data;
  } catch (error) {
    return;
  }
};
