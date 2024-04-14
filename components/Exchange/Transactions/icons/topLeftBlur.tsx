import React from "react";

interface Props {
  className?: string;
}

const TopLeftBlur = ({ className }: Props) => {
  return (
    <svg
      width="538"
      height="610"
      viewBox="0 0 538 610"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_3001_13549)">
        <g filter="url(#filter0_f_3001_13549)">
          <ellipse cx="88" cy="121" rx="250" ry="289" fill="#FCFAFF" />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_3001_13549"
          x="-362"
          y="-368"
          width="900"
          height="978"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="100"
            result="effect1_foregroundBlur_3001_13549"
          />
        </filter>
        <clipPath id="clip0_3001_13549">
          <rect width="538" height="610" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TopLeftBlur;
