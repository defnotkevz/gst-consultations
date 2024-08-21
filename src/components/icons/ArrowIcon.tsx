import { FC } from "react";

interface ArrowIconProps {}

const ArrowIcon: FC<ArrowIconProps> = ({}) => {
  return (
    <svg
      width="22"
      height="10"
      viewBox="0 0 22 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.3333 1L11 9L1.66667 1"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
