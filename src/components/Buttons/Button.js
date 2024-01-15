'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { Icon } from "@iconify/react";


const Button = ({ children, href, ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: [null, 1.07, 1.05] }}
      transition={{ duration: 0.8 }}
    >
      <Link
        className={` text-black text-semi md:text-base md:px-4 xl:px-5 xl:text-xl text-opacity-[85%] rounded-[20px] group font-semibold mr-3 px-3 inline-flex h-12 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#d8d6d6,10%,#e1c194,44%,#d8d6d6)] bg-[length:200%_100%] text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`}
        href={href}
        target="_blank"
        {...props}
      >
        {children}
        <span>
          <Icon
            icon="tabler:arrow-right"
            rel="noreferrer"
            className= "text-black text-2xl group-hover:text-3xl ease-in-out duration-300"
          />
        </span>
      </Link>
    </motion.div>
  );
};

export default Button;

      
  
      
      
      