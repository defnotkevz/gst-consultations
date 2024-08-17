import { FC } from "react";

interface PrimaryButtonProps {
  text: string;
  type?: "submit" | "reset" | "button";
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ text, type }) => {
  return (
    <button
      type={type}
      className="px-[20px] py-[10px] border border-[#296AD5] rounded-xl bg-[#296AD5] text-white ease-in-out duration-300 hover:bg-[#ffffff] hover:text-[#296AD5] hover:border"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
