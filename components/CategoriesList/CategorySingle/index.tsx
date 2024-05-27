// CategorySingle.tsx
'use client'
import React, { useRef, useState } from "react";
import cn from "classnames";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { ICategoriesCard } from "../types";
import { useInView } from "framer-motion";
import styles from "./styles.module.css";
import useCartStore from "@/store/cartStore";
import Link from "next/link";

interface Props {
  categoryData: ICategoriesCard[];
}

const CategorySingle = ({ categoryData }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const addToCart = useCartStore((state) => state.addToCart);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');

  if (!categoryData || categoryData.length === 0) {
    return null;
  }

  const subcategoryTitles = Array.from(new Set(categoryData.flatMap(category => category.subcategories.map(sub => sub.name))));

  const filteredCategoryData = selectedSubcategory
    ? categoryData.filter(category => category.subcategories.some(sub => sub.name === selectedSubcategory))
    : categoryData;

  return (
    <div className="container" ref={containerRef}>
      <h1 className={cn('fadeInUp h1NotMain', { ['fadeInUp_active']: isInView })}>
        {selectedSubcategory || 'Все подкатегории'}
      </h1>

      <div className={styles.filter}>
        <label htmlFor="subcategoryFilter">Фильтр по подкатегории</label>
        <div className={styles.subcatsbtnwrapper}>
          <button className={styles.subcatsbtn} onClick={() => setSelectedSubcategory('')} key="all">
            Все подкатегории
          </button>
          {subcategoryTitles.map((title, index) => (
            <button className={styles.subcatsbtn} onClick={(e) => setSelectedSubcategory((e.target as HTMLButtonElement).value)} key={index} value={title}>{title}</button>
          ))}
        </div>
      </div>

      <div className={styles.body}>
        {filteredCategoryData.map((category, index) => (
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
            <div className={styles.textWrapper}>
              <ReactMarkdown className={styles.text}>{category.text}</ReactMarkdown>
            </div>
            <p className={styles.price}>{category.price}</p>
            <Link className={styles.prodLink} href={"/product/" + category.slug}>
              Подробнее
            </Link>
            <button
              className={styles.addToCartBtn}
              onClick={() => addToCart({ id: category.id, title: category.title, price: category.price, img: category.img?.[0]?.url })}>
              В корзину
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySingle;
