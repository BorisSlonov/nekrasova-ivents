"use client";

import React, { useRef } from "react";
import styles from "./styles.module.css";
import Image from "next/image";


import StartedBtnBg from "./icons/startedBtnBg";
import StartedBtn from "@/components/ui/StartedBtn";
import SectionWrap from "@/components/ui/SectionWrap";

import cn from "classnames";
import { useInView } from "framer-motion";
import Link from "next/link";

const
  FirstScreen = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true });

    return (
      <SectionWrap className="section section_page1 section_index">
        <div ref={containerRef} className="container">
          <div className={styles.page1}>
            <div className={styles.page1__body}>
              <h1 className={cn('h1', { ['animated']: isInView })}>
                ОФОРМЛЕНИЕ ЧАСТНЫХ/КОРПОРАТИВНЫХ МЕРОПРИЯТИЙ,
                СВАДЕБНЫЙ ДЕКОР,
                НОВОГОДНЕЕ ОФОРМЛЕНИЕ,
                ФОТОЗОНЫ,
                ШАРЫ
              </h1>
              <p className={cn(styles.page1__p, { ['animated']: isInView })}>
                ВАШИ МЕЧТЫ - НАШЕ ВОПЛОЩЕНИЕ!
              </p>
              <div className={cn(styles.page1__btns, { ['animated']: isInView })}>
                <Link
                  className="btn btn_fill"
                  href={'/categories'}
                >
                  Категории
                </Link>
                <Link
                  className="btn btn_stroke"
                  href={'#form'}
                >
                  Связаться
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionWrap>
    );
  };

export default FirstScreen;
