"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  title: string;
  date: string;
  category: string;
  english: string;
  hindi: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "title",
    cell: ({ getValue }) => {
      const value = getValue() as string;
      return (
        <div
          rel="noreferrer"
          className="pl-8 pr-6 w-5/6 -mr-96 py-8 rounded-lg"
        >
          {value}
        </div>
      );
    },
    enableResizing: false,
    size: 100,
  },
  {
    accessorKey: "date",
    cell: ({ getValue }) => {
      const value = getValue() as string;
      return (
        <div rel="noreferrer" className="pr-4">
          {value}
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    cell: ({ getValue }) => {
      const value = getValue() as string;
      return (
        <div rel="noreferrer" className="pr-4">
          {value}
        </div>
      );
    },
  },
  {
    accessorKey: "english",
    cell: ({ getValue }) => {
      const value = getValue() as string;
      return (
        <a
          href={value}
          target="_blank"
          rel="noreferrer"
          className="px-[10px] py-[10px] rounded-lg bg-[#white] border border-[#296AD5] hover:bg-[#296AD5] hover:text-[#ffffff] ease-in-out duration-300 text-[#296AD5]"
        >
          English
        </a>
      );
    },
  },
  {
    accessorKey: "hindi",
    cell: ({ getValue }) => {
      const value = getValue() as string;
      return (
        <a
          href={value}
          target="_blank"
          rel="noreferrer"
          className="px-[10px] py-[10px] mr-2 rounded-lg bg-[#white] border border-[#296AD5] hover:bg-[#296AD5] hover:text-[#ffffff] ease-in-out duration-300 text-[#296AD5]"
        >
          हिन्दी
        </a>
      );
    },
  },
];
