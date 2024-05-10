import { ICategoriesCard } from "@/components/CategoriesList/types";

export const getCategory = async (slug: string): Promise<ICategoriesCard | undefined> => {
  try {
    const result = await fetch(`${process.env.API_URL}goods/?populate=*`, {
      next: { revalidate: 60 },
    });

    const category = await result.json();

    return category.data;
  } catch (error) {
    return;
  }
};

// ссылка чтобы получить все товары внути категории
// https://admin.decornekrasova.ru/api/categories/?slug=kapriz?populate=*
