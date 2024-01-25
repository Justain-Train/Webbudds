import { Inter, PT_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "WebBudds",
  description: "Gateway to Web Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className ={inter.className}>
       <head>
        <link rel="icon" type="image" href="images/favicon-32x32.png"/>
      </head>
      <body className="px-[6%] md:px-[8%] font-inter h-[50rem] w-full dark:bg-black bg-black dark:bg-dot-white/[0.08] bg-dot-white/[0.08] relative box-border">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
