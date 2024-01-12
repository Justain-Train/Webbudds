
import {cn } from '@/utils/cn.js';
import { motion } from "framer-motion";
import React from "react";

export const Meteors = ({number,className}) => {

  const meteors = new Array(number || 20).fill(true);
  return (
    <div className='absolute top-5 ml-24 mt-28'>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-0 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[2px] before:bg-gradient-to-r before:from-white before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (500 - -400) + -400) + "px",
            animationDelay: Math.random() * (3 - 4) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </div>
  );
};

