import React from "react";

interface Props {
  className?: string;
}

const DashedCircle = ({ className }: Props) => {
  return (
    <svg
      width="1426"
      height="713"
      viewBox="0 0 1426 713"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="713"
        r="711"
        stroke="#9A68CB"
        strokeWidth="4"
        strokeDasharray="24 24"
      />
    </svg>
  );
};

export default DashedCircle;
