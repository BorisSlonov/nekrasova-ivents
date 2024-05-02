"use client";

import React, { useRef } from "react";
import styles from "./styles.module.css";
import Image from "next/image";


import StartedBtnBg from "./icons/startedBtnBg";
import StartedBtn from "@/components/ui/StartedBtn";
import SectionWrap from "@/components/ui/SectionWrap";

import cn from "classnames";
import { useInView } from "framer-motion";

const FirstScreen = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <SectionWrap className={styles.firstScreen}>
      <div ref={containerRef} className={styles.content}>
        <div className={styles.topContent}>
          <h1
            className={cn(styles.title, {
              [styles.pcAnimTitle]: isInView,
            })}
          >
            Crypto Payments for your{" "}
            <span className={styles.business}>Business</span>
          </h1>
          <Image
            width={400}
            height={400}
            sizes="100vw"
            className={cn(styles.image, {
              [styles.pcAnimImage]: isInView,
            })}
            src={"/mainPage/firstScreenCircles.png"}
            alt="crypto payment ecosystem"
            priority
          />
        </div>
        <div
          className={cn(styles.bottomContent, {
            [styles.pcAnimBottomContent]: isInView,
          })}
        >
          <div className={styles.startedContent}>
            <StartedBtn className={styles.startedBtnWrap} />
            <div className={styles.startedBtnBgWrap}>
              <StartedBtnBg />
            </div>
          </div>
          <div className={styles.bottomText}>
            A simple solution to start accepting cryptocurrencies
          </div>
        </div>
      </div>
      <Image
        className={styles.bgImage}
        width={0}
        height={0}
        sizes="100vw"
        src={"/mainPage/mainPageFirstScreen.png"}
        alt="bg"
        unoptimized
        priority
      />
    </SectionWrap>
  );
};

export default FirstScreen;
