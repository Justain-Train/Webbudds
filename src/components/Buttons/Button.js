'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';


const Button = ({ children, href, ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: [null, 1.04, 1.03] }}
      transition={{ duration: 0.3 }}
    >
      <Link
        className={` text-black text-semi md:text-base md:px-4 xl:px-5 xl:text-xl text-opacity-[85%] rounded-[20px] font-semibold mr-3 px-3 inline-flex h-12 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#d8d6d6,10%,#e1c194,44%,#d8d6d6)] bg-[length:200%_100%] text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`}
        href={href}
        {...props}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default Button;

      
  
      
      
      