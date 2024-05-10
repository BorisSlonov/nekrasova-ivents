import React from "react";
import { getCategories } from "@/actions/getCategories";
import CategoriesWrapper from "./CategoriesWrapper";

const CategoriesList = async () => {

    const data = await getCategories();
    const domain = process.env.CMS_URL || '';
    const dataCategories = { dataCategories: data, domain: domain };

    return (
        <CategoriesWrapper {...dataCategories} />
    );
}

export default CategoriesList;