"use client";

import React, { useRef } from "react";
import styles from "./styles.module.css";
import { useInView } from "framer-motion";
import cn from "classnames";

const Bg = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  return (
    <div ref={containerRef}>
    <svg 
      width="976"
      height="594"
      viewBox="0 0 976 594"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(styles.bgWrap, { [styles.bgWrap_active]: isInView })}
    >
      <path

        d="M10.2879 596.994L614.609 32.7075C619.238 28.3922 626.519 33.4761 623.998 39.316L381.432 598.14L10.2879 596.994Z"
        fill="url(#paint0_linear_2041_6320)"
      />
      <path
        d="M705.154 599.158C741.442 545.441 775.49 494.149 790.941 470.774C793.954 466.235 800.978 467.918 801.611 473.294L817.122 599.5L705.154 599.158Z"
        fill="url(#paint1_linear_2041_6320)"
      />
      <path
        d="M581.15 769.773C584.639 758.244 608.362 687.917 638.569 598.947L705.155 599.158C643.432 690.643 575.305 789.231 581.15 769.773Z"
        fill="url(#paint2_linear_2041_6320)"
      />
      <path
        d="M440.881 598.363L766.505 187.962C770.601 182.776 778.776 187.244 776.668 193.475C751.266 268.035 686.736 457.227 638.598 599L440.881 598.363Z"
        fill="url(#paint3_linear_2041_6320)"
      />
      <path
        d="M327.266 722.934L381.433 598.141L440.852 598.311L337.254 728.881C333.003 734.286 324.57 729.208 327.266 722.934Z"
        fill="url(#paint4_linear_2041_6320)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2041_6320"
          x1="712.763"
          y1="200.35"
          x2="1.70018"
          y2="580.993"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="#8421F7" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2041_6320"
          x1="828.098"
          y1="521.87"
          x2="700.357"
          y2="590.251"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="#8421F7" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2041_6320"
          x1="719.912"
          y1="626.781"
          x2="551.43"
          y2="716.973"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="#8421F7" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2041_6320"
          x1="844.896"
          y1="316.947"
          x2="413.771"
          y2="547.735"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="#8421F7" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_2041_6320"
          x1="449.959"
          y1="615.335"
          x2="307.831"
          y2="691.419"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="#8421F7" />
        </linearGradient>
      </defs>
    </svg>
    </div>
  );
};

export default Bg;
