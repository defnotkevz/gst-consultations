import { FC } from "react";
import { Quattrocento } from "next/font/google";
import { ProfileForm } from "./Form";

const quattro = Quattrocento({
  weight: ["700"],
  subsets: ["latin"],
});

interface InfoFormProps {}

const InfoForm: FC<InfoFormProps> = ({}) => {
  return (
    <div className="w-full text-black gap-x-32 flex my-20">
      <div className="w-1/2 flex flex-col gap-y-3">
        <h3 className={`text-3xl text-[#296AD5] ${quattro.className}`}>
          Any questions? Let&apos;s have a conversation!
        </h3>
        <p className="text-xl">You can also reach us at:</p>
        <div className="text-xl">
          <p>New Office</p>
          <p>Aluva</p>
          <p>Ernakulam, Kerala - 683106</p>
        </div>
        <div className="text-xl">
          <p>Office Phone: +91 921231 23123</p>
          <p>
            Mail:{" "}
            <a
              className="text-[#296AD5] hover:underline"
              href="mailto:hello@gstconsultations.com"
            >
              hello@gstconsultations.com
            </a>
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <ProfileForm />
      </div>
    </div>
  );
};

export default InfoForm;
