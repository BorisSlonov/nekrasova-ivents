'use client'

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import cn from "classnames";
import { ICategoriesCard, ICategories } from "../types";
import CategoriesCard from "../CategoriesCard";
import styles from "./styles.module.css"


const CategoriesWrapper = ({ dataCategories, domain }: ICategories) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true });
    return (
        <section className="section">
            <div ref={containerRef}>
                <div className="container">
                    <h2 className={cn('h2', { ['animated']: isInView })}>Категории</h2>
                    <div className={styles.body}>
                        {dataCategories && dataCategories.map((item: ICategoriesCard, index: number) => (
                            <CategoriesCard
                                key={index}
                                title={item.title}
                                text={item.text}
                                slug={item.slug}
                                imgSrc={domain + item.catalogCard.url}
                                catalogCard={{
                                    url: item.catalogCard.url
                                }} goods={[]} img={[]} id={0} price={""} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default CategoriesWrapper;