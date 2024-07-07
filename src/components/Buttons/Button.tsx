'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { Icon } from "@iconify/react";


const Button = ({ children, href, ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: [null, 1.06, 1.05] }}
      transition={{ duration: 0.2 }}
    >
      <Link
        className={` text-black text-semi focus:outline-none md:text-base md:px-4 xl:px-5 xl:text-xl text-opacity-[85%] rounded-[20px] group font-semibold  px-3 inline-flex h-12 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#d8d6d6,10%,#e1c194,44%,#d8d6d6)] bg-[length:200%_100%] text-slate-400 transition-colors`}
        href={href}
        target="_blank"
        {...props}
      >
        {children}
        <span>
          <Icon
            icon="tabler:arrow-right"
            className= "text-black text-2xl group-hover:text-3xl ease-in-out duration-300"
          />
        </span>
      </Link>
    </motion.div>
  );
};

export default Button;

      
  
      
      
      