import React from "react";

interface Props {
  className?: string;
}

const CornerIcon = ({ className }: Props) => {
  return (
    <svg
      width="126"
      height="126"
      viewBox="0 0 126 126"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M5 126V5H126" stroke="#F8E32B" strokeWidth="10" />
    </svg>
  );
};

export default CornerIcon;
