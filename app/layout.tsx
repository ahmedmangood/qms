import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--roboto",
});

export const metadata: Metadata = {
  title: "QMS - queue management system",
  description:
    "Minimize wait times and maximize customer flow to scale operations and rev up revenues with Wavetec’s Enterprise Queue Management Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
