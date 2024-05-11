import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { ICategoriesCard } from "../types";

const CategoriesCard = ({ title, text, slug, imgSrc }: ICategoriesCard) => {
    return (
        <Link className={styles.card} href={`/categories/${slug}`} passHref>
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
            <h3 className={styles.name}>{title}</h3>
            <div className={styles.text}>{text}</div>
            <span className={styles.link}>Перейти</span>
        </Link>
    );
};
export default CategoriesCard;
