import React from 'react';
import Link from 'next/link';
import Button from "../Buttons/Button";


const Navbar = () => {
  return (
    <nav className="flex flex-wrap pb-3 pt-8 items-center justify-between border-b-2 border-b-navy ">
      <div className="flex items-center">
        <Link
          href="/"
          className="text-white font-bold text-[45px] pl-5"
        >
          •W•EBBUDDS
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="/about" className="text-white text-xl font-[500] mr-6">
          About
        </Link>
        <Link href="/contact" className="text-white text-xl font-medium mr-6">
          Contact
        </Link>
        <Button target="_blank" href="https://docs.google.com/forms/d/1kdjNjMQPWKsy6fbYLEJSec7EcaBj74f00IeaQz1uOKw">Add A Resource</Button>
      </div>
    </nav>
  );
};

export default Navbar;
