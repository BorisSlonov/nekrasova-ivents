import React from "react";

interface Props {
  className?: string;
}

const ArrowIcon = ({ className }: Props) => {
  return (
    <svg
      width="137"
      height="30"
      viewBox="0 0 137 30"
      fill="none"
      className={className}
    >
      <path
        d="M2 13C0.89543 13 0 13.8954 0 15C0 16.1046 0.89543 17 2 17V13ZM136.414 16.4142C137.195 15.6332 137.195 14.3668 136.414 13.5858L123.686 0.857864C122.905 0.0768156 121.639 0.0768156 120.858 0.857864C120.077 1.63891 120.077 2.90524 120.858 3.68629L132.172 15L120.858 26.3137C120.077 27.0948 120.077 28.3611 120.858 29.1421C121.639 29.9232 122.905 29.9232 123.686 29.1421L136.414 16.4142ZM2 17H135V13H2V17Z"
        fill="#F8E32B"
      />
    </svg>
  );
};

export default ArrowIcon;
