import { IArticle } from "@/components/Blog/types";

export const getArticle = async (slug: string): Promise<IArticle | undefined> => {
  try {
    const result = await fetch(`${process.env.API_URL}blogs?filters[slug][$eq]=${slug}&populate=*`, {
      cache: "no-store",
    });

    const article = await result.json();

    return article.data;
  } catch (error) {
    console.error('Error fetching article:', error);
    return undefined;
  }
};
