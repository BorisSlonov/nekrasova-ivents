import React from "react";

interface Props {
  className?: string;
}
const Arrow = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2079_4620)">
        <path
          d="M2.3999 21.6004L21.5999 2.40039M21.5999 2.40039H7.1999M21.5999 2.40039V16.8004"
          stroke="#5603A9"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2079_4620">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Arrow;
