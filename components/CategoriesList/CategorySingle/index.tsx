// src/components/CategorySingle.tsx
'use client'
import React, { useRef } from "react";
import cn from "classnames";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { ICategoriesCard } from "../types";
import { useInView } from "framer-motion";
import styles from "./styles.module.css";
import Link from "next/link";
import useCartStore from "@/store/cartStore";

interface Props {
  categoryData: ICategoriesCard[];
}

const CategorySingle = ({ categoryData }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const addToCart = useCartStore((state) => state.addToCart);

  if (!categoryData || categoryData.length === 0) {
    return null;
  }
  const title = categoryData[0]?.subcategories[0]?.title || '';

  return (
    <div className="container" ref={containerRef}>
      <h1 className={cn('fadeInUp h1NotMain', { ['fadeInUp_active']: isInView })}>{title}</h1>
      <div className={styles.body}>
        {categoryData.map((category, index) => (
          <div key={index} className={styles.card}>
            <Image
              className={styles.img}
              quality={100}
              alt={"Услуга"}
              width={300}
              height={380}
              src={'https://admin.decornekrasova.ru' + (category.img?.[0]?.url || '')}
              sizes="100vw"
              priority
            />
            <h3 className={styles.title}>{category.title}</h3>
            <ReactMarkdown className={styles.text}>{category.text}</ReactMarkdown>
            <p className={styles.price}>{category.price}</p>
            <button onClick={() => addToCart({ id: category.id, title: category.title, price: category.price, img: category.img?.[0]?.url })}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySingle;
