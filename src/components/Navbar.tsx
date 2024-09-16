"use client";
import Link from "next/link";
import { FC } from "react";
import { Quattrocento } from "next/font/google";
import { useRouter } from "next/router";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import { Button } from "./ui/button";

const quattro = Quattrocento({
  weight: ["700"],
  subsets: ["latin"],
});

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <button
            className="hover:text-[#296AD5] ease-in-out duration-300"
            onClick={() => {
              scrollToSection("services");
            }}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className="hover:text-[#296AD5] ease-in-out duration-300"
            onClick={() => {
              scrollToSection("services");
            }}
          >
            Services
          </button>
        </li>
        <li>
          <button
            className="hover:text-[#296AD5] ease-in-out duration-300"
            onClick={() => {
              scrollToSection("notifications");
            }}
          >
            Notifications
          </button>
        </li>
        <li>
          <button
            className="hover:text-[#296AD5] ease-in-out duration-300"
            onClick={() => {
              scrollToSection("acts");
            }}
          >
            Acts and Rules
          </button>
        </li>
        <li>
          <button
            className="hover:text-[#296AD5] ease-in-out duration-300"
            onClick={() => {
              scrollToSection("contact");
            }}
          >
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
