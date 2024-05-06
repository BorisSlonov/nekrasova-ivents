'use client'
import React, { useRef } from "react";
import Image from 'next/image';
import { useInView } from "framer-motion";
import cn from "classnames";
import LogoIcon from "../ui/icons/LogoIcon";
import styles from "./styles.module.css"


const Promo = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true });
    return (
        <section className="section section_promo">
            <LogoIcon className={styles.logo} />
            <div className="promo">
                <div className="container">
                    <div className="promo__body">
                        <p className="promo__p">
                            Мы создаем не только воздушное настроение, но декор для важных событий. Наша работа
                            сочетает в себе материалы высочайшего класса, ручную работу и любовь создателей.
                            <a href="#" className="promo__btn btn btn_fill">
                                Оставить заявку
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Promo;