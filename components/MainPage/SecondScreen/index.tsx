"use client";

import React, { useRef } from "react";
import styles from "./styles.module.css";
import CardList from "./CardList";
import BigCircle from "@/components/ui/BigCircle";
import { useInView } from "framer-motion";
import cn from "classnames";


const SecondScreen = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  return (
    <section ref={containerRef} className={styles.secondScreen}>
      <div className={styles.contentWrap}>
        <div className={styles.content}>
          <div className={cn(styles.titleWrap, { [styles.titleWrap_active]: isInView })} >
            <span className={styles.subTitle}>
              Full circle of payments products
            </span>
            <h2 className={styles.title}>TAILORED TO YOUR NEEDS</h2>
          </div>
          <CardList />
        </div>
        <BigCircle className={cn(styles.animeBigCircle, { [styles.animeBigCircle_active]: isInView })} />
      </div>
    </section>
  );
};

export default SecondScreen;
