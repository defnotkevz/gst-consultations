import { FC } from "react";
import ActsCard from "./ActsCard";
import RulesCard from "./RulesCard";
import { Quattrocento } from "next/font/google";

const quattro = Quattrocento({
  weight: ["700"],
  subsets: ["latin"],
});

interface ActsAndRulesProps {}

const ActsAndRules: FC<ActsAndRulesProps> = ({}) => {
  return (
    <div id="acts" className="w-full text-black my-20 flex flex-col gap-y-10">
      <div className="text-center flex flex-col gap-y-2">
        <h3 className={`text-3xl ${quattro.className} text-[#296AD5]`}>
          GST Acts and Rules
        </h3>
        <p className="text-xl">
          The foundation of the GST system, comprising key legislation and
          detailed rules
        </p>
      </div>
      <div className="flex gap-4">
        <ActsCard />
        <RulesCard />
      </div>
    </div>
  );
};

export default ActsAndRules;
