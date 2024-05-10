'use client'
import React, { useRef } from "react";
import cn from "classnames";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { ICategoryCard } from "../types";
import { getImageSrc } from "@/utils/getImageSrc";
import { useInView } from "framer-motion";
import styles from "./styles.module.css"

interface Props {
  categoryData: ICategoryCard[];
}

const CategorySingle = ({ categoryData }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  return (
    <div ref={containerRef}>
      <div className="container">
        <h1 className={cn('fadeInUp h1NotMain', { ['fadeInUp_active']: isInView })}>{categoryData[0].goods[0].title}</h1>
        <div className={styles.body}>
          {
            categoryData.map((category, index) => (
              <div key={index} className={styles.card}>
                <div key={category.id}>
                  <Image
                    className={styles.img}
                    quality={100}
                    alt={"Услуга"}
                    width={300}
                    height={380}
                    src={'https://admin.decornekrasova.ru' + category.img[0].url}
                    sizes="100vw"
                    priority
                  />
                  <h3 className={styles.title}>{category.title}</h3>
                  <ReactMarkdown className={styles.text}>{category.text}</ReactMarkdown>
                  <p className={styles.price}>{category.price}</p>
                </div>
              </div>
            ))}
        </div>

      </div>
    </div>

  );
};

export default CategorySingle;
