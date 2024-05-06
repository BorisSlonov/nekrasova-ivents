'use client'
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import cn from "classnames";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IReview, IReviews } from "../types";
import ReviewsCard from "../ReviewsCard";
import styles from "./styles.module.css"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const ReviewsSlider = ({ dataSlider, domain }: IReviews) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true });
    return (
        <section className="section">
            <div ref={containerRef} className={cn('fadeInUp', { ['fadeInUp_active']: isInView })}>
                <div className="container">
                    <h2 className={cn('h2', { ['animated']: isInView })}>Отзывы</h2>
                    <Swiper
                        className={styles.slider}
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
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
                        {dataSlider.map((review: IReview, index: number) => (
                            <SwiperSlide key={index}>
                                <ReviewsCard dataSlider={review} imgSrc={domain + review.img.url} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSlider;