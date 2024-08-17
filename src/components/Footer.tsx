import { FC } from "react";
import { Quattrocento } from "next/font/google";

const quattro = Quattrocento({
  weight: ["700"],
  subsets: ["latin"],
});

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="w-full text-black flex">
      <div className="w-1/2 flex flex-col gap-y-3">
        <h3
          className={`text-3xl text-[#296AD5] font-bold ${quattro.className}`}
        >
          Disclaimer
        </h3>
        <p className="text-xs">
          The information provided on this website does not necessarily reflect
          the views of the firm or its administrators. It is based on data
          received from surveys, nominations, industry sources, and content from
          the Central Board of Indirect Taxes and Customs (CBIC) website, which
          is owned by the Indian government. The contents are solely for
          informational purposes and are not intended for dissemination. This
          website is not an advertisement or solicitation for legal services.
          Neither the firm nor its partners have made any solicitation,
          invitation, or inducement to create an attorney-client relationship.
        </p>
        <p className="text-xs">
          Please note that the contents of this website are the intellectual
          property of the firm, except for the portions derived from the CBIC
          website. Engaging any counsel or acting upon information from this
          website should be done after conducting your own due diligence. There
          has been no recommendation, and each individual must carry out their
          own diligence before engaging any counsel or relying on the
          information provided, at their own risk, when seeking legal
          representation.
        </p>
      </div>
      <div className="w-1/2 relative">
        <div className="absolute bottom-0 right-0 text-right text-[#296AD5]">
          <h3 className={`text-xl ${quattro.className}`}>
            GST Consultations Pvt Ltd.
          </h3>
          <p className="text-xs">2024 ©, All Rights Reserved</p>
          <p className="text-xs">
            Website owned and managed by M R Ramachandran
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
