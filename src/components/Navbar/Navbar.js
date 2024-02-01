"use client";

import Link from "next/link";
import Button from "../Buttons/Button";
import { WebbuddLogo } from "../Logo/WebbuddLogo";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap  pt-8 px-5 items-center justify-between mb-[4rem]">
      <Link href="/" className="flex items-center group">
        <div>
          <WebbuddLogo className="text-5xl rounded-xl" />
        </div>
        <span className="ml-1 text-white font-semibold text-5xl tracking-tighter hidden lg:block group-hover:animate-bounce-effect">
          ebBudds
        </span>
      </Link>
      <div className="flex items-center">
        <div>
          <Link
            href="/about"
            className="text-white relative text-base lg:text-xl transition-colors ease-in-out duration-300 hover:text-white/60 font-medium mr-6 hidden md:flex group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 border-b-2 group-hover:w-full ease-in-out duration-300" />
          </Link>
        </div>
        <Link
          href="#contact"
          className="text-white relative text-base lg:text-xl font-medium mr-6 hover:text-white/60 ease-in-out duration-300 hidden md:flex group"
        >
          Contact
          <span className="absolute -bottom-1 left-0 w-0 border-b-2 group-hover:w-full ease-in-out duration-300" />
        </Link>
        <Button
          target="_blank"
          href="https://docs.google.com/forms/d/1kdjNjMQPWKsy6fbYLEJSec7EcaBj74f00IeaQz1uOKw"
        >
          Add A Resource
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
