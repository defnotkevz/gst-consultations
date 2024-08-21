import Link from "next/link";
import { FC } from "react";
import { Quattrocento } from "next/font/google";

const quattro = Quattrocento({
  weight: ["700"],
  subsets: ["latin"],
});

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className=" w-full flex py-6 text-black justify-between z-10">
      <Link
        href="/"
        className={`text-[32px] text-[#296AD5] ${quattro.className}`}
      >
        GST Consultations.
      </Link>
      <ul className="flex items-center gap-x-8 list-none">
        <li>
          <Link
            className="hover:text-[#296AD5] ease-in-out duration-300"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[#296AD5] ease-in-out duration-300"
            href="/"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[#296AD5] ease-in-out duration-300"
            href="/"
          >
            Resources
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[#296AD5] ease-in-out duration-300"
            href="/"
          >
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
