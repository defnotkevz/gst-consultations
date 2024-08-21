import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      title:
        "Seeks to amend Notification No. 52/2018-Cental Tax, dated 20.09.2018",
      date: "10 July 2024",
      category: "15/2024 - Central Tax",
      english: "www.google.com",
      hindi: "m@example.com",
    },
    {
      id: "728ed52f",
      title:
        "Seeks to exempt the registered person whose aggregate turnover in FY 2023-24 is upto Rs 2 crores, from filing annual return for the said financial year.",
      date: "1 July 2024",
      category: "14/2024 - Central Tax",
      english: "www.google.com",
      hindi: "m@example.com",
    },
    {
      id: "728ed52f",
      title:
        "Seeks to rescind Notification no. 27/2022 - Central Tax dated 26.12.2022",
      date: "10 July 2024",
      category: "15/2024 - Central Tax",
      english: "www.google.com",
      hindi: "m@example.com",
    },
    {
      id: "728ed52f",
      title:
        "Seeks to make amendments (Amendment, 2024) to the CGST Rules, 2017.",
      date: "10 July 2024",
      category: "15/2024 - Central Tax",
      english: "www.google.com",
      hindi: "m@example.com",
    },
    {
      id: "728ed52f",
      title:
        "Seeks to amend Notification No. 02/2017-CT dated 19th June, 2017 to assign district of Kotputli-Behror to CGST Alwar Commissionerate",
      date: "10 July 2024",
      category: "15/2024 - Central Tax",
      english: "www.google.com",
      hindi: "m@example.com",
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="px-0 py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
