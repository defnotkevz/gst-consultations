import type { Metadata } from "next";
import "./globals.css";
import { Quattrocento_Sans } from "next/font/google";

const quattroSans = Quattrocento_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GST Consultations",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-full ${quattroSans.className}`}>{children}</body>
    </html>
  );
}
