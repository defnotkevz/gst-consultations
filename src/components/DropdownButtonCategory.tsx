import * as React from "react";
import { FC } from "react";

interface DropdownButtonProps {
  text: string;
}

const DropdownButton: FC<DropdownButtonProps> = React.forwardRef<
  HTMLButtonElement,
  DropdownButtonProps
>(({ text }, ref) => {
  return (
    <button
      ref={ref}
      className="flex gap-x-2 items-center max-h-11 px-[10px] py-[10px] rounded-lg bg-[#ffffff] border border-[#296AD5] hover:bg-[#296AD5] hover:text-[#ffffff] ease-in-out duration-300 text-[#296AD5]"
    >
      {text}
      <span>
        <svg
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.46966 8.41952L0.396437 2.34742C0.103531 2.05457 0.103531 1.57979 0.396437 1.28697L1.10478 0.578762C1.39719 0.286411 1.87109 0.285848 2.16419 0.577511L7 5.38975L11.8358 0.577511C12.1289 0.285848 12.6028 0.286411 12.8952 0.578762L13.6035 1.28697C13.8964 1.57982 13.8964 2.05461 13.6035 2.34742L7.53034 8.41952C7.23744 8.71234 6.76256 8.71234 6.46966 8.41952Z"
            fill="#296AD5"
          />
        </svg>
      </span>
    </button>
  );
});

export default DropdownButton;
