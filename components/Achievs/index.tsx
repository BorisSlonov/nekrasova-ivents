'use client'
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import cn from "classnames";

const Achievs = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true });
    return (
        <div ref={containerRef}>
            <section className="section section_advantages">
                <div className={cn('advantages fadeInUp', { ['fadeInUp_active']: isInView })}>
                    <div className="container">
                        <div className="h2Wrapper">
                            <h2 className={cn('h2', { ['animated']: isInView })}>Наши преимущества</h2>
                            <p className={cn('h2__subtitle', { ['animated']: isInView })}>
                                Каждый день мы создаем и экспериментируем, чтобы сделать наших клиентов счастливыми
                            </p>
                        </div>
                        <div className="advantages__body">
                            <div className="advantages__item">
                                <h3 className="advantages__h3">
                                    Работаем по договору
                                </h3>
                                <p className="advantages__p">
                                    Гарантия выполнения работы
                                </p>
                            </div>
                            <div className="advantages__item">
                                <h3 className="advantages__h3">
                                    Прорисовываем эскиз
                                </h3>
                                <p className="advantages__p">
                                    Для визуального представления проекта
                                </p>
                            </div>
                            <div className="advantages__item">
                                <h3 className="advantages__h3">
                                    Работаем более 3 лет
                                </h3>
                                <p className="advantages__p">
                                    Есть опыт и знание локаций
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Achievs;