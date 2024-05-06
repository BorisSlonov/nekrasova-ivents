import React from "react";
import { getReviews } from "@/actions/getReviews";
import ReviewsSlider from "./ReviewsSlider";

const Reviews = async () => {

    const data = await getReviews();
    const domain = process.env.CMS_URL || '';
    const dataSlider = { dataSlider: data, domain: domain };

    return (
        <ReviewsSlider {...dataSlider} />
    );
}

export default Reviews;