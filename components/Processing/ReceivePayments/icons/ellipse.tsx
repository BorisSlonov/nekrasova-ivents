import React from "react";

interface Props {
  className?: string;
}

const Ellipse = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="1072"
      height="560"
      viewBox="0 0 1072 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1072 559.5C1072 431.057 1027.81 306.525 946.842 206.814C865.877 107.104 753.07 38.2862 627.363 11.9174C501.656 -14.4514 370.704 3.23409 256.495 62.0044C142.287 120.775 51.7763 217.051 0.161957 334.667L2.72363 335.791C54.0799 218.763 144.138 122.968 257.775 64.4918C371.413 6.01541 501.71 -11.5817 626.789 14.6553C751.867 40.8923 864.11 109.366 944.67 208.578C1025.23 307.79 1069.2 431.699 1069.2 559.5H1072Z"
        fill="#F8E32B"
      />
    </svg>
  );
};

export default Ellipse;
