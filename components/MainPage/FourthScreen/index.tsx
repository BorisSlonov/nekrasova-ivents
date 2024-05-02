"use client";

import React, { useRef } from "react";
import styles from "./styles.module.css";
import StartedBtn from "@/components/ui/StartedBtn";
import Image from "next/image";
import Bg from "./icons/bg";

import { useInView } from "framer-motion";
import cn from "classnames";


const FourthScreen = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  return (
    <section ref={containerRef} className={styles.fourthScreen}>
      <div className={styles.content}>
        <div className={styles.topContent}>
          <div className={styles.topText}>
            <div className={cn(styles.titleWrap, { [styles.titleWrap_active]: isInView })}>
              <h2 className={styles.title}>Multicurrency support</h2>
              <div className={styles.descr}>
                Say Goodbye to traditional payment barriers and Hello to the
                future of commerce with Crypto Payments for your Business.
              </div>
            </div>
          </div>

          <div className={cn(styles.titleWrap, { [styles.titleWrap_active]: isInView })}>
            <StartedBtn className={styles.startedBtn} />
          </div>
        </div>
        <div className={styles.coinsBlock}>
          <div className={styles.coinsHeader}>
            <h2 className={styles.coinsTitle}>Multicurrency support</h2>
            <div className={styles.coinsDescr}>
              Say Goodbye to traditional payment barriers and Hello to the
              future of commerce with Crypto Payments for your Business.
            </div>
          </div>

          <Image
            width={0}
            height={0}
            className={cn(styles.coinsImg, { [styles.coinsImg_active]: isInView })}
            priority
            unoptimized
            src={"/coins.png"}
            alt="coin image"
          />
        </div>
        <div className={styles.lineBg}>
          <Bg />
        </div>
      </div>
    </section>
  );
};

export default FourthScreen;
