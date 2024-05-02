import { IArticle } from "@/components/Blog/types";

export const getArticle = async (id: string): Promise<IArticle | undefined> => {
  try {
    const result = await fetch(`${process.env.API_URL}posts/${id}?populate=*`, {
      next: { revalidate: 60 },
    });

    const article = await result.json();

    return article.data;
  } catch (error) {
    return;
  }
};
