import React from "react";
import { getProduct } from "@/actions/getProduct";
import ReviewsData from "@/components/Reviews";
import CategorySingle from "@/components/CategoriesList/CategorySingle";

interface Props {
    params: {
        id: number,
        slug: string
    }
}

const Product = async ({ params }: Props) => {
    const { slug } = params;
    const data: any = await getProduct(slug);
    const title = data[0]?.categories[0]?.title || "";
    return (
        <>
            <CategorySingle
                categoryData={data}
            />
        </>
    )
}

export default Product