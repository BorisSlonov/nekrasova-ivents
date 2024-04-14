"use client";

import SectionWrap from "@/components/ui/SectionWrap";
import React, { use, useEffect, useRef, useState } from "react";

import CryptoPayments from "./CryptoPayments";
import Exchange from "./Exchange";
import EasyApi from "./EasyApi";
import Merchant from "./Merchant";
import { motion, useMotionValue, useScroll } from "framer-motion";
import styles from "./styles.module.css";

import MobileSlider from "./MobileSlider";

export const slides = [CryptoPayments, Exchange, EasyApi, Merchant];

const Slider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const [transition, setTransition] = useState(0);
  const { scrollYProgress } = useScroll({ target: scrollRef });

  useEffect(() => {
    const handleScroll = () => {
      const progress = scrollYProgress.get() * 100;
      if (progress < 25) {
        setTransition(0);
      } else if (progress < 50) {
        setTransition(-1);
      } else if (progress < 75) {
        setTransition(-2);
      } else {
        setTransition(-3);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrollYProgress]);

  const transitionValue = containerRef.current
    ? transition * containerRef.current.clientWidth
    : 0;

  return (
    <motion.div ref={scrollRef} className={styles.sliderContainer}>
      {
        <SectionWrap sticky className={styles.slider}>
          <motion.div
            ref={containerRef}
            animate={{ x: transitionValue }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
            }}
            className={styles.content}
          >
            {slides.map((Slide, i) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ root: scrollRef, amount: 0.5 }}
                  exit={{ opacity: 0 }}
                  className={styles.sliderWrap}
                  key={i}
                >
                  <Slide activeSlide={true} />
                </motion.div>
              );
            })}
          </motion.div>
        </SectionWrap>
      }
      <MobileSlider />
    </motion.div>
  );
};

export default Slider;
