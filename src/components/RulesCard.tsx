import { FC } from "react";
import SecondaryButton from "./SecondaryButton";
import Link from "next/link";

interface RulesCardProps {}

const RulesCard: FC<RulesCardProps> = ({}) => {
  return (
    <div className="bg-white flex w-1/2 rounded-xl p-6 drop-shadow-lg">
      <div className="w-3/4 flex flex-col gap-y-3">
        <h4 className="font-bold text-2xl">Rules</h4>
        <div className="flex mt-4 flex-col gap-y-3">
          <div>
            <p>CGST Rules, 2017</p>
            <Link href="/" className="text-[#296AD5] hover:underline">
              View Details
            </Link>
          </div>
          <div>
            <p>IGST Rules, 2017</p>
            <Link href="/" className="text-[#296AD5] hover:underline">
              View Details
            </Link>
          </div>
          <div>
            <p>KGST Rules, 2017</p>
            <Link href="/" className="text-[#296AD5] hover:underline">
              View Details
            </Link>
          </div>
          <div>
            <p>UTGST Rules, 2017</p>
            <Link href="/" className="text-[#296AD5] hover:underline">
              View Details
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/4 max-h-11 flex justify-end">
        <SecondaryButton text="View All" />
      </div>
    </div>
  );
};

export default RulesCard;
