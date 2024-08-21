import { FC } from "react";
import { Quattrocento } from "next/font/google";
import DemoPage from "./notif-data-table/page";
import { Input } from "./ui/input";
import { DropdownMenuCheckboxCategory } from "./DropDownCategory";
import { DropdownMenuCheckboxYear } from "./DropDownYear";

const quattro = Quattrocento({
  weight: ["700"],
  subsets: ["latin"],
});

interface NotificationsAndCircularsProps {}

const NotificationsAndCirculars: FC<NotificationsAndCircularsProps> = ({}) => {
  return (
    <div className="w-full text-black my-20 flex flex-col gap-y-10">
      <div className="text-center flex flex-col gap-y-2">
        <h3 className={`text-[32px] text-[#296AD5] ${quattro.className}`}>
          Notifications and Circulars
        </h3>
        <p className="text-xl">
          Stay updated with the most recent changes and updates in GST
          compliance
        </p>
      </div>
      <div className="flex flex-col gap-y-10">
        <div className="flex w-full justify-between">
          <Input placeholder="Search" className="w-1/4 text-xl" />
          <div className="flex gap-x-7">
            <DropdownMenuCheckboxCategory />
            <DropdownMenuCheckboxYear />
          </div>
        </div>
        <div>
          <DemoPage />
        </div>
      </div>
    </div>
  );
};

export default NotificationsAndCirculars;
