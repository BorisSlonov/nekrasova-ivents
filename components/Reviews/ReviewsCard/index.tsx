import React from "react";
import Image from "next/image";
import styles from "./styles.module.css"
import { IReviews } from "../types";


const ReviewsCard = ({ dataSlider, imgSrc }: IReviews) => {

    const { name, text } = dataSlider


    return (
        <div className={styles.card}>
            <Image
                className={styles.img}
                quality={100}
                alt={"Отзыв аватар"}
                width={300}
                height={380}
                src={imgSrc}
                sizes="100vw"
                priority
            />
            <div className={styles.name}>{name}</div>
            <div className={styles.text}>{text}</div>
        </div>
    );
}

export default ReviewsCard;