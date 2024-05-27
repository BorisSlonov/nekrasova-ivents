import React from "react";
import { getProduct } from "@/actions/getProduct";
import PageProduct from "@/components/PageProduct";

interface Props {
    params: {
        id: number,
        slug: string
    }
}

const Product = async ({ params }: Props) => {
    const { slug } = params;
    const data: any = await getProduct(slug);
    return (
        <>
            <PageProduct
                productData={data}
            />
        </>
    )
}

export default Product