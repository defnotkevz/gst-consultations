import { FC } from "react";
import HeaderGraphic from "./HeaderGraphic";
import PrimaryButton from "./PrimaryButton";
import { Quattrocento } from "next/font/google";
import DropdownButton from "./DropdownButtonCategory";

const quattro = Quattrocento({
  weight: ["700"],
  subsets: ["latin"],
});

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-2/3 px-36 text-black flex items-center justify-start ">
        <div className="gap-y-4 flex flex-col -translate-y-20">
          <div className={`text-4xl font-bold ${quattro.className} text-black`}>
            <h1>Facing a GST Notice?</h1>
            <h1>We&apos;re here to help!</h1>
          </div>
          <h3>
            Expert consultation and guidance for all your GST-related concerns.
          </h3>
          <div className="mt-6 flex gap-x-6">
            <PrimaryButton text="Book a consultation" />
            <button className="text-[#296AD5] hover:underline ">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/3 flex items-center justify-end -translate-y-20">
        <HeaderGraphic />
      </div>
    </div>
  );
};

export default Header;
