import React from "react";

interface Props {
  className?: string;
}

const LineIcon = ({ className }: Props) => {
  return (
    <svg
      width="1920"
      height="441"
      viewBox="0 0 1920 441"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1961 2H1096C1068.39 2 1046 24.3858 1046 52V439H907.164H-44.5"
        stroke="#F8E32B"
        strokeWidth="4"
      />
    </svg>
  );
};

export default LineIcon;
