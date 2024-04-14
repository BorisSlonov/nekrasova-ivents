import React from "react";

interface Props {
  className?: string;
}

const CheckedIcon = ({ className }: Props) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 17.2857L10.8571 24.1429L28 7"
        stroke="#5603A9"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckedIcon;
