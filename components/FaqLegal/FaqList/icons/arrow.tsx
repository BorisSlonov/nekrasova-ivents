import React from "react";

interface Props {
  className?: string;
}

const Arrow = ({ className }: Props) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M33.5999 14.3999L14.3999 33.5999M14.3999 33.5999L14.3999 19.1999M14.3999 33.5999L28.7999 33.5999"
        stroke="#1D1D1B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Arrow;
