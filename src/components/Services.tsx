import { FC } from "react";
import CardComponent from "./CardComponent";
import PrimaryButton from "./PrimaryButton";
import CardSearchIcon from "./icons/CardSearchIcon";
import DocumentWriteIcon from "./icons/DocumentWriteIcon";
import CertificateIcon from "./icons/CertificateIcon";

import { Quattrocento } from "next/font/google";

const quattro = Quattrocento({
  weight: ["700"],
  subsets: ["latin"],
});

interface ServicesProps {}

const Services: FC<ServicesProps> = ({}) => {
  const ourServices = [
    {
      title: "Notice Assessment",
      desc: "Expert analysis and evaluation of GST notices to determine their accuracy and implications.",
      icon: <CardSearchIcon />,
    },
    {
      title: "Legal Representation",
      desc: "Professional representation and defense in GST-related matters before tax authorities.",
      icon: <DocumentWriteIcon />,
    },
    {
      title: "Filing Appeals",
      desc: "Assistance with filing appeals against unjust GST notices and orders.",
      icon: <CertificateIcon />,
    },
  ];
  return (
    <div className="w-full mt-5 mb-20 gap-y-10 flex flex-col items-center text-black justify-center ">
      <h2 className={`text-3xl text-[#296AD5] ${quattro.className}`}>
        Our Services
      </h2>
      <div className="flex gap-x-10 flex-wrap">
        {ourServices.map((service) => (
          <CardComponent
            title={service.title}
            desc={service.desc}
            icon={service.icon}
          />
        ))}
      </div>
      <PrimaryButton text="Contact us now" />
    </div>
  );
};

export default Services;
