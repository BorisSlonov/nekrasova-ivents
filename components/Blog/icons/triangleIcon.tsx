import React from "react";

interface Props {
  className?: string;
}

const TriangleIcon = ({ className }: Props) => {
  return (
    <svg
      width="169"
      height="159"
      viewBox="0 0 169 159"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M41.5461 24.7222L6.71742 84.8387C-12.3732 117.802 11.5008 159 49.682 159H119.318C157.499 159 181.373 117.802 162.283 84.8387L127.454 24.7222C108.363 -8.24074 60.6367 -8.24074 41.5461 24.7222Z"
        fill="#F8E32B"
      />
    </svg>
  );
};

export default TriangleIcon;
