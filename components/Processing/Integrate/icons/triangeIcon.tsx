import React from "react";

interface Props {
  className?: string;
}

const TriangeIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="110"
      height="110"
      viewBox="0 0 110 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M42.3084 9.83227L9.93725 42.2584C-7.8083 60.0394 0.296387 90.3773 24.5195 96.8678L68.6983 108.706C92.9214 115.196 115.109 92.9751 108.632 68.7035L96.8105 24.4361C90.3329 0.164496 60.0539 -7.94871 42.3084 9.83227Z"
        fill="#F8E32B"
      />
    </svg>
  );
};

export default TriangeIcon;
