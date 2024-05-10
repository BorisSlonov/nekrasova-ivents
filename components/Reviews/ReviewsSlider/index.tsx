'use client'

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import cn from "classnames";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IReview, IReviewsSlider } from "../types";
import ReviewsCard from "../ReviewsCard";
import styles from "./styles.module.css"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const ReviewsSlider = ({ dataSlider, domain }: IReviewsSlider) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.5 });
    return (
        <section ref={containerRef} className="section">
            <div>
                <div className="container">
                    <h2 className={cn('h2', { ['animated']: isInView })}>Отзывы</h2>
                    <Swiper
                        className={styles.slider}
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoHeight={true}
                        navigation
                        pagination
                        breakpoints={{
                            900: {
                                slidesPerView: 3
                            },
                            550: {
                                slidesPerView: 2
                            }
                        }}
                    >
                        {dataSlider && dataSlider.map((item: IReview, index: number) => (
                            <SwiperSlide key={index}>
                                <ReviewsCard
                                    key={index}
                                    name={item.name}
                                    text={item.text}
                                    imgSrc={domain + item.img.url}
                                    title={""}
                                    slug={""}
                                    id={0}
                                    img={{
                                        url: ""
                                    }} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSlider;