import React from "react";

interface Props {
  className?: string;
}

const TriangleIcon = ({ className }: Props) => {
  return (
    <svg
      width="80"
      height="75"
      viewBox="0 0 80 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19.4557 11.6175L3.14572 39.8675C-5.79428 55.3575 5.38572 74.7175 23.2657 74.7175H55.8757C73.7557 74.7175 84.9357 55.3575 75.9957 39.8675L59.6857 11.6175C50.7457 -3.8725 28.3957 -3.8725 19.4557 11.6175Z"
        fill="#F8E32B"
      />
    </svg>
  );
};

export default TriangleIcon;
