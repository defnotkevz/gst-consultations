import { FC } from "react";

import { Quattrocento, Quattrocento_Sans } from "next/font/google";

const quattroSans = Quattrocento_Sans({
  weight: ["700"],
  subsets: ["latin"],
});

interface CardComponentProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const CardComponent: FC<CardComponentProps> = ({ title, desc, icon }) => {
  return (
    <div className="bg-white w-[392px] h-[188px] rounded-xl p-6 drop-shadow-lg">
      <div className="flex h-1/2 gap-x-8 items-center justify-center">
        <div>{icon}</div>
        <div className={`text-black text-2xl ${quattroSans.className} w-full`}>
          {title}
        </div>
      </div>
      <div className="text-black text-sm font-sans pl-[62px]">
        {desc}{" "}
        <span className="text-blue-400 hover:underline hover:cursor-pointer">
          Learn more
        </span>
      </div>
    </div>
  );
};

export default CardComponent;
