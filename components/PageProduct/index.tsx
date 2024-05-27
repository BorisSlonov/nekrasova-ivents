'use client'
import React, { useRef } from "react";
import cn from "classnames";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { useInView } from "framer-motion";
import styles from "./styles.module.css";
import useCartStore from "@/store/cartStore";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


interface Props {
    productData: {
        imgSrc: string;
        subcategories: {
            name: any;
            title: string;
        }[];
        img: {
            formats: any;
            id: number;
            url: string;
        }[];
        id: number;
        title: string;
        text?: string;
        subtitle?: string;
        price: number;
        slug: string;
        catalogCard: {
            url: string;
        };
    }[];
}

const PageProduct = ({ productData }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true });
    const addToCart = useCartStore((state) => state.addToCart);

    if (!productData || productData.length === 0) {
        return null;
    }

    const product = productData[0];
    const images = product.img || [];

    return (
        <div className="container" ref={containerRef}>
            <div className={styles.body}>
                <h1 className={cn('fadeInUp h1NotMain', { ['fadeInUp_active']: isInView })}>
                    {product.title}
                </h1>
                <div className={styles.card}>
                    <Swiper
                        className={styles.slider}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={50}
                        slidesPerView={3}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    className={styles.img}
                                    quality={100}
                                    alt={`Услуга ${index + 1}`}
                                    width={300}
                                    height={380}
                                    src={`https://admin.decornekrasova.ru${image.formats?.small?.url || ''}`}
                                    sizes="100vw"
                                    priority
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <h3 className={styles.title}>{product.title}</h3>
                    <ReactMarkdown className={styles.text}>{product.text}</ReactMarkdown>
                    <p className={styles.price}>{product.price}</p>
                    <button
                        className={styles.addToCartBtn}
                        onClick={() =>
                            addToCart({
                                id: product.id,
                                title: product.title,
                                price: product.price,
                                img: images[0]?.formats?.small?.url || '',
                            })
                        }
                    >
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PageProduct;
