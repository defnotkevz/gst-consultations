import { FC } from "react";
import { Quattrocento } from "next/font/google";

const quattro = Quattrocento({
  weight: ["700"],
  subsets: ["latin"],
});

interface GSTFormsProps {}

const GSTForms: FC<GSTFormsProps> = ({}) => {
  return (
    <div className="w-full text-black my-20 flex flex-col gap-y-10">
      <div className="text-center flex flex-col gap-y-2">
        <h3 className={`text-[32px] text-[#296AD5] ${quattro.className}`}>
          Essential GST Forms
        </h3>
        <p className="text-xl">
          Key Documents for GST Compliance and Filing from the Official GST
          Portal
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default GSTForms;
