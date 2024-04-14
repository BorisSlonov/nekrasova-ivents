"use client";

import { motion } from "framer-motion";
import React from "react";

interface Props {
  className?: string;
}

const Vectors = ({ className }: Props) => {
  return (
    <motion.svg
      width="521"
      height="273"
      viewBox="0 0 521 273"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_3009_10743)">
        <path
          d="M174.053 128.645C95.7664 169.917 21.7381 209.716 -11.9186 227.895C-18.4698 231.416 -25.8399 224.865 -23.1375 217.987L39.5081 56.0903L174.053 128.645Z"
          fill="url(#paint0_linear_3009_10743)"
        />
        <path
          d="M433.234 3.18987C421.605 14.8182 347.741 84.1788 254.059 171.801L174.053 128.645C307.287 58.3017 452.805 -16.4637 433.234 3.18987Z"
          fill="url(#paint1_linear_3009_10743)"
        />
        <path
          d="M491.62 299.876L-164.727 584.033C-172.997 587.637 -179.958 576.991 -173.407 570.849C-94.7927 497.476 104.773 311.341 254.058 171.719L491.62 299.876Z"
          fill="url(#paint2_linear_3009_10743)"
        />
        <path
          d="M708.625 223.145L563.025 338.446L491.617 299.958L700.436 209.552C709.034 205.785 715.913 217.331 708.625 223.145Z"
          fill="url(#paint3_linear_3009_10743)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_3009_10743"
          x1="-23.7198"
          y1="142.455"
          x2="174.088"
          y2="142.455"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="#8421F7" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3009_10743"
          x1="174.088"
          y1="85.8895"
          x2="434.985"
          y2="85.8895"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="#8421F7" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_3009_10743"
          x1="-175.972"
          y1="378.279"
          x2="491.629"
          y2="378.279"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="#8421F7" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_3009_10743"
          x1="491.626"
          y1="273.599"
          x2="711.712"
          y2="273.599"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="#8421F7" />
        </linearGradient>
        <clipPath id="clip0_3009_10743">
          <rect width="521" height="273" fill="white" />
        </clipPath>
      </defs>
    </motion.svg>
  );
};

export default Vectors;
