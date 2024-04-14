import React from "react";

interface Props {
  className?: string;
}

const Arrow = ({ className }: Props) => {
  return (
    <svg
      width="542"
      height="30"
      viewBox="0 0 542 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2 13C0.89543 13 0 13.8954 0 15C0 16.1046 0.89543 17 2 17V13ZM541.414 16.4142C542.195 15.6332 542.195 14.3668 541.414 13.5858L528.686 0.857864C527.905 0.0768156 526.639 0.0768156 525.858 0.857864C525.077 1.63891 525.077 2.90524 525.858 3.68629L537.172 15L525.858 26.3137C525.077 27.0948 525.077 28.3611 525.858 29.1421C526.639 29.9232 527.905 29.9232 528.686 29.1421L541.414 16.4142ZM2 17H540V13H2V17Z"
        fill="#F8E32B"
      />
    </svg>
  );
};

export default Arrow;
