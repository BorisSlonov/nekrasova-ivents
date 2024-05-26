'use client'
import React, { useRef, useState } from "react";
import cn from "classnames";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { ICategoriesCard } from "../types";
import { useInView } from "framer-motion";
import styles from "./styles.module.css";
import useCartStore from "@/store/cartStore";

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

  // Get unique subcategory titles
  const subcategoryTitles = Array.from(new Set(categoryData.flatMap(category => category.subcategories.map(sub => sub.name))));

  const filteredCategoryData = selectedSubcategory
    ? categoryData.filter(category => category.subcategories.some(sub => sub.name === selectedSubcategory))
    : categoryData;

  return (
    <div className="container" ref={containerRef}>
      <h1 className={cn('fadeInUp h1NotMain', { ['fadeInUp_active']: isInView })}>
        {selectedSubcategory || 'Все категории'}
      </h1>

      <div className={styles.filter}>
        <label htmlFor="subcategoryFilter">Фильтр по подкатегории:</label>
        <select
          id="subcategoryFilter"
          value={selectedSubcategory}
          onChange={(e) => setSelectedSubcategory(e.target.value)}
        >
          <option value="">Все подкатегории</option>
          {subcategoryTitles.map((title, index) => (
            <option key={index} value={title}>{title}</option>
          ))}
        </select>
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
              src={'https://admin.decornekrasova.ru' + (category.img?.[0]?.formats?.thumbnail?.url || '')}
              sizes="100vw"
              priority
            />
            <h3 className={styles.title}>{category.title}</h3>
            <ReactMarkdown className={styles.text}>{category.text}</ReactMarkdown>
            <p className={styles.price}>{category.price}</p>
            <button onClick={() => addToCart({ id: category.id, title: category.title, price: category.price, img: category.img?.[0]?.formats?.thumbnail?.url })}>
              В корзину
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySingle;
