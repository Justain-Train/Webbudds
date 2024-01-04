import framer from 'framer-motion';
import React from 'react';
import Link from 'next/link';
import Button from './Button';


const Navbar = () => {
  return (
    <nav className="flex flex-wrap pb-3 pt-8 items-center justify-between border-b-2 border-b-navy ">
      <div className="flex items-center">
        <Link href="/" className="text-white font-bold text-[45px] pl-5">
        •W•EBBUDDS
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="/about" className="text-white text-xl font-medium mr-6">
          About
        </Link>
        <Link href="/contact" className="text-white text-xl font-medium mr-6">
          Contact
        </Link>
        <Button href="/login">Add A Resource</Button>
        <button className="bg-yellow-400 text-white py-2 px-4 rounded"></button>
      </div>
    </nav>
  );
};

export default Navbar;
