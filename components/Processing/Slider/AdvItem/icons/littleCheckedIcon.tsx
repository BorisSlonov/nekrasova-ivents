import React from "react";

interface Props {
  className?: string;
}

const LittleCheckedIcon = ({ className }: Props) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 13.4643L8.14286 18.6071L21 5.75"
        stroke="#5603A9"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LittleCheckedIcon;
