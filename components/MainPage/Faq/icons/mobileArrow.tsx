import React from "react";

interface Props {
  className?: string;
}

const MobileArrow = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="41"
      height="30"
      viewBox="0 0 41 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 13C0.89543 13 0 13.8954 0 15C0 16.1046 0.89543 17 2 17V13ZM40.4142 16.4142C41.1953 15.6332 41.1953 14.3668 40.4142 13.5858L27.6863 0.857864C26.9052 0.0768156 25.6389 0.0768156 24.8579 0.857864C24.0768 1.63891 24.0768 2.90524 24.8579 3.68629L36.1716 15L24.8579 26.3137C24.0768 27.0948 24.0768 28.3611 24.8579 29.1421C25.6389 29.9232 26.9052 29.9232 27.6863 29.1421L40.4142 16.4142ZM2 17H39V13H2V17Z"
        fill="#F8E32B"
      />
    </svg>
  );
};

export default MobileArrow;
