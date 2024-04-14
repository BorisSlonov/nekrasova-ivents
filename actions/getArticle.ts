import { IArticle } from "@/components/Blog/types";

export const getArticle = async (id: string): Promise<IArticle | undefined> => {
  try {
    const result = await fetch(`${process.env.API_URL}posts/${id}?populate=*`, {
      cache: "no-store",
    });

    const article = await result.json();

    return article.data;
  } catch (error) {
    return;
  }
};
