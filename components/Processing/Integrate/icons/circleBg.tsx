import React from "react";

interface Props {
  className?: string;
}

const CircleBg = ({ className }: Props) => {
  return (
    <svg
      width="501"
      height="872"
      viewBox="0 0 501 872"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M728.547 373.88C802.174 501.407 758.467 664.526 630.94 738.154C503.371 811.806 340.294 768.074 266.667 640.547C242.378 598.477 230.858 552.544 230.905 507.234C230.957 415.167 278.775 325.636 364.273 276.274L497.607 507.214C583.063 457.876 630.923 368.32 630.975 276.253C670.238 298.867 704.258 331.81 728.547 373.88Z"
        fill="url(#paint0_linear_2001_2738)"
        fillOpacity="0.5"
      />
      <path
        d="M595.213 142.94C619.503 185.01 631.022 230.944 630.975 276.253C630.923 368.32 583.105 457.851 497.607 507.214L364.273 276.274C278.775 325.636 230.957 415.167 230.905 507.234C191.642 484.62 157.623 451.677 133.333 409.607C59.6814 282.038 103.413 118.961 230.94 45.3335C358.466 -28.294 521.562 15.3713 595.213 142.94Z"
        fill="url(#paint1_linear_2001_2738)"
        fillOpacity="0.5"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2001_2738"
          x1="38.6395"
          y1="772.191"
          x2="581.325"
          y2="458.872"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="#8421F7" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2001_2738"
          x1="735.525"
          y1="61.915"
          x2="313.414"
          y2="305.621"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="#8421F7" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CircleBg;
