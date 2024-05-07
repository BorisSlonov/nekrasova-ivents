import React from "react";
import Image from "next/image";
import styles from "./styles.module.css"
import { IReview } from "../types";


const ReviewsCard = ({ name, text, imgSrc }: IReview) => {


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