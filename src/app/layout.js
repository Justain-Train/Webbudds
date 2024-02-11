import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "WebBudds",
  description: "WebBudds is a collection of resources for web developers, carefully curated by web developers to help you learn and grow in your web dev journey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className ={inter.className}>
       <head>
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg"></link>
        <link rel="icon" type="image/png" href="/images/favicon.png"></link>
      </head>
      <body className="px-[6%] md:px-[8%] font-inter h-[50rem] w-full dark:bg-black bg-black dark:bg-dot-white/[0.08] bg-dot-white/[0.08] relative box-border">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
