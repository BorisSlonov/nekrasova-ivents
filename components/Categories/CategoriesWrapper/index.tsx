'use client'
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import cn from "classnames";
import { ICategoriesCard } from "../types";
import CategoriesCard from "../CategoriesCard";
import styles from "./styles.module.css"


const CategoriesWrapper = ({ dataCategories, domain }: ICategoriesCard) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true });
    return (
        <section className="section">
            <div ref={containerRef} className={cn('fadeInUp', { ['fadeInUp_active']: isInView })}>
                <div className="container">
                    <h2 className={cn('h2', { ['animated']: isInView })}>Категории</h2>
                    <div className={styles.body}>
                        {dataCategories.map((review: ICategoriesCard, index: number) => (
                            <CategoriesCard key={index} className={styles.item} dataCategories={review} imgSrc={domain + review.catalogCard.url} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoriesWrapper;