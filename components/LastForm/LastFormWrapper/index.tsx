'use client'
import Image from "next/image";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import cn from "classnames";
import { ICategoriesCard } from "../types";
import styles from "./styles.module.css"
import Form from "@/components/Form";


const LastFormWrapper = () => {
    return (
        <section id="form" className="section section_last">
            <div className="contactForm">
                <div className="container">
                    <div className="contactForm__body">
                        <div className="contactForm__item">
                            <Image
                                width={100}
                                height={200}
                                src={"/logo_light.svg"}
                                alt={"лого"}
                            />
                            <Form cart={[]} />
                        </div>
                        <div className="contactForm__item">
                            <div className="contacts">
                                <div className="contacts__item">
                                    <p>Маргарита</p>
                                    <a href="tel:+7(952)184-90-96">
                                        +7(952)184-90-96
                                    </a>
                                </div>
                                <div className="contacts__item">
                                    Адрес: г. Томск ул. Иркутский тракт 51/5 (цоколь)
                                </div>
                                <div className="contacts__item">
                                    <a href="mailto:yes.wedding.tomsk@yandex.ru">yes.wedding.tomsk@yandex.ru</a>
                                </div>
                                <div className="contacts__item">
                                    <ul role="list" className="t-sociallinks__wrapper" aria-label="Social media links">
                                        <li className="t-sociallinks__item t-sociallinks__item_whatsapp">
                                            <a href="https://wa.me/79521849096" target="_blank" rel="nofollow noopener" aria-label="whatsapp" style={{ width: '30px', height: '30px' }}>
                                                <svg className="t-sociallinks__svg" role="presentation" width="30px" height="30px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM69.7626 28.9928C64.6172 23.841 57.7739 21.0027 50.4832 21C35.4616 21 23.2346 33.2252 23.2292 48.2522C23.2274 53.0557 24.4823 57.7446 26.8668 61.8769L23 76L37.4477 72.2105C41.4282 74.3822 45.9107 75.5262 50.4714 75.528H50.4823C65.5029 75.528 77.7299 63.301 77.7363 48.2749C77.7408 40.9915 74.9089 34.1446 69.7626 28.9928ZM62.9086 53.9588C62.2274 53.6178 58.8799 51.9708 58.2551 51.7435C57.6313 51.5161 57.1766 51.4024 56.7228 52.0845C56.269 52.7666 54.964 54.2998 54.5666 54.7545C54.1692 55.2092 53.7718 55.2656 53.0915 54.9246C52.9802 54.8688 52.8283 54.803 52.6409 54.7217C51.6819 54.3057 49.7905 53.4855 47.6151 51.5443C45.5907 49.7382 44.2239 47.5084 43.8265 46.8272C43.4291 46.1452 43.7837 45.7769 44.1248 45.4376C44.3292 45.2338 44.564 44.9478 44.7987 44.662C44.9157 44.5194 45.0328 44.3768 45.146 44.2445C45.4345 43.9075 45.56 43.6516 45.7302 43.3049C45.7607 43.2427 45.7926 43.1776 45.8272 43.1087C46.0545 42.654 45.9409 42.2565 45.7708 41.9155C45.6572 41.6877 45.0118 40.1167 44.4265 38.6923C44.1355 37.984 43.8594 37.3119 43.671 36.8592C43.1828 35.687 42.6883 35.69 42.2913 35.6924C42.2386 35.6928 42.1876 35.6931 42.1386 35.6906C41.7421 35.6706 41.2874 35.667 40.8336 35.667C40.3798 35.667 39.6423 35.837 39.0175 36.5191C38.9773 36.5631 38.9323 36.6111 38.8834 36.6633C38.1738 37.4209 36.634 39.0648 36.634 42.2002C36.634 45.544 39.062 48.7748 39.4124 49.2411L39.415 49.2444C39.4371 49.274 39.4767 49.3309 39.5333 49.4121C40.3462 50.5782 44.6615 56.7691 51.0481 59.5271C52.6732 60.2291 53.9409 60.6475 54.9303 60.9612C56.5618 61.4796 58.046 61.4068 59.22 61.2313C60.5286 61.0358 63.2487 59.5844 63.8161 57.9938C64.3836 56.4033 64.3836 55.0392 64.2136 54.7554C64.0764 54.5258 63.7545 54.3701 63.2776 54.1395C63.1633 54.0843 63.0401 54.0247 62.9086 53.9588Z" fill="#3f5842"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="t-sociallinks__item t-sociallinks__item_instagram">
                                            <a href="https://www.instagram.com/yes.weding.tomsk/" target="_blank" rel="nofollow noopener" aria-label="Воздушные шары инстаграм" title="Воздушные шары инстаграм" style={{ width: '30px', height: '30px' }}>
                                                <svg className="t-sociallinks__svg" role="presentation" width="30px" height="30px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM25 39.3918C25 31.4558 31.4566 25 39.3918 25H60.6082C68.5442 25 75 31.4566 75 39.3918V60.8028C75 68.738 68.5442 75.1946 60.6082 75.1946H39.3918C31.4558 75.1946 25 68.738 25 60.8028V39.3918ZM36.9883 50.0054C36.9883 42.8847 42.8438 37.0922 50.0397 37.0922C57.2356 37.0922 63.0911 42.8847 63.0911 50.0054C63.0911 57.1252 57.2356 62.9177 50.0397 62.9177C42.843 62.9177 36.9883 57.1252 36.9883 50.0054ZM41.7422 50.0054C41.7422 54.5033 45.4641 58.1638 50.0397 58.1638C54.6153 58.1638 58.3372 54.5041 58.3372 50.0054C58.3372 45.5066 54.6145 41.8469 50.0397 41.8469C45.4641 41.8469 41.7422 45.5066 41.7422 50.0054ZM63.3248 39.6355C65.0208 39.6355 66.3956 38.2606 66.3956 36.5646C66.3956 34.8687 65.0208 33.4938 63.3248 33.4938C61.6288 33.4938 60.2539 34.8687 60.2539 36.5646C60.2539 38.2606 61.6288 39.6355 63.3248 39.6355Z" fill="#3f5842"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="t-sociallinks__item t-sociallinks__item_telegram">
                                            <a href="https://t.me/yesweddingtomsk" target="_blank" rel="nofollow noopener" aria-label="telegram" style={{ width: '30px', height: '30px' }}>
                                                <svg className="t-sociallinks__svg" role="presentation" width="30px" height="30px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z" fill="#3f5842"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="t-sociallinks__item t-sociallinks__item_telegram">
                                            <a href="https://vk.com/decornekrasova" target="_blank" rel="nofollow noopener" aria-label="telegram" style={{ width: '30px', height: '30px' }}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="32"
                                                    height="32"
                                                    fill="#3f5842"
                                                    version="1.1"
                                                    viewBox="0 0 97.75 97.75"
                                                    xmlSpace="preserve"
                                                >
                                                    <path d="M48.875 0C21.883 0 0 21.882 0 48.875S21.883 97.75 48.875 97.75 97.75 75.868 97.75 48.875 75.867 0 48.875 0zm24.792 54.161c2.278 2.225 4.688 4.319 6.733 6.774.906 1.086 1.76 2.209 2.41 3.472.928 1.801.09 3.776-1.522 3.883l-10.013-.002c-2.586.214-4.644-.829-6.379-2.597-1.385-1.409-2.67-2.914-4.004-4.371-.545-.598-1.119-1.161-1.803-1.604-1.365-.888-2.551-.616-3.333.81-.797 1.451-.979 3.059-1.055 4.674-.109 2.361-.821 2.978-3.19 3.089-5.062.237-9.865-.531-14.329-3.083-3.938-2.251-6.986-5.428-9.642-9.025-5.172-7.012-9.133-14.708-12.692-22.625-.801-1.783-.215-2.737 1.752-2.774 3.268-.063 6.536-.055 9.804-.003 1.33.021 2.21.782 2.721 2.037 1.766 4.345 3.931 8.479 6.644 12.313.723 1.021 1.461 2.039 2.512 2.76 1.16.796 2.044.533 2.591-.762.35-.823.501-1.703.577-2.585.26-3.021.291-6.041-.159-9.05-.28-1.883-1.339-3.099-3.216-3.455-.956-.181-.816-.535-.351-1.081.807-.944 1.563-1.528 3.074-1.528l11.313-.002c1.783.35 2.183 1.15 2.425 2.946l.01 12.572c-.021.695.349 2.755 1.597 3.21 1 .33 1.66-.472 2.258-1.105 2.713-2.879 4.646-6.277 6.377-9.794.764-1.551 1.423-3.156 2.063-4.764.476-1.189 1.216-1.774 2.558-1.754l10.894.013c.321 0 .647.003.965.058 1.836.314 2.339 1.104 1.771 2.895-.894 2.814-2.631 5.158-4.329 7.508-1.82 2.516-3.761 4.944-5.563 7.471-1.656 2.31-1.525 3.473.531 5.479z"></path>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LastFormWrapper;
