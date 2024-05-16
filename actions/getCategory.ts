import { ICategoriesCard } from "@/components/CategoriesList/types";

export const getCategory = async (slug: string): Promise<ICategoriesCard | undefined> => {
  try {
    const result = await fetch(`${process.env.API_URL}goods/?populate=*&filters[categories][slug]=${slug}&pagination[page]=1&pagination[pageSize]=1000`, {
      cache: "no-store",
    });


    const category = await result.json();

    return category.data;
  } catch (error) {
    return;
  }
};