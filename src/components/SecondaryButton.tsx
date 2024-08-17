import { FC } from "react";

interface SecondaryButtonProps {
  text: string;
}

const SecondaryButton: FC<SecondaryButtonProps> = ({ text }) => {
  return (
    <button className="px-[10px] py-[10px] rounded-lg bg-[#white] border border-[#296AD5] hover:bg-[#296AD5] hover:text-[#ffffff] ease-in-out duration-300 text-[#296AD5]">
      {text}
    </button>
  );
};

export default SecondaryButton;
