import { FC } from "react";

interface CertificateProps {}

const CertificateIcon: FC<CertificateProps> = ({}) => {
  return (
    <svg
      width="30"
      height="26"
      viewBox="0 0 30 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.66602 11.6667C1.66602 6.63867 1.66602 4.124 3.22868 2.56267C4.79002 1 7.30468 1 12.3327 1H17.666C22.694 1 25.2087 1 26.77 2.56267C28.3327 4.124 28.3327 6.63867 28.3327 11.6667V14.3333C28.3327 19.3613 28.3327 21.876 26.77 23.4373C25.2087 25 22.694 25 17.666 25H12.3327C7.30468 25 4.79002 25 3.22868 23.4373C1.66602 21.876 1.66602 19.3613 1.66602 14.3333V11.6667Z"
        stroke="#296AD5"
        stroke-width="2"
      />
      <path
        d="M6.3327 10.3333H14.3327M7.66604 15.6667H12.9994M18.9994 25V1"
        stroke="#296AD5"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default CertificateIcon;
