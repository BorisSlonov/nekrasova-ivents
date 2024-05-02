"use client";

import React, { useRef } from "react";
import styles from "./styles.module.css";
import StartedBtn from "@/components/ui/StartedBtn";
import { useInView } from "framer-motion";
import cn from "classnames";

const StartedContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  return (
    <div ref={containerRef}  className={cn(styles.startedContent, { [styles.startedContent_active]: isInView })}>
      <div className={styles.textWrap}>
        <div className={styles.title}>Unlock the Power of Crypto:</div>
        <div className={styles.descr}>
          Integrate Cryptocurrency Payments into Your Business Effortlessly!
        </div>
      </div>
      <StartedBtn className={styles.startedBtn} />
    </div>
  );
};

export default StartedContent;
