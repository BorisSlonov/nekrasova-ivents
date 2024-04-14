import React from "react";

interface Props {
  className?: string;
}

const ArrowIcon = ({ className }: Props) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24 56L56 24M56 24L56 48M56 24L32 24"
        stroke="#F8E32B"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
