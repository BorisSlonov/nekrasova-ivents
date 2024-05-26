import { ICategoriesCard } from "@/components/CategoriesList/types";

export const getProduct = async (slug: string): Promise<ICategoriesCard | undefined> => {
    try {
        const result = await fetch(`${process.env.API_URL}goods/?populate=*&filters[slug]=${slug}`, {
            cache: "no-store",
        });


        const category = await result.json();

        return category.data;
    } catch (error) {
        return;
    }
};